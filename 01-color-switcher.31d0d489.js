!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),o=null;e.disabled=!0,t.setAttribute("style","position: absolute; top: 45%; right: 50%; width: 100px; height: 50px; font-size: 25px;"),e.setAttribute("style","position: absolute; top: 51%; right: 50%; width: 100px; height: 50px; font-size: 25px;"),t.addEventListener("click",(function(){o=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));document.body.style.backgroundColor=t}),1e3),t.disabled=!0,e.disabled=!1})),e.addEventListener("click",(function(){clearInterval(o),t.disabled=!1,e.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.31d0d489.js.map