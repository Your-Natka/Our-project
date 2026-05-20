import"./assets/styles-DIUchJxg.js";var e=`https://your-energy.b.goit.study/api`;async function t(t){let n=await fetch(`${e}${t}`);if(!n.ok)throw Error(`HTTP error! Status: ${n.status}`);return n.json()}function n(e,n=1,r=12){return t(`/filters?filter=${e}&page=${n}&limit=${r}`)}function r(e,t,n){t.innerHTML=e.map(e=>`
        <button class="filter-btn" data-name="${e.name}">
          ${e.name}
        </button>
      `).join(``),t.querySelectorAll(`.filter-btn`).forEach(e=>{e.addEventListener(`click`,()=>{n(e.dataset.name)})})}function i(e=``){return t(`/exercises?${e}`)}function a(e,t){t.innerHTML=e.map(e=>`
        <div class="exercise-card">
          <h3>${e.name}</h3>
          <p>${e.bodyPart}</p>
          <p>${e.target}</p>
        </div>
      `).join(``)}var o=document.querySelector(`#exercises`),s=`muscles`;function c(){l(s)}async function l(e){s=e;try{a((await i(`bodypart=${e.toLowerCase()}&page=1&limit=10`)).results,o)}catch(e){console.error(e)}}var u=document.querySelector(`#filters`),d=`Muscles`;function f(){p(d)}async function p(e){try{r((await n(e)).results,u,m)}catch(e){console.error(e)}}function m(e){d=e,p(d),l(d)}async function h(){return t(`/quote`)}async function g(){try{let e=await h();console.log(`QUOTE:`,e),f(),c()}catch(e){console.error(e)}}g();
//# sourceMappingURL=index.js.map