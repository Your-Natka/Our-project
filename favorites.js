import"./assets/styles-LfQabD_8.js";var e=e=>{try{let t=localStorage.getItem(e);return t===null?void 0:JSON.parse(t)}catch(e){console.error(`Error reading from localStorage:`,e.message);return}},t=(e,t)=>{try{let n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error(`Error saving to localStorage:`,e.message)}},n=e=>e.map(e=>`
    <li class="exercise-card" data-id="${e._id}">
      <div class="card-header">
        <div class="badge-wrapper">
          <span class="workout-badge">Workout</span>
          <button type="button" class="trash-btn" aria-label="Remove from favorites">
            <svg class="trash-icon" width="16" height="16">
              <use href="./assets/sprite.svg#icon-trash"></use>
            </svg>
          </button>
        </div>
        <button type="button" class="start-btn">
          Start
          <svg class="arrow-icon" width="16" height="16">
            <use href="./assets/sprite.svg#icon-arrow"></use>
          </svg>
        </button>
      </div>

      <div class="card-title-wrapper">
        <div class="runner-icon-wrapper">
          <svg class="runner-icon" width="24" height="24">
            <use href="./assets/sprite.svg#icon-runner"></use>
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
  `).join(``),r=`favorite-exercises`,i={favoritesList:document.querySelector(`.favorites-list`)};function a(){i.favoritesList&&(o(),i.favoritesList.addEventListener(`click`,s))}function o(){let t=e(r)||[];if(t.length===0){i.favoritesList.innerHTML=`
      <div class="favorites-empty-state">
        <p class="favorites-empty-text">
          It appears that you haven't added any exercises to your favorites yet. 
          To get started, you can add exercises that you like to your favorites for easier access in the future.
        </p>
      </div>
    `;return}i.favoritesList.innerHTML=n(t)}function s(n){let i=n.target.closest(`.trash-btn`);if(!i)return;let a=i.closest(`.exercise-card`).dataset.id,s=e(r)||[];s=s.filter(e=>e._id!==a),t(r,s),o()}a();
//# sourceMappingURL=favorites.js.map