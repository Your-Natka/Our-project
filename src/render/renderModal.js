/**
 * Генерує HTML-розмітку для модального вікна вправи
 * @param {Object} exercise - Об'єкт з даними вправи
 * @returns {string} HTML рядок
 */
export function createModalMarkup(exercise) {
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
    </div>
  `;
}

// <div class="modal-buttons">
//    <div id="favorites-btn-container">
//      <!-- Кнопка Favorites буде додана в наступній тасці -->
//    </div>
//    <button class="modal-give-rating-btn" type="button">Give a rating</button>
// </div>
