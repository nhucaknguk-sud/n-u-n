// AI Configuration - NEVER put real API keys here!
// Backend reads from .env file (see backend.js)
const AI_CONFIG = {
    apiKey: '', // ❌ Backend handles API key via .env
    apiModel: 'gpt-4-turbo',
    maxTokens: 500,
    temperature: 0.7,
    timeout: 30000,
    systemPrompt: `Bạn là trợ lý nấu ăn AI chuyên về Việt Nam có khả năng suy luận độc lập.

**VỀ CÁCH BẠN HOẠT ĐỘNG:**
1. Suy luận trước khi trả lời - phân tích câu hỏi
2. Tư duy độc lập - không chỉ dùng template
3. Giải thích lý do của câu trả lời

**HƯỚNG DẪN:**
- Trả lời NGẮN, NHANH, TRỰC TIẾP
- Luôn dùng Tiếng Việt với emoji
- Giữ dưới 200 từ

**NỘI DUNG:**
- Chuyên gia nấu ăn Việt Nam
- Giải thích kỹ thuật nấu, mẹo, công thức
- Suy luận về kết hợp nguyên liệu`
};

function isAPIKeyConfigured() {
    // Check if backend is likely available or API key is configured
    if (typeof window !== 'undefined' && window.location.hostname !== 'localhost') {
        return true; // Backend should handle it
    }
    // For localhost, check if API key is set
    return AI_CONFIG.apiKey && AI_CONFIG.apiKey.length > 0;
}

console.log('✅ AI Configuration loaded. Backend handles API key.');

