import { getExercises } from './exercises.api';
import { renderExercises } from './exercises.render';

const exercisesContainer = document.querySelector('#exercises-list');

let currentFilter = 'muscles';

export function initExercises() {
  // loadExercisesByFilter(currentFilter); // Відключено автозапуск, оскільки першим завантажується фільтр категорій Muscles
}

export async function loadExercisesByFilter(filter) {
  currentFilter = filter;

  try {
    const data = await getExercises(
      `bodypart=${filter.toLowerCase()}&page=1&limit=10`
    );

    renderExercises(data.results, exercisesContainer);
  } catch (error) {
    console.error(error);
  }
}
