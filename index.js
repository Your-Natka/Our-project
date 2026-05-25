import{n as e}from"./assets/rolldown-runtime-BDqkOrsv.js";import{a as t,i as n,n as r,o as i,r as a,t as ee}from"./assets/scroll.up-45wtBwJW.js";import{t as o}from"./assets/vendor-BQcEvRoX.js";var s=e(o(),1);async function c(e,t=1,n=12){return i(`/filters?filter=${encodeURIComponent(e)}&page=${t}&limit=${n}`)}function l(e,t){t.innerHTML=e.map(({name:e,filter:t,imgURL:n})=>`
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
    `).join(``)}function u(e=``){return i(`/exercises?${e}`)}function d(e,t){t.innerHTML=e.map(e=>`
        <li class="exercise-card" data-id="${e._id}">
          <div class="card-header">
            <div class="badge-wrapper">
              <span class="workout-badge">Workout</span>
              <span class="card-rating">
                ${Number(e.rating).toFixed(1)}
                <svg class="star-icon active" width="18" height="18">
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
      `).join(``)}var f=document.querySelector(`#section-search-box`),p=f?.querySelector(`.search-input`);function m(e){!f||!p||typeof e!=`function`||f.addEventListener(`submit`,t=>{t.preventDefault(),e(p.value.trim())})}function h(){if(f){f.reset();return}p&&(p.value=``)}var g={Muscles:{"Upper arms":`biceps`,"Lower arms":`triceps`,Abs:`abs`,Back:`lats`,Chest:`pectorals`,Legs:`quads`},"Body parts":{Back:`back`,Chest:`chest`,Waist:`waist`},Equipment:{"Body weight":`body-weight`,Dumbbell:`dumbbell`,Barbell:`barbell`}},_={exercisesContainer:document.querySelector(`#exercises-list`),errorBlock:document.querySelector(`#exercises-error`),errorText:document.querySelector(`#exercises-error .error-text`),pagination:document.querySelector(`#exercises-pagination`)},v=`Muscles`,y=1,b=`Nothing was found for your request. Please try another word`,x={Muscles:`muscles`,"Body parts":`bodypart`,Equipment:`equipment`},S=v,C=``,w=``,T=y;function E(){m(A),_.exercisesContainer?.addEventListener(`click`,D)}async function D(e){let t=e.target.closest(`.start-btn`);if(!t)return;let n=t.closest(`.exercise-card`)?.dataset?.id;n&&a(n)}async function O(e,t=v){S=t,C=e,w=``,T=y,h(),await j()}function k(){C=``,w=``,T=y,I(),h()}async function A(e){C&&(w=e,T=y,await j())}async function j(){if(!(!_.exercisesContainer||!_.errorBlock))try{R(),P(),t(_.exercisesContainer);let e=await u(M()),n=e.results||[];if(!n.length){L();return}F(),d(n,_.exercisesContainer),r(e.page,e.totalPages,_.pagination,N)}catch(e){console.error(e),L()}finally{n(_.exercisesContainer)}}function M(){let e=new URLSearchParams,t=x[S]||x[v],n=g?.[S]?.[C]||C.toLowerCase();e.set(t,n),w&&e.set(`keyword`,w),e.set(`page`,T);let r=window.innerWidth<768?8:10;return e.set(`limit`,r),e.toString()}function N(e){T=e,j()}function P(){_.pagination&&(_.pagination.innerHTML=``)}function F(){_.exercisesContainer.classList.add(`is-exercises-view`)}function I(){_.exercisesContainer?.classList.remove(`is-exercises-view`)}function L(){F(),_.exercisesContainer.innerHTML=``,_.errorText&&(_.errorText.textContent=b),_.errorBlock.classList.remove(`is-hidden`),P()}function R(){_.errorBlock.classList.add(`is-hidden`)}var z={title:document.getElementById(`section-title`),subtitle:document.getElementById(`section-subtitle`),filterList:document.getElementById(`section-filter-list`),searchBox:document.getElementById(`section-search-box`)};function B(e){z.title&&z.title.addEventListener(`click`,()=>{z.subtitle&&z.subtitle.textContent&&e()})}function V(e,t){z.title&&(z.subtitle&&=(z.title.innerHTML=`${e}<span class="section-subtitle" id="section-subtitle">${t?` / `+t:``}</span>`,document.getElementById(`section-subtitle`)))}function H(e){z.filterList&&(e?z.filterList.classList.remove(`is-hidden`):z.filterList.classList.add(`is-hidden`))}function U(e){z.searchBox&&(e?z.searchBox.classList.remove(`is-hidden`):z.searchBox.classList.add(`is-hidden`))}var W={filterList:document.getElementById(`section-filter-list`),categoriesList:document.getElementById(`exercises-list`),errorBlock:document.getElementById(`exercises-error`),pagination:document.getElementById(`exercises-pagination`)},G=`Muscles`,K=1;async function q(){if(!W.filterList||!W.categoriesList){console.warn(`DOM-елементи для ініціалізації лісенерів фільтрів не знайдені.`);return}W.filterList.addEventListener(`click`,X),W.categoriesList.addEventListener(`click`,Z),B(Q),await J(G)}async function J(e){if(!(!W.categoriesList||!W.errorBlock))try{W.errorBlock.classList.add(`is-hidden`),W.categoriesList.classList.remove(`is-hidden`),V(`Exercises`),H(!0),U(!1),k(),t(W.categoriesList);let n=window.innerWidth<768?9:12,i=await c(e,K,n);if(i.results.length===0){$();return}l(i.results,W.categoriesList),W.pagination&&r(K,i.totalPages,W.pagination,Y)}catch(e){console.error(`Помилка завантаження категорій:`,e),$()}finally{n(W.categoriesList)}}function Y(e){K=e,J(G)}async function X(e){let t=e.target;if(t.nodeName!==`BUTTON`||!W.filterList)return;let n=t;G=n.dataset.filter||`Muscles`,K=1;let r=W.filterList.querySelector(`.filter-btn.active`);r&&(r.classList.remove(`active`),r.setAttribute(`aria-selected`,`false`)),n.classList.add(`active`),n.setAttribute(`aria-selected`,`true`),V(`Exercises`),await J(G)}function Z(e){let t=e.target.closest(`.category-card`);if(!t||!W.categoriesList)return;let n=t.dataset.category||``;V(`Exercises`,n.charAt(0).toUpperCase()+n.slice(1)),H(!0),U(!0),W.categoriesList.innerHTML=``,O(n,G)}function Q(){V(`Exercises`),H(!0),U(!1),k(),K=1,J(G)}function $(){W.categoriesList&&W.errorBlock&&(W.categoriesList.innerHTML=``,W.errorBlock.classList.remove(`is-hidden`))}async function te(){t();try{E(),await Promise.all([ee(),q()])}catch(e){console.error(e)}finally{n()}}te();function ne(){let e=document.getElementById(`footer-subscribe-form`);e&&e.addEventListener(`submit`,async r=>{r.preventDefault();let i=e.elements.namedItem(`email`);if(!i)return;let a=i.value.trim();t();try{let t=await fetch(`https://your-energy.b.goit.study/api/subscription`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({email:a})});if(t.status===201){s.default.success({title:`Success`,message:`We're excited to have you on board! 🎉`,position:`topRight`}),e.reset();return}if(t.status===409){s.default.error({title:`Error`,message:`This email is already subscribed to the newsletter!`,position:`topRight`}),e.reset();return}if(t.status===400||t.status===404){s.default.error({title:`Error`,message:`Bad request. Please check your email formatting.`,position:`topRight`});return}throw Error(`Unexpected status code`)}catch(e){s.default.error({title:`Error`,message:`A server error occurred. Please try again later.`,position:`topRight`}),console.error(`Subscription system error:`,e)}finally{n()}})}ne();
//# sourceMappingURL=index.js.map