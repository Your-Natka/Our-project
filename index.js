import{n as e}from"./assets/rolldown-runtime-BDqkOrsv.js";import"./assets/styles-BGtKRB4F.js";import{t}from"./assets/vendor-BQcEvRoX.js";var n=e(t(),1),r=`https://your-energy.b.goit.study/api`;async function i(e){let t=await fetch(`${r}${e}`);if(!t.ok)throw Error(`HTTP error! Status: ${t.status}`);return t.json()}async function a(e,t=1,n=12){return i(`/filters?filter=${encodeURIComponent(e)}&page=${t}&limit=${n}`)}function o(e,t){t.innerHTML=e.map(({name:e,filter:t,imgURL:n})=>`
      <li class="category-card" data-category="${e}">
        <!-- Шар для фонового зображення з темним оверлеєм для контрасту тексту -->
        <div class="category-card-bg" style="background-image: linear-gradient(0deg, rgba(17, 17, 17, 0.5), rgba(17, 17, 17, 0.5)), url('${n}');"></div>
        <div class="category-card-content">
          <h3 class="category-name">${e}</h3>
          <p class="category-filter">${t}</p>
        </div>
      </li>
    `).join(``)}function s(e,t,n,r){return i(`/exercises?${e}=${t}&page=${n}&limit=${r}`)}var c=`/Our-project/assets/sprite-DjgGVCw9.svg`;function l(e,t){t.innerHTML=e.map(e=>{let t=e.name[0].toUpperCase()+e.name.slice(1),n=e.bodyPart[0].toUpperCase()+e.bodyPart.slice(1),r=e.target[0].toUpperCase()+e.target.slice(1);return`
      <li class="exercise-card">
        <div class="exercise-card-header">
          <span class="exercise-badge">Workout</span>
          <span class="exercise-rating">${Number(e.rating).toFixed(1)}</span>
          <svg class="icon-star" width="18" height="18">
            <use href="${c}#icon-star"></use>
          </svg>
          <button class="exercise-start-btn" data-id="${e._id}">
            Start
            <svg class="icon-arrow" width="16" height="16">
              <use href="${c}#icon-arrow-right"></use>
            </svg>
          </button>
        </div>

        <h3 class="exercise-title">
          <svg class="icon-run-man-small" width="24" height="24">
            <use href="${c}#icon-run-man-small"></use>
          </svg>
          <span class="exercise-name-text">${t}</span>
        </h3>

        <div class="exercise-stats">
          <div><span class="stat-label">Burned calories:</span> ${e.burnedCalories} / 3 min</div>
          <div><span class="stat-label">Body part:</span> ${n}</div>
          <div><span class="stat-label">Target:</span> ${r}</div>
        </div>
      </li>
    `}).join(``)}function u(e){let t=document.getElementById(`exercises-error`),n=document.getElementById(`exercises-list`);e?(n&&(n.innerHTML=``),t&&t.classList.remove(`is-hidden`)):t&&t.classList.add(`is-hidden`)}var d=document.getElementById(`exercises-list`),f=document.getElementById(`exercises-section`),p=`bodypart`,m=``,h=1,g=window.innerWidth>=768?10:8;async function _(e,t){if(t)p=e.toLowerCase(),m=t.toLowerCase();else{let t=document.querySelector(`.filter-btn.active`);if(t&&t.dataset.filter){let e=t.dataset.filter.toLowerCase();p=e===`body parts`?`bodypart`:e}else p=`bodypart`;m=e.toLowerCase()}h=1,f&&f.classList.remove(`is-hidden`),await v()}async function v(){try{u(!1);let e=await s(p,m,h,g);if(!e.results||e.results.length===0){u(!0);return}d&&l(e.results,d)}catch{u(!0)}}window.addEventListener(`resize`,()=>{let e=window.innerWidth>=768?10:8;g!==e&&(g=e,m&&v())}),d&&d.addEventListener(`click`,e=>{let t=e.target.closest(`.exercise-start-btn`);t&&t.dataset.id&&t.blur()}),_(`bodypart`,`s`);var y={section:document.getElementById(`exercises-section`),filterList:document.getElementById(`exercises-filter-list`),categoriesList:document.getElementById(`exercises-list`),title:document.getElementById(`exercises-title`),subtitle:document.getElementById(`exercises-subtitle`),errorBlock:document.getElementById(`exercises-error`),pagination:document.getElementById(`exercises-pagination`)},b=`Muscles`,x=1;function S(){if(!y.filterList||!y.categoriesList){console.warn(`DOM-елементи для ініціалізації лісенерів фільтрів не знайдені.`);return}y.filterList.addEventListener(`click`,w),y.categoriesList.addEventListener(`click`,T),y.title&&y.title.addEventListener(`click`,E),C(b)}async function C(e){if(!(!y.categoriesList||!y.errorBlock))try{y.errorBlock.classList.add(`is-hidden`),y.categoriesList.classList.remove(`is-hidden`);let t=window.innerWidth<768?9:12,n=await a(e,x,t);if(n.results.length===0){D();return}o(n.results,y.categoriesList)}catch(e){console.error(`Помилка завантаження категорій:`,e),D()}}async function w(e){let t=e.target;if(t.nodeName!==`BUTTON`||!y.filterList)return;let n=t;b=n.dataset.filter||`Muscles`,x=1;let r=y.filterList.querySelector(`.filter-btn.active`);r&&(r.classList.remove(`active`),r.setAttribute(`aria-selected`,`false`)),n.classList.add(`active`),n.setAttribute(`aria-selected`,`true`),y.subtitle&&(y.subtitle.textContent=``),await C(b)}function T(e){let t=e.target.closest(`.category-card`);if(!t||!y.subtitle||!y.filterList||!y.categoriesList)return;let n=t.dataset.category||``,r=n.charAt(0).toUpperCase()+n.slice(1);y.subtitle.textContent=` / ${r}`,y.filterList.classList.add(`is-hidden`),y.categoriesList.innerHTML=``,_(n)}function E(){!y.subtitle||!y.subtitle.textContent||!y.filterList||(y.subtitle.textContent=``,y.filterList.classList.remove(`is-hidden`),x=1,C(b))}function D(){y.categoriesList&&y.errorBlock&&(y.categoriesList.innerHTML=``,y.errorBlock.classList.remove(`is-hidden`))}var O=async()=>i(`/quote`),k={home:{mobile:{avif1x:`../assets/images/quote/home/quote-mob.avif`,avif2x:`../assets/images/quote/home/quote-mob@2x.avif`,webp1x:`../assets/images/quote/home/quote-mob.webp`,webp2x:`../assets/images/quote/home/quote-mob@2x.webp`,png1x:`../assets/images/quote/home/quote-mob.png`,png2x:`../assets/images/quote/home/quote-mob@2x.png`},tablet:{avif1x:`../assets/images/quote/home/quote-tablet.avif`,avif2x:`../assets/images/quote/home/quote-tablet@2x.avif`,webp1x:`../assets/images/quote/home/quote-tablet.webp`,webp2x:`../assets/images/quote/home/quote-tablet@2x.webp`,png1x:`../assets/images/quote/home/quote-tablet.png`,png2x:`../assets/images/quote/home/quote-tablet@2x.png`},desktop:{avif1x:`../assets/images/quote/home/quote-desktop.avif`,avif2x:`../assets/images/quote/home/quote-desktop@2x.avif`,webp1x:`../assets/images/quote/home/quote-desktop.webp`,webp2x:`../assets/images/quote/home/quote-desktop@2x.webp`,png1x:`../assets/images/quote/home/quote-desktop.png`,png2x:`../assets/images/quote/home/quote-desktop@2x.png`}},favorites:{mobile:{avif1x:`../assets/images/quote/favorites/quote-f-mob.avif`,avif2x:`../assets/images/quote/favorites/quote-f-mob@2x.avif`,webp1x:`../assets/images/quote/favorites/quote-f-mob.webp`,webp2x:`../assets/images/quote/favorites/quote-f-mob@2x.webp`,png1x:`../assets/images/quote/favorites/quote-f-mob.png`,png2x:`../assets/images/quote/favorites/quote-f-mob@2x.png`},tablet:{avif1x:`../assets/images/quote/favorites/quote-f-tab.avif`,avif2x:`../assets/images/quote/favorites/quote-f-tab@2x.avif`,webp1x:`../assets/images/quote/favorites/quote-f-tab.webp`,webp2x:`../assets/images/quote/favorites/quote-f-tab@2x.webp`,png1x:`../assets/images/quote/favorites/quote-f-tab.png`,png2x:`../assets/images/quote/favorites/quote-f-tab@2x.png`},desktop:{avif1x:`../assets/images/quote/favorites/quote-f-desk.avif`,avif2x:`../assets/images/quote/favorites/quote-f-desk@2x.avif`,webp1x:`../assets/images/quote/favorites/quote-f-desk.webp`,webp2x:`../assets/images/quote/favorites/quote-f-desk@2x.webp`,png1x:`../assets/images/quote/favorites/quote-f-desk.png`,png2x:`../assets/images/quote/favorites/quote-f-desk@2x.png`}}};function A(){return document.body.dataset.page||`home`}function j(){return document.querySelector(`.quote-container`)}function M(e){let t=j(),n=k[A()]||k.home;t&&(t.innerHTML=`
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
  `)}var N=`quote`;async function P(){let e=localStorage.getItem(N),t=new Date().toISOString().split(`T`)[0];if(e){let n=JSON.parse(e);if(n.date===t){M(n.data);return}}try{let e=await O();localStorage.setItem(N,JSON.stringify({date:t,data:e})),M(e)}catch(e){console.error(e),n.default.error({title:`Error`,message:`Failed to load quote`,position:`topRight`}),M({author:`Unknown`,quote:`Stay active and take care of your health`})}}async function F(){try{P(),S()}catch(e){console.error(e)}}F();function I(){let e=document.getElementById(`footer-subscribe-form`);e&&e.addEventListener(`submit`,async t=>{t.preventDefault();let n=e.elements.namedItem(`email`);if(!n)return;let r=n.value.trim();try{let t=await fetch(`https://your-energy.b.goit.study/api/subscription`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({email:r})});if(t.status===201){alert(`We're excited to have you on board! 🎉`),e.reset();return}if(t.status===409){alert(`This email is already subscribed to the newsletter!`);return}if(t.status===400||t.status===404){alert(`Bad request. Please check your email formatting.`);return}throw Error(`Unexpected status code`)}catch(e){alert(`A server error occurred. Please try again later.`),console.error(`Subscription system error:`,e)}})}I();
//# sourceMappingURL=index.js.map