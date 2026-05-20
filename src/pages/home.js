import { getQuote } from '../api/quote';

async function loadQuote() {
  try {
    const data = await getQuote();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

loadQuote();
