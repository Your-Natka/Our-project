import{n as e}from"./assets/rolldown-runtime-BDqkOrsv.js";import{a as t,i as n,n as r,o as i,r as a,t as o}from"./assets/scroll.up-DfE5uHQS.js";import{t as s}from"./assets/vendor-BQcEvRoX.js";var c=e(s(),1);async function l(e,t=1,n=12){return i(`/filters?filter=${encodeURIComponent(e)}&page=${t}&limit=${n}`)}function u(e,t){t.innerHTML=e.map(({name:e,filter:t,imgURL:n})=>`
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
    `).join(``)}function d(e=``){return i(`/exercises?${e}`)}function f(e,t){t.innerHTML=e.map(e=>`
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
      `).join(``)}var p=document.querySelector(`#section-search-box`),m=p?.querySelector(`.search-input`);function h(e){!p||!m||typeof e!=`function`||p.addEventListener(`submit`,t=>{t.preventDefault(),e(m.value.trim())})}function g(){if(p){p.reset();return}m&&(m.value=``)}var _={Muscles:{"Upper arms":`biceps`,"Lower arms":`triceps`,Abs:`abs`,Back:`lats`,Chest:`pectorals`,Legs:`quads`},"Body parts":{Back:`back`,Chest:`chest`,Waist:`waist`},Equipment:{"Body weight":`body-weight`,Dumbbell:`dumbbell`,Barbell:`barbell`}},v={exercisesContainer:document.querySelector(`#exercises-list`),errorBlock:document.querySelector(`#exercises-error`),errorText:document.querySelector(`#exercises-error .error-text`),pagination:document.querySelector(`#exercises-pagination`)},y=`Muscles`,b=1,x=`Nothing was found for your request. Please try another word`,S={Muscles:`muscles`,"Body parts":`bodypart`,Equipment:`equipment`},C=y,w=``,T=``,E=b;function D(){h(j),v.exercisesContainer?.addEventListener(`click`,O)}async function O(e){let t=e.target.closest(`.start-btn`);if(!t)return;let n=t.closest(`.exercise-card`)?.dataset?.id;n&&a(n)}async function k(e,t=y){C=t,w=e,T=``,E=b,g(),await M()}function A(){w=``,T=``,E=b,L(),g()}async function j(e){w&&(T=e,E=b,await M())}async function M(){if(!(!v.exercisesContainer||!v.errorBlock))try{z(),F(),t(v.exercisesContainer),console.log(`EXERCISES DEBUG:`,{filterType:C,filterParam:S[C],category:w,query:N()});let e=await d(N()),n=e.results||[];if(!n.length){R();return}I(),f(n,v.exercisesContainer),r(e.page,e.totalPages,v.pagination,P)}catch(e){console.error(e),R()}finally{n(v.exercisesContainer)}}function N(){let e=new URLSearchParams,t=S[C]||S[y],n=_?.[C]?.[w]||w.toLowerCase();e.set(t,n),T&&e.set(`keyword`,T),e.set(`page`,E);let r=window.innerWidth<768?8:10;return e.set(`limit`,r),e.toString()}function P(e){E=e,M()}function F(){v.pagination&&(v.pagination.innerHTML=``)}function I(){v.exercisesContainer.classList.add(`is-exercises-view`)}function L(){v.exercisesContainer?.classList.remove(`is-exercises-view`)}function R(){I(),v.exercisesContainer.innerHTML=``,v.errorText&&(v.errorText.textContent=x),v.errorBlock.classList.remove(`is-hidden`),F()}function z(){v.errorBlock.classList.add(`is-hidden`)}var B={title:document.getElementById(`section-title`),subtitle:document.getElementById(`section-subtitle`),filterList:document.getElementById(`section-filter-list`),searchBox:document.getElementById(`section-search-box`)};function V(e){B.title&&B.title.addEventListener(`click`,()=>{B.subtitle&&B.subtitle.textContent&&e()})}function H(e,t){B.title&&(B.subtitle&&=(B.title.innerHTML=`${e}<span class="section-subtitle" id="section-subtitle">${t?` / `+t:``}</span>`,document.getElementById(`section-subtitle`)))}function U(e){B.filterList&&(e?B.filterList.classList.remove(`is-hidden`):B.filterList.classList.add(`is-hidden`))}function W(e){B.searchBox&&(e?B.searchBox.classList.remove(`is-hidden`):B.searchBox.classList.add(`is-hidden`))}var G={filterList:document.getElementById(`section-filter-list`),categoriesList:document.getElementById(`exercises-list`),errorBlock:document.getElementById(`exercises-error`),pagination:document.getElementById(`exercises-pagination`)},K=`Muscles`,q=1;async function J(){if(!G.filterList||!G.categoriesList){console.warn(`DOM-елементи для ініціалізації лісенерів фільтрів не знайдені.`);return}G.filterList.addEventListener(`click`,Z),G.categoriesList.addEventListener(`click`,Q),V(ee),await Y(K)}async function Y(e){if(!(!G.categoriesList||!G.errorBlock))try{G.errorBlock.classList.add(`is-hidden`),G.categoriesList.classList.remove(`is-hidden`),H(`Exercises`),U(!0),W(!1),A(),t(G.categoriesList);let n=window.innerWidth<768?9:12,i=await l(e,q,n);if(i.results.length===0){$();return}u(i.results,G.categoriesList),G.pagination&&r(q,i.totalPages,G.pagination,X)}catch(e){console.error(`Помилка завантаження категорій:`,e),$()}finally{n(G.categoriesList)}}function X(e){q=e,Y(K)}async function Z(e){let t=e.target;if(t.nodeName!==`BUTTON`||!G.filterList)return;let n=t;K=n.dataset.filter||`Muscles`,q=1;let r=G.filterList.querySelector(`.filter-btn.active`);r&&(r.classList.remove(`active`),r.setAttribute(`aria-selected`,`false`)),n.classList.add(`active`),n.setAttribute(`aria-selected`,`true`),H(`Exercises`),await Y(K)}function Q(e){let t=e.target.closest(`.category-card`);if(!t||!G.categoriesList)return;let n=t.dataset.category||``;H(`Exercises`,n.charAt(0).toUpperCase()+n.slice(1)),U(!0),W(!0),G.categoriesList.innerHTML=``,k(n,K)}function ee(){H(`Exercises`),U(!0),W(!1),A(),q=1,Y(K)}function $(){G.categoriesList&&G.errorBlock&&(G.categoriesList.innerHTML=``,G.errorBlock.classList.remove(`is-hidden`))}async function te(){t();try{D(),await Promise.all([o(),J()])}catch(e){console.error(e)}finally{n()}}te();function ne(){let e=document.getElementById(`footer-subscribe-form`);e&&e.addEventListener(`submit`,async r=>{r.preventDefault();let i=e.elements.namedItem(`email`);if(!i)return;let a=i.value.trim();t();try{let t=await fetch(`https://your-energy.b.goit.study/api/subscription`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({email:a})});if(t.status===201){c.default.success({title:`Success`,message:`We're excited to have you on board! 🎉`,position:`topRight`}),e.reset();return}if(t.status===409){c.default.error({title:`Error`,message:`This email is already subscribed to the newsletter!`,position:`topRight`}),e.reset();return}if(t.status===400||t.status===404){c.default.error({title:`Error`,message:`Bad request. Please check your email formatting.`,position:`topRight`});return}throw Error(`Unexpected status code`)}catch(e){c.default.error({title:`Error`,message:`A server error occurred. Please try again later.`,position:`topRight`}),console.error(`Subscription system error:`,e)}finally{n()}})}ne();
//# sourceMappingURL=index.js.map