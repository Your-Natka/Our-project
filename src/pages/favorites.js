import { load } from '../storage/load.js';
import { save } from '../storage/save.js';
import { renderExercises } from '../render/renderExercises.js';

// The exact string key used to save exercises in your project
const FAVORITES_KEY = 'favorite-exercises';

const refs = {
  favoritesList: document.querySelector('.favorites-list'),
};

// 1. Setup the page when it loads
function initFavorites() {
  if (!refs.favoritesList) return; // Guard clause if we aren't on the favorites page

  // Draw the exercises (or empty state) immediately
  renderFavoritesList();

  // Attach ONE listener to the whole list (Event Delegation) for the trash buttons
  refs.favoritesList.addEventListener('click', handleRemoveFavorite);
}

// 2. Decide what to draw on the screen
function renderFavoritesList() {
  // Load data safely (defaults to empty array if nothing is there)
  const favorites = load(FAVORITES_KEY) || [];

  // Condition 1: No saved exercises
  if (favorites.length === 0) {
    refs.favoritesList.innerHTML = `
      <div class="favorites-empty-state">
        <p class="favorites-empty-text">
          It appears that you haven't added any exercises to your favorites yet. 
          To get started, you can add exercises that you like to your favorites for easier access in the future.
        </p>
      </div>
    `;
    return;
  }

  // Condition 2: Exercises exist, draw the cards!
  refs.favoritesList.innerHTML = renderExercises(favorites);
}

// 3. Handle deleting an item
function handleRemoveFavorite(event) {
  // Check if the click happened inside a trash button
  const trashBtn = event.target.closest('.trash-btn');
  if (!trashBtn) return;

  // Find the closest exercise card and get its unique ID
  const card = trashBtn.closest('.exercise-card');
  const idToRemove = card.dataset.id;

  // Get current favorites, filter out the deleted one, and save the new list
  let favorites = load(FAVORITES_KEY) || [];
  favorites = favorites.filter(exercise => exercise._id !== idToRemove);

  save(FAVORITES_KEY, favorites);

  // Instantly re-draw the screen (fulfills the "no page reload" requirement)
  renderFavoritesList();
}

// Run the initialization
initFavorites();
