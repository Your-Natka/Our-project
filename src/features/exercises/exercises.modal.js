import { getExerciseById } from '../../api/exercises';
import { createModalMarkup } from '../../render/renderModal';
import { hideLoader, showLoader } from '../../helpers/loader';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const modalBackdrop = document.querySelector('.modal-backdrop'); // Переконайся, що цей клас є в modal.html
const modalContainer = document.querySelector('#modal-container'); // Місце, куди рендериться контент

export async function openExerciseModal(exerciseId) {
  showLoader();

  try {
    const exerciseData = await getExerciseById(exerciseId);
    const markup = createModalMarkup(exerciseData);

    modalContainer.innerHTML = markup;

    // Рендеримо зірочки рейтингу
    renderRatingStars(exerciseData.rating);

    modalBackdrop.classList.add('is-open');
    document.body.classList.add('no-scroll');

    // Додаємо слухачі
    const closeBtn = modalContainer.querySelector('[data-modal-close]');
    closeBtn.addEventListener('click', closeExerciseModal);
    modalBackdrop.addEventListener('click', onBackdropClick);
    window.addEventListener('keydown', onEscKeyPress);
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Не вдалося завантажити деталі вправи. Спробуйте пізніше',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
}

function closeExerciseModal() {
  modalBackdrop.classList.remove('is-open');
  document.body.classList.remove('no-scroll');
  modalContainer.innerHTML = '';

  // Знімаємо слухачі
  window.removeEventListener('keydown', onEscKeyPress);
  modalBackdrop.removeEventListener('click', onBackdropClick);
}

function onBackdropClick(event) {
  if (event.target === modalBackdrop) {
    closeExerciseModal();
  }
}

/**
 * Малює зірочки залежно від рейтингу
 * @param {number} rating
 */
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
