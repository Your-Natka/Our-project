import"./assets/rolldown-runtime-BDqkOrsv.js";import{n as e,t}from"./assets/quote-PHgNJtrP.js";import{t as n}from"./assets/vendor-BQcEvRoX.js";n();async function r(t,n=1,r=12){return e(`/filters?filter=${encodeURIComponent(t)}&page=${n}&limit=${r}`)}function i(e,t){t.innerHTML=e.map(({name:e,filter:t,imgURL:n})=>`
      <li class="category-card" data-category="${e}">
        <div class="category-card-bg" style="background-image: linear-gradient(0deg, rgba(17, 17, 17, 0.5), rgba(17, 17, 17, 0.5)), url('${n}');"></div>
        <div class="category-card-content">
          <h3 class="category-name">${e}</h3>
          <p class="category-filter">${t}</p>
        </div>
      </li>
    `).join(``)}function a(e,t,n){n.innerHTML=`${t} of ${e}`}function o(t=``){return e(`/exercises?${t}`)}function s(e,t){t.innerHTML=e.map(e=>`
        <div class="exercise-card">
          <div class="card-header">
            <div class="badge-wrapper">
              <span class="workout-badge">Workout</span>
              <span class="card-rating">
                ${Number(e.rating).toFixed(1)}
                <svg class="star-icon" width="18" height="18">
                  <use href="./public/sprite.svg#icon-star"></use>
                </svg>
              </span>
            </div>
            <button class="start-btn" type="button">
              Start
              <svg class="arrow-icon" width="16" height="16">
                <use href="./public/sprite.svg#icon-arrow-right"></use>
              </svg>
            </button>
          </div>

          <div class="card-title-wrapper">
            <div class="runner-icon-wrapper">
              <svg class="runner-icon" width="14" height="16">
                <use href="./public/sprite.svg#icon-runner"></use>
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
        </div>
      `).join(``)}var c=document.querySelector(`#section-search-box`),l=c?.querySelector(`.search-input`);function u(e){!c||!l||typeof e!=`function`||c.addEventListener(`submit`,t=>{t.preventDefault(),e(l.value.trim())})}function d(){if(c){c.reset();return}l&&(l.value=``)}var f={exercisesContainer:document.querySelector(`#exercises-list`),errorBlock:document.querySelector(`#exercises-error`),errorText:document.querySelector(`#exercises-error .error-text`),pagination:document.querySelector(`#exercises-pagination`)},p=`Muscles`,m=1,h=10,g=`Нічого не знайдено за вашим запитом. Спробуйте інше слово`,_={Muscles:`muscles`,"Body parts":`bodypart`,Equipment:`equipment`},v=p,y=``,b=``,x=m;function S(){u(T)}async function C(e,t=p){v=t,y=e,b=``,x=m,d(),await E()}function w(){y=``,b=``,x=m,M(),d()}async function T(e){y&&(b=e,x=m,await E())}async function E(){if(!(!f.exercisesContainer||!f.errorBlock))try{k(),A();let e=(await o(D())).results||[];if(e.length===0){O();return}j(),s(e,f.exercisesContainer)}catch{O()}}function D(){let e=new URLSearchParams,t=_[v]||_[p];return e.set(t,y.toLowerCase()),b&&e.set(`keyword`,b),e.set(`page`,x),e.set(`limit`,h),e.toString()}function O(){j(),f.exercisesContainer.innerHTML=``,f.errorText&&(f.errorText.textContent=g),f.errorBlock.classList.remove(`is-hidden`),A()}function k(){f.errorBlock.classList.add(`is-hidden`)}function A(){f.pagination&&(f.pagination.innerHTML=``)}function j(){f.exercisesContainer.classList.add(`is-exercises-view`)}function M(){f.exercisesContainer&&f.exercisesContainer.classList.remove(`is-exercises-view`)}var N={title:document.getElementById(`section-title`),subtitle:document.getElementById(`section-subtitle`),filterList:document.getElementById(`section-filter-list`),searchBox:document.getElementById(`section-search-box`)};function P(e){N.title&&N.title.addEventListener(`click`,()=>{N.subtitle&&N.subtitle.textContent&&e()})}function F(e,t){N.title&&(N.subtitle&&=(N.title.innerHTML=`${e}<span class="section-subtitle" id="section-subtitle">${t?` / `+t:``}</span>`,document.getElementById(`section-subtitle`)))}function I(e){N.filterList&&(e?N.filterList.classList.remove(`is-hidden`):N.filterList.classList.add(`is-hidden`))}function L(e){N.searchBox&&(e?N.searchBox.classList.remove(`is-hidden`):N.searchBox.classList.add(`is-hidden`))}var R={filterList:document.getElementById(`section-filter-list`),categoriesList:document.getElementById(`exercises-list`),errorBlock:document.getElementById(`exercises-error`),pagination:document.getElementById(`exercises-pagination`)},z=`Muscles`,B=1;function V(){if(!R.filterList||!R.categoriesList){console.warn(`DOM-елементи для ініціалізації лісенерів фільтрів не знайдені.`);return}R.filterList.addEventListener(`click`,U),R.categoriesList.addEventListener(`click`,W),P(G),H(z)}async function H(e){if(!(!R.categoriesList||!R.errorBlock))try{R.errorBlock.classList.add(`is-hidden`),R.categoriesList.classList.remove(`is-hidden`),F(`Exercises`),I(!0),L(!1),w();let t=window.innerWidth<768?9:12,n=await r(e,B,t);if(n.results.length===0){K();return}i(n.results,R.categoriesList),R.pagination&&a(n.totalPages,B,R.pagination)}catch(e){console.error(`Помилка завантаження категорій:`,e),K()}}async function U(e){let t=e.target;if(t.nodeName!==`BUTTON`||!R.filterList)return;let n=t;z=n.dataset.filter||`Muscles`,B=1;let r=R.filterList.querySelector(`.filter-btn.active`);r&&(r.classList.remove(`active`),r.setAttribute(`aria-selected`,`false`)),n.classList.add(`active`),n.setAttribute(`aria-selected`,`true`),F(`Exercises`),await H(z)}function W(e){let t=e.target.closest(`.category-card`);if(!t||!R.categoriesList)return;let n=t.dataset.category||``;F(`Exercises`,n.charAt(0).toUpperCase()+n.slice(1)),I(!0),L(!0),R.categoriesList.innerHTML=``,C(n,z)}function G(){F(`Exercises`),I(!0),L(!1),w(),B=1,H(z)}function K(){R.categoriesList&&R.errorBlock&&(R.categoriesList.innerHTML=``,R.errorBlock.classList.remove(`is-hidden`))}async function q(){try{t(),V(),S()}catch(e){console.error(e)}}q();function J(){let e=document.getElementById(`footer-subscribe-form`);e&&e.addEventListener(`submit`,async t=>{t.preventDefault();let n=e.elements.namedItem(`email`);if(!n)return;let r=n.value.trim();try{let t=await fetch(`https://your-energy.b.goit.study/api/subscription`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({email:r})});if(t.status===201){alert(`We're excited to have you on board! 🎉`),e.reset();return}if(t.status===409){alert(`This email is already subscribed to the newsletter!`);return}if(t.status===400||t.status===404){alert(`Bad request. Please check your email formatting.`);return}throw Error(`Unexpected status code`)}catch(e){alert(`A server error occurred. Please try again later.`),console.error(`Subscription system error:`,e)}})}J();
//# sourceMappingURL=index.js.map