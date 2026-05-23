import{n as e}from"./rolldown-runtime-BDqkOrsv.js";import{t}from"./vendor-BQcEvRoX.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var n=e(t(),1),r=`https://your-energy.b.goit.study/api`;async function i(e){let t=await fetch(`${r}${e}`);if(!t.ok)throw Error(`HTTP error! Status: ${t.status}`);return t.json()}var a=async()=>i(`/quote`),o={home:{mobile:{avif1x:`../assets/images/quote/home/quote-mob.avif`,avif2x:`../assets/images/quote/home/quote-mob@2x.avif`,webp1x:`../assets/images/quote/home/quote-mob.webp`,webp2x:`../assets/images/quote/home/quote-mob@2x.webp`,png1x:`../assets/images/quote/home/quote-mob.png`,png2x:`../assets/images/quote/home/quote-mob@2x.png`},tablet:{avif1x:`../assets/images/quote/home/quote-tablet.avif`,avif2x:`../assets/images/quote/home/quote-tablet@2x.avif`,webp1x:`../assets/images/quote/home/quote-tablet.webp`,webp2x:`../assets/images/quote/home/quote-tablet@2x.webp`,png1x:`../assets/images/quote/home/quote-tablet.png`,png2x:`../assets/images/quote/home/quote-tablet@2x.png`},desktop:{avif1x:`../assets/images/quote/home/quote-desktop.avif`,avif2x:`../assets/images/quote/home/quote-desktop@2x.avif`,webp1x:`../assets/images/quote/home/quote-desktop.webp`,webp2x:`../assets/images/quote/home/quote-desktop@2x.webp`,png1x:`../assets/images/quote/home/quote-desktop.png`,png2x:`../assets/images/quote/home/quote-desktop@2x.png`}},favorites:{mobile:{avif1x:`../assets/images/quote/favorites/quote-f-mob.avif`,avif2x:`../assets/images/quote/favorites/quote-f-mob@2x.avif`,webp1x:`../assets/images/quote/favorites/quote-f-mob.webp`,webp2x:`../assets/images/quote/favorites/quote-f-mob@2x.webp`,png1x:`../assets/images/quote/favorites/quote-f-mob.png`,png2x:`../assets/images/quote/favorites/quote-f-mob@2x.png`},tablet:{avif1x:`../assets/images/quote/favorites/quote-f-tab.avif`,avif2x:`../assets/images/quote/favorites/quote-f-tab@2x.avif`,webp1x:`../assets/images/quote/favorites/quote-f-tab.webp`,webp2x:`../assets/images/quote/favorites/quote-f-tab@2x.webp`,png1x:`../assets/images/quote/favorites/quote-f-tab.png`,png2x:`../assets/images/quote/favorites/quote-f-tab@2x.png`},desktop:{avif1x:`../assets/images/quote/favorites/quote-f-desk.avif`,avif2x:`../assets/images/quote/favorites/quote-f-desk@2x.avif`,webp1x:`../assets/images/quote/favorites/quote-f-desk.webp`,webp2x:`../assets/images/quote/favorites/quote-f-desk@2x.webp`,png1x:`../assets/images/quote/favorites/quote-f-desk.png`,png2x:`../assets/images/quote/favorites/quote-f-desk@2x.png`}}};function s(){return document.querySelector(`.quote-container`)}function c(){return s()?.dataset.page||`home`}function l(){return document.querySelector(`.quote-container`)}function u(e){let t=l();if(!t)return;let n=o[c()]??o.home;t.innerHTML=`
          <div class="quote">

          <div class="quote-card">
            <div class="qoute-top">
              <div class="icon-quote">
                <svg width="34" height="32">
                <use href="../assets/sprite.svg#icon-run-man"></use>
                </svg>
              </div>
              <div class="quote-content">
                <div class="quote-heading">
                  <h3 class="quote-header">
                    Quote of the day
                  </h3>

                  <div class="icon-quote">
                    <svg width="20" height="20">
                      <use href="../assets/sprite.svg#icon-inverted-commas"></use>
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
              media="(min-width: 1280px)"
            />
            <source
              srcset="
                ${n.tablet.avif1x} 1x,
                ${n.tablet.avif2x} 2x
              "
              type="image/avif"
              media="(min-width: 768px) and (max-width: 1279px)"
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
              media="(min-width: 1280px)"
            />
            <source
              srcset="
                ${n.tablet.webp1x} 1x,
                ${n.tablet.webp2x} 2x
              "
              type="image/webp"
              media="(min-width: 768px) and (max-width: 1279px)"
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
              <use href="../assets/sprite.svg#icon-black-dumbbells"></use>
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
  `}var d=`quote`;async function f(){let e=localStorage.getItem(d),t=new Date().toISOString().split(`T`)[0];if(e){let n=JSON.parse(e);if(n.date===t){u(n.data);return}}try{let e=await a();localStorage.setItem(d,JSON.stringify({date:t,data:e})),u(e)}catch(e){console.error(e),n.default.error({title:`Error`,message:`Failed to load quote`,position:`topRight`}),u({author:`Unknown`,quote:`Stay active and take care of your health`})}}export{i as n,f as t};
//# sourceMappingURL=quote-Bx-S0eX5.js.map