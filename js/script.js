// Recipe Data
const recipes = [
    {
        id: 1,
        title: "Phở Bò",
        category: "canh",
        emoji: "🍜",
        image: "https://images.unsplash.com/photo-1582878657708-bc07aa60bd45?w=500&h=500&fit=crop",
        video: "https://www.youtube.com/embed/cZtoFQXsmls",
        description: "Phở bò là món canh truyền thống của Việt Nam với nước dùng đậm đà",
        time: "3 giờ",
        difficulty: "Trung bình",
        serves: "4 người",
        ingredients: [
            "1 kg xương bò",
            "500g thịt bò nạm",
            "1 cây hành khô",
            "1 miếng gừng",
            "2 quế",
            "2 nhụy hoa tai",
            "2 thìa đường",
            "3 thìa nước mắm",
            "500g bánh phở",
            "Hành tươi, ngò, bạc hà"
        ],
        steps: [
            "Xương bò rửa sạch, luộc sơ qua nước sôi",
            "Hành gừng nướng chảy trên lửa",
            "Cho xương, thịt vào nước sôi, nêm gia vị",
            "Nấu từ 2-3 giờ đến khi xương ra vị",
            "Lọc nước, nêm lại cho vừa ăn",
            "Luộc bánh phở sơ qua nước sôi nóng",
            "Đổ nước dùng nóng vào chén bánh phở",
            "Thêm hành, ngò, bạc hà và thực khách tự thêm nước mắm"
        ]
    },
    {
        id: 2,
        title: "Bánh Chưng",
        category: "chay",
        emoji: "📦",
        image: "https://images.unsplash.com/photo-1618053743606-7f8d0b814901?w=500&h=500&fit=crop",
        video: "https://www.youtube.com/embed/H-n2OvHb9xw",
        description: "Bánh chưng là món ăn truyền thống dịp Tết với hình vuông",
        time: "4 giờ",
        difficulty: "Khó",
        serves: "8 người",
        ingredients: [
            "1 kg gạo nếp",
            "500g thịt ba rọi",
            "200g đậu xanh",
            "50g mèn dong",
            "2 thìa nước mắm",
            "Muối, tiêu",
            "Lá dong"
        ],
        steps: [
            "Ngâm gạo nếp 1 tối",
            "Luộc đậu xanh chín mềm",
            "Thịt muối và đã cắt miếng",
            "Trộn gạo nếp với đậu xanh và thịt",
            "Xếp lát lá dong lên",
            "Đổ hỗn hợp vào, gói cẩn thận",
            "Nấu trong nước sôi 4-5 giờ",
            "Lấy ra để nguội trước khi ăn"
        ]
    },
    {
        id: 3,
        title: "Bún Riêu",
        category: "canh",
        emoji: "🍜",
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=500&fit=crop",
        video: "https://www.youtube.com/embed/MYMmzxSm3uA",
        description: "Bún riêu là một trong những món canh ngon nhất của Việt Nam",
        time: "2.5 giờ",
        difficulty: "Trung bình",
        serves: "4 người",
        ingredients: [
            "500g cua biển",
            "200g tôm",
            "200g bún tươi",
            "1 cục mắm cua",
            "5 quả cà chua",
            "50g giá đỗ",
            "2 thìa dầu ăn",
            "Hành tôm, nước mắm"
        ],
        steps: [
            "Rửa cua sạch, xay nhuyễn",
            "Nêm mắm cua, tôm vào hỗn hợp cua",
            "Nấu lửa nhỏ để cua chìm",
            "Cho cà chua cắt khúc vào",
            "Luộc bún qua nước sôi",
            "Cho bún vào chén, đổ nước dùng",
            "Thêm giá đỗ, hành tôm",
            "Ăn ngay khi còn nóng"
        ]
    },
    {
        id: 4,
        title: "Cơm Tấm Sài Gòn",
        category: "cơm",
        emoji: "🍚",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop",
        video: "https://www.youtube.com/embed/5eZNnEhCGkk",
        description: "Cơm tấm kèm với thịt nạm nướng là đặc sản nổi tiếng Sài Gòn",
        time: "1 giờ",
        difficulty: "Dễ",
        serves: "2 người",
        ingredients: [
            "200g cơm tấm",
            "150g thịt nạm",
            "2 quả trứng",
            "1 quả cà chua",
            "1 số ớt đỏ tươi",
            "Nước mắm chua, dầu ăn"
        ],
        steps: [
            "Thịt nạm nướng charm cho nắng và tinh",
            "Luộc cơm theo cách thôi thường",
            "Rán trứng ốp la cho chín gấp",
            "Xếp thịt nạm lên cơm tấm",
            "Thêm trứng ốp la ở bên",
            "Vân cà chua, ớt và nước mắm chua"
        ]
    },
    {
        id: 5,
        title: "Mốc Nướng Muối Ớt",
        category: "mặn",
        emoji: "🐟",
        image: "https://images.unsplash.com/photo-1580959375944-abd7e991f971?w=500&h=500&fit=crop",
        video: "https://www.youtube.com/embed/4dpEWpvZcbI",
        description: "Mốc nướng muối ớt là một trong những món ăn hấp dẫn bậc nhất",
        time: "45 phút",
        difficulty: "Dễ",
        serves: "3 người",
        ingredients: [
            "800g mốc tươi",
            "3 thìa muối",
            "3 quả ớt đỏ",
            "2 thìa tiêu đen",
            "3 lá chanh",
            "Dầu ăn",
            "Hành tây"
        ],
        steps: [
            "Mốc rửa sạch, cạo vảy",
            "Ướp muối muối ớt khoảng 30 phút",
            "Nướng trên bếp than hoặc vỉ nướng",
            "Nướng vàng 2 mặt, không khô",
            "Quết dầu ăn khi nướng",
            "Trang trí với hành tây, ớt và chanh",
            "Ăn nóng khi vừa nướng xong"
        ]
    },
    {
        id: 6,
        title: "Nem Rán",
        category: "mặn",
        emoji: "🌮",
        image: "https://images.unsplash.com/photo-1609501676725-7186f017a4b1?w=500&h=500&fit=crop",
        video: "https://www.youtube.com/embed/J4aPdyj7Cpc",
        description: "Nem rán là một trong những món ăn khai vị yêu thích nhất",
        time: "1 giờ",
        difficulty: "Trung bình",
        serves: "4 người",
        ingredients: [
            "200g thịt lợn xay",
            "100g tôm xay",
            "100g giá",
            "1 con cà rốt",
            "1 cốc nấm hương",
            "Bánh tráng",
            "Nước mắm chua, dầu ăn"
        ],
        steps: [
            "Nấm và cà rốt thái sợi và trần",
            "Trộn thịt, tôm, giá, nấm, cà rốt",
            "Nêm nước mắm, muối và tiêu",
            "Cuốn hỗn hợp vào bánh tráng",
            "Cuộn kín, dán miếng bánh tráng ở cuối",
            "Chiên vàng ngoài, giòn trong",
            "Cắt đôi, xếp đẹp trên đĩa",
            "Ăn kèm nước mắm chua và rau sống"
        ]
    },
    {
        id: 7,
        title: "Gỏi Cuốn",
        category: "chay",
        emoji: "🥒",
        image: "https://images.unsplash.com/photo-1585032226651-759b98d7afd4?w=500&h=500&fit=crop",
        video: "https://www.youtube.com/embed/Y0dOUqj8EpE",
        description: "Gỏi cuốn là món khai vị làm lạnh tươi mát lâm",
        time: "30 phút",
        difficulty: "Dễ",
        serves: "4 người",
        ingredients: [
            "1 gói bánh tráng cuốn",
            "200g tôm luộc",
            "200g thịt lợn luộc",
            "100g giá sống",
            "Rau thơm, hành",
            "Nước mắm chua"
        ],
        steps: [
            "Bánh tráng ngâm nước ấm cho mềm",
            "Tôm và thịt cắt sợi dài",
            "Xếp bánh tráng lên mặt phẳng",
            "Xếp tôm, thịt, giá, rau thơm lên đó",
            "Cuốn lại theo hình cầu lồi",
            "Cắt đôi sau khi cuốn xong",
            "Xếp đẹp trên đĩa, ăn kèm với nước mắm chua"
        ]
    },
    {
        id: 8,
        title: "Chè Đen",
        category: "tráng miệng",
        emoji: "🥤",
        image: "https://images.unsplash.com/photo-1545689519-275605dc91fd?w=500&h=500&fit=crop",
        video: "https://www.youtube.com/embed/7ykPVb6KUlA",
        description: "Chè đen là một loại chè có công dụng mát và thanh thoát",
        time: "2 giờ",
        difficulty: "Dễ",
        serves: "6 người",
        ingredients: [
            "200g đậu đen",
            "1 lít nước",
            "200ml nước cốt dừa",
            "100g đường",
            "Một chút muối"
        ],
        steps: [
            "Đậu đen rửa sạch, ngâm 30 phút",
            "Nấu đậu đen trong nước cho mềm",
            "Khi mềm thêm sữa dừa vào",
            "Nêm đường vừa ăn",
            "Nấu thêm 10 phút cho sữa dừa vào đậu",
            "Tắt bếp, để nguội",
            "Rót sang bát, thêm đá",
            "Ăn lạnh hoặc ấm theo sở thích"
        ]
    },
    {
        id: 9,
        title: "Bún Bò Huế",
        category: "canh",
        emoji: "🍜",
        image: "https://images.unsplash.com/photo-1582878657708-bc07aa60bd45?w=500&h=500&fit=crop",
        video: "https://www.youtube.com/embed/mNrXh-9TTNE",
        description: "Bún bò Huế là một món canh nổi tiếng từ Huế với hương vị cay nồng",
        time: "2.5 giờ",
        difficulty: "Trung bình",
        serves: "4 người",
        ingredients: [
            "500g thịt bò",
            "300g giò heo",
            "200g bún tươi",
            "3 thìa sốt cách",
            "2 thìa mắm cua",
            "1 cây hành khô",
            "1 miếng gừng",
            "3 quả ớt đỏ",
            "Rau thơm, rau muống"
        ],
        steps: [
            "Bò và giò heo luộc chín, cắt thành từng miếng",
            "Hành gừng nướng để có mùi thơm",
            "Nước dùng được nấu từ xương heo và các gia vị",
            "Thêm sốt cách và mắm cua vào nước dùng",
            "Nấu lửa nhỏ khoảng 1 giờ cho hỏa vị thẩm thấu",
            "Luộc bún qua nước sôi",
            "Xếp bún vào chén, đổ nước dùng nóng",
            "Thêm thịt bò, giò heo, ớt và rau thơm"
        ]
    },
    {
        id: 10,
        title: "Cơm Chiên Dương Châu",
        category: "cơm",
        emoji: "🍚",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop",
        video: "https://www.youtube.com/embed/sAIbatfNkL8",
        description: "Cơm chiên dương châu với tôm, thịt và trứng là một món ăn ngon và bổ dưỡng",
        time: "30 phút",
        difficulty: "Dễ",
        serves: "2 người",
        ingredients: [
            "2 bát cơm cơm",
            "100g tôm",
            "100g thịt heo",
            "2 quả trứng",
            "1 cơm đậu Hà Lan",
            "50g cà rốt",
            "2 thìa dầu ăn",
            "1 thìa nước mắm",
            "Hành lá, tỏi"
        ],
        steps: [
            "Rán tỏi với dầu ăn cho thơm",
            "Cho tôm, thịt vào rán chín",
            "Thêm cà rốt và đậu Hà Lan vào rán",
            "Đổ trứng vào, đánh tan và trộn đều",
            "Thêm cơm vào, đảo cơm để riêng từng hạt",
            "Nêm nước mắm vừa ăn",
            "Rắc hành lá và tỏi chiên lên trước khi ăn"
        ]
    },
    {
        id: 11,
        title: "Mì Quảng",
        category: "canh",
        emoji: "🍜",
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=500&fit=crop",
        video: "https://www.youtube.com/embed/j5n5DqH5yNM",
        description: "Mì Quảng là món ăn đặc sản nổi tiếng của vùng Quảng Nam",
        time: "1.5 giờ",
        difficulty: "Trung bình",
        serves: "3 người",
        ingredients: [
            "300g mì Quảng",
            "200g tôm",
            "200g thịt lợn",
            "100g bánh tráng chiên",
            "3 quả trứng",
            "1 bát đậu phộng",
            "500ml nước dùng gà",
            "Rau thơm, cà rốt"
        ],
        steps: [
            "Nước dùng được nấu từ gà hoặc xương heo",
            "Tôm và thịt được luộc chín rồi cắt sợi",
            "Rán trứng thành bánh mỏng",
            "Mì Quảng luộc sơ qua nước sôi",
            "Xếp mì lên đĩa, đổ nước dùng",
            "Thêm tôm, thịt, trứng chiên, bánh tráng",
            "Rắc đậu phộng rang và rau thơm lên trên"
        ]
    },
    {
        id: 12,
        title: "Chả Cá Lã Vọng",
        category: "mặn",
        emoji: "🐟",
        image: "https://images.unsplash.com/photo-1580959375944-abd7e991f971?w=500&h=500&fit=crop",
        video: "https://www.youtube.com/embed/f9ZP3_g-YAE",
        description: "Chả cá Lã Vọng là một đặc sản nổi tiếng của Hà Nội",
        time: "1 giờ",
        difficulty: "Trung bình",
        serves: "3 người",
        ingredients: [
            "500g cá lóc",
            "30g cà chua à o",
            "2 thìa mắm tôm",
            "1 cây hành",
            "2 miếng gừng",
            "2 thìa dầu ăn",
            "Bún tươi, rau thơm"
        ],
        steps: [
            "Cá lóc được làm sạch, bỏ gai và hạt",
            "Cá được trộn với mắm tôm, cà chua à o",
            "Hành gừng thái mỏng để tăng mùi thơm",
            "Nướng cá trong chảo nóng với dầu ăn",
            "Nướng 15-20 phút cho cá chín và giòn",
            "Xếp chả cá lên đĩa với bún tươi",
            "Thêm rau thơm, nước mắm chua khi ăn"
        ]
    },
    {
        id: 13,
        title: "Canh Chua Cá",
        category: "canh",
        emoji: "🍲",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop",
        video: "https://www.youtube.com/embed/hMfqCCKPeNQ",
        description: "Canh chua cá là một món canh cổ truyền với vị chua mát và ngon",
        time: "1.5 giờ",
        difficulty: "Trung bình",
        serves: "4 người",
        ingredients: [
            "1 con cá (khoảng 800g)",
            "200g dứa tươi",
            "100g cà chua",
            "50g tép",
            "30g rau diếp cá",
            "2 thìa cà chua",
            "1 thìa nước mắm",
            "Hành, tỏi"
        ],
        steps: [
            "Cá được rửa sạch, cắt thành từng miếng",
            "Rán tỏi, hành cho thơm",
            "Cho cá vào, rán nhẹ cho cá có màu",
            "Đổ nước vào, nấu cho cá chín",
            "Thêm dứa, cà chua vào nấu",
            "Nêm cà chua, nước mắm vừa ăn",
            "Trước khi ăn, thêm rau diếp cá"
        ]
    },
    {
        id: 14,
        title: "Bánh Mì Việt",
        category: "cơm",
        emoji: "🥖",
        image: "https://images.unsplash.com/photo-1585032226651-759b98d7afd4?w=500&h=500&fit=crop",
        video: "https://www.youtube.com/embed/OVOkAH2gDQA",
        description: "Bánh mì Việt là combination hoàn hảo giữa bánh mới và nhân thơm ngon",
        time: "15 phút",
        difficulty: "Dễ",
        serves: "1 người",
        ingredients: [
            "1 ổ bánh mì",
            "100g thịt lợn chặt",
            "2 thìa pâté",
            "1 quả trứng",
            "1 quả dưa chuột",
            "Rau thơm, ớt",
            "Nước mắm chua, mayonnaise"
        ],
        steps: [
            "Bánh mì cắt dọc, nhoét nhẹ",
            "Thoa một lớp pâté vào bánh",
            "Thêm thịt lợn chặp lên trên",
            "Xếp trứng chiên, dưa chuột thái sợi",
            "Thêm rau thơm và ớt theo sở thích",
            "Quết mayonnaise và nước mắm chua",
            "Ăn nóng ngay khi vừa làm xong"
        ]
    },
    {
        id: 15,
        title: "Lẩu Thái",
        category: "canh",
        emoji: "🍲",
        image: "https://images.unsplash.com/photo-1582878657708-bc07aa60bd45?w=500&h=500&fit=crop",
        video: "https://www.youtube.com/embed/DVu-Cfl5m8U",
        description: "Lẩu Thái nóng hổi với nước dùng cay nồng từ nước cốt dừa và ớt",
        time: "1 giờ",
        difficulty: "Trung bình",
        serves: "4 người",
        ingredients: [
            "400g tôm",
            "300g thịt gà",
            "200g nấm các loại",
            "1 lon nước cốt dừa (400ml)",
            "3 thìa tương đỏ",
            "1 thìa nước mắm",
            "5 quả ớt đỏ",
            "Hành tây, tỏi"
        ],
        steps: [
            "Đun nước cốt dừa với tương đỏ cho sôi",
            "Thêm ớt và các gia vị vào",
            "Cho tôm, gà vào nấu cho chín",
            "Thêm nấm và hành tây vào",
            "Nấu thêm 10 phút để hỏa vị ngấm",
            "Nêm lại gia vị cho vừa ăn",
            "Ăn kèm cơm hoặc bánh"
        ]
    },
    {
        id: 16,
        title: "Tàu Hủ Nước Đường",
        category: "tráng miệng",
        emoji: "🥣",
        image: "https://images.unsplash.com/photo-1545689519-275605dc91fd?w=500&h=500&fit=crop",
        video: "https://www.youtube.com/embed/PxN7iAkHqVE",
        description: "Tàu hủ nước đường nóng là một món tráng miệng quen thuộc",
        time: "30 phút",
        difficulty: "Dễ",
        serves: "4 người",
        ingredients: [
            "500g tàu hủ mềm",
            "200ml nước đường",
            "100g đậu đỏ",
            "1 thìa nước hoa sen",
            "Nước sạch"
        ],
        steps: [
            "Nấu đậu đỏ cho mềm trong nước",
            "Nấu nước đường: nấu đường trong nước dùi",
            "Thêm nước hoa sen vào nước đường",
            "Cho tàu hủ vào chậu, đổ nước đường",
            "Rắc đậu đỏ lên trên",
            "Ăn nóng để cảm nhận vị ngon nhất",
            "Có thể ăn nước hoặc ăn khô tàu hủ"
        ]
    },
    {
        id: 17,
        title: "Bánh Tráng Nướng Me",
        category: "tráng miệng",
        emoji: "🥙",
        image: "https://images.unsplash.com/photo-1609501676725-7186f017a4b1?w=500&h=500&fit=crop",
        video: "https://www.youtube.com/embed/L4LxEfxWXqw",
        description: "Bánh tráng nướng me vừa cay, vừa chua là đặc sản Nha Trang",
        time: "20 phút",
        difficulty: "Dễ",
        serves: "2 người",
        ingredients: [
            "2 tờ bánh tráng",
            "2 thìa nước me",
            "1 thìa đường",
            "1 thìa muối",
            "1 thìa ớt bột",
            "Vụng mè, đậu phộng"
        ],
        steps: [
            "Trộn nước me với đường, muối, ớt",
            "Nướng bánh tráng trên than hoặc bếp",
            "Bánh nên nướng vàng và giòn",
            "Quét hỗn hợp me lên bánh đang nóng",
            "Rắc vừng mè và đậu phộng ngay",
            "Để để bánh nguội và giòn",
            "Ăn kèm với trà hoặc đồ uống mát"
        ]
    },
    {
        id: 18,
        title: "Lẩu Cua Cà Chua",
        category: "canh",
        emoji: "🦀",
        image: "https://images.unsplash.com/photo-1554080221-cbf002563ae9?w=500&h=500&fit=crop",
        video: "https://www.youtube.com/embed/d_9MZwKQQJQ",
        description: "Lẩu cua cà chua là một lẩu ngon lành quanh năm",
        time: "1.5 giờ",
        difficulty: "Trung bình",
        serves: "4 người",
        ingredients: [
            "1 con cua (khoảng 800g)",
            "500g cà chua",
            "100g nấm",
            "500ml nước dùng gà",
            "1 thìa cà chua",
            "2 thìa nước mắm",
            "Hành, tỏi"
        ],
        steps: [
            "Cua được rửa sạch, chặt thành từng miếng",
            "Rán tỏi hành cho thơm",
            "Cho cua vào rán 3-4 phút",
            "Đổ nước dùng gà vào",
            "Thêm cà chua cắt khúc vào",
            "Nấu 20 phút để cua chín",
            "Nêm nước mắm và cà chua chua vừa ăn"
        ]
    }
];

// Filter
let currentFilter = 'all';
let filteredRecipes = recipes;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    displayRecipes(recipes);
    setupNavigation();
});

// Display Recipes
function displayRecipes(recipesToDisplay) {
    const recipesGrid = document.getElementById('recipesGrid');
    recipesGrid.innerHTML = '';

    if (recipesToDisplay.length === 0) {
        recipesGrid.innerHTML = '<p style="text-align: center; grid-column: 1/-1; padding: 40px;">Không tìm thấy công thức phù hợp</p>';
        return;
    }

    recipesToDisplay.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.className = 'recipe-card';
        window.currentRecipe = recipe;
        recipeCard.onclick = () => openRecipeModal(recipe);

        recipeCard.innerHTML = `
            <div class="recipe-image">
                <img src="${recipe.image}" alt="${recipe.title}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
                <div style="display:none; width:100%; height:100%; align-items:center; justify-content:center; font-size:80px; background:linear-gradient(135deg, var(--primary-color), var(--secondary-color));">${recipe.emoji}</div>
            </div>
            <div class="recipe-content">
                <span class="recipe-category">${recipe.category}</span>
                <h3 class="recipe-title">${recipe.title}</h3>
                <p class="recipe-description">${recipe.description}</p>
                <div class="recipe-meta">
                    <span><i class="fas fa-clock"></i> ${recipe.time}</span>
                    <span><i class="fas fa-chart-line"></i> ${recipe.difficulty}</span>
                    <span><i class="fas fa-users"></i> ${recipe.serves}</span>
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                    <button class="recipe-btn" onclick="openRecipeModal(event)">Xem Chi Tiết</button>
                    <button class="recipe-btn" style="background-color: #e74c3c;" onclick="openVideoModal('${recipe.video}', event)"><i class="fas fa-play"></i> Video</button>
                </div>
            </div>
        `;

        recipesGrid.appendChild(recipeCard);
    });
}

// Filter by Category
function filterRecipes(category) {
    currentFilter = category;

    if (category === 'all') {
        filteredRecipes = recipes;
    } else {
        filteredRecipes = recipes.filter(recipe => recipe.category === category);
    }

    displayRecipes(filteredRecipes);
    
    // Update active category
    document.querySelectorAll('.category-card').forEach(card => {
        card.style.backgroundColor = 'var(--white)';
        card.style.color = 'var(--text-color)';
        card.querySelectorAll('i').forEach(icon => {
            icon.style.color = 'var(--primary-color)';
        });
    });
    
    event.target.closest('.category-card').style.backgroundColor = 'var(--primary-color)';
    event.target.closest('.category-card').style.color = 'var(--white)';
    event.target.closest('.category-card').querySelectorAll('i').forEach(icon => {
        icon.style.color = 'var(--white)';
    });
}

// Search Recipes
function searchRecipes() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    filteredRecipes = recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(searchTerm) ||
        recipe.description.toLowerCase().includes(searchTerm) ||
        recipe.category.toLowerCase().includes(searchTerm)
    );

    displayRecipes(filteredRecipes);
}

// Open Recipe Modal
function openRecipeModal(eventOrRecipe) {
    // Handle both click event and direct recipe object
    let recipe;
    if (eventOrRecipe.preventDefault) {
        // It's an event
        eventOrRecipe.preventDefault();
        eventOrRecipe.stopPropagation();
        recipe = window.currentRecipe;
    } else {
        // It's a recipe object
        recipe = eventOrRecipe;
        window.currentRecipe = recipe;
    }
    
    const modal = document.getElementById('recipeModal');
    const modalBody = document.getElementById('modalBody');

    let ingredientsList = '';
    recipe.ingredients.forEach(ingredient => {
        ingredientsList += `<li>${ingredient}</li>`;
    });

    let stepsList = '';
    recipe.steps.forEach((step, index) => {
        stepsList += `<li><strong>Bước ${index + 1}:</strong> ${step}</li>`;
    });

    modalBody.innerHTML = `
        <div class="recipe-detail">
            <div style="text-align: center; margin-bottom: 30px;">
                <img src="${recipe.image}" alt="${recipe.title}" style="width:100%; max-width:400px; height:300px; object-fit:cover; border-radius:15px; margin-bottom:20px;" onerror="this.style.display='none'">
                <div style="font-size: 80px; margin-bottom: 20px; display:${recipe.image ? 'none' : 'block'}">${recipe.emoji}</div>
                <h2>${recipe.title}</h2>
                <p style="color: #666; font-size: 16px;">${recipe.description}</p>
                ${recipe.video ? `<button class="cta-btn" onclick="openVideoModal('${recipe.video}')" style="margin-top: 15px;"><i class="fas fa-play"></i> Xem Video Hướng Dẫn</button>` : ''}
            </div>

            <div class="recipe-detail-meta">
                <div class="recipe-detail-meta-item">
                    <strong><i class="fas fa-clock"></i> Thời Gian</strong>
                    ${recipe.time}
                </div>
                <div class="recipe-detail-meta-item">
                    <strong><i class="fas fa-chart-line"></i> Độ Khó</strong>
                    ${recipe.difficulty}
                </div>
                <div class="recipe-detail-meta-item">
                    <strong><i class="fas fa-users"></i> Phục Vụ</strong>
                    ${recipe.serves}
                </div>
            </div>

            <div class="recipe-ing">
                <h3><i class="fas fa-list"></i> Nguyên Liệu</h3>
                <ul>${ingredientsList}</ul>
            </div>

            <div class="recipe-steps">
                <h3><i class="fas fa-utensils"></i> Hướng Dẫn Nấu</h3>
                <ol>${stepsList}</ol>
            </div>

            <div style="margin-top: 30px; padding: 20px; background-color: var(--light-bg); border-radius: 10px; text-align: center;">
                <p style="font-style: italic; color: #666;">
                    💡 <strong>Mẹo:</strong> Nấu ăn là một quá trình sáng tạo. Hãy thử các biến thể của riêng bạn để tìm ra hương vị yêu thích!
                </p>
            </div>
        </div>
    `;

    modal.style.display = 'block';
}

// Close Recipe Modal
function closeRecipeModal() {
    const modal = document.getElementById('recipeModal');
    modal.style.display = 'none';
}

// Open Video Modal
function openVideoModal(videoUrl, event) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }
    
    const modal = document.getElementById('videoModal');
    const videoContainer = document.getElementById('videoContainer');
    
    videoContainer.innerHTML = `
        <iframe width="100%" height="500" src="${videoUrl}?autoplay=1" 
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>
    `;
    
    modal.style.display = 'block';
}

// Close Video Modal
function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    modal.style.display = 'none';
}

// Close Modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('recipeModal');
    const videoModal = document.getElementById('videoModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
    if (event.target == videoModal) {
        videoModal.style.display = 'none';
    }
}

// Scroll to Recipes
function scrollToRecipes() {
    document.getElementById('recipes').scrollIntoView({ behavior: 'smooth' });
}

// Setup Navigation
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Handle smooth scrolling for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            this.classList.add('active');
        });
    });

    // Update active nav link on scroll
    window.addEventListener('scroll', () => {
        let current = '';

        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// AI Advisor Functions
function toggleAIAdvisor() {
    const window_elem = document.getElementById('aiAdvisorWindow');
    if (window_elem) {
        window_elem.classList.toggle('hidden');
    }
}

function closeAIAdvisor() {
    const window_elem = document.getElementById('aiAdvisorWindow');
    if (window_elem) {
        window_elem.classList.add('hidden');
    }
}

function askAI(question) {
    const input = document.getElementById('aiAdvisorInput');
    if (input) {
        input.value = question;
        sendAIMessage();
    }
}

function sendAIMessage() {
    const input = document.getElementById('aiAdvisorInput');
    const messagesContainer = document.getElementById('aiAdvisorMessages');
    
    if (!input || !messagesContainer) return;
    
    const question = input.value.trim();
    if (!question) return;

    // Add user message
    const userMessageDiv = document.createElement('div');
    userMessageDiv.className = 'user-message';
    userMessageDiv.innerHTML = `<div class="user-message-content">${escapeHtml(question)}</div>`;
    messagesContainer.appendChild(userMessageDiv);

    // Clear input
    input.value = '';

    // Scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    // Show typing indicator
    const typingDiv = document.createElement('div');
    typingDiv.className = 'ai-message';
    typingDiv.innerHTML = '<div class="ai-message-content"><div class="ai-typing"><span></span><span></span><span></span></div></div>';
    messagesContainer.appendChild(typingDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    // Simulate AI response
    setTimeout(() => {
        typingDiv.remove();
        const aiResponse = generateAIResponse(question);
        const aiMessageDiv = document.createElement('div');
        aiMessageDiv.className = 'ai-message';
        aiMessageDiv.innerHTML = `<div class="ai-message-content">${aiResponse}</div>`;
        messagesContainer.appendChild(aiMessageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 1500);
}

function generateAIResponse(question) {
    const lowerQuestion = question.toLowerCase();
    
    // Response based on keywords
    if (lowerQuestion.includes('phở') || lowerQuestion.includes('phở bò')) {
        return '🍜 Phở bò là một món canh truyền thống tuyệt vời! Bí quyết chính là nước dùng phải được nấu từ xương bò trong 3-4 giờ. Hãy xem công thức chi tiết của chúng tôi để biết thêm chi tiết từng bước!';
    } else if (lowerQuestion.includes('mẹo') || lowerQuestion.includes('tip')) {
        return '💡 Một số mẹo nấu ăn hữu ích:\n• Chuẩn bị tất cả nguyên liệu trước (mise en place)\n• Sử dụng lửa vừa phải để tránh cướp cháy\n• Nêm gia vị từng chút để tránh nêm quá mặn\n• Để thịt cá nghỉ trước khi cắt để giữ độ nướu\nCó công thức nào khác bạn cần giúp?';
    } else if (lowerQuestion.includes('dễ') || lowerQuestion.includes('nhanh')) {
        return '⚡ Các món ăn dễ và nhanh:\n• Cơm tấm Sài Gòn (1 giờ)\n• Gỏi cuốn (30 phút)\n• Mốc nướng muối ớt (45 phút)\nHãy chọn một trong những công thức này để bắt đầu!';
    } else if (lowerQuestion.includes('bánh chưng')) {
        return '📦 Bánh chưng là một biểu tượng của Tết! Mặc dù gói bánh chưng hơi phức tạp, nhưng kết quả sẽ rất đáng giá. Đây là một truyền thống gia đình tuyệt vời. Bạn muốn xem hướng dẫn chi tiết?';
    } else if (lowerQuestion.includes('nem') || lowerQuestion.includes('cuốn')) {
        return '🌮 Nem rán và gỏi cuốn là những món khai vị yêu thích! Nem rán dùng chiên chưa, trong khi gỏi cuốn thì lạnh. Cả hai đều rất ngon khi ăn kèm nước mắm chua!';
    } else {
        return '😊 Đó là một câu hỏi thú vị! Tôi có thể giúp bạn với công thức nấu ăn, mẹo nấu ăn, hoặc hướng dẫn chi tiết từng bước. Bạn muốn biết gì tiếp theo?';
    }
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Initialize AI Advisor
document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('aiAdvisorToggle');
    const closeBtn = document.getElementById('aiAdvisorClose');
    const sendBtn = document.getElementById('aiAdvisorSend');
    const input = document.getElementById('aiAdvisorInput');

    if (toggle) {
        toggle.addEventListener('click', toggleAIAdvisor);
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closeAIAdvisor);
    }

    if (sendBtn) {
        sendBtn.addEventListener('click', sendAIMessage);
    }

    if (input) {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendAIMessage();
            }
        });
    }
});
