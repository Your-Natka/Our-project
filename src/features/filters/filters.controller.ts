import { getFilters } from './filters.api';
import { renderCategoryCards, renderPagination } from './filters.render';
import { loadExercisesByFilter } from '../exercises/exercises.controller';
import {
  initNavigation,
  updateNavigationHeader,
  setFilterButtonsVisibility,
  setSearchInputVisibility,
} from '../navigation/navigation.controller';

const refs = {
  filterList: document.getElementById('section-filter-list') as HTMLUListElement | null,
  categoriesList: document.getElementById('exercises-list') as HTMLUListElement | null,
  errorBlock: document.getElementById('exercises-error') as HTMLDivElement | null,
  pagination: document.getElementById('exercises-pagination') as HTMLDivElement | null,
};

let activeFilter = 'Muscles'; // Початковий дефолтний фільтр
let currentPage = 1;

export function initFilters(): void {
  if (!refs.filterList || !refs.categoriesList) {
    console.warn(
      'DOM-елементи для ініціалізації лісенерів фільтрів не знайдені.'
    );
    return;
  }

  // Слухаємо кліки по кнопках фільтрів (Muscles, Body parts, Equipment)
  refs.filterList.addEventListener('click', handleFilterClick);

  // Слухаємо кліки по самих картках категорій (Abductors, Abs, тощо)
  refs.categoriesList.addEventListener('click', handleCategoryClick);

  // Ініціалізуємо логіку спільного меню навігації з колбеком для повернення назад
  initNavigation(handleBackNavigation);

  // Стартовий запуск: підвантажуємо дефолтний Muscles
  loadFilters(activeFilter);
}

async function loadFilters(type: string): Promise<void> {
  if (!refs.categoriesList || !refs.errorBlock) return;

  try {
    refs.errorBlock.classList.add('is-hidden');
    refs.categoriesList.classList.remove('is-hidden');

    // На старті сторінки гарантуємо базовий стан навігаційної панелі
    updateNavigationHeader('Exercises');
    setFilterButtonsVisibility(true);
    setSearchInputVisibility(false);

    // Динамічний ліміт: 9 для мобільних, 12 для інших екранів
    const limit = window.innerWidth < 768 ? 9 : 12;
    const data = await getFilters(type, currentPage, limit);

    if (data.results.length === 0) {
      showError();
      return;
    }

    // Відмальовуємо картки категорій з зображеннями
    renderCategoryCards(data.results, refs.categoriesList);

    // TODO: Відмальовуємо пагінацію
    if (refs.pagination) {
      renderPagination(data.totalPages, currentPage, refs.pagination);
    }
  } catch (error) {
    console.error('Помилка завантаження категорій:', error);
    showError();
  }
}

// Перемикання верхніх фільтрів
async function handleFilterClick(event: Event): Promise<void> {
  const target = event.target as HTMLElement;
  if (target.nodeName !== 'BUTTON' || !refs.filterList) return;

  const clickedBtn = target as HTMLButtonElement;
  activeFilter = clickedBtn.dataset.filter || 'Muscles';
  currentPage = 1;

  // Оновлюємо активний клас кнопок
  const currentActive = refs.filterList.querySelector('.filter-btn.active');
  if (currentActive) {
    currentActive.classList.remove('active');
    currentActive.setAttribute('aria-selected', 'false');
  }
  clickedBtn.classList.add('active');
  clickedBtn.setAttribute('aria-selected', 'true');

  // Скидаємо хлібні крихти, оскільки ми перемкнули фільтр
  updateNavigationHeader('Exercises');

  await loadFilters(activeFilter);
}

// Клік по картці категорії (перехід до вправ)
function handleCategoryClick(event: Event): void {
  const target = event.target as HTMLElement;
  const card = target.closest('.category-card') as HTMLLIElement | null;

  if (!card || !refs.categoriesList) return;

  const categoryName = card.dataset.category || '';

  // 1. Оновлюємо заголовок через Navigation API (додаємо Abs, Cardio тощо)
  const capitalizedCategoryName =
    categoryName.charAt(0).toUpperCase() + categoryName.slice(1);
  updateNavigationHeader('Exercises', capitalizedCategoryName);

  // 2. Ховаємо кнопки-фільтри через Navigation API
  setFilterButtonsVisibility(true);

  // 3. Показуємо пошуковий рядок через Navigation API
  setSearchInputVisibility(true);

  // 4. Очищуємо контейнер сітки перед завантаженням карток вправ
  refs.categoriesList.innerHTML = '';

  // 5. Запускаємо логіку колеги: завантажуємо вправи для обраної категорії!
  loadExercisesByFilter(categoryName);
}

// Колбек-функція для повернення назад до списку категорій
function handleBackNavigation(): void {
  // 1. Очищаємо підзаголовок та повертаємо дефолтний заголовок
  updateNavigationHeader('Exercises');

  // 2. Показуємо верхні фільтри
  setFilterButtonsVisibility(true);

  // 3. Ховаємо пошуковий рядок
  setSearchInputVisibility(false);

  // 4. Перезавантажуємо поточний вибраний фільтр категорій
  currentPage = 1;
  loadFilters(activeFilter);
}

function showError(): void {
  if (refs.categoriesList && refs.errorBlock) {
    refs.categoriesList.innerHTML = '';
    refs.errorBlock.classList.remove('is-hidden');
  }
}
