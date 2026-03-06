#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
Script để Cập Nhật Ảnh & Video AI vào Trang Web Nấu Ăn
=======================================================

Cách sử dụng:
    python3 update_recipes.py --help
    python3 update_recipes.py --recipe-id 1 --image-url "https://..." --video-url "https://..."

Hoặc chỉnh sửa trực tiếp trong update_all_recipes()
"""

import json
import sys
import argparse
from pathlib import Path

# Định nghĩa đường dẫn
SCRIPT_DIR = Path(__file__).parent
JS_SCRIPT = SCRIPT_DIR / "js" / "script.js"

# Template dữ liệu công thức
RECIPES_DATA = {
    1: {
        "title": "Phở Bò",
        "category": "canh",
        "default_image": "https://images.unsplash.com/photo-1582878657708-bc07aa60bd45?w=500&h=500&fit=crop",
        "default_video": "https://www.youtube.com/embed/cZtoFQXsmls",
    },
    2: {
        "title": "Bánh Chưng",
        "category": "chay",
        "default_image": "https://images.unsplash.com/photo-1618053743606-7f8d0b814901?w=500&h=500&fit=crop",
        "default_video": "https://www.youtube.com/embed/H-n2OvHb9xw",
    },
    3: {
        "title": "Bún Riêu",
        "category": "canh",
        "default_image": "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=500&fit=crop",
        "default_video": "https://www.youtube.com/embed/MYMmzxSm3uA",
    },
    4: {
        "title": "Cơm Tấm Sài Gòn",
        "category": "cơm",
        "default_image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop",
        "default_video": "https://www.youtube.com/embed/5eZNnEhCGkk",
    },
    5: {
        "title": "Mốc Nướng Muối Ớt",
        "category": "mặn",
        "default_image": "https://images.unsplash.com/photo-1580959375944-abd7e991f971?w=500&h=500&fit=crop",
        "default_video": "https://www.youtube.com/embed/4dpEWpvZcbI",
    },
    6: {
        "title": "Nem Rán",
        "category": "mặn",
        "default_image": "https://images.unsplash.com/photo-1609501676725-7186f017a4b1?w=500&h=500&fit=crop",
        "default_video": "https://www.youtube.com/embed/J4aPdyj7Cpc",
    },
    7: {
        "title": "Gỏi Cuốn",
        "category": "chay",
        "default_image": "https://images.unsplash.com/photo-1585032226651-759b98d7afd4?w=500&h=500&fit=crop",
        "default_video": "https://www.youtube.com/embed/Y0dOUqj8EpE",
    },
    8: {
        "title": "Chè Đen",
        "category": "tráng miệng",
        "default_image": "https://images.unsplash.com/photo-1545689519-275605dc91fd?w=500&h=500&fit=crop",
        "default_video": "https://www.youtube.com/embed/7ykPVb6KUlA",
    },
}


def update_recipe_url(recipe_id, image_url=None, video_url=None):
    """
    Cập nhật URL ảnh và video cho một công thức
    
    Args:
        recipe_id (int): ID của công thức (1-8)
        image_url (str): URL ảnh mới
        video_url (str): URL video mới
    """
    
    if recipe_id not in RECIPES_DATA:
        print(f"❌ Lỗi: ID công thức {recipe_id} không tồn tại (1-8)")
        return False
    
    recipe = RECIPES_DATA[recipe_id]
    title = recipe["title"]
    
    # Đọc file script.js
    with open(JS_SCRIPT, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Tìm công thức cần cập nhật
    recipe_block_start = content.find(f'title: "{title}"')
    if recipe_block_start == -1:
        print(f"❌ Lỗi: Không tìm thấy công thức '{title}' trong script.js")
        return False
    
    # Tìm image line
    if image_url:
        image_pattern = f'image: "{recipe["default_image"]}"'
        new_image = f'image: "{image_url}"'
        if image_pattern in content:
            content = content.replace(image_pattern, new_image, 1)
            print(f"✅ Cập nhật ảnh cho {title}")
        else:
            print(f"⚠️  Không tìm thấy image URL mặc định cho {title}")
    
    # Tìm video line
    if video_url:
        video_pattern = f'video: "{recipe["default_video"]}"'
        new_video = f'video: "{video_url}"'
        if video_pattern in content:
            content = content.replace(video_pattern, new_video, 1)
            print(f"✅ Cập nhật video cho {title}")
        else:
            print(f"⚠️  Không tìm thấy video URL mặc định cho {title}")
    
    # Ghi lại file
    with open(JS_SCRIPT, 'w', encoding='utf-8') as f:
        f.write(content)
    
    return True


def list_recipes():
    """Hiển thị danh sách các công thức"""
    print("\n📋 Danh Sách Công Thức & URLs Hiện Tại:")
    print("=" * 80)
    
    for recipe_id, recipe in RECIPES_DATA.items():
        print(f"\n🍜 [{recipe_id}] {recipe['title']} ({recipe['category']})")
        print(f"   Ảnh:  {recipe['default_image']}")
        print(f"   Video: {recipe['default_video']}")


def interactive_update():
    """Hướng dẫn cập nhật tương tác"""
    print("\n🎨 Cập Nhật URL Ảnh & Video Cho Công Thức")
    print("=" * 80)
    
    list_recipes()
    
    while True:
        print("\n" + "=" * 80)
        recipe_id = input("\nNhập ID công thức (1-8) hoặc 'q' để thoát: ").strip()
        
        if recipe_id.lower() == 'q':
            print("✅ Thoát!")
            break
        
        try:
            recipe_id = int(recipe_id)
        except ValueError:
            print("❌ Vui lòng nhập một số từ 1-8")
            continue
        
        if recipe_id not in RECIPES_DATA:
            print("❌ ID không hợp lệ")
            continue
        
        recipe = RECIPES_DATA[recipe_id]
        print(f"\n📝 Đang cập nhật: {recipe['title']}")
        
        image_url = input("Nhập URL ảnh mới (hoặc 'n' để bỏ qua): ").strip()
        video_url = input("Nhập URL video mới (hoặc 'n' để bỏ qua): ").strip()
        
        image_url = image_url if image_url != 'n' else None
        video_url = video_url if video_url != 'n' else None
        
        if image_url or video_url:
            update_recipe_url(recipe_id, image_url, video_url)
        else:
            print("⏭️  Không cập nhật URL nào")


def batch_update_example():
    """Ví dụ cập nhật nhiều công thức cùng lúc"""
    print("\n📚 Ví Dụ Cập Nhật Batch:")
    print("=" * 80)
    
    # Ví dụ: thay thế tất cả ảnh bằng ảnh từ Midjourney
    updates = [
        (1, "https://cdn.midjourney.com/pho-bo-ai.jpg", "https://www.youtube.com/embed/XXXX"),
        (2, "https://cdn.midjourney.com/banh-chung-ai.jpg", None),
        (3, "https://cdn.midjourney.com/bun-rieu-ai.jpg", None),
    ]
    
    print("Ví dụ cấu trúc dữ liệu:")
    print("updates = [")
    print("    (recipe_id, image_url, video_url),")
    print("    ...")
    print("]")
    print("\nBạn có thể tạo file batch_update.py như ở trên để cập nhật nhiều cùng lúc")


def main():
    parser = argparse.ArgumentParser(
        description="Cập nhật URL ảnh & video cho công thức nấu ăn",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Ví Dụ Sử Dụng:
  # Hiển thị danh sách công thức
  python3 update_recipes.py --list
  
  # Cập nhật ảnh cho công thức #1
  python3 update_recipes.py --recipe-id 1 --image-url "https://..."
  
  # Cập nhật ảnh & video
  python3 update_recipes.py --recipe-id 2 --image-url "https://..." --video-url "https://..."
  
  # Chế độ tương tác
  python3 update_recipes.py --interactive
        """
    )
    
    parser.add_argument('--list', action='store_true', 
                        help="Hiển thị danh sách công thức & URLs")
    parser.add_argument('--recipe-id', type=int, 
                        help="ID công thức (1-8)")
    parser.add_argument('--image-url', 
                        help="URL ảnh mới")
    parser.add_argument('--video-url', 
                        help="URL video mới")
    parser.add_argument('--interactive', '-i', action='store_true',
                        help="Chế độ cập nhật tương tác")
    parser.add_argument('--example', action='store_true',
                        help="Hiển thị ví dụ cập nhật batch")
    
    args = parser.parse_args()
    
    # Kiểm tra nếu không có arguments
    if not any(vars(args).values()):
        parser.print_help()
        return
    
    if args.list:
        list_recipes()
    
    elif args.interactive:
        interactive_update()
    
    elif args.example:
        batch_update_example()
    
    elif args.recipe_id:
        if args.image_url or args.video_url:
            update_recipe_url(args.recipe_id, args.image_url, args.video_url)
        else:
            print(f"❌ Vui lòng cung cấp --image-url hoặc --video-url")


if __name__ == "__main__":
    main()
