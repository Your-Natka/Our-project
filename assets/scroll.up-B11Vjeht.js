import{n as e}from"./rolldown-runtime-BDqkOrsv.js";import{t}from"./vendor-BQcEvRoX.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var n=`https://your-energy.b.goit.study/api`;async function r(e){let t=await fetch(`${n}${e}`);if(!t.ok)throw Error(`HTTP error! Status: ${t.status}`);return t.json()}function i(e){return r(`/exercises/${e}`)}function a(e){let{_id:t,bodyPart:n,equipment:r,gifUrl:i,name:a,target:o,description:s,rating:c,burnedCalories:l,time:u,popularity:d}=e;return`
    <div class="modal-content" data-id="${t}">
      <button class="modal-close-btn" type="button" data-modal-close>
        <svg class="modal-close-icon" width="24" height="24">
          <use href="./sprite.svg#icon-cross"></use>
        </svg>
      </button>

      <div class="modal-exercise-layout">
        <div class="modal-img-wrapper">
          <img src="${i||`https://via.placeholder.com/360x300?text=No+Image`}" alt="${a}" class="modal-exercise-img" />
        </div>

        <div class="modal-info-wrapper">
          <h2 class="modal-exercise-name">${a}</h2>

          <div class="modal-rating-container">
            <span class="modal-rating-value">${c.toFixed(1)}</span>
            <div class="modal-stars-wrapper" data-rating="${c}"></div>
          </div>

          <ul class="modal-stats-list">
            <li class="modal-stats-item">
              <span class="modal-stats-label">Target</span>
              <span class="modal-stats-value">${o}</span>
            </li>
            <li class="modal-stats-item">
              <span class="modal-stats-label">Body Part</span>
              <span class="modal-stats-value">${n}</span>
            </li>
            <li class="modal-stats-item">
              <span class="modal-stats-label">Equipment</span>
              <span class="modal-stats-value">${r}</span>
            </li>
            <li class="modal-stats-item">
              <span class="modal-stats-label">Popularity</span>
              <span class="modal-stats-value">${d}</span>
            </li>
            <li class="modal-stats-item">
              <span class="modal-stats-label">Burned Calories</span>
              <span class="modal-stats-value">${l} / ${u} min</span>
            </li>
          </ul>

          <p class="modal-exercise-description">${s}</p>

        </div>
      </div>
    </div>
  `}var o=`loader-backdrop`,s=`loader-local`,c=new WeakMap,l=0;function u(e){if(e instanceof Element){m(e);return}f()}function d(e){if(e instanceof Element){h(e);return}p()}function f(){if(l+=1,!document.querySelector(`.${o}`)){let e=document.createElement(`div`);e.className=o,e.setAttribute(`role`,`status`),e.setAttribute(`aria-live`,`polite`),e.innerHTML=g(),document.body.append(e)}document.body.classList.add(`loader-lock`)}function p(){l>0&&--l,!(l>0)&&(document.querySelector(`.${o}`)?.remove(),document.body.classList.remove(`loader-lock`))}function m(e){let t=c.get(e)||0;if(c.set(e,t+1),t>0)return;let n=_(e)?`li`:`div`;e.setAttribute(`aria-busy`,`true`),e.innerHTML=`
    <${n} class="${s}" role="status" aria-live="polite">
      ${g()}
    </${n}>
  `}function h(e){let t=c.get(e)||0,n=Math.max(t-1,0);if(n>0){c.set(e,n);return}c.delete(e),e.removeAttribute(`aria-busy`),(e.children.length===1&&e.firstElementChild)?.classList.contains(s)&&(e.innerHTML=``)}function g(){return`
    <div class="loader-box">
      <span class="loader-spinner" aria-hidden="true"></span>
      <span class="loader-text">Loading...</span>
    </div>
  `}function _(e){return e.matches(`ul, ol`)}var v=e(t(),1),y=document.querySelector(`.modal-backdrop`),b=document.querySelector(`#modal-container`);async function x(e){u();try{let t=await i(e);b.innerHTML=a(t),w(t.rating),y.classList.add(`is-open`),document.body.classList.add(`no-scroll`),b.querySelector(`[data-modal-close]`).addEventListener(`click`,S),y.addEventListener(`click`,C),window.addEventListener(`keydown`,T)}catch{v.default.error({title:`Error`,message:`Не вдалося завантажити деталі вправи. Спробуйте пізніше`,position:`topRight`})}finally{d()}}function S(){y.classList.remove(`is-open`),document.body.classList.remove(`no-scroll`),b.innerHTML=``,window.removeEventListener(`keydown`,T),y.removeEventListener(`click`,C)}function C(e){e.target===y&&S()}function w(e){let t=document.querySelector(`.modal-stars-wrapper`);if(!t)return;let n=Math.round(e),r=``;for(let e=1;e<=5;e++)r+=`
      <svg class="modal-star-icon ${e<=n?`modal-star-filled`:`modal-star-empty`}" width="18" height="18">
        <use href="./sprite.svg#icon-star"></use>
      </svg>`;t.innerHTML=r}function T(e){e.code===`Escape`&&S()}function E(e,t,n,r){if(t<=1){n.innerHTML=``;return}let i=[];window.innerWidth<768?(i=[e],e<t&&i.push(e+1),e+1<t&&i.push(e+2)):e<=3?(i=[1,2,3],t>3&&(i.push(`...`),i.push(t))):i=e>=t-2?[1,`...`,t-2,t-1,t]:[1,`...`,e-1,e,e+1,`...`,t],n.innerHTML=`
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
  `,n.querySelectorAll(`button`).forEach(t=>{t.addEventListener(`click`,()=>{let n=Number(t.dataset.page);!n||n===e||r(n)})})}var D=async()=>r(`/quote`),O={home:{mobile:{avif1x:`./images/quote/home/quote-mob.avif`,avif2x:`./images/quote/home/quote-mob@2x.avif`,webp1x:`./images/quote/home/quote-mob.webp`,webp2x:`./images/quote/home/quote-mob@2x.webp`,png1x:`./images/quote/home/quote-mob.png`,png2x:`./images/quote/home/quote-mob@2x.png`},tablet:{avif1x:`./images/quote/home/quote-tablet.avif`,avif2x:`./images/quote/home/quote-tablet@2x.avif`,webp1x:`./images/quote/home/quote-tablet.webp`,webp2x:`./images/quote/home/quote-tablet@2x.webp`,png1x:`./images/quote/home/quote-tablet.png`,png2x:`./images/quote/home/quote-tablet@2x.png`},desktop:{avif1x:`./images/quote/home/quote-desktop.avif`,avif2x:`./images/quote/home/quote-desktop@2x.avif`,webp1x:`./images/quote/home/quote-desktop.webp`,webp2x:`./images/quote/home/quote-desktop@2x.webp`,png1x:`./images/quote/home/quote-desktop.png`,png2x:`./images/quote/home/quote-desktop@2x.png`}},favorites:{mobile:{avif1x:`./images/quote/favorites/quote-f-mob.avif`,avif2x:`./images/quote/favorites/quote-f-mob@2x.avif`,webp1x:`./images/quote/favorites/quote-f-mob.webp`,webp2x:`./images/quote/favorites/quote-f-mob@2x.webp`,png1x:`./images/quote/favorites/quote-f-mob.png`,png2x:`./images/quote/favorites/quote-f-mob@2x.png`},tablet:{avif1x:`./images/quote/favorites/quote-f-tab.avif`,avif2x:`./images/quote/favorites/quote-f-tab@2x.avif`,webp1x:`./images/quote/favorites/quote-f-tab.webp`,webp2x:`./images/quote/favorites/quote-f-tab@2x.webp`,png1x:`./images/quote/favorites/quote-f-tab.png`,png2x:`./images/quote/favorites/quote-f-tab@2x.png`},desktop:{avif1x:`./images/quote/favorites/quote-f-desk.avif`,avif2x:`./images/quote/favorites/quote-f-desk@2x.avif`,webp1x:`./images/quote/favorites/quote-f-desk.webp`,webp2x:`./images/quote/favorites/quote-f-desk@2x.webp`,png1x:`./images/quote/favorites/quote-f-desk.png`,png2x:`./images/quote/favorites/quote-f-desk@2x.png`}}};function k(){return document.querySelector(`.quote-container`)}function A(){return k()?.dataset.page||`home`}function j(){return document.querySelector(`.quote-container`)}function M(e){let t=j();if(!t)return;let n=O[A()]??O.home;t.innerHTML=`
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
  `}var N=`quote`;async function P(){let e=localStorage.getItem(N),t=new Date().toISOString().split(`T`)[0];if(e){let n=JSON.parse(e);if(n.date===t){M(n.data);return}}try{let e=await D();localStorage.setItem(N,JSON.stringify({date:t,data:e})),M(e)}catch(e){console.error(e),v.default.error({title:`Error`,message:`Failed to load quote`,position:`topRight`}),M({author:`Unknown`,quote:`Stay active and take care of your health`})}}(function(){let e=document.querySelector(`[data-menu]`),t=document.querySelector(`[data-menu-open]`),n=document.querySelector(`[data-menu-close]`);if(!e||!t)return;let r=()=>{e.classList.add(`is-open`),e.setAttribute(`aria-hidden`,`false`),t.setAttribute(`aria-expanded`,`true`),document.body.classList.add(`is-menu-open`)},i=()=>{e.classList.remove(`is-open`),e.setAttribute(`aria-hidden`,`true`),t.setAttribute(`aria-expanded`,`false`),document.body.classList.remove(`is-menu-open`)};t.addEventListener(`click`,r),n?.addEventListener(`click`,i),e.addEventListener(`click`,t=>{t.target===e&&i()}),document.addEventListener(`keydown`,t=>{t.key===`Escape`&&e.classList.contains(`is-open`)&&i()}),window.matchMedia(`(min-width: 768px)`).addEventListener(`change`,e=>{e.matches&&i()})})();function F(e,t){let n=!1;return function(...r){n||(e.apply(this,r),n=!0,setTimeout(()=>n=!1,t))}}function I(){if(document.querySelector(`.scroll-up-btn`))return;let e=document.createElement(`button`);e.className=`scroll-up-btn`,e.type=`button`,e.setAttribute(`aria-label`,`Scroll to top`),e.innerHTML=`
    <svg class="scroll-up-icon" width="18" height="18">
      <use href="./sprite.svg#icon-arrow-up" />
    </svg>
  `,document.body.appendChild(e),e.addEventListener(`click`,()=>{window.scrollTo({top:0,behavior:`smooth`})}),window.addEventListener(`scroll`,F(()=>{window.scrollY>400?e.classList.add(`is-visible`):e.classList.remove(`is-visible`)},100))}I();export{u as a,d as i,E as n,r as o,x as r,P as t};
//# sourceMappingURL=scroll.up-B11Vjeht.js.map