const fs = require('fs/promises');
const path = require('path');

function getRatingsFilePath() {
    if (process.env.VERCEL) {
        return path.join('/tmp', 'nauan-ratings.json');
    }

    return path.join(process.cwd(), 'data', 'ratings.json');
}

async function ensureRatingsStore() {
    const ratingsFilePath = getRatingsFilePath();
    await fs.mkdir(path.dirname(ratingsFilePath), { recursive: true });

    try {
        await fs.access(ratingsFilePath);
    } catch {
        await fs.writeFile(ratingsFilePath, '{}', 'utf8');
    }
}

async function readRatingsStore() {
    await ensureRatingsStore();
    const raw = await fs.readFile(getRatingsFilePath(), 'utf8');
    return raw ? JSON.parse(raw) : {};
}

async function writeRatingsStore(ratings) {
    await ensureRatingsStore();
    await fs.writeFile(getRatingsFilePath(), JSON.stringify(ratings, null, 2), 'utf8');
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

module.exports = {
    readRatingsStore,
    writeRatingsStore,
    summarizeRatings
};