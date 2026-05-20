import { getExercises } from '../api/exercises';

export async function loadExercises(filters) {
  const params = new URLSearchParams(filters).toString();
  return getExercises(params);
}
