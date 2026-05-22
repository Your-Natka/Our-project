import { getFilters } from './filters.api';
import { renderCategoryCards } from './filters.render';
import { loadExercisesByFilter } from '../exercises/exercises.controller';

const refs = {
  section: document.getElementById('exercises-section') as HTMLElement | null,
  filterList: document.getElementById('exercises-filter-list') as HTMLUListElement | null,
  categoriesList: document.getElementById('exercises-list') as HTMLUListElement | null,
  title: document.getElementById('exercises-title') as HTMLHeadingElement | null,
  subtitle: document.getElementById('exercises-subtitle') as HTMLSpanElement | null,
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

  // Слухаємо кліки на заголовок "Exercises" для повернення до категорій
  if (refs.title) {
    refs.title.addEventListener('click', handleTitleClick);
  }

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

// Клік по картці категорії (перехід до вправ)
function handleCategoryClick(event: Event): void {
  const target = event.target as HTMLElement;
  const card = target.closest('.category-card') as HTMLLIElement | null;

  if (!card || !refs.subtitle || !refs.filterList || !refs.categoriesList) return;

  const categoryName = card.dataset.category || '';

  // 1. Оновлюємо заголовок секції ( Exercises / Abs )
  const capitalizedCategoryName =
    categoryName.charAt(0).toUpperCase() + categoryName.slice(1);
  refs.subtitle.textContent = ` / ${capitalizedCategoryName}`;

  // 2. Ховаємо верхні кнопки-фільтри
  refs.filterList.classList.add('is-hidden');

  // 3. Очищуємо контейнер перед рендером вправ Олександра
  refs.categoriesList.innerHTML = '';

  // 4. Запускаємо логіку колеги: завантажуємо вправи для обраної категорії!
  loadExercisesByFilter(categoryName);
}

// Клік по заголовку "Exercises" (повернення до категорій)
function handleTitleClick(): void {
  // Повертаємося лише тоді, коли ми знаходимося всередині категорії (є підзаголовок)
  if (!refs.subtitle || !refs.subtitle.textContent || !refs.filterList) return;

  // 1. Очищаємо підзаголовок
  refs.subtitle.textContent = '';

  // 2. Показуємо кнопки фільтрів
  refs.filterList.classList.remove('is-hidden');

  // 3. Перезавантажуємо активний фільтр категорій
  currentPage = 1;
  loadFilters(activeFilter);
}

function showError(): void {
  if (refs.categoriesList && refs.errorBlock) {
    refs.categoriesList.innerHTML = '';
    refs.errorBlock.classList.remove('is-hidden');
  }
}
