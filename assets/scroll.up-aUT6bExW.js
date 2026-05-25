import{n as e}from"./rolldown-runtime-BDqkOrsv.js";import{t}from"./vendor-BQcEvRoX.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var n=e(t(),1),r=`https://your-energy.b.goit.study/api`;async function i(e){let t=await fetch(`${r}${e}`);if(!t.ok)throw Error(`HTTP error! Status: ${t.status}`);return t.json()}function a(e){return i(`/exercises/${e}`)}function o(e,t){let{_id:n,bodyPart:r,equipment:i,gifUrl:a,name:o,target:s,description:c,rating:l,burnedCalories:u,time:d,popularity:f}=e,p=a||`https://via.placeholder.com/360x300?text=No+Image`,m=t?`Remove from favorites`:`Add to favorites`,h=t?`icon-trash`:`icon-heart`;return`
    <div class="modal-content" data-id="${n}">
      <button class="modal-close-btn" type="button" data-modal-close>
        <svg class="modal-close-icon" width="24" height="24">
          <use href="./sprite.svg#icon-cross"></use>
        </svg>
      </button>

      <div class="modal-exercise-layout">
        <div class="modal-img-wrapper">
          <img src="${p}" alt="${o}" class="modal-exercise-img" />
        </div>

        <div class="modal-info-wrapper">
          <h2 class="modal-exercise-name">${o}</h2>

          <div class="modal-rating-container">
            <span class="modal-rating-value">${l.toFixed(1)}</span>
            <div class="modal-stars-wrapper" data-rating="${l}"></div>
          </div>

          <ul class="modal-stats-list">
            <li class="modal-stats-item">
              <span class="modal-stats-label">Target</span>
              <span class="modal-stats-value">${s}</span>
            </li>
            <li class="modal-stats-item">
              <span class="modal-stats-label">Body Part</span>
              <span class="modal-stats-value">${r}</span>
            </li>
            <li class="modal-stats-item">
              <span class="modal-stats-label">Equipment</span>
              <span class="modal-stats-value">${i}</span>
            </li>
            <li class="modal-stats-item">
              <span class="modal-stats-label">Popularity</span>
              <span class="modal-stats-value">${f}</span>
            </li>
            <li class="modal-stats-item">
              <span class="modal-stats-label">Burned Calories</span>
              <span class="modal-stats-value">${u} / ${d} min</span>
            </li>
          </ul>

          <p class="modal-exercise-description">${c}</p>

          <div class="modal-buttons">
            <button class="modal-action-btn" type="button" data-favorites-toggle>
              <span>${m}</span>
              <svg class="modal-action-icon" width="18" height="18">
                <use href="./sprite.svg#${h}"></use>
              </svg>
            </button>
            <button class="modal-action-btn modal-give-rating-btn" type="button">Give a rating</button>
          </div>
        </div> </div>

    </div>
  `}var s=`loader-backdrop`,c=`loader-local`,l=new WeakMap,u=0;function d(e){if(e instanceof Element){h(e);return}p()}function f(e){if(e instanceof Element){g(e);return}m()}function p(){if(u+=1,!document.querySelector(`.${s}`)){let e=document.createElement(`div`);e.className=s,e.setAttribute(`role`,`status`),e.setAttribute(`aria-live`,`polite`),e.innerHTML=_(),document.body.append(e)}document.body.classList.add(`loader-lock`)}function m(){u>0&&--u,!(u>0)&&(document.querySelector(`.${s}`)?.remove(),document.body.classList.remove(`loader-lock`))}function h(e){let t=l.get(e)||0;if(l.set(e,t+1),t>0)return;let n=v(e)?`li`:`div`;e.setAttribute(`aria-busy`,`true`),e.innerHTML=`
    <${n} class="${c}" role="status" aria-live="polite">
      ${_()}
    </${n}>
  `}function g(e){let t=l.get(e)||0,n=Math.max(t-1,0);if(n>0){l.set(e,n);return}l.delete(e),e.removeAttribute(`aria-busy`);let r=e.children.length===1&&e.firstElementChild;r&&r.classList.contains(c)&&(e.innerHTML=``)}function _(){return`
    <div class="loader-box">
      <span class="loader-spinner" aria-hidden="true"></span>
      <span class="loader-text">Loading...</span>
    </div>
  `}function v(e){return e.matches(`ul, ol`)}var y=`https://your-energy.b.goit.study/api`;async function b(e,t){let n=await fetch(`${y}/exercises/${e}/rating`,{method:`PATCH`,headers:{"Content-Type":`application/json`},body:JSON.stringify(t)});if(!n.ok){let e=await n.json();throw{status:n.status,message:e.message}}return n.json()}var x=null;function S(e){x=e;let t=document.querySelector(`.rating-backdrop`),r=document.querySelector(`.rating-form`),i=document.querySelector(`.rating-close-btn`),a=document.querySelectorAll(`.rating-stars input`),o=document.querySelector(`.rating-value`);t.classList.remove(`is-hidden`),document.body.classList.add(`no-scroll`);function s(){t.classList.add(`is-hidden`),document.body.classList.remove(`no-scroll`),r.reset(),u(),document.removeEventListener(`keydown`,c),D(x)}function c(e){e.code===`Escape`&&s()}function l(){let e=document.querySelector(`.rating-stars input:checked`);if(!e)return;let t=Number(e.value);o.textContent=t.toFixed(1),a.forEach(e=>{let n=e.nextElementSibling;Number(e.value)<=t?n.classList.add(`active`):n.classList.remove(`active`)})}function u(){o.textContent=`0.0`,a.forEach(e=>{let t=e.nextElementSibling;e.checked=!1,t.classList.remove(`active`)})}i.addEventListener(`click`,s),t.addEventListener(`click`,e=>{e.target===t&&s()}),document.addEventListener(`keydown`,c),a.forEach(e=>{e.addEventListener(`change`,l)}),r.addEventListener(`submit`,async e=>{e.preventDefault();let t=new FormData(r),i={rate:Number(t.get(`rate`)),email:t.get(`email`),review:t.get(`review`)};try{await b(x,i),n.default.success({message:`Rating added successfully!`}),s()}catch(e){if(e.status===409){n.default.error({message:`Цей email вже використовувався для оцінки цієї вправи!`});return}if(e.status===400||e.status===404){n.default.error({message:e.message||`Некоректні дані`});return}n.default.error({message:`Сталася помилка на сервері`})}})}var C=document.querySelector(`.modal-backdrop`),w=document.querySelector(`#modal-container`),T=`favorite-exercises`,E=null;async function D(e){d();try{let t=await a(e);E=t,w.innerHTML=o(t,N().some(t=>t._id===e)),F(t.rating),C.classList.add(`is-open`),document.body.classList.add(`no-scroll`),w.addEventListener(`click`,k),C.addEventListener(`click`,A),window.addEventListener(`keydown`,I)}catch{n.default.error({title:`Error`,message:`Failed to load exercise details. Please try again later`,position:`topRight`})}finally{f()}}function O(){C.classList.remove(`is-open`),document.body.classList.remove(`no-scroll`),w.removeEventListener(`click`,k),window.removeEventListener(`keydown`,I),C.removeEventListener(`click`,A),w.innerHTML=``,E=null}function k(e){let t=e.target;t.closest(`[data-modal-close]`)&&O();let n=t.closest(`[data-favorites-toggle]`);n&&E&&j(E,n)}function A(e){e.target===C&&O()}function j(e,t){try{let r=N();r.some(t=>t._id===e._id)?(r=r.filter(t=>t._id!==e._id),M(t,!1),n.default.success({title:`Success`,message:`Exercise removed from favorites!`,position:`topRight`})):(r.push(e),M(t,!0),n.default.success({title:`Success`,message:`Exercise added to favorites!`,position:`topRight`})),P(r)}catch{n.default.error({title:`Error`,message:`Failed to save the exercise. Please try again later`,position:`topRight`})}}function M(e,t){let n=e.querySelector(`span`),r=e.querySelector(`use`);t?(n.textContent=`Remove from favorites`,r.setAttribute(`href`,`./sprite.svg#icon-trash`)):(n.textContent=`Add to favorites`,r.setAttribute(`href`,`./sprite.svg#icon-heart`))}function N(){try{let e=localStorage.getItem(T);return e?JSON.parse(e):[]}catch(e){return console.error(`LocalStorage read error:`,e),[]}}function P(e){try{localStorage.setItem(T,JSON.stringify(e))}catch(e){throw console.error(`LocalStorage write error:`,e),Error(`Storage full or unavailable`)}}function F(e){let t=document.querySelector(`.modal-stars-wrapper`);if(!t)return;let n=Math.round(e),r=``;for(let e=1;e<=5;e++)r+=`
      <svg class="modal-star-icon ${e<=n?`modal-star-filled`:`modal-star-empty`}" width="18" height="18">
        <use href="./sprite.svg#icon-star"></use>
      </svg>`;t.innerHTML=r}function I(e){e.code===`Escape`&&O()}document.addEventListener(`click`,e=>{let t=e.target.closest(`[data-rating-open]`);if(!t)return;let n=t.dataset.exerciseId;O(),setTimeout(()=>{S(n)},0)});function L(e,t,n,r){if(t<=1){n.innerHTML=``;return}let i=[];window.innerWidth<768?(i=[e],e<t&&i.push(e+1),e+1<t&&i.push(e+2)):e<=3?(i=Array.from({length:t},(e,t)=>t+1),t>3&&(i.push(`...`),i.push(t))):i=e>=t-2?[1,`...`,t-2,t-1,t]:[1,`...`,e-1,e,e+1,`...`,t],n.innerHTML=`
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
  `,n.querySelectorAll(`button`).forEach(t=>{t.addEventListener(`click`,()=>{let n=Number(t.dataset.page);!n||n===e||r(n)})})}var R=async()=>i(`/quote`),z={home:{mobile:{avif1x:`./images/quote/home/quote-mob.avif`,avif2x:`./images/quote/home/quote-mob@2x.avif`,webp1x:`./images/quote/home/quote-mob.webp`,webp2x:`./images/quote/home/quote-mob@2x.webp`,png1x:`./images/quote/home/quote-mob.png`,png2x:`./images/quote/home/quote-mob@2x.png`},tablet:{avif1x:`./images/quote/home/quote-tablet.avif`,avif2x:`./images/quote/home/quote-tablet@2x.avif`,webp1x:`./images/quote/home/quote-tablet.webp`,webp2x:`./images/quote/home/quote-tablet@2x.webp`,png1x:`./images/quote/home/quote-tablet.png`,png2x:`./images/quote/home/quote-tablet@2x.png`},desktop:{avif1x:`./images/quote/home/quote-desktop.avif`,avif2x:`./images/quote/home/quote-desktop@2x.avif`,webp1x:`./images/quote/home/quote-desktop.webp`,webp2x:`./images/quote/home/quote-desktop@2x.webp`,png1x:`./images/quote/home/quote-desktop.png`,png2x:`./images/quote/home/quote-desktop@2x.png`}},favorites:{mobile:{avif1x:`./images/quote/favorites/quote-f-mob.avif`,avif2x:`./images/quote/favorites/quote-f-mob@2x.avif`,webp1x:`./images/quote/favorites/quote-f-mob.webp`,webp2x:`./images/quote/favorites/quote-f-mob@2x.webp`,png1x:`./images/quote/favorites/quote-f-mob.png`,png2x:`./images/quote/favorites/quote-f-mob@2x.png`},tablet:{avif1x:`./images/quote/favorites/quote-f-tab.avif`,avif2x:`./images/quote/favorites/quote-f-tab@2x.avif`,webp1x:`./images/quote/favorites/quote-f-tab.webp`,webp2x:`./images/quote/favorites/quote-f-tab@2x.webp`,png1x:`./images/quote/favorites/quote-f-tab.png`,png2x:`./images/quote/favorites/quote-f-tab@2x.png`},desktop:{avif1x:`./images/quote/favorites/quote-f-desk.avif`,avif2x:`./images/quote/favorites/quote-f-desk@2x.avif`,webp1x:`./images/quote/favorites/quote-f-desk.webp`,webp2x:`./images/quote/favorites/quote-f-desk@2x.webp`,png1x:`./images/quote/favorites/quote-f-desk.png`,png2x:`./images/quote/favorites/quote-f-desk@2x.png`}}};function B(){return document.querySelector(`.quote-container`)}function V(){return B()?.dataset.page||`home`}function H(){return document.querySelector(`.quote-container`)}function U(e){let t=H();if(!t)return;let n=z[V()]??z.home;t.innerHTML=`
          <div class="quote">

          <div class="quote-card">
            <div class="quote-top">
              <div class="icon-quote">
                <svg width="34" height="32">
                <use href="./sprite.svg#icon-run-man"></use>
                </svg>
              </div>
              <div class="quote-content">
                <div class="quote-heading">
                  <h3 class="quote-header">
                    Quote of the day
                  </h3>

                  <div class="icon-quote">
                    <svg width="20" height="20">
                      <use href="./sprite.svg#icon-inverted-commas"></use>
                    </svg>
                  </div>
                </div>

                <p class="quote-text">
                  "${e.quote}"
                </p>

                <p class="quote-author">
                  ${e.author}
                </p>
              </div>
            </div>
          </div>

        <div class="quote-img">

          <picture>

            <source
              srcset="
                ${n.desktop.avif1x} 1x,
                ${n.desktop.avif2x} 2x
              "
              type="image/avif"
              media="(min-width: 1440px)"
            />
            <source
              srcset="
                ${n.tablet.avif1x} 1x,
                ${n.tablet.avif2x} 2x
              "
              type="image/avif"
              media="(min-width: 768px) and (max-width: 1439px)"
            />
            <source
              srcset="
                ${n.mobile.avif1x} 1x,
                ${n.mobile.avif2x} 2x
              "
              type="image/avif"
              media="(max-width: 767px)"
            />

            <source
              srcset="
                ${n.desktop.webp1x} 1x,
                ${n.desktop.webp2x} 2x
              "
              type="image/webp"
              media="(min-width: 1440px)"
            />
            <source
              srcset="
                ${n.tablet.webp1x} 1x,
                ${n.tablet.webp2x} 2x
              "
              type="image/webp"
              media="(min-width: 768px) and (max-width: 1439px)"
            />
            <source
              srcset="
                ${n.mobile.webp1x} 1x,
                ${n.mobile.webp2x} 2x
              "
              type="image/webp"
              media="(max-width: 767px)"
            />

            <img
              src="${n.desktop.png1x}"
              srcset="
                ${n.desktop.png1x} 1x,
                ${n.desktop.png2x} 2x
              "
              alt="Women doing sport exercises"
              loading="lazy"
            />

          </picture>
        </div>

        <div class="daily-norm">

          <div class="icon-quote icon-dumb-wrap">
            <svg class="icon-dumb" >
              <use href="./sprite.svg#icon-black-dumbbells"></use>
            </svg>
          </div>

          <div class="daily-info">

                <h3 class="daily-min">110 min</h3>
                <p class="daily-title">Daily norm of sports</p>
                <p class="daily-text" tabindex="0">
                  The World Health Organization recommends at least 150 minutes of moderate-intensity aerobic physical activity throughout the week for adults aged 18-64. However, what happens if we adjust that number to 110 minutes every day? While it might seem like a high number to hit, dedicating 110 minutes daily to sporting activities may offer unparalleled benefits to physical health, mental well-being, and overall quality of life.
                </p>
          </div>

        </div>
    </div>
  `}var W=`quote`;async function G(){let e=localStorage.getItem(W),t=new Date().toISOString().split(`T`)[0];if(e){let n=JSON.parse(e);if(n.date===t){U(n.data);return}}try{let e=await R();localStorage.setItem(W,JSON.stringify({date:t,data:e})),U(e)}catch(e){console.error(e),n.default.error({title:`Error`,message:`Failed to load quote`,position:`topRight`}),U({author:`Unknown`,quote:`Stay active and take care of your health`})}}(function(){let e=document.querySelector(`[data-menu]`),t=document.querySelector(`[data-menu-open]`),n=document.querySelector(`[data-menu-close]`);if(!e||!t)return;let r=()=>{e.classList.add(`is-open`),e.setAttribute(`aria-hidden`,`false`),t.setAttribute(`aria-expanded`,`true`),document.body.classList.add(`is-menu-open`)},i=()=>{e.classList.remove(`is-open`),e.setAttribute(`aria-hidden`,`true`),t.setAttribute(`aria-expanded`,`false`),document.body.classList.remove(`is-menu-open`)};t.addEventListener(`click`,r),n?.addEventListener(`click`,i),e.addEventListener(`click`,t=>{t.target===e&&i()}),document.addEventListener(`keydown`,t=>{t.key===`Escape`&&e.classList.contains(`is-open`)&&i()}),window.matchMedia(`(min-width: 768px)`).addEventListener(`change`,e=>{e.matches&&i()})})();function K(e,t){let n=!1;return function(...r){n||(e.apply(this,r),n=!0,setTimeout(()=>n=!1,t))}}function q(){if(document.querySelector(`.scroll-up-btn`))return;let e=document.createElement(`button`);e.className=`scroll-up-btn`,e.type=`button`,e.setAttribute(`aria-label`,`Scroll to top`),e.innerHTML=`
    <svg class="scroll-up-icon" width="18" height="18">
      <use href="./sprite.svg#icon-arrow-up" />
    </svg>
  `,document.body.appendChild(e),e.addEventListener(`click`,()=>{window.scrollTo({top:0,behavior:`smooth`})}),window.addEventListener(`scroll`,K(()=>{window.scrollY>400?e.classList.add(`is-visible`):e.classList.remove(`is-visible`)},100))}q();export{d as a,f as i,L as n,i as o,D as r,G as t};
//# sourceMappingURL=scroll.up-aUT6bExW.js.map