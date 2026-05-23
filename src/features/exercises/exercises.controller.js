import { getExercises } from './exercises.api';
import { renderExercises } from './exercises.render';
import { clearExerciseSearch, initExerciseSearch } from './exercises.search';
import { openExerciseModal } from './exercises.modal';

const refs = {
  exercisesContainer: document.querySelector('#exercises-list'),
  errorBlock: document.querySelector('#exercises-error'),
  errorText: document.querySelector('#exercises-error .error-text'),
  pagination: document.querySelector('#exercises-pagination'),
};

const DEFAULT_FILTER_TYPE = 'Muscles';
const DEFAULT_PAGE = 1;
const EXERCISES_LIMIT = 10;
const SEARCH_ERROR_MESSAGE =
  'Нічого не знайдено за вашим запитом. Спробуйте інше слово';

const filterParamMap = {
  Muscles: 'muscles',
  'Body parts': 'bodypart',
  Equipment: 'equipment',
};

let currentFilterType = DEFAULT_FILTER_TYPE;
let currentCategoryName = '';
let currentKeyword = '';
let currentPage = DEFAULT_PAGE;

export function initExercises() {
  initExerciseSearch(handleSearchSubmit);

  if (refs.exercisesContainer) {
    refs.exercisesContainer.addEventListener('click', handleStartButtonClick);
  }
}

async function handleStartButtonClick(event) {
  const startBtn = event.target.closest('.start-btn');
  if (!startBtn) return;

  const card = startBtn.closest('.exercise-card');
  if (!card) return;

  const exerciseId = card.dataset.id;
  if (!exerciseId) return;

  openExerciseModal(exerciseId);
}

export async function loadExercisesByFilter(
  categoryName,
  filterType = DEFAULT_FILTER_TYPE
) {
  currentFilterType = filterType;
  currentCategoryName = categoryName;
  currentKeyword = '';
  currentPage = DEFAULT_PAGE;
  clearExerciseSearch();

  await loadExercises();
}

export function resetExerciseSearch() {
  currentCategoryName = '';
  currentKeyword = '';
  currentPage = DEFAULT_PAGE;
  removeExercisesView();
  clearExerciseSearch();
}

async function handleSearchSubmit(keyword) {
  if (!currentCategoryName) return;

  currentKeyword = keyword;
  currentPage = DEFAULT_PAGE;

  await loadExercises();
}

async function loadExercises() {
  if (!refs.exercisesContainer || !refs.errorBlock) return;

  try {
    hideSearchError();
    clearExercisePagination();

    const data = await getExercises(buildExercisesQuery());
    const exercises = data.results || [];

    if (exercises.length === 0) {
      showSearchError();
      return;
    }

    setExercisesView();
    renderExercises(exercises, refs.exercisesContainer);
  } catch (error) {
    showSearchError();
  }
}

function buildExercisesQuery() {
  const params = new URLSearchParams();
  const filterParam =
    filterParamMap[currentFilterType] || filterParamMap[DEFAULT_FILTER_TYPE];

  params.set(filterParam, currentCategoryName.toLowerCase());

  if (currentKeyword) {
    params.set('keyword', currentKeyword);
  }

  params.set('page', currentPage);
  params.set('limit', EXERCISES_LIMIT);

  return params.toString();
}

function showSearchError() {
  setExercisesView();
  refs.exercisesContainer.innerHTML = '';

  if (refs.errorText) {
    refs.errorText.textContent = SEARCH_ERROR_MESSAGE;
  }

  refs.errorBlock.classList.remove('is-hidden');
  clearExercisePagination();
}

function hideSearchError() {
  refs.errorBlock.classList.add('is-hidden');
}

function clearExercisePagination() {
  if (refs.pagination) {
    refs.pagination.innerHTML = '';
  }
}

function setExercisesView() {
  refs.exercisesContainer.classList.add('is-exercises-view');
}

function removeExercisesView() {
  if (refs.exercisesContainer) {
    refs.exercisesContainer.classList.remove('is-exercises-view');
  }
}
