import { hideLoader, showLoader } from '../helpers/loader.js';
import iziToast from 'izitoast';

export function initFooter() {
  const form = document.getElementById('footer-subscribe-form');
  if (!form) return;

  form.addEventListener('submit', async event => {
    event.preventDefault();
    const emailInput = form.elements.namedItem('email');
    if (!emailInput) return;

    const emailValue = emailInput.value.trim();

    showLoader();

    try {
      const response = await fetch(
        'https://your-energy.b.goit.study/api/subscription',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: emailValue }),
        }
      );

      // Success
      if (response.status === 201) {
        iziToast.success({
        title: 'Success',
        message: "We're excited to have you on board! 🎉",
        position: 'topRight',
      });
        form.reset();
        return;
      }

      // Conflict: Already subscribed
      if (response.status === 409) {
        iziToast.error({
        title: 'Error',
        message: 'This email is already subscribed to the newsletter!',
        position: 'topRight',
      });
        form.reset();
        return;
      }

      // Bad Request / Not Found
      if (response.status === 400 || response.status === 404) {
        iziToast.error({
          title: 'Error',
          message: 'Bad request. Please check your email formatting.',
          position: 'topRight',
        });
        return;
      }

      // Catch-all for other server responses (500, etc.)
      throw new Error('Unexpected status code');
    } catch (error) {
      // Network failures or thrown errors
      iziToast.error({
        title: 'Error',
        message: 'A server error occurred. Please try again later.',
        position: 'topRight',
      });
      console.error('Subscription system error:', error);
    } finally {
      hideLoader();
    }
  });
}
