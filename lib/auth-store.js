const fs = require('fs/promises');
const path = require('path');
const {
    StorageConfigError,
    getPostgresPool,
    hasPostgresConfig,
    isServerlessRuntime
} = require('./runtime-store');

const usersFilePath = path.join(process.cwd(), 'data', 'users.json');

function normalizeDbUser(row) {
    if (!row) {
        return null;
    }

    return {
        id: row.id,
        name: row.name,
        email: row.email,
        passwordHash: {
            salt: row.password_salt,
            hash: row.password_hash,
            iterations: Number(row.password_iterations || 100000),
            keylen: Number(row.password_keylen || 64),
            digest: row.password_digest || 'sha512'
        },
        createdAt: row.created_at instanceof Date ? row.created_at.toISOString() : String(row.created_at)
    };
}

async function ensureUsersStore() {
    await fs.mkdir(path.dirname(usersFilePath), { recursive: true });

    try {
        await fs.access(usersFilePath);
    } catch {
        await fs.writeFile(usersFilePath, '[]', 'utf8');
    }
}

async function readLocalUsersStore() {
    await ensureUsersStore();
    const raw = await fs.readFile(usersFilePath, 'utf8');
    return raw ? JSON.parse(raw) : [];
}

async function writeLocalUsersStore(users) {
    await ensureUsersStore();
    await fs.writeFile(usersFilePath, JSON.stringify(users, null, 2), 'utf8');
}

function ensurePersistentStoreAvailable() {
    if (hasPostgresConfig()) {
        return;
    }

    if (isServerlessRuntime()) {
        throw new StorageConfigError('Thiếu cấu hình Postgres cho production. Hãy set POSTGRES_URL hoặc DATABASE_URL trên Vercel.');
    }
}

async function findUserByEmail(email) {
    ensurePersistentStoreAvailable();

    if (hasPostgresConfig()) {
        const pool = getPostgresPool();
        const result = await pool.query(
            `
                SELECT id, name, email, password_salt, password_hash, password_iterations, password_keylen, password_digest, created_at
                FROM users
                WHERE email = $1
                LIMIT 1
            `,
            [email]
        );

        return normalizeDbUser(result.rows[0]);
    }

    const users = await readLocalUsersStore();
    return users.find(user => user.email === email) || null;
}

async function findUserById(id) {
    ensurePersistentStoreAvailable();

    if (hasPostgresConfig()) {
        const pool = getPostgresPool();
        const result = await pool.query(
            `
                SELECT id, name, email, password_salt, password_hash, password_iterations, password_keylen, password_digest, created_at
                FROM users
                WHERE id = $1
                LIMIT 1
            `,
            [id]
        );

        return normalizeDbUser(result.rows[0]);
    }

    const users = await readLocalUsersStore();
    return users.find(user => user.id === id) || null;
}

async function createUser(user) {
    ensurePersistentStoreAvailable();

    if (hasPostgresConfig()) {
        const pool = getPostgresPool();
        await pool.query(
            `
                INSERT INTO users (
                    id,
                    name,
                    email,
                    password_salt,
                    password_hash,
                    password_iterations,
                    password_keylen,
                    password_digest,
                    created_at,
                    updated_at
                ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, NOW(), NOW())
            `,
            [
                user.id,
                user.name,
                user.email,
                user.passwordHash.salt,
                user.passwordHash.hash,
                Number(user.passwordHash.iterations || 100000),
                Number(user.passwordHash.keylen || 64),
                user.passwordHash.digest || 'sha512'
            ]
        );
        return user;
    }

    const users = await readLocalUsersStore();
    users.push(user);
    await writeLocalUsersStore(users);
    return user;
}

module.exports = {
    StorageConfigError,
    createUser,
    findUserByEmail,
    findUserById
};