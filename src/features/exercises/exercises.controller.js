import { getExercises } from './exercises.api.js';
import { renderExercises, toggleError } from './exercises.render.js';

const exercisesContainer = document.getElementById('exercises-list');
const sectionElement = document.getElementById('exercises-section');

let currentFilterType = 'bodypart';
let currentCategoryName = '';
let currentPage = 1;
let currentLimit = window.innerWidth >= 1440 ? 9 : 8;

export function initExercises() {
}

export async function loadExercisesByFilter(arg1, arg2) {
  if (arg2) {
    currentFilterType = arg1.toLowerCase();
    currentCategoryName = arg2.toLowerCase();
  } else {
    currentFilterType = 'bodypart';
    currentCategoryName = arg1.toLowerCase();
  }

  currentPage = 1;

  if (sectionElement) {
    sectionElement.classList.remove('is-hidden');
  }
  await fetchAndRender();
}

export async function changeExercisesPage(page) {
  currentPage = page;
  await fetchAndRender();
}

async function fetchAndRender() {
  try {
    toggleError(false);
    const data = await getExercises(currentFilterType, currentCategoryName, currentPage, currentLimit);

    if (!data.results || data.results.length === 0) {
      toggleError(true);
      return;
    }

    if (exercisesContainer) {
      renderExercises(data.results, exercisesContainer);
    }
  } catch (error) {
    toggleError(true);
  }
}

window.addEventListener('resize', () => {
  const newLimit = window.innerWidth >= 1440 ? 9 : 8;
  if (currentLimit !== newLimit) {
    currentLimit = newLimit;
    if (currentCategoryName) {
      fetchAndRender();
    }
  }
});

if (exercisesContainer) {
  exercisesContainer.addEventListener('click', (e) => {
    const btn = e.target.closest('.exercise-start-btn');
    if (btn) {
      const exerciseId = btn.dataset.id;
      if (exerciseId) {
        console.log(exerciseId);
      }
    }
  });
}

loadExercisesByFilter('bodypart', 'waist');