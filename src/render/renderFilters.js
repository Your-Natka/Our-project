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

  attachFilterEvents(container, onClick);
}

function attachFilterEvents(container, onClick) {
  const buttons = container.querySelectorAll('.filter-btn');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const name = btn.dataset.name;
      onClick(name);
    });
  });
}
