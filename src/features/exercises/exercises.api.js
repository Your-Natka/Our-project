import { fetchData } from '../../api/api';

export function getExercises(params = '') {
  return fetchData(`/exercises?${params}`);
}

export function getExerciseById(id) {
  return fetchData(`/exercises/${id}`);
}
