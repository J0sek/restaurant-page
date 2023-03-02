(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>f});var o=t(81),r=t.n(o),i=t(645),a=t.n(i),s=t(667),c=t.n(s),l=new URL(t(910),t.b),u=new URL(t(36),t.b),p=a()(r()),d=c()(l),m=c()(u);p.push([n.id,"@font-face {\n  font-family: 'golden cursive';\n  src: url("+d+");\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\n#content {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  background-image: url("+m+");\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 100vh;\n  height: 100svh;\n}\n\n.banner {\n  display: flex;\n  justify-content: center;\n  gap: 60px;\n  align-items: center;\n  border-bottom: 2px solid rgb(255, 215, 0);\n  box-sizing: border-box;\n  height: 95px;\n}\n\n.banner>div {\n  color: white;\n  font-weight: 350;\n  font-size: 18px;\n}\n\n.banner>div:hover {\n  border-bottom: 2px solid rgb(255, 215, 0);\n  padding-bottom: 5px;\n  cursor: pointer;\n}\n\n.main {\n  height: calc(100vh - 95px);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.main.home {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: white;\n}\n\n.nameContainer {\n  position: relative;\n  margin-bottom: 30px;\n  padding-bottom: 40px;\n  border-bottom: 5px solid rgb(200, 150, 0);\n}\n\n.nameContainer>.nameCursive {\n  font-size: 96px;\n  font-family: 'golden cursive', cursive;\n  padding: 0;\n  text-align: center;\n  color: rgb(200, 150, 0);\n}\n\n.nameContainer>.nameNormal {\n  font-size: 70px;\n  font-weight: 800;\n  position: absolute;\n  width: max-content;\n  font-stretch: expanded;\n  top: 40%;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.nameDesc {\n  font-size: 20px;\n  font-weight: 300;\n  margin-bottom: 40px;\n}\n\n.menuButton {\n  width: 150px;\n  height: 50px;\n  background-color: rgb(197, 157, 95);\n  outline: none;\n  border: none;\n  font-size: 16px;\n  font-weight: 100;\n}\n\n.menuButton:hover {\n  color: white;\n  cursor: pointer;\n}\n\n.main.menu {\n  background-color: rgb(245, 245, 240);\n}\n\n.menuTitle {\n  border-bottom: 4px solid rgb(197, 157, 95);\n  position: relative;\n  padding-bottom: 40px;\n}\n\n.menuTitleCursive {\n  color: rgb(197, 157, 95);\n  font-family: 'golden cursive', cursive;\n  font-size: 100px;\n}\n\n.menuTitleNormal {\n  font-size: 70px;\n  font-weight: 800;\n  position: absolute;\n  bottom: 28px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.menu>[class^=item] {\n  margin: 40px 0 0px;\n  width: 550px;\n  text-align: center;\n  border-bottom: 3px solid rgb(197, 157, 95);\n}\n\n[class^=itemName] {\n  font-size: 25px;\n  font-weight: 800;\n  color: rgb(200, 150, 0);\n  margin-bottom: 10px;\n}\n\n[class^=itemDesc] {\n  font-size: 20px;\n  line-height: 25px;\n  font-weight: 300;\n  margin-bottom: 15px;\n}\n\n[class^=itemPrice] {\n  font-size: 25px;\n  padding-bottom: 30px;\n}\n\n.about.main {\n  background-color: rgb(245, 245, 240);\n}\n\n.aboutTitle {\n  border-bottom: 4px solid rgb(197, 157, 95);\n  position: relative;\n  padding-bottom: 40px;\n}\n\n.aboutTitleCursive {\n  color: rgb(197, 157, 95);\n  font-family: 'golden cursive', cursive;\n  font-size: 100px;\n}\n\n.aboutTitleNormal {\n  font-size: 70px;\n  font-weight: 800;\n  position: absolute;\n  bottom: 28px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.aboutText {\n  text-align: center;\n  width: 700px;\n  line-height: 30px;\n  font-size: 18px;\n  font-weight: 300;\n  margin-top: 50px;\n}",""]);const f=p},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<n.length;l++){var u=[].concat(n[l]);o&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),e.push(u))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],l=o.base?c[0]+o.base:c[0],u=i[l]||0,p="".concat(l," ").concat(u);i[l]=u+1;var d=t(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)e[d].references++,e[d].updater(m);else{var f=r(m,o);o.byIndex=s,e.splice(s,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var c=o(n,r),l=0;l<i.length;l++){var u=t(i[l]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}i=c}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},910:(n,e,t)=>{n.exports=t.p+"3b957abdfcf35c8209c4.ttf"},36:(n,e,t)=>{n.exports=t.p+"19b5832c2f5d7d339e49.jpg"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");o.length&&(n=o[o.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const n=function(n,...e){let t=document.createElement(n);return e.length>0&&e.forEach((n=>{t.classList.add(n)})),t},e=function(){const e=n("div","main","home"),t=n("div","nameContainer"),o=n("div","nameCursive");o.textContent="Bienvenidos";const r=n("div","nameNormal");r.textContent="LA PANADERIA",t.append(o,r);const i=n("div","nameDesc");i.textContent="El placer de comer con las manos. Bien tierruo!";const a=n("button","menuButton");return a.textContent="VER EL MENU",e.append(t,i,a),e}(),o=n("div","main","menu"),r=n("div","menuTitle"),i=n("div","menuTitleCursive");i.textContent="Bienvenidos";const a=n("div","menuTitleNormal");function s(n,e,t){return{name:n,desc:e,price:t}}function c(e,t){const o=n("div",`item${t}`),r=n("div",`itemName${t}`);r.textContent=e.name;const i=n("div",`itemDesc${t}`);i.textContent=e.desc;const a=n("div",`itemPrice${t}`);return a.textContent=e.price,o.append(r,i,a),o}a.textContent="MENU",r.append(i,a),o.append(r);let l=s("Pan canilla","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet","$20"),u=s("Pan creas","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet","$20"),p=s("Pan Nini","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet","$20");o.append(r,c(l,1),c(u,2),c(p,3));const d=o;let m=n("div","main","about"),f=n("div","aboutTitle"),b=n("div","aboutTitleCursive");b.textContent="Bienvenidos";let v=n("div","aboutTitleNormal");v.textContent="NOSOTROS";let g=n("div","aboutText");g.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet ultrices porttitor, ex ex aliquet purus, pellentesque rhoncus felis ipsum nec purus. Donec id enim in risus pellentesque blandit. Proin sed nibh nec arcu mollis rhoncus in sit amet augue. Suspendisse magna nisl, eleifend non tempor et, luctus id quam. Nulla bibendum vulputate ante, non malesuada eros lobortis euismod",f.append(b,v),m.append(f,g);const h=m;let x="home";function y(n,e){n.addEventListener("click",(()=>{if(n.classList[1]===x)return;x=n.classList[1];let t=document.querySelector(".main"),o=document.getElementById("content");o.removeChild(t),o.append(e)}))}let C=function(){const t=n("div","banner"),o=n("div","banner-btn","home");o.textContent="HOME",y(o,e);const r=n("div","banner-btn","menu");r.textContent="MENU",y(r,d);const i=n("div","banner-btn","about");return i.textContent="ABOUT",y(i,h),t.append(o,r,i),t}();document.querySelectorAll(".banner-btn").forEach((n=>n.addEventListener("click",(()=>console.log(1)))));const w=C;let T=n("div","footer");T.textContent="123-456-7890";const E=T;var N=t(379),S=t.n(N),L=t(795),P=t.n(L),z=t(569),M=t.n(z),A=t(565),B=t.n(A),q=t(216),I=t.n(q),O=t(589),U=t.n(O),$=t(426),k={};k.styleTagTransform=U(),k.setAttributes=B(),k.insert=M().bind(null,"head"),k.domAPI=P(),k.insertStyleElement=I(),S()($.Z,k),$.Z&&$.Z.locals&&$.Z.locals;const j=document.getElementById("content");j.append(w),j.append(e),j.append(E)})()})();