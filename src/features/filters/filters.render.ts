import { Category } from './filters.api';

export function renderCategoryCards(
  categories: Category[],
  container: HTMLUListElement
): void {
  container.innerHTML = categories
    .map(
      ({ name, filter, imgURL }) => `
      <li class="category-card" data-category="${name}">
        <!-- Шар для фонового зображення з темним оверлеєм для контрасту тексту -->
        <div class="category-card-bg" style="background-image: linear-gradient(0deg, rgba(17, 17, 17, 0.5), rgba(17, 17, 17, 0.5)), url('${imgURL}');"></div>
        <div class="category-card-content">
          <h3 class="category-name">${name}</h3>
          <p class="category-filter">${filter}</p>
        </div>
      </li>
    `
    )
    .join('');
}
