!function(){var e={314:function(){const e=document.querySelector(".scroll-to-top-btn");window.addEventListener("scroll",(function(){window.scrollY>=50?e.style.display="flex":e.style.display="none"}),{passive:!0}),e.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})}))}},t={};function n(o){var c=t[o];if(void 0!==c)return c.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}!function(){"use strict";function e(e,t){const n=JSON.stringify(t);localStorage.setItem(e,n)}function t(e){const t=localStorage.getItem(e);return JSON.parse(t)}function o(e){localStorage.removeItem(e)}function c(){return{themeToggler:document.querySelector(".theme-toggler-wrap"),themeCircle:document.querySelector(".theme__circle"),sunRays:document.querySelectorAll(".circle__ray"),sunIcon:document.querySelector(".circle__sun"),moonIcon:document.querySelector(".circle__moon")}}const r={LIGHT:"light",DARK:"dark"};let i=t("theme")||r.LIGHT;function a(){const{themeToggler:e,themeCircle:t,sunRays:n,sunIcon:o,moonIcon:a}=c(),s=document.querySelector("body");i===r.DARK?(s.classList.add("active-dark-theme"),e.classList.add("theme-toggler-wrap--dark"),e.classList.remove("theme-toggler-wrap--light"),t.classList.add("theme__circle--dark"),t.classList.remove("theme__circle--light"),o.classList.add("circle__sun--hidden"),a.classList.remove("circle__moon--hidden"),n.forEach((e=>e.classList.add("circle__ray--hidden")))):(s.classList.remove("active-dark-theme"),e.classList.remove("theme-toggler-wrap--dark"),e.classList.add("theme-toggler-wrap--light"),t.classList.remove("theme__circle--dark"),t.classList.add("theme__circle--light"),o.classList.remove("circle__sun--hidden"),a.classList.add("circle__moon--hidden"),n.forEach((e=>e.classList.remove("circle__ray--hidden"))))}const s={home:["/comfort-group-cleaning/","/comfort-group-cleaning/index.html"],office:["/comfort-group-cleaning/office.html"],afterRepair:["/comfort-group-cleaning/after-repair.html"],calcOrder:["/comfort-group-cleaning/calc-order.html"],contacts:["/comfort-group-cleaning/contacts.html"],successOr404:["/comfort-group-cleaning/success-order.html","/comfort-group-cleaning/404.html"]},l={home:()=>{u([".nav__link",".nav--aside-menu .nav__link"]),d("index.html#order-cleaning-block")},office:()=>{u([".nav__list .nav__item:nth-child(2) .nav__link",".nav--aside-menu  .nav__list .nav__item:nth-child(2) .nav__link"]),d("office.html#office-calc-block"),y("calc(100% / 3)"),document.querySelectorAll(".element--office-page").forEach((e=>e.classList.remove("isHidden"))),document.querySelector(".element--calculator-page").classList.add("isHidden")},afterRepair:()=>{!function(){const e=document.querySelector(".data-order .data-order__title");document.querySelector(".buildings").style.display="none",e.style.display="none"}(),document.querySelectorAll(".add-services-list__item:nth-child(n+3)").forEach((e=>e.classList.add("isHidden"))),d("after-repair.html#office-calc-block")},calcOrder:()=>{document.querySelector(".footer").classList.add("footer--calc-order"),y("calc(100% / 2)"),document.querySelectorAll(".block").forEach((e=>e.classList.add("block--white"))),document.querySelectorAll(".element--office-page").forEach((e=>e.classList.add("isHidden"))),document.querySelector(".element--calculator-page").classList.remove("isHidden")},contacts:()=>{document.querySelector(".connection").classList.remove("no-padding-top"),document.querySelector(".connection--second-block").classList.add("block-with-image"),m()},successOr404:()=>{m(),window.addEventListener("beforeunload",(function(){o("userOrderDataObj")}))}};function d(e){[...document.querySelectorAll(".dynamic-link")].forEach((t=>t.href=e))}function u(e){e.forEach((e=>{const t=document.querySelector(e);t&&t.classList.add("nav__link--current")}))}function m(){document.querySelector("main").classList.add("section--dark-background")}function y(e){document.querySelectorAll(".buildings__element").forEach((t=>t.style.flexBasis=e))}function f(e,t){e.appendChild(t)}document.addEventListener("DOMContentLoaded",(function(){const t=window.location.pathname,n=document.querySelector("body"),{themeToggler:o}=c();o.addEventListener("click",(()=>{var t;t=n.classList.contains("active-dark-theme")?r.LIGHT:r.DARK,i=t,e("theme",t),a()})),a();const d=Object.keys(l).find((e=>s[e].includes(t)));d&&l[d]()}));var p=!1;if("undefined"!=typeof window){var v={get passive(){p=!0}};window.addEventListener("testPassive",null,v),window.removeEventListener("testPassive",null,v)}var g="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),q=[],h=!1,b=-1,S=void 0,_=void 0,L=void 0,k=function(e){return q.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))},w=function(e){var t=e||window.event;return!!k(t.target)||t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1)},E=function(e,t){if(e){if(!q.some((function(t){return t.targetElement===e}))){var n={targetElement:e,options:t||{}};q=[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(q),[n]),g?window.requestAnimationFrame((function(){if(void 0===_){_={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,t=e.scrollY,n=e.scrollX,o=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-t,document.body.style.left=-n,setTimeout((function(){return window.requestAnimationFrame((function(){var e=o-window.innerHeight;e&&t>=o&&(document.body.style.top=-(t+e))}))}),300)}})):function(e){if(void 0===L){var t=!!e&&!0===e.reserveScrollBarGap,n=window.innerWidth-document.documentElement.clientWidth;if(t&&n>0){var o=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);L=document.body.style.paddingRight,document.body.style.paddingRight=o+n+"px"}}void 0===S&&(S=document.body.style.overflow,document.body.style.overflow="hidden")}(t),g&&(e.ontouchstart=function(e){1===e.targetTouches.length&&(b=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){var n=e.targetTouches[0].clientY-b;!k(e.target)&&(t&&0===t.scrollTop&&n>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&n<0?w(e):e.stopPropagation())}(t,e)},h||(document.addEventListener("touchmove",w,p?{passive:!1}:void 0),h=!0))}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},x=function(e){e?(q=q.filter((function(t){return t.targetElement!==e})),g&&(e.ontouchstart=null,e.ontouchmove=null,h&&0===q.length&&(document.removeEventListener("touchmove",w,p?{passive:!1}:void 0),h=!1)),g?function(){if(void 0!==_){var e=-parseInt(document.body.style.top,10),t=-parseInt(document.body.style.left,10);document.body.style.position=_.position,document.body.style.top=_.top,document.body.style.left=_.left,window.scrollTo(t,e),_=void 0}}():(void 0!==L&&(document.body.style.paddingRight=L,L=void 0),void 0!==S&&(document.body.style.overflow=S,S=void 0))):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")};(()=>{const e=document.querySelector(".aside-menu"),t=document.querySelector(".open-menu-btn"),n=document.querySelector(".close-menu-btn"),o=()=>{const n="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!n),e.classList.toggle("is-open"),(n?x:E)(document.body)};t.addEventListener("click",o),n.addEventListener("click",o),window.matchMedia("(min-width: 768px)").addEventListener("change",(n=>{n.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),x(document.body))}))})(),n(314);const A=t("userOrderDataObj"),T=document.querySelector(".success-order-services-table"),O=document.querySelector(".success-order-info-table"),H=document.querySelector(".section--success"),C=document.querySelector(".success-order-services-table tbody");function D(e,t,n){const o=document.createElement("tr");return o.innerHTML=`\n    <th class="success-order__name">${e}</th>\n    <td class="success-order__value success-order__quantity">${t}</td>\n    <td class="success-order__value success-order__cost">${n}</td>\n  `,o}function I(e){e.style.display="none"}document.querySelector(".back-to-home-btn").addEventListener("click",(()=>o("userOrderDataObj"))),A?(Object.entries(A).forEach((([e,t])=>{const n=document.querySelector(`.success-order__value[data-field='${e}']`);n&&(n.textContent=t,function(e,t){e&&(e.style.display=t?"":"none")}(n.parentElement,t))})),function(){const{userSquare:e,userServices:t}=A,n=""!==e.quantity.trim()||""!==e.cost.trim();if(n){const n=D("Площа, м²",e.quantity,e.cost);f(C,n),function(e){e.forEach((({name:e,quantity:t,cost:n})=>{const o=D(e,t,n);f(C,o)}))}(t)}else I(T);!function(e){e?H.classList.add("isComplexOrder"):H.classList.remove("isComplexOrder")}(n),function(e){document.querySelector('.success-order--total[data-field="total"]').textContent=e?function(e){const{userSquare:t,userServices:n}=e,o=e=>parseFloat(e.replace("zł","").replace(",","."));return`${o(t.cost)+n.reduce(((e,t)=>e+o(t.cost)),0)}zł`}(A):"399zł"}(n)}()):(I(O),I(T));const $={name:"subscription",openModalBtn:document.querySelector("[data-subscription-modal-open]"),closeModalBtn:document.querySelector("[data-subscription-modal-close]"),modal:document.querySelector("[data-subscription-modal]"),backdrop:document.querySelector(".backdrop--subscr")};Se($);const B=document.querySelectorAll(".buildings__element"),M=document.querySelector(".control-quantity-btn--plus"),N=document.querySelector(".control-quantity-btn--minus"),R=document.querySelectorAll(".service-element .checkbox"),j=document.querySelector(".table__data"),P=document.querySelector("#take-keys-btn"),z=document.querySelector("#give-keys-btn"),F=document.querySelector(".keys-address-block"),K=document.querySelector(".keys-address-block__take-item"),G=document.querySelector(".keys-address-block__give-item");M?.addEventListener("click",U),N?.addEventListener("click",U),P?.addEventListener("click",ce),z?.addEventListener("click",ce),B.forEach((e=>{e.addEventListener("click",(e=>{fe(e.target),function(e){const t=e.target;t.classList.contains("buildings__element--current")||[...B].forEach((e=>{e===t?(e.id,e.classList.add("buildings__element--current")):e.classList.remove("buildings__element--current")}))}(e)}))})),R.forEach((e=>{e.addEventListener("change",(e=>{!function(e){const t=e.currentTarget,n=t.closest("label"),o=n.nextElementSibling,c=t.checked;(function(e,t){e.classList.toggle("isHidden",!t)})(o,c),function(e){const t=e.querySelector(".control-quantity-btn--plus"),n=e.querySelector(".control-quantity-btn--minus");t.addEventListener("click",X),n.addEventListener("click",X)}(o);const r=function(e){const t=e.querySelector(".service-element__text").textContent,n=e.querySelector(".service-element__accent").getAttribute("data-value"),o=e.getAttribute("data-id"),c=document.createElement("li");c.id=o,c.className="table__item table__block";const r=te("item__name",`${t}`),i=te("","x"),a=te("name-wrapper"),s=te("quantity-wrapper");ne(s,[i,te("item__quantity service-quantity",W[o].quantity)]),ne(a,[r,s]);const l=te("service-value",`${n}zł`);return l.setAttribute("data-service",o),ne(c,[a,l]),c}(n),i=n.getAttribute("data-id");(function(e,t){const n=t.id,o=function(e){return[...j.querySelectorAll("li")].find((t=>t.id===e))}(n);e&&!o?(function(e){j.insertAdjacentElement("beforeend",e)}(t),Z(n)):!e&&o&&(Z(n,0),function(e){j.removeChild(e)}(o))})(c,r),V(i),ee(Y)}(e)}))}));const W={square:{name:"Площа",quantity:1,price:2},windowsStandard:{name:"Миття вікон (стандартні)",quantity:1,price:35},windowsLarge:{name:"Миття вікон (до підлоги)",quantity:1,price:40},microWave:{name:"Мікрохвильовка",quantity:1,price:15},refrigerator:{name:"Холодильник",quantity:1,price:40},plate:{name:"Плита",quantity:1,price:35},officeChair:{name:"Хімчистка офісних стільців",quantity:1,price:20},sofaDry2x:{name:"Хімчистка дивану 2х",quantity:1,price:109.99},sofaDry3x:{name:"Хімчистка дивану 3х",quantity:1,price:129.99},sofaDry4x:{name:"Хімчистка дивану 4х",quantity:1,price:149.99}},Y={square:{name:"Площа",quantity:1,price:2},windowsStandard:{name:"Миття вікон (стандартні)",quantity:0,price:35},windowsLarge:{name:"Миття вікон (до підлоги)",quantity:0,price:40},microWave:{name:"Мікрохвильовка",quantity:0,price:15},refrigerator:{name:"Холодильник",quantity:0,price:40},plate:{name:"Плита",quantity:0,price:35},officeChair:{name:"Хімчистка офісних стільців",quantity:0,price:20},sofaDry2x:{name:"Хімчистка дивану 2х",quantity:0,price:109.99},sofaDry3x:{name:"Хімчистка дивану 3х",quantity:0,price:129.99},sofaDry4x:{name:"Хімчистка дивану 4х",quantity:0,price:149.99}};function J(e){const t=oe(e),n=function(e){return e.currentTarget.getAttribute("data-type")}(e);!function(e,t){if("plus"===t)W[e].quantity+=1;else if("minus"===t){if(1===W[e].quantity)return;W[e].quantity-=1}}(t,n),function(e){const t=[...document.querySelectorAll(".service-element")].find((t=>t.getAttribute("data-id")===e)),n=t?.nextElementSibling.querySelector(`[data-name="${e}"]`),o=document.querySelector(".wrap--square").querySelector(`[data-name="${e}"]`);n&&(n.textContent=W[e].quantity),o&&(o.textContent=W[e].quantity,document.querySelector(".square-value-total").textContent=W[e].quantity)}(t),function(e){const t=document.querySelector(`[data-name="${e}"]`).parentNode?.parentNode?.querySelector(".control-quantity-btn--minus .icon--minus");1===W[e].quantity?t.style.fill="rgba(\t77, 18, 153, 0.3)":t.style.fill="#4D1299"}(t)}function X(e){const t=oe(e);J(e),V(t),ee(Y)}function U(e){J(e),function(){const e=document.querySelector('[data-service="square"]');Y.square.quantity=W.square.quantity,e.textContent=Y.square.quantity*Y.square.price+"zł"}(),ee(Y)}function V(e){const t=document.querySelector(`[data-service="${e}"]`),n=document.querySelector(`#${e} .service-quantity`),o=W[e].price;if(t&&n){const c=Z(e),r=Q(c,o);t.textContent=r,n.textContent=c}else Z(e,0)}function Q(e,t){return`${(e*t).toFixed(2)}zł`}function Z(e,t){const n=void 0!==t?t:W[e].quantity;return Y[e].quantity=n,n}function ee(e){const t=(n=e,Object.keys(n).reduce(((e,t)=>{const o=n[t];return e+o.quantity*o.price}),0).toFixed(2));var n;document.querySelector(".total-order-value").textContent=`${t}zł`}function te(e,t){const n=document.createElement("span");return e&&(n.className=e),t&&(n.textContent=t),n}function ne(e,t){t.forEach((t=>{e.appendChild(t)}))}function oe(e){const t=e.currentTarget?.closest(".wrap--service")?.parentNode.querySelector("label")?.getAttribute("data-id"),n=e.currentTarget?.closest(".wrap--square")?.getAttribute("data-id");return t||n}function ce(e){const t=e.currentTarget;t.classList.toggle("active"),"take-keys-btn"===t.id?K.classList.toggle("isHidden"):G.classList.toggle("isHidden"),function(){const e=K.classList.contains("isHidden"),t=G.classList.contains("isHidden");e&&t?F.classList.add("isHidden"):F.classList.remove("isHidden")}()}const re=document.querySelector(".subscr__form"),ie=document.querySelectorAll(".payment__btn"),ae=document.querySelector(".form__payment-error-text"),se=document.querySelectorAll(".form__input"),le=document.querySelector(".calc-btn"),de=document.querySelector('[name="studio-policy-check"]');let ue;de&&(ue=new MutationObserver(((e,t)=>{e.forEach((e=>{"attributes"===e.type&&"data-checked"===e.attributeName&&(de.getAttribute("data-checked"),he())}))})),ue.observe(de,{attributes:!0,attributeFilter:["data-checked"]}),de.addEventListener("change",(()=>{de.setAttribute("data-checked",de.checked)}))),re?.addEventListener("submit",be),le?.addEventListener("click",(e=>{e.preventDefault(),be(e)})),ie.forEach((e=>{e.addEventListener("click",(e=>{!function(e){const t=e.target.closest("button");fe(t),t.classList.contains("active")||[...ie].forEach((e=>{e===t?e.classList.add("active"):e.classList.remove("active")}))}(e),qe()}))})),se.forEach((e=>{e.addEventListener("focus",(()=>{e.classList.remove("error")}))}));const me=["userName","userSurname","userTel","userEmail","userLocation","userDate","userTime"],ye={userPaymentType:"",userBuildingType:"",userTakeKeyAddress:"",userGiveKeyAddress:"",userSquare:{quantity:"",cost:""},userServices:{}};function fe(e){const t=e.getAttribute("data-type"),n=e.getAttribute("data-id")??"";ye[t]=n}function pe(e){[...e].forEach((e=>{e.classList.remove("error")}))}function ve(){return document.querySelector('[name="studio-policy-check"]').checked}function ge(){document.querySelector(".form__payment-error-text").classList.toggle("isHidden")}function qe(){!ae.classList.contains("isHidden")&&ge()}function he(){document.querySelector(".form__policy-error-text").classList.add("isHidden")}function be(t){t.preventDefault();const n="BUTTON"===t.currentTarget.tagName,o=n?re.elements:t.currentTarget.elements,c=function(e,t){return t.filter((t=>""===e[t].value.trim())).map((t=>e[t]))}(o,me);pe(o),function(e){e.forEach((e=>{e.classList.add("error")}))}(c);const r=[...ie].some((e=>e.classList.contains("active"))),i=c.length>0;r||ge(),function(){const e=document.querySelector(".form__policy-error-text");e.classList.add("isHidden"),ve()||e.classList.remove("isHidden")}();const a=ve();if(!r||i||!a)return;const s=n?re:t.target;var l,d,u;n&&(function(){const e=document.querySelector('[data-type="userTakeKeyAddress"]'),t=document.querySelector('[data-type="userGiveKeyAddress"]');fe(e),fe(t)}(),l=ye,d=Y.square.quantity,u=Y.square.price,l.userSquare={quantity:`${d}`,cost:Q(d,u)},function(e){const t=(n=Y,Object.keys(n).filter((e=>n[e].quantity>0)).reduce(((e,t)=>(e[t]={...n[t]},delete e[t].square,e)),{}));var n;e.userServices=Object.keys(t).filter((e=>"square"!==e)).map((e=>{const{name:n,quantity:o,price:c}=t[e];return{name:n,quantity:o,cost:Q(o,c)}}))}(ye)),function(e){new FormData(e).forEach(((e,t)=>{t.startsWith("user")&&(ye[t]=e)}))}(s),e("userOrderDataObj",ye),function(e){[...e].forEach((e=>{"text"===e.type||"email"===e.type||"tel"===e.type||"TEXTAREA"===e.tagName?e.value="":"checkbox"===e.type&&(e.checked=!0)}))}(o),[...ie].forEach((e=>{e.classList.remove("active")})),ue.disconnect(),n||_e($),window.location.href=window.location.href="https://marynashavlak.github.io/comfort-group-cleaning/success-order.html"}function Se(e){e.openModalBtn?.addEventListener("click",(()=>_e(e))),e.closeModalBtn?.addEventListener("click",(t=>{t.stopPropagation(),_e(e)})),e.backdrop?.addEventListener("click",(t=>{t.target===e.backdrop&&_e(e)}))}function _e(e){document.body.classList.toggle(`${e.name}-modal-open`),e.modal?.classList.toggle("backdrop--hidden"),"subscription"===e.name&&(pe(re?.elements),qe(),he())}Se({name:"location",openModalBtn:document.querySelector("[data-location-modal-open]"),closeModalBtn:document.querySelector("[data-location-modal-close]"),modal:document.querySelector("[data-location-modal]"),backdrop:document.querySelector(".backdrop--location")})}()}();