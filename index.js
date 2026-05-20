import"./assets/styles-Dr0Vv68o.js";const n="https://your-energy.b.goit.study/api";async function r(t){const o=await fetch(`${n}${t}`);if(!o.ok)throw new Error(`HTTP error! Status: ${o.status}`);return o.json()}async function e(){return r("/quote")}async function a(){try{const t=await e();console.log(t)}catch(t){console.log(t)}}a();
//# sourceMappingURL=index.js.map
