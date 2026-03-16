# Vercel Auth Setup

Site production da co cac route serverless:

- `/api/auth/register`
- `/api/auth/login`
- `/api/auth/me`
- `/api/auth/logout`
- `/api/ratings`
- `/api/chat`

De dang ky va dang nhap chay duoc tren Vercel, can cau hinh Postgres (Neon) luu tru ben vung.

## 1. Them Postgres integration

Tren Vercel project cua ban:

1. Vao `Storage` hoac `Marketplace`
2. Cai `Neon Postgres` (hoac PostgreSQL integration tuong duong)
3. Gan vao project `n-u-n`

Sau khi them xong, Vercel can co it nhat 1 env ket noi sau:

- `POSTGRES_URL`
hoac
- `DATABASE_URL`

Neu Vercel tao them bien khac (nhu `POSTGRES_PRISMA_URL`) thi code hien tai cung ho tro.

## 2. Them auth secret

Them env:

- `AUTH_SECRET`

Nen dung chuoi dai, kho doan, vi du:

```txt
AUTH_SECRET=mot-chuoi-bi-mat-rat-dai-va-ngau-nhien
```

## 3. Them OpenAI key cho AI Advisor

Neu muon AI chat chay tren production, them:

- `OPENAI_API_KEY`
- `OPENAI_MODEL` tuy chon, vi du `gpt-4o-mini`

## 4. Redeploy

Sau khi them env xong:

1. Push code len `main`
2. Vercel se tu build lai
3. Thu lai dang ky tai khoan tren domain production

## 5. Neu van loi

Can kiem tra:

- `Project Settings > Environment Variables`
- `Functions` logs tren Vercel
- `Storage` da link dung project chua

Neu production tra ve loi `Thiếu cấu hình Postgres cho production` thi nghia la project chua nhan du env ket noi database.