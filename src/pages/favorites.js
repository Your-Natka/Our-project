import { load } from '../storage/load.js';
import { save } from '../storage/save.js';
import { renderExercises } from '../render/renderExercises.js';
import { openExerciseModal } from '../features/exercises/exercises.modal.js';

import { initQuote } from '../js/quote.js';

import '../features/navigation/scroll.up';
import '../js/header.js';

const FAVORITES_KEY = 'favorite-exercises';

const refs = {
  favoritesList: document.querySelector('.favorites-list'),
};

function initFavorites() {
  if (!refs.favoritesList) return;

  // Quote
  initQuote();

  renderFavoritesList();

  refs.favoritesList.addEventListener('click', handleRemoveFavorite);
  refs.favoritesList.addEventListener('click', handleStartButtonClick);
}

function handleStartButtonClick(event) {
  const startBtn = event.target.closest('.start-btn');
  if (!startBtn) return;

  const card = startBtn.closest('.exercise-card');
  if (!card) return;

  const exerciseId = card.dataset.id;
  if (!exerciseId) return;

  openExerciseModal(exerciseId);
}

function renderFavoritesList() {
  const favorites = load(FAVORITES_KEY) || [];

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

  refs.favoritesList.innerHTML = renderExercises(favorites);
}

function handleRemoveFavorite(event) {
  const trashBtn = event.target.closest('.trash-btn');
  if (!trashBtn) return;

  const card = trashBtn.closest('.exercise-card');
  const idToRemove = card.dataset.id;

  let favorites = load(FAVORITES_KEY) || [];
  favorites = favorites.filter(exercise => exercise._id !== idToRemove);

  save(FAVORITES_KEY, favorites);

  renderFavoritesList();
}

initFavorites();
