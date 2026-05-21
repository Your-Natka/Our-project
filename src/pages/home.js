import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { initFilters } from '../features/filters/filters.controller';
import { initExercises } from '../features/exercises/exercises.controller';

import { initQuote } from '../js/quote';

async function initHome() {
  try {

    initQuote();

    initFilters();
    initExercises();
  } catch (error) {
    console.error(error);
  }
}

initHome();
