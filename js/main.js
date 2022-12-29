var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}document.addEventListener("DOMContentLoaded",function(){function m(){c&&(t=document.getElementById("site-name").offsetWidth,o=n&&n.offsetWidth,a=i&&i.offsetWidth,c=!1);var e=document.getElementById("nav");window.innerWidth<768||t+o+a>e.offsetWidth-120?e.classList.add("hide-menu"):e.classList.remove("hide-menu")}function h(){var a,o,i,t,c,n,s,e=GLOBAL_CONFIG.highlight.highlightCopy,l=GLOBAL_CONFIG.highlight.highlightLang,r=GLOBAL_CONFIG_SITE.isHighlightShrink,d=e||l||void 0!==r,u="highlighjs"===GLOBAL_CONFIG.highlight.plugin?document.querySelectorAll("figure.highlight"):document.querySelectorAll('pre[class*="language-"]');d&&u.length&&(a="prismjs"===GLOBAL_CONFIG.highlight.plugin,t=!(i=o="")===r?"closed":"",void 0!==r&&(o='<i class="fas fa-angle-down expand '+t+'"></i>'),e&&(i='<div class="copy-notice"></div><i class="fas fa-paste copy-button"></i>'),c=function(e){var t=e.parentNode;t.classList.add("copy-true");var n=window.getSelection(),o=document.createRange();a?o.selectNodeContents(t.querySelectorAll("pre code")[0]):o.selectNodeContents(t.querySelectorAll("table .code pre")[0]),n.removeAllRanges(),n.addRange(o);var i;n.toString();e=e.lastChild,document.queryCommandSupported&&document.queryCommandSupported("copy")?(document.execCommand("copy"),void 0!==GLOBAL_CONFIG.Snackbar?btf.snackbarShow(GLOBAL_CONFIG.copy.success):((i=e.previousElementSibling).innerText=GLOBAL_CONFIG.copy.success,i.style.opacity=1,setTimeout(function(){i.style.opacity=0},700))):void 0!==GLOBAL_CONFIG.Snackbar?btf.snackbarShow(GLOBAL_CONFIG.copy.noSupport):e.previousElementSibling.innerText=GLOBAL_CONFIG.copy.noSupport,n.removeAllRanges(),t.classList.remove("copy-true")},n=function(e){var t,n=e.target.classList;n.contains("expand")?(e=[].concat(_toConsumableArray((t=this).parentNode.children)).slice(1),t.firstChild.classList.toggle("closed"),btf.isHidden(e[0])?e.forEach(function(e){e.style.display="block"}):e.forEach(function(e){e.style.display="none"})):n.contains("copy-button")&&c(this)},s=function(){var e=document.createElement("div");return e.className="highlight-tools "+t,e.addEventListener("click",n),e},l?a?u.forEach(function(e){var t='<div class="code-lang">'+(void 0!==e.getAttribute("data-language")?e.getAttribute("data-language"):"Code")+"</div>";btf.wrap(e,"figure","","highlight");var n=s();n.innerHTML=o+t+i,e.parentNode.insertBefore(n,e)}):u.forEach(function(e){var t=e.getAttribute("class").split(" ")[1];"plain"!==t&&void 0!==t||(t="Code");var n='<div class="code-lang">'+t+"</div>",t=s();t.innerHTML=o+n+i,e.insertBefore(t,e.firstChild)}):a?u.forEach(function(e){btf.wrap(e,"figure","","highlight");var t=s();t.innerHTML=o+i,e.parentNode.insertBefore(t,e)}):u.forEach(function(e){var t=s();t.innerHTML=o+i,e.insertBefore(t,e.firstChild)}))}var t=document.getElementById("site-name").offsetWidth,n=document.querySelector("#menus .menus_items"),o=n&&n.offsetWidth,i=document.querySelector("#search-button"),a=i&&i.offsetWidth,c=!1;function s(e){function t(e){e.each(function(e,t){var n=$(t),o=n.attr("data-lazy-src")||n.attr("src"),t=n.attr("alt")||"";n.wrap('<a href="'+o+'" data-fancybox="group" data-caption="'+t+'" class="fancybox"></a>')}),$().fancybox({selector:"[data-fancybox]",loop:!0,transitionEffect:"slide",protect:!0,buttons:["slideShow","fullScreen","thumbs","close"],hash:!1})}void 0===$.fancybox?($("head").append('<link rel="stylesheet" type="text/css" href="'+GLOBAL_CONFIG.source.fancybox.css+'">'),$.getScript(""+GLOBAL_CONFIG.source.fancybox.js,function(){t($(e))})):t($(e))}function g(){var n="fancybox"===GLOBAL_CONFIG.lightbox?document.querySelectorAll("#article-container :not(a):not(.gallery-group) > img, #article-container > img"):[],o=0<n.length,i=document.querySelectorAll("#article-container .justified-gallery"),a=0<i.length;(a||o)&&btf.isJqueryLoad(function(){var e,t;a&&(e=i,t=$(e),(e=t.find("img")).unwrap(),e.length&&e.each(function(e,t){$(t).attr("data-lazy-src")&&$(t).attr("src",$(t).attr("data-lazy-src")),$(t).wrap("<div></div>")}),l?btf.initJustifiedGallery(t):($("head").append('<link rel="stylesheet" type="text/css" href="'+GLOBAL_CONFIG.source.justifiedGallery.css+'">'),$.getScript(""+GLOBAL_CONFIG.source.justifiedGallery.js,function(){btf.initJustifiedGallery(t)}),l=!0)),o&&s(n)})}function y(){var i,a,c,s,l,r=document.getElementById("rightside"),d=window.innerHeight+56;document.body.scrollHeight<=d?r.style.cssText="opacity: 1; transform: translateX(-38px)":(a=!(i=0),c=document.getElementById("nav"),s="function"==typeof chatBtnHide,l="function"==typeof chatBtnShow,window.addEventListener("scroll",btf.throttle(function(e){var t,n,o=window.scrollY||document.documentElement.scrollTop,n=(n=i<(t=o),i=t,n);56<o?(n?(c.classList.contains("visible")&&c.classList.remove("visible"),l&&!0===a&&(chatBtnHide(),a=!1)):(c.classList.contains("visible")||c.classList.add("visible"),s&&!1===a&&(chatBtnShow(),a=!0)),c.classList.add("fixed"),"0"===window.getComputedStyle(r).getPropertyValue("opacity")&&(r.style.cssText="opacity: 1; transform: translateX(-38px)")):(0===o&&c.classList.remove("fixed","visible"),r.style.cssText="opacity: ''; transform: ''"),document.body.scrollHeight<=d&&(r.style.cssText="opacity: 1; transform: translateX(-38px)")},200)))}function p(){var e=document.getElementById("card-toc"),c=e.getElementsByClassName("toc-content")[0],s=c.querySelectorAll(".toc-link"),i=document.getElementById("article-container");window.addEventListener("scroll",btf.throttle(function(e){var t=window.scrollY||document.documentElement.scrollTop;n(t),a(t)},100));var n=function(e){var t=i.clientHeight,n=document.documentElement.clientHeight,o=(e-i.offsetTop)/(n<t?t-n:document.documentElement.scrollHeight-n),n=Math.round(100*o),n=100<n?100:n<=0?0:n;c.setAttribute("progress-percentage",n)},l=GLOBAL_CONFIG.isanchor,t=function(){e.style.cssText="animation: toc-open .3s; opacity: 1; right: 45px"},o=function(){e.style.animation="toc-close .2s",setTimeout(function(){e.style.cssText="opacity:''; animation: ''; right: ''"},100)};document.getElementById("mobile-toc-button").addEventListener("click",function(){("0"===window.getComputedStyle(e).getPropertyValue("opacity")?t:o)()}),c.addEventListener("click",function(e){e.preventDefault();e=e.target.classList.contains("toc-link")?e.target:e.target.parentElement;btf.scrollToDest(btf.getEleTop(document.getElementById(decodeURI(e.getAttribute("href")).replace("#",""))),300),window.innerWidth<900&&o()});var r=i.querySelectorAll("h1,h2,h3,h4,h5,h6"),d="",a=function(n){if(0===s.length||0===n)return!1;var e,o="",i="";if(r.forEach(function(e,t){n>btf.getEleTop(e)-70&&(o="#"+encodeURI(e.getAttribute("id")),i=t)}),d!==i){if(l&&(e=o,window.history.replaceState&&e!==window.location.hash&&(e=e||location.pathname,window.history.replaceState({},"",e))),""===o)return c.querySelectorAll(".active").forEach(function(e){e.classList.remove("active")}),void(d=i);d=i,c.querySelectorAll(".active").forEach(function(e){e.classList.remove("active")});var a=s[i];a.classList.add("active"),setTimeout(function(){var e,t;t=(e=a).getBoundingClientRect().top,e=c.scrollTop,t>document.documentElement.clientHeight-100&&(c.scrollTop=e+150),t<100&&(c.scrollTop=e-150)},0);for(var t=a.parentNode;!t.matches(".toc");t=t.parentNode)t.matches("li")&&t.classList.add("active")}}}var l=!1,r=function(){var t=document.body;t.classList.add("read-mode");var n=document.createElement("button");n.type="button",n.className="fas fa-sign-out-alt exit-readmode",t.appendChild(n),n.addEventListener("click",function e(){t.classList.remove("read-mode"),n.remove(),n.removeEventListener("click",e)})},d=function(){"light"==("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")?(activateDarkMode(),saveToLocal.set("theme","dark",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)):(activateLightMode(),saveToLocal.set("theme","light",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),"function"==typeof utterancesTheme&&utterancesTheme(),"object"===("undefined"==typeof FB?"undefined":_typeof(FB))&&window.loadFBComment(),window.DISQUS&&document.getElementById("disqus_thread").children.length&&setTimeout(function(){return window.disqusReset()},200)},u=function(){document.getElementById("rightside-config-hide").classList.toggle("show")},f=function(){btf.scrollToDest(0,500)},L=function(){var e=document.documentElement.classList;e.contains("hide-aside")?saveToLocal.set("aside-status","show",2):saveToLocal.set("aside-status","hide",2),e.toggle("hide-aside")},v=function(e){var t=parseInt(window.getComputedStyle(document.documentElement).getPropertyValue("--global-font-size")),n="";if(c=!0,e){if(20<=t)return;n=t+1,document.documentElement.style.setProperty("--global-font-size",n+"px"),document.getElementById("nav").classList.contains("hide-menu")||m()}else{if(t<=10)return;n=t-1,document.documentElement.style.setProperty("--global-font-size",n+"px"),document.getElementById("nav").classList.contains("hide-menu")&&m()}saveToLocal.set("global-font-size",n,2)};document.getElementById("rightside").addEventListener("click",function(e){switch(e.target.id||e.target.parentNode.id){case"go-up":f();break;case"rightside_config":u();break;case"readmode":r();break;case"darkmode":d();break;case"hide-aside-btn":L();break;case"font-plus":v(!0);break;case"font-minus":v()}});function b(e){e.forEach(function(e){var t=e,e=t.getAttribute("datetime");t.innerText=btf.diffDate(e,!0),t.style.display="inline"})}var E,A=function(){document.querySelectorAll("#article-container .tab > button").forEach(function(e){e.addEventListener("click",function(e){var t,n,o,i=this.parentNode;i.classList.contains("active")||(o=i.parentNode.nextElementSibling,(t=btf.siblings(i,".active")[0])&&t.classList.remove("active"),i.classList.add("active"),n=this.getAttribute("data-href").replace("#",""),[].concat(_toConsumableArray(o.children)).forEach(function(e){e.id===n?e.classList.add("active"):e.classList.remove("active")}),0<(o=o.querySelectorAll("#"+n+" .justified-gallery")).length&&btf.initJustifiedGallery(o))})})},G=function(){document.querySelectorAll("#article-container .tabs .tab-to-top").forEach(function(e){e.addEventListener("click",function(){btf.scrollToDest(btf.getEleTop(btf.getParents(this,".tabs")),300)})})};window.refreshFn=function(){var e,t,n,o,i,a,c,s,l,r,d,u;function f(){l.style.overflow="",l.style.paddingRight="",btf.fadeOut(s,.5),c.classList.remove("open")}m(),document.getElementById("nav").classList.add("show"),GLOBAL_CONFIG_SITE.isPost?(GLOBAL_CONFIG_SITE.isToc&&p(),void 0!==GLOBAL_CONFIG.noticeOutdate&&(o=GLOBAL_CONFIG.noticeOutdate,(i=btf.diffDate(GLOBAL_CONFIG_SITE.postUpdate))>=o.limitDay&&((n=document.createElement("div")).className="post-outdate-notice",n.textContent=o.messagePrev+" "+i+" "+o.messageNext,i=document.getElementById("article-container"),"top"===o.position?i.insertBefore(n,i.firstChild):i.appendChild(n))),GLOBAL_CONFIG.relativeDate.post&&b(document.querySelectorAll("#post-meta time"))):(GLOBAL_CONFIG.relativeDate.homepage&&b(document.querySelectorAll("#recent-posts time")),!GLOBAL_CONFIG.runtime||(n=document.getElementById("runtimeshow"))&&(t=n.getAttribute("data-publishDate"),n.innerText=btf.diffDate(t)+" "+GLOBAL_CONFIG.runtime),(t=document.getElementById("last-push-date"))&&(e=t.getAttribute("data-lastPushDate"),t.innerText=btf.diffDate(e,!0)),(e=document.querySelectorAll("#aside-cat-list .card-category-list-item.parent i")).length&&e.forEach(function(e){e.addEventListener("click",function(e){e.preventDefault();this.classList.toggle("expand");e=this.parentNode.nextElementSibling;btf.isHidden(e)?e.style.display="block":e.style.display="none"})})),a=document.getElementById("toggle-menu"),c=document.getElementById("sidebar-menus"),s=document.getElementById("menu-mask"),l=document.body,a.addEventListener("click",function(){btf.sidebarPaddingR(),l.style.overflow="hidden",btf.fadeIn(s,.5),c.classList.add("open")}),s.addEventListener("click",function(e){c.classList.contains("open")&&f()}),window.addEventListener("resize",function(e){btf.isHidden(a)&&c.classList.contains("open")&&f()}),!GLOBAL_CONFIG_SITE.isHome||(u=document.getElementById("scroll-down"))&&u.addEventListener("click",function(){btf.scrollToDest(document.getElementById("content-inner").offsetTop,300)}),GLOBAL_CONFIG.highlight&&h(),GLOBAL_CONFIG.isPhotoFigcaption&&document.querySelectorAll("#article-container img").forEach(function(e){var t,n=e.parentNode;n.parentNode.classList.contains("justified-gallery")||((t=document.createElement("div")).className="img-alt is-center",t.textContent=e.getAttribute("alt"),n.insertBefore(t,e.nextSibling))}),g(),"mediumZoom"===GLOBAL_CONFIG.lightbox&&(r=mediumZoom(document.querySelectorAll("#article-container :not(a)>img"))).on("open",function(e){var t="dark"===document.documentElement.getAttribute("data-theme")?"#121212":"#fff";r.update({background:t})}),y(),(u=document.querySelectorAll("#article-container :not(.highlight) > table, #article-container > table")).length&&u.forEach(function(e){btf.wrap(e,"div","","table-wrap")}),(u=document.querySelectorAll("#article-container .hide-button")).length&&u.forEach(function(e){e.addEventListener("click",function(e){var t=this.nextElementSibling;this.classList.toggle("open"),this.classList.contains("open")&&0<t.querySelectorAll(".justified-gallery").length&&btf.initJustifiedGallery(t.querySelectorAll(".justified-gallery"))})}),A(),G(),d=!1,(u=document.querySelector("#comment-switch > .switch-btn"))&&u.addEventListener("click",function(){this.classList.toggle("move"),document.querySelectorAll("#post-comment > .comment-wrap > div").forEach(function(e){btf.isHidden(e)?e.style.cssText="display: block;animation: tabshow .5s":e.style.cssText="display: none;animation: ''"}),d||"function"!=typeof loadOtherComment||(d=!0,loadOtherComment())})},refreshFn(),window.addEventListener("resize",m),document.querySelectorAll("#sidebar-menus .expand").forEach(function(e){e.addEventListener("click",function(){this.classList.toggle("hide");var e=this.parentNode.nextElementSibling;btf.isHidden(e)?e.style.display="block":e.style.display="none"})}),window.addEventListener("touchmove",function(e){document.querySelectorAll("#nav .menus_item_child").forEach(function(e){btf.isHidden(e)||(e.style.display="none")})}),GLOBAL_CONFIG.islazyload&&(window.lazyLoadInstance=new LazyLoad({elements_selector:"img",threshold:0,data_src:"lazy-src"})),void 0!==GLOBAL_CONFIG.copyright&&(E=GLOBAL_CONFIG.copyright,document.body.oncopy=function(e){e.preventDefault();var t=void 0,n=window.getSelection(0).toString(),t=n.length>E.limitCount?n+"\n\n\n"+E.languages.author+"\n"+E.languages.link+window.location.href+"\n"+E.languages.source+"\n"+E.languages.info:n;return(e.clipboardData?e:window).clipboardData.setData("text",t)})});