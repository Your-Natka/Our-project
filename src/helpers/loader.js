const GLOBAL_LOADER_CLASS = 'loader-backdrop';
const LOCAL_LOADER_CLASS = 'loader-local';

const localLoaderCounters = new WeakMap();
let globalLoaderCounter = 0;

export function showLoader(container) {
  if (container instanceof Element) {
    showLocalLoader(container);
    return;
  }

  showGlobalLoader();
}

export function hideLoader(container) {
  if (container instanceof Element) {
    hideLocalLoader(container);
    return;
  }

  hideGlobalLoader();
}

function showGlobalLoader() {
  globalLoaderCounter += 1;

  if (!document.querySelector(`.${GLOBAL_LOADER_CLASS}`)) {
    const loader = document.createElement('div');
    loader.className = GLOBAL_LOADER_CLASS;
    loader.setAttribute('role', 'status');
    loader.setAttribute('aria-live', 'polite');
    loader.innerHTML = createLoaderMarkup();

    document.body.append(loader);
  }

  document.body.classList.add('loader-lock');
}

function hideGlobalLoader() {
  if (globalLoaderCounter > 0) {
    globalLoaderCounter -= 1;
  }

  if (globalLoaderCounter > 0) return;

  document.querySelector(`.${GLOBAL_LOADER_CLASS}`)?.remove();
  document.body.classList.remove('loader-lock');
}

function showLocalLoader(container) {
  const currentCounter = localLoaderCounters.get(container) || 0;
  localLoaderCounters.set(container, currentCounter + 1);

  if (currentCounter > 0) return;

  const loaderTag = isListElement(container) ? 'li' : 'div';

  container.setAttribute('aria-busy', 'true');
  container.innerHTML = `
    <${loaderTag} class="${LOCAL_LOADER_CLASS}" role="status" aria-live="polite">
      ${createLoaderMarkup()}
    </${loaderTag}>
  `;
}

function hideLocalLoader(container) {
  const currentCounter = localLoaderCounters.get(container) || 0;
  const nextCounter = Math.max(currentCounter - 1, 0);

  if (nextCounter > 0) {
    localLoaderCounters.set(container, nextCounter);
    return;
  }

  localLoaderCounters.delete(container);
  container.removeAttribute('aria-busy');

  const onlyChild = container.children.length === 1 && container.firstElementChild;
  if (onlyChild && onlyChild.classList.contains(LOCAL_LOADER_CLASS)) {
    container.innerHTML = '';
  }
}

function createLoaderMarkup() {
  return `
    <div class="loader-box">
      <span class="loader-spinner" aria-hidden="true"></span>
      <span class="loader-text">Loading...</span>
    </div>
  `;
}

function isListElement(element) {
  return element.matches('ul, ol');
}
