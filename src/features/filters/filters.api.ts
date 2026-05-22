import { fetchData } from '../../api/api';

export interface Category {
  name: string;
  filter: string;
  imgURL: string;
}

export interface FiltersResponse {
  page: string;
  perPage: string;
  totalPages: number;
  results: Category[];
}

export async function getFilters(
  filter: string,
  page: number = 1,
  limit: number = 12
): Promise<FiltersResponse> {
  return fetchData(
    `/filters?filter=${encodeURIComponent(filter)}&page=${page}&limit=${limit}`
  ) as Promise<FiltersResponse>;
}
