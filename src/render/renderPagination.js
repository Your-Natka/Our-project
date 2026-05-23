export function renderPagination(
  currentPage,
  totalPages,
  container,
  onPageChange
) {
  let pages = [];

  // MOBILE SIMPLE
  if (window.innerWidth < 768) {
    for (
      let i = Math.max(1, currentPage - 1);
      i <= Math.min(totalPages, currentPage + 1);
      i++
    ) {
      pages.push(i);
    }
  } else {
    // TABLET/DESKTOP
    for (let i = 1; i <= Math.min(5, totalPages); i++) {
      pages.push(i);
    }

    if (totalPages > 5) {
      pages.push('...');
      pages.push(totalPages);
    }
  }

  container.innerHTML = `
    <button 
      class="pagination-arrow"
      data-page="${currentPage - 1}"
      ${currentPage === 1 ? 'disabled' : ''}
    >
      <
    </button>

    ${pages
      .map(
        page => `
          <button
            class="pagination-btn ${page === currentPage ? 'active' : ''}"
            data-page="${page}"
            ${page === '...' ? 'disabled' : ''}
          >
            ${page}
          </button>
        `
      )
      .join('')}

    <button
      class="pagination-arrow"
      data-page="${currentPage + 1}"
      ${currentPage === totalPages ? 'disabled' : ''}
    >
      >
    </button>
  `;

  container.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      const page = Number(btn.dataset.page);

      if (!page) return;

      onPageChange(page);
    });
  });
}
