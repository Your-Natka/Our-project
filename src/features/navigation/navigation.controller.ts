/**
 * ==========================================================================
 * Контролер спільної навігації сторінки (section-navigation)
 * Керує заголовками, хлібними крихтами, кнопками-фільтрами та пошуком.
 * ==========================================================================
 */

const navRefs = {
  title: document.getElementById('section-title') as HTMLHeadingElement | null,
  subtitle: document.getElementById('section-subtitle') as HTMLSpanElement | null,
  filterList: document.getElementById('section-filter-list') as HTMLUListElement | null,
  searchBox: document.getElementById('section-search-box') as HTMLFormElement | null,
};

/**
 * Ініціалізує слухачі подій навігації
 * @param onBackClick Колбек-функція, що викликається при поверненні до категорій
 */
export function initNavigation(onBackClick: () => void): void {
  if (navRefs.title) {
    navRefs.title.addEventListener('click', () => {
      // Дозволяємо клік для повернення назад, лише коли є активний підзаголовок (хлібні крихти)
      if (navRefs.subtitle && navRefs.subtitle.textContent) {
        onBackClick();
      }
    });
  }
}

/**
 * Оновлює текст головного заголовка та додає підзаголовок (хлібні крихти)
 * @param mainTitle Головний заголовок сторінки (наприклад, 'Exercises' або 'Favorites')
 * @param subtitleText Підзаголовок категорії (наприклад, 'Abs' або 'Muscles')
 */
export function updateNavigationHeader(mainTitle: string, subtitleText?: string): void {
  if (navRefs.title) {
    if (navRefs.subtitle) {
      navRefs.title.innerHTML = `${mainTitle}<span class="section-subtitle" id="section-subtitle">${
        subtitleText ? ' / ' + subtitleText : ''
      }</span>`;
      
      // Перепідключаємо посилання на оновлений у DOM subtitle
      navRefs.subtitle = document.getElementById('section-subtitle') as HTMLSpanElement | null;
    }
  }
}

/**
 * Керує видимістю списку кнопок-фільтрів
 * @param isVisible true - показати, false - приховати
 */
export function setFilterButtonsVisibility(isVisible: boolean): void {
  if (navRefs.filterList) {
    if (isVisible) {
      navRefs.filterList.classList.remove('is-hidden');
    } else {
      navRefs.filterList.classList.add('is-hidden');
    }
  }
}

/**
 * Керує видимістю поля пошуку
 * @param isVisible true - показати, false - приховати
 */
export function setSearchInputVisibility(isVisible: boolean): void {
  if (navRefs.searchBox) {
    if (isVisible) {
      navRefs.searchBox.classList.remove('is-hidden');
    } else {
      navRefs.searchBox.classList.add('is-hidden');
    }
  }
}
