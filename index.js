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
  `,n.querySelectorAll(`button`).forEach(t=>{t.addEventListener(`click`,()=>{let n=Number(t.dataset.page);!n||n===e||r(n)})})}var h={Muscles:{"Upper arms":`biceps`,"Lower arms":`triceps`,Abs:`abs`,Back:`lats`,Chest:`pectorals`,Legs:`quads`},"Body parts":{Back:`back`,Chest:`chest`,Waist:`waist`},Equipment:{"Body weight":`body-weight`,Dumbbell:`dumbbell`,Barbell:`barbell`}},g={exercisesContainer:document.querySelector(`#exercises-list`),errorBlock:document.querySelector(`#exercises-error`),errorText:document.querySelector(`#exercises-error .error-text`),pagination:document.querySelector(`#exercises-pagination`)},_=`Muscles`,v=1,y=`Нічого не знайдено за вашим запитом. Спробуйте інше слово`,b={Muscles:`target`,"Body parts":`bodypart`,Equipment:`equipment`},x=_,S=``,C=``,w=v;function T(){f(k),g.exercisesContainer?.addEventListener(`click`,E)}async function E(e){let t=e.target.closest(`.start-btn`);if(!t)return;let r=t.closest(`.exercise-card`)?.dataset?.id;r&&n(r)}async function D(e,t=_){x=t,S=e,C=``,w=v,p(),await A()}function O(){S=``,C=``,w=v,F(),p()}async function k(e){S&&(C=e,w=v,await A())}async function A(){if(!(!g.exercisesContainer||!g.errorBlock))try{L(),N(),t(g.exercisesContainer),console.log(`EXERCISES DEBUG:`,{filterType:x,filterParam:b[x],category:S,query:j()});let e=await c(j()),n=e.results||[];if(!n.length){I();return}P(),l(n,g.exercisesContainer),m(e.page,e.totalPages,g.pagination,M)}catch(e){console.error(e),I()}finally{r(g.exercisesContainer)}}function j(){let e=new URLSearchParams,t=b[x]||b[_],n=h?.[x]?.[S]||S.toLowerCase();e.set(t,n),C&&e.set(`keyword`,C),e.set(`page`,w);let r=window.innerWidth<768?8:10;return e.set(`limit`,r),e.toString()}function M(e){w=e,A()}function N(){g.pagination&&(g.pagination.innerHTML=``)}function P(){g.exercisesContainer.classList.add(`is-exercises-view`)}function F(){g.exercisesContainer?.classList.remove(`is-exercises-view`)}function I(){P(),g.exercisesContainer.innerHTML=``,g.errorText&&(g.errorText.textContent=y),g.errorBlock.classList.remove(`is-hidden`),N()}function L(){g.errorBlock.classList.add(`is-hidden`)}var R={title:document.getElementById(`section-title`),subtitle:document.getElementById(`section-subtitle`),filterList:document.getElementById(`section-filter-list`),searchBox:document.getElementById(`section-search-box`)};function z(e){R.title&&R.title.addEventListener(`click`,()=>{R.subtitle&&R.subtitle.textContent&&e()})}function B(e,t){R.title&&(R.subtitle&&=(R.title.innerHTML=`${e}<span class="section-subtitle" id="section-subtitle">${t?` / `+t:``}</span>`,document.getElementById(`section-subtitle`)))}function V(e){R.filterList&&(e?R.filterList.classList.remove(`is-hidden`):R.filterList.classList.add(`is-hidden`))}function H(e){R.searchBox&&(e?R.searchBox.classList.remove(`is-hidden`):R.searchBox.classList.add(`is-hidden`))}var U={filterList:document.getElementById(`section-filter-list`),categoriesList:document.getElementById(`exercises-list`),errorBlock:document.getElementById(`exercises-error`),pagination:document.getElementById(`exercises-pagination`)},W=`Muscles`,G=1;async function K(){if(!U.filterList||!U.categoriesList){console.warn(`DOM-елементи для ініціалізації лісенерів фільтрів не знайдені.`);return}U.filterList.addEventListener(`click`,J),U.categoriesList.addEventListener(`click`,Y),z(X),await q(W)}async function q(e){if(!(!U.categoriesList||!U.errorBlock))try{U.errorBlock.classList.add(`is-hidden`),U.categoriesList.classList.remove(`is-hidden`),B(`Exercises`),V(!0),H(!1),O(),t(U.categoriesList);let n=window.innerWidth<768?9:12,r=await o(e,G,n);if(r.results.length===0){Z();return}s(r.results,U.categoriesList),U.pagination&&m(r.totalPages,G,U.pagination)}catch(e){console.error(`Помилка завантаження категорій:`,e),Z()}finally{r(U.categoriesList)}}async function J(e){let t=e.target;if(t.nodeName!==`BUTTON`||!U.filterList)return;let n=t;W=n.dataset.filter||`Muscles`,G=1;let r=U.filterList.querySelector(`.filter-btn.active`);r&&(r.classList.remove(`active`),r.setAttribute(`aria-selected`,`false`)),n.classList.add(`active`),n.setAttribute(`aria-selected`,`true`),B(`Exercises`),await q(W)}function Y(e){let t=e.target.closest(`.category-card`);if(!t||!U.categoriesList)return;let n=t.dataset.category||``;B(`Exercises`,n.charAt(0).toUpperCase()+n.slice(1)),V(!0),H(!0),U.categoriesList.innerHTML=``,D(n,W)}function X(){B(`Exercises`),V(!0),H(!1),O(),G=1,q(W)}function Z(){U.categoriesList&&U.errorBlock&&(U.categoriesList.innerHTML=``,U.errorBlock.classList.remove(`is-hidden`))}async function Q(){t();try{T(),await Promise.all([i(),K()])}catch(e){console.error(e)}finally{r()}}Q();function $(){let e=document.getElementById(`footer-subscribe-form`);e&&e.addEventListener(`submit`,async n=>{n.preventDefault();let i=e.elements.namedItem(`email`);if(!i)return;let a=i.value.trim();t();try{let t=await fetch(`https://your-energy.b.goit.study/api/subscription`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({email:a})});if(t.status===201){alert(`We're excited to have you on board! 🎉`),e.reset();return}if(t.status===409){alert(`This email is already subscribed to the newsletter!`);return}if(t.status===400||t.status===404){alert(`Bad request. Please check your email formatting.`);return}throw Error(`Unexpected status code`)}catch(e){alert(`A server error occurred. Please try again later.`),console.error(`Subscription system error:`,e)}finally{r()}})}$();
//# sourceMappingURL=index.js.map