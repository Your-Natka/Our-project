import { getExercises } from './exercises.api';
import { renderExercises } from './exercises.render';
import { openExerciseModal } from './exercises.modal';
import { clearExerciseSearch, initExerciseSearch } from './exercises.search';
import { renderPagination } from '../../render/renderPagination';
import { exerciseCategoryMapper } from '../../domain/exercises/exercises.mapper';
import { hideLoader, showLoader } from '../../helpers/loader';

const refs = {
  exercisesContainer: document.querySelector('#exercises-list'),
  errorBlock: document.querySelector('#exercises-error'),
  errorText: document.querySelector('#exercises-error .error-text'),
  pagination: document.querySelector('#exercises-pagination'),
};

const DEFAULT_FILTER_TYPE = 'Muscles';
const DEFAULT_PAGE = 1;

const SEARCH_ERROR_MESSAGE =
  'Nothing was found for your request. Please try another word';

const filterParamMap = {
  Muscles: 'target',
  'Body parts': 'bodypart',
  Equipment: 'equipment',
};

// ===== STATE =====
let currentFilterType = DEFAULT_FILTER_TYPE;
let currentCategoryName = '';
let currentKeyword = '';
let currentPage = DEFAULT_PAGE;

// ===== INIT =====
export function initExercises() {
  initExerciseSearch(handleSearchSubmit);

  refs.exercisesContainer?.addEventListener('click', handleStartButtonClick);
}

// ===== EVENTS =====
async function handleStartButtonClick(event) {
  const startBtn = event.target.closest('.start-btn');
  if (!startBtn) return;

  const card = startBtn.closest('.exercise-card');
  const exerciseId = card?.dataset?.id;

  if (!exerciseId) return;

  openExerciseModal(exerciseId);
}

// ===== PUBLIC API =====
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

// ===== SEARCH =====
async function handleSearchSubmit(keyword) {
  if (!currentCategoryName) return;

  currentKeyword = keyword;
  currentPage = DEFAULT_PAGE;

  await loadExercises();
}

// ===== MAIN LOADER =====
async function loadExercises() {
  if (!refs.exercisesContainer || !refs.errorBlock) return;

  try {
    hideSearchError();
    clearPagination();
    showLoader(refs.exercisesContainer);

    console.log('EXERCISES DEBUG:', {
      filterType: currentFilterType,
      filterParam: filterParamMap[currentFilterType],
      category: currentCategoryName,
      query: buildExercisesQuery(),
    });

    const data = await getExercises(buildExercisesQuery());
    const exercises = data.results || [];

    if (!exercises.length) {
      showSearchError();
      return;
    }

    setExercisesView();
    renderExercises(exercises, refs.exercisesContainer);

    renderPagination(
      data.page,
      data.totalPages,
      refs.pagination,
      handlePageChange
    );
  } catch (error) {
    console.error(error);
    showSearchError();
  } finally {
    hideLoader(refs.exercisesContainer);
  }
}

// ===== QUERY BUILDER =====
function buildExercisesQuery() {
  const params = new URLSearchParams();

  const filterParam =
    filterParamMap[currentFilterType] || filterParamMap[DEFAULT_FILTER_TYPE];

  const mappedValue =
    exerciseCategoryMapper?.[currentFilterType]?.[currentCategoryName] ||
    currentCategoryName.toLowerCase();

  params.set(filterParam, mappedValue);

  if (currentKeyword) {
    params.set('keyword', currentKeyword);
  }

  params.set('page', currentPage);
  const limit = window.innerWidth < 768 ? 8 : 10;
  params.set('limit', limit);

  return params.toString();
}

// ===== PAGINATION =====
function handlePageChange(page) {
  currentPage = page;
  loadExercises();
}

function clearPagination() {
  if (refs.pagination) {
    refs.pagination.innerHTML = '';
  }
}

// ===== UI STATES =====
function setExercisesView() {
  refs.exercisesContainer.classList.add('is-exercises-view');
}

function removeExercisesView() {
  refs.exercisesContainer?.classList.remove('is-exercises-view');
}

// ===== ERROR HANDLING =====
function showSearchError() {
  setExercisesView();

  refs.exercisesContainer.innerHTML = '';

  if (refs.errorText) {
    refs.errorText.textContent = SEARCH_ERROR_MESSAGE;
  }

  refs.errorBlock.classList.remove('is-hidden');
  clearPagination();
}

function hideSearchError() {
  refs.errorBlock.classList.add('is-hidden');
}
