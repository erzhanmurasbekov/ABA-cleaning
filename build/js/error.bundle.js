!function(){"use strict";function e(e,t){const n=JSON.stringify(t);localStorage.setItem(e,n)}function t(){return{themeToggler:document.querySelector(".theme-toggler-wrap"),themeCircle:document.querySelector(".theme__circle"),sunRays:document.querySelectorAll(".circle__ray"),sunIcon:document.querySelector(".circle__sun"),moonIcon:document.querySelector(".circle__moon")}}const n={LIGHT:"light",DARK:"dark"};let o=function(){const e=localStorage.getItem("theme");return JSON.parse(e)}()||n.LIGHT;function c(){const{themeToggler:e,themeCircle:c,sunRays:r,sunIcon:i,moonIcon:a}=t(),s=document.querySelector("body");o===n.DARK?(s.classList.add("active-dark-theme"),e.classList.add("theme-toggler-wrap--dark"),e.classList.remove("theme-toggler-wrap--light"),c.classList.add("theme__circle--dark"),c.classList.remove("theme__circle--light"),i.classList.add("circle__sun--hidden"),a.classList.remove("circle__moon--hidden"),r.forEach((e=>e.classList.add("circle__ray--hidden")))):(s.classList.remove("active-dark-theme"),e.classList.remove("theme-toggler-wrap--dark"),e.classList.add("theme-toggler-wrap--light"),c.classList.remove("theme__circle--dark"),c.classList.add("theme__circle--light"),i.classList.remove("circle__sun--hidden"),a.classList.add("circle__moon--hidden"),r.forEach((e=>e.classList.remove("circle__ray--hidden"))))}const r={home:["/comfort-group-cleaning/","/comfort-group-cleaning/index.html"],office:["/comfort-group-cleaning/office.html"],afterRepair:["/comfort-group-cleaning/after-repair.html"],calcOrder:["/comfort-group-cleaning/calc-order.html"],contacts:["/comfort-group-cleaning/contacts.html"],successOr404:["/comfort-group-cleaning/success-order.html","/comfort-group-cleaning/404.html"]},i={home:()=>{s([".nav__link",".nav--aside-menu .nav__link"]),a("index.html#order-cleaning-block")},office:()=>{s([".nav__list .nav__item:nth-child(2) .nav__link",".nav--aside-menu  .nav__list .nav__item:nth-child(2) .nav__link"]),a("office.html#office-calc-block"),d("calc(100% / 3)"),document.querySelectorAll(".element--office-page").forEach((e=>e.classList.remove("isHidden"))),document.querySelector(".element--calculator-page").classList.add("isHidden")},afterRepair:()=>{!function(){const e=document.querySelector(".data-order .data-order__title");document.querySelector(".buildings").style.display="none",e.style.display="none"}(),document.querySelectorAll(".add-services-list__item:nth-child(n+3)").forEach((e=>e.classList.add("isHidden"))),a("after-repair.html#office-calc-block")},calcOrder:()=>{document.querySelector(".footer").classList.add("footer--calc-order"),d("calc(100% / 2)"),document.querySelectorAll(".block").forEach((e=>e.classList.add("block--white"))),document.querySelectorAll(".element--office-page").forEach((e=>e.classList.add("isHidden"))),document.querySelector(".element--calculator-page").classList.remove("isHidden")},contacts:()=>{document.querySelector(".connection").classList.remove("no-padding-top"),document.querySelector(".connection--second-block").classList.add("block-with-image"),l()},successOr404:()=>{l(),window.addEventListener("beforeunload",(function(){localStorage.removeItem("userOrderDataObj")}))}};function a(e){[...document.querySelectorAll(".dynamic-link")].forEach((t=>t.href=e))}function s(e){e.forEach((e=>{const t=document.querySelector(e);t&&t.classList.add("nav__link--current")}))}function l(){document.querySelector("main").classList.add("section--dark-background")}function d(e){document.querySelectorAll(".buildings__element").forEach((t=>t.style.flexBasis=e))}document.addEventListener("DOMContentLoaded",(function(){const a=window.location.pathname,s=document.querySelector("body"),{themeToggler:l}=t();l.addEventListener("click",(()=>{var t;t=s.classList.contains("active-dark-theme")?n.LIGHT:n.DARK,o=t,e("theme",t),c()})),c();const d=Object.keys(i).find((e=>r[e].includes(a)));d&&i[d]()}));var u=!1;if("undefined"!=typeof window){var m={get passive(){u=!0}};window.addEventListener("testPassive",null,m),window.removeEventListener("testPassive",null,m)}var y="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),f=[],p=!1,v=-1,g=void 0,h=void 0,q=void 0,b=function(e){return f.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))},S=function(e){var t=e||window.event;return!!b(t.target)||t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1)},_=function(e,t){if(e){if(!f.some((function(t){return t.targetElement===e}))){var n={targetElement:e,options:t||{}};f=[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(f),[n]),y?window.requestAnimationFrame((function(){if(void 0===h){h={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,t=e.scrollY,n=e.scrollX,o=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-t,document.body.style.left=-n,setTimeout((function(){return window.requestAnimationFrame((function(){var e=o-window.innerHeight;e&&t>=o&&(document.body.style.top=-(t+e))}))}),300)}})):function(e){if(void 0===q){var t=!!e&&!0===e.reserveScrollBarGap,n=window.innerWidth-document.documentElement.clientWidth;if(t&&n>0){var o=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);q=document.body.style.paddingRight,document.body.style.paddingRight=o+n+"px"}}void 0===g&&(g=document.body.style.overflow,document.body.style.overflow="hidden")}(t),y&&(e.ontouchstart=function(e){1===e.targetTouches.length&&(v=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){var n=e.targetTouches[0].clientY-v;!b(e.target)&&(t&&0===t.scrollTop&&n>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&n<0?S(e):e.stopPropagation())}(t,e)},p||(document.addEventListener("touchmove",S,u?{passive:!1}:void 0),p=!0))}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},L=function(e){e?(f=f.filter((function(t){return t.targetElement!==e})),y&&(e.ontouchstart=null,e.ontouchmove=null,p&&0===f.length&&(document.removeEventListener("touchmove",S,u?{passive:!1}:void 0),p=!1)),y?function(){if(void 0!==h){var e=-parseInt(document.body.style.top,10),t=-parseInt(document.body.style.left,10);document.body.style.position=h.position,document.body.style.top=h.top,document.body.style.left=h.left,window.scrollTo(t,e),h=void 0}}():(void 0!==q&&(document.body.style.paddingRight=q,q=void 0),void 0!==g&&(document.body.style.overflow=g,g=void 0))):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")};(()=>{const e=document.querySelector(".aside-menu"),t=document.querySelector(".open-menu-btn"),n=document.querySelector(".close-menu-btn"),o=()=>{const n="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!n),e.classList.toggle("is-open"),(n?L:_)(document.body)};t.addEventListener("click",o),n.addEventListener("click",o),window.matchMedia("(min-width: 768px)").addEventListener("change",(n=>{n.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),L(document.body))}))})();const k={name:"subscription",openModalBtn:document.querySelector("[data-subscription-modal-open]"),closeModalBtn:document.querySelector("[data-subscription-modal-close]"),modal:document.querySelector("[data-subscription-modal]"),backdrop:document.querySelector(".backdrop--subscr")};de(k);const w=document.querySelectorAll(".buildings__element"),E=document.querySelector(".control-quantity-btn--plus"),A=document.querySelector(".control-quantity-btn--minus"),x=document.querySelectorAll(".service-element .checkbox"),T=document.querySelector(".table__data"),H=document.querySelector("#take-keys-btn"),D=document.querySelector("#give-keys-btn"),O=document.querySelector(".keys-address-block"),C=document.querySelector(".keys-address-block__take-item"),I=document.querySelector(".keys-address-block__give-item");E?.addEventListener("click",$),A?.addEventListener("click",$),H?.addEventListener("click",Y),D?.addEventListener("click",Y),w.forEach((e=>{e.addEventListener("click",(e=>{oe(e.target),function(e){const t=e.target;t.classList.contains("buildings__element--current")||[...w].forEach((e=>{e===t?(e.id,e.classList.add("buildings__element--current")):e.classList.remove("buildings__element--current")}))}(e)}))})),x.forEach((e=>{e.addEventListener("change",(e=>{!function(e){const t=e.currentTarget,n=t.closest("label"),o=n.nextElementSibling,c=t.checked;(function(e,t){e.classList.toggle("isHidden",!t)})(o,c),function(e){const t=e.querySelector(".control-quantity-btn--plus"),n=e.querySelector(".control-quantity-btn--minus");t.addEventListener("click",R),n.addEventListener("click",R)}(o);const r=function(e){const t=e.querySelector(".service-element__text").textContent,n=e.querySelector(".service-element__accent").getAttribute("data-value"),o=e.getAttribute("data-id"),c=document.createElement("li");c.id=o,c.className="table__item table__block";const r=G("item__name",`${t}`),i=G("","x"),a=G("name-wrapper"),s=G("quantity-wrapper");W(s,[i,G("item__quantity service-quantity",B[o].quantity)]),W(a,[r,s]);const l=G("service-value",`${n}zł`);return l.setAttribute("data-service",o),W(c,[a,l]),c}(n),i=n.getAttribute("data-id");(function(e,t){const n=t.id,o=function(e){return[...T.querySelectorAll("li")].find((t=>t.id===e))}(n);e&&!o?(function(e){T.insertAdjacentElement("beforeend",e)}(t),K(n)):!e&&o&&(K(n,0),function(e){T.removeChild(e)}(o))})(c,r),P(i),F(M)}(e)}))}));const B={square:{name:"Площа",quantity:1,price:2},windowsStandard:{name:"Миття вікон (стандартні)",quantity:1,price:35},windowsLarge:{name:"Миття вікон (до підлоги)",quantity:1,price:40},microWave:{name:"Мікрохвильовка",quantity:1,price:15},refrigerator:{name:"Холодильник",quantity:1,price:40},plate:{name:"Плита",quantity:1,price:35},officeChair:{name:"Хімчистка офісних стільців",quantity:1,price:20},sofaDry2x:{name:"Хімчистка дивану 2х",quantity:1,price:109.99},sofaDry3x:{name:"Хімчистка дивану 3х",quantity:1,price:129.99},sofaDry4x:{name:"Хімчистка дивану 4х",quantity:1,price:149.99}},M={square:{name:"Площа",quantity:1,price:2},windowsStandard:{name:"Миття вікон (стандартні)",quantity:0,price:35},windowsLarge:{name:"Миття вікон (до підлоги)",quantity:0,price:40},microWave:{name:"Мікрохвильовка",quantity:0,price:15},refrigerator:{name:"Холодильник",quantity:0,price:40},plate:{name:"Плита",quantity:0,price:35},officeChair:{name:"Хімчистка офісних стільців",quantity:0,price:20},sofaDry2x:{name:"Хімчистка дивану 2х",quantity:0,price:109.99},sofaDry3x:{name:"Хімчистка дивану 3х",quantity:0,price:129.99},sofaDry4x:{name:"Хімчистка дивану 4х",quantity:0,price:149.99}};function N(e){const t=z(e),n=function(e){return e.currentTarget.getAttribute("data-type")}(e);!function(e,t){if("plus"===t)B[e].quantity+=1;else if("minus"===t){if(1===B[e].quantity)return;B[e].quantity-=1}}(t,n),function(e){const t=[...document.querySelectorAll(".service-element")].find((t=>t.getAttribute("data-id")===e)),n=t?.nextElementSibling.querySelector(`[data-name="${e}"]`),o=document.querySelector(".wrap--square").querySelector(`[data-name="${e}"]`);n&&(n.textContent=B[e].quantity),o&&(o.textContent=B[e].quantity,document.querySelector(".square-value-total").textContent=B[e].quantity)}(t),function(e){const t=document.querySelector(`[data-name="${e}"]`).parentNode?.parentNode?.querySelector(".control-quantity-btn--minus .icon--minus");1===B[e].quantity?t.style.fill="rgba(\t77, 18, 153, 0.3)":t.style.fill="#4D1299"}(t)}function R(e){const t=z(e);N(e),P(t),F(M)}function $(e){N(e),function(){const e=document.querySelector('[data-service="square"]');M.square.quantity=B.square.quantity,e.textContent=M.square.quantity*M.square.price+"zł"}(),F(M)}function P(e){const t=document.querySelector(`[data-service="${e}"]`),n=document.querySelector(`#${e} .service-quantity`),o=B[e].price;if(t&&n){const c=K(e),r=j(c,o);t.textContent=r,n.textContent=c}else K(e,0)}function j(e,t){return`${(e*t).toFixed(2)}zł`}function K(e,t){const n=void 0!==t?t:B[e].quantity;return M[e].quantity=n,n}function F(e){const t=(n=e,Object.keys(n).reduce(((e,t)=>{const o=n[t];return e+o.quantity*o.price}),0).toFixed(2));var n;document.querySelector(".total-order-value").textContent=`${t}zł`}function G(e,t){const n=document.createElement("span");return e&&(n.className=e),t&&(n.textContent=t),n}function W(e,t){t.forEach((t=>{e.appendChild(t)}))}function z(e){const t=e.currentTarget?.closest(".wrap--service")?.parentNode.querySelector("label")?.getAttribute("data-id"),n=e.currentTarget?.closest(".wrap--square")?.getAttribute("data-id");return t||n}function Y(e){const t=e.currentTarget;t.classList.toggle("active"),"take-keys-btn"===t.id?C.classList.toggle("isHidden"):I.classList.toggle("isHidden"),function(){const e=C.classList.contains("isHidden"),t=I.classList.contains("isHidden");e&&t?O.classList.add("isHidden"):O.classList.remove("isHidden")}()}const J=document.querySelector(".subscr__form"),X=document.querySelectorAll(".payment__btn"),U=document.querySelector(".form__payment-error-text"),V=document.querySelectorAll(".form__input"),Q=document.querySelector(".calc-btn"),Z=document.querySelector('[name="studio-policy-check"]');let ee;Z&&(ee=new MutationObserver(((e,t)=>{e.forEach((e=>{"attributes"===e.type&&"data-checked"===e.attributeName&&(Z.getAttribute("data-checked"),se())}))})),ee.observe(Z,{attributes:!0,attributeFilter:["data-checked"]}),Z.addEventListener("change",(()=>{Z.setAttribute("data-checked",Z.checked)}))),J?.addEventListener("submit",le),Q?.addEventListener("click",(e=>{e.preventDefault(),le(e)})),X.forEach((e=>{e.addEventListener("click",(e=>{!function(e){const t=e.target.closest("button");oe(t),t.classList.contains("active")||[...X].forEach((e=>{e===t?e.classList.add("active"):e.classList.remove("active")}))}(e),ae()}))})),V.forEach((e=>{e.addEventListener("focus",(()=>{e.classList.remove("error")}))}));const te=["userName","userSurname","userTel","userEmail","userLocation","userDate","userTime"],ne={userPaymentType:"",userBuildingType:"",userTakeKeyAddress:"",userGiveKeyAddress:"",userSquare:{quantity:"",cost:""},userServices:{}};function oe(e){const t=e.getAttribute("data-type"),n=e.getAttribute("data-id")??"";ne[t]=n}function ce(e){[...e].forEach((e=>{e.classList.remove("error")}))}function re(){return document.querySelector('[name="studio-policy-check"]').checked}function ie(){document.querySelector(".form__payment-error-text").classList.toggle("isHidden")}function ae(){!U.classList.contains("isHidden")&&ie()}function se(){document.querySelector(".form__policy-error-text").classList.add("isHidden")}function le(t){t.preventDefault();const n="BUTTON"===t.currentTarget.tagName,o=n?J.elements:t.currentTarget.elements,c=function(e,t){return t.filter((t=>""===e[t].value.trim())).map((t=>e[t]))}(o,te);ce(o),function(e){e.forEach((e=>{e.classList.add("error")}))}(c);const r=[...X].some((e=>e.classList.contains("active"))),i=c.length>0;r||ie(),function(){const e=document.querySelector(".form__policy-error-text");e.classList.add("isHidden"),re()||e.classList.remove("isHidden")}();const a=re();if(!r||i||!a)return;const s=n?J:t.target;var l,d,u;n&&(function(){const e=document.querySelector('[data-type="userTakeKeyAddress"]'),t=document.querySelector('[data-type="userGiveKeyAddress"]');oe(e),oe(t)}(),l=ne,d=M.square.quantity,u=M.square.price,l.userSquare={quantity:`${d}`,cost:j(d,u)},function(e){const t=(n=M,Object.keys(n).filter((e=>n[e].quantity>0)).reduce(((e,t)=>(e[t]={...n[t]},delete e[t].square,e)),{}));var n;e.userServices=Object.keys(t).filter((e=>"square"!==e)).map((e=>{const{name:n,quantity:o,price:c}=t[e];return{name:n,quantity:o,cost:j(o,c)}}))}(ne)),function(e){new FormData(e).forEach(((e,t)=>{t.startsWith("user")&&(ne[t]=e)}))}(s),e("userOrderDataObj",ne),function(e){[...e].forEach((e=>{"text"===e.type||"email"===e.type||"tel"===e.type||"TEXTAREA"===e.tagName?e.value="":"checkbox"===e.type&&(e.checked=!0)}))}(o),[...X].forEach((e=>{e.classList.remove("active")})),ee.disconnect(),n||ue(k),window.location.href=window.location.href="https://marynashavlak.github.io/comfort-group-cleaning/success-order.html"}function de(e){e.openModalBtn?.addEventListener("click",(()=>ue(e))),e.closeModalBtn?.addEventListener("click",(t=>{t.stopPropagation(),ue(e)})),e.backdrop?.addEventListener("click",(t=>{t.target===e.backdrop&&ue(e)}))}function ue(e){document.body.classList.toggle(`${e.name}-modal-open`),e.modal?.classList.toggle("backdrop--hidden"),"subscription"===e.name&&(ce(J?.elements),ae(),se())}de({name:"location",openModalBtn:document.querySelector("[data-location-modal-open]"),closeModalBtn:document.querySelector("[data-location-modal-close]"),modal:document.querySelector("[data-location-modal]"),backdrop:document.querySelector(".backdrop--location")})}();