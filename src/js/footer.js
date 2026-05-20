export function initFooter() {
  const form = document.getElementById('footer-subscribe-form');
  if (!form) return;

  form.addEventListener('submit', async event => {
    event.preventDefault();
    const emailInput = form.elements.namedItem('email');
    if (!emailInput) return;

    const emailValue = emailInput.value.trim();

    try {
      const response = await fetch(
        'https://your-energy.b.goit.study/api/subscription',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: emailValue }),
        }
      );

      if (response.status === 201) {
        alert("We're excited to have you on board! 🎉");
        form.reset();
        return;
      }
      if (response.status === 409) {
        alert('Цей email вже підписаний на розсилку!');
        return;
      }
      if (response.status === 400 || response.status === 404) {
        alert('Bad request. Please check your email formatting.');
        return;
      }
      throw new Error('Unexpected status code');
    } catch (error) {
      alert('Сталася помилка на сервері. Спробуйте пізніше.');
      console.error('Subscription system error:', error);
    }
  });
}
