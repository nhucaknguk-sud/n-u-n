# 🚀 QUICK START - Tạo Ảnh & Video AI cho Trang Nấu Ăn

Hướng dẫn nhanh từng bước để tạo ảnh và video AI chuyên nghiệp.

---

## ⏱️ 5 Phút - Bắt Đầu Nhanh

### Bước 1: Chọn Công Cụ Tạo Ảnh (2 phút)

**Tôi khuyến nghị Leonardo.ai (MIỄN PHÍ):**

1. Truy cập: https://leonardo.ai/
2. Đăng ký tài khoản miễn phí
3. Click "Create" → "Image Generation"
4. Chọn Model: `Photo Real` hoặc `Alchemy`
5. Set Resolution: `768x768` hoặc `1024x1024`

---

### Bước 2: Tạo Ảnh cho Món Đầu Tiên (1-2 phút)

**Ví dụ: PHỞ BÒ**

1. Copy prompt này:
   ```
   a stunning bowl of Vietnamese pho bo, aromatic beef broth, tender 
   sliced beef, fresh herbs, thin rice noodles, steam rising, professional 
   food photography, studio lighting, 8k quality, appetizing
   ```

2. Paste vào Leonardo.ai
3. Click "Generate"
4. Chọn ảnh đẹp nhất
5. Click Download

---

### Bước 3: Lưu URL Ảnh (1 phút)

**Cách 1: Upload lên hosting miễn phí**
- Truy cập: https://imgur.com/
- Upload ảnh → Copy link
- Lưu link vào đây: `https://imgur.com/xxxxxx`

**Cách 2: Sử dụng URL trực tiếp từ Leonardo** (nếu có)

---

### Bước 4: Cập Nhật vào Trang Web (2 phút)

**Dùng Python Script (Easy):**
```bash
python3 update_recipes.py --interactive
```

Đối thoại:
```
Nhập ID công thức (1-8) hoặc 'q': 1
📝 Đang cập nhật: Phở Bò
Nhập URL ảnh mới: https://imgur.com/xxxxxx
Nhập URL video mới: n
✅ Cập nhật ảnh cho Phở Bò
```

---

## 🎬 Video - Hơi Phức Tạp Hơn

### Bước 1: Chọn Công Cụ Video

**Tôi khuyến nghị Runway ML (Đơn giản nhất):**
1. Truy cập: https://runwayml.com/
2. Đăng ký tài khoản
3. Bắt đầu free trial

---

### Bước 2: Tạo Video từ Ảnh

1. Upload ảnh Phở Bò vừa tạo
2. Chọn "Motion" effect
3. Set duration: 15s
4. Click Generate (5-10 phút)
5. Download video MP4

---

### Bước 3: Upload Video

**Sử dụng YouTube (dễ nhất):**
1. Upload video lên YouTube (Unlisted/Private)
2. Lấy Video ID từ URL: 
   - URL: `https://www.youtube.com/watch?v=**dQw4w9WgXcQ**`
   - ID: `dQw4w9WgXcQ`
3. Tạo Embed URL: `https://www.youtube.com/embed/dQw4w9WgXcQ`
4. Cập nhật vào trang web:
   ```bash
   python3 update_recipes.py --recipe-id 1 --video-url "https://www.youtube.com/embed/dQw4w9WgXcQ"
   ```

---

## 📋 Prompt Copy-Paste Ready

Mở file **PROMPTS_READY_TO_USE.md** để copy prompt cho từng món:

**PHỞ BÒ:**
```
a stunning bowl of Vietnamese pho bo, aromatic beef broth, 
tender sliced beef, fresh herbs, thin rice noodles, steam rising, 
professional food photography, studio lighting, 8k, appetizing
```

**BÁNH CHƯNG:**
```
a beautiful square-shaped Vietnamese banh chung cake, golden-brown 
sticky rice, salted egg yolk center, wrapped in banana leaves, 
wooden cutting board, professional food photography, warm lighting
```

*... xem thêm 6 prompt khác trong PROMPTS_READY_TO_USE.md*

---

## 🔄 Quy Trình Toàn Bộ (Tóm Tắt)

```
┌─────────────────────────────────────────────────────────┐
│ 1. Mở Leonardo.ai / DALL-E                              │
├─────────────────────────────────────────────────────────┤
│ 2. Copy Prompt từ PROMPTS_READY_TO_USE.md               │
├─────────────────────────────────────────────────────────┤
│ 3. Generate Ảnh                                          │
├─────────────────────────────────────────────────────────┤
│ 4. Download Ảnh HD                                       │
├─────────────────────────────────────────────────────────┤
│ 5. Upload lên Imgur (hoặc hosting khác)                 │
├─────────────────────────────────────────────────────────┤
│ 6. Chạy: python3 update_recipes.py --interactive         │
├─────────────────────────────────────────────────────────┤
│ 7. Refresh trang web - ✅ Ảnh đã cập nhật!              │
└─────────────────────────────────────────────────────────┘
```

---

## 💰 Chi Phí

| Công Cụ | Ảnh | Video | Chi Phí |
|---------|-----|-------|---------|
| Leonardo.ai | ✅ | - | Miễn phí (hạn chế) |
| DALL-E | ✅ | - | $15/tháng |
| Midjourney | ✅ | - | $10/tháng |
| Runway ML | - | ✅ | $12/tháng |
| Pika Labs | ✅ | ✅ | Miễn phí (hạn chế) |

**Bắt đầu miễn phí:** Leonardo.ai + Pika Labs

---

## ❓ FAQ

### Q: Tôi không biết code Python, có thể dùng được không?
**A:** Có! Script Python rất đơn giản, chỉ cần chạy lệnh này:
```bash
python3 update_recipes.py --interactive
```
Nó sẽ hỏi bạn từng thứ từng cái!

### Q: Tôi không muốn sử dụng Python?
**A:** Không sao! Bạn có thể chỉnh sửa file `js/script.js` trực tiếp:
1. Mở `js/script.js` trong editor
2. Tìm: `image: "https://..."`
3. Thay URL cũ bằng URL mới của bạn
4. Save

### Q: Prompt mà bạn cung cấp có tốt không?
**A:** Có! Tôi đã tối ưu hóa cho các công cụ phổ biến nhất. Nhưng bạn có thể:
- Thay đổi chi tiết cho phù hợp
- Thêm keywords: "rustic", "elegant", "casual"
- Sử dụng style: "magazine cover", "michelin star", "street food"

### Q: Ảnh có bị giới hạn bản quyền không?
**A:** Tuỳ thuộc vào T&Cs của dịch vụ. Hầu hết cho phép sử dụng thương mại. Kiểm tra:
- Leonardo.ai: ✅ Miễn phí sử dụng
- DALL-E: ✅ Bạn sở hữu ảnh
- Midjourney: ✅ Bạn sở hữu ảnh

### Q: Tôi muốn upload ảnh local thay vì URL?
**A:** Bạn cần hosting hoặc CDN:
1. Imgur (miễn phí, không cần đăng ký)
2. Cloudinary (free tier có sẵn)
3. GitHub (cho repo công khai)
4. Hoặc server của riêng bạn

---

## 🎯 Tiếp Theo

1. ✅ Hoàn thành: Tạo ảnh cho 8 món ăn
2. ✅ Hoàn thành: Tạo video cho 8 món ăn
3. 📝 Cập nhật: URL theo hướng dẫn trên
4. 🚀 Publish: Trang web của bạn sẵn sàng!

---

## 📞 Hỗ Trợ Thêm

- **Hướng dẫn đầy đủ**: Xem [AI_IMAGE_VIDEO_GUIDE.md](AI_IMAGE_VIDEO_GUIDE.md)
- **Prompts sẵn sàng**: Xem [PROMPTS_READY_TO_USE.md](PROMPTS_READY_TO_USE.md)
- **Script tự động**: `python3 update_recipes.py --help`

---

**🎉 Chúc bạn tạo ảnh đẹp! Sau 5 phút bạn sẽ có ảnh AI chuyên nghiệp!**

💡 **Pro Tip**: Tạo tất cả 8 ảnh cùng 1 lúc trên Leonardo.ai (miễn phí cho 150 ảnh/tháng), rồi chọn ảnh tốt nhất danh sách!
