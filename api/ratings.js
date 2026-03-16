const {
    getRatingsSummary,
    saveRating,
    StorageConfigError
} = require('../lib/ratings-store');
const { readJsonBody } = require('../lib/request-utils');

module.exports = async (req, res) => {
    if (req.method === 'GET') {
        try {
            const ratings = await getRatingsSummary();
            return res.status(200).json({ ratings });
        } catch (error) {
            console.error('Cannot read ratings store:', error);

            if (error instanceof StorageConfigError) {
                return res.status(500).json({ error: error.message });
            }

            return res.status(500).json({ error: 'Cannot read ratings data' });
        }
    }

    if (req.method === 'POST') {
        try {
            const { recipeId, rating, clientId } = await readJsonBody(req);
            const normalizedRecipeId = String(recipeId || '').trim();
            const numericRating = Number(rating);
            const normalizedClientId = String(clientId || '').trim();

            if (!normalizedRecipeId || !normalizedClientId || !Number.isFinite(numericRating) || numericRating < 1 || numericRating > 5) {
                return res.status(400).json({
                    error: 'recipeId, clientId và rating hợp lệ là bắt buộc'
                });
            }

            const summary = await saveRating(normalizedRecipeId, normalizedClientId, numericRating);
            return res.status(200).json({ recipeId: normalizedRecipeId, summary });
        } catch (error) {
            console.error('Cannot save rating:', error);

            if (error instanceof StorageConfigError) {
                return res.status(500).json({ error: error.message });
            }

            if (error instanceof SyntaxError) {
                return res.status(400).json({ error: 'Dữ liệu gửi lên không hợp lệ' });
            }

            return res.status(500).json({ error: 'Cannot save rating' });
        }
    }

    res.setHeader('Allow', 'GET, POST');
    return res.status(405).json({ error: 'Method not allowed' });
};