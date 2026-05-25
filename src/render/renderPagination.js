export function renderPagination(
  currentPage,
  totalPages,
  container,
  onPageChange
) {
  // Ховаємо пагінацію якщо сторінка одна
  if (totalPages <= 1) {
    container.innerHTML = '';
    return;
  }

  let pages = [];

  // MOBILE
  if (window.innerWidth < 768) {
    pages = [currentPage];

    if (currentPage < totalPages) {
      pages.push(currentPage + 1);
    }

    if (currentPage + 1 < totalPages) {
      pages.push(currentPage + 2);
    }
  } else {
    // TABLET / DESKTOP

    if (currentPage <= 3) {
      pages = Array.from({ length: totalPages }, (_, i) => i + 1);

      if (totalPages > 3) {
        pages.push('...');
        pages.push(totalPages);
      }
    } else if (currentPage >= totalPages - 2) {
      pages = [1, '...', totalPages - 2, totalPages - 1, totalPages];
    } else {
      pages = [
        1,
        '...',
        currentPage - 1,
        currentPage,
        currentPage + 1,
        '...',
        totalPages,
      ];
    }
  }

  container.innerHTML = `
    <div class="pagination-side">
      <!-- FIRST -->
      <button
        class="pagination-arrow"
        data-page="1"
        ${currentPage === 1 ? 'disabled' : ''}
      >
        &laquo;
      </button>

      <!-- PREV -->
      <button
        class="pagination-arrow"
        data-page="${currentPage - 1}"
        ${currentPage === 1 ? 'disabled' : ''}
      >
        &lsaquo;
      </button>
    </div>

    <div class="pagination-pages">
      ${pages
        .map(page => {
          if (page === '...') {
            return `<span class="pagination-dots">...</span>`;
          }

          return `
            <button
              class="pagination-btn ${page === currentPage ? 'active' : ''}"
              data-page="${page}"
            >
              ${page}
            </button>
          `;
        })
        .join('')}
    </div>

    <div class="pagination-side">
      <!-- NEXT -->
      <button
        class="pagination-arrow"
        data-page="${currentPage + 1}"
        ${currentPage === totalPages ? 'disabled' : ''}
      >
        &rsaquo;
      </button>

      <!-- LAST -->
      <button
        class="pagination-arrow"
        data-page="${totalPages}"
        ${currentPage === totalPages ? 'disabled' : ''}
      >
        &raquo;
      </button>
    </div>
  `;

  container.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      const page = Number(btn.dataset.page);

      if (!page || page === currentPage) return;

      onPageChange(page);
    });
  });
}
