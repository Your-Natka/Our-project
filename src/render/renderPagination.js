class PaginationButtonBuilder {
  constructor() {
    this.classes = ['pagination-btn'];
    this.attrs = {};
    this.content = '';
    this.isArrow = false;
  }

  setPage(page) {
    this.attrs['data-page'] = page;
    return this;
  }

  setContent(content) {
    this.content = content;
    return this;
  }

  setIsArrow() {
    this.isArrow = true;
    this.classes = ['pagination-arrow'];
    return this;
  }

  setActive(isActive) {
    if (isActive) {
      this.classes.push('active');
    }
    return this;
  }

  setDisabled(isDisabled) {
    if (isDisabled) {
      this.attrs['disabled'] = '';
    }
    return this;
  }

  setDots() {
    this.classes.push('pagination-dots');
    this.setDisabled(true);
    return this;
  }

  build() {
    // For buttons with more than one digit, add classes for better text fit
    if (!this.isArrow && typeof this.content === 'number') {
      const digitCount = String(this.content).length;
      if (digitCount === 2) {
        this.classes.push('digit-2');
      } else if (digitCount >= 3) {
        this.classes.push('digit-3');
      }
    }

    const classStr = this.classes.join(' ');
    const attrStr = Object.entries(this.attrs)
      .map(([key, val]) => (val === '' ? key : `${key}="${val}"`))
      .join(' ');

    return `<button class="${classStr}" ${attrStr}>${this.content}</button>`;
  }
}

export function renderPagination(
  currentPage,
  totalPages,
  container,
  onPageChange
) {
  // Hide pagination if there is only one page
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
      pages = Array.from({ length: Math.min(totalPages, 3) }, (_, i) => i + 1);

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

  const firstBtn = new PaginationButtonBuilder()
    .setIsArrow()
    .setPage(1)
    .setContent('&laquo;')
    .setDisabled(currentPage === 1)
    .build();

  const prevBtn = new PaginationButtonBuilder()
    .setIsArrow()
    .setPage(currentPage - 1)
    .setContent('&lsaquo;')
    .setDisabled(currentPage === 1)
    .build();

  const nextBtn = new PaginationButtonBuilder()
    .setIsArrow()
    .setPage(currentPage + 1)
    .setContent('&rsaquo;')
    .setDisabled(currentPage === totalPages)
    .build();

  const lastBtn = new PaginationButtonBuilder()
    .setIsArrow()
    .setPage(totalPages)
    .setContent('&raquo;')
    .setDisabled(currentPage === totalPages)
    .build();

  const pagesHtml = pages
    .map(page => {
      if (page === '...') {
        return new PaginationButtonBuilder()
          .setDots()
          .setContent('...')
          .build();
      }

      return new PaginationButtonBuilder()
        .setPage(page)
        .setContent(page)
        .setActive(page === currentPage)
        .build();
    })
    .join('');

  container.innerHTML = `
    <div class="pagination-side">
      <!-- FIRST -->
      ${firstBtn}

      <!-- PREV -->
      ${prevBtn}
    </div>

    <div class="pagination-pages">
      ${pagesHtml}
    </div>

    <div class="pagination-side">
      <!-- NEXT -->
      ${nextBtn}

      <!-- LAST -->
      ${lastBtn}
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
