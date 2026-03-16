CREATE DATABASE IF NOT EXISTS nauan
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE nauan;

CREATE TABLE IF NOT EXISTS users (
    id CHAR(36) NOT NULL,
    name VARCHAR(120) NOT NULL,
    email VARCHAR(190) NOT NULL,
    password_salt CHAR(32) NOT NULL,
    password_hash CHAR(128) NOT NULL,
    password_iterations INT UNSIGNED NOT NULL DEFAULT 100000,
    password_keylen INT UNSIGNED NOT NULL DEFAULT 64,
    password_digest VARCHAR(20) NOT NULL DEFAULT 'sha512',
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    UNIQUE KEY uq_users_email (email),
    KEY idx_users_created_at (created_at)
);

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
)
VALUES (
    'b8b21945-5df6-4ac2-9346-c006cf4d9fd5',
    'Demo Nau An Viet',
    'demo@nauan.vn',
    'c63fea1937b5d3edb83546c2a06794ac',
    'ece61d457fdc96cfa5c75f4166bc78bfbbcd273a219f81a9c543d26d78a4e0b3ecc9a98f92e6fe802d654de57480590af9c8febe4acb08c680d31be0d032420c',
    100000,
    64,
    'sha512',
    NOW(),
    NOW()
)
ON DUPLICATE KEY UPDATE
    name = VALUES(name),
    password_salt = VALUES(password_salt),
    password_hash = VALUES(password_hash),
    password_iterations = VALUES(password_iterations),
    password_keylen = VALUES(password_keylen),
    password_digest = VALUES(password_digest),
    updated_at = NOW();

-- Tai khoan mau
-- Email: demo@nauan.vn
-- Mat khau: 12345678