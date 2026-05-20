import { initFilters } from '../features/filters/filters.controller';
import { initExercises } from '../features/exercises/exercises.controller';
import { getQuote } from '../api/quote';

async function initHome() {
  try {
    const quote = await getQuote();
    console.log('QUOTE:', quote);

    initFilters();
    initExercises();
  } catch (error) {
    console.error(error);
  }
}

initHome();
