import { fetchData } from './api';

export async function getExercises(params = '') {
  return fetchData(`/exercises?${params}`);
}
export function getExerciseById(id) {
  return fetchData(`/exercises/${id}`);
}

export function rateExercise(id, data) {
  return fetchData(`/exercises/${id}/rating`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}
