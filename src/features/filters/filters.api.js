import { fetchData } from '../../api/api';

export function getFilters(filter, page = 1, limit = 12) {
  return fetchData(`/filters?filter=${filter}&page=${page}&limit=${limit}`);
}
