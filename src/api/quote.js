import { fetchData } from './api';

export const getQuote = async () => {
  return fetchData('/quote');
}