import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getQuote } from '../api/quote';
import { renderQuote } from '../render/renderQuote';

const STORAGE_KEY = 'quote';

export async function initQuote() {

  const savedQuote = localStorage.getItem(STORAGE_KEY);

  const today = new Date().toISOString().split('T')[0];

  // перевірка localStorage, якщо є кеш
  if (savedQuote) {
    const parsedData = JSON.parse(savedQuote);

    // якщо сьогоднішня дата, то запит не робимо
    if (parsedData.date === today) {
      renderQuote(parsedData.data);
      return;
    }
  }

  // якщо нема дати або новий день
  try {
    const quote = await getQuote();

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        date: today,
        data: quote,
      })
    );

    renderQuote(quote);
  } catch (error) {
    console.error(error);

    iziToast.error({
      title: 'Error',
      message: 'Failed to load quote',
      position: 'topRight',
    });

    renderQuote({
      author: 'Unknown',
      quote: 'Stay active and take care of your health',
    });

  }
}