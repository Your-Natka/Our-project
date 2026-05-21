import { getFilters } from './filters.api';
import { renderCategoryCards } from './filters.render';
import { loadExercisesByFilter } from '../exercises/exercises.controller';

const refs = {
  section: document.getElementById('categories-section') as HTMLElement | null,
  filterList: document.querySelector('.filter-list') as HTMLUListElement | null,
  categoriesList: document.getElementById(
    'categories-list'
  ) as HTMLUListElement | null,
  subtitle: document.getElementById(
    'categories-subtitle'
  ) as HTMLSpanElement | null,
  errorBlock: document.getElementById(
    'categories-error'
  ) as HTMLDivElement | null,
  pagination: document.getElementById(
    'categories-pagination'
  ) as HTMLDivElement | null,
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

  // Стартовий запуск: підвантажуємо дефолтний Muscles
  loadFilters(activeFilter);
}

async function loadFilters(type: string): Promise<void> {
  if (!refs.categoriesList || !refs.errorBlock) return;

  try {
    refs.errorBlock.classList.add('is-hidden');
    refs.categoriesList.classList.remove('is-hidden');

    // Динамічний ліміт: 9 для мобільних, 12 для інших екранів
    const limit = window.innerWidth < 768 ? 9 : 12;
    const data = await getFilters(type, currentPage, limit);

    if (data.results.length === 0) {
      showError();
      return;
    }

    // Відмальовуємо картки категорій з зображеннями
    renderCategoryCards(data.results, refs.categoriesList);

    // Тут у майбутньому підключиться пагінація
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

  // Очищуємо хвостик заголовка
  if (refs.subtitle) refs.subtitle.textContent = '';

  await loadFilters(activeFilter);
}

// Клік по картці категорії
function handleCategoryClick(event: Event): void {
  const target = event.target as HTMLElement;
  const card = target.closest('.category-card') as HTMLLIElement | null;

  if (!card || !refs.section || !refs.subtitle) return;

  const categoryName = card.dataset.category || '';

  // 1. Оновлюємо заголовок секції ( Exercises / Abs )
  const capitalizedCategoryName =
    categoryName.charAt(0).toUpperCase() + categoryName.slice(1);
  refs.subtitle.textContent = ` / ${capitalizedCategoryName}`;

  // 2. Ховаємо нашу секцію категорій
  refs.section.classList.add('is-hidden');

  // 3. Знаходимо секцію вправ нашого колеги і робимо її видимою
  const exercisesSection = document.querySelector(
    '.exercises'
  ) as HTMLElement | null;
  if (exercisesSection) {
    exercisesSection.classList.remove('is-hidden');
  }

  // 4. Запускаємо логіку колеги: завантажуємо вправи для обраної категорії!
  // Оскільки ми імпортували оригінальний JS метод, передаємо туди назву категорії.
  loadExercisesByFilter(categoryName);
}

function showError(): void {
  if (refs.categoriesList && refs.errorBlock) {
    refs.categoriesList.innerHTML = '';
    refs.errorBlock.classList.remove('is-hidden');
  }
}
