(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(e){if(e.ep)return;e.ep=!0;const n=l(e);fetch(e.href,n)}})();document.querySelectorAll('a[href^="#"]').forEach(o=>{o.addEventListener("click",function(t){t.preventDefault(),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})})});let c=document.getElementById("menu-open-button"),r=document.getElementById("header-menu"),u=document.getElementById("menu-close-button");c.addEventListener("click",function(){r.classList.toggle("is-open")});u.addEventListener("click",function(){r.classList.toggle("is-open")});document.addEventListener("click",function(o){let t=r.contains(o.target)||c.contains(o.target);!t&&!r.classList.contains("is-open")||!t&&r.classList.contains("is-open")&&r.classList.remove("is-open")});document.addEventListener("DOMContentLoaded",function(){var o=document.querySelectorAll(".check-pattern");o.forEach(function(t){t.addEventListener("input",function(){t.value.trim()!==""?t.classList.add("check-pattern-applied"):t.classList.remove("check-pattern-applied")})})});
//# sourceMappingURL=commonHelpers.js.map
