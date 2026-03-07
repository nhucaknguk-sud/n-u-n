/**
 * Special Features for Recipe App
 * - Favorites system
 * - Rating system
 * - Advanced search
 * - Collections
 */

// ============== FAVORITES SYSTEM ==============
class FavoritesManager {
    constructor() {
        this.storageKey = 'nauan_favorites';
        this.favorites = this.loadFavorites();
    }

    loadFavorites() {
        const stored = localStorage.getItem(this.storageKey);
        return stored ? JSON.parse(stored) : [];
    }

    saveFavorites() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.favorites));
    }

    addFavorite(recipeId) {
        if (!this.favorites.includes(recipeId)) {
            this.favorites.push(recipeId);
            this.saveFavorites();
            this.updateUI();
            return true;
        }
        return false;
    }

    removeFavorite(recipeId) {
        const index = this.favorites.indexOf(recipeId);
        if (index > -1) {
            this.favorites.splice(index, 1);
            this.saveFavorites();
            this.updateUI();
            return true;
        }
        return false;
    }

    toggleFavorite(recipeId) {
        if (this.favorites.includes(recipeId)) {
            return this.removeFavorite(recipeId);
        } else {
            return this.addFavorite(recipeId);
        }
    }

    isFavorite(recipeId) {
        return this.favorites.includes(recipeId);
    }

    getFavorites() {
        return this.favorites;
    }

    updateUI() {
        // Update all heart icons
        document.querySelectorAll('.favorite-btn').forEach(btn => {
            const recipeId = parseInt(btn.getAttribute('data-recipe-id'));
            if (this.isFavorite(recipeId)) {
                btn.classList.add('active');
                btn.innerHTML = '<i class="fas fa-heart"></i>';
            } else {
                btn.classList.remove('active');
                btn.innerHTML = '<i class="far fa-heart"></i>';
            }
        });
    }
}

// ============== RATING SYSTEM ==============
class RatingManager {
    constructor() {
        this.storageKey = 'nauan_ratings';
        this.clientIdKey = 'nauan_rating_client_id';
        this.ratings = this.loadRatings();
        this.communityRatings = {};
        this.apiBaseUrl = this.getApiBaseUrl();
        this.apiAvailable = false;
    }

    loadRatings() {
        const stored = localStorage.getItem(this.storageKey);
        return stored ? JSON.parse(stored) : {};
    }

    saveRatings() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.ratings));
    }

    getApiBaseUrl() {
        if (typeof window === 'undefined') {
            return '/api/ratings';
        }

        const { hostname, origin } = window.location;
        if (hostname === 'localhost' || hostname === '127.0.0.1') {
            return `http://${hostname}:3000/api/ratings`;
        }

        return `${origin}/api/ratings`;
    }

    getClientId() {
        let clientId = localStorage.getItem(this.clientIdKey);

        if (!clientId) {
            clientId = `client_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
            localStorage.setItem(this.clientIdKey, clientId);
        }

        return clientId;
    }

    normalizeSummary(summary) {
        const average = Number(summary?.average || 0);
        const count = Number(summary?.count || 0);

        return {
            average: Number.isFinite(average) ? average : 0,
            count: Number.isFinite(count) ? count : 0
        };
    }

    getCommunitySummary(recipeId) {
        return this.normalizeSummary(this.communityRatings[recipeId]);
    }

    getRatingCount(recipeId) {
        const community = this.getCommunitySummary(recipeId);
        if (community.count > 0) {
            return community.count;
        }

        return this.getRating(recipeId) ? 1 : 0;
    }

    setRating(recipeId, rating) {
        if (rating < 1 || rating > 5) return false;
        this.ratings[recipeId] = rating;
        this.saveRatings();
        return true;
    }

    getRating(recipeId) {
        return this.ratings[recipeId] || 0;
    }

    getAverageRating(recipeId) {
        const community = this.getCommunitySummary(recipeId);
        if (community.count > 0) {
            return community.average.toFixed(1);
        }

        const rating = this.getRating(recipeId);
        return rating ? rating.toFixed(1) : 'Chưa có đánh giá';
    }

    getAverageRatingLabel(recipeId) {
        const average = this.getAverageRating(recipeId);
        if (average === 'Chưa có đánh giá') {
            return average;
        }

        const count = this.getRatingCount(recipeId);
        const suffix = count === 1 ? 'đánh giá' : 'đánh giá';
        return `${average}/5 (${count} ${suffix})`;
    }

    async init() {
        await this.fetchCommunityRatings();
    }

    refreshRatingUI() {
        if (typeof displayRecipes === 'function') {
            if (typeof filteredRecipes !== 'undefined') {
                displayRecipes(filteredRecipes);
            } else if (typeof recipes !== 'undefined') {
                displayRecipes(recipes);
            }
        }

        const recipeModal = document.getElementById('recipeModal');
        const recipeId = Number(recipeModal?.dataset?.recipeId || 0);

        if (recipeModal && recipeModal.style.display === 'block' && recipeId && typeof recipes !== 'undefined' && typeof openRecipeModal === 'function') {
            const selectedRecipe = recipes.find(recipe => recipe.id === recipeId);
            if (selectedRecipe) {
                openRecipeModal(selectedRecipe);
            }
        }
    }

    async fetchCommunityRatings() {
        try {
            const response = await fetch(this.apiBaseUrl);
            if (!response.ok) {
                throw new Error(`Ratings API returned ${response.status}`);
            }

            const data = await response.json();
            this.communityRatings = data.ratings || {};
            this.apiAvailable = true;
            this.refreshRatingUI();
            return this.communityRatings;
        } catch (error) {
            this.apiAvailable = false;
            console.warn('Ratings API unavailable:', error);
            return this.communityRatings;
        }
    }

    async syncRating(recipeId, rating) {
        try {
            const response = await fetch(this.apiBaseUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    recipeId,
                    rating,
                    clientId: this.getClientId()
                })
            });

            if (!response.ok) {
                throw new Error(`Ratings API returned ${response.status}`);
            }

            const data = await response.json();
            this.communityRatings[recipeId] = this.normalizeSummary(data.summary);
            this.apiAvailable = true;
            this.refreshRatingUI();
            return this.communityRatings[recipeId];
        } catch (error) {
            this.apiAvailable = false;
            console.warn('Cannot sync rating to server:', error);
            return null;
        }
    }
}

// ============== COLLECTIONS SYSTEM ==============
class CollectionsManager {
    constructor() {
        this.storageKey = 'nauan_collections';
        this.collections = this.loadCollections();
    }

    loadCollections() {
        const stored = localStorage.getItem(this.storageKey);
        return stored ? JSON.parse(stored) : {
            'Yêu Thích': [],
            'Muốn Thử': [],
            'Dễ Nấu': [],
            'Bữa Chiều': []
        };
    }

    saveCollections() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.collections));
    }

    createCollection(name) {
        if (!this.collections[name]) {
            this.collections[name] = [];
            this.saveCollections();
            return true;
        }
        return false;
    }

    addToCollection(collectionName, recipeId) {
        if (this.collections[collectionName]) {
            if (!this.collections[collectionName].includes(recipeId)) {
                this.collections[collectionName].push(recipeId);
                this.saveCollections();
                return true;
            }
        }
        return false;
    }

    removeFromCollection(collectionName, recipeId) {
        if (this.collections[collectionName]) {
            const index = this.collections[collectionName].indexOf(recipeId);
            if (index > -1) {
                this.collections[collectionName].splice(index, 1);
                this.saveCollections();
                return true;
            }
        }
        return false;
    }

    getCollection(collectionName) {
        return this.collections[collectionName] || [];
    }

    getAllCollections() {
        return this.collections;
    }
}

// ============== ADVANCED SEARCH ==============
class AdvancedSearch {
    constructor(recipes) {
        this.recipes = recipes;
    }

    searchByIngredient(ingredient) {
        return this.recipes.filter(recipe =>
            recipe.ingredients.some(ing =>
                ing.toLowerCase().includes(ingredient.toLowerCase())
            )
        );
    }

    searchByTime(minTime, maxTime) {
        return this.recipes.filter(recipe => {
            const time = parseInt(recipe.time);
            return time >= minTime && time <= maxTime;
        });
    }

    searchByDifficulty(difficulty) {
        return this.recipes.filter(recipe =>
            recipe.difficulty.toLowerCase() === difficulty.toLowerCase()
        );
    }

    searchByServes(serves) {
        return this.recipes.filter(recipe =>
            recipe.serves.includes(serves)
        );
    }

    combinedSearch(filters) {
        let results = [...this.recipes];

        if (filters.ingredient) {
            results = results.filter(recipe =>
                recipe.ingredients.some(ing =>
                    ing.toLowerCase().includes(filters.ingredient.toLowerCase())
                )
            );
        }

        if (filters.difficulty) {
            results = results.filter(recipe =>
                recipe.difficulty === filters.difficulty
            );
        }

        if (filters.maxTime) {
            results = results.filter(recipe => {
                const time = parseInt(recipe.time);
                return time <= filters.maxTime;
            });
        }

        if (filters.category && filters.category !== 'all') {
            results = results.filter(recipe =>
                recipe.category === filters.category
            );
        }

        return results;
    }
}

// ============== GLOBAL INSTANCES ==============
let favoritesManager = new FavoritesManager();
let ratingManager = new RatingManager();
let collectionsManager = new CollectionsManager();
let advancedSearch = null;

// Initialize advanced search when recipes are available
function initAdvancedSearch() {
    if (typeof recipes !== 'undefined' && recipes.length > 0) {
        advancedSearch = new AdvancedSearch(recipes);
    }
}

// ============== UI HELPER FUNCTIONS ==============
function toggleFavorite(recipeId, event) {
    event.stopPropagation();
    favoritesManager.toggleFavorite(recipeId);
    
    // Show toast notification
    const btn = event.target.closest('.favorite-btn');
    if (favoritesManager.isFavorite(recipeId)) {
        showToast('❤️ Đã thêm vào yêu thích!', 'success');
    } else {
        showToast('💔 Đã xóa khỏi yêu thích', 'info');
    }
}

async function setRating(recipeId, rating, event) {
    if (event) event.stopPropagation();
    ratingManager.setRating(recipeId, rating);
    ratingManager.refreshRatingUI();
    await ratingManager.syncRating(recipeId, rating);
    showToast(`⭐ Bạn đã đánh giá ${rating} sao!`, 'success');
}

function addToCollection(recipeId, collectionName, event) {
    if (event) event.stopPropagation();
    collectionsManager.addToCollection(collectionName, recipeId);
    showToast(`✅ Đã thêm vào danh sách: ${collectionName}`, 'success');
}

function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ============== ADVANCED SEARCH FUNCTIONS ==============
function performAdvancedSearch() {
    if (!advancedSearch) initAdvancedSearch();
    
    const ingredient = document.getElementById('advSearchIngredient')?.value || '';
    const difficulty = document.getElementById('advSearchDifficulty')?.value || '';
    const maxTime = document.getElementById('advSearchTime')?.value || '';
    const category = document.getElementById('advSearchCategory')?.value || 'all';

    const results = advancedSearch.combinedSearch({
        ingredient,
        difficulty: difficulty || null,
        maxTime: maxTime ? parseInt(maxTime) : null,
        category
    });

    displayRecipes(results);
    closeAdvancedSearch();
}

function showAdvancedSearch() {
    const modal = document.getElementById('advancedSearchModal');
    if (modal) {
        modal.style.display = 'block';
    }
}

function closeAdvancedSearch() {
    const modal = document.getElementById('advancedSearchModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

function showCollectionsModal(recipeId) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'collectionsModal';
    
    const collections = collectionsManager.getAllCollections();
    let html = `
        <div class="modal-content" style="width: 300px;">
            <span class="modal-close" onclick="this.parentElement.parentElement.remove();">&times;</span>
            <h3>Thêm vào danh sách</h3>
            <div style="display: flex; flex-direction: column; gap: 10px;">
    `;
    
    for (const [name, items] of Object.entries(collections)) {
        html += `
            <button class="collection-btn" onclick="addToCollection(${recipeId}, '${name}', event)">
                📚 ${name}
            </button>
        `;
    }
    
    html += `</div></div>`;
    modal.innerHTML = html;
    document.body.appendChild(modal);
    modal.style.display = 'block';
    
    modal.onclick = (e) => {
        if (e.target === modal) modal.remove();
    };
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initAdvancedSearch();
    favoritesManager.updateUI();
    ratingManager.init();
});
