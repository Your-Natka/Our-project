import{n as e}from"./assets/rolldown-runtime-BDqkOrsv.js";import"./assets/styles-Biyiydvw.js";import{t}from"./assets/vendor-BQcEvRoX.js";var n=e(t(),1),r=`https://your-energy.b.goit.study/api`;async function i(e){let t=await fetch(`${r}${e}`);if(!t.ok)throw Error(`HTTP error! Status: ${t.status}`);return t.json()}async function a(e,t=1,n=12){return i(`/filters?filter=${encodeURIComponent(e)}&page=${t}&limit=${n}`)}function o(e,t){t.innerHTML=e.map(({name:e,filter:t,imgURL:n})=>`
      <li class="category-card" data-category="${e}">
        <!-- Шар для фонового зображення з темним оверлеєм для контрасту тексту -->
        <div class="category-card-bg" style="background-image: linear-gradient(0deg, rgba(17, 17, 17, 0.5), rgba(17, 17, 17, 0.5)), url('${n}');"></div>
        <div class="category-card-content">
          <h3 class="category-name">${e}</h3>
          <p class="category-filter">${t}</p>
        </div>
      </li>
    `).join(``)}function s(e=``){return i(`/exercises?${e}`)}function c(e,t){t.innerHTML=e.map(e=>`
        <div class="exercise-card">
          <h3>${e.name}</h3>
          <p>${e.bodyPart}</p>
          <p>${e.target}</p>
        </div>
      `).join(``)}var l=document.querySelector(`#exercises-list`);async function u(e){try{c((await s(`bodypart=${e.toLowerCase()}&page=1&limit=10`)).results,l)}catch(e){console.error(e)}}var d={section:document.getElementById(`exercises-section`),filterList:document.getElementById(`exercises-filter-list`),categoriesList:document.getElementById(`exercises-list`),title:document.getElementById(`exercises-title`),subtitle:document.getElementById(`exercises-subtitle`),errorBlock:document.getElementById(`exercises-error`),pagination:document.getElementById(`exercises-pagination`)},f=`Muscles`,p=1;function m(){if(!d.filterList||!d.categoriesList){console.warn(`DOM-елементи для ініціалізації лісенерів фільтрів не знайдені.`);return}d.filterList.addEventListener(`click`,g),d.categoriesList.addEventListener(`click`,_),d.title&&d.title.addEventListener(`click`,v),h(f)}async function h(e){if(!(!d.categoriesList||!d.errorBlock))try{d.errorBlock.classList.add(`is-hidden`),d.categoriesList.classList.remove(`is-hidden`);let t=window.innerWidth<768?9:12,n=await a(e,p,t);if(n.results.length===0){y();return}o(n.results,d.categoriesList)}catch(e){console.error(`Помилка завантаження категорій:`,e),y()}}async function g(e){let t=e.target;if(t.nodeName!==`BUTTON`||!d.filterList)return;let n=t;f=n.dataset.filter||`Muscles`,p=1;let r=d.filterList.querySelector(`.filter-btn.active`);r&&(r.classList.remove(`active`),r.setAttribute(`aria-selected`,`false`)),n.classList.add(`active`),n.setAttribute(`aria-selected`,`true`),d.subtitle&&(d.subtitle.textContent=``),await h(f)}function _(e){let t=e.target.closest(`.category-card`);if(!t||!d.subtitle||!d.filterList||!d.categoriesList)return;let n=t.dataset.category||``,r=n.charAt(0).toUpperCase()+n.slice(1);d.subtitle.textContent=` / ${r}`,d.filterList.classList.add(`is-hidden`),d.categoriesList.innerHTML=``,u(n)}function v(){!d.subtitle||!d.subtitle.textContent||!d.filterList||(d.subtitle.textContent=``,d.filterList.classList.remove(`is-hidden`),p=1,h(f))}function y(){d.categoriesList&&d.errorBlock&&(d.categoriesList.innerHTML=``,d.errorBlock.classList.remove(`is-hidden`))}var b=async()=>i(`/quote`),x={home:{mobile:{avif1x:`../assets/images/quote/home/quote-mob.avif`,avif2x:`../assets/images/quote/home/quote-mob@2x.avif`,webp1x:`../assets/images/quote/home/quote-mob.webp`,webp2x:`../assets/images/quote/home/quote-mob@2x.webp`,png1x:`../assets/images/quote/home/quote-mob.png`,png2x:`../assets/images/quote/home/quote-mob@2x.png`},tablet:{avif1x:`../assets/images/quote/home/quote-tablet.avif`,avif2x:`../assets/images/quote/home/quote-tablet@2x.avif`,webp1x:`../assets/images/quote/home/quote-tablet.webp`,webp2x:`../assets/images/quote/home/quote-tablet@2x.webp`,png1x:`../assets/images/quote/home/quote-tablet.png`,png2x:`../assets/images/quote/home/quote-tablet@2x.png`},desktop:{avif1x:`../assets/images/quote/home/quote-desktop.avif`,avif2x:`../assets/images/quote/home/quote-desktop@2x.avif`,webp1x:`../assets/images/quote/home/quote-desktop.webp`,webp2x:`../assets/images/quote/home/quote-desktop@2x.webp`,png1x:`../assets/images/quote/home/quote-desktop.png`,png2x:`../assets/images/quote/home/quote-desktop@2x.png`}},favorites:{mobile:{avif1x:`../assets/images/quote/favorites/quote-f-mob.avif`,avif2x:`../assets/images/quote/favorites/quote-f-mob@2x.avif`,webp1x:`../assets/images/quote/favorites/quote-f-mob.webp`,webp2x:`../assets/images/quote/favorites/quote-f-mob@2x.webp`,png1x:`../assets/images/quote/favorites/quote-f-mob.png`,png2x:`../assets/images/quote/favorites/quote-f-mob@2x.png`},tablet:{avif1x:`../assets/images/quote/favorites/quote-f-tab.avif`,avif2x:`../assets/images/quote/favorites/quote-f-tab@2x.avif`,webp1x:`../assets/images/quote/favorites/quote-f-tab.webp`,webp2x:`../assets/images/quote/favorites/quote-f-tab@2x.webp`,png1x:`../assets/images/quote/favorites/quote-f-tab.png`,png2x:`../assets/images/quote/favorites/quote-f-tab@2x.png`},desktop:{avif1x:`../assets/images/quote/favorites/quote-f-desk.avif`,avif2x:`../assets/images/quote/favorites/quote-f-desk@2x.avif`,webp1x:`../assets/images/quote/favorites/quote-f-desk.webp`,webp2x:`../assets/images/quote/favorites/quote-f-desk@2x.webp`,png1x:`../assets/images/quote/favorites/quote-f-desk.png`,png2x:`../assets/images/quote/favorites/quote-f-desk@2x.png`}}};function S(){return document.body.dataset.page||`home`}function C(){return document.querySelector(`.quote-container`)}function w(e){let t=C(),n=x[S()]||x.home;t&&(t.innerHTML=`
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
  `)}var T=`quote`;async function E(){let e=localStorage.getItem(T),t=new Date().toISOString().split(`T`)[0];if(e){let n=JSON.parse(e);if(n.date===t){w(n.data);return}}try{let e=await b();localStorage.setItem(T,JSON.stringify({date:t,data:e})),w(e)}catch(e){console.error(e),n.default.error({title:`Error`,message:`Failed to load quote`,position:`topRight`}),w({author:`Unknown`,quote:`Stay active and take care of your health`})}}async function D(){try{E(),m()}catch(e){console.error(e)}}D();function O(){let e=document.getElementById(`footer-subscribe-form`);e&&e.addEventListener(`submit`,async t=>{t.preventDefault();let n=e.elements.namedItem(`email`);if(!n)return;let r=n.value.trim();try{let t=await fetch(`https://your-energy.b.goit.study/api/subscription`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({email:r})});if(t.status===201){alert(`We're excited to have you on board! 🎉`),e.reset();return}if(t.status===409){alert(`This email is already subscribed to the newsletter!`);return}if(t.status===400||t.status===404){alert(`Bad request. Please check your email formatting.`);return}throw Error(`Unexpected status code`)}catch(e){alert(`A server error occurred. Please try again later.`),console.error(`Subscription system error:`,e)}})}O();
//# sourceMappingURL=index.js.map