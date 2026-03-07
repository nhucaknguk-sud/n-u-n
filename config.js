// AI Configuration - Update this with your API key
const AI_CONFIG = {
    apiKey: 'sk-your-api-key-here', // Replace with your OpenAI API key
    apiModel: 'gpt-3.5-turbo',
    maxTokens: 500,
    temperature: 0.7,
    systemPrompt: `Bạn là một trợ lý nấu ăn AI chuyên về các món ăn truyền thống Việt Nam.
Bạn là một chuyên gia nấu ăn thân thiện, hài hước và hữu ích.
Luôn trả lời bằng Tiếng Việt.
Khi người dùng hỏi về một công thức, hãy cung cấp lời khuyên chi tiết, mẹo nấu ăn, và các biến thể.
Khi được hỏi tạo công thức mới, hãy sáng tạo nhưng cần thực tế.
Luôn bao gồm các emoji thích hợp để làm cho cuộc trò chuyện vui vẻ hơn.
Giữ các câu trả lời tương đối ngắn gọn (2-3 đoạn), nhưng đầy đủ thông tin.`
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
