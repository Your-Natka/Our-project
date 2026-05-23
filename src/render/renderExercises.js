export const renderExercises = exercises => {
  return exercises
    .map(
      exercise => `
    <li class="exercise-card" data-id="${exercise._id}">
      <div class="card-header">
        <div class="badge-wrapper">
          <span class="workout-badge">Workout</span>
          <button type="button" class="trash-btn" aria-label="Remove from favorites">
            <svg class="trash-icon" width="16" height="16">
              <use href="./assets/sprite.svg#icon-trash"></use>
            </svg>
          </button>
        </div>
        <button type="button" class="start-btn">
          Start
          <svg class="arrow-icon" width="16" height="16">
            <use href="./assets/sprite.svg#icon-arrow"></use>
          </svg>
        </button>
      </div>

      <div class="card-title-wrapper">
        <div class="runner-icon-wrapper">
          <svg class="runner-icon" width="24" height="24">
            <use href="./assets/sprite.svg#icon-runner"></use>
          </svg>
        </div>
        <h3 class="exercise-name">${exercise.name}</h3>
      </div>

      <ul class="card-info-list">
        <li class="card-info-item"><span class="info-label">Burned calories:</span> ${exercise.burnedCalories} / ${exercise.time} min</li>
        <li class="card-info-item"><span class="info-label">Body part:</span> ${exercise.bodyPart}</li>
        <li class="card-info-item"><span class="info-label">Target:</span> ${exercise.target}</li>
      </ul>
    </li>
  `
    )
    .join('');
};
