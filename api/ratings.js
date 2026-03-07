const {
    readRatingsStore,
    writeRatingsStore,
    summarizeRatings
} = require('../lib/ratings-store');

module.exports = async (req, res) => {
    if (req.method === 'GET') {
        try {
            const ratings = await readRatingsStore();
            return res.status(200).json({ ratings: summarizeRatings(ratings) });
        } catch (error) {
            console.error('Cannot read ratings store:', error);
            return res.status(500).json({ error: 'Cannot read ratings data' });
        }
    }

    if (req.method === 'POST') {
        const { recipeId, rating, clientId } = req.body || {};
        const normalizedRecipeId = String(recipeId || '').trim();
        const numericRating = Number(rating);
        const normalizedClientId = String(clientId || '').trim();

        if (!normalizedRecipeId || !normalizedClientId || !Number.isFinite(numericRating) || numericRating < 1 || numericRating > 5) {
            return res.status(400).json({
                error: 'recipeId, clientId và rating hợp lệ là bắt buộc'
            });
        }

        try {
            const ratings = await readRatingsStore();
            const existing = ratings[normalizedRecipeId] || {
                total: 0,
                count: 0,
                users: {}
            };

            const previousRating = Number(existing.users[normalizedClientId] || 0);
            if (previousRating > 0) {
                existing.total -= previousRating;
            } else {
                existing.count += 1;
            }

            existing.users[normalizedClientId] = numericRating;
            existing.total += numericRating;
            ratings[normalizedRecipeId] = existing;

            await writeRatingsStore(ratings);

            const summary = summarizeRatings(ratings)[normalizedRecipeId] || { average: 0, count: 0 };
            return res.status(200).json({ recipeId: normalizedRecipeId, summary });
        } catch (error) {
            console.error('Cannot save rating:', error);
            return res.status(500).json({ error: 'Cannot save rating' });
        }
    }

    res.setHeader('Allow', 'GET, POST');
    return res.status(405).json({ error: 'Method not allowed' });
};