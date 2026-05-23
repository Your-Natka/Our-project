export function renderExercises(exercises, container) {
  container.innerHTML = exercises
    .map(
      ex => `
        <div class="exercise-card">
          <div class="card-header">
            <div class="badge-wrapper">
              <span class="workout-badge">Workout</span>
              <span class="card-rating">
                ${Number(ex.rating).toFixed(1)}
                <svg class="star-icon" width="18" height="18">
                  <use href="./public/sprite.svg#icon-star"></use>
                </svg>
              </span>
            </div>
            <button class="start-btn" type="button">
              Start
              <svg class="arrow-icon" width="16" height="16">
                <use href="./public/sprite.svg#icon-arrow-right"></use>
              </svg>
            </button>
          </div>

          <div class="card-title-wrapper">
            <div class="runner-icon-wrapper">
              <svg class="runner-icon" width="14" height="16">
                <use href="./public/sprite.svg#icon-runner"></use>
              </svg>
            </div>
            <h3 class="exercise-name">${ex.name}</h3>
          </div>

          <ul class="card-info-list">
            <li class="card-info-item">
              <span class="info-label">Burned calories:</span> ${ex.burnedCalories || 0} / ${ex.time || 3} min
            </li>
            <li class="card-info-item">
              <span class="info-label">Body part:</span> ${ex.bodyPart}
            </li>
            <li class="card-info-item">
              <span class="info-label">Target:</span> ${ex.target}
            </li>
          </ul>
        </div>
      `
    )
    .join('');
}