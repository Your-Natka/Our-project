import"./assets/rolldown-runtime-BDqkOrsv.js";import{a as e,i as t,n,o as r,r as i,t as a}from"./assets/scroll.up-B11Vjeht.js";import{t as o}from"./assets/vendor-BQcEvRoX.js";o();async function s(e,t=1,n=12){return r(`/filters?filter=${encodeURIComponent(e)}&page=${t}&limit=${n}`)}function c(e,t){t.innerHTML=e.map(({name:e,filter:t,imgURL:n})=>`
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
    `).join(``)}function l(e=``){return r(`/exercises?${e}`)}function u(e,t){t.innerHTML=e.map(e=>`
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
      `).join(``)}var d=document.querySelector(`#section-search-box`),f=d?.querySelector(`.search-input`);function p(e){!d||!f||typeof e!=`function`||d.addEventListener(`submit`,t=>{t.preventDefault(),e(f.value.trim())})}function m(){if(d){d.reset();return}f&&(f.value=``)}var h={Muscles:{"Upper arms":`biceps`,"Lower arms":`triceps`,Abs:`abs`,Back:`lats`,Chest:`pectorals`,Legs:`quads`},"Body parts":{Back:`back`,Chest:`chest`,Waist:`waist`},Equipment:{"Body weight":`body-weight`,Dumbbell:`dumbbell`,Barbell:`barbell`}},g={exercisesContainer:document.querySelector(`#exercises-list`),errorBlock:document.querySelector(`#exercises-error`),errorText:document.querySelector(`#exercises-error .error-text`),pagination:document.querySelector(`#exercises-pagination`)},_=`Muscles`,v=1,y=`Нічого не знайдено за вашим запитом. Спробуйте інше слово`,b={Muscles:`target`,"Body parts":`bodypart`,Equipment:`equipment`},x=_,S=``,C=``,w=v;function T(){p(k),g.exercisesContainer?.addEventListener(`click`,E)}async function E(e){let t=e.target.closest(`.start-btn`);if(!t)return;let n=t.closest(`.exercise-card`)?.dataset?.id;n&&i(n)}async function D(e,t=_){x=t,S=e,C=``,w=v,m(),await A()}function O(){S=``,C=``,w=v,F(),m()}async function k(e){S&&(C=e,w=v,await A())}async function A(){if(!(!g.exercisesContainer||!g.errorBlock))try{L(),N(),e(g.exercisesContainer),console.log(`EXERCISES DEBUG:`,{filterType:x,filterParam:b[x],category:S,query:j()});let t=await l(j()),r=t.results||[];if(!r.length){I();return}P(),u(r,g.exercisesContainer),n(t.page,t.totalPages,g.pagination,M)}catch(e){console.error(e),I()}finally{t(g.exercisesContainer)}}function j(){let e=new URLSearchParams,t=b[x]||b[_],n=h?.[x]?.[S]||S.toLowerCase();e.set(t,n),C&&e.set(`keyword`,C),e.set(`page`,w);let r=window.innerWidth<768?8:10;return e.set(`limit`,r),e.toString()}function M(e){w=e,A()}function N(){g.pagination&&(g.pagination.innerHTML=``)}function P(){g.exercisesContainer.classList.add(`is-exercises-view`)}function F(){g.exercisesContainer?.classList.remove(`is-exercises-view`)}function I(){P(),g.exercisesContainer.innerHTML=``,g.errorText&&(g.errorText.textContent=y),g.errorBlock.classList.remove(`is-hidden`),N()}function L(){g.errorBlock.classList.add(`is-hidden`)}var R={title:document.getElementById(`section-title`),subtitle:document.getElementById(`section-subtitle`),filterList:document.getElementById(`section-filter-list`),searchBox:document.getElementById(`section-search-box`)};function z(e){R.title&&R.title.addEventListener(`click`,()=>{R.subtitle&&R.subtitle.textContent&&e()})}function B(e,t){R.title&&(R.subtitle&&=(R.title.innerHTML=`${e}<span class="section-subtitle" id="section-subtitle">${t?` / `+t:``}</span>`,document.getElementById(`section-subtitle`)))}function V(e){R.filterList&&(e?R.filterList.classList.remove(`is-hidden`):R.filterList.classList.add(`is-hidden`))}function H(e){R.searchBox&&(e?R.searchBox.classList.remove(`is-hidden`):R.searchBox.classList.add(`is-hidden`))}var U={filterList:document.getElementById(`section-filter-list`),categoriesList:document.getElementById(`exercises-list`),errorBlock:document.getElementById(`exercises-error`),pagination:document.getElementById(`exercises-pagination`)},W=`Muscles`,G=1;async function K(){if(!U.filterList||!U.categoriesList){console.warn(`DOM-елементи для ініціалізації лісенерів фільтрів не знайдені.`);return}U.filterList.addEventListener(`click`,J),U.categoriesList.addEventListener(`click`,Y),z(X),await q(W)}async function q(r){if(!(!U.categoriesList||!U.errorBlock))try{U.errorBlock.classList.add(`is-hidden`),U.categoriesList.classList.remove(`is-hidden`),B(`Exercises`),V(!0),H(!1),O(),e(U.categoriesList);let t=window.innerWidth<768?9:12,i=await s(r,G,t);if(i.results.length===0){Z();return}c(i.results,U.categoriesList),U.pagination&&n(i.totalPages,G,U.pagination)}catch(e){console.error(`Помилка завантаження категорій:`,e),Z()}finally{t(U.categoriesList)}}async function J(e){let t=e.target;if(t.nodeName!==`BUTTON`||!U.filterList)return;let n=t;W=n.dataset.filter||`Muscles`,G=1;let r=U.filterList.querySelector(`.filter-btn.active`);r&&(r.classList.remove(`active`),r.setAttribute(`aria-selected`,`false`)),n.classList.add(`active`),n.setAttribute(`aria-selected`,`true`),B(`Exercises`),await q(W)}function Y(e){let t=e.target.closest(`.category-card`);if(!t||!U.categoriesList)return;let n=t.dataset.category||``;B(`Exercises`,n.charAt(0).toUpperCase()+n.slice(1)),V(!0),H(!0),U.categoriesList.innerHTML=``,D(n,W)}function X(){B(`Exercises`),V(!0),H(!1),O(),G=1,q(W)}function Z(){U.categoriesList&&U.errorBlock&&(U.categoriesList.innerHTML=``,U.errorBlock.classList.remove(`is-hidden`))}async function Q(){e();try{T(),await Promise.all([a(),K()])}catch(e){console.error(e)}finally{t()}}Q();function $(){let n=document.getElementById(`footer-subscribe-form`);n&&n.addEventListener(`submit`,async r=>{r.preventDefault();let i=n.elements.namedItem(`email`);if(!i)return;let a=i.value.trim();e();try{let e=await fetch(`https://your-energy.b.goit.study/api/subscription`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({email:a})});if(e.status===201){alert(`We're excited to have you on board! 🎉`),n.reset();return}if(e.status===409){alert(`This email is already subscribed to the newsletter!`);return}if(e.status===400||e.status===404){alert(`Bad request. Please check your email formatting.`);return}throw Error(`Unexpected status code`)}catch(e){alert(`A server error occurred. Please try again later.`),console.error(`Subscription system error:`,e)}finally{t()}})}$();
//# sourceMappingURL=index.js.map