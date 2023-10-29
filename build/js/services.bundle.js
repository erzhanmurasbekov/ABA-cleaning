!function(){var e={699:function(){const e=document.querySelector(".scroll-to-top-btn");window.addEventListener("scroll",(function(){window.scrollY>=50?e.style.display="flex":e.style.display="none"}),{passive:!0}),e.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})}))}},t={};function n(o){var c=t[o];if(void 0!==c)return c.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}!function(){"use strict";function e(e,t){const n=JSON.stringify(t);localStorage.setItem(e,n)}function t(){return{themeToggler:document.querySelector(".theme-toggler-wrap"),themeCircle:document.querySelector(".theme__circle"),sunRays:document.querySelectorAll(".circle__ray"),sunIcon:document.querySelector(".circle__sun"),moonIcon:document.querySelector(".circle__moon")}}const o={LIGHT:"light",DARK:"dark"};let c=function(e){const t=localStorage.getItem("theme");return JSON.parse(t)}()||o.LIGHT;function r(){const{themeToggler:e,themeCircle:n,sunRays:r,sunIcon:i,moonIcon:a}=t(),s=document.querySelector("body");c===o.DARK?(s.classList.add("active-dark-theme"),e.classList.add("theme-toggler-wrap--dark"),e.classList.remove("theme-toggler-wrap--light"),n.classList.add("theme__circle--dark"),n.classList.remove("theme__circle--light"),i.classList.add("circle__sun--hidden"),a.classList.remove("circle__moon--hidden"),r.forEach((e=>e.classList.add("circle__ray--hidden")))):(s.classList.remove("active-dark-theme"),e.classList.remove("theme-toggler-wrap--dark"),e.classList.add("theme-toggler-wrap--light"),n.classList.remove("theme__circle--dark"),n.classList.add("theme__circle--light"),i.classList.remove("circle__sun--hidden"),a.classList.add("circle__moon--hidden"),r.forEach((e=>e.classList.remove("circle__ray--hidden"))))}const i={home:["/comfort-group-cleaning/","/comfort-group-cleaning/index.html"],office:["/comfort-group-cleaning/office.html"],afterRepair:["/comfort-group-cleaning/after-repair.html"],calcOrder:["/comfort-group-cleaning/calc-order.html"],contacts:["/comfort-group-cleaning/contacts.html"],successOr404:["/comfort-group-cleaning/success-order.html","/comfort-group-cleaning/404.html"]},a={home:()=>{l([".nav__link",".nav--aside-menu .nav__link"]),s("index.html#order-cleaning-block")},office:()=>{l([".nav__list .nav__item:nth-child(2) .nav__link",".nav--aside-menu  .nav__list .nav__item:nth-child(2) .nav__link"]),s("office.html#office-calc-block"),u("calc(100% / 3)"),document.querySelectorAll(".element--office-page").forEach((e=>e.classList.remove("isHidden"))),document.querySelector(".element--calculator-page").classList.add("isHidden")},afterRepair:()=>{!function(){const e=document.querySelector(".data-order .data-order__title");document.querySelector(".buildings").style.display="none",e.style.display="none"}(),document.querySelectorAll(".add-services-list__item:nth-child(n+3)").forEach((e=>e.classList.add("isHidden"))),s("after-repair.html#office-calc-block")},calcOrder:()=>{document.querySelector(".footer").classList.add("footer--calc-order"),u("calc(100% / 2)"),document.querySelectorAll(".block").forEach((e=>e.classList.add("block--white"))),document.querySelectorAll(".element--office-page").forEach((e=>e.classList.add("isHidden"))),document.querySelector(".element--calculator-page").classList.remove("isHidden")},contacts:()=>{document.querySelector(".connection").classList.remove("no-padding-top"),document.querySelector(".connection--second-block").classList.add("block-with-image"),d()},successOr404:()=>{d(),window.addEventListener("beforeunload",(function(){localStorage.removeItem("userOrderDataObj")}))}};function s(e){[...document.querySelectorAll(".dynamic-link")].forEach((t=>t.href=e))}function l(e){e.forEach((e=>{const t=document.querySelector(e);t&&t.classList.add("nav__link--current")}))}function d(){document.querySelector("main").classList.add("section--dark-background")}function u(e){document.querySelectorAll(".buildings__element").forEach((t=>t.style.flexBasis=e))}document.addEventListener("DOMContentLoaded",(function(){const n=window.location.pathname,s=document.querySelector("body"),{themeToggler:l}=t();l.addEventListener("click",(()=>{var t;t=s.classList.contains("active-dark-theme")?o.LIGHT:o.DARK,c=t,e("theme",t),r()})),r();const d=Object.keys(a).find((e=>i[e].includes(n)));d&&a[d]()}));var m=!1;if("undefined"!=typeof window){var y={get passive(){m=!0}};window.addEventListener("testPassive",null,y),window.removeEventListener("testPassive",null,y)}var f="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),p=[],v=!1,g=-1,q=void 0,h=void 0,b=void 0,S=function(e){return p.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))},_=function(e){var t=e||window.event;return!!S(t.target)||t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1)},L=function(e,t){if(e){if(!p.some((function(t){return t.targetElement===e}))){var n={targetElement:e,options:t||{}};p=[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(p),[n]),f?window.requestAnimationFrame((function(){if(void 0===h){h={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,t=e.scrollY,n=e.scrollX,o=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-t,document.body.style.left=-n,setTimeout((function(){return window.requestAnimationFrame((function(){var e=o-window.innerHeight;e&&t>=o&&(document.body.style.top=-(t+e))}))}),300)}})):function(e){if(void 0===b){var t=!!e&&!0===e.reserveScrollBarGap,n=window.innerWidth-document.documentElement.clientWidth;if(t&&n>0){var o=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);b=document.body.style.paddingRight,document.body.style.paddingRight=o+n+"px"}}void 0===q&&(q=document.body.style.overflow,document.body.style.overflow="hidden")}(t),f&&(e.ontouchstart=function(e){1===e.targetTouches.length&&(g=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){var n=e.targetTouches[0].clientY-g;!S(e.target)&&(t&&0===t.scrollTop&&n>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&n<0?_(e):e.stopPropagation())}(t,e)},v||(document.addEventListener("touchmove",_,m?{passive:!1}:void 0),v=!0))}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},k=function(e){e?(p=p.filter((function(t){return t.targetElement!==e})),f&&(e.ontouchstart=null,e.ontouchmove=null,v&&0===p.length&&(document.removeEventListener("touchmove",_,m?{passive:!1}:void 0),v=!1)),f?function(){if(void 0!==h){var e=-parseInt(document.body.style.top,10),t=-parseInt(document.body.style.left,10);document.body.style.position=h.position,document.body.style.top=h.top,document.body.style.left=h.left,window.scrollTo(t,e),h=void 0}}():(void 0!==b&&(document.body.style.paddingRight=b,b=void 0),void 0!==q&&(document.body.style.overflow=q,q=void 0))):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")};(()=>{const e=document.querySelector(".aside-menu"),t=document.querySelector(".open-menu-btn"),n=document.querySelector(".close-menu-btn"),o=()=>{const n="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!n),e.classList.toggle("is-open"),(n?k:L)(document.body)};t.addEventListener("click",o),n.addEventListener("click",o),window.matchMedia("(min-width: 768px)").addEventListener("change",(n=>{n.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),k(document.body))}))})(),n(699);const w={name:"subscription",openModalBtn:document.querySelector("[data-subscription-modal-open]"),closeModalBtn:document.querySelector("[data-subscription-modal-close]"),modal:document.querySelector("[data-subscription-modal]"),backdrop:document.querySelector(".backdrop--subscr")};ue(w);const E=document.querySelectorAll(".buildings__element"),A=document.querySelector(".control-quantity-btn--plus"),x=document.querySelector(".control-quantity-btn--minus"),T=document.querySelectorAll(".service-element .checkbox"),H=document.querySelector(".table__data"),D=document.querySelector("#take-keys-btn"),O=document.querySelector("#give-keys-btn"),C=document.querySelector(".keys-address-block"),B=document.querySelector(".keys-address-block__take-item"),I=document.querySelector(".keys-address-block__give-item");A?.addEventListener("click",P),x?.addEventListener("click",P),D?.addEventListener("click",J),O?.addEventListener("click",J),E.forEach((e=>{e.addEventListener("click",(e=>{ce(e.target),function(e){const t=e.target;t.classList.contains("buildings__element--current")||[...E].forEach((e=>{e===t?(e.id,e.classList.add("buildings__element--current")):e.classList.remove("buildings__element--current")}))}(e)}))})),T.forEach((e=>{e.addEventListener("change",(e=>{!function(e){const t=e.currentTarget,n=t.closest("label"),o=n.nextElementSibling,c=t.checked;(function(e,t){e.classList.toggle("isHidden",!t)})(o,c),function(e){const t=e.querySelector(".control-quantity-btn--plus"),n=e.querySelector(".control-quantity-btn--minus");t.addEventListener("click",$),n.addEventListener("click",$)}(o);const r=function(e){const t=e.querySelector(".service-element__text").textContent,n=e.querySelector(".service-element__accent").getAttribute("data-value"),o=e.getAttribute("data-id"),c=document.createElement("li");c.id=o,c.className="table__item table__block";const r=W("item__name",`${t}`),i=W("","x"),a=W("name-wrapper"),s=W("quantity-wrapper");z(s,[i,W("item__quantity service-quantity",M[o].quantity)]),z(a,[r,s]);const l=W("service-value",`${n}zł`);return l.setAttribute("data-service",o),z(c,[a,l]),c}(n),i=n.getAttribute("data-id");(function(e,t){const n=t.id,o=function(e){return[...H.querySelectorAll("li")].find((t=>t.id===e))}(n);e&&!o?(function(e){H.insertAdjacentElement("beforeend",e)}(t),F(n)):!e&&o&&(F(n,0),function(e){H.removeChild(e)}(o))})(c,r),j(i),G(N)}(e)}))}));const M={square:{name:"Площа",quantity:1,price:2},windowsStandard:{name:"Миття вікон (стандартні)",quantity:1,price:35},windowsLarge:{name:"Миття вікон (до підлоги)",quantity:1,price:40},microWave:{name:"Мікрохвильовка",quantity:1,price:15},refrigerator:{name:"Холодильник",quantity:1,price:40},plate:{name:"Плита",quantity:1,price:35},officeChair:{name:"Хімчистка офісних стільців",quantity:1,price:20},sofaDry2x:{name:"Хімчистка дивану 2х",quantity:1,price:109.99},sofaDry3x:{name:"Хімчистка дивану 3х",quantity:1,price:129.99},sofaDry4x:{name:"Хімчистка дивану 4х",quantity:1,price:149.99}},N={square:{name:"Площа",quantity:1,price:2},windowsStandard:{name:"Миття вікон (стандартні)",quantity:0,price:35},windowsLarge:{name:"Миття вікон (до підлоги)",quantity:0,price:40},microWave:{name:"Мікрохвильовка",quantity:0,price:15},refrigerator:{name:"Холодильник",quantity:0,price:40},plate:{name:"Плита",quantity:0,price:35},officeChair:{name:"Хімчистка офісних стільців",quantity:0,price:20},sofaDry2x:{name:"Хімчистка дивану 2х",quantity:0,price:109.99},sofaDry3x:{name:"Хімчистка дивану 3х",quantity:0,price:129.99},sofaDry4x:{name:"Хімчистка дивану 4х",quantity:0,price:149.99}};function R(e){const t=Y(e),n=function(e){return e.currentTarget.getAttribute("data-type")}(e);!function(e,t){if("plus"===t)M[e].quantity+=1;else if("minus"===t){if(1===M[e].quantity)return;M[e].quantity-=1}}(t,n),function(e){const t=[...document.querySelectorAll(".service-element")].find((t=>t.getAttribute("data-id")===e)),n=t?.nextElementSibling.querySelector(`[data-name="${e}"]`),o=document.querySelector(".wrap--square").querySelector(`[data-name="${e}"]`);n&&(n.textContent=M[e].quantity),o&&(o.textContent=M[e].quantity,document.querySelector(".square-value-total").textContent=M[e].quantity)}(t),function(e){const t=document.querySelector(`[data-name="${e}"]`).parentNode?.parentNode?.querySelector(".control-quantity-btn--minus .icon--minus");1===M[e].quantity?t.style.fill="rgba(\t77, 18, 153, 0.3)":t.style.fill="#4D1299"}(t)}function $(e){const t=Y(e);R(e),j(t),G(N)}function P(e){R(e),function(){const e=document.querySelector('[data-service="square"]');N.square.quantity=M.square.quantity,e.textContent=N.square.quantity*N.square.price+"zł"}(),G(N)}function j(e){const t=document.querySelector(`[data-service="${e}"]`),n=document.querySelector(`#${e} .service-quantity`),o=M[e].price;if(t&&n){const c=F(e),r=K(c,o);t.textContent=r,n.textContent=c}else F(e,0)}function K(e,t){return`${(e*t).toFixed(2)}zł`}function F(e,t){const n=void 0!==t?t:M[e].quantity;return N[e].quantity=n,n}function G(e){const t=(n=e,Object.keys(n).reduce(((e,t)=>{const o=n[t];return e+o.quantity*o.price}),0).toFixed(2));var n;document.querySelector(".total-order-value").textContent=`${t}zł`}function W(e,t){const n=document.createElement("span");return e&&(n.className=e),t&&(n.textContent=t),n}function z(e,t){t.forEach((t=>{e.appendChild(t)}))}function Y(e){const t=e.currentTarget?.closest(".wrap--service")?.parentNode.querySelector("label")?.getAttribute("data-id"),n=e.currentTarget?.closest(".wrap--square")?.getAttribute("data-id");return t||n}function J(e){const t=e.currentTarget;t.classList.toggle("active"),"take-keys-btn"===t.id?B.classList.toggle("isHidden"):I.classList.toggle("isHidden"),function(){const e=B.classList.contains("isHidden"),t=I.classList.contains("isHidden");e&&t?C.classList.add("isHidden"):C.classList.remove("isHidden")}()}const X=document.querySelector(".subscr__form"),U=document.querySelectorAll(".payment__btn"),V=document.querySelector(".form__payment-error-text"),Q=document.querySelectorAll(".form__input"),Z=document.querySelector(".calc-btn"),ee=document.querySelector('[name="studio-policy-check"]');let te;ee&&(te=new MutationObserver(((e,t)=>{e.forEach((e=>{"attributes"===e.type&&"data-checked"===e.attributeName&&(ee.getAttribute("data-checked"),le())}))})),te.observe(ee,{attributes:!0,attributeFilter:["data-checked"]}),ee.addEventListener("change",(()=>{ee.setAttribute("data-checked",ee.checked)}))),X?.addEventListener("submit",de),Z?.addEventListener("click",(e=>{e.preventDefault(),de(e)})),U.forEach((e=>{e.addEventListener("click",(e=>{!function(e){const t=e.target.closest("button");ce(t),t.classList.contains("active")||[...U].forEach((e=>{e===t?e.classList.add("active"):e.classList.remove("active")}))}(e),se()}))})),Q.forEach((e=>{e.addEventListener("focus",(()=>{e.classList.remove("error")}))}));const ne=["userName","userSurname","userTel","userEmail","userLocation","userDate","userTime"],oe={userPaymentType:"",userBuildingType:"",userTakeKeyAddress:"",userGiveKeyAddress:"",userSquare:{quantity:"",cost:""},userServices:{}};function ce(e){const t=e.getAttribute("data-type"),n=e.getAttribute("data-id")??"";oe[t]=n}function re(e){[...e].forEach((e=>{e.classList.remove("error")}))}function ie(){return document.querySelector('[name="studio-policy-check"]').checked}function ae(){document.querySelector(".form__payment-error-text").classList.toggle("isHidden")}function se(){!V.classList.contains("isHidden")&&ae()}function le(){document.querySelector(".form__policy-error-text").classList.add("isHidden")}function de(t){t.preventDefault();const n="BUTTON"===t.currentTarget.tagName,o=n?X.elements:t.currentTarget.elements,c=function(e,t){return t.filter((t=>""===e[t].value.trim())).map((t=>e[t]))}(o,ne);re(o),function(e){e.forEach((e=>{e.classList.add("error")}))}(c);const r=[...U].some((e=>e.classList.contains("active"))),i=c.length>0;r||ae(),function(){const e=document.querySelector(".form__policy-error-text");e.classList.add("isHidden"),ie()||e.classList.remove("isHidden")}();const a=ie();if(!r||i||!a)return;const s=n?X:t.target;var l,d,u;n&&(function(){const e=document.querySelector('[data-type="userTakeKeyAddress"]'),t=document.querySelector('[data-type="userGiveKeyAddress"]');ce(e),ce(t)}(),l=oe,d=N.square.quantity,u=N.square.price,l.userSquare={quantity:`${d}`,cost:K(d,u)},function(e){const t=(n=N,Object.keys(n).filter((e=>n[e].quantity>0)).reduce(((e,t)=>(e[t]={...n[t]},delete e[t].square,e)),{}));var n;e.userServices=Object.keys(t).filter((e=>"square"!==e)).map((e=>{const{name:n,quantity:o,price:c}=t[e];return{name:n,quantity:o,cost:K(o,c)}}))}(oe)),function(e){new FormData(e).forEach(((e,t)=>{t.startsWith("user")&&(oe[t]=e)}))}(s),e("userOrderDataObj",oe),function(e){[...e].forEach((e=>{"text"===e.type||"email"===e.type||"tel"===e.type||"TEXTAREA"===e.tagName?e.value="":"checkbox"===e.type&&(e.checked=!0)}))}(o),[...U].forEach((e=>{e.classList.remove("active")})),te.disconnect(),n||me(w),window.location.href=window.location.href="https://marynashavlak.github.io/comfort-group-cleaning/success-order.html"}function ue(e){e.openModalBtn?.addEventListener("click",(()=>me(e))),e.closeModalBtn?.addEventListener("click",(t=>{t.stopPropagation(),me(e)})),e.backdrop?.addEventListener("click",(t=>{t.target===e.backdrop&&me(e)}))}function me(e){document.body.classList.toggle(`${e.name}-modal-open`),e.modal?.classList.toggle("backdrop--hidden"),"subscription"===e.name&&(re(X?.elements),se(),le())}ue({name:"support",openModalBtn:document.querySelector("[data-support-modal-open]"),closeModalBtn:document.querySelector("[data-support-modal-close]"),modal:document.querySelector("[data-support-modal]"),backdrop:document.querySelector(".backdrop--support")}),ue({name:"location",openModalBtn:document.querySelector("[data-location-modal-open]"),closeModalBtn:document.querySelector("[data-location-modal-close]"),modal:document.querySelector("[data-location-modal]"),backdrop:document.querySelector(".backdrop--location")})}()}();