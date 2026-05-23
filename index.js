import"./assets/rolldown-runtime-BDqkOrsv.js";import{n as e,r as t,t as n}from"./assets/scroll.up-DkeM1kcF.js";import{t as r}from"./assets/vendor-BQcEvRoX.js";r();async function i(e,n=1,r=12){return t(`/filters?filter=${encodeURIComponent(e)}&page=${n}&limit=${r}`)}function a(e,t){t.innerHTML=e.map(({name:e,filter:t,imgURL:n})=>`
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
    `).join(``)}function o(e=``){return t(`/exercises?${e}`)}function s(e,t){t.innerHTML=e.map(e=>`
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
      `).join(``)}var c=document.querySelector(`#section-search-box`),l=c?.querySelector(`.search-input`);function u(e){!c||!l||typeof e!=`function`||c.addEventListener(`submit`,t=>{t.preventDefault(),e(l.value.trim())})}function d(){if(c){c.reset();return}l&&(l.value=``)}function f(e,t,n,r){let i=[];if(window.innerWidth<768)for(let n=Math.max(1,e-1);n<=Math.min(t,e+1);n++)i.push(n);else{for(let e=1;e<=Math.min(5,t);e++)i.push(e);t>5&&(i.push(`...`),i.push(t))}n.innerHTML=`
    <button 
      class="pagination-arrow"
      data-page="${e-1}"
      ${e===1?`disabled`:``}
    >
      <
    </button>

    ${i.map(t=>`
          <button
            class="pagination-btn ${t===e?`active`:``}"
            data-page="${t}"
            ${t===`...`?`disabled`:``}
          >
            ${t}
          </button>
        `).join(``)}

    <button
      class="pagination-arrow"
      data-page="${e+1}"
      ${e===t?`disabled`:``}
    >
      >
    </button>
  `,n.querySelectorAll(`button`).forEach(e=>{e.addEventListener(`click`,()=>{let t=Number(e.dataset.page);t&&r(t)})})}var p={Muscles:{"Upper arms":`biceps`,"Lower arms":`triceps`,Abs:`abs`,Back:`lats`,Chest:`pectorals`,Legs:`quads`},"Body parts":{Back:`back`,Chest:`chest`,Waist:`waist`},Equipment:{"Body weight":`body-weight`,Dumbbell:`dumbbell`,Barbell:`barbell`}},m={exercisesContainer:document.querySelector(`#exercises-list`),errorBlock:document.querySelector(`#exercises-error`),errorText:document.querySelector(`#exercises-error .error-text`),pagination:document.querySelector(`#exercises-pagination`)},h=`Muscles`,g=1,_=10,v=`Нічого не знайдено за вашим запитом. Спробуйте інше слово`,y={Muscles:`target`,"Body parts":`bodypart`,Equipment:`equipment`},b=h,x=``,S=``,C=g;function w(){u(O),m.exercisesContainer?.addEventListener(`click`,T)}async function T(t){let n=t.target.closest(`.start-btn`);if(!n)return;let r=n.closest(`.exercise-card`)?.dataset?.id;r&&e(r)}async function E(e,t=h){b=t,x=e,S=``,C=g,d(),await k()}function D(){x=``,S=``,C=g,P(),d()}async function O(e){x&&(S=e,C=g,await k())}async function k(){if(!(!m.exercisesContainer||!m.errorBlock))try{I(),M(),console.log(`EXERCISES DEBUG:`,{filterType:b,filterParam:y[b],category:x,query:A()});let e=await o(A()),t=e.results||[];if(!t.length){F();return}N(),s(t,m.exercisesContainer),f(e.page,e.totalPages,m.pagination,j)}catch(e){console.error(e),F()}}function A(){let e=new URLSearchParams,t=y[b]||y[h],n=p?.[b]?.[x]||x.toLowerCase();return e.set(t,n),S&&e.set(`keyword`,S),e.set(`page`,C),e.set(`limit`,_),e.toString()}function j(e){C=e,k()}function M(){m.pagination&&(m.pagination.innerHTML=``)}function N(){m.exercisesContainer.classList.add(`is-exercises-view`)}function P(){m.exercisesContainer?.classList.remove(`is-exercises-view`)}function F(){N(),m.exercisesContainer.innerHTML=``,m.errorText&&(m.errorText.textContent=v),m.errorBlock.classList.remove(`is-hidden`),M()}function I(){m.errorBlock.classList.add(`is-hidden`)}var L={title:document.getElementById(`section-title`),subtitle:document.getElementById(`section-subtitle`),filterList:document.getElementById(`section-filter-list`),searchBox:document.getElementById(`section-search-box`)};function R(e){L.title&&L.title.addEventListener(`click`,()=>{L.subtitle&&L.subtitle.textContent&&e()})}function z(e,t){L.title&&(L.subtitle&&=(L.title.innerHTML=`${e}<span class="section-subtitle" id="section-subtitle">${t?` / `+t:``}</span>`,document.getElementById(`section-subtitle`)))}function B(e){L.filterList&&(e?L.filterList.classList.remove(`is-hidden`):L.filterList.classList.add(`is-hidden`))}function V(e){L.searchBox&&(e?L.searchBox.classList.remove(`is-hidden`):L.searchBox.classList.add(`is-hidden`))}var H={filterList:document.getElementById(`section-filter-list`),categoriesList:document.getElementById(`exercises-list`),errorBlock:document.getElementById(`exercises-error`),pagination:document.getElementById(`exercises-pagination`)},U=`Muscles`,W=1;function G(){if(!H.filterList||!H.categoriesList){console.warn(`DOM-елементи для ініціалізації лісенерів фільтрів не знайдені.`);return}H.filterList.addEventListener(`click`,q),H.categoriesList.addEventListener(`click`,J),R(Y),K(U)}async function K(e){if(!(!H.categoriesList||!H.errorBlock))try{H.errorBlock.classList.add(`is-hidden`),H.categoriesList.classList.remove(`is-hidden`),z(`Exercises`),B(!0),V(!1),D();let t=window.innerWidth<768?9:12,n=await i(e,W,t);if(n.results.length===0){X();return}a(n.results,H.categoriesList),H.pagination&&f(n.totalPages,W,H.pagination)}catch(e){console.error(`Помилка завантаження категорій:`,e),X()}}async function q(e){let t=e.target;if(t.nodeName!==`BUTTON`||!H.filterList)return;let n=t;U=n.dataset.filter||`Muscles`,W=1;let r=H.filterList.querySelector(`.filter-btn.active`);r&&(r.classList.remove(`active`),r.setAttribute(`aria-selected`,`false`)),n.classList.add(`active`),n.setAttribute(`aria-selected`,`true`),z(`Exercises`),await K(U)}function J(e){let t=e.target.closest(`.category-card`);if(!t||!H.categoriesList)return;let n=t.dataset.category||``;z(`Exercises`,n.charAt(0).toUpperCase()+n.slice(1)),B(!0),V(!0),H.categoriesList.innerHTML=``,E(n,U)}function Y(){z(`Exercises`),B(!0),V(!1),D(),W=1,K(U)}function X(){H.categoriesList&&H.errorBlock&&(H.categoriesList.innerHTML=``,H.errorBlock.classList.remove(`is-hidden`))}async function Z(){try{n(),G(),w()}catch(e){console.error(e)}}Z();function Q(){let e=document.getElementById(`footer-subscribe-form`);e&&e.addEventListener(`submit`,async t=>{t.preventDefault();let n=e.elements.namedItem(`email`);if(!n)return;let r=n.value.trim();try{let t=await fetch(`https://your-energy.b.goit.study/api/subscription`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({email:r})});if(t.status===201){alert(`We're excited to have you on board! 🎉`),e.reset();return}if(t.status===409){alert(`This email is already subscribed to the newsletter!`);return}if(t.status===400||t.status===404){alert(`Bad request. Please check your email formatting.`);return}throw Error(`Unexpected status code`)}catch(e){alert(`A server error occurred. Please try again later.`),console.error(`Subscription system error:`,e)}})}Q();
//# sourceMappingURL=index.js.map