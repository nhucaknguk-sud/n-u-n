const { Pool } = require('pg');

class StorageConfigError extends Error {
    constructor(message) {
        super(message);
        this.name = 'StorageConfigError';
    }
}

let postgresPool = null;

function getPostgresConnectionString() {
    return (
        process.env.POSTGRES_URL ||
        process.env.POSTGRES_PRISMA_URL ||
        process.env.DATABASE_URL ||
        ''
    );
}

function hasPostgresConfig() {
    return Boolean(getPostgresConnectionString());
}

function getPostgresPool() {
    if (!hasPostgresConfig()) {
        return null;
    }

    if (!postgresPool) {
        const connectionString = getPostgresConnectionString();
        const useSSL = !/localhost|127\.0\.0\.1/.test(connectionString);

        postgresPool = new Pool({
            connectionString,
            ssl: useSSL ? { rejectUnauthorized: false } : undefined,
            max: 5
        });
    }

    return postgresPool;
}

function isServerlessRuntime() {
    return Boolean(process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME);
}

module.exports = {
    StorageConfigError,
    getPostgresPool,
    hasPostgresConfig,
    isServerlessRuntime
};