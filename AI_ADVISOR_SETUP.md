# 🤖 Hướng Dẫn AI Advisor Nâng Cao

Bạn đã cập nhật AI Advisor của mình với **OpenAI ChatGPT**! Dưới đây là hướng dẫn cấu hình hoàn chỉnh.

## ✨ Tính Năng Mới

- 🧠 **AI Thực Sự** - Sử dụng OpenAI GPT-3.5-Turbo (hoặc GPT-4)
- 💬 **Nhớ Ngữ Cảnh** - Giữ lịch sử hội thoại, trả lời theo context
- 👨‍🍳 **Tạo Công Thức** - Tạo công thức mới từ nguyên liệu bạn có
- 🔍 **Hiểu Công Thức** - AI biết về tất cả công thức trên website
- 😊 **Thân Thiện** - Luôn trả lời bằng Tiếng Việt, vui vẻ
- ⚡ **Nhanh & Hiệu Quả** - Trả lời trong vài giây

## 🚀 Cấu Hình Nhanh (5 phút)

### 1️⃣ Lấy OpenAI API Key

1. Truy cập: https://platform.openai.com/api/keys
2. Đăng nhập bằng tài khoản OpenAI (hoặc tạo mới)
3. Bấm "Create new secret key"
4. **Sao chép API key** (dạng: `sk-...`)
5. **Lưu ở nơi an toàn** (không share đi!)

### 2️⃣ Cấu Hình File config.js

Mở file `config.js` và thay thế API key:

```javascript
const AI_CONFIG = {
    apiKey: 'sk-YOUR-API-KEY-HERE', // ← Dán API key của bạn vào đây
    apiModel: 'gpt-3.5-turbo',      // Hoặc 'gpt-4' nếu bạn có quyền truy cập
    maxTokens: 500,
    temperature: 0.7,
    // ... phần còn lại giữ nguyên
};
```

**Ví dụ:**
```javascript
const AI_CONFIG = {
    apiKey: 'sk-proj-abc123xyz789...', // API key thực của bạn
    apiModel: 'gpt-3.5-turbo',
    // ...
};
```

### 3️⃣ Tải lại Trang Web

- Refresh trình duyệt (`F5` hoặc `Ctrl+R`)
- Mở chatbot AI và thử hỏi

## 📝 Ví Dụ Sử Dụng

### Hỏi Về Công Thức
```
Phở Bò nấu mất bao lâu?
→ AI sẽ trả lời chi tiết về phở bò từ database của bạn
```

### Tạo Công Thức Mới
```
Tôi có cà rốt, khoai tây, thịt lợn. Bạn có thể giúp tôi tạo một công thức không?
→ AI sẽ tạo công thức mới sáng tạo!
```

### Mẹo Nấu Ăn
```
Làm sao để cơm không dính?
→ AI sẽ cung cấp mẹo vàng về cách nấu cơm
```

### Hỏi Tiếp Theo (Multi-turn)
```
User: Tôi muốn nấu Phở Bò
AI: Tôi sẽ giúp bạn nấu Phở Bò ngon lắm!

User: Có thể tạo phiên bản nhanh hơn không?
AI: Có chứ! Bạn có thể dùng nồi áp suất...
```

## 🛠️ Các Tuỳ Chọn Cấu Hình

Trong `config.js`, bạn có thể tuỳ chỉnh:

| Tùy Chọn | Mô Tả | Mặc Định |
|---------|-------|----------|
| `apiKey` | OpenAI API Key | `sk-...` |
| `apiModel` | Model AI: `gpt-3.5-turbo` hoặc `gpt-4` | `gpt-3.5-turbo` |
| `maxTokens` | Độ dài tối đa câu trả lời | `500` |
| `temperature` | Mức sáng tạo (0-1, thấp=chính xác, cao=sáng tạo) | `0.7` |

**Ví dụ nâng cao:**
```javascript
const AI_CONFIG = {
    apiKey: 'sk-your-key-here',
    apiModel: 'gpt-4',          // Model mạnh hơn, chính xác hơn
    maxTokens: 800,              // Câu trả lời dài hơn
    temperature: 0.5,            // Kết quả chính xác hơn
    // ...
};
```

## ⚠️ Xử Lý Lỗi Phổ Biến

### Lỗi: "API key không hợp lệ"
**Giải pháp:**
- Kiểm tra API key có bắt đầu bằng `sk-` không
- Kiểm tra API key không có khoảng trắng thêm
- Thử lấy API key mới từ https://platform.openai.com/api/keys

### Lỗi: "You exceeded your current quota"
**Giải pháp:**
- Kiểm tra tài khoản OpenAI của bạn có credits không
- Thêm payment method: https://platform.openai.com/account/billing/overview
- Chặn chi tiêu nếu cần: https://platform.openai.com/account/billing/limits

### Lỗi: "Có lỗi xảy ra. Hãy kiểm tra kết nối Internet"
**Giải pháp:**
- Kiểm tra kết nối Internet
- Mở Developer Console (`F12`) để xem chi tiết lỗi
- Kiểm tra API key có hợp lệ không

### Chatbot không trả lời (chỉ pattern matching)
**Giải pháp:**
- API key chưa được cấu hình hoặc không hợp lệ
- Tải lại trang (`F5`)
- Kiểm tra console (`F12` → Console tab) để xem lỗi

## 📊 Chi Phí Sử Dụng OpenAI

**GPT-3.5-Turbo (Giá rẻ nhất):**
- Đầu vào: $0.0005 / 1K tokens
- Đầu ra: $0.0015 / 1K tokens
- ~100 cuộc hội thoại = ~$0.05

**GPT-4 (Chính xác hơn):**
- Đầu vào: $0.03 / 1K tokens
- Đầu ra: $0.06 / 1K tokens
- ~100 cuộc hội thoại = ~$3-5

## 💡 Mẹo Tiết Kiệm Chi Phí

1. Sử dụng `gpt-3.5-turbo` (rẻ nhất, vẫn tốt)
2. Giảm `maxTokens` từ 500 xuống 300 (câu trả lời ngắn hơn)
3. Thiết lập `budget limit` trong OpenAI dashboard
4. Xoá messages cũ định kỳ (ai-advisor sử dụng 10 messages gần nhất)

## 🔐 Bảo Mật

⚠️ **QUAN TRỌNG:**
- ❌ KHÔNG bao giờ công khai API key của bạn
- ❌ KHÔNG commit config.js chứa API key vào Git
- ✅ Sử dụng `git update-index --skip-worktree config.js` để không commit

**Để bảo vệ API key (trong hệ thống production):**
```bash
# 1. Tạo .gitignore entry
echo "config.js" >> .gitignore

# 2. Hoặc dùng environment variable (nâng cao)
# - Trên server backend, lưu API key trong env variables
# - Frontend gửi request đến backend, backend gửi request đến OpenAI
```

## 📱 Di Chuyển sang Production

Nếu bạn muốn deploy website này:

### Vấn đề CORS (Cross-Origin Resource Sharing)
```
❌ OpenAI không cho phép gọi API trực tiếp từ trình duyệt
```

### Giải pháp: Tạo Backend Server

Tạo một file `backend.js` (Node.js):

```javascript
// backend.js - Chạy trên server của bạn
const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.post('/api/chat', async (req, res) => {
    const { messages } = req.body;
    
    try {
        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: 'gpt-3.5-turbo',
                messages: messages,
                max_tokens: 500,
            },
            {
                headers: {
                    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
                }
            }
        );
        
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

Sau đó cập nhật `ai-advisor.js` để gọi backend của bạn thay vì OpenAI trực tiếp.

## 🎓 Tìm Hiểu Thêm

- 📖 [OpenAI API Docs](https://platform.openai.com/docs/api-reference/chat/create)
- 🔗 [ChatGPT Models](https://platform.openai.com/docs/models)
- 💰 [Pricing](https://openai.com/pricing)
- 🛡️ [Security Best Practices](https://platform.openai.com/docs/guides/safety-best-practices)

## ❓ Câu Hỏi Thường Gặp

**Q: Tôi nên dùng gpt-3.5-turbo hay gpt-4?**
A: Bắt đầu với gpt-3.5-turbo (rẻ + nhanh). Nếu bạn cần chính xác cao, dùng gpt-4.

**Q: API key của tôi có bị lộ không?**
A: Nếu bạn đã dùng nó trên website public, nên **regenerate API key ngay lập tức**.

**Q: Làm sao để reset lịch sử hội thoại?**
A: Refresh trang web sẽ reset lịch sử (vì mỗi session riêng biệt).

**Q: AI có thể lưu trữ dữ liệu của tôi không?**
A: OpenAI lưu trữ API requests theo chính sách riêng. Đọc [OpenAI Privacy](https://openai.com/policies/privacy-policy).

---

**Bạn đã cấu hình xong! 🎉 Hỏi AI Advisor bất cứ điều gì về nấu ăn!**
