export function renderFilters(filters, container, onClick) {
  container.innerHTML = filters
    .map(
      item => `
        <button class="filter-btn" data-name="${item.name}">
          ${item.name}
        </button>
      `
    )
    .join('');

  container.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      onClick(btn.dataset.name);
    });
  });
}
