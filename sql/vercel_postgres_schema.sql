-- Vercel Postgres schema for Nau An Viet
-- Run this in Vercel Postgres SQL editor or via psql.

BEGIN;

CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE IF NOT EXISTS public.users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(120) NOT NULL,
    email VARCHAR(190) NOT NULL UNIQUE,
    password_salt CHAR(32) NOT NULL,
    password_hash CHAR(128) NOT NULL,
    password_iterations INTEGER NOT NULL DEFAULT 100000,
    password_keylen INTEGER NOT NULL DEFAULT 64,
    password_digest VARCHAR(20) NOT NULL DEFAULT 'sha512',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_users_created_at ON public.users (created_at DESC);

CREATE TABLE IF NOT EXISTS public.recipe_ratings (
    recipe_id VARCHAR(64) NOT NULL,
    client_id VARCHAR(128) NOT NULL,
    rating SMALLINT NOT NULL CHECK (rating BETWEEN 1 AND 5),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    PRIMARY KEY (recipe_id, client_id)
);

CREATE INDEX IF NOT EXISTS idx_recipe_ratings_recipe_id ON public.recipe_ratings (recipe_id);
CREATE INDEX IF NOT EXISTS idx_recipe_ratings_updated_at ON public.recipe_ratings (updated_at DESC);

CREATE OR REPLACE VIEW public.recipe_ratings_summary AS
SELECT
    recipe_id,
    ROUND(AVG(rating)::numeric, 1) AS average,
    COUNT(*)::integer AS count
FROM public.recipe_ratings
GROUP BY recipe_id;

-- Keep updated_at fresh on UPDATE operations.
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_users_updated_at ON public.users;
CREATE TRIGGER trg_users_updated_at
BEFORE UPDATE ON public.users
FOR EACH ROW
EXECUTE FUNCTION public.set_updated_at();

DROP TRIGGER IF EXISTS trg_recipe_ratings_updated_at ON public.recipe_ratings;
CREATE TRIGGER trg_recipe_ratings_updated_at
BEFORE UPDATE ON public.recipe_ratings
FOR EACH ROW
EXECUTE FUNCTION public.set_updated_at();

COMMIT;

-- Optional sample account (replace values in production)
-- Email: demo@nauan.vn
-- Password: 12345678
INSERT INTO public.users (
    id,
    name,
    email,
    password_salt,
    password_hash,
    password_iterations,
    password_keylen,
    password_digest
)
VALUES (
    'b8b21945-5df6-4ac2-9346-c006cf4d9fd5',
    'Demo Nau An Viet',
    'demo@nauan.vn',
    'c63fea1937b5d3edb83546c2a06794ac',
    'ece61d457fdc96cfa5c75f4166bc78bfbbcd273a219f81a9c543d26d78a4e0b3ecc9a98f92e6fe802d654de57480590af9c8febe4acb08c680d31be0d032420c',
    100000,
    64,
    'sha512'
)
ON CONFLICT (email)
DO UPDATE SET
    name = EXCLUDED.name,
    password_salt = EXCLUDED.password_salt,
    password_hash = EXCLUDED.password_hash,
    password_iterations = EXCLUDED.password_iterations,
    password_keylen = EXCLUDED.password_keylen,
    password_digest = EXCLUDED.password_digest,
    updated_at = NOW();
