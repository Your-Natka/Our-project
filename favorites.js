import{a as e,i as t,n,r,t as i}from"./assets/scroll.up-BU_O6EkC.js";var a=e=>{try{let t=localStorage.getItem(e);return t===null?void 0:JSON.parse(t)}catch(e){console.error(`Error reading from localStorage:`,e.message);return}},o=(e,t)=>{try{let n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error(`Error saving to localStorage:`,e.message)}},s=e=>e.map(e=>`
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
  `).join(``),c=`favorite-exercises`,l={favoritesList:document.querySelector(`.favorites-list`),paginationContainer:document.querySelector(`.favorites-pagination`)};async function u(){if(l.favoritesList){e();try{await i(),f()}catch(e){console.error(e)}finally{t()}l.favoritesList.addEventListener(`click`,p),l.favoritesList.addEventListener(`click`,d)}}function d(e){let t=e.target.closest(`.start-btn`);if(!t)return;let n=t.closest(`.exercise-card`);if(!n)return;let i=n.dataset.id;i&&r(i)}function f(e=1){let t=a(c)||[];if(t.length===0){l.favoritesList.innerHTML=`
      <div class="favorites-empty-state">
        <p class="favorites-empty-text">
          It appears that you haven't added any exercises to your favorites yet.
          To get started, you can add exercises that you like to your favorites for easier access in the future.
        </p>
      </div>
    `,l.paginationContainer&&(l.paginationContainer.innerHTML=``);return}let r=100;window.innerWidth<768?r=8:window.innerWidth<1440&&(r=10);let i=Math.ceil(t.length/r);if(e>i){f(i);return}let o=(e-1)*r,u=t.slice(o,o+r);l.favoritesList.innerHTML=s(u),l.paginationContainer&&(i>1&&window.innerWidth<1440?n(e,i,l.paginationContainer,e=>{f(e);let t=l.favoritesList.getBoundingClientRect().top+window.scrollY;window.scrollTo({top:t-100,behavior:`smooth`})}):l.paginationContainer.innerHTML=``)}function p(e){let t=e.target.closest(`.trash-btn`);if(!t)return;let n=t.closest(`.exercise-card`).dataset.id,r=a(c)||[];r=r.filter(e=>e._id!==n),o(c,r);let i=document.querySelector(`.pagination-btn.active`);f(i?Number(i.dataset.page):1)}u();
//# sourceMappingURL=favorites.js.map