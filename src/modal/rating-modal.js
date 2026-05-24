// import iziToast from 'izitoast';

// import { addRating } from '../api/rating-api';

// import {
//   openExerciseModal,
//   closeExerciseModal,
// } from '../features/exercises/exercises.modal';



// let currentExerciseId = null;

// export function openRatingModal(exerciseId) {
//   currentExerciseId = exerciseId;

//   const backdrop = document.querySelector(
//     '.rating-backdrop'
//   );

//   const form = document.querySelector(
//     '.rating-form'
//   );

//   const closeBtn = document.querySelector(
//     '.rating-close-btn'
//   );

//   const stars = document.querySelectorAll(
//     '.rating-stars input'
//   );

//   backdrop.classList.remove('is-hidden');

//   document.body.classList.add(
//     'no-scroll'
//   );

//   function closeModal() {
//     backdrop.classList.add('is-hidden');

//     document.body.classList.remove(
//       'no-scroll'
//     );

//     form.reset();

//     resetStars();

//     document.removeEventListener(
//       'keydown',
//       onEscPress
//     );

//     openExerciseModal(currentExerciseId);
//   }

//   function onEscPress(event) {
//     if (event.code === 'Escape') {
//       closeModal();
//     }
//   }

//   function updateStars() {
//     const checkedValue = Number(
//       document.querySelector(
//         '.rating-stars input:checked'
//       ).value
//     );

//     stars.forEach(star => {
//       const icon =
//         star.nextElementSibling;

//       if (
//         Number(star.value) <=
//         checkedValue
//       ) {
//         icon.style.fill = '#EEA10C';
//       } else {
//         icon.style.fill =
//           'transparent';
//       }
//     });
//   }

//   function resetStars() {
//     stars.forEach(star => {
//       const icon =
//         star.nextElementSibling;

//       icon.style.fill =
//         'transparent';
//     });
//   }

//   closeBtn.addEventListener(
//     'click',
//     closeModal
//   );

//   backdrop.addEventListener(
//     'click',
//     event => {
//       if (event.target === backdrop) {
//         closeModal();
//       }
//     }
//   );

//   document.addEventListener(
//     'keydown',
//     onEscPress
//   );

//   stars.forEach(star => {
//     star.addEventListener(
//       'change',
//       updateStars
//     );
//   });

//   form.addEventListener(
//     'submit',
//     async event => {
//       event.preventDefault();

//       const formData = new FormData(
//         form
//       );

//       const body = {
//         rate: Number(
//           formData.get('rate')
//         ),

//         email: formData.get('email'),

//         review:
//           formData.get('review'),
//       };

//       try {
//         await addRating(
//           currentExerciseId,
//           body
//         );

//         iziToast.success({
//           message:
//             'Rating added successfully!',
//         });

//         closeModal();
//       } catch (error) {
//         if (error.status === 409) {
//           iziToast.error({
//             message:
//               'Цей email вже використовувався для оцінки цієї вправи!',
//           });

//           return;
//         }

//         if (
//           error.status === 400 ||
//           error.status === 404
//         ) {
//           iziToast.error({
//             message:
//               error.message ||
//               'Некоректні дані',
//           });

//           return;
//         }

//         iziToast.error({
//           message:
//             'Сталася помилка на сервері',
//         });
//       }
//     }
//   );
// }

import iziToast from 'izitoast';

import { addRating } from '../api/rating-api';

import {
  openExerciseModal,
} from '../features/exercises/exercises.modal';

let currentExerciseId = null;

export function openRatingModal(exerciseId) {
  currentExerciseId = exerciseId;

  const backdrop = document.querySelector(
    '.rating-backdrop'
  );

  const form = document.querySelector(
    '.rating-form'
  );

  const closeBtn = document.querySelector(
    '.rating-close-btn'
  );

  const stars = document.querySelectorAll(
    '.rating-stars input'
  );

  // NEW
  const ratingValue = document.querySelector(
    '.rating-value'
  );

  backdrop.classList.remove('is-hidden');

  document.body.classList.add(
    'no-scroll'
  );

  function closeModal() {
    backdrop.classList.add('is-hidden');

    document.body.classList.remove(
      'no-scroll'
    );

    form.reset();

    resetStars();

    document.removeEventListener(
      'keydown',
      onEscPress
    );

    openExerciseModal(currentExerciseId);
  }

  function onEscPress(event) {
    if (event.code === 'Escape') {
      closeModal();
    }
  }

  // UPDATED
  function updateStars() {
    const checkedInput = document.querySelector(
      '.rating-stars input:checked'
    );

    if (!checkedInput) return;

    const checkedValue = Number(
      checkedInput.value
    );

    // update 0.0 -> 1.0 -> 5.0
    ratingValue.textContent =
      checkedValue.toFixed(1);

    stars.forEach(star => {
      const icon =
        star.nextElementSibling;

      if (
        Number(star.value) <=
        checkedValue
      ) {
        icon.classList.add('active');
      } else {
        icon.classList.remove(
          'active'
        );
      }
    });
  }

  // UPDATED
  function resetStars() {
    ratingValue.textContent = '0.0';

    stars.forEach(star => {
      const icon =
        star.nextElementSibling;

      star.checked = false;

      icon.classList.remove('active');
    });
  }

  closeBtn.addEventListener(
    'click',
    closeModal
  );

  backdrop.addEventListener(
    'click',
    event => {
      if (event.target === backdrop) {
        closeModal();
      }
    }
  );

  document.addEventListener(
    'keydown',
    onEscPress
  );

  stars.forEach(star => {
    star.addEventListener(
      'change',
      updateStars
    );
  });

  form.addEventListener(
    'submit',
    async event => {
      event.preventDefault();

      const formData = new FormData(
        form
      );

      const body = {
        rate: Number(
          formData.get('rate')
        ),

        email: formData.get('email'),

        review:
          formData.get('review'),
      };

      try {
        await addRating(
          currentExerciseId,
          body
        );

        iziToast.success({
          message:
            'Rating added successfully!',
        });

        closeModal();
      } catch (error) {
        if (error.status === 409) {
          iziToast.error({
            message:
              'Цей email вже використовувався для оцінки цієї вправи!',
          });

          return;
        }

        if (
          error.status === 400 ||
          error.status === 404
        ) {
          iziToast.error({
            message:
              error.message ||
              'Некоректні дані',
          });

          return;
        }

        iziToast.error({
          message:
            'Сталася помилка на сервері',
        });
      }
    }
  );
}