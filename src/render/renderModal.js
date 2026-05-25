/**
 * Генерує HTML-розмітку для модального вікна вправи
 * @param {Object} exercise - Об'єкт з даними вправи
 * @param {boolean} isFavorite - Чи додана вправа в обране
 * @returns {string} HTML рядок
 */
export function createModalMarkup(exercise, isFavorite) {
  const {
    _id,
    bodyPart,
    equipment,
    gifUrl,
    name,
    target,
    description,
    rating,
    burnedCalories,
    time,
    popularity,
  } = exercise;

  // Використовуємо дефолтне зображення, якщо gifUrl порожній
  const image = gifUrl
    ? gifUrl
    : 'https://via.placeholder.com/360x300?text=No+Image';

  const favoritesBtnText = isFavorite
    ? 'Remove from favorites'
    : 'Add to favorites';
  const favoritesBtnIcon = isFavorite ? 'icon-trash' : 'icon-heart';
  const favoritesBtnClass = isFavorite ? 'remove-from-fav' : 'add-to-fav';

  return `
    <div class="modal-content" data-id="${_id}">
      <button class="modal-close-btn" type="button" data-modal-close>
        <svg class="modal-close-icon" width="24" height="24">
          <use href="./sprite.svg#icon-cross"></use>
        </svg>
      </button>

      <div class="modal-exercise-layout">
        <div class="modal-img-wrapper">
          <img src="${image}" alt="${name}" class="modal-exercise-img" />
        </div>

        <div class="modal-info-wrapper">
          <h2 class="modal-exercise-name">${name}</h2>

          <div class="modal-rating-container">
            <span class="modal-rating-value">${rating.toFixed(1)}</span>
            <div class="modal-stars-wrapper" data-rating="${rating}"></div>
          </div>

          <ul class="modal-stats-list">
            <li class="modal-stats-item">
              <span class="modal-stats-label">Target</span>
              <span class="modal-stats-value">${target}</span>
            </li>
            <li class="modal-stats-item">
              <span class="modal-stats-label">Body Part</span>
              <span class="modal-stats-value">${bodyPart}</span>
            </li>
            <li class="modal-stats-item">
              <span class="modal-stats-label">Equipment</span>
              <span class="modal-stats-value">${equipment}</span>
            </li>
            <li class="modal-stats-item">
              <span class="modal-stats-label">Popularity</span>
              <span class="modal-stats-value">${popularity}</span>
            </li>
            <li class="modal-stats-item">
              <span class="modal-stats-label">Burned Calories</span>
              <span class="modal-stats-value">${burnedCalories} / ${time} min</span>
            </li>
          </ul>

          <p class="modal-exercise-description">${description}</p>
        </div>
      </div>

      <div class="modal-buttons">
        <button class="modal-action-btn" type="button" data-favorites-toggle>
          <span>${favoritesBtnText}</span>
          <svg class="modal-action-icon" width="18" height="18">
            <use href="./sprite.svg#${favoritesBtnIcon}"></use>
          </svg>
        </button>
        <button class="modal-action-btn modal-give-rating-btn" type="button" data-rating-open data-exercise-id="${_id}">Give a rating</button>
      </div>
    </div>
  `;
}
