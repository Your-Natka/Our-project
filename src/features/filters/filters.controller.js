import { getFilters } from './filters.api';
import { renderFilters } from './filters.render';
import { loadExercisesByFilter } from '../exercises/exercises.controller';

const filtersContainer = document.querySelector('#filters');

let activeFilter = 'Muscles';

export function initFilters() {
  loadFilters(activeFilter);
}

async function loadFilters(type) {
  try {
    const data = await getFilters(type);

    renderFilters(data.results, filtersContainer, handleClick);
  } catch (error) {
    console.error(error);
  }
}

function handleClick(name) {
  activeFilter = name;

  loadFilters(activeFilter);
  loadExercisesByFilter(activeFilter);
}
