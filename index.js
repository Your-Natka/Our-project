import{n as e}from"./assets/rolldown-runtime-BDqkOrsv.js";import"./assets/styles-BW2QZGn1.js";import{t}from"./assets/vendor-BQcEvRoX.js";var n=e(t(),1),r=`https://your-energy.b.goit.study/api`;async function i(e){let t=await fetch(`${r}${e}`);if(!t.ok)throw Error(`HTTP error! Status: ${t.status}`);return t.json()}async function a(e,t=1,n=12){return i(`/filters?filter=${encodeURIComponent(e)}&page=${t}&limit=${n}`)}function o(e,t){t.innerHTML=e.map(({name:e,filter:t,imgURL:n})=>`
      <li class="category-card" data-category="${e}">
        <div class="category-card-bg" style="background-image: linear-gradient(0deg, rgba(17, 17, 17, 0.5), rgba(17, 17, 17, 0.5)), url('${n}');"></div>
        <div class="category-card-content">
          <h3 class="category-name">${e}</h3>
          <p class="category-filter">${t}</p>
        </div>
      </li>
    `).join(``)}function s(e,t,n){n.innerHTML=`${t} of ${e}`}function c(e=``){return i(`/exercises?${e}`)}function l(e,t){t.innerHTML=e.map(e=>`
        <div class="exercise-card">
          <h3>${e.name}</h3>
          <p>${e.bodyPart}</p>
          <p>${e.target}</p>
        </div>
      `).join(``)}var u=document.querySelector(`#exercises-list`);async function d(e){try{l((await c(`bodypart=${e.toLowerCase()}&page=1&limit=10`)).results,u)}catch(e){console.error(e)}}var f={title:document.getElementById(`section-title`),subtitle:document.getElementById(`section-subtitle`),filterList:document.getElementById(`section-filter-list`),searchBox:document.getElementById(`section-search-box`)};function p(e){f.title&&f.title.addEventListener(`click`,()=>{f.subtitle&&f.subtitle.textContent&&e()})}function m(e,t){f.title&&(f.subtitle&&=(f.title.innerHTML=`${e}<span class="section-subtitle" id="section-subtitle">${t?` / `+t:``}</span>`,document.getElementById(`section-subtitle`)))}function h(e){f.filterList&&(e?f.filterList.classList.remove(`is-hidden`):f.filterList.classList.add(`is-hidden`))}function g(e){f.searchBox&&(e?f.searchBox.classList.remove(`is-hidden`):f.searchBox.classList.add(`is-hidden`))}var _={filterList:document.getElementById(`section-filter-list`),categoriesList:document.getElementById(`exercises-list`),errorBlock:document.getElementById(`exercises-error`),pagination:document.getElementById(`exercises-pagination`)},v=`Muscles`,y=1;function b(){if(!_.filterList||!_.categoriesList){console.warn(`DOM-елементи для ініціалізації лісенерів фільтрів не знайдені.`);return}_.filterList.addEventListener(`click`,S),_.categoriesList.addEventListener(`click`,C),p(w),x(v)}async function x(e){if(!(!_.categoriesList||!_.errorBlock))try{_.errorBlock.classList.add(`is-hidden`),_.categoriesList.classList.remove(`is-hidden`),m(`Exercises`),h(!0),g(!1);let t=window.innerWidth<768?9:12,n=await a(e,y,t);if(n.results.length===0){T();return}o(n.results,_.categoriesList),_.pagination&&s(n.totalPages,y,_.pagination)}catch(e){console.error(`Помилка завантаження категорій:`,e),T()}}async function S(e){let t=e.target;if(t.nodeName!==`BUTTON`||!_.filterList)return;let n=t;v=n.dataset.filter||`Muscles`,y=1;let r=_.filterList.querySelector(`.filter-btn.active`);r&&(r.classList.remove(`active`),r.setAttribute(`aria-selected`,`false`)),n.classList.add(`active`),n.setAttribute(`aria-selected`,`true`),m(`Exercises`),await x(v)}function C(e){let t=e.target.closest(`.category-card`);if(!t||!_.categoriesList)return;let n=t.dataset.category||``;m(`Exercises`,n.charAt(0).toUpperCase()+n.slice(1)),h(!0),g(!0),_.categoriesList.innerHTML=``,d(n)}function w(){m(`Exercises`),h(!0),g(!1),y=1,x(v)}function T(){_.categoriesList&&_.errorBlock&&(_.categoriesList.innerHTML=``,_.errorBlock.classList.remove(`is-hidden`))}var E=async()=>i(`/quote`),D={home:{mobile:{avif1x:`../assets/images/quote/home/quote-mob.avif`,avif2x:`../assets/images/quote/home/quote-mob@2x.avif`,webp1x:`../assets/images/quote/home/quote-mob.webp`,webp2x:`../assets/images/quote/home/quote-mob@2x.webp`,png1x:`../assets/images/quote/home/quote-mob.png`,png2x:`../assets/images/quote/home/quote-mob@2x.png`},tablet:{avif1x:`../assets/images/quote/home/quote-tablet.avif`,avif2x:`../assets/images/quote/home/quote-tablet@2x.avif`,webp1x:`../assets/images/quote/home/quote-tablet.webp`,webp2x:`../assets/images/quote/home/quote-tablet@2x.webp`,png1x:`../assets/images/quote/home/quote-tablet.png`,png2x:`../assets/images/quote/home/quote-tablet@2x.png`},desktop:{avif1x:`../assets/images/quote/home/quote-desktop.avif`,avif2x:`../assets/images/quote/home/quote-desktop@2x.avif`,webp1x:`../assets/images/quote/home/quote-desktop.webp`,webp2x:`../assets/images/quote/home/quote-desktop@2x.webp`,png1x:`../assets/images/quote/home/quote-desktop.png`,png2x:`../assets/images/quote/home/quote-desktop@2x.png`}},favorites:{mobile:{avif1x:`../assets/images/quote/favorites/quote-f-mob.avif`,avif2x:`../assets/images/quote/favorites/quote-f-mob@2x.avif`,webp1x:`../assets/images/quote/favorites/quote-f-mob.webp`,webp2x:`../assets/images/quote/favorites/quote-f-mob@2x.webp`,png1x:`../assets/images/quote/favorites/quote-f-mob.png`,png2x:`../assets/images/quote/favorites/quote-f-mob@2x.png`},tablet:{avif1x:`../assets/images/quote/favorites/quote-f-tab.avif`,avif2x:`../assets/images/quote/favorites/quote-f-tab@2x.avif`,webp1x:`../assets/images/quote/favorites/quote-f-tab.webp`,webp2x:`../assets/images/quote/favorites/quote-f-tab@2x.webp`,png1x:`../assets/images/quote/favorites/quote-f-tab.png`,png2x:`../assets/images/quote/favorites/quote-f-tab@2x.png`},desktop:{avif1x:`../assets/images/quote/favorites/quote-f-desk.avif`,avif2x:`../assets/images/quote/favorites/quote-f-desk@2x.avif`,webp1x:`../assets/images/quote/favorites/quote-f-desk.webp`,webp2x:`../assets/images/quote/favorites/quote-f-desk@2x.webp`,png1x:`../assets/images/quote/favorites/quote-f-desk.png`,png2x:`../assets/images/quote/favorites/quote-f-desk@2x.png`}}};function O(){return document.body.dataset.page||`home`}function k(){return document.querySelector(`.quote-container`)}function A(e){let t=k(),n=D[O()]||D.home;t&&(t.innerHTML=`
          <div class="quote-card">

            <div class="icon-quote">
              <svg width="34" height="32">
              <use href="../assets/sprite.svg#icon-run-man"></use>
              </svg>
            </div>

              <div class="quote-text-content">
                <div class="quote-title">
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
  `)}var j=`quote`;async function M(){let e=localStorage.getItem(j),t=new Date().toISOString().split(`T`)[0];if(e){let n=JSON.parse(e);if(n.date===t){A(n.data);return}}try{let e=await E();localStorage.setItem(j,JSON.stringify({date:t,data:e})),A(e)}catch(e){console.error(e),n.default.error({title:`Error`,message:`Failed to load quote`,position:`topRight`}),A({author:`Unknown`,quote:`Stay active and take care of your health`})}}async function N(){try{M(),b()}catch(e){console.error(e)}}N();function P(){let e=document.getElementById(`footer-subscribe-form`);e&&e.addEventListener(`submit`,async t=>{t.preventDefault();let n=e.elements.namedItem(`email`);if(!n)return;let r=n.value.trim();try{let t=await fetch(`https://your-energy.b.goit.study/api/subscription`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({email:r})});if(t.status===201){alert(`We're excited to have you on board! 🎉`),e.reset();return}if(t.status===409){alert(`This email is already subscribed to the newsletter!`);return}if(t.status===400||t.status===404){alert(`Bad request. Please check your email formatting.`);return}throw Error(`Unexpected status code`)}catch(e){alert(`A server error occurred. Please try again later.`),console.error(`Subscription system error:`,e)}})}P();
//# sourceMappingURL=index.js.map