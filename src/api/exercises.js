import { fetchData } from './api';

export async function getExercises(params = '') {
  return fetchData(`/exercises?${params}`);
}
