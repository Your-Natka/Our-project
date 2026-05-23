const searchForm = document.querySelector('#section-search-box');
const searchInput = searchForm?.querySelector('.search-input');

export function initExerciseSearch(onSearch) {
  if (!searchForm || !searchInput || typeof onSearch !== 'function') return;

  searchForm.addEventListener('submit', event => {
    event.preventDefault();
    onSearch(searchInput.value.trim());
  });
}

export function clearExerciseSearch() {
  if (searchForm) {
    searchForm.reset();
    return;
  }

  if (searchInput) {
    searchInput.value = '';
  }
}
