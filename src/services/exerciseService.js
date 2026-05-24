import { getExercises } from '../api/exercises';

export async function (filters) {
  const params = new URLSearchParams(filters).toString();
  return getExercises(params);
}
