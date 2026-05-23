function throttle<T extends (...args: any[]) => void>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle = false;
  return function (this: any, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

export function initScrollUp(): void {
  // Запобігання повторному створенню
  if (document.querySelector('.scroll-up-btn')) return;

  const scrollUpBtn = document.createElement('button');
  scrollUpBtn.className = 'scroll-up-btn';
  scrollUpBtn.type = 'button';
  scrollUpBtn.setAttribute('aria-label', 'Scroll to top');

  scrollUpBtn.innerHTML = `
    <svg class="scroll-up-icon" width="18" height="18">
      <use href="./sprite.svg#icon-arrow-up" />
    </svg>
  `;

  document.body.appendChild(scrollUpBtn);

  // Плавний скрол на самий верх при кліку
  scrollUpBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  const handleScroll = () => {
    const scrollThreshold = 400;
    if (window.scrollY > scrollThreshold) {
      scrollUpBtn.classList.add('is-visible');
    } else {
      scrollUpBtn.classList.remove('is-visible');
    }
  };

  // Оптимізуємо скрол через throttle з лімітом 100мс
  window.addEventListener('scroll', throttle(handleScroll, 100));
}

initScrollUp();
