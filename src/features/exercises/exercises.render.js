export function renderExercises(exercises, container) {
  container.innerHTML = exercises
    .map(
      ex => `
        <li class="exercise-card" data-id="${ex._id}">
          <div class="card-header">
            <div class="badge-wrapper">
              <span class="workout-badge">Workout</span>
              <span class="card-rating">
                ${Number(ex.rating).toFixed(1)}
                <svg class="star-icon active" width="18" height="18">
                  <use href="./sprite.svg#icon-star"></use>
                </svg>
              </span>
            </div>
            <button class="start-btn" type="button">
              Start
              <svg class="arrow-icon" width="16" height="16">
                <use href="./sprite.svg#icon-arrow"></use>
              </svg>
            </button>
          </div>

          <div class="card-title-wrapper">
            <div class="runner-icon-wrapper">
              <svg class="runner-icon" width="14" height="16">
                <use href="./sprite.svg#icon-runner"></use>
              </svg>
            </div>
            <h3 class="exercise-name">${ex.name}</h3>
          </div>

          <ul class="card-info-list">
            <li class="card-info-item item-calories">
              <span class="info-label">Burned calories:</span> ${ex.burnedCalories || 0} / ${ex.time || 3} min
            </li>
            <li class="card-info-item item-body-part">
              <span class="info-label">Body part:</span> <span class="capitalize-text">${ex.bodyPart}</span>
            </li>
            <li class="card-info-item item-target">
              <span class="info-label">Target:</span> <span class="capitalize-text">${ex.target}</span>
            </li>
          </ul>
        </li>
      `
    )
    .join('');
}
