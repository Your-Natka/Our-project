import { fetchData } from './api';

export async function getQuote() {
  return fetchData('/quote');
}
