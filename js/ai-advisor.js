// AI Advisor Assistant - Enhanced with OpenAI Integration
// This module handles all AI-related operations

class AIAdvisor {
    constructor() {
        this.conversationHistory = [];
        this.isLoading = false;
        this.recipeSummary = this.generateRecipeSummary();
    }

    // Generate a summary of recipes to provide context to AI
    generateRecipeSummary() {
        if (typeof recipes === 'undefined') return '';
        
        const recipeList = recipes.map(r => 
            `- ${r.title} (${r.difficulty}, ${r.time}): ${r.description}`
        ).join('\n');

        return `\nServerbot hiện có những công thức nấu ăn sau:\n${recipeList}`;
    }

    // Build context for the AI to understand the website
    getContextMessage() {
        return `Bạn là một trợ lý nấu ăn AI cho website "Nấu Ăn Việt" chuyên cung cấp công thức nấu ăn truyền thống Việt Nam.
${this.recipeSummary}

Luôn trả lời bằng Tiếng Việt, vui vẻ và hữu ích. 
Khi người dùng hỏi về một công thức, gợi ý chi tiết và mẹo nấu ăn.
Khi được hỏi tạo công thức từ nguyên liệu, hãy sáng tạo nhưng thực tế.
Giữ câu trả lời ngắn gọn (2-3 đoạn) nhưng đầy đủ thông tin.
Luôn sử dụng emoji phù hợp để làm cuộc hội thoại vui vẻ hơn.`;
    }

    // Add message to conversation history
    addMessage(role, content) {
        this.conversationHistory.push({
            role: role,
            content: content
        });
        // Keep only last 10 messages to avoid context length issues
        if (this.conversationHistory.length > 10) {
            this.conversationHistory = this.conversationHistory.slice(-10);
        }
    }

    // Clear conversation history
    clearHistory() {
        this.conversationHistory = [];
    }

    // Send message to OpenAI API (or backend proxy)
    async sendToOpenAI(userMessage) {
        if (!isAPIKeyConfigured()) {
            return this.getFallbackResponse(userMessage);
        }

        this.isLoading = true;
        
        try {
            // Add user message to history
            this.addMessage('user', userMessage);

            // Prepare messages for API
            const messages = [
                {
                    role: 'system',
                    content: this.getContextMessage()
                },
                ...this.conversationHistory
            ];

            // Try backend first, then fallback to direct API
            let response = null;
            let useBackend = false;

            // Check if backend is available
            if (typeof window !== 'undefined' && window.location.hostname !== 'localhost') {
                // Try backend for non-localhost environments
                try {
                    const backendUrl = `${window.location.protocol}//${window.location.hostname}:3000/api/chat`;
                    const backendResponse = await fetch(backendUrl, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ messages: messages })
                    });

                    if (backendResponse.ok) {
                        response = backendResponse;
                        useBackend = true;
                    }
                } catch (e) {
                    // Backend not available, will try direct API
                    console.log('Backend not available, using direct API call');
                }
            }

            // If backend not used or not available, try direct API
            if (!useBackend) {
                response = await fetch('https://api.openai.com/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${AI_CONFIG.apiKey}`
                    },
                    body: JSON.stringify({
                        model: AI_CONFIG.apiModel,
                        messages: messages,
                        max_tokens: AI_CONFIG.maxTokens,
                        temperature: AI_CONFIG.temperature
                    })
                });
            }

            if (!response.ok) {
                const error = await response.json();
                console.error('API Error:', error);
                
                // Handle specific errors
                if (response.status === 401) {
                    return '⚠️ API key không hợp lệ. Vui lòng kiểm tra lại config.js';
                } else if (response.status === 429) {
                    return '⏱️ Quá nhiều yêu cầu. Hãy chờ vài giây rồi thử lại!';
                } else if (response.status === 500) {
                    return '🔧 OpenAI có lỗi tạm thời. Vui lòng thử lại sau!';
                } else if (response.status === 403) {
                    return '🚫 Truy cập bị từ chối. Hãy kiểm tra API key và quyền truy cập.';
                }
                
                return '😅 Có lỗi kết nối. Vui lòng kiểm tra Internet và thử lại!';
            }

            const data = await response.json();
            
            // Handle both direct API and backend response formats
            let aiMessage = '';
            if (data.choices && data.choices[0] && data.choices[0].message) {
                aiMessage = data.choices[0].message.content;
            } else if (data.error) {
                return `⚠️ Lỗi: ${data.error}`;
            } else {
                return '❌ Không thể xử lý phản hồi từ AI';
            }
            
            // Add AI response to history
            this.addMessage('assistant', aiMessage);
            
            this.isLoading = false;
            return aiMessage;

        } catch (error) {
            console.error('Error:', error);
            this.isLoading = false;
            
            // Provide helpful error messages
            if (error.message.includes('Failed to fetch')) {
                return '🌐 Lỗi kết nối. Kiểm tra Internet hoặc CORS settings.';
            }
            
            return '😅 Có lỗi xảy ra. Hãy kiểm tra kết nối Internet và thử lại!';
        }
    }

    // Fallback response when API is not configured
    getFallbackResponse(question) {
        const lowerQuestion = question.toLowerCase();
        
        // Enhanced fallback responses
        if (lowerQuestion.includes('phở') || lowerQuestion.includes('phở bò')) {
            return '🍜 Phở bò - Màu sắc vàng ơ của nước dùng, độ mộc của xương và hương thơm của gia vị! Bí quyết là nước dùng phải được nấu từ xương bò ít nhất 3-4 tiếng. Hãy xem công thức chi tiết của chúng tôi nhé! \n\n💡 Mẹo: Nếu bạn không có thời gian, bạn có thể sử dụng nồi áp suất để rút ngắn thời gian nấu đi một nửa!';
        } else if (lowerQuestion.includes('mẹo') || lowerQuestion.includes('tip')) {
            return '💡 Các mẹo nấu ăn hữu ích:\n\n✨ **Chuẩn bị** - Chuẩn bị tất cả nguyên liệu trước (mise en place), sẽ giúp bạn nấu nhanh và an tâm hơn\n✨ **Lửa** - Sử dụng lửa vừa phải để tránh cháy và giữ độ tươi\n✨ **Nêm gia vị** - Nêm từng chút một để tránh nêm quá mặn\n✨ **Trị** - Để thịt cá nghỉ trước khi cắt để giữ độ tươi\n\n🤔 Bạn cần giúp với món ăn nào cụ thể không?';
        } else if (lowerQuestion.includes('dễ') || lowerQuestion.includes('nhanh')) {
            return '⚡ Các món ăn dễ và nhanh:\n\n🍚 **Cơm tấm Sài Gòn** (1 tiếng) - Đơn giản nhưng rất ngon!\n🥒 **Gỏi cuốn** (30 phút) - Mới mẻ, nhẹ nhàng, hoàn hảo cho ngày nóng\n🐟 **Mốc nướng muối ớt** (45 phút) - Cực ngon và dễ làm\n\n👈 Chọn một trong những công thức này để bắt đầu!';
        } else if (lowerQuestion.includes('bánh chưng')) {
            return '📦 Bánh chưng - Biểu tượng của Tết Việt!\n\nMặc dù gói bánh chưng hơi phức tạp, nhưng đó là một truyền thống đẹp của gia đình Việt. Khi ăn bánh chưng tự gói, bạn sẽ cảm nhận được tình thương của gia đình.\n\n🎯 Bí quyết: Cho gạo nếp ngâm một tối trước khi dùng, điều này sẽ giúp bánh chưng cứng vừa phải.';
        } else if (lowerQuestion.includes('nem') || lowerQuestion.includes('cuốn')) {
            return '🌮 Nem rán và gỏi cuốn - Hai khai vị yêu thích!\n\n🌮 **Nem rán**: Chiên cho ngoài giòn, trong mềm. Ăn kèm với nước mắm chua và rau sống\n🥒 **Gỏi cuốn**: Lạnh, tươi mát, hoàn hảo cho hè. Dễ chuẩn bị nhưng ấn tượng\n\n👇 Cả hai đều là tuyệt vời khi ăn với gia đình và bạn bè!';
        } else if (lowerQuestion.includes('công thức') || lowerQuestion.includes('tạo')) {
            return '📝 Bạn muốn tạo công thức mới?\n\n😊 Tôi có thể giúp bạn! Hãy cho tôi biết:\n\n✅ Những nguyên liệu bạn có\n✅ Thời gian nấu bạn có\n✅ Khẩu vị bạn muốn (nồi, nhanh, dễ, v.v.)\n\n🤔 Hoặc bạn cũng có thể mô tả một món ăn bạn thích, tôi sẽ giúp bạn biến nó thành công thức chi tiết!';
        } else {
            return '😊 Đó là một câu hỏi thú vị!\n\nTôi có thể giúp bạn với:\n🍜 Công thức nấu ăn\n💡 Mẹo nấu ăn\n📝 Tạo công thức từ nguyên liệu\n👨‍🍳 Hướng dẫn chi tiết từng bước\n\n🤔 Hỏi tôi bất cứ điều gì về nấu ăn Việt!';
        }
    }

    // Get current conversation summary (for displaying chat history)
    getConversationSummary() {
        return this.conversationHistory;
    }

    // Get loading status
    isLoading() {
        return this.isLoading;
    }
}

// Create global instance
const aiAdvisor = new AIAdvisor();
