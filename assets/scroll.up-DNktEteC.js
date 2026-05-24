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
  `}var o=e(t(),1),s=document.querySelector(`.modal-backdrop`),c=document.querySelector(`#modal-container`);async function l(e){try{let t=await i(e);c.innerHTML=a(t),f(t.rating),s.classList.add(`is-open`),document.body.classList.add(`no-scroll`),c.querySelector(`[data-modal-close]`).addEventListener(`click`,u),s.addEventListener(`click`,d),window.addEventListener(`keydown`,p)}catch{o.default.error({title:`Error`,message:`Не вдалося завантажити деталі вправи. Спробуйте пізніше`,position:`topRight`})}}function u(){s.classList.remove(`is-open`),document.body.classList.remove(`no-scroll`),c.innerHTML=``,window.removeEventListener(`keydown`,p),s.removeEventListener(`click`,d)}function d(e){e.target===s&&u()}function f(e){let t=document.querySelector(`.modal-stars-wrapper`);if(!t)return;let n=Math.round(e),r=``;for(let e=1;e<=5;e++)r+=`
      <svg class="modal-star-icon ${e<=n?`modal-star-filled`:`modal-star-empty`}" width="18" height="18">
        <use href="./sprite.svg#icon-star"></use>
      </svg>`;t.innerHTML=r}function p(e){e.code===`Escape`&&u()}var m=async()=>r(`/quote`),h={home:{mobile:{avif1x:`./images/quote/home/quote-mob.avif`,avif2x:`./images/quote/home/quote-mob@2x.avif`,webp1x:`./images/quote/home/quote-mob.webp`,webp2x:`./images/quote/home/quote-mob@2x.webp`,png1x:`./images/quote/home/quote-mob.png`,png2x:`./images/quote/home/quote-mob@2x.png`},tablet:{avif1x:`./images/quote/home/quote-tablet.avif`,avif2x:`./images/quote/home/quote-tablet@2x.avif`,webp1x:`./images/quote/home/quote-tablet.webp`,webp2x:`./images/quote/home/quote-tablet@2x.webp`,png1x:`./images/quote/home/quote-tablet.png`,png2x:`./images/quote/home/quote-tablet@2x.png`},desktop:{avif1x:`./images/quote/home/quote-desktop.avif`,avif2x:`./images/quote/home/quote-desktop@2x.avif`,webp1x:`./images/quote/home/quote-desktop.webp`,webp2x:`./images/quote/home/quote-desktop@2x.webp`,png1x:`./images/quote/home/quote-desktop.png`,png2x:`./images/quote/home/quote-desktop@2x.png`}},favorites:{mobile:{avif1x:`./images/quote/favorites/quote-f-mob.avif`,avif2x:`./images/quote/favorites/quote-f-mob@2x.avif`,webp1x:`./images/quote/favorites/quote-f-mob.webp`,webp2x:`./images/quote/favorites/quote-f-mob@2x.webp`,png1x:`./images/quote/favorites/quote-f-mob.png`,png2x:`./images/quote/favorites/quote-f-mob@2x.png`},tablet:{avif1x:`./images/quote/favorites/quote-f-tab.avif`,avif2x:`./images/quote/favorites/quote-f-tab@2x.avif`,webp1x:`./images/quote/favorites/quote-f-tab.webp`,webp2x:`./images/quote/favorites/quote-f-tab@2x.webp`,png1x:`./images/quote/favorites/quote-f-tab.png`,png2x:`./images/quote/favorites/quote-f-tab@2x.png`},desktop:{avif1x:`./images/quote/favorites/quote-f-desk.avif`,avif2x:`./images/quote/favorites/quote-f-desk@2x.avif`,webp1x:`./images/quote/favorites/quote-f-desk.webp`,webp2x:`./images/quote/favorites/quote-f-desk@2x.webp`,png1x:`./images/quote/favorites/quote-f-desk.png`,png2x:`./images/quote/favorites/quote-f-desk@2x.png`}}};function g(){return document.querySelector(`.quote-container`)}function _(){return g()?.dataset.page||`home`}function v(){return document.querySelector(`.quote-container`)}function y(e){let t=v();if(!t)return;let n=h[_()]??h.home;t.innerHTML=`
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
  `}var b=`quote`;async function x(){let e=localStorage.getItem(b),t=new Date().toISOString().split(`T`)[0];if(e){let n=JSON.parse(e);if(n.date===t){y(n.data);return}}try{let e=await m();localStorage.setItem(b,JSON.stringify({date:t,data:e})),y(e)}catch(e){console.error(e),o.default.error({title:`Error`,message:`Failed to load quote`,position:`topRight`}),y({author:`Unknown`,quote:`Stay active and take care of your health`})}}(function(){let e=document.querySelector(`[data-menu]`),t=document.querySelector(`[data-menu-open]`),n=document.querySelector(`[data-menu-close]`);if(!e||!t)return;let r=()=>{e.classList.add(`is-open`),e.setAttribute(`aria-hidden`,`false`),t.setAttribute(`aria-expanded`,`true`),document.body.classList.add(`is-menu-open`)},i=()=>{e.classList.remove(`is-open`),e.setAttribute(`aria-hidden`,`true`),t.setAttribute(`aria-expanded`,`false`),document.body.classList.remove(`is-menu-open`)};t.addEventListener(`click`,r),n?.addEventListener(`click`,i),e.addEventListener(`click`,t=>{t.target===e&&i()}),document.addEventListener(`keydown`,t=>{t.key===`Escape`&&e.classList.contains(`is-open`)&&i()}),window.matchMedia(`(min-width: 768px)`).addEventListener(`change`,e=>{e.matches&&i()})})();function S(e,t){let n=!1;return function(...r){n||(e.apply(this,r),n=!0,setTimeout(()=>n=!1,t))}}function C(){if(document.querySelector(`.scroll-up-btn`))return;let e=document.createElement(`button`);e.className=`scroll-up-btn`,e.type=`button`,e.setAttribute(`aria-label`,`Scroll to top`),e.innerHTML=`
    <svg class="scroll-up-icon" width="18" height="18">
      <use href="./sprite.svg#icon-arrow-up" />
    </svg>
  `,document.body.appendChild(e),e.addEventListener(`click`,()=>{window.scrollTo({top:0,behavior:`smooth`})}),window.addEventListener(`scroll`,S(()=>{window.scrollY>400?e.classList.add(`is-visible`):e.classList.remove(`is-visible`)},100))}C();export{l as n,r,x as t};
//# sourceMappingURL=scroll.up-DNktEteC.js.map