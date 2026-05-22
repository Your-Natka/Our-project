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

      // Success
      if (response.status === 201) {
        alert("We're excited to have you on board! 🎉");
        form.reset();
        return;
      }

      // Conflict: Already subscribed
      if (response.status === 409) {
        alert('This email is already subscribed to the newsletter!');
        return;
      }

      // Bad Request / Not Found
      if (response.status === 400 || response.status === 404) {
        alert('Bad request. Please check your email formatting.');
        return;
      }

      // Catch-all for other server responses (500, etc.)
      throw new Error('Unexpected status code');
    } catch (error) {
      // Network failures or thrown errors
      alert('A server error occurred. Please try again later.');
      console.error('Subscription system error:', error);
    }
  });
}
