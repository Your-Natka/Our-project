import { fetchData } from '../../api/api';

export function getExercises(filterType: string, categoryName: string, page: number, limit: number): Promise<any> {
  return fetchData(`/exercises?${filterType}=${categoryName}&page=${page}&limit=${limit}`);
}

export function getExerciseById(id: string): Promise<any> {
  return fetchData(`/exercises/${id}`);
}