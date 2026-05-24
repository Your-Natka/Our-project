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
    if (currentPage > 1) {
      pages.push(currentPage - 1);
    }

    pages.push(currentPage);

    if (currentPage < totalPages) {
      pages.push(currentPage + 1);
    }
  } else {
    // TABLET / DESKTOP

    if (currentPage <= 3) {
      pages = [1, 2, 3];

      if (totalPages > 4) {
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
  `;

  container.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      const page = Number(btn.dataset.page);

      if (!page || page === currentPage) return;

      onPageChange(page);
    });
  });
}
