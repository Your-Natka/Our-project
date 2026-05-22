import { Category } from './filters.api';

export function renderCategoryCards(
  categories: Category[],
  container: HTMLUListElement
): void {
  container.innerHTML = categories
    .map(
      ({ name, filter, imgURL }) => `
      <li class="category-card" data-category="${name}">
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

export function renderPagination(
  totalPages: number,
  currentPage: number,
  container: HTMLDivElement
): void {
  container.innerHTML = `${currentPage} of ${totalPages}`;
  /* `
     <button class="pagination-button" data-page="${1}">&#171;</button>                           <!-- Перша сторінка -->
     <button class="pagination-button" data-page="${currentPage - 1}">${currentPage - 1}</button> <!-- Попередня сторінка -->
     <button class="pagination-button" data-page="${currentPage}">${currentPage}</button>         <!-- Активна сторінка -->
     <button class="pagination-button" data-page="${currentPage + 1}">${currentPage + 1}</button> <!-- Наступна сторінка -->
     <button class="pagination-button" data-page="${totalPages}">&#187;</button>                  <!-- Остання сторінка -->
  `;*/
}
