import sprite from '../../assets/sprite.svg';

interface Exercise {
  _id: string;
  name: string;
  bodyPart: string;
  target: string;
  rating: number;
  burnedCalories: number;
}

export function renderExercises(exercises: Exercise[], container: HTMLElement): void {
  container.innerHTML = exercises.map(ex => {
    const name = ex.name[0].toUpperCase() + ex.name.slice(1);
    const bodyPart = ex.bodyPart[0].toUpperCase() + ex.bodyPart.slice(1);
    const target = ex.target[0].toUpperCase() + ex.target.slice(1);
    const formattedRating = Number(ex.rating).toFixed(1);

    return `
      <li class="exercise-card">
        <div class="exercise-card-header">
          <span class="exercise-badge">Workout</span>
          <span class="exercise-rating">${formattedRating}</span>
          <svg class="icon-star" width="18" height="18">
            <use href="${sprite}#icon-star"></use>
          </svg>
          <button class="exercise-start-btn" data-id="${ex._id}">
            Start
            <svg class="icon-arrow" width="16" height="16">
              <use href="${sprite}#icon-arrow-right"></use>
            </svg>
          </button>
        </div>

        <h3 class="exercise-title">
          <svg class="icon-run-man-small" width="24" height="24">
            <use href="${sprite}#icon-run-man-small"></use>
          </svg>
          <span class="exercise-name-text">${name}</span>
        </h3>

        <div class="exercise-stats">
          <div><span class="stat-label">Burned calories:</span> ${ex.burnedCalories} / 3 min</div>
          <div><span class="stat-label">Body part:</span> ${bodyPart}</div>
          <div><span class="stat-label">Target:</span> ${target}</div>
        </div>
      </li>
    `;
  }).join('');
}

export function toggleError(show: boolean): void {
  const errorElement = document.getElementById('exercises-error');
  const listElement = document.getElementById('exercises-list');

  if (show) {
    if (listElement) listElement.innerHTML = '';
    if (errorElement) errorElement.classList.remove('is-hidden');
  } else {
    if (errorElement) errorElement.classList.add('is-hidden');
  }
}