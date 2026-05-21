export function renderExercises(exercises, container) {
  container.innerHTML = exercises.map(ex => `
    <li class="exercise-card">
      <div>
        <span class="exercise-badge">Workout</span>
        <span class="exercise-rating">${Math.round(ex.rating)}.0</span>
      </div>
      <button class="exercise-start-btn" data-id="${ex._id}">
        Start
        <svg width="16" height="16">
          <use href="./img/sprite.svg#icon-arrow-right"></use>
        </svg>
      </button>
      <h3 class="exercise-title">${ex.name}</h3>
      <div class="exercise-stats">
        <div><span class="stat-label">Burned calories:</span> ${ex.burnedCalories} / 3 min</div>
        <div><span class="stat-label">Body part:</span> ${ex.bodyPart}</div>
        <div><span class="stat-label">Target:</span> ${ex.target}</div>
      </div>
    </li>
  `).join('');
}

export function toggleError(show) {
  const errorElement = document.getElementById('exercises-error');
  const listElement = document.getElementById('exercises-list');

  if (show) {
    listElement.innerHTML = '';
    errorElement.classList.remove('is-hidden');
  } else {
    errorElement.classList.add('is-hidden');
  }
}