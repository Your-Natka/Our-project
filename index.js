import"./assets/rolldown-runtime-BDqkOrsv.js";import{a as e,i as t,n,r,t as i}from"./assets/scroll.up-D-TJV4y_.js";import{t as a}from"./assets/vendor-BQcEvRoX.js";a();async function o(t,n=1,r=12){return e(`/filters?filter=${encodeURIComponent(t)}&page=${n}&limit=${r}`)}function s(e,t){t.innerHTML=e.map(({name:e,filter:t,imgURL:n})=>`
      <li class="category-card" data-category="${e}">
        <div class="category-card-bg" style="
          background-image:
          linear-gradient(
            0deg,
            rgba(17, 17, 17, 0.5),
            rgba(17, 17, 17, 0.5)
          ),
          url('${n}');
        "></div>

        <div class="category-card-content">
          <h3 class="category-name">${e}</h3>
          <p class="category-filter">${t}</p>
        </div>
      </li>
    `).join(``)}function c(t=``){return e(`/exercises?${t}`)}function l(e,t){t.innerHTML=e.map(e=>`
        <li class="exercise-card" data-id="${e._id}">
          <div class="card-header">
            <div class="badge-wrapper">
              <span class="workout-badge">Workout</span>
              <span class="card-rating">
                ${Number(e.rating).toFixed(1)}
                <svg class="star-icon" width="18" height="18">
                  <use href="./sprite.svg#icon-star"></use>
                </svg>
              </span>
            </div>
            <button class="start-btn" type="button">
              Start
              <svg class="arrow-icon" width="16" height="16">
                <use href="./sprite.svg#icon-arrow"></use>
              </svg>
            </button>
          </div>

          <div class="card-title-wrapper">
            <div class="runner-icon-wrapper">
              <svg class="runner-icon" width="14" height="16">
                <use href="./sprite.svg#icon-runner"></use>
              </svg>
            </div>
            <h3 class="exercise-name">${e.name}</h3>
          </div>

          <ul class="card-info-list">
            <li class="card-info-item item-calories">
              <span class="info-label">Burned calories:</span> ${e.burnedCalories||0} / ${e.time||3} min
            </li>
            <li class="card-info-item item-body-part">
              <span class="info-label">Body part:</span> <span class="capitalize-text">${e.bodyPart}</span>
            </li>
            <li class="card-info-item item-target">
              <span class="info-label">Target:</span> <span class="capitalize-text">${e.target}</span>
            </li>
          </ul>
        </li>
      `).join(``)}var u=document.querySelector(`#section-search-box`),d=u?.querySelector(`.search-input`);function f(e){!u||!d||typeof e!=`function`||u.addEventListener(`submit`,t=>{t.preventDefault(),e(d.value.trim())})}function p(){if(u){u.reset();return}d&&(d.value=``)}function m(e,t,n,r){if(t<=1){n.innerHTML=``;return}let i=[];window.innerWidth<768?(i=[e],e<t&&i.push(e+1),e+1<t&&i.push(e+2)):e<=3?(i=[1,2,3],t>3&&(i.push(`...`),i.push(t))):i=e>=t-2?[1,`...`,t-2,t-1,t]:[1,`...`,e-1,e,e+1,`...`,t],n.innerHTML=`
    <div class="pagination-side">
      <!-- FIRST -->
      <button
        class="pagination-arrow"
        data-page="1"
        ${e===1?`disabled`:``}
      >
        &laquo;
      </button>

      <!-- PREV -->
      <button
        class="pagination-arrow"
        data-page="${e-1}"
        ${e===1?`disabled`:``}
      >
        &lsaquo;
      </button>
    </div>

    <div class="pagination-pages">
      ${i.map(t=>t===`...`?`<span class="pagination-dots">...</span>`:`
            <button
              class="pagination-btn ${t===e?`active`:``}"
              data-page="${t}"
            >
              ${t}
            </button>
          `).join(``)}
    </div>

    <div class="pagination-side">
      <!-- NEXT -->
      <button
        class="pagination-arrow"
        data-page="${e+1}"
        ${e===t?`disabled`:``}
      >
        &rsaquo;
      </button>

      <!-- LAST -->
      <button
        class="pagination-arrow"
        data-page="${t}"
        ${e===t?`disabled`:``}
      >
        &raquo;
      </button>
    </div>
  `,n.querySelectorAll(`button`).forEach(t=>{t.addEventListener(`click`,()=>{let n=Number(t.dataset.page);!n||n===e||r(n)})})}var h={Muscles:{"Upper arms":`biceps`,"Lower arms":`triceps`,Abs:`abs`,Back:`lats`,Chest:`pectorals`,Legs:`quads`},"Body parts":{Back:`back`,Chest:`chest`,Waist:`waist`},Equipment:{"Body weight":`body-weight`,Dumbbell:`dumbbell`,Barbell:`barbell`}},g={exercisesContainer:document.querySelector(`#exercises-list`),errorBlock:document.querySelector(`#exercises-error`),errorText:document.querySelector(`#exercises-error .error-text`),pagination:document.querySelector(`#exercises-pagination`)},_=`Muscles`,v=1,y=10,b=`Нічого не знайдено за вашим запитом. Спробуйте інше слово`,x={Muscles:`target`,"Body parts":`bodypart`,Equipment:`equipment`},S=_,C=``,w=``,T=v;function E(){f(A),g.exercisesContainer?.addEventListener(`click`,D)}async function D(e){let t=e.target.closest(`.start-btn`);if(!t)return;let r=t.closest(`.exercise-card`)?.dataset?.id;r&&n(r)}async function O(e,t=_){S=t,C=e,w=``,T=v,p(),await j()}function k(){C=``,w=``,T=v,I(),p()}async function A(e){C&&(w=e,T=v,await j())}async function j(){if(!(!g.exercisesContainer||!g.errorBlock))try{R(),P(),t(g.exercisesContainer),console.log(`EXERCISES DEBUG:`,{filterType:S,filterParam:x[S],category:C,query:M()});let e=await c(M()),n=e.results||[];if(!n.length){L();return}F(),l(n,g.exercisesContainer),m(e.page,e.totalPages,g.pagination,N)}catch(e){console.error(e),L()}finally{r(g.exercisesContainer)}}function M(){let e=new URLSearchParams,t=x[S]||x[_],n=h?.[S]?.[C]||C.toLowerCase();return e.set(t,n),w&&e.set(`keyword`,w),e.set(`page`,T),e.set(`limit`,y),e.toString()}function N(e){T=e,j()}function P(){g.pagination&&(g.pagination.innerHTML=``)}function F(){g.exercisesContainer.classList.add(`is-exercises-view`)}function I(){g.exercisesContainer?.classList.remove(`is-exercises-view`)}function L(){F(),g.exercisesContainer.innerHTML=``,g.errorText&&(g.errorText.textContent=b),g.errorBlock.classList.remove(`is-hidden`),P()}function R(){g.errorBlock.classList.add(`is-hidden`)}var z={title:document.getElementById(`section-title`),subtitle:document.getElementById(`section-subtitle`),filterList:document.getElementById(`section-filter-list`),searchBox:document.getElementById(`section-search-box`)};function B(e){z.title&&z.title.addEventListener(`click`,()=>{z.subtitle&&z.subtitle.textContent&&e()})}function V(e,t){z.title&&(z.subtitle&&=(z.title.innerHTML=`${e}<span class="section-subtitle" id="section-subtitle">${t?` / `+t:``}</span>`,document.getElementById(`section-subtitle`)))}function H(e){z.filterList&&(e?z.filterList.classList.remove(`is-hidden`):z.filterList.classList.add(`is-hidden`))}function U(e){z.searchBox&&(e?z.searchBox.classList.remove(`is-hidden`):z.searchBox.classList.add(`is-hidden`))}var W={filterList:document.getElementById(`section-filter-list`),categoriesList:document.getElementById(`exercises-list`),errorBlock:document.getElementById(`exercises-error`),pagination:document.getElementById(`exercises-pagination`)},G=`Muscles`,K=1;async function q(){if(!W.filterList||!W.categoriesList){console.warn(`DOM-елементи для ініціалізації лісенерів фільтрів не знайдені.`);return}W.filterList.addEventListener(`click`,Y),W.categoriesList.addEventListener(`click`,X),B(Z),await J(G)}async function J(e){if(!(!W.categoriesList||!W.errorBlock))try{W.errorBlock.classList.add(`is-hidden`),W.categoriesList.classList.remove(`is-hidden`),V(`Exercises`),H(!0),U(!1),k(),t(W.categoriesList);let n=window.innerWidth<768?9:12,r=await o(e,K,n);if(r.results.length===0){Q();return}s(r.results,W.categoriesList),W.pagination&&m(r.totalPages,K,W.pagination)}catch(e){console.error(`Помилка завантаження категорій:`,e),Q()}finally{r(W.categoriesList)}}async function Y(e){let t=e.target;if(t.nodeName!==`BUTTON`||!W.filterList)return;let n=t;G=n.dataset.filter||`Muscles`,K=1;let r=W.filterList.querySelector(`.filter-btn.active`);r&&(r.classList.remove(`active`),r.setAttribute(`aria-selected`,`false`)),n.classList.add(`active`),n.setAttribute(`aria-selected`,`true`),V(`Exercises`),await J(G)}function X(e){let t=e.target.closest(`.category-card`);if(!t||!W.categoriesList)return;let n=t.dataset.category||``;V(`Exercises`,n.charAt(0).toUpperCase()+n.slice(1)),H(!0),U(!0),W.categoriesList.innerHTML=``,O(n,G)}function Z(){V(`Exercises`),H(!0),U(!1),k(),K=1,J(G)}function Q(){W.categoriesList&&W.errorBlock&&(W.categoriesList.innerHTML=``,W.errorBlock.classList.remove(`is-hidden`))}async function $(){t();try{E(),await Promise.all([i(),q()])}catch(e){console.error(e)}finally{r()}}$();function ee(){let e=document.getElementById(`footer-subscribe-form`);e&&e.addEventListener(`submit`,async n=>{n.preventDefault();let i=e.elements.namedItem(`email`);if(!i)return;let a=i.value.trim();t();try{let t=await fetch(`https://your-energy.b.goit.study/api/subscription`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({email:a})});if(t.status===201){alert(`We're excited to have you on board! 🎉`),e.reset();return}if(t.status===409){alert(`This email is already subscribed to the newsletter!`);return}if(t.status===400||t.status===404){alert(`Bad request. Please check your email formatting.`);return}throw Error(`Unexpected status code`)}catch(e){alert(`A server error occurred. Please try again later.`),console.error(`Subscription system error:`,e)}finally{r()}})}ee();
//# sourceMappingURL=index.js.map