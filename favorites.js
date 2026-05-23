import{t as e}from"./assets/quote-C8OXoBeL.js";var t=e=>{try{let t=localStorage.getItem(e);return t===null?void 0:JSON.parse(t)}catch(e){console.error(`Error reading from localStorage:`,e.message);return}},n=(e,t)=>{try{let n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error(`Error saving to localStorage:`,e.message)}},r=e=>e.map(e=>`
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
  `).join(``),i=`favorite-exercises`,a={favoritesList:document.querySelector(`.favorites-list`)};function o(){a.favoritesList&&(e(),s(),a.favoritesList.addEventListener(`click`,c))}function s(){let e=t(i)||[];if(e.length===0){a.favoritesList.innerHTML=`
      <div class="favorites-empty-state">
        <p class="favorites-empty-text">
          It appears that you haven't added any exercises to your favorites yet.
          To get started, you can add exercises that you like to your favorites for easier access in the future.
        </p>
      </div>
    `;return}a.favoritesList.innerHTML=r(e)}function c(e){let r=e.target.closest(`.trash-btn`);if(!r)return;let a=r.closest(`.exercise-card`).dataset.id,o=t(i)||[];o=o.filter(e=>e._id!==a),n(i,o),s()}o();
//# sourceMappingURL=favorites.js.map