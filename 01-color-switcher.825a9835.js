!function(){function t(){return document.body.style.backgroundColor="white"}var e=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]");function o(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16)),setTimeout(o,1e3)}n.disabled=!0,e.addEventListener("click",(function(){!0,e.disabled=!0,n.disabled=!1,o()}));var d=t();n.addEventListener("click",(function(){return!1,e.disabled=!1,n.disabled=!0,clearInterval(d),t()})),clearInterval(d)}();
//# sourceMappingURL=01-color-switcher.825a9835.js.map
