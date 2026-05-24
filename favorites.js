import{n as e,t}from"./assets/scroll.up-e7ExWEc8.js";var n=e=>{try{let t=localStorage.getItem(e);return t===null?void 0:JSON.parse(t)}catch(e){console.error(`Error reading from localStorage:`,e.message);return}},r=(e,t)=>{try{let n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error(`Error saving to localStorage:`,e.message)}},i=e=>e.map(e=>`
    <li class="exercise-card" data-id="${e._id}">
      <div class="card-header">
        <div class="badge-wrapper">
          <span class="workout-badge">Workout</span>
          <button type="button" class="trash-btn" aria-label="Remove from favorites">
            <svg class="trash-icon" width="16" height="16">
              <use href="./sprite.svg#icon-trash"></use>
            </svg>
          </button>
        </div>
        <button type="button" class="start-btn">
          Start
          <svg class="arrow-icon" width="16" height="16">
            <use href="./sprite.svg#icon-arrow"></use>
          </svg>
        </button>
      </div>

      <div class="card-title-wrapper">
        <div class="runner-icon-wrapper">
          <svg class="runner-icon" width="24" height="24">
            <use href="./sprite.svg#icon-runner"></use>
          </svg>
        </div>
        <h3 class="exercise-name">${e.name}</h3>
      </div>

      <ul class="card-info-list">
        <li class="card-info-item"><span class="info-label">Burned calories:</span> ${e.burnedCalories} / ${e.time} min</li>
        <li class="card-info-item"><span class="info-label">Body part:</span> ${e.bodyPart}</li>
        <li class="card-info-item"><span class="info-label">Target:</span> ${e.target}</li>
      </ul>
    </li>
  `).join(``),a=`favorite-exercises`,o={favoritesList:document.querySelector(`.favorites-list`)};function s(){o.favoritesList&&(t(),l(),o.favoritesList.addEventListener(`click`,u),o.favoritesList.addEventListener(`click`,c))}function c(t){let n=t.target.closest(`.start-btn`);if(!n)return;let r=n.closest(`.exercise-card`);if(!r)return;let i=r.dataset.id;i&&e(i)}function l(){let e=n(a)||[];if(e.length===0){o.favoritesList.innerHTML=`
      <div class="favorites-empty-state">
        <p class="favorites-empty-text">
          It appears that you haven't added any exercises to your favorites yet.
          To get started, you can add exercises that you like to your favorites for easier access in the future.
        </p>
      </div>
    `;return}o.favoritesList.innerHTML=i(e)}function u(e){let t=e.target.closest(`.trash-btn`);if(!t)return;let i=t.closest(`.exercise-card`).dataset.id,o=n(a)||[];o=o.filter(e=>e._id!==i),r(a,o),l()}s();
//# sourceMappingURL=favorites.js.map