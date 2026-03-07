/**
 * Vietnamese Recipes Image URLs
 * Mapping recipes with specific food images from free sources
 */

const recipeImages = {
    // ID: specific image URL for the dish
    1: "https://images.unsplash.com/photo-1582878657708-bc07aa60bd45?w=500&h=500&fit=crop", // Phở Bò
    2: "https://images.unsplash.com/photo-1618053743606-7f8d0b814901?w=500&h=500&fit=crop", // Bánh Chưng
    3: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=500&fit=crop", // Bún Riêu
    4: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop", // Cơm Tấm
    5: "https://images.unsplash.com/photo-1580959375944-abd7e991f971?w=500&h=500&fit=crop", // Cá Nướng
    6: "https://images.unsplash.com/photo-1609501676725-7186f017a4b1?w=500&h=500&fit=crop", // Nem Rán
    7: "https://images.unsplash.com/photo-1585032226651-759b98d7afd4?w=500&h=500&fit=crop", // Gỏi Cuốn
    8: "https://images.unsplash.com/photo-1545689519-275605dc91fd?w=500&h=500&fit=crop", // Chè Đen
    9: "https://images.unsplash.com/photo-1582878657708-bc07aa60bd45?w=500&h=500&fit=crop", // Bún Bò Huế
    10: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop", // Cơm Chiên Dương Châu
    11: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&h=500&fit=crop", // Tô Mì Vằn Thắn
    12: "https://images.unsplash.com/photo-1609501676725-7186f017a4b1?w=500&h=500&fit=crop", // Bánh Hoai
    13: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop", // Canh Dưa Chua Cá
    14: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop", // Cơm Cháy Tôm
    15: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=500&h=500&fit=crop", // Thịt Kho Tàu
    16: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop", // Tôm Cốc Tắc
    17: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=500&h=500&fit=crop", // Bò Nướng Lá Chanh
    18: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&h=500&fit=crop", // Gỏi Cá Sống
    19: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&h=500&fit=crop", // Mì Vằn Thắn
    20: "https://images.unsplash.com/photo-1609501676725-7186f017a4b1?w=500&h=500&fit=crop", // Bánh Hoai Hội An
    21: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop", // Canh Dưa Chua Cá
    22: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop", // Cơm Cháy Tôm
    23: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=500&h=500&fit=crop", // Thịt Kho Tàu
    24: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop", // Tôm Cốc Tắc
    25: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=500&h=500&fit=crop", // Bò Nướng Lá Chanh
    26: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&h=500&fit=crop", // Gỏi Cá Sống
    27: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop", // Canh Bưởi Tôm
    28: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=500&fit=crop", // Mực Nướng Mỡ Hành
    29: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop", // Cơm Cá Trích
    30: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=500&fit=crop", // Bún Chả
    31: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop", // Tiết Canh
    32: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=500&h=500&fit=crop", // Gà Luộc Mắm Tôm
    33: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop", // Cộng Chiên
    34: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&h=500&fit=crop", // Rau Muống Xào Tỏi
    35: "https://images.unsplash.com/photo-1554080221-cbf002563ae9?w=500&h=500&fit=crop", // Cua Rang Me
    36: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop", // Trứng Cút Nướng
    37: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop", // Canh Sườn
    38: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&h=500&fit=crop", // Gỏi Đu Đủ
    39: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop", // Cơm Tươi Phủ
    40: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=500&fit=crop", // Mò Nướng Muối Ớt
    41: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop", // Canh Tao Tằm
    42: "https://images.unsplash.com/photo-1618053743606-7f8d0b814901?w=500&h=500&fit=crop", // Bánh Chưng Cuốn
    43: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop", // Tôm Bốc Cháy
    44: "https://images.unsplash.com/photo-1580959375944-abd7e991f971?w=500&h=500&fit=crop", // Cá Nướng Riềng
    45: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop", // Mốc Hấp Miso
    46: "https://images.unsplash.com/photo-1585032226651-759b98d7afd4?w=500&h=500&fit=crop", // Dưa Leo Omelette
    47: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop", // Chả Lụa
    48: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop", // Cơm Tôi Chiêu
    49: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=500&fit=crop", // Mực Xào Ớt
    50: "https://images.unsplash.com/photo-1554080221-cbf002563ae9?w=500&h=500&fit=crop", // Cua Hấp Rượu
    51: "https://images.unsplash.com/photo-1609501676725-7186f017a4b1?w=500&h=500&fit=crop", // Bánh Hoai Cuốn
    52: "https://images.unsplash.com/photo-1554080221-cbf002563ae9?w=500&h=500&fit=crop", // Lẩu Cua Cà Rốt
    53: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop", // Cơm Chiên Kiểu Thái
    54: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&h=500&fit=crop", // Gỏi Bao Tử
    55: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=500&h=500&fit=crop", // Thịt Nướng Cuốn Lá Lý
    56: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop", // Canh Cút Chuối
    57: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop", // Tôm Rang Dừa
    58: "https://images.unsplash.com/photo-1580959375944-abd7e991f971?w=500&h=500&fit=crop", // Cá Kho Tiêu
    59: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=500&fit=crop", // Bún Thang
    60: "https://images.unsplash.com/photo-1585032226651-759b98d7afd4?w=500&h=500&fit=crop", // Trứng Cuốn
    61: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&h=500&fit=crop", // Cà Pháo Thịt
    62: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop", // Canh Dền
    63: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop", // Tôm Rang Thơm
    64: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop", // Giò Heo Kho Trứng
    65: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&h=500&fit=crop", // Gỏi Rau Sống
    66: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop", // Cơm Cà Chua
    67: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=500&h=500&fit=crop", // Bò Xào Hành Tây
    68: "https://images.unsplash.com/photo-1545689519-275605dc91fd?w=500&h=500&fit=crop" // Chè Sắn Dây
};

/**
 * Apply recipe images
 * Updates all recipe objects with their specific images
 */
function updateRecipeImages() {
    if (typeof recipes !== 'undefined' && Array.isArray(recipes)) {
        recipes.forEach(recipe => {
            if (recipeImages[recipe.id]) {
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
