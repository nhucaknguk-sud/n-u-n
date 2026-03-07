// AI Configuration - Update this with your API key
const AI_CONFIG = {
    apiKey: 'sk-your-api-key-here', // Replace with your OpenAI API key
    apiModel: 'gpt-3.5-turbo',
    maxTokens: 250,                 // ⚡ Giảm từ 500 → 250 (trả lời nhanh hơn)
    temperature: 0.5,               // ⚡ Giảm từ 0.7 → 0.5 (nhanh hơn)
    timeout: 15000,                 // ⚡ Timeout 15 giây (tránh chờ quá lâu)
    systemPrompt: `Bạn là trợ lý nấu ăn AI chuyên về Việt Nam.
Trả lời NGẮN, NHANH, TRỰC TIẾP (2-3 câu tối đa).
Luôn dùng Tiếng Việt. Dùng emoji. Giữ câu trả lời dưới 150 từ.`
};

// Utility function to check if API key is configured
function isAPIKeyConfigured() {
    return AI_CONFIG.apiKey && 
           AI_CONFIG.apiKey !== 'sk-your-api-key-here' && 
           AI_CONFIG.apiKey.startsWith('sk-');
}

// Utility function to validate API key format
function validateAPIKey(key) {
    return key && key.startsWith('sk-') && key.length > 30;
}

// Log configuration status
console.log('AI Configuration loaded. API Key configured:', isAPIKeyConfigured());
