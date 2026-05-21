import{n as e}from"./assets/rolldown-runtime-BDqkOrsv.js";import"./assets/styles-DOGRVb8L.js";import{t}from"./assets/vendor-BQcEvRoX.js";var n=e(t(),1),r=`https://your-energy.b.goit.study/api`;async function i(e){let t=await fetch(`${r}${e}`);if(!t.ok)throw Error(`HTTP error! Status: ${t.status}`);return t.json()}function a(e,t=1,n=12){return i(`/filters?filter=${e}&page=${t}&limit=${n}`)}function o(e,t,n){t.innerHTML=e.map(e=>`
        <button class="filter-btn" data-name="${e.name}">
          ${e.name}
        </button>
      `).join(``),t.querySelectorAll(`.filter-btn`).forEach(e=>{e.addEventListener(`click`,()=>{n(e.dataset.name)})})}function s(e=``){return i(`/exercises?${e}`)}function c(e,t){t.innerHTML=e.map(e=>`
        <div class="exercise-card">
          <h3>${e.name}</h3>
          <p>${e.bodyPart}</p>
          <p>${e.target}</p>
        </div>
      `).join(``)}var l=document.querySelector(`#exercises`),u=`muscles`;function d(){f(u)}async function f(e){u=e;try{c((await s(`bodypart=${e.toLowerCase()}&page=1&limit=10`)).results,l)}catch(e){console.error(e)}}var p=document.querySelector(`#filters`),m=`Muscles`;function h(){g(m)}async function g(e){try{o((await a(e)).results,p,_)}catch(e){console.error(e)}}function _(e){m=e,g(m),f(m)}var v=async()=>i(`/quote`),y={home:{mobile:{avif1x:`../assets/images/quote/home/quote-mob.avif`,avif2x:`../assets/images/quote/home/quote-mob@2x.avif`,webp1x:`../assets/images/quote/home/quote-mob.webp`,webp2x:`../assets/images/quote/home/quote-mob@2x.webp`,png1x:`../assets/images/quote/home/quote-mob.png`,png2x:`../assets/images/quote/home/quote-mob@2x.png`},tablet:{avif1x:`../assets/images/quote/home/quote-tablet.avif`,avif2x:`../assets/images/quote/home/quote-tablet@2x.avif`,webp1x:`../assets/images/quote/home/quote-tablet.webp`,webp2x:`../assets/images/quote/home/quote-tablet@2x.webp`,png1x:`../assets/images/quote/home/quote-tablet.png`,png2x:`../assets/images/quote/home/quote-tablet@2x.png`},desktop:{avif1x:`../assets/images/quote/home/quote-desktop.avif`,avif2x:`../assets/images/quote/home/quote-desktop@2x.avif`,webp1x:`../assets/images/quote/home/quote-desktop.webp`,webp2x:`../assets/images/quote/home/quote-desktop@2x.webp`,png1x:`../assets/images/quote/home/quote-desktop.png`,png2x:`../assets/images/quote/home/quote-desktop@2x.png`}},favorites:{mobile:{avif1x:`../assets/images/quote/favorites/quote-f-mob.avif`,avif2x:`../assets/images/quote/favorites/quote-f-mob@2x.avif`,webp1x:`../assets/images/quote/favorites/quote-f-mob.webp`,webp2x:`../assets/images/quote/favorites/quote-f-mob@2x.webp`,png1x:`../assets/images/quote/favorites/quote-f-mob.png`,png2x:`../assets/images/quote/favorites/quote-f-mob@2x.png`},tablet:{avif1x:`../assets/images/quote/favorites/quote-f-tab.avif`,avif2x:`../assets/images/quote/favorites/quote-f-tab@2x.avif`,webp1x:`../assets/images/quote/favorites/quote-f-tab.webp`,webp2x:`../assets/images/quote/favorites/quote-f-tab@2x.webp`,png1x:`../assets/images/quote/favorites/quote-f-tab.png`,png2x:`../assets/images/quote/favorites/quote-f-tab@2x.png`},desktop:{avif1x:`../assets/images/quote/favorites/quote-f-desk.avif`,avif2x:`../assets/images/quote/favorites/quote-f-desk@2x.avif`,webp1x:`../assets/images/quote/favorites/quote-f-desk.webp`,webp2x:`../assets/images/quote/favorites/quote-f-desk@2x.webp`,png1x:`../assets/images/quote/favorites/quote-f-desk.png`,png2x:`../assets/images/quote/favorites/quote-f-desk@2x.png`}}};function b(){return document.body.dataset.page||`home`}function x(){return document.querySelector(`.quote-container`)}function S(e){let t=x(),n=y[b()]||y.home;t&&(t.innerHTML=`
    <div class="container">

          <div class="quote-card">

            <div class="icon-quote">
              <svg width="34" height="32">
              <use href="../assets/sprite.svg#icon-run-man"></use>
              </svg>
            </div>

              <h3 class="quote-header">
                  Quote of the day
              </h3>

              <div class="icon-quote">
                <svg width="20" height="20">
                  <use href="../assets/sprite.svg#icon-inverted-commas"></use>
                </svg>
              </div>

              <p class="quote-text">
                  "${e.quote}"
              </p>

              <p class="quote-author">
              ${e.author}
              </p>

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

          <div class="icon-quote">
            <svg width="34" height="32">
              <use href="../assets/sprite.svg#icon-black-dumbbells"></use>
            </svg>
          </div>

          <div class="norm-info">
            <h3 class="daily-min">110 min</h3>
            <p class="daily-title">Daily norm of sports</p>
            <p class="daily-text">
              The World Health Organization recommends at least 150 minutes of moderate-intensity aerobic physical activity throughout the week for adults aged 18-64. However, what happens if we adjust that number to 110 minutes every day? While it might seem like a high number to hit, dedicating 110 minutes daily to sporting activities may offer unparalleled benefits to physical health, mental well-being, and overall quality of life.
            </p>
          </div>

        </div>

      </div>
  `)}var C=`quote`;async function w(){let e=localStorage.getItem(C),t=new Date().toISOString().split(`T`)[0];if(e){let n=JSON.parse(e);if(n.date===t){S(n.data);return}}try{let e=await v();localStorage.setItem(C,JSON.stringify({date:t,data:e})),S(e)}catch(e){console.error(e),n.default.error({title:`Error`,message:`Failed to load quote`,position:`topRight`}),S({author:`Unknown`,quote:`Stay active and take care of your health`})}}async function T(){try{w(),h(),d()}catch(e){console.error(e)}}T();function E(){let e=document.getElementById(`footer-subscribe-form`);e&&e.addEventListener(`submit`,async t=>{t.preventDefault();let n=e.elements.namedItem(`email`);if(!n)return;let r=n.value.trim();try{let t=await fetch(`https://your-energy.b.goit.study/api/subscription`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({email:r})});if(t.status===201){alert(`We're excited to have you on board! 🎉`),e.reset();return}if(t.status===409){alert(`This email is already subscribed to the newsletter!`);return}if(t.status===400||t.status===404){alert(`Bad request. Please check your email formatting.`);return}throw Error(`Unexpected status code`)}catch(e){alert(`A server error occurred. Please try again later.`),console.error(`Subscription system error:`,e)}})}E();
//# sourceMappingURL=index.js.map