# 🤖 AI Advisor - Hướng Dẫn Cài Đặt Nhanh

Làm cho AI Advisor của bạn **thông minh 100 lần** với OpenAI ChatGPT! ⚡

---

## 🚀 Phương Pháp 1: Đơn Giản (Development) - 2 Phút

### Bước 1: Lấy OpenAI API Key

1. 🌐 Truy cập: https://platform.openai.com/api/keys
2. 📝 Đăng nhập / Tạo tài khoản OpenAI
3. 🔑 Bấm **"Create new secret key"**
4. 📋 **Sao chép** API key (dạng: `sk-...`)

### Bước 2: Cập Nhật config.js

1. 📂 Mở file: `config.js`
2. 🎯 Tìm dòng:
   ```javascript
   apiKey: 'sk-your-api-key-here',
   ```
3. ✏️ Thay thế bằng API key của bạn:
   ```javascript
   apiKey: 'sk-proj-abc123def456ghi789...',
   ```
4. 💾 Lưu file

### Bước 3: Làm Mới Trang Web

- 🔄 Nhấn `F5` hoặc `Ctrl+R` để làm mới
- 🤖 Bấm nút **"AI"** ở góc dưới bên phải
- 🎉 Bắt đầu nói chuyện với AI!

**✅ Xong! Bây giờ AI của bạn thông minh rồi!**

---

## 🎯 Các Ví Dụ Sử Dụng

### Hỏi Về Công Thức
```
"Phở Bò nấu mất bao lâu?"
↓
AI: Phở bò thường mất 3-4 giờ để nấu nước dùng...
```

### Tạo Công Thức Mới
```
"Tôi có cà rốt, khoai tây, thịt lợn. Tạo công thức cho tôi!"
↓
AI: Đây là gợi ý cho Cơm Thịt Khoai Tây...
```

### Nhớ Ngữ Cảnh (Multi-turn)
```
User: "Làm sao nấu Phở ngon?"
AI: Phở bò cần... [trả lời chi tiết]

User: "Có thể nấu nhanh hơn không?"
AI: Có! Bạn có thể dùng nồi áp suất... [tiếp tục từ context trước]
```

---

## ⚙️ Phương Pháp 2: Pro (Production) - 10 Phút

Dùng **Backend Server** để tránh lỗi CORS (cho website công khai)

### Bước 1: Cài Node.js

- 📥 Tải từ: https://nodejs.org/ (LTS version)
- ✅ Chọn "Add to PATH"

### Bước 2: Cài Đặt Dependencies

Mở **Terminal** trong thư mục `nauan`:

```bash
npm install
```

### Bước 3: Tạo .env File

Sao chép `.env.example` thành `.env`:

```bash
# Windows
copy .env.example .env

# Mac/Linux
cp .env.example .env
```

Mở `.env` và thay thế:
```
OPENAI_API_KEY=sk-your-api-key-here
```

### Bước 4: Chạy Backend Server

```bash
npm start
```

Bạn sẽ thấy:
```
🤖 AI Advisor Backend Server
Server running on http://localhost:3000
OpenAI API configured: ✅
```

### Bước 5: Cập Nhật config.js

Thay đổi `AI_CONFIG`:

```javascript
const AI_CONFIG = {
    apiKey: 'sk-your-api-key-here',  // Vẫn cần để fallback
    apiModel: 'gpt-3.5-turbo',
    maxTokens: 500,
    temperature: 0.7,
    backendUrl: 'http://localhost:3000/api/chat'  // Thêm dòng này
};
```

### Bước 6: Tải Lại Trang

- 🔄 Refresh trang web
- 🤖 Bấm nút AI
- 🎉 Sử dụng!

---

## 🧠 Các Tính Năng Nâng Cao

### Thay Đổi Model AI

Trong `config.js`:
```javascript
// Model rẻ, nhanh (khuyến nghị)
apiModel: 'gpt-3.5-turbo',

// Model mạnh mẽ, chính xác hơn
apiModel: 'gpt-4',

// Model mới nhất, nhanh hơn
apiModel: 'gpt-4-turbo-preview',
```

### Điều Chỉnh Chi Phí vs Chất Lượng

```javascript
// Nhanh & Rẻ
maxTokens: 300,
temperature: 0.5,  // Kết quả xác định hơn

// Sáng tạo & Chi tiết
maxTokens: 1000,
temperature: 0.9,  // Kết quả sáng tạo hơn
```

### Xóa Lịch Sử Cuộc Hội Thoại

Để xóa lịch sử và bắt đầu cuộc hội thoại mới:
```javascript
// Trong browser console (F12):
aiAdvisor.clearHistory();
```

---

## ⚠️ Xử Lý Lỗi

### Lỗi: "API key không hợp lệ"

```
✅ Giải pháp:
1. Kiểm tra API key có bắt đầu bằng "sk-" không
2. Kiểm tra không có khoảng trắng thêm
3. Lấy API key mới: https://platform.openai.com/api/keys
```

### Lỗi: "You exceeded your current quota"

```
✅ Giải pháp:
1. Thêm payment method: https://platform.openai.com/account/billing/overview
2. Mua credits
3. Hoặc giảm max_tokens từ 500 → 300
```

### AI chỉ trả lời các câu cố định

```
✅ Giải pháp:
1. Kiểm tra API key có được cấu hình không (config.js)
2. Refresh trang (F5)
3. Mở Developer Console (F12) để xem lỗi chi tiết
```

### Backend không chạy

```
✅ Giải pháp:
1. Kiểm tra Node.js đã cài chưa: node --version
2. Cài dependencies: npm install
3. Tạo .env file với OPENAI_API_KEY
4. Chạy: npm start
```

---

## 💰 Chi Phí Sử Dụng

| Model | Input | Output | Cost (~100 cuộc hội thoại) |
|-------|-------|--------|---------------------------|
| GPT-3.5-Turbo | $0.0005/1K | $0.0015/1K | ~$0.05 |
| GPT-4 | $0.03/1K | $0.06/1K | ~$3-5 |
| GPT-4-Turbo | $0.01/1K | $0.03/1K | ~$1-2 |

**💡 Mẹo tiết kiệm:**
- Dùng `gpt-3.5-turbo` (rẻ + tốt)
- Giảm `maxTokens` từ 500 → 300
- Hạn chế lịch sử (mặc định: 10 messages)

---

## 🔐 Bảo Mật

### ⚠️ KHÔNG ĐƯỢC

```javascript
❌ Đưa API key vào Git
❌ Công khai API key trên GitHub
❌ Viết API key trong commented code
❌ Chia sẻ API key với người khác
```

### ✅ NÊN

```javascript
✅ Dùng .env file + .gitignore
✅ Lưu API key ở nơi an toàn
✅ Regenerate API key nếu bị lộ
✅ Sử dụng backend server cho production
```

---

## 📱 Chuẩn Bị Deploy

Nếu muốn công khai website trên Internet:

1. **Dùng Backend Server** (Phương Pháp 2)
2. **Lưu API Key trong Environment Variables** (không trong code)
3. **Deploy Backend cùng Frontend** (Heroku, Vercel, AWS, v.v.)

---

## 📚 Tài Liệu Thêm

- 📖 [OpenAI API Docs](https://platform.openai.com/docs/api-reference/chat/create)
- 💬 [ChatGPT Models](https://platform.openai.com/docs/models)
- 💵 [Pricing](https://openai.com/pricing)
- 🔗 [Best Practices](https://platform.openai.com/docs/guides/safety-best-practices)

---

## ❓ FAQ

**Q: Bao lâu phải trả tiền?**
A: Theo mỗi lần gọi API. Khoảng ~$0.0001 - $0.0005 mỗi cuộc hội thoại.

**Q: Có miễn phí không?**
A: OpenAI không miễn phí, nhưng rất rẻ (< $1/tháng nếu bạn nói ít).

**Q: Data của tôi có bị lưu không?**
A: OpenAI lưu theo chính sách của họ. Xem: https://openai.com/policies/privacy-policy

**Q: Làm sao reset lịch sử hội thoại?**
A: Refresh trang (F5) sẽ reset. Hoặc dùng: `aiAdvisor.clearHistory();`

---

## 🎉 Hoàn Tất!

Bạn đã cấu hình AI Advisor thành công!

**Tiếp theo:**
- 💬 Hỏi AI về các sinh công thức Việt Nam
- 🧠 Tạo công thức mới từ nguyên liệu bạn có
- 👨‍🍳 Nhận mẹo nấu ăn từ AI
- 📱 Chia sẻ website với bạn bè!

---

**Nếu có vấn đề, hãy xem:**
- `AI_ADVISOR_SETUP.md` (Chi tiết hơn)
- Developer Console (`F12`) để xem lỗi
- `backend.js` code để hiểu cách hoạt động

Happy cooking! 👨‍🍳🍜✨
