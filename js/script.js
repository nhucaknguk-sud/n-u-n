// Recipe Data
const recipes = [
    {
        id: 1,
        title: "Phở Bò",
        category: "canh",
        emoji: "🍜",
        image: "images/pho-bo.jpg",
        video: "https://www.youtube.com/watch?v=c9GfHgMk1ac",
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
        image: "images/banh-trung.png",
        video: "https://www.youtube.com/watch?v=SgXqGuDMdDE",
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
        image: "images/bun-rieu.png",
        video: "https://www.youtube.com/watch?v=C1P1Cw9J1-I",
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
        image: "images/com-tam-sai-gon.png",
        video: "https://www.youtube.com/watch?v=cJu6tFJe_Gc",
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
            "Thịt nạm nướng từng khúc cho nước và tinh",
            "Luộc cơm theo cách thông thường",
            "Rán trứng ốp la cho chín vừa",
            "Xếp thịt nạm lên cơm tấm",
            "Thêm trứng ốp la ở bên",
            "Vãi cà chua, ớt và nước mắm chua lên trên"
        ]
    },
    {
        id: 5,
        title: "Mốc Nướng Muối Ớt",
        category: "mặn",
        emoji: "🐟",
        image: "images/oc-nuong-muoi-ot.png",
        video: "https://www.youtube.com/watch?v=SrGJN5_YcZ8",
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
        image: "images/nem-ran.png",
        video: "https://www.youtube.com/watch?v=VN7GnUm5rfo",
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
            "Nấm và cà rốt thái sợi và sơ",
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
        image: "images/goi-quan.png",
        video: "https://www.youtube.com/watch?v=w34Qnc-9KBU",
        description: "Gỏi cuốn là món khai vị làm lạnh tươi mát lạm",
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
            "Xếp tôm, thịt, giá, rau thơm lên trên",
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
        image: "images/che-den.png",
        video: "https://www.youtube.com/watch?v=z-XMpQGH6UE",
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
        image: "images/bun-bo-hue.png",
        video: "https://www.youtube.com/watch?v=A_o2qfaTgKs",
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
        image: "images/com-chien-duong-chau.png",
        video: "https://www.youtube.com/watch?v=FR4DH5sSysI",
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
        video: "https://www.youtube.com/watch?v=g3V_oNeMdHs",
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
            "Cá lóc được làm sạch, bỏ gai và xương",
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
    },
    {
        id: 19,
        title: "Tô Mì Vằn Thắn",
        category: "canh",
        emoji: "🍝",
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&h=500&fit=crop",
        video: "https://www.youtube.com/embed/qN-vYaNeGaI",
        description: "Mì vằn thắn là món mì truyền thống từ Huế",
        time: "1 giờ",
        difficulty: "Trung bình",
        serves: "2 người",
        ingredients: [
            "300g mì tươi",
            "200g thịt heo rim",
            "100g tôm",
            "50g bã cua",
            "500ml nước dùng",
            "2 thìa mắm cua",
            "Hành, tỏi"
        ],
        steps: [
            "Nấu nước dùng từ xương và gia vị",
            "Rim thịt heo với mắm cua",
            "Luộc mì qua nước sôi",
            "Xêp mì vào chén",
            "Đổ nước dùng nóng vào",
            "Thêm tôm, thịt heo, bã cua",
            "Rắc hành và tỏi chiên lên"
        ]
    },
    {
        id: 20,
        title: "Bánh Khoai Hội An",
        category: "cơm",
        emoji: "🥟",
        image: "https://images.unsplash.com/photo-1609501676725-7186f017a4b1?w=500&h=500&fit=crop",
        video: "https://www.youtube.com/embed/wvk8_tLKuqc",
        description: "Bánh khoai là món đặc sản Hội An với lớp vỏ mềm và nhân thơm",
        time: "45 phút",
        difficulty: "Khó",
        serves: "4 người",
        ingredients: [
            "200g bột mì",
            "100g thịt lợn",
            "50g tôm",
            "100ml nước dừa",
            "2 quả trứng",
            "Hành, tỏi",
            "Bánh dùng lá chuối"
        ],
        steps: [
            "Trộn bột với nước dừa",
            "Thêm thịt, tôm, hành, tỏi",
            "Đổ vào khuôn trên lá chuối",
            "Hấp khoảng 30 phút",
            "Tưới mỡ lợn nóng lên trên",
            "Ăn nóng"
        ]
    },
    {
        id: 21,
        title: "Canh Dưa Chua Cá",
        category: "canh",
        emoji: "🍲",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop",
        video: "https://www.youtube.com/embed/2KZ9wvGC9fE",
        description: "Canh dưa chua cá tươi ngon mằn mặn",
        time: "1.5 giờ",
        difficulty: "Trung bình",
        serves: "4 người",
        ingredients: [
            "800g cá tươi",
            "200g dưa chua",
            "50g hành lá",
            "1 thìa cà chua",
            "500ml nước dùng",
            "2 thìa nước mắm",
            "Tỏi, ớt"
        ],
        steps: [
            "Cá rửa sạch, cưa từng khúc",
            "Nấu nước dùng từ xương cá",
            "Thêm dưa chua vào nước dùng",
            "Cho cá vào nấu cho chín",
            "Nêm gia vị vừa ăn",
            "Thêm hành lá trước khi ăn"
        ]
    },
    {
        id: 22,
        title: "Cơm Cháy Tôm",
        category: "cơm",
        emoji: "🍚",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop",
        video: "https://www.youtube.com/embed/5mlLlLXhMd8",
        description: "Cơm cháy tôm thơm lừng, giòn tan",
        time: "30 phút",
        difficulty: "Dễ",
        serves: "2 người",
        ingredients: [
            "2 bát cơm cơm",
            "100g tôm",
            "1 quả trứng",
            "Hành lá",
            "Dầu ăn"
        ],
        steps: [
            "Đổ dầu ăn nóng vào chảo",
            "Cho cơm vào rán cho giòn",
            "Thêm tôm, trứng, hành",
            "Rán cho tôm chín",
            "Xếp lên đĩa"
        ]
    },
    {
        id: 23,
        title: "Thịt Kho Tàu",
        category: "mặn",
        emoji: "🍗",
        image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=500&h=500&fit=crop",
        video: "https://www.youtube.com/embed/x3vH_P2WqZk",
        description: "Thịt kho tàu mặn ngọt, thơm lừng",
        time: "1.5 giờ",
        difficulty: "Dễ",
        serves: "4 người",
        ingredients: [
            "500g thịt ba rọi",
            "200g trứng cút",
            "4 quả hành khô",
            "4 thìa nước mắm",
            "3 thìa đường",
            "2 thìa dầu ăn",
            "Tỏi, ớt"
        ],
        steps: [
            "Rán tỏi với dầu ăn",
            "Cho thịt vào rán",
            "Nêm nước mắm và đường",
            "Thêm hành khô",
            "Nấu nhỏ lửa 1 giờ",
            "Thêm trứng cút 15 phút trước khi ăn"
        ]
    },
    {
        id: 24,
        title: "Tôm Cốc Tắc",
        category: "mặn",
        emoji: "🦐",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop",
        video: "https://www.youtube.com/embed/lXfPRQR0Q_w",
        description: "Tôm cốc tắc ngon ngạt hương",
        time: "30 phút",
        difficulty: "Dễ",
        serves: "3 người",
        ingredients: [
            "500g tôm",
            "4 lá chanh",
            "3 quả ớt",
            "2 thìa nước mắm",
            "1 thìa đường",
            "Dầu ăn"
        ],
        steps: [
            "Rán tôm cho chín",
            "Thêm chanh, ớt, gia vị",
            "Đảo nhanh lửa to",
            "Xếp lên đĩa"
        ]
    },
    {
        id: 25,
        title: "Bò Nướng Lá Chanh",
        category: "mặn",
        emoji: "🥩",
        image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=500&h=500&fit=crop",
        video: "https://www.youtube.com/embed/4BZSHPgN7bE",
        description: "Bò nướng lá chanh thơm lừng",
        time: "45 phút",
        difficulty: "Dễ",
        serves: "3 người",
        ingredients: [
            "400g thịt bò nạm",
            "10 lá chanh",
            "3 thìa nước mắm",
            "2 thìa đường",
            "2 quả ớt đỏ",
            "Tỏi"
        ],
        steps: [
            "Cắt bò thành từng miếng mỏng",
            "Trộn với gia vị và tỏi",
            "Cuốn bằng lá chanh",
            "Nướng trên lửa than",
            "Nướng 5-7 phút mỗi bên"
        ]
    },
    {
        id: 26,
        title: "Gỏi Cá Sống",
        category: "chay",
        emoji: "🥗",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&h=500&fit=crop",
        video: "https://www.youtube.com/embed/hKz6jIGi0sQ",
        description: "Gỏi cá sống tươi mát ngon lành",
        time: "30 phút",
        difficulty: "Trung bình",
        serves: "4 người",
        ingredients: [
            "400g cá tươi luộc",
            "100g rau thơm",
            "100g bạc hà",
            "2 quả ớt",
            "3 thìa nước mắm chua",
            "1 quả chanh"
        ],
        steps: [
            "Cá luộc, để nguội, cắt sợi",
            "Trộn rau thơm, bạc hà",
            "Trộn cá với rau",
            "Nêm nước mắm chua",
            "Ăn ngay"
        ]
    },
    {
        id: 27,
        title: "Gỏi Bưởi",
        category: "chay",
        emoji: "🥗",
        image: "https://images.unsplash.com/photo-1604899573693-2c1b6c6c6c6?w=500&h=500&fit=crop",
        video: "https://www.youtube.com/embed/pX24LoEEn8s",
        description: "Gỏi bưởi là món khai vị thanh mát với vị chua ngọt nhẹ và hương thơm tự nhiên",
        time: "30 phút",
        difficulty: "Dễ",
        serves: "4 người",
        ingredients: [
            "1 quả bưởi vừa",
            "1 củ cà rốt",
            "1/2 củ hành tây",
            "1 nắm rau răm",
            "50g đậu phộng rang",
            "2 thìa nước mắm",
            "1 thìa đường",
            "1 quả chanh",
            "1 quả ớt"
        ],
        steps: [
            "Tách múi bưởi, bỏ hạt và xé thành miếng vừa ăn",
            "Cà rốt bào sợi, hành tây thái mỏng rồi ngâm nước đá cho bớt hăng",
            "Pha nước trộn gồm nước mắm, đường, nước cốt chanh và ớt băm",
            "Cho bưởi, cà rốt và hành tây vào tô lớn rồi rưới nước trộn lên",
            "Trộn nhẹ tay để bưởi không bị nát",
            "Thêm rau răm và đậu phộng rang trước khi dùng",
            "Bày ra đĩa và dùng ngay khi còn tươi"
        ]
    },
    {
        id: 28,
        title: "Mực Nướng Mỡ Hành",
        category: "mặn",
        emoji: "🦑",
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=500&fit=crop",
        video: "https://www.youtube.com/embed/5cZq1q_5L8A",
        description: "Mực nướng mỡ hành thơm lừng",
        time: "45 phút",
        difficulty: "Dễ",
        serves: "3 người",
        ingredients: [
            "400g mực tươi",
            "5 cây hành",
            "3 thìa dầu ăn",
            "2 thìa nước mắm",
            "Muối, tiêu"
        ],
        steps: [
            "Mực rửa sạch, cắt vành",
            "Hành cắt sợi",
            "Nướng mực trên than",
            "Quết mỡ hành lên",
            "Nướng 3-5 phút"
        ]
    },
    {
        id: 29,
        title: "Cơm Cá Trích",
        category: "cơm",
        emoji: "🍚",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop",
        video: "https://www.youtube.com/embed/J8QW-kZwUAk",
        description: "Cơm cá trích mặn ngon, bổ dưỡng",
        time: "1 giờ",
        difficulty: "Dễ",
        serves: "2 người",
        ingredients: [
            "2 bát cơm",
            "2 con cá trích",
            "2 quả trứng",
            "Hành lá",
            "Dầu ăn"
        ],
        steps: [
            "Cá rửa sạch, xay nhuyễn",
            "Rán hành với dầu ăn",
            "Cho cá vào rán",
            "Rán trứng ốp la",
            "Xếp lên cơm"
        ]
    },
    {
        id: 30,
        title: "Bún Chả Hà Nội",
        category: "canh",
        emoji: "🍜",
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=500&fit=crop",
        video: "https://www.youtube.com/embed/oH1lKaKoFHE",
        description: "Bún chả Hà Nội ngon tuyệt ngon",
        time: "1.5 giờ",
        difficulty: "Trung bình",
        serves: "4 người",
        ingredients: [
            "300g thịt lợn nạm",
            "100g thịt lợn xay",
            "200g bún tươi",
            "100ml nước mắm chua",
            "50g mắm tôm",
            "5 quả ớt",
            "Hành, tỏi"
        ],
        steps: [
            "Nạm nướng trên bếp than",
            "Thịt lợn xay làm thành viên",
            "Nấu nước mắm chua",
            "Luộc bún qua nước sôi",
            "Xếp bún vào chén",
            "Thêm thịt, đổ nước mắm"
        ]
    },
    {
        id: 31,
        title: "Tiết Canh",
        category: "mặn",
        emoji: "🥘",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop",
        video: "https://www.youtube.com/embed/dM8Z8gG3C7E",
        description: "Tiết canh tươi sống bổ dưỡng",
        time: "30 phút",
        difficulty: "Dễ",
        serves: "4 người",
        ingredients: [
            "300g tiết lợn",
            "50g mẩu gan",
            "2 thìa mắm tôm",
            "1 thìa nước mắm",
            "5 quả ớt",
            "Hành, tỏi"
        ],
        steps: [
            "Tiết rửa sạch",
            "Thái mỏng",
            "Trộn với gia vị",
            "Ăn ngay"
        ]
    },
    {
        id: 32,
        title: "Gà Luộc Mắm Tôm",
        category: "mặn",
        emoji: "🍗",
        image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=500&h=500&fit=crop",
        video: "https://www.youtube.com/embed/C-zTiZbY_Q8",
        description: "Gà luộc mắm tôm ngon hẹp",
        time: "1 giờ",
        difficulty: "Dễ",
        serves: "4 người",
        ingredients: [
            "1 con gà",
            "3 thìa mắm tôm",
            "2 thìa đường",
            "5 quả ớt",
            "Hành, tỏi"
        ],
        steps: [
            "Gà luộc chín",
            "Cắt thành miếng vừa",
            "Trộn mắm tôm với gia vị",
            "Ăn kèm gà luộc"
        ]
    },
    {
        id: 33,
        title: "Cộng Chiên",
        category: "mặn",
        emoji: "🍤",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop",
        video: "https://www.youtube.com/embed/c4QVe3brvko",
        description: "Cộng chiên vàng giòn ngon lạ",
        time: "45 phút",
        difficulty: "Trung bình",
        serves: "3 người",
        ingredients: [
            "400g cộng tươi",
            "100g bột mì",
            "2 quả trứng",
            "3 quả ớt",
            "Dầu ăn"
        ],
        steps: [
            "Cộng rửa sạch",
            "Lăn bột",
            "Chiên vàng",
            "Xếp lên đĩa"
        ]
    },
    {
        id: 34,
        title: "Rau Muống Xào Tỏi",
        category: "chay",
        emoji: "🥬",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&h=500&fit=crop",
        video: "https://www.youtube.com/embed/vl2R-u5qdrY",
        description: "Rau muống xào tỏi dễ làm ngon",
        time: "15 phút",
        difficulty: "Dễ",
        serves: "2 người",
        ingredients: [
            "300g rau muống",
            "5 tép tỏi",
            "2 thìa dầu ăn",
            "1 thìa nước mắm",
            "Muối, tiêu"
        ],
        steps: [
            "Rau rửa sạch, cắt khúc",
            "Rán tỏi với dầu ăn",
            "Cho rau vào xào",
            "Nêm gia vị"
        ]
    },
    {
        id: 35,
        title: "Cả Cua Rang Me",
        category: "mặn",
        emoji: "🦀",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop",
        video: "https://www.youtube.com/embed/vQvP0QDvKvY",
        description: "Cua rang me thơm chua ngon",
        time: "1 giờ",
        difficulty: "Trung bình",
        serves: "4 người",
        ingredients: [
            "1 con cua",
            "3 thìa me",
            "2 thìa đường",
            "2 thìa nước mắm",
            "5 quả ớt",
            "Hành, tỏi"
        ],
        steps: [
            "Cua chặt, rửa sạch",
            "Rán tỏi, hành",
            "Cho cua vào rán",
            "Thêm me, đường, nước mắm",
            "Nấu cho cua chín"
        ]
    },
    {
        id: 36,
        title: "Trứng Cút Nướng Muối",
        category: "mặn",
        emoji: "🥚",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop",
        video: "https://www.youtube.com/embed/BQf4-gvWy-s",
        description: "Trứng cút nướng muối dễ làm",
        time: "30 phút",
        difficulty: "Dễ",
        serves: "3 người",
        ingredients: [
            "12 quả trứng cút",
            "2 thìa muối",
            "2 thìa tiêu",
            "Lá chuối"
        ],
        steps: [
            "Trứng rửa sạch",
            "Sắp trên lá chuối",
            "Nướng trên bếp than",
            "Nướng khoảng 15 phút"
        ]
    },
    {
        id: 37,
        title: "Canh Sườn Nấu Chua",
        category: "canh",
        emoji: "🍲",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop",
        video: "https://www.youtube.com/embed/rV7m8RN8S2I",
        description: "Canh sườn nấu chua ngon tuyệt",
        time: "1.5 giờ",
        difficulty: "Dễ",
        serves: "4 người",
        ingredients: [
            "500g sườn lợn",
            "200g dứa",
            "50g riềng",
            "3 quả cà chua",
            "500ml nước dùng",
            "2 thìa nước mắm"
        ],
        steps: [
            "Luộc sườn sơ",
            "Nấu nước dùng",
            "Hạ sườn vào nước dùng",
            "Thêm riềng, dứa",
            "Nấu cho sườn mềm",
            "Nêm gia vị"
        ]
    },
    {
        id: 38,
        title: "Gỏi Đu Đủ",
        category: "chay",
        emoji: "🥗",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&h=500&fit=crop",
        video: "https://www.youtube.com/embed/YfPOGVqYVEk",
        description: "Gỏi đu đủ tươi mát dễ làm",
        time: "20 phút",
        difficulty: "Dễ",
        serves: "4 người",
        ingredients: [
            "300g đu đủ",
            "100g tôm",
            "50g đậu phộng",
            "3 quả ớt",
            "3 thìa nước mắm chua",
            "1 quả chanh"
        ],
        steps: [
            "Đu đủ gọt vỏ, thái sợi",
            "Luộc tôm",
            "Trộn đu đủ, tôm",
            "Nêm nước mắm chua",
            "Rắc đậu phộng, ớt"
        ]
    },
    {
        id: 39,
        title: "Cơm Tươi Phủ",
        category: "cơm",
        emoji: "🍚",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop",
        video: "https://www.youtube.com/embed/ItKTGdH6bJM",
        description: "Cơm tươi phủ là cơm nóng",
        time: "30 phút",
        difficulty: "Dễ",
        serves: "2 người",
        ingredients: [
            "2 bát cơm",
            "1 quả trứng",
            "50g thịt lợn",
            "50g rau",
            "1 thìa nước mắm"
        ],
        steps: [
            "Nấu cơm",
            "Rán thịt lợn",
            "Rán trứng",
            "Xếp lên cơm",
            "Thêm rau"
        ]
    },
    {
        id: 40,
        title: "Mò Nướng Muối Ớt",
        category: "mặn",
        emoji: "🐚",
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=500&fit=crop",
        video: "https://www.youtube.com/embed/IzKGDvL3BrE",
        description: "Mò nướng muối ớt thơm ngon",
        time: "30 phút",
        difficulty: "Dễ",
        serves: "3 người",
        ingredients: [
            "500g mò",
            "3 thìa muối",
            "3 quả ớt",
            "2 thìa tiêu",
            "Dầu ăn"
        ],
        steps: [
            "Mò rửa sạch",
            "Ướp muối ớt",
            "Nướng trên than",
            "Nướng 10 phút"
        ]
    },
    {
        id: 41,
        title: "Canh Tao Tằm",
        category: "canh",
        emoji: "🍲",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop",
        video: "https://www.youtube.com/embed/oJwL7HBfVQs",
        description: "Canh tao tằm bổ dưỡng",
        time: "1 giờ",
        difficulty: "Dễ",
        serves: "4 người",
        ingredients: [
            "200g tao",
            "200g tằm",
            "50g hành khô",
            "500ml nước dùng",
            "2 thìa nước mắm"
        ],
        steps: [
            "Nấu nước dùng từ xương",
            "Thêm tao, tằm",
            "Nấu cho mềm",
            "Nêm gia vị"
        ]
    },
    {
        id: 42,
        title: "Bánh Chưng Cuốn",
        category: "chay",
        emoji: "🟫",
        image: "https://images.unsplash.com/photo-1618053743606-7f8d0b814901?w=500&h=500&fit=crop",
        video: "https://www.youtube.com/embed/N5Jn7ZLgPIM",
        description: "Bánh chưng cuốn Tết ngon",
        time: "2 giờ",
        difficulty: "Khó",
        serves: "6 người",
        ingredients: [
            "500g gạo nếp",
            "200g thịt ba rọi",
            "100g đậu xanh",
            "50g mèn dong",
            "Lá dong"
        ],
        steps: [
            "Ngâm gạo nếp",
            "Luộc đậu xanh",
            "Trộn gạo, đậu, thịt",
            "Gói bằng lá dong",
            "Nấu trong nước sôi 4 giờ"
        ]
    },
    {
        id: 43,
        title: "Tôm Bốc Cháy",
        category: "mặn",
        emoji: "🦐",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop",
        video: "https://www.youtube.com/embed/VoX8n3BrVFQ",
        description: "Tôm bốc cháy ngoài giòn trong mềm",
        time: "30 phút",
        difficulty: "Trung bình",
        serves: "3 người",
        ingredients: [
            "400g tôm",
            "100g hành",
            "2 thìa nước mắm",
            "1 thìa đường",
            "Dầu ăn"
        ],
        steps: [
            "Rán tôm cho đỏ",
            "Thêm hành",
            "Tưới nước mắm",
            "Đảo nhanh"
        ]
    },
    {
        id: 44,
        title: "Cá Nướng Riềng",
        category: "mặn",
        emoji: "🐟",
        image: "https://images.unsplash.com/photo-1580959375944-abd7e991f971?w=500&h=500&fit=crop",
        video: "https://www.youtube.com/embed/eFMsI5r-bVE",
        description: "Cá nướng riềng thơm lừng",
        time: "45 phút",
        difficulty: "Dễ",
        serves: "3 người",
        ingredients: [
            "800g cá",
            "50g riềng",
            "3 thìa nước mắm",
            "2 quả ớt",
            "Lá chuối"
        ],
        steps: [
            "Cá rửa sạch",
            "Cắt lá chuối",
            "Sắp cá trên lá",
            "Rắc riềng, ớt",
            "Nướng 20 phút"
        ]
    },
    {
        id: 45,
        title: "Mốc Hấp Miso",
        category: "mặn",
        emoji: "🐚",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop",
        video: "https://www.youtube.com/embed/0rN5nv6_RLY",
        description: "Mốc hấp miso ngon lạ",
        time: "30 phút",
        difficulty: "Dễ",
        serves: "3 người",
        ingredients: [
            "400g mốc",
            "2 thìa miso",
            "100ml nước dùng",
            "1 cây hành",
            "Gừng"
        ],
        steps: [
            "Mốc rửa sạch",
            "Hơi miso với nước dùng",
            "Cho mốc vào",
            "Hấp 15 phút",
            "Rắc hành gừng"
        ]
    },
    {
        id: 46,
        title: "Dưa Leo Omelette",
        category: "chay",
        emoji: "🍳",
        image: "https://images.unsplash.com/photo-1585032226651-759b98d7afd4?w=500&h=500&fit=crop",
        video: "https://www.youtube.com/embed/kRH-xM8GKAQ",
        description: "Dưa leo Omelette dễ làm",
        time: "20 phút",
        difficulty: "Dễ",
        serves: "2 người",
        ingredients: [
            "2 quả dưa leo",
            "3 quả trứng",
            "1 cây hành",
            "Dầu ăn",
            "Muối, tiêu"
        ],
        steps: [
            "Dưa thái mỏng",
            "Rán dưa",
            "Đổ trứng vào",
            "Cuốn lại"
        ]
    },
    {
        id: 47,
        title: "Chả Lụa Hà Nội",
        category: "mặn",
        emoji: "🥖",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop",
        video: "https://www.youtube.com/embed/ynzK1v6CW8w",
        description: "Chả lụa Hà Nội nổi tiếng",
        time: "2 giờ",
        difficulty: "Khó",
        serves: "8 người",
        ingredients: [
            "1kg thịt lợn xay",
            "100g mỡ lợn",
            "2 quả trứng",
            "50g tỏi",
            "Mắm tôm"
        ],
        steps: [
            "Xay thịt lợn xay",
            "Trộn với gia vị",
            "Nhồi vào ống giấy",
            "Luộc trong nước nóng 1.5 giờ"
        ]
    },
    {
        id: 48,
        title: "Cơm Tôi Chiêu",
        category: "cơm",
        emoji: "🍚",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop",
        video: "https://www.youtube.com/embed/D8qNUqVLydQ",
        description: "Cơm tôi chiêu mặn ngon",
        time: "30 phút",
        difficulty: "Dễ",
        serves: "2 người",
        ingredients: [
            "2 bát cơm",
            "100g tôi",
            "1 quả trứng",
            "1 cây hành",
            "Dầu ăn"
        ],
        steps: [
            "Rán tôi",
            "Thêm cơm đảo",
            "Rán trứng",
            "Trộn hành"
        ]
    },
    {
        id: 49,
        title: "Mực Xào Ớt",
        category: "mặn",
        emoji: "🦑",
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=500&fit=crop",
        video: "https://www.youtube.com/embed/rL7tR9Hg8cU",
        description: "Mực xào ớt cay ngon",
        time: "20 phút",
        difficulty: "Dễ",
        serves: "3 người",
        ingredients: [
            "350g mực",
            "5 quả ớt",
            "2 thìa nước mắm",
            "1 quả chanh",
            "Dầu ăn"
        ],
        steps: [
            "Mực rửa sạch, cắt khúc",
            "Rán ớt",
            "Thêm mực xào",
            "Nêm gia vị",
            "Quết chanh"
        ]
    },
    {
        id: 50,
        title: "Cua Hấp Rượu",
        category: "mặn",
        emoji: "🦀",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop",
        video: "https://www.youtube.com/embed/xIGvC_8ksOI",
        description: "Cua hấp rượu thơm ngon",
        time: "1 giờ",
        difficulty: "Dễ",
        serves: "4 người",
        ingredients: [
            "1-2 con cua",
            "100ml rượu",
            "3 thìa nước mắm",
            "2 cây hành",
            "Gừng"
        ],
        steps: [
            "Cua rửa sạch",
            "Sắp vào nồi hấp",
            "Tưới rượu, gia vị",
            "Hấp 30-40 phút"
        ]
    },
    {
        id: 51,
        title: "Bánh Hoai Cuốn",
        category: "cơm",
        emoji: "🥟",
        image: "https://images.unsplash.com/photo-1609501676725-7186f017a4b1?w=500&h=500&fit=crop",
        video: "https://www.youtube.com/embed/X6pCLZPf_pU",
        description: "Bánh hoai cuốn với nhân thơm",
        time: "1 giờ",
        difficulty: "Khó",
        serves: "4 người",
        ingredients: [
            "200g bột mì",
            "100g thịt heo",
            "100g tôm",
            "100ml nước dừa",
            "Lá chuối"
        ],
        steps: [
            "Trộn bột với nước dừa",
            "Thêm thịt, tôm",
            "Cuốn bằng lá chuối",
            "Hấp 30 phút",
            "Tưới mỡ lợn nóng"
        ]
    },
    {
        id: 52,
        title: "Lẩu Cua Cà Rốt",
        category: "canh",
        emoji: "🍲",
        image: "https://images.unsplash.com/photo-1554080221-cbf002563ae9?w=500&h=500&fit=crop",
        video: "https://www.youtube.com/embed/qWJl_d8bCvI",
        description: "Lẩu cua cà rốt ngon lành",
        time: "1.5 giờ",
        difficulty: "Trung bình",
        serves: "4 người",
        ingredients: [
            "1 con cua",
            "200g cà rốt",
            "100g nấm",
            "500ml nước dùng",
            "2 thìa nước mắm"
        ],
        steps: [
            "Cua chặt, rửa sạch",
            "Cà rốt cắt khúc",
            "Nấu nước dùng từ xương cua",
            "Hạ cua, cà rốt vào",
            "Nấu 30 phút"
        ]
    },
    {
        id: 53,
        title: "Cơm Chiên Kiểu Thái",
        category: "cơm",
        emoji: "🍚",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop",
        video: "https://www.youtube.com/embed/JLx8FTmGW4s",
        description: "Cơm chiên kiểu Thái cay ngon",
        time: "30 phút",
        difficulty: "Dễ",
        serves: "3 người",
        ingredients: [
            "2 bát cơm",
            "100g tôm",
            "2 quả trứng",
            "100g rau cải",
            "5 quả ớt"
        ],
        steps: [
            "Rán tỏi",
            "Thêm tôm, rau",
            "Hạ cơm vào",
            "Rán trứng",
            "Nêm gia vị"
        ]
    },
    {
        id: 54,
        title: "Gỏi Bao Tử",
        category: "chay",
        emoji: "🥗",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&h=500&fit=crop",
        video: "https://www.youtube.com/embed/V5xHx-Pv0T0",
        description: "Gỏi bao tử chua cay ngon",
        time: "30 phút",
        difficulty: "Trung bình",
        serves: "4 người",
        ingredients: [
            "300g bao tử",
            "50g rau thơm",
            "5 quả ớt",
            "3 thìa nước mắm chua",
            "1 quả chanh"
        ],
        steps: [
            "Luộc bao tử cho mềm",
            "Cắt thành sợi",
            "Trộn với rau thơm",
            "Nêm gia vị"
        ]
    },
    {
        id: 55,
        title: "Thịt Nướng Cuốn Lá Lý",
        category: "mặn",
        emoji: "🌿",
        image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=500&h=500&fit=crop",
        video: "https://www.youtube.com/embed/XVVaRLz_B-I",
        description: "Thịt nướng cuốn lá lý thơm",
        time: "45 phút",
        difficulty: "Dễ",
        serves: "4 người",
        ingredients: [
            "400g thịt lợn nạm",
            "10 lá lý",
            "3 thìa nước mắm",
            "2 quả ớt",
            "Tỏi"
        ],
        steps: [
            "Cắt thịt mỏng",
            "Trộn với gia vị",
            "Cuốn bằng lá lý",
            "Nướng trên lửa"
        ]
    },
    {
        id: 56,
        title: "Canh Cút Chuối",
        category: "canh",
        emoji: "🍌",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop",
        video: "https://www.youtube.com/embed/S0n87sLCHwQ",
        description: "Canh cút chuối bổ dưỡng",
        time: "1 giờ",
        difficulty: "Dễ",
        serves: "4 người",
        ingredients: [
            "200g cút chuối",
            "200g giò heo",
            "500ml nước dùng",
            "2 thìa nước mắm",
            "Hành, tỏi"
        ],
        steps: [
            "Cút chuối cắt khúc",
            "Luộc với giò heo",
            "Nấu trong nước dùng",
            "Nêm gia vị"
        ]
    },
    {
        id: 57,
        title: "Tôm Rang Dừa",
        category: "mặn",
        emoji: "🥥",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop",
        video: "https://www.youtube.com/embed/DH7KrM9C7v0",
        description: "Tôm rang dừa thơm lừng",
        time: "30 phút",
        difficulty: "Dễ",
        serves: "3 người",
        ingredients: [
            "400g tôm",
            "100g dừa nạo",
            "2 thìa nước mắm",
            "1 thìa đường",
            "Dầu ăn"
        ],
        steps: [
            "Rán tôm",
            "Thêm dừa nạo",
            "Đảo đều",
            "Nêm gia vị"
        ]
    },
    {
        id: 58,
        title: "Cá Kho Tiêu",
        category: "mặn",
        emoji: "🐟",
        image: "https://images.unsplash.com/photo-1580959375944-abd7e991f971?w=500&h=500&fit=crop",
        video: "https://www.youtube.com/embed/Phe4bVe6IAI",
        description: "Cá kho tiêu ngon tuyệt vời",
        time: "1 giờ",
        difficulty: "Dễ",
        serves: "4 người",
        ingredients: [
            "800g cá",
            "4 thìa nước mắm",
            "2 thìa tiêu",
            "1 thìa đường",
            "Dầu ăn"
        ],
        steps: [
            "Cá rửa sạch, cắt khúc",
            "Kho trong nước mắm",
            "Nấu lửa nhỏ 45 phút",
            "Nêm gia vị"
        ]
    },
    {
        id: 59,
        title: "Bún Thang",
        category: "canh",
        emoji: "🍜",
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=500&fit=crop",
        video: "https://www.youtube.com/embed/MeyYN7Cq6WY",
        description: "Bún thang Hà Nội nổi tiếng",
        time: "2 giờ",
        difficulty: "Khó",
        serves: "4 người",
        ingredients: [
            "300g bún tươi",
            "200g gà",
            "100g tôm",
            "30g mắm tôm",
            "500ml nước dùng",
            "Rau thơm, hành"
        ],
        steps: [
            "Nấu nước dùng từ xương gà",
            "Hạ tôm, gà vào",
            "Thêm mắm tôm",
            "Luộc bún",
            "Xếp bún, đổ nước dùng",
            "Rắc rau thơm hành"
        ]
    },
    {
        id: 60,
        title: "Trứng Cuốn Nước Mắm",
        category: "mặn",
        emoji: "🍳",
        image: "https://images.unsplash.com/photo-1585032226651-759b98d7afd4?w=500&h=500&fit=crop",
        video: "https://www.youtube.com/embed/Q0x3jOuKqbI",
        description: "Trứng cuốn nước mắm ngon",
        time: "20 phút",
        difficulty: "Dễ",
        serves: "2 người",
        ingredients: [
            "3 quả trứng",
            "2 thìa nước mắm",
            "1 cây hành",
            "Dầu ăn"
        ],
        steps: [
            "Đánh trứng",
            "Rán bánh mỏng",
            "Cuốn lại",
            "Rắc hành"
        ]
    },
    {
        id: 61,
        title: "Cà Pháo Thịt Lợn",
        category: "chay",
        emoji: "🍆",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&h=500&fit=crop",
        video: "https://www.youtube.com/embed/fG3t-C2W8Rs",
        description: "Cà pháo thịt lợn mặn ngon",
        time: "30 phút",
        difficulty: "Dễ",
        serves: "3 người",
        ingredients: [
            "300g cà pháo",
            "150g thịt lợn xay",
            "3 thìa nước mắm",
            "2 quả ớt",
            "Dầu ăn"
        ],
        steps: [
            "Rán tỏi",
            "Cho thịt vào rán",
            "Thêm cà pháo",
            "Nêm gia vị"
        ]
    },
    {
        id: 62,
        title: "Canh Dền",
        category: "canh",
        emoji: "🍲",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop",
        video: "https://www.youtube.com/embed/C7sV4m6XEyk",
        description: "Canh dền ngon bổ dưỡng",
        time: "1 giờ",
        difficulty: "Dễ",
        serves: "4 người",
        ingredients: [
            "300g dền",
            "200g thịt lợn",
            "500ml nước dùng",
            "2 thìa nước mắm",
            "Tỏi, hành"
        ],
        steps: [
            "Nấu nước dùng",
            "Hạ thịt vào",
            "Thêm dền",
            "Nấu cho mềm",
            "Nêm gia vị"
        ]
    },
    {
        id: 63,
        title: "Tôm Rang Thơm",
        category: "mặn",
        emoji: "🦐",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop",
        video: "https://www.youtube.com/embed/KmA6frn0Vgo",
        description: "Tôm rang thơm cay ngon",
        time: "25 phút",
        difficulty: "Dễ",
        serves: "3 người",
        ingredients: [
            "400g tôm",
            "5 tép tỏi",
            "2 cây hành",
            "2 thìa nước mắm",
            "Dầu ăn"
        ],
        steps: [
            "Rán tỏi hành",
            "Thêm tôm xào",
            "Nêm nước mắm",
            "Đảo tay"
        ]
    },
    {
        id: 64,
        title: "Giò Heo Kho Trứng",
        category: "mặn",
        emoji: "🥚",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop",
        video: "https://www.youtube.com/embed/KPwOgbqLQKE",
        description: "Giò heo kho trứng ngon mặn",
        time: "1.5 giờ",
        difficulty: "Dễ",
        serves: "4 người",
        ingredients: [
            "300g giò heo",
            "6 quả trứng",
            "4 thìa nước mắm",
            "2 thìa đường",
            "Hành khô"
        ],
        steps: [
            "Luộc giò heo",
            "Kho trong nước mắm",
            "Thêm trứng luộc",
            "Nấu đến khi đậm"
        ]
    },
    {
        id: 65,
        title: "Gỏi Rau Sống",
        category: "chay",
        emoji: "🥬",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&h=500&fit=crop",
        video: "https://www.youtube.com/embed/UaIV7BvDpFo",
        description: "Gỏi rau sống tươi mát",
        time: "15 phút",
        difficulty: "Dễ",
        serves: "4 người",
        ingredients: [
            "200g rau xà lách",
            "100g bạc hà",
            "100g rau thơm",
            "3 thìa nước mắm chua",
            "1 quả chanh"
        ],
        steps: [
            "Rau rửa sạch",
            "Cắt khúc, trộn",
            "Nêm nước mắm chua",
            "Rắc ớt"
        ]
    },
    {
        id: 66,
        title: "Cơm Cà Chua Tôi",
        category: "cơm",
        emoji: "🍚",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop",
        video: "https://www.youtube.com/embed/yX5Yw52ZCEY",
        description: "Cơm cà chua tôi chua ngon",
        time: "30 phút",
        difficulty: "Dễ",
        serves: "2 người",
        ingredients: [
            "2 bát cơm",
            "100g tôi",
            "100g cà chua",
            "2 quả trứng",
            "Dầu ăn"
        ],
        steps: [
            "Rán tôi, cà chua",
            "Thêm cơm",
            "Rán trứng",
            "Đảo đều"
        ]
    },
    {
        id: 67,
        title: "Bò Xào Hành Tây",
        category: "mặn",
        emoji: "🧅",
        image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=500&h=500&fit=crop",
        video: "https://www.youtube.com/embed/1c8HGJKfEFs",
        description: "Bò xào hành tây ngon lạ",
        time: "25 phút",
        difficulty: "Dễ",
        serves: "3 người",
        ingredients: [
            "300g bò",
            "200g hành tây",
            "2 thìa nước mắm",
            "1 thìa soy",
            "Dầu ăn"
        ],
        steps: [
            "Rán bò",
            "Thêm hành tây",
            "Xào nhanh",
            "Nêm gia vị"
        ]
    },
    {
        id: 68,
        title: "Chè Sắn Dây",
        category: "tráng miệng",
        emoji: "🥤",
        image: "https://images.unsplash.com/photo-1545689519-275605dc91fd?w=500&h=500&fit=crop",
        video: "https://www.youtube.com/embed/xfNmHBRQcmI",
        description: "Chè sắn dây mát lạnh ngon",
        time: "1.5 giờ",
        difficulty: "Dễ",
        serves: "6 người",
        ingredients: [
            "300g sắn dây",
            "200ml nước cốt dừa",
            "100g đường",
            "1 lít nước",
            "1 chút muối"
        ],
        steps: [
            "Sắn dây gọt sạch, thái rẻo",
            "Nấu trong nước",
            "Thêm sữa dừa",
            "Nêm đường",
            "Để nguội, thêm đá"
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
        recipeCard.onclick = () => openRecipeModal(recipe);

        recipeCard.innerHTML = `
            <div class="recipe-image">
                <img src="${recipe.image}" alt="${recipe.title}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
                <div style="display:none; width:100%; height:100%; align-items:center; justify-content:center; font-size:80px; background:linear-gradient(135deg, var(--primary-color), var(--secondary-color));">${recipe.emoji}</div>
                <button class="favorite-btn" data-recipe-id="${recipe.id}" onclick="toggleFavorite(${recipe.id}, event)" title="Thêm vào yêu thích">
                    <i class="far fa-heart"></i>
                </button>
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
                <div class="rating-display" data-recipe-id="${recipe.id}">
                    <div class="rating-stars" onclick="event.stopPropagation()">
                        ${[1,2,3,4,5].map(i => `
                            <i class="fas fa-star rating-star" data-rating="${i}" 
                               onclick="setRating(${recipe.id}, ${i}, event)"
                               style="color: ${i <= (ratingManager?.getRating(recipe.id) || 0) ? '#ffc107' : '#ddd'};
                                      cursor: pointer; margin-right: 3px;"></i>
                        `).join('')}
                    </div>
                    <span class="rating-summary">${ratingManager?.getAverageRatingLabel(recipe.id) || 'Chưa có đánh giá'}</span>
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px;">
                    <button class="recipe-btn" onclick="openRecipeModalById(${recipe.id}, event)">Xem Chi Tiết</button>
                    <button class="recipe-btn" style="background-color: #e74c3c;" onclick="openVideoModal('${recipe.video}', event)"><i class="fas fa-play"></i> Video</button>
                    <button class="recipe-btn" style="background-color: #3498db;" onclick="showCollectionsModal(${recipe.id})" title="Thêm vào danh sách"><i class="fas fa-list"></i> Lưu</button>
                </div>
            </div>
        `;

        recipesGrid.appendChild(recipeCard);
    });
}

// Filter by Category
function filterRecipes(category, event) {
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

    const activeCard = event?.target?.closest('.category-card');
    if (activeCard) {
        activeCard.style.backgroundColor = 'var(--primary-color)';
        activeCard.style.color = 'var(--white)';
        activeCard.querySelectorAll('i').forEach(icon => {
            icon.style.color = 'var(--white)';
        });
    }
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
function openRecipeModalById(recipeId, event) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }

    const recipe = recipes.find(item => item.id === recipeId);
    if (recipe) {
        openRecipeModal(recipe);
    }
}

function openRecipeModal(recipe) {
    if (!recipe) return;
    
    const modal = document.getElementById('recipeModal');
    const modalBody = document.getElementById('modalBody');
    modal.dataset.recipeId = recipe.id;

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

            <div class="recipe-detail-rating">
                <h3><i class="fas fa-star"></i> Đánh Giá Cộng Đồng</h3>
                <div class="rating-display">
                    <div class="rating-stars">
                        ${[1,2,3,4,5].map(i => `
                            <i class="fas fa-star rating-star" data-rating="${i}"
                               onclick="setRating(${recipe.id}, ${i}, event)"
                               style="color: ${i <= (ratingManager?.getRating(recipe.id) || 0) ? '#ffc107' : '#ddd'};
                                      cursor: pointer; margin-right: 3px;"></i>
                        `).join('')}
                    </div>
                    <span class="rating-summary">${ratingManager?.getAverageRatingLabel(recipe.id) || 'Chưa có đánh giá'}</span>
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
    delete modal.dataset.recipeId;
}

// Open Video Modal
function openVideoModal(videoUrl, event) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }

    const embedUrl = normalizeVideoUrl(videoUrl);
    if (!embedUrl) {
        return;
    }
    
    const modal = document.getElementById('videoModal');
    const videoContainer = document.getElementById('videoContainer');
    
    videoContainer.innerHTML = `
        <iframe width="100%" height="500" src="${embedUrl}" 
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>
    `;
    
    modal.style.display = 'block';
}

function normalizeVideoUrl(videoUrl) {
    if (!videoUrl) {
        return '';
    }

    try {
        const url = new URL(videoUrl, window.location.origin);
        const host = url.hostname.replace(/^www\./, '');
        let embedUrl = videoUrl;

        if (host === 'youtube.com' || host === 'm.youtube.com') {
            if (url.pathname === '/watch') {
                const videoId = url.searchParams.get('v');
                if (videoId) {
                    embedUrl = `https://www.youtube.com/embed/${videoId}`;
                }
            } else if (url.pathname.startsWith('/embed/')) {
                embedUrl = `https://www.youtube.com${url.pathname}`;
            } else if (url.pathname.startsWith('/shorts/')) {
                const videoId = url.pathname.split('/')[2];
                if (videoId) {
                    embedUrl = `https://www.youtube.com/embed/${videoId}`;
                }
            }
        } else if (host === 'youtu.be') {
            const videoId = url.pathname.slice(1);
            if (videoId) {
                embedUrl = `https://www.youtube.com/embed/${videoId}`;
            }
        }

        const separator = embedUrl.includes('?') ? '&' : '?';
        return `${embedUrl}${separator}autoplay=1`;
    } catch {
        const separator = videoUrl.includes('?') ? '&' : '?';
        return `${videoUrl}${separator}autoplay=1`;
    }
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

async function sendAIMessage() {
    const input = document.getElementById('aiAdvisorInput');
    const messagesContainer = document.getElementById('aiAdvisorMessages');
    
    if (!input || !messagesContainer) return;
    
    const question = input.value.trim();
    if (!question) return;

    // Add user message to UI
    const userMessageDiv = document.createElement('div');
    userMessageDiv.className = 'user-message';
    userMessageDiv.innerHTML = `<div class="user-message-content">${escapeHtml(question)}</div>`;
    messagesContainer.appendChild(userMessageDiv);

    // Clear input
    input.value = '';
    input.disabled = true;

    // Scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    // Show typing indicator
    const typingDiv = document.createElement('div');
    typingDiv.className = 'ai-message';
    typingDiv.id = 'ai-typing-indicator';
    typingDiv.innerHTML = '<div class="ai-message-content"><div class="ai-typing"><span></span><span></span><span></span></div></div>';
    messagesContainer.appendChild(typingDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    let aiResponse = '';
    try {
        aiResponse = await getAIAdvisor().sendToOpenAI(question);
    } catch (error) {
        console.error('AI advisor request failed:', error);
        aiResponse = 'Xin lỗi, hiện tại AI Advisor đang bận. Vui lòng thử lại sau ít phút.';
    } finally {
        // Always remove typing state and unlock input.
        if (typingDiv.parentNode) {
            typingDiv.remove();
        }
        input.disabled = false;
        input.focus();
    }

    // Add AI response to UI
    const aiMessageDiv = document.createElement('div');
    aiMessageDiv.className = 'ai-message';
    aiMessageDiv.innerHTML = `<div class="ai-message-content">${convertMarkdownToHtml(escapeHtml(aiResponse))}</div>`;
    messagesContainer.appendChild(aiMessageDiv);

    // Scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Helper function to convert markdown-like formatting to HTML
function convertMarkdownToHtml(text) {
    // Convert **bold** to <strong>bold</strong>
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    // Convert *italic* to <em>italic</em>
    text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');
    // Convert newlines to <br>
    text = text.replace(/\n/g, '<br>');
    // Convert emoji + text to list items (simple approximation)
    text = text.replace(/([✨👈🎯💡✅👇🤔📝])/g, '<br>$1');
    return text;
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
