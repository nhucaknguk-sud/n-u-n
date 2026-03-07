# ✨ Special Features Guide

Ứng dụng Nấu Ăn Việt của bạn giờ được trang bị với các tính năng đặc biệt để cải thiện trải nghiệm người dùng!

## 🎯 Các Tính Năng Mới

### 1. ❤️ Yêu Thích / Bookmark
**Mô tả:** Lưu các công thức yêu thích của bạn
- Nhấn vào icon trái tim trên mỗi thẻ công thức
- Các công thức yêu thích được lưu vào localStorage
- Quản lý danh sách yêu thích của bạn

**Cách sử dụng:**
```javascript
// Thêm vào yêu thích
favoritesManager.addFavorite(recipeId);

// Xóa khỏi yêu thích
favoritesManager.removeFavorite(recipeId);

// Kiểm tra nếu là yêu thích
if (favoritesManager.isFavorite(recipeId)) {
    // Công thức này là yêu thích
}
```

### 2. ⭐ Rating & Đánh Giá
**Mô tả:** Đánh giá công thức từ 1-5 sao
- Nhấp vào các sao để đánh giá
- Đánh giá được lưu tự động
- Xem đánh giá trung bình của mỗi công thức

**Cách sử dụng:**
```javascript
// Đặt rating
ratingManager.setRating(recipeId, 5);

// Lấy rating
const rating = ratingManager.getRating(recipeId);

// Lấy rating trung bình
const avg = ratingManager.getAverageRating(recipeId);
```

### 3. 🔍 Tìm Kiếm Nâng Cao
**Mô tả:** Tìm kiếm công thức theo nhiều tiêu chí
- Tìm theo nguyên liệu
- Lọc theo độ khó (Dễ / Trung bình / Khó)
- Chỉ định thời gian nấu tối đa
- Chọn danh mục

**Cách sử dụng:**
```javascript
// Mở dialog tìm kiếm nâng cao
showAdvancedSearch();

// Thực hiện tìm kiếm kết hợp
performAdvancedSearch();

// Hoặc dùng API trực tiếp
const results = advancedSearch.combinedSearch({
    ingredient: 'tôm',
    difficulty: 'Dễ',
    maxTime: 60,
    category: 'canh'
});
```

### 4. 📚 Collections (Danh Sách)
**Mô tả:** Tạo và quản lý danh sách công thức
- Tạo danh sách tùy chỉnh
- Nhóm công thức theo chủ đề
- Danh sách mặc định: Yêu Thích, Muốn Thử, Dễ Nấu, Bữa Chiều

**Cách sử dụng:**
```javascript
// Tạo danh sách mới
collectionsManager.createCollection('Ăn Vặt');

// Thêm công thức vào danh sách
collectionsManager.addToCollection('Dễ Nấu', recipeId);

// Lấy danh sách
const easyRecipes = collectionsManager.getCollection('Dễ Nấu');

// Xóa khỏi danh sách
collectionsManager.removeFromCollection('Muốn Thử', recipeId);
```

### 5. 🔔 Toast Notifications
**Mô tả:** Thông báo phản hồi tức thời
- Thông báo thành công (xanh)
- Thông báo lỗi (đỏ)
- Thông báo thông tin (xanh dương)

**Cách sử dụng:**
```javascript
showToast('❤️ Đã thêm vào yêu thích!', 'success');
showToast('Có lỗi xảy ra', 'error');
showToast('Thông tin cập nhật', 'info');
```

## 🏗️ Cấu Trúc Dữ Liệu

### Local Storage Keys
```javascript
'nauan_favorites'      // Danh sách yêu thích [id1, id2, ...]
'nauan_ratings'        // Đánh giá {recipeId: rating, ...}
'nauan_collections'    // Danh sách {name: [id1, id2], ...}
```

## 📱 Responsive Design
- ✅ Desktop (1200px+)
- ✅ Tablet (768px - 1199px)
- ✅ Mobile (< 768px)

## 🛠️ Phát Triển Thêm

### Thêm tính năng mới
Tất cả logic nằm trong `js/special-features.js`:

```javascript
// Tạo class mới
class NewFeature {
    constructor() {
        this.storageKey = 'nauan_newfeature';
        this.data = this.loadData();
    }
    
    loadData() {
        const stored = localStorage.getItem(this.storageKey);
        return stored ? JSON.parse(stored) : [];
    }
    
    saveData() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.data));
    }
}

// Export global
let newFeatureManager = new NewFeature();
```

## 🎨 Customization

### Thay đổi màu sắc
Chỉnh sửa trong `css/style.css`:
```css
:root {
    --primary-color: #d4a574;      /* Màu chính */
    --secondary-color: #8b4513;    /* Màu phụ */
    --text-color: #333;             /* Màu text */
    --light-bg: #f9f7f4;            /* Màu nền nhẹ */
}
```

### Thay đổi animations
```css
--transition: all 0.3s ease;  /* Chỉnh sửa thời gian transition */
```

## 🐛 Troubleshooting

### Yêu thích không lưu
- Kiểm tra localStorage có bị disable không
- Xóa cache và reload page
- Kiểm tra browser console cho errors

### Rating không hiển thị
- Đảm bảo `ratingManager` được khởi tạo
- Kiểm tra `special-features.js` được load trước `script.js`

### Advanced Search không hoạt động
- Kiểm tra `advancedSearch` được khởi tạo
- Đảm bảo input values đúng định dạng
- Kiểm tra recipes array có dữ liệu không

## 📚 API Reference

### FavoritesManager
```javascript
favoritesManager.addFavorite(recipeId)      // Add
favoritesManager.removeFavorite(recipeId)   // Remove
favoritesManager.toggleFavorite(recipeId)   // Toggle
favoritesManager.isFavorite(recipeId)       // Check
favoritesManager.getFavorites()              // Get all
favoritesManager.updateUI()                  // Update UI
```

### RatingManager
```javascript
ratingManager.setRating(recipeId, rating)       // Set (1-5)
ratingManager.getRating(recipeId)               // Get
ratingManager.getAverageRating(recipeId)        // Get average
```

### CollectionsManager
```javascript
collectionsManager.createCollection(name)                    // Create
collectionsManager.addToCollection(name, recipeId)          // Add
collectionsManager.removeFromCollection(name, recipeId)     // Remove
collectionsManager.getCollection(name)                      // Get
collectionsManager.getAllCollections()                      // Get all
```

### AdvancedSearch
```javascript
advancedSearch.searchByIngredient(ingredient)               // By ingredient
advancedSearch.searchByTime(minTime, maxTime)               // By time
advancedSearch.searchByDifficulty(difficulty)               // By difficulty
advancedSearch.searchByServes(serves)                       // By serves
advancedSearch.combinedSearch(filters)                      // Combined
```

## 🚀 Deployment

Tất cả features tự động lưu vào localStorage, không cần backend:
1. Mở ứng dụng trong browser
2. Sử dụng các features
3. Dữ liệu được lưu tự động

---

**Phiên bản:** 1.0.0  
**Ngày cập nhật:** March 7, 2026  
**Tác giả:** AI Advisor  
