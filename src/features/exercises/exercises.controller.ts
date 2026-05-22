import { getExercises } from './exercises.api';
import { renderExercises, toggleError } from './exercises.render';

const exercisesContainer = document.getElementById('exercises-list');
const sectionElement = document.getElementById('exercises-section');

let currentFilterType: string = 'bodypart';
let currentCategoryName: string = '';
let currentPage: number = 1;
let currentLimit: number = window.innerWidth >= 768 ? 10 : 8;

export function initExercises(): void {
}

export async function loadExercisesByFilter(arg1: string, arg2?: string): Promise<void> {
  if (arg2) {
    currentFilterType = arg1.toLowerCase();
    currentCategoryName = arg2.toLowerCase();
  } else {
    const activeBtn = document.querySelector('.filter-btn.active') as HTMLButtonElement | null;

    if (activeBtn && activeBtn.dataset.filter) {
      const rawFilter = activeBtn.dataset.filter.toLowerCase();
      currentFilterType = rawFilter === 'body parts' ? 'bodypart' : rawFilter;
    } else {
      currentFilterType = 'bodypart';
    }

    currentCategoryName = arg1.toLowerCase();
  }

  currentPage = 1;

  if (sectionElement) {
    sectionElement.classList.remove('is-hidden');
  }
  await fetchAndRender();
}

export async function changeExercisesPage(page: number): Promise<void> {
  currentPage = page;
  await fetchAndRender();
}

async function fetchAndRender(): Promise<void> {
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
  const newLimit = window.innerWidth >= 768 ? 10 : 8;
  if (currentLimit !== newLimit) {
    currentLimit = newLimit;
    if (currentCategoryName) {
      fetchAndRender();
    }
  }
});

if (exercisesContainer) {
  exercisesContainer.addEventListener('click', (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const btn = target.closest('.exercise-start-btn') as HTMLButtonElement | null;
    if (btn && btn.dataset.id) {
      btn.blur();
    }
  });
}



loadExercisesByFilter('bodypart', 'back');