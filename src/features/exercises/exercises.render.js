export function renderExercises(exercises, container) {
  container.innerHTML = exercises
    .map(
      ex => `
        <div class="exercise-card">
          <h3>${ex.name}</h3>
          <p>${ex.bodyPart}</p>
          <p>${ex.target}</p>
        </div>
      `
    )
    .join('');
}
