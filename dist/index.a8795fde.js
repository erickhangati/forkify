function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(e){return e&&e.__esModule?e.default:e}var r={},i={},o=t.parcelRequire6c34;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},t.parcelRequire6c34=o),o.register("27Lyk",(function(t,n){var r,i;e(t.exports,"register",(()=>r),(e=>r=e)),e(t.exports,"resolve",(()=>i),(e=>i=e));var o={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},i=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o("27Lyk").register(JSON.parse('{"f9fpV":"index.a8795fde.js","eyyUD":"icons.c14567a0.svg"}'));var a,s,c={},u=function(e){return e&&e.Math==Math&&e};c=u("object"==typeof globalThis&&globalThis)||u("object"==typeof window&&window)||u("object"==typeof self&&self)||u("object"==typeof t&&t)||function(){return this}()||Function("return this")();var l,d;l=!(d=function(e){try{return!!e()}catch(e){return!0}})((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}));var f,p={};f=!d((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}));var h,g=Function.prototype.call;p=f?g.bind(g):function(){return g.apply(g,arguments)};var v={}.propertyIsEnumerable,y=Object.getOwnPropertyDescriptor,m=y&&!v.call({1:2},1);h=m?function(e){var t=y(this,e);return!!t&&t.enumerable}:v;var b;b=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var _,w,k,E={},S={},O=Function.prototype,j=O.call,$=f&&O.bind.bind(j,j),L=(S=f?$:function(e){return function(){return j.apply(e,arguments)}})({}.toString),x=S("".slice);k=function(e){return x(L(e),8,-1)},w=function(e){if("Function"===k(e))return S(e)};var M=Object,T=w("".split);E=d((function(){return!M("z").propertyIsEnumerable(0)}))?function(e){return"String"==k(e)?T(e,""):M(e)}:M;var P,I;I=function(e){return null==e};var H=TypeError;P=function(e){if(I(e))throw H("Can't call method on "+e);return e},_=function(e){return E(P(e))};var q,F,N,A={},C={},R="object"==typeof document&&document.all,D=(N={all:R,IS_HTMLDDA:void 0===R&&void 0!==R}).all;C=N.IS_HTMLDDA?function(e){return"function"==typeof e||e===D}:function(e){return"function"==typeof e};var U=N.all;A=N.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:C(e)||e===U}:function(e){return"object"==typeof e?null!==e:C(e)};var W,G={},B=function(e){return C(e)?e:void 0};W=function(e,t){return arguments.length<2?B(c[e]):c[e]&&c[e][t]};var z={};z=w({}.isPrototypeOf);var J,Y,V,Q={};Q=W("navigator","userAgent")||"";var K,X,Z=c.process,ee=c.Deno,te=Z&&Z.versions||ee&&ee.version,ne=te&&te.v8;ne&&(X=(K=ne.split("."))[0]>0&&K[0]<4?1:+(K[0]+K[1])),!X&&Q&&(!(K=Q.match(/Edge\/(\d+)/))||K[1]>=74)&&(K=Q.match(/Chrome\/(\d+)/))&&(X=+K[1]),V=X,Y=!!Object.getOwnPropertySymbols&&!d((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&V&&V<41})),J=Y&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var re=Object;G=J?function(e){return"symbol"==typeof e}:function(e){var t=W("Symbol");return C(t)&&z(t.prototype,re(e))};var ie,oe,ae,se=String;ae=function(e){try{return se(e)}catch(e){return"Object"}};var ce=TypeError;oe=function(e){if(C(e))return e;throw ce(ae(e)+" is not a function")},ie=function(e,t){var n=e[t];return I(n)?void 0:oe(n)};var ue,le=TypeError;ue=function(e,t){var n,r;if("string"===t&&C(n=e.toString)&&!A(r=p(n,e)))return r;if(C(n=e.valueOf)&&!A(r=p(n,e)))return r;if("string"!==t&&C(n=e.toString)&&!A(r=p(n,e)))return r;throw le("Can't convert object to primitive value")};var de;var fe,pe={},he=Object.defineProperty;fe=function(e,t){try{he(c,e,{value:t,configurable:!0,writable:!0})}catch(n){c[e]=t}return t};var ge=c["__core-js_shared__"]||fe("__core-js_shared__",{});pe=ge,(de=function(e,t){return pe[e]||(pe[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.26.0",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.26.0/LICENSE",source:"https://github.com/zloirock/core-js"});var ve,ye={},me=Object;ve=function(e){return me(P(e))};var be=w({}.hasOwnProperty);ye=Object.hasOwn||function(e,t){return be(ve(e),t)};var _e,we=0,ke=Math.random(),Ee=w(1..toString);_e=function(e){return"Symbol("+(void 0===e?"":e)+")_"+Ee(++we+ke,36)};var Se=de("wks"),Oe=c.Symbol,je=Oe&&Oe.for,$e=J?Oe:Oe&&Oe.withoutSetter||_e,Le=TypeError,xe=function(e){if(!ye(Se,e)||!Y&&"string"!=typeof Se[e]){var t="Symbol."+e;Y&&ye(Oe,e)?Se[e]=Oe[e]:Se[e]=J&&je?je(t):$e(t)}return Se[e]}("toPrimitive");F=function(e,t){if(!A(e)||G(e))return e;var n,r=ie(e,xe);if(r){if(void 0===t&&(t="default"),n=p(r,e,t),!A(n)||G(n))return n;throw Le("Can't convert object to primitive value")}return void 0===t&&(t="number"),ue(e,t)},q=function(e){var t=F(e,"string");return G(t)?t:t+""};var Me,Te,Pe=c.document,Ie=A(Pe)&&A(Pe.createElement);Te=function(e){return Ie?Pe.createElement(e):{}},Me=!l&&!d((function(){return 7!=Object.defineProperty(Te("div"),"a",{get:function(){return 7}}).a}));var He,qe,Fe=Object.getOwnPropertyDescriptor,Ne=s=l?Fe:function(e,t){if(e=_(e),t=q(t),Me)try{return Fe(e,t)}catch(e){}if(ye(e,t))return b(!p(h,e,t),e[t])},Ae={};qe=l&&d((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}));var Ce,Re=String,De=TypeError;Ce=function(e){if(A(e))return e;throw De(Re(e)+" is not an object")};var Ue=TypeError,We=Object.defineProperty,Ge=Object.getOwnPropertyDescriptor;He=l?qe?function(e,t,n){if(Ce(e),t=q(t),Ce(n),"function"==typeof e&&"prototype"===t&&"value"in n&&"writable"in n&&!n.writable){var r=Ge(e,t);r&&r.writable&&(e[t]=n.value,n={configurable:"configurable"in n?n.configurable:r.configurable,enumerable:"enumerable"in n?n.enumerable:r.enumerable,writable:!1})}return We(e,t,n)}:We:function(e,t,n){if(Ce(e),t=q(t),Ce(n),Me)try{return We(e,t,n)}catch(e){}if("get"in n||"set"in n)throw Ue("Accessors not supported");return"value"in n&&(e[t]=n.value),e},Ae=l?function(e,t,n){return He(e,t,b(1,n))}:function(e,t,n){return e[t]=n,e};var Be,ze,Je=Function.prototype,Ye=l&&Object.getOwnPropertyDescriptor,Ve=ye(Je,"name"),Qe={EXISTS:Ve,PROPER:Ve&&"something"===function(){}.name,CONFIGURABLE:Ve&&(!l||l&&Ye(Je,"name").configurable)}.CONFIGURABLE,Ke={},Xe=w(Function.toString);C(pe.inspectSource)||(pe.inspectSource=function(e){return Xe(e)}),Ke=pe.inspectSource;var Ze,et,tt=c.WeakMap;et=C(tt)&&/native code/.test(String(tt));var nt,rt=de("keys");nt=function(e){return rt[e]||(rt[e]=_e(e))};var it={};it={};var ot,at,st,ct=c.TypeError,ut=c.WeakMap;if(et||pe.state){var lt=pe.state||(pe.state=new ut);lt.get=lt.get,lt.has=lt.has,lt.set=lt.set,ot=function(e,t){if(lt.has(e))throw ct("Object already initialized");return t.facade=e,lt.set(e,t),t},at=function(e){return lt.get(e)||{}},st=function(e){return lt.has(e)}}else{var dt=nt("state");it[dt]=!0,ot=function(e,t){if(ye(e,dt))throw ct("Object already initialized");return t.facade=e,Ae(e,dt,t),t},at=function(e){return ye(e,dt)?e[dt]:{}},st=function(e){return ye(e,dt)}}var ft=(Ze={set:ot,get:at,has:st,enforce:function(e){return st(e)?at(e):ot(e,{})},getterFor:function(e){return function(t){var n;if(!A(t)||(n=at(t)).type!==e)throw ct("Incompatible receiver, "+e+" required");return n}}}).enforce,pt=Ze.get,ht=Object.defineProperty,gt=l&&!d((function(){return 8!==ht((function(){}),"length",{value:8}).length})),vt=String(String).split("String"),yt=ze=function(e,t,n){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!ye(e,"name")||Qe&&e.name!==t)&&(l?ht(e,"name",{value:t,configurable:!0}):e.name=t),gt&&n&&ye(n,"arity")&&e.length!==n.arity&&ht(e,"length",{value:n.arity});try{n&&ye(n,"constructor")&&n.constructor?l&&ht(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var r=ft(e);return ye(r,"source")||(r.source=vt.join("string"==typeof t?t:"")),e};Function.prototype.toString=yt((function(){return C(this)&&pt(this).source||Ke(this)}),"toString"),Be=function(e,t,n,r){r||(r={});var i=r.enumerable,o=void 0!==r.name?r.name:t;if(C(n)&&ze(n,o,r),r.global)i?e[t]=n:fe(t,n);else{try{r.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=n:He(e,t,{value:n,enumerable:!1,configurable:!r.nonConfigurable,writable:!r.nonWritable})}return e};var mt,bt,_t,wt,kt,Et={},St={},Ot=Math.ceil,jt=Math.floor;St=Math.trunc||function(e){var t=+e;return(t>0?jt:Ot)(t)},kt=function(e){var t=+e;return t!=t||0===t?0:St(t)};var $t=Math.max,Lt=Math.min;wt=function(e,t){var n=kt(e);return n<0?$t(n+t,0):Lt(n,t)};var xt,Mt,Tt=Math.min;Mt=function(e){return e>0?Tt(kt(e),9007199254740991):0},xt=function(e){return Mt(e.length)};var Pt=function(e){return function(t,n,r){var i,o=_(t),a=xt(o),s=wt(r,a);if(e&&n!=n){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((e||s in o)&&o[s]===n)return e||s||0;return!e&&-1}},It={includes:Pt(!0),indexOf:Pt(!1)}.indexOf,Ht=w([].push);_t=function(e,t){var n,r=_(e),i=0,o=[];for(n in r)!ye(it,n)&&ye(r,n)&&Ht(o,n);for(;t.length>i;)ye(r,n=t[i++])&&(~It(o,n)||Ht(o,n));return o};var qt,Ft=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");bt=Object.getOwnPropertyNames||function(e){return _t(e,Ft)},qt=Object.getOwnPropertySymbols;var Nt=w([].concat);Et=W("Reflect","ownKeys")||function(e){var t=bt(Ce(e));return qt?Nt(t,qt(e)):t},mt=function(e,t,n){for(var r=Et(t),i=He,o=s,a=0;a<r.length;a++){var c=r[a];ye(e,c)||n&&ye(n,c)||i(e,c,o(t,c))}};var At={},Ct=/#|\.prototype\./,Rt=function(e,t){var n=Ut[Dt(e)];return n==Gt||n!=Wt&&(C(t)?d(t):!!t)},Dt=Rt.normalize=function(e){return String(e).replace(Ct,".").toLowerCase()},Ut=Rt.data={},Wt=Rt.NATIVE="N",Gt=Rt.POLYFILL="P";At=Rt,a=function(e,t){var n,r,i,o,a,s=e.target,u=e.global,l=e.stat;if(n=u?c:l?c[s]||fe(s,{}):(c[s]||{}).prototype)for(r in t){if(o=t[r],i=e.dontCallGetSet?(a=Ne(n,r))&&a.value:n[r],!At(u?r:s+(l?".":"#")+r,e.forced)&&void 0!==i){if(typeof o==typeof i)continue;mt(o,i)}(e.sham||i&&i.sham)&&Ae(o,"sham",!0),Be(n,r,o,e)}};var Bt,zt={},Jt=Function.prototype,Yt=Jt.apply,Vt=Jt.call;zt="object"==typeof Reflect&&Reflect.apply||(f?Vt.bind(Yt):function(){return Vt.apply(Yt,arguments)});var Qt,Kt=w(w.bind);Qt=function(e,t){return oe(e),void 0===t?e:f?Kt(e,t):function(){return e.apply(t,arguments)}};var Xt={};Xt=W("document","documentElement");var Zt={};Zt=w([].slice);var en,tn=TypeError;en=function(e,t){if(e<t)throw tn("Not enough arguments");return e};var nn;nn=/(?:ipad|iphone|ipod).*applewebkit/i.test(Q);var rn;rn="process"==k(c.process);var on,an,sn,cn,un=c.setImmediate,ln=c.clearImmediate,dn=c.process,fn=c.Dispatch,pn=c.Function,hn=c.MessageChannel,gn=c.String,vn=0,yn={};try{on=c.location}catch(e){}var mn=function(e){if(ye(yn,e)){var t=yn[e];delete yn[e],t()}},bn=function(e){return function(){mn(e)}},_n=function(e){mn(e.data)},wn=function(e){c.postMessage(gn(e),on.protocol+"//"+on.host)};un&&ln||(un=function(e){en(arguments.length,1);var t=C(e)?e:pn(e),n=Zt(arguments,1);return yn[++vn]=function(){zt(t,void 0,n)},an(vn),vn},ln=function(e){delete yn[e]},rn?an=function(e){dn.nextTick(bn(e))}:fn&&fn.now?an=function(e){fn.now(bn(e))}:hn&&!nn?(cn=(sn=new hn).port2,sn.port1.onmessage=_n,an=Qt(cn.postMessage,cn)):c.addEventListener&&C(c.postMessage)&&!c.importScripts&&on&&"file:"!==on.protocol&&!d(wn)?(an=wn,c.addEventListener("message",_n,!1)):an="onreadystatechange"in Te("script")?function(e){Xt.appendChild(Te("script")).onreadystatechange=function(){Xt.removeChild(this),mn(e)}}:function(e){setTimeout(bn(e),0)});var kn=(Bt={set:un,clear:ln}).clear;a({global:!0,bind:!0,enumerable:!0,forced:c.clearImmediate!==kn},{clearImmediate:kn});var En=Bt.set;a({global:!0,bind:!0,enumerable:!0,forced:c.setImmediate!==En},{setImmediate:En});const Sn=async function(e,t){try{const r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),i=await Promise.race([r,(n=10,new Promise((function(e,t){setTimeout((function(){t(new Error(`Request took too long! Timeout after ${n} second`))}),1e3*n)})))]),o=await i.json();if(!i.ok)throw new Error(`${o.message} ${i.status}`);return o}catch(e){throw e}var n},On={recipe:{},search:{query:"",page:1,results:[]},bookmarks:[]},jn=function(e){return{id:e.id,image:e.image_url,ingredients:e.ingredients,publisher:e.publisher,servings:e.servings,sourceUrl:e.source_url,title:e.title,cookingTime:e.cooking_time,...e.key&&{key:e.key}}},$n=function(e=On.search.page){On.search.page=e;const t=10*(e-1),n=10*e;return On.search.results.slice(t,n)},Ln=function(){localStorage.setItem("bookmarks",JSON.stringify(On.bookmarks))},xn=function(e){On.bookmarks.push(e),e.id===On.recipe.id&&(On.recipe.bookmarked=!0),Ln()};!function(){const e=JSON.parse(localStorage.getItem("bookmarks"));e&&(On.bookmarks=e)}();var Mn;Mn=new URL(o("27Lyk").resolve("eyyUD"),import.meta.url).toString();class Tn{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;const n=this._generateMarkup();if(!t)return n;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",n)}update(e){this._data=e;const t=this._generateMarkup(),n=document.createRange().createContextualFragment(t),r=Array.from(n.querySelectorAll("*")),i=Array.from(this._parentElement.querySelectorAll("*"));r.forEach(((e,t)=>{const n=i[t];e.isEqualNode(n)||""===e.firstChild?.nodeValue.trim()||(n.textContent=e.textContent),e.isEqualNode(n)||Array.from(e.attributes).forEach((e=>n.setAttribute(e.name,e.value)))}))}_clear(){this._parentElement.innerHTML=""}renderSpinner(){const e=`\n      <div class="spinner">\n        <svg>\n          <use href="${n(Mn)}#icon-loader"></use>\n        </svg>\n      </div>\n    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){const t=`\n      <div class="error">\n        <div>\n          <svg>\n            <use href="${n(Mn)}#icon-alert-triangle"></use>\n          </svg>\n        </div>\n        <p>${e}</p>\n      </div>\n    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){const t=`\n      <div class="message">\n        <div>\n          <svg>\n            <use href="${n(Mn)}#icon-smile"></use>\n          </svg>\n        </div>\n        <p>${e}</p>\n      </div>\n    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}var Pn;function In(e,t,n,r,i){const o=[2,3,5];if(!0===i)for(let t=3;t*t<=e;t+=2)e%t==0&&o.push(t);let a=0,s=1,c=e,u=t;for(;a<=o.length;)c%o[a]==0&&u%o[a]==0?(s*=o[a],c/=o[a],u/=o[a]):a++;return function(e,t,n,r){return 1===e&&1===t?`${n=`${r}${(parseInt(n)+1).toString()}`}`:0===t?`${r}${n}`:"0"==n?`${r}${t}/${e}`:`${r}${n} ${t}/${e}`}(u,c,n,r)}Pn=function(e){let t;if(e<0?(e=Math.abs(e),t="-"):t="",void 0===e)return"Your input was undefined.";if(isNaN(e))return`"${e}" is not a number.`;if(1e16==e)return`${t}9999999999999999`;if(e>1e16)return"Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.";if(Number.isInteger(e))return`${t}${e}`;if(e<1e-6)return"0";const n=e.toString(),r=n.split(".");let i,o=r[0];if("0"==i&&"0"!==o)return o;if("0"==i&&"0"==o)return"0";if(i=n.length>=17?r[1].slice(0,r[1].length-1):r[1],"99"==i&&"0"!==o)return`${o} 99/100`;if("99"==i&&"0"==o)return"99/100";if(1-parseFloat(`.${i}`)<.0011&&(i="999"),null==i)return o;let a=i.split("").reverse().join("").match(/^(\d+)\1{1,2}/);if(a&&i.length>2){let e=a[0].split("").reverse().join(""),n=a[1].split("").reverse().join("");if(n.length>1){let e=n.split(""),t=1;for(let n=0;n<e.length;n++)t/=e[0]/e[n];1===t&&(n=e[0])}return n.length>1&&n.length%2==0&&(n=parseInt(n.slice(0,n.length/2),10)-parseInt(n.slice(n.length/2,n.length),10)==0?n.slice(0,n.length/2):n),function(e,t,n,r,i){const o=!0,a=e.length-n.length>=1?e.length-n.length:1,s=Math.pow(10,a),c=parseFloat(`0.${e}`),u=Math.pow(10,t.length),l=Math.round((c*u-c)*Math.pow(10,a));return In(l,(u-1)*s,r,i,o)}(i,n,e,o,t)}return function(e,t,n){const r=!1,i=parseInt(e,10),o=Math.pow(10,e.length);return In(i,o,t,n,r)}(i,o,t)};var Hn=new class extends Tn{_parentElement=document.querySelector(".recipe");_errorMessage="Sorry. The recipe could not be found. Try a different one.";_message="";addHandlerRender(e){["hashchange","load"].forEach((t=>window.addEventListener(t,e)))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",(function(t){const n=t.target.closest(".btn--update-servings");if(!n)return;const r=+n.dataset.updateTo;r<1||e(r)}))}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",(function(t){t.target.closest(".btn--bookmark")&&e()}))}_generateMarkup(){return`\n      <figure class="recipe__fig">\n        <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />\n        <h1 class="recipe__title">\n          <span>${this._data.title}</span>\n        </h1>\n      </figure>\n\n      <div class="recipe__details">\n        <div class="recipe__info">\n          <svg class="recipe__info-icon">\n            <use href="${n(Mn)}#icon-clock"></use>\n          </svg>\n          <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>\n          <span class="recipe__info-text">minutes</span>\n        </div>\n        <div class="recipe__info">\n          <svg class="recipe__info-icon">\n            <use href="${n(Mn)}#icon-users"></use>\n          </svg>\n          <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>\n          <span class="recipe__info-text">servings</span>\n\n          <div class="recipe__info-buttons">\n            <button class="btn--tiny btn--update-servings" data-update-to = "${this._data.servings-1}">\n              <svg>\n                <use href="${n(Mn)}#icon-minus-circle"></use>\n              </svg>\n            </button>\n            <button class="btn--tiny btn--update-servings" data-update-to = "${this._data.servings+1}">\n              <svg>\n                <use href="${n(Mn)}#icon-plus-circle"></use>\n              </svg>\n            </button>\n          </div>\n        </div>\n\n        <div class="recipe__user-generated ${this._data.key?"recipe-user-generated":""}">\n          <svg>\n            <use href="${n(Mn)}#icon-user"></use>\n          </svg>\n        </div>\n        \n        <button class="btn--round btn--bookmark">\n          <svg class="">\n            <use href="${n(Mn)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>\n          </svg>\n        </button>\n      </div>\n\n      <div class="recipe__ingredients">\n        <h2 class="heading--2">Recipe ingredients</h2>\n        <ul class="recipe__ingredient-list">\n          ${this._data.ingredients.map((e=>this._generateMarkupIngredient(e))).join("")}\n        </ul>\n      </div>\n\n      <div class="recipe__directions">\n        <h2 class="heading--2">How to cook it</h2>\n        <p class="recipe__directions-text">\n          This recipe was carefully designed and tested by\n          <span class="recipe__publisher">${this._data.publisher}</span>. Please check out\n          directions at their website.\n        </p>\n        <a\n          class="btn--small recipe__btn"\n          href="${this._data.sourceUrl}"\n          target="_blank"\n        >\n          <span>Directions</span>\n          <svg class="search__icon">\n            <use href="${n(Mn)}#icon-arrow-right"></use>\n          </svg>\n        </a>\n      </div>\n    `}_generateMarkupIngredient(e){return`\n      <li class="recipe__ingredient">\n        <svg class="recipe__icon">\n          <use href="${n(Mn)}#icon-check"></use>\n        </svg>\n        <div class="recipe__quantity">${e.quantity?n(Pn)(e.quantity):""}</div>\n        <div class="recipe__description">\n          <span class="recipe__unit">${e.unit}</span>\n          ${e.description}\n        </div>\n      </li>\n    `}};var qn=new class{_parentElement=document.querySelector(".search");getQuery(){const e=this._parentElement.querySelector(".search__field").value;return this._clearInputs(),e}_clearInputs(){this._parentElement.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentElement.addEventListener("submit",(function(t){t.preventDefault(),e()}))}};var Fn=new class extends Tn{_parentElement="";_generateMarkup(){const e=window.location.hash.slice(1);return`\n      <li class="preview">\n        <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">\n          <figure class="preview__fig">\n            <img src="${this._data.image}" alt="${this._data.title}" />\n          </figure>\n          <div class="preview__data">\n            <h4 class="preview__title">${this._data.title}</h4>\n            <p class="preview__publisher">${this._data.publisher}</p>\n          </div>\n\n          <div class="preview__user-generated ${this._data.key?"preview-user-generated":""}">\n            <svg>\n              <use href="${n(Mn)}#icon-user"></use>\n            </svg>\n          </div>\n        </a>\n      </li> \n    `}};var Nn=new class extends Tn{_parentElement=document.querySelector(".results");_errorMessage="Sorry. No recipe found for your query. Please try again.";_message="";_generateMarkup(){return this._data.map((e=>Fn.render(e,!1))).join("")}};var An=new class extends Tn{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",(function(t){const n=t.target.closest(".btn--inline");if(!n)return;const r=+n.dataset.goto;e(r)}))}_paginationBtnsMarkup(e,t){const r=`\n      <button data-goto = "${e+1}" class="btn--inline pagination__btn--next">\n        <span>Page ${e+1}</span>\n        <svg class="search__icon">\n          <use href="${n(Mn)}#icon-arrow-right"></use>\n        </svg>\n      </button>\n    `,i=`\n      <button data-goto = "${e-1}" class="btn--inline pagination__btn--prev">\n        <svg class="search__icon">\n          <use href="${n(Mn)}#icon-arrow-left"></use>\n        </svg>\n        <span>Page ${e-1}</span>\n      </button>\n    `;return"next"===t?r:"previous"===t?i:"both"===t?i+r:void 0}_generateMarkup(){const e=Math.ceil(this._data.results.length/10),t=this._data.page;return 1===t&&e>1?this._paginationBtnsMarkup(t,"next"):t===e&&e>1?this._paginationBtnsMarkup(t,"previous"):t<e?this._paginationBtnsMarkup(t,"both"):""}};var Cn=new class extends Tn{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it :)";_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map((e=>Fn.render(e,!1))).join("")}};var Rn=new class extends Tn{_parentElement=document.querySelector(".upload");_message="Recipe was succesfully uploaded.";_overlay=document.querySelector(".overlay");_window=document.querySelector(".add-recipe-window");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}_toggleWindow=function(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")};_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this._toggleWindow.bind(this))}_addHandlerHideWindow(){[this._overlay,this._btnClose].forEach((e=>{e.addEventListener("click",this._toggleWindow.bind(this))}))}addHandlerUpload(e){this._parentElement.addEventListener("submit",(function(t){t.preventDefault();const n=[...new FormData(this)],r=Object.fromEntries(n);e(r)}))}_generateMarkup(){}},Dn=function(e){var t,n=Object.prototype,r=n.hasOwnProperty,i=Object.defineProperty||function(e,t,n){e[t]=n.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var o=t&&t.prototype instanceof v?t:v,a=Object.create(o.prototype),s=new x(r||[]);return i(a,"_invoke",{value:O(e,n,s)}),a}function d(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var f="suspendedStart",p="executing",h="completed",g={};function v(){}function y(){}function m(){}var b={};u(b,a,(function(){return this}));var _=Object.getPrototypeOf,w=_&&_(_(M([])));w&&w!==n&&r.call(w,a)&&(b=w);var k=m.prototype=v.prototype=Object.create(b);function E(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function n(i,o,a,s){var c=d(e[i],e,o);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"==typeof l&&r.call(l,"__await")?t.resolve(l.__await).then((function(e){n("next",e,a,s)}),(function(e){n("throw",e,a,s)})):t.resolve(l).then((function(e){u.value=e,a(u)}),(function(e){return n("throw",e,a,s)}))}s(c.arg)}var o;i(this,"_invoke",{value:function(e,r){function i(){return new t((function(t,i){n(e,r,t,i)}))}return o=o?o.then(i,i):i()}})}function O(e,t,n){var r=f;return function(i,o){if(r===p)throw new Error("Generator is already running");if(r===h){if("throw"===i)throw o;return T()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=j(a,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var c=d(e,t,n);if("normal"===c.type){if(r=n.done?h:"suspendedYield",c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=h,n.method="throw",n.arg=c.arg)}}}function j(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,j(e,n),"throw"===n.method))return g;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var i=d(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,g;var o=i.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function $(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach($,this),this.reset(!0)}function M(e){if(e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}return{next:T}}function T(){return{value:t,done:!0}}return y.prototype=m,i(k,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:y,configurable:!0}),y.displayName=u(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,(function(){return this})),e.AsyncIterator=S,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var a=new S(l(t,n,r,i),o);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},E(k),u(k,c,"Generator"),u(k,a,(function(){return this})),u(k,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=M,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(L),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return s.type="throw",s.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),L(n),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;L(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:M(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=Dn}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=Dn:Function("r","regeneratorRuntime = r")(Dn)}const Un=async()=>{try{const e=window.location.hash.slice(1);if(!e)return;Nn.update($n()),Hn.renderSpinner(),await async function(e){try{const t=await Sn(`https://forkify-api.herokuapp.com/api/v2/recipes/${e}?key=48422545-48f8-46d8-ad92-cd75d4106fd1`),{recipe:n}=t.data;On.recipe=jn(n),On.bookmarks.some((t=>t.id===e))?On.recipe.bookmarked=!0:On.recipe.bookmarked=!1}catch(e){throw console.error(e),e}}(e),Hn.render(On.recipe),Cn.render(On.bookmarks),window.history.pushState(null,"",`#${On.recipe.id}`),Cn.update(On.bookmarks)}catch(e){Hn.renderError(),console.error(e)}};Un();const Wn=async function(){try{const e=qn.getQuery();if(!e)return;Nn.renderSpinner(),await async function(e){try{On.search.page=1,On.search.query=e;const t=await Sn(`https://forkify-api.herokuapp.com/api/v2/recipes/?search=${e}&key=48422545-48f8-46d8-ad92-cd75d4106fd1`);On.search.results=t.data.recipes.map((e=>({id:e.id,title:e.title,image:e.image_url,publisher:e.publisher,...e.key&&{key:e.key}})))}catch(e){throw console.error(e),e}}(e),Nn.render($n()),An.render(On.search)}catch(e){throw e}},Gn=function(e){Nn.render($n(e)),An.render(On.search)},Bn=function(e){!function(e){On.recipe.ingredients.forEach((t=>{t.quantity=t.quantity*e/On.recipe.servings})),On.recipe.servings=e}(e),Hn.update(On.recipe)},zn=function(){On.recipe.bookmarked?On.recipe.bookmarked&&function(e){const t=On.bookmarks.findIndex((t=>t.id===e));On.bookmarks.splice(t,1),e===On.recipe.id&&(On.recipe.bookmarked=!1),Ln()}(On.recipe.id):xn(On.recipe),Hn.update(On.recipe),Cn.render(On.bookmarks)},Jn=function(){Cn.render(On.bookmarks)},Yn=async function(e){try{Rn.renderSpinner(),await async function(e){try{const t=Object.entries(e).filter((e=>e[0].startsWith("ingredient")&&""!==e[1])).map((e=>{const t=e[1].split(",").map((e=>e.trim()));if(3!==t.length)throw new Error("Wrong ingredient format! Please use the correct format.");const[n,r,i]=t;return{quantity:n?+n:null,unit:r,description:i}})),n={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:e.cookingTime,servings:e.servings,ingredients:t},r=(await Sn("https://forkify-api.herokuapp.com/api/v2/recipes/?key=48422545-48f8-46d8-ad92-cd75d4106fd1",n)).data.recipe;On.recipe=jn(r),xn(On.recipe)}catch(e){throw e}}(e),Hn.render(On.recipe),Rn.renderMessage(),setTimeout((function(){Rn._toggleWindow()}),5e3)}catch(e){Rn.renderError(e.message),console.error(e)}};Hn.addHandlerRender(Un),Hn.addHandlerUpdateServings(Bn),qn.addHandlerSearch(Wn),An.addHandlerClick(Gn),Hn.addHandlerAddBookmark(zn),Cn.addHandlerRender(Jn),Rn.addHandlerUpload(Yn);
//# sourceMappingURL=index.a8795fde.js.map
