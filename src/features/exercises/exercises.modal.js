import { getExerciseById } from '../../api/exercises';
import { createModalMarkup } from '../../render/renderModal';
import { hideLoader, showLoader } from '../../helpers/loader';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { openRatingModal } from '../../modal/rating-modal';

const modalBackdrop = document.querySelector('.modal-backdrop');
const modalContainer = document.querySelector('#modal-container');
const FAVORITES_KEY = 'favorite-exercises';

let currentExerciseData = null; // Тимчасове сховище для делегування

export async function openExerciseModal(exerciseId) {
  showLoader();

  try {
    const exerciseData = await getExerciseById(exerciseId);
    currentExerciseData = exerciseData;

    const favorites = getFavoritesFromStorage();
    const isFavorite = favorites.some(item => item._id === exerciseId);

    const markup = createModalMarkup(exerciseData, isFavorite);

    modalContainer.innerHTML = markup;

    // Додаємо слухач для кнопки "Give a rating"
    const ratingBtn =
      modalContainer.querySelector(
        '[data-rating-open]'
    );

    ratingBtn.addEventListener(
      'click',
      () => {
        closeExerciseModal();

        openRatingModal(exerciseId);
      }
    );

    renderRatingStars(exerciseData.rating);

    modalBackdrop.classList.add('is-open');
    document.body.classList.add('no-scroll');

    // Додаємо слухачі (використовуємо делегування для кнопок всередині)
    modalContainer.addEventListener('click', handleModalClick);
    modalBackdrop.addEventListener('click', onBackdropClick);
    window.addEventListener('keydown', onEscKeyPress);
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Failed to load exercise details. Please try again later',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
}

export function closeExerciseModal() {
  modalBackdrop.classList.remove('is-open');
  document.body.classList.remove('no-scroll');

  // Знімаємо слухачі
  modalContainer.removeEventListener('click', handleModalClick);
  window.removeEventListener('keydown', onEscKeyPress);
  modalBackdrop.removeEventListener('click', onBackdropClick);

  // Очищення контенту та посилань на дані
  modalContainer.innerHTML = '';
  currentExerciseData = null;
}

function handleModalClick(event) {
  const target = event.target;

  if (target.closest('[data-modal-close]')) {
    closeExerciseModal();
  }

  const favBtn = target.closest('[data-favorites-toggle]');
  if (favBtn && currentExerciseData) {
    handleFavoritesToggle(currentExerciseData, favBtn);
  }
}

function onBackdropClick(event) {
  if (event.target === modalBackdrop) {
    closeExerciseModal();
  }
}

function handleFavoritesToggle(exercise, btn) {
  try {
    let favorites = getFavoritesFromStorage();
    const isFavorite = favorites.some(item => item._id === exercise._id);

    if (isFavorite) {
      favorites = favorites.filter(item => item._id !== exercise._id);
      updateButtonUI(btn, false);
      iziToast.success({
        title: 'Success',
        message: 'Exercise removed from favorites!',
        position: 'topRight',
      });
    } else {
      favorites.push(exercise);
      updateButtonUI(btn, true);
      iziToast.success({
        title: 'Success',
        message: 'Exercise added to favorites!',
        position: 'topRight',
      });
    }

    saveFavoritesToStorage(favorites);
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Failed to save the exercise. Please try again later',
      position: 'topRight',
    });
  }
}

function updateButtonUI(btn, isFavorite) {
  const textSpan = btn.querySelector('span');
  const useElement = btn.querySelector('use');

  if (isFavorite) {
    textSpan.textContent = 'Remove from favorites';
    useElement.setAttribute('href', './sprite.svg#icon-trash');
  } else {
    textSpan.textContent = 'Add to favorites';
    useElement.setAttribute('href', './sprite.svg#icon-heart');
  }
}

function getFavoritesFromStorage() {
  try {
    const saved = localStorage.getItem(FAVORITES_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error('LocalStorage read error:', error);
    return [];
  }
}

function saveFavoritesToStorage(favorites) {
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  } catch (error) {
    console.error('LocalStorage write error:', error);
    throw new Error('Storage full or unavailable');
  }
}

function renderRatingStars(rating) {
  const container = document.querySelector('.modal-stars-wrapper');
  if (!container) return;

  const roundedRating = Math.round(rating);
  let starsMarkup = '';

  for (let i = 1; i <= 5; i++) {
    const starClass =
      i <= roundedRating ? 'modal-star-filled' : 'modal-star-empty';
    starsMarkup += `
      <svg class="modal-star-icon ${starClass}" width="18" height="18">
        <use href="./sprite.svg#icon-star"></use>
      </svg>`;
  }
  container.innerHTML = starsMarkup;
}

function onEscKeyPress(event) {
  if (event.code === 'Escape') {
    closeExerciseModal();
  }
}
