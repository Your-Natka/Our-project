import{i as e,n as t,r as n,t as r}from"./assets/scroll.up-D-TJV4y_.js";var i=e=>{try{let t=localStorage.getItem(e);return t===null?void 0:JSON.parse(t)}catch(e){console.error(`Error reading from localStorage:`,e.message);return}},a=(e,t)=>{try{let n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error(`Error saving to localStorage:`,e.message)}},o=e=>e.map(e=>`
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
  `).join(``),s=`favorite-exercises`,c={favoritesList:document.querySelector(`.favorites-list`)};async function l(){if(c.favoritesList){e();try{await r(),d()}catch(e){console.error(e)}finally{n()}c.favoritesList.addEventListener(`click`,f),c.favoritesList.addEventListener(`click`,u)}}function u(e){let n=e.target.closest(`.start-btn`);if(!n)return;let r=n.closest(`.exercise-card`);if(!r)return;let i=r.dataset.id;i&&t(i)}function d(){let e=i(s)||[];if(e.length===0){c.favoritesList.innerHTML=`
      <div class="favorites-empty-state">
        <p class="favorites-empty-text">
          It appears that you haven't added any exercises to your favorites yet.
          To get started, you can add exercises that you like to your favorites for easier access in the future.
        </p>
      </div>
    `;return}c.favoritesList.innerHTML=o(e)}function f(e){let t=e.target.closest(`.trash-btn`);if(!t)return;let n=t.closest(`.exercise-card`).dataset.id,r=i(s)||[];r=r.filter(e=>e._id!==n),a(s,r),d()}l();
//# sourceMappingURL=favorites.js.map