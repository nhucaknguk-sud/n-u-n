const fs = require('fs/promises');
const path = require('path');
const {
    StorageConfigError,
    getPostgresPool,
    hasPostgresConfig,
    isServerlessRuntime
} = require('./runtime-store');

const ratingsFilePath = path.join(process.cwd(), 'data', 'ratings.json');

async function ensureRatingsStore() {
    await fs.mkdir(path.dirname(ratingsFilePath), { recursive: true });

    try {
        await fs.access(ratingsFilePath);
    } catch {
        await fs.writeFile(ratingsFilePath, '{}', 'utf8');
    }
}

async function readLocalRatingsStore() {
    await ensureRatingsStore();
    const raw = await fs.readFile(ratingsFilePath, 'utf8');
    return raw ? JSON.parse(raw) : {};
}

async function writeLocalRatingsStore(ratings) {
    await ensureRatingsStore();
    await fs.writeFile(ratingsFilePath, JSON.stringify(ratings, null, 2), 'utf8');
}

function ensurePersistentStoreAvailable() {
    if (hasPostgresConfig()) {
        return;
    }

    if (isServerlessRuntime()) {
        throw new StorageConfigError('Thiếu cấu hình Postgres cho ratings trên production. Hãy set POSTGRES_URL hoặc DATABASE_URL trên Vercel.');
    }
}

function summarizeRatings(ratings) {
    return Object.fromEntries(
        Object.entries(ratings).map(([recipeId, details]) => {
            const count = Number(details.count || 0);
            const total = Number(details.total || 0);
            const average = count > 0 ? total / count : 0;

            return [recipeId, {
                average: Number(average.toFixed(1)),
                count
            }];
        })
    );
}

async function getRatingsSummary() {
    ensurePersistentStoreAvailable();

    if (hasPostgresConfig()) {
        const pool = getPostgresPool();
        const result = await pool.query(
            `
                SELECT recipe_id, ROUND(AVG(rating)::numeric, 1) AS average, COUNT(*)::int AS count
                FROM recipe_ratings
                GROUP BY recipe_id
            `
        );

        return Object.fromEntries(
            result.rows.map(row => [
                String(row.recipe_id),
                {
                    average: Number(row.average || 0),
                    count: Number(row.count || 0)
                }
            ])
        );
    }

    const ratings = await readLocalRatingsStore();
    return summarizeRatings(ratings);
}

async function saveRating(recipeId, clientId, rating) {
    ensurePersistentStoreAvailable();

    if (hasPostgresConfig()) {
        const pool = getPostgresPool();

        await pool.query(
            `
                INSERT INTO recipe_ratings (recipe_id, client_id, rating, created_at, updated_at)
                VALUES ($1, $2, $3, NOW(), NOW())
                ON CONFLICT (recipe_id, client_id)
                DO UPDATE SET rating = EXCLUDED.rating, updated_at = NOW()
            `,
            [recipeId, clientId, rating]
        );

        const summaryResult = await pool.query(
            `
                SELECT ROUND(AVG(rating)::numeric, 1) AS average, COUNT(*)::int AS count
                FROM recipe_ratings
                WHERE recipe_id = $1
            `,
            [recipeId]
        );

        const row = summaryResult.rows[0] || {};
        return {
            average: Number(row.average || 0),
            count: Number(row.count || 0)
        };
    }

    const ratings = await readLocalRatingsStore();
    const existing = ratings[recipeId] || {
        total: 0,
        count: 0,
        users: {}
    };

    const previousRating = Number(existing.users[clientId] || 0);
    if (previousRating > 0) {
        existing.total -= previousRating;
    } else {
        existing.count += 1;
    }

    existing.users[clientId] = rating;
    existing.total += rating;
    ratings[recipeId] = existing;

    await writeLocalRatingsStore(ratings);

    const summary = summarizeRatings(ratings)[recipeId] || { average: 0, count: 0 };
    return summary;
}

module.exports = {
    StorageConfigError,
    getRatingsSummary,
    saveRating
};