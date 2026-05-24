import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { initFilters } from '../features/filters/filters.controller';
import { initExercises } from '../features/exercises/exercises.controller';

import { initQuote } from '../js/quote';
import { hideLoader, showLoader } from '../helpers/loader';

async function initHome() {
  showLoader();

  try {
    initExercises();
    await Promise.all([initQuote(), initFilters()]);
  } catch (error) {
    console.error(error);
  } finally {
    hideLoader();
  }
}

initHome();
