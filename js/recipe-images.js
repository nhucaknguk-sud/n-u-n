/**
 * Vietnamese recipe images.
 * Local files in images/ are preferred so image swaps only require replacing files.
 */

const localRecipeImages = {
    1: "images/pho-bo.jpg",
    2: "images/banh-trung.png",
    3: "images/bun-rieu.png",
    4: "images/com-tam-sai-gon.png",
    5: "images/oc-nuong-muoi-ot.png",
    6: "images/nem-ran.png",
    7: "images/goi-quan.png",
    8: "images/che-den.png",
    9: "images/bun-bo-hue.png",
    10: "images/com-chien-duong-chau.png",
    11: "images/mi-quang.png",
    12: "images/cha-ca-la-vong.png",
    13: "images/canh-chua.png",
    14: "images/banh-mi.png",
    15: "images/lau-thai.png",
    16: "images/tau-hu-nuoc-duong.png"
};

const recipeImages = {
    // Vietnamese Noodle Soups & Broths
    1: localRecipeImages[1], // Phở Bò
    3: localRecipeImages[3], // Bún Riêu
    9: localRecipeImages[9], // Bún Bò Huế
    11: "https://images.unsplash.com/photo-1626787620051-f57b3d3ce1b9?w=500&h=500&fit=crop", // Mì Quảng
    13: "https://images.unsplash.com/photo-1612874742237-6526221fcb3b?w=500&h=500&fit=crop", // Canh Dưa Chua Cá
    15: "https://images.unsplash.com/photo-1626787620051-f57b3d3ce1b9?w=500&h=500&fit=crop", // Lẩu Thái
    19: "https://images.unsplash.com/photo-1626787620051-f57b3d3ce1b9?w=500&h=500&fit=crop", // Tô Mì Vằn Thắn
    21: "https://images.unsplash.com/photo-1612874742237-6526221fcb3b?w=500&h=500&fit=crop", // Canh Dưa Chua Cá
    27: "https://images.unsplash.com/photo-1612874742237-6526221fcb3b?w=500&h=500&fit=crop", // Canh Bưởi Tôm
    30: "https://images.unsplash.com/photo-1626787620051-f57b3d3ce1b9?w=500&h=500&fit=crop", // Bún Chả Hà Nội
    37: "https://images.unsplash.com/photo-1629521667-d74e55e93d50?w=500&h=500&fit=crop", // Canh Sườn Nấu Chua
    41: "https://images.unsplash.com/photo-1612874742237-6526221fcb3b?w=500&h=500&fit=crop", // Canh Tao Tằm
    52: "https://images.unsplash.com/photo-1629521667-d74e55e93d50?w=500&h=500&fit=crop", // Lẩu Cua Cà Rốt
    56: "https://images.unsplash.com/photo-1629521667-d74e55e93d50?w=500&h=500&fit=crop", // Canh Cút Chuối
    59: "https://images.unsplash.com/photo-1626787620051-f57b3d3ce1b9?w=500&h=500&fit=crop", // Bún Thang
    62: "https://images.unsplash.com/photo-1629521667-d74e55e93d50?w=500&h=500&fit=crop", // Canh Dền

    // Rice & Rice Dishes
    2: localRecipeImages[2], // Bánh Chưng
    4: localRecipeImages[4], // Cơm Tấm Sài Gòn
    10: localRecipeImages[10], // Cơm Chiên Dương Châu
    14: "https://images.unsplash.com/photo-1616271062365-3de33a1be3eb?w=500&h=500&fit=crop", // Cơm Cháy Tôm
    22: "https://images.unsplash.com/photo-1603894542802-f03eed1e6c7d?w=500&h=500&fit=crop", // Cơm Cháy Tôm
    29: "https://images.unsplash.com/photo-1616271062365-3de33a1be3eb?w=500&h=500&fit=crop", // Cơm Cá Trích
    39: "https://images.unsplash.com/photo-1616271062365-3de33a1be3eb?w=500&h=500&fit=crop", // Cơm Tươi Phủ
    42: "https://images.unsplash.com/photo-1551084328-4991713235d9?w=500&h=500&fit=crop", // Bánh Chưng Cuốn
    48: "https://images.unsplash.com/photo-1603894542802-f03eed1e6c7d?w=500&h=500&fit=crop", // Cơm Tôi Chiêu
    53: "https://images.unsplash.com/photo-1603894542802-f03eed1e6c7d?w=500&h=500&fit=crop", // Cơm Chiên Kiểu Thái
    66: "https://images.unsplash.com/photo-1603894542802-f03eed1e6c7d?w=500&h=500&fit=crop", // Cơm Cà Chua Tôi

    // Special Banh Khoai
    12: "https://images.unsplash.com/photo-1609834902200-03ee94b1b909?w=500&h=500&fit=crop", // Bánh Hoai
    20: "https://images.unsplash.com/photo-1609834902200-03ee94b1b909?w=500&h=500&fit=crop", // Bánh Khoai Hội An
    51: "https://images.unsplash.com/photo-1609834902200-03ee94b1b909?w=500&h=500&fit=crop", // Bánh Hoai Cuốn

    // Fish & Seafood Dishes
    5: localRecipeImages[5], // Mốc Nướng Muối Ớt
    18: "https://images.unsplash.com/photo-1604958259407-9f58f73f0354?w=500&h=500&fit=crop", // Lẩu Cua Cà Chua
    28: "https://images.unsplash.com/photo-1551116328-4991713235d9?w=500&h=500&fit=crop", // Mực Nướng Mỡ Hành
    40: "https://images.unsplash.com/photo-1551116328-4991713235d9?w=500&h=500&fit=crop", // Mò Nướng Muối Ớt
    44: "https://images.unsplash.com/photo-1595521624815-90bb28b1e2b9?w=500&h=500&fit=crop", // Cá Nướng Riềng
    45: "https://images.unsplash.com/photo-1551116328-4991713235d9?w=500&h=500&fit=crop", // Mốc Hấp Miso
    49: "https://images.unsplash.com/photo-1551116328-4991713235d9?w=500&h=500&fit=crop", // Mực Xào Ớt
    50: "https://images.unsplash.com/photo-1604958259407-9f58f73f0354?w=500&h=500&fit=crop", // Cua Hấp Rượu
    58: "https://images.unsplash.com/photo-1595521624815-90bb28b1e2b9?w=500&h=500&fit=crop", // Cá Kho Tiêu

    // Grilled & Roasted Meats
    6: localRecipeImages[6], // Nem Rán
    16: "https://images.unsplash.com/photo-1639533635651-8c4e1f46c0ba?w=500&h=500&fit=crop", // Tôm Cốc Tắc
    17: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=500&h=500&fit=crop", // Bò Nướng Lá Chanh
    23: "https://images.unsplash.com/photo-1482769557014-da9dd8fac0a6?w=500&h=500&fit=crop", // Thịt Kho Tàu
    25: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=500&h=500&fit=crop", // Bò Nướng Lá Chanh
    31: "https://images.unsplash.com/photo-1482769557014-da9dd8fac0a6?w=500&h=500&fit=crop", // Tiết Canh
    32: "https://images.unsplash.com/photo-1486286701208-ce545070a45d?w=500&h=500&fit=crop", // Gà Luộc Mắm Tôm
    33: "https://images.unsplash.com/photo-1639533635651-8c4e1f46c0ba?w=500&h=500&fit=crop", // Cộng Chiên
    36: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&h=500&fit=crop", // Trứng Cút Nướng Muối
    43: "https://images.unsplash.com/photo-1639533635651-8c4e1f46c0ba?w=500&h=500&fit=crop", // Tôm Bốc Cháy
    47: "https://images.unsplash.com/photo-1562547256-c0a2e52d068a?w=500&h=500&fit=crop", // Chả Lụa Hà Nội
    55: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=500&h=500&fit=crop", // Thịt Nướng Cuốn Lá Lý
    57: "https://images.unsplash.com/photo-1639533635651-8c4e1f46c0ba?w=500&h=500&fit=crop", // Tôm Rang Dừa
    63: "https://images.unsplash.com/photo-1639533635651-8c4e1f46c0ba?w=500&h=500&fit=crop", // Tôm Rang Thơm
    64: "https://images.unsplash.com/photo-1482769557014-da9dd8fac0a6?w=500&h=500&fit=crop", // Giò Heo Kho Trứng
    67: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=500&h=500&fit=crop", // Bò Xào Hành Tây

    // Fresh Rolls & Salads
    7: localRecipeImages[7], // Gỏi Cuốn
    26: "https://images.unsplash.com/photo-1604899573693-2c1b6c6c6c6?w=500&h=500&fit=crop", // Gỏi Cá Sống
    34: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=500&fit=crop", // Rau Muống Xào Tỏi
    38: "https://images.unsplash.com/photo-1604899573693-2c1b6c6c6c6?w=500&h=500&fit=crop", // Gỏi Đu Đủ
    54: "https://images.unsplash.com/photo-1604899573693-2c1b6c6c6c6?w=500&h=500&fit=crop", // Gỏi Bao Tử
    61: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=500&fit=crop", // Cà Pháo Thịt Lợn
    65: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=500&fit=crop", // Gỏi Rau Sống

    // Egg Based Dishes
    14: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&h=500&fit=crop", // Bánh Mì Việt (Omelette bread)
    46: "https://images.unsplash.com/photo-1585589137ac11ff26f1b6d79f00e5f0e8f5f5f?w=500&h=500&fit=crop", // Dưa Leo Omelette
    60: "https://images.unsplash.com/photo-1585589137ac11ff26f1b6d79f00e5f0e8f5f5f?w=500&h=500&fit=crop", // Trứng Cuốn Nước Mắm

    // Desserts & Beverages
    8: localRecipeImages[8], // Chè Đen
    16: "https://images.unsplash.com/photo-1563805042-7684c019e157?w=500&h=500&fit=crop", // Tàu Hủ Nước Đường
    17: "https://images.unsplash.com/photo-1585589137ac11ff26f1b6d79f00e5f0e8f5f5f?w=500&h=500&fit=crop", // Bánh Tráng Nướng Me
    68: "https://images.unsplash.com/photo-1563805042-7684c019e157?w=500&h=500&fit=crop" // Chè Sắn Dây
};

Object.assign(recipeImages, localRecipeImages);

/**
 * Apply recipe images
 * Updates all recipe objects with their specific images
 */
function updateRecipeImages() {
    if (typeof recipes !== 'undefined' && Array.isArray(recipes)) {
        recipes.forEach(recipe => {
            const hasLocalCustomImage = typeof recipe.image === 'string' &&
                recipe.image.length > 0 &&
                !/^https?:\/\//i.test(recipe.image);

            if (recipeImages[recipe.id] && !hasLocalCustomImage) {
                recipe.image = recipeImages[recipe.id];
            }
        });
        // Refresh display with new images
        if (typeof displayRecipes === 'function') {
            const currentDisplay = filteredRecipes && filteredRecipes.length > 0 ? filteredRecipes : recipes;
            displayRecipes(currentDisplay);
        }
        return true;
    }
    return false;
}

// Apply images when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateRecipeImages);
} else {
    updateRecipeImages();
}
