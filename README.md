# Nấu Ăn Việt - Website Dạy Nấu Ăn Món Ăn Việt

Một trang web hiện đại, thân thiện và dễ sử dụng để học nấu ăn các món ăn truyền thống Việt Nam.

## 🎯 Tính Năng Chính

✨ **Giao Diện Hiện Đại & Responsive** - Hoạt động tốt trên mọi thiết bị  
🔍 **Tìm Kiếm & Lọc** - Tìm công thức theo tên hoặc danh mục  
📸 **Ảnh & Video Chất Lượng Cao** - Tạo bằng AI, hướng dẫn sẵn sàng  
📚 **8 Công Thức Truyền Thống** - Phở, Bánh Chưng, Nem Rán, v.v.  
🤖 **Hỗ Trợ AI** - Tạo ảnh/video tự động cho công thức mới

## 📋 Tính Năng

✅ **Giao Diện Hiện Đại**
- Thiết kế responsive, hoạt động tốt trên desktop, tablet, và mobile
- Màu sắc ấm áp, thân thiện với người dùng Việt Nam
- Trải nghiệm người dùng mượt mà với các animation đẹp

✅ **Tìm Kiếm & Lọc**
- Tìm kiếm công thức nấu ăn theo tên hoặc mô tả
- Lọc theo danh mục: Canh, Cơm, Mặn, Chay, Tráng miệng

✅ **Chi Tiết Công Thức**
- Nguyên liệu đầy đủ
- Hướng dẫn từng bước chi tiết
- Thời gian nấu, độ khó, số người phục vụ
- Mẹo nấu ăn hữu ích
- Hình ảnh chi tiết cho mỗi công thức
- Video hướng dẫn nấu từng bước

✅ **Kho Công Thức Phong Phú**
- 8 công thức nấu ăn truyền thống Việt Nam
- Dễ dàng mở rộng thêm công thức mới
- Bao gồm các món nổi tiếng: Phở, Bánh Chưng, Bún Riêu, Cơm Tấm, v.v.
- Mỗi công thức có hình ảnh chất lượng cao
- Liên kết video YouTube cho hướng dẫn nấu ăn

## 🚀 Cách Sử Dụng

1. **Truy Cập Trang Web**
   - Mở trình duyệt web
   - Truy cập: `http://localhost/nauan/` (nếu sử dụng Laragon)

2. **Duyệt Công Thức**
   - Cuộn xuống để xem các danh mục
   - Bấm vào các danh mục để lọc công thức

3. **Tìm Kiếm**
   - Sử dụng ô tìm kiếm để tìm công thức cụ thể
   - Gõ tên món ăn hoặc từ khóa

4. **Xem Chi Tiết**
   - Bấm "Xem Chi Tiết" trên bất kỳ công thức nào
   - Xem nguyên liệu và hướng dẫn từng bước

## 📁 Cấu Trúc Thư Mục

```
nauan/
├── index.html                          # Trang chính
├── css/
│   └── style.css                      # Toàn bộ styling
├── js/
│   └── script.js                      # Lôgic JavaScript
├── README.md                          # Tài liệu này
├── AI_IMAGE_VIDEO_GUIDE.md            # 🆕 Hướng dẫn tạo ảnh/video bằng AI
├── PROMPTS_READY_TO_USE.md            # 🆕 Prompt copy-paste sẵn cho mỗi món
├── update_recipes.py                  # 🆕 Script Python cập nhật URL ảnh/video
└── ai_assets/                         # 🆕 Thư mục lưu trữ ảnh/video local (tuỳ chọn)
```

## 🎨 Danh Sách Công Thức

1. **Phở Bò** - Canh: Phở bò truyền thống với nước dùng đậm đà
2. **Bánh Chưng** - Chay: Bánh chưng Tết vuông vắn
3. **Bún Riêu** - Canh: Bún riêu cua toàn tinh tế
4. **Cơm Tấm Sài Gòn** - Cơm: Cơm tấm kèm thịt nạm nướng
5. **Mốc Nướng Muối Ớt** - Mặn: Mốc nướng muối ớt giòn rụm
6. **Nem Rán** - Mặn: Nem rán khai vị thơm ngon
7. **Gỏi Cuốn** - Chay: Gỏi cuốn tươi mát
8. **Chè Đen** - Tráng miệng: Chè đen mát thanh thoát

## 🛠️ Cách Thêm Công Thức Mới

1. Mở file `js/script.js`
2. Tìm mảng `recipes`
3. Thêm đối tượng công thức mới:

```javascript
{
    id: 9,
    title: "Tên Món Ăn",
    category: "canh|cơm|mặn|chay|tráng miệng",
    emoji: "😋",
    image: "https://example.com/image.jpg",  // URL hình ảnh (Unsplash, Pixabay, etc.)
    video: "https://www.youtube.com/embed/VIDEO_ID",  // Nhúng URL từ YouTube
    description: "Mô tả ngắn gọn",
    time: "1 giờ",
    difficulty: "Dễ|Trung bình|Khó",
    serves: "4 người",
    ingredients: [
        "Nguyên liệu 1",
        "Nguyên liệu 2",
        //...
    ],
    steps: [
        "Bước 1",
        "Bước 2",
        //...
    ]
}
```

### Ghi chú về Hình Ảnh và Video:
- **Hình ảnh**: Sử dụng URL từ Unsplash, Pexels, Pixabay hoặc các trang chia sẻ ảnh miễn phí
- **Video**: Nhúng video từ YouTube bằng cách lấy Video ID (URL: `https://www.youtube.com/watch?v=VIDEO_ID`)

## 🤖 Tạo Ảnh & Video Bằng AI

### Hướng Dẫn Chi Tiết
Để tạo ảnh và video AI chất lượng cao cho từng công thức:

1. **Đọc hướng dẫn đầy đủ**: [AI_IMAGE_VIDEO_GUIDE.md](AI_IMAGE_VIDEO_GUIDE.md)
2. **Sử dụng prompt đã tối ưu**: [PROMPTS_READY_TO_USE.md](PROMPTS_READY_TO_USE.md)
3. **Cập nhật URL vào trang web**: 
   ```bash
   python3 update_recipes.py --interactive
   ```

### Công Cụ Được Khuyến Nghị
- **Ảnh**: Midjourney, DALL-E 3, Leonardo.ai
- **Video**: Runway ML, Synthesia, HeyGen

### Quy Trình Nhanh
```
1. Chọn công cụ AI (Midjourney/DALL-E)
2. Copy prompt từ PROMPTS_READY_TO_USE.md
3. Generate ảnh/video
4. Download file HD
5. Lưu URL hoặc upload lên hosting
6. Chạy script update_recipes.py để cập nhật
```

## 💻 Yêu Cầu Hệ Thống

- Trình duyệt web hiện đại (Chrome, Firefox, Safari, Edge)
- Hỗ trợ JavaScript
- Không cần cài đặt thêm gì
- (Tùy chọn) Python 3.6+ để chạy script cập nhật URL

## 🎯 Các Mục Tiêu Phát Triển

- [x] Hình ảnh cho các công thức
- [x] Video hướng dẫn nấu ăn
- [ ] Tính năng xem công thức yêu thích
- [ ] Danh sách mua sắm nguyên liệu
- [ ] Đánh giá và bình luận bởi người dùng
- [ ] Hệ thống đăng nhập người dùng
- [ ] Chia sẻ công thức trên mạng xã hội

## 📝 Ghi Chú

- Tất cả công thức được dựa trên các phương pháp nấu ăn truyền thống Việt Nam
- Bạn có thể điều chỉnh thành phần theo sở thích cá nhân
- Nấu ăn là một quá trình sáng tạo, hãy thử thêm các biến thể của riêng bạn
- Hình ảnh được lấy từ các nguồn ảnh miễn phí chất lượng cao
- Video được nhúng từ YouTube, bạn có thể thay thế bằng video của riêng mình
- Nếu hình ảnh không tải được, hệ thống sẽ tự động hiển thị emoji thay thế

## ✨ Tác Giả

Trang web được tạo với mục đích chia sẻ kiến thức nấu ăn truyền thống Việt Nam

---

**Chúc bạn nấu ăn ngon! Ăn ngon lắm!** 🍜❤️
