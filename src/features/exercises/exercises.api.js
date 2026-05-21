import { fetchData } from '../../api/api.js';

export function getExercises(filterType, categoryName, page, limit) {
  return fetchData(`/exercises?${filterType}=${categoryName}&page=${page}&limit=${limit}`);
}

export function getExerciseById(id) {
  return fetchData(`/exercises/${id}`);
}