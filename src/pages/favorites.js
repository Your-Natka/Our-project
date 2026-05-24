import { load } from '../storage/load.js';
import { save } from '../storage/save.js';
import { renderExercises } from '../render/renderExercises.js';
import { openExerciseModal } from '../features/exercises/exercises.modal.js';
import { hideLoader, showLoader } from '../helpers/loader.js';
import { initQuote } from '../js/quote.js';
import { renderPagination } from '../render/renderPagination.js'; 
import '../features/navigation/scroll.up.js';
import '../js/header.js';

const FAVORITES_KEY = 'favorite-exercises';

const refs = {
  favoritesList: document.querySelector('.favorites-list'),
  paginationContainer: document.querySelector('.favorites-pagination'), 

async function initFavorites() {
  if (!refs.favoritesList) return;

  showLoader();

  try {
    // Quote
    await initQuote();

    renderFavoritesList();
  } catch (error) {
    console.error(error);
  } finally {
    hideLoader();
  }

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

function renderFavoritesList(page = 1) {
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

    if (refs.paginationContainer) {
      refs.paginationContainer.innerHTML = '';
    }
    return;
  }

  // Ліміти карток залежно від екрана
  let limit = 100; // Desktop (скролбар)
  if (window.innerWidth < 768) {
    limit = 8; // Mobile
  } else if (window.innerWidth < 1440) {
    limit = 10; // Tablet
  }

  const totalPages = Math.ceil(favorites.length / limit);

  if (page > totalPages) {
    renderFavoritesList(totalPages);
    return;
  }

  const startIndex = (page - 1) * limit;
  const paginatedExercises = favorites.slice(startIndex, startIndex + limit);

  refs.favoritesList.innerHTML = renderExercises(paginatedExercises);

  if (refs.paginationContainer) {
    if (totalPages > 1 && window.innerWidth < 1440) {
      renderPagination(page, totalPages, refs.paginationContainer, newPage => {
        renderFavoritesList(newPage);
        const listPosition =
          refs.favoritesList.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: listPosition - 100, behavior: 'smooth' });
      });
    } else {
      refs.paginationContainer.innerHTML = '';
    }
  }
}

function handleRemoveFavorite(event) {
  const trashBtn = event.target.closest('.trash-btn');
  if (!trashBtn) return;

  const card = trashBtn.closest('.exercise-card');
  const idToRemove = card.dataset.id;

  let favorites = load(FAVORITES_KEY) || [];
  favorites = favorites.filter(exercise => exercise._id !== idToRemove);

  save(FAVORITES_KEY, favorites);

  const activePageBtn = document.querySelector('.pagination-btn.active');
  const currentPage = activePageBtn ? Number(activePageBtn.dataset.page) : 1;

  renderFavoritesList(currentPage);
}

initFavorites();
