import"./assets/styles-CjP3mj56.js";const l="https://your-energy.b.goit.study/api";async function s(e){const t=await fetch(`${l}${e}`);if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);return t.json()}function u(e,t=1,r=12){return s(`/filters?filter=${e}&page=${t}&limit=${r}`)}function f(e,t,r){t.innerHTML=e.map(n=>`
        <button class="filter-btn" data-name="${n.name}">
          ${n.name}
        </button>
      `).join(""),t.querySelectorAll(".filter-btn").forEach(n=>{n.addEventListener("click",()=>{r(n.dataset.name)})})}function d(e=""){return s(`/exercises?${e}`)}function y(e,t){t.innerHTML=e.map(r=>`
        <div class="exercise-card">
          <h3>${r.name}</h3>
          <p>${r.bodyPart}</p>
          <p>${r.target}</p>
        </div>
      `).join("")}const m=document.querySelector("#exercises");let i="muscles";function p(){c(i)}async function c(e){i=e;try{const t=await d(`bodypart=${e.toLowerCase()}&page=1&limit=10`);y(t.results,m)}catch(t){console.error(t)}}const $=document.querySelector("#filters");let o="Muscles";function h(){a(o)}async function a(e){try{const t=await u(e);f(t.results,$,g)}catch(t){console.error(t)}}function g(e){o=e,a(o),c(o)}async function E(){return s("/quote")}async function w(){try{const e=await E();console.log("QUOTE:",e),h(),p()}catch(e){console.error(e)}}w();
//# sourceMappingURL=index.js.map
