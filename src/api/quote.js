import { fetchData } from './api';

// export async function getQuote() {
//   return fetchData('/quote');
// }


export const getQuote = async () => {
  return fetchData('/quote');
}