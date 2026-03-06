# 📖 Bản Đồ Tài Liệu - Hướng Dẫn Sử Dụng

Bắt đầu ở đây! Dưới đây là các tài liệu hữu ích cho trang web nấu ăn của bạn.

---

## 🚀 TÔI LÀ NGƯỜI MỚI - BẮT ĐẦU TỪĐÂU?

### ✅ Tôi chỉ muốn xem trang web
- Mở `index.html` trong trình duyệt
- Đã xong! Trang web sẵn sàng sử dụng

### ⚙️ Tôi muốn tùy chỉnh công thức
1. Đọc: [README.md](README.md) - Hướng dẫn cơ bản
2. Sửa: File `js/script.js` - Dữ liệu công thức

### 🎨 Tôi muốn tạo ảnh & video AI (YÊU CẦU CHÍNH)
1. **Nhanh nhất (5 phút)**: [QUICK_START_AI.md](QUICK_START_AI.md)
2. **Chi tiết hơn**: [AI_IMAGE_VIDEO_GUIDE.md](AI_IMAGE_VIDEO_GUIDE.md)
3. **Prompt sẵn**: [PROMPTS_READY_TO_USE.md](PROMPTS_READY_TO_USE.md)
4. **Cập nhật tự động**: `python3 update_recipes.py --interactive`

---

## 📚 TẤT CẢ TÀI LIỆU

### Tài Liệu Chính (Bắc Buộc)

| File | Mô Tả | Thời Gian Đọc |
|------|-------|--------------|
| [README.md](README.md) | Hướng dẫn tổng quan trang web | 10 phút |
| [QUICK_START_AI.md](QUICK_START_AI.md) | 🔥 **BẮT ĐẦU TẠI ĐÂY** - Tạo ảnh/video trong 5 phút | 5 phút |
| [AI_IMAGE_VIDEO_GUIDE.md](AI_IMAGE_VIDEO_GUIDE.md) | Hướng dẫn chi tiết về công cụ AI & kỹ thuật | 20 phút |
| [PROMPTS_READY_TO_USE.md](PROMPTS_READY_TO_USE.md) | 180+ Prompt tối ưu copy-paste sẵn | 🔍 Tra cứu |

### Tệp Mã Nguồn (Cho Lập Trình Viên)

| File | Mô Tả |
|------|-------|
| `index.html` | Trang web chính (HTML5) |
| `css/style.css` | Tất cả CSS styling (Responsive, Modern) |
| `js/script.js` | Logic JavaScript (Tìm kiếm, lọc, modal) |
| `update_recipes.py` | 🆕 Script cập nhật URL ảnh/video tự động |

---

## 🎯 CÁC TRƯỜNG HỢP SỬ DỤNG

### "Tôi chỉ muốn xem môi website"
```
1. Mở index.html trong Chrome/Firefox
2. Tìm kiếm và xem công thức
3. Xem chi tiết và video
✅ Hoàn tất!
```

### "Tôi muốn thêm công thức mới"
```
1. Mở js/script.js
2. Tìm mảng recipes
3. Thêm ID, tên, hình ảnh, video, nguyên liệu, cách nấu
4. Reload trang web
✅ Công thức mới xuất hiện!
```

### "Tôi muốn ảnh đẹp hơn (AI Generated)"
```
1. Đọc: QUICK_START_AI.md (5 phút)
2. Truy cập: Leonardo.ai (miễn phí)
3. Copy prompt từ PROMPTS_READY_TO_USE.md
4. Generate ảnh → Download
5. Chạy: python3 update_recipes.py --interactive
✅ Ảnh AI được cập nhật!
```

### "Tôi muốn video hướng dẫn cho mỗi món"
```
1. Đọc: AI_IMAGE_VIDEO_GUIDE.md (Video Section)
2. Sử dụng: Runway ML hoặc Synthesia
3. Generate video → Download/Upload YouTube
4. Cập nhật URL video bằng script
✅ Video được thêm vào trang!
```

### "Tôi muốn deploy trang web trực tuyến"
```
1. Upload toàn bộ folder lên hosting (GoDaddy, Bluehost, etc.)
2. Hoặc dùng: Netlify, Vercel, GitHub Pages
3. Cập nhật DNS nếu cần
✅ Trang web trực tiếp!
```

---

## 🎓 HỌC THÊM

### Bạn muốn hiểu HTML/CSS/JavaScript?
- [MDN Web Docs](https://developer.mozilla.org/docs)
- [W3Schools Tutorials](https://www.w3schools.com/)
- [FreeCodeCamp (YouTube)](https://www.freecodecamp.org/)

### Bạn muốn biết thêm về AI Image Generation?
- [Midjourney Guide](https://docs.midjourney.com/)
- [DALL-E 3 Docs](https://platform.openai.com/docs/guides/vision)
- [Stable Diffusion Handbook](https://huggingface.co/docs/diffusers)

### Bạn muốn thêm tính năng?
- Database (MongoDB, Firebase)
- User Accounts (Auth)
- Favorites System
- Rating & Comments
- Shopping List

---

## 🚨 TROUBLESHOOT

### "Ảnh không hiển thị"
→ Kiểm tra URL ảnh có hợp lệ không  
→ Kiểm tra lỗi CORS (ảnh từ domain khác)  
→ Thử upload ảnh lên Imgur thay thế

### "Script Python không chạy"
→ Cài đặt Python 3.6+ từ python.org  
→ Mở Terminal: `python3 update_recipes.py --help`  
→ Hoặc chỉnh sửa js/script.js trực tiếp

### "Video không chơi"
→ Dùng URL embed YouTube: `https://www.youtube.com/embed/VIDEO_ID`  
→ Không phải: `https://youtu.be/VIDEO_ID`  
→ Không phải: `https://www.youtube.com/watch?v=VIDEO_ID`

### "Trang web chậm"
→ Nén ảnh: TinyPNG  
→ Tối ưu video (không quá 50MB)  
→ Sử dụng CDN (Cloudflare, CloudFront)

---

## 📋 CHECKLIST SETUP

- [ ] Mở trang web lần đầu (index.html)
- [ ] Thử tìm kiếm & lọc công thức
- [ ] Xem chi tiết một công thức
- [ ] Xem một video (nếu cần)
- [ ] Đọc QUICK_START_AI.md
- [ ] Tạo ảnh trên Leonardo.ai/DALL-E
- [ ] Cập nhật URL ảnh vào trang web
- [ ] Refresh trang web xác nhận ảnh mới
- [ ] (Tùy chọn) Tạo video & upload YouTube
- [ ] Deploy lên hosting

---

## 🎁 BONUS TIPS

💡 **Free Image Hosting:**
- Imgur.com (fastest, easiest)
- Cloudinary.com (CDN, transforms)
- GitHub (for open source)

💡 **Free AI Tools:**
- Leonardo.ai (150 images/month free)
- Pika Labs (video, free tier)
- Huggingface Spaces (Stable Diffusion)

💡 **Performance Tips:**
- Lazy load ảnh
- Compress video
- Minify CSS/JS
- Cache browser

---

## 📞 LIÊN HỆ & HỖ TRỢ

Nếu bạn gặp vấn đề:
1. Kiểm tra lại hướng dẫn
2. Tìm kiếm trên Google
3. Hỏi ChatGPT/Claude
4. Đăng ký trên Stack Overflow

---

## 🎉 TIẾP THEO

✅ Trước hết, hãy hoàn thành QUICK_START_AI.md (5 phút)  
✅ Tạo ảnh AI cho 8 công thức  
✅ Deploy trang web của bạn  
✅ Chia sẻ với bạn bè! 

---

**Happy Cooking & Building! 🍜❤️**

Tạo bởi: Assistant AI  
Ngày: March 6, 2026  
Version: 1.0 - AI Ready
