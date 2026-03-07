# 🔒 Hướng Dẫn Bảo Mật API Key

**API key của bạn đã được bảo vệ!** ✅

---

## 📋 Những Gì Tôi Đã Làm

1. ✅ Thay API key real thành placeholder trong `config.js`
2. ✅ Tạo `.gitignore` để Git không commit `config.js`
3. ✅ Cập nhật `.env.example` (template cho người khác)

---

## 🚀 Cách Dùng API Key An Toàn

### Phương Pháp 1: Local (Development)

**Bước 1:** Tạo file `.env` (local, KHÔNG commit lên GitHub)

```bash
# Sao chép .env.example thành .env
cp .env.example .env

# Windows PowerShell
Copy-Item .env.example .env
```

**Bước 2:** Mở `.env` và dán API key thực:

```
OPENAI_API_KEY=sk-your-actual-api-key-here
```

**Bước 3:** Update `config.js` để đọc từ `.env`:

```javascript
// config.js
const AI_CONFIG = {
    apiKey: process.env.OPENAI_API_KEY || 'sk-your-api-key-here',
    // ...
};
```

### Phương Pháp 2: Production (Website Công Khai)

**0️⃣ KHÔNG bao giờ viết API key trực tiếp trong code!**

**1️⃣ Dùng Backend Server** (Node.js):

```
[Browser] → [Your Backend] → [OpenAI API]
            (API key ở đây, an toàn)
```

**2️⃣ Deploy trên Vercel/Heroku, set Environment Variables:**

```bash
# Vercel
vercel env add OPENAI_API_KEY sk-...

# Heroku
heroku config:set OPENAI_API_KEY=sk-...
```

---

## ✅ Kiểm Tra Bảo Mật

### 1. Kiểm Tra .gitignore

```bash
# Git sẽ bỏ qua những file này:
git check-ignore config.js .env
# Output: config.js
#         .env
```

### 2. Kiểm Tra Chưa Commit API Key

```bash
# Xem những file sẽ commit
git status

# Nếu config.js/env KHÔNG xuất hiện → OK ✅
# Nếu xuất hiện → chạy: git reset config.js .env
```

### 3. Xóa API Key Khỏi Git History (Nếu Đã Commit)

```bash
# Kiểm tra xem API key có trong history không
git log --all -S "sk-proj-" --source

# Nếu có:
# 1. Lấy API key mới (tại https://platform.openai.com/api/keys)
# 2. Delete API key cũ
# 3. Tạo branch mới, commit clean code
# 4. Force push (cẩn thận!) hoặc tạo PR mới
```

---

## ⚠️ Nguy Hiểm Nếu Bị Lộ

### Nếu API Key Bị Lộ Trên GitHub

**Người xấu có thể:**
- ❌ Gọi OpenAI API nhiều lần → rút tiền từ tài khoản bạn
- ❌ Xóa API key cũ, tạo key mới để dùng
- ❌ Chi phí có thể lên đến thắng $ mỗi ngày

**Cách sửa:**
1. 🚨 **Xóa API key cũ ngay**: https://platform.openai.com/api/keys
2. 🚨 **Kiểm tra bill**: https://platform.openai.com/account/billing/overview
3. 🚨 **Tạo API key mới**
4. 🚨 **Cập nhật .env**

---

## 📝 Checklist Bảo Mật

- ✅ API key thay thành placeholder trong `config.js`
- ✅ `.gitignore` bao gồm `config.js` và `.env`
- ✅ File `.env` được tạo (local only, không commit)
- ✅ `.env.example` là template cho người khác
- ✅ Never commit `.env` hoặc file chứa secret lên GitHub
- ✅ If leaked: Delete key + Create new key ngay lập tức

---

## 🔐 Best Practices

### DO ✅
```javascript
// Lấy API key từ environment
const apiKey = process.env.OPENAI_API_KEY;

// Hoặc prompt user nhập khi cần
const apiKey = prompt('Nhập OpenAI API key (sẽ không lưu):');
```

### DON'T ❌
```javascript
// KHÔNG bao giờ hardcode API key
const apiKey = 'sk-proj-...actual-key...';  // ❌ DANGER!

// KHÔNG viết API key trong comment
// apiKey: 'sk-proj-...my-secret-key...'  // ❌ Git vẫn track

// KHÔNG commit .env
git add .env  // ❌ DANGER!
```

---

## 📚 Tài Liệu Thêm

- 🔗 [OpenAI API Keys](https://platform.openai.com/api/keys)
- 🔗 [OpenAI Security Best Practices](https://platform.openai.com/docs/guides/security)
- 🔗 [GitHub - Protecting Sensitive Data](https://docs.github.com/en/code-security/secret-scanning)
- 🔗 [Node.js dotenv](https://github.com/motdotla/dotenv)

---

## 🎯 Tiếp Theo

1. **Local Development:**
   - Tạo `.env` file
   - Dán API key thực vào `.env`
   - Update `config.js` để đọc từ `.env`

2. **Khi Push GitHub:**
   - Chỉ push `config.js` (có placeholder)
   - KHÔNG push `.env`
   - `.gitignore` sẽ tự động bỏ qua

3. **Khi Deploy Production:**
   - Set environment variable trên Vercel/Heroku
   - Backend sẽ đọc từ environment

---

**API key của bạn đã an toàn! 🔒**
