function getQuoteContainer() {
  return document.querySelector('.quote-container');
}

export function getPage() {
  const container = getQuoteContainer();

  return container?.dataset.page ||'home';
}

// export function getPage() {
//   return document.body.dataset.page || 'home';
// }