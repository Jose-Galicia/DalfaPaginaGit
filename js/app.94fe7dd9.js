(function(){var n={8034:function(){function n(){const n=document.querySelector(".slider"),e=n.querySelectorAll("img")[0];arrowIcons=document.querySelectorAll(".wrapper i");let r,t,o=!1,i=e.clientWidth+140;arrowIcons.forEach((e=>{e.addEventListener("click",(()=>{n.scrollLeft+="left"==e.id?-i:i}))}));const u=e=>{o=!0,r=e.pageX,t=n.scrollLeft},c=e=>{if(!o)return;e.preventDefault(),n.classList.add("dragging");let i=e.pageX-r;n.scrollLeft=t-i},a=()=>{o=!1,n.classList.remove("dragging")};n.addEventListener("mousedown",u),n.addEventListener("mousemove",c),n.addEventListener("mouseup",a)}window.addEventListener("load",n)},9180:function(n,e,r){"use strict";var t=r(9242),o=r(3396);function i(n,e){const r=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(r)}var u=r(89);const c={},a=(0,u.Z)(c,[["render",i]]);var f=a,s=r(2483);r(7139);r.p;r.p;r.p,r.p,r.p,r.p,r.p,r.p;r.p;const l=(0,s.p7)({routes:Routes,mode:"hash"});var d=l;r(8034);(0,t.ri)(f).use(d).mount("#app")}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var i=e[t]={exports:{}};return n[t](i,i.exports,r),i.exports}r.m=n,function(){var n=[];r.O=function(e,t,o,i){if(!t){var u=1/0;for(s=0;s<n.length;s++){t=n[s][0],o=n[s][1],i=n[s][2];for(var c=!0,a=0;a<t.length;a++)(!1&i||u>=i)&&Object.keys(r.O).every((function(n){return r.O[n](t[a])}))?t.splice(a--,1):(c=!1,i<u&&(u=i));if(c){n.splice(s--,1);var f=o();void 0!==f&&(e=f)}}return e}i=i||0;for(var s=n.length;s>0&&n[s-1][2]>i;s--)n[s]=n[s-1];n[s]=[t,o,i]}}(),function(){r.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return r.d(e,{a:e}),e}}(),function(){r.d=function(n,e){for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){r.p="/DalfaPaginaGit/"}(),function(){var n={143:0};r.O.j=function(e){return 0===n[e]};var e=function(e,t){var o,i,u=t[0],c=t[1],a=t[2],f=0;if(u.some((function(e){return 0!==n[e]}))){for(o in c)r.o(c,o)&&(r.m[o]=c[o]);if(a)var s=a(r)}for(e&&e(t);f<u.length;f++)i=u[f],r.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return r.O(s)},t=self["webpackChunkdalfarconsultores"]=self["webpackChunkdalfarconsultores"]||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))}();var t=r.O(void 0,[998],(function(){return r(9180)}));t=r.O(t)})();
//# sourceMappingURL=app.94fe7dd9.js.map