import"./assets/rolldown-runtime-BDqkOrsv.js";import{n as e,r as t,t as n}from"./assets/quote-BzPD7Nzy.js";import{t as r}from"./assets/vendor-BQcEvRoX.js";r();async function i(e,n=1,r=12){return t(`/filters?filter=${encodeURIComponent(e)}&page=${n}&limit=${r}`)}function a(e,t){t.innerHTML=e.map(({name:e,filter:t,imgURL:n})=>`
      <li class="category-card" data-category="${e}">
        <div class="category-card-bg" style="background-image: linear-gradient(0deg, rgba(17, 17, 17, 0.5), rgba(17, 17, 17, 0.5)), url('${n}');"></div>
        <div class="category-card-content">
          <h3 class="category-name">${e}</h3>
          <p class="category-filter">${t}</p>
        </div>
      </li>
    `).join(``)}function o(e,t,n){n.innerHTML=`${t} of ${e}`}function s(e=``){return t(`/exercises?${e}`)}function c(e,t){t.innerHTML=e.map(e=>`
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
            <li class="card-info-item">
              <span class="info-label">Burned calories:</span> ${e.burnedCalories||0} / ${e.time||3} min
            </li>
            <li class="card-info-item">
              <span class="info-label">Body part:</span> ${e.bodyPart}
            </li>
            <li class="card-info-item">
              <span class="info-label">Target:</span> ${e.target}
            </li>
          </ul>
        </li>
      `).join(``)}var l=document.querySelector(`#section-search-box`),u=l?.querySelector(`.search-input`);function d(e){!l||!u||typeof e!=`function`||l.addEventListener(`submit`,t=>{t.preventDefault(),e(u.value.trim())})}function f(){if(l){l.reset();return}u&&(u.value=``)}var p={exercisesContainer:document.querySelector(`#exercises-list`),errorBlock:document.querySelector(`#exercises-error`),errorText:document.querySelector(`#exercises-error .error-text`),pagination:document.querySelector(`#exercises-pagination`)},m=`Muscles`,h=1,g=10,_=`Нічого не знайдено за вашим запитом. Спробуйте інше слово`,v={Muscles:`muscles`,"Body parts":`bodypart`,Equipment:`equipment`},y=m,b=``,x=``,S=h;function C(){d(D),p.exercisesContainer&&p.exercisesContainer.addEventListener(`click`,w)}async function w(t){let n=t.target.closest(`.start-btn`);if(!n)return;let r=n.closest(`.exercise-card`);if(!r)return;let i=r.dataset.id;i&&e(i)}async function T(e,t=m){y=t,b=e,x=``,S=h,f(),await O()}function E(){b=``,x=``,S=h,P(),f()}async function D(e){b&&(x=e,S=h,await O())}async function O(){if(!(!p.exercisesContainer||!p.errorBlock))try{j(),M();let e=(await s(k())).results||[];if(e.length===0){A();return}N(),c(e,p.exercisesContainer)}catch{A()}}function k(){let e=new URLSearchParams,t=v[y]||v[m];return e.set(t,b.toLowerCase()),x&&e.set(`keyword`,x),e.set(`page`,S),e.set(`limit`,g),e.toString()}function A(){N(),p.exercisesContainer.innerHTML=``,p.errorText&&(p.errorText.textContent=_),p.errorBlock.classList.remove(`is-hidden`),M()}function j(){p.errorBlock.classList.add(`is-hidden`)}function M(){p.pagination&&(p.pagination.innerHTML=``)}function N(){p.exercisesContainer.classList.add(`is-exercises-view`)}function P(){p.exercisesContainer&&p.exercisesContainer.classList.remove(`is-exercises-view`)}var F={title:document.getElementById(`section-title`),subtitle:document.getElementById(`section-subtitle`),filterList:document.getElementById(`section-filter-list`),searchBox:document.getElementById(`section-search-box`)};function I(e){F.title&&F.title.addEventListener(`click`,()=>{F.subtitle&&F.subtitle.textContent&&e()})}function L(e,t){F.title&&(F.subtitle&&=(F.title.innerHTML=`${e}<span class="section-subtitle" id="section-subtitle">${t?` / `+t:``}</span>`,document.getElementById(`section-subtitle`)))}function R(e){F.filterList&&(e?F.filterList.classList.remove(`is-hidden`):F.filterList.classList.add(`is-hidden`))}function z(e){F.searchBox&&(e?F.searchBox.classList.remove(`is-hidden`):F.searchBox.classList.add(`is-hidden`))}var B={filterList:document.getElementById(`section-filter-list`),categoriesList:document.getElementById(`exercises-list`),errorBlock:document.getElementById(`exercises-error`),pagination:document.getElementById(`exercises-pagination`)},V=`Muscles`,H=1;function U(){if(!B.filterList||!B.categoriesList){console.warn(`DOM-елементи для ініціалізації лісенерів фільтрів не знайдені.`);return}B.filterList.addEventListener(`click`,G),B.categoriesList.addEventListener(`click`,K),I(q),W(V)}async function W(e){if(!(!B.categoriesList||!B.errorBlock))try{B.errorBlock.classList.add(`is-hidden`),B.categoriesList.classList.remove(`is-hidden`),L(`Exercises`),R(!0),z(!1),E();let t=window.innerWidth<768?9:12,n=await i(e,H,t);if(n.results.length===0){J();return}a(n.results,B.categoriesList),B.pagination&&o(n.totalPages,H,B.pagination)}catch(e){console.error(`Помилка завантаження категорій:`,e),J()}}async function G(e){let t=e.target;if(t.nodeName!==`BUTTON`||!B.filterList)return;let n=t;V=n.dataset.filter||`Muscles`,H=1;let r=B.filterList.querySelector(`.filter-btn.active`);r&&(r.classList.remove(`active`),r.setAttribute(`aria-selected`,`false`)),n.classList.add(`active`),n.setAttribute(`aria-selected`,`true`),L(`Exercises`),await W(V)}function K(e){let t=e.target.closest(`.category-card`);if(!t||!B.categoriesList)return;let n=t.dataset.category||``;L(`Exercises`,n.charAt(0).toUpperCase()+n.slice(1)),R(!0),z(!0),B.categoriesList.innerHTML=``,T(n,V)}function q(){L(`Exercises`),R(!0),z(!1),E(),H=1,W(V)}function J(){B.categoriesList&&B.errorBlock&&(B.categoriesList.innerHTML=``,B.errorBlock.classList.remove(`is-hidden`))}async function Y(){try{n(),U(),C()}catch(e){console.error(e)}}Y();function X(){let e=document.getElementById(`footer-subscribe-form`);e&&e.addEventListener(`submit`,async t=>{t.preventDefault();let n=e.elements.namedItem(`email`);if(!n)return;let r=n.value.trim();try{let t=await fetch(`https://your-energy.b.goit.study/api/subscription`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({email:r})});if(t.status===201){alert(`We're excited to have you on board! 🎉`),e.reset();return}if(t.status===409){alert(`This email is already subscribed to the newsletter!`);return}if(t.status===400||t.status===404){alert(`Bad request. Please check your email formatting.`);return}throw Error(`Unexpected status code`)}catch(e){alert(`A server error occurred. Please try again later.`),console.error(`Subscription system error:`,e)}})}(function(){let e=document.querySelector(`[data-menu]`),t=document.querySelector(`[data-menu-open]`),n=document.querySelector(`[data-menu-close]`);if(!e||!t)return;let r=()=>{e.classList.add(`is-open`),e.setAttribute(`aria-hidden`,`false`),t.setAttribute(`aria-expanded`,`true`),document.body.classList.add(`is-menu-open`)},i=()=>{e.classList.remove(`is-open`),e.setAttribute(`aria-hidden`,`true`),t.setAttribute(`aria-expanded`,`false`),document.body.classList.remove(`is-menu-open`)};t.addEventListener(`click`,r),n?.addEventListener(`click`,i),e.addEventListener(`click`,t=>{t.target===e&&i()}),document.addEventListener(`keydown`,t=>{t.key===`Escape`&&e.classList.contains(`is-open`)&&i()}),window.matchMedia(`(min-width: 768px)`).addEventListener(`change`,e=>{e.matches&&i()})})(),X();
//# sourceMappingURL=index.js.map