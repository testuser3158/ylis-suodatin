// ==UserScript==
// @name        ylis-suodatin
// @version     1.4.0
// @homepage    https://github.com/testuser3158/ylis-suodatin
// @supportURL  https://github.com/testuser3158/ylis-suodatin/issues
// @include     /^https:\/\/ylilauta.org\/[^/]+/.*/
// @namespace   github:testuser3158/ylis-suodatin
// @updateURL   https://testuser3158.github.io/ylis-suodatin/ylis-suodatin.meta.js
// @downloadURL https://testuser3158.github.io/ylis-suodatin/ylis-suodatin.user.js
// ==/UserScript==

(()=>{var e={476:e=>{"use strict";const t="[a-fA-F\\d:]",n=e=>e&&e.includeBoundaries?`(?:(?<=\\s|^)(?=${t})|(?<=${t})(?=\\s|$))`:"",o="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",r="[a-fA-F\\d]{1,4}",i=`\n(?:\n(?:${r}:){7}(?:${r}|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8\n(?:${r}:){6}(?:${o}|:${r}|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4\n(?:${r}:){5}(?::${o}|(?::${r}){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4\n(?:${r}:){4}(?:(?::${r}){0,1}:${o}|(?::${r}){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4\n(?:${r}:){3}(?:(?::${r}){0,2}:${o}|(?::${r}){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4\n(?:${r}:){2}(?:(?::${r}){0,3}:${o}|(?::${r}){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4\n(?:${r}:){1}(?:(?::${r}){0,4}:${o}|(?::${r}){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4\n(?::(?:(?::${r}){0,5}:${o}|(?::${r}){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4\n)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1\n`.replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),a=new RegExp(`(?:^${o}$)|(?:^${i}$)`),s=new RegExp(`^${o}$`),l=new RegExp(`^${i}$`),c=e=>e&&e.exact?a:new RegExp(`(?:${n(e)}${o}${n(e)})|(?:${n(e)}${i}${n(e)})`,"g");c.v4=e=>e&&e.exact?s:new RegExp(`${n(e)}${o}${n(e)}`,"g"),c.v6=e=>e&&e.exact?l:new RegExp(`${n(e)}${i}${n(e)}`,"g"),e.exports=c},400:(e,t,n)=>{"use strict";n.r(t),n.d(t,{render:()=>F,hydrate:()=>G,createElement:()=>m,h:()=>m,Fragment:()=>b,createRef:()=>y,isValidElement:()=>a,Component:()=>v,cloneElement:()=>N,createContext:()=>q,toChildArray:()=>$,options:()=>r});var o,r,i,a,s,l,c,u,_={},p=[],d=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function f(e,t){for(var n in t)e[n]=t[n];return e}function h(e){var t=e.parentNode;t&&t.removeChild(e)}function m(e,t,n){var r,i,a,s={};for(a in t)"key"==a?r=t[a]:"ref"==a?i=t[a]:s[a]=t[a];if(arguments.length>2&&(s.children=arguments.length>3?o.call(arguments,2):n),"function"==typeof e&&null!=e.defaultProps)for(a in e.defaultProps)void 0===s[a]&&(s[a]=e.defaultProps[a]);return g(e,s,r,i,null)}function g(e,t,n,o,a){var s={type:e,props:t,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==a?++i:a};return null==a&&null!=r.vnode&&r.vnode(s),s}function y(){return{current:null}}function b(e){return e.children}function v(e,t){this.props=e,this.context=t}function k(e,t){if(null==t)return e.__?k(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?k(e):null}function w(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return w(e)}}function x(e){(!e.__d&&(e.__d=!0)&&s.push(e)&&!O.__r++||c!==r.debounceRendering)&&((c=r.debounceRendering)||l)(O)}function O(){for(var e;O.__r=s.length;)e=s.sort((function(e,t){return e.__v.__b-t.__v.__b})),s=[],e.some((function(e){var t,n,o,r,i,a;e.__d&&(i=(r=(t=e).__v).__e,(a=t.__P)&&(n=[],(o=f({},r)).__v=r.__v+1,U(a,r,o,t.__n,void 0!==a.ownerSVGElement,null!=r.__h?[i]:null,n,null==i?k(r):i,r.__h),L(n,r),r.__e!=i&&w(r)))}))}function j(e,t,n,o,r,i,a,s,l,c){var u,d,f,h,m,y,v,w=o&&o.__k||p,x=w.length;for(n.__k=[],u=0;u<t.length;u++)if(null!=(h=n.__k[u]=null==(h=t[u])||"boolean"==typeof h?null:"string"==typeof h||"number"==typeof h||"bigint"==typeof h?g(null,h,null,null,h):Array.isArray(h)?g(b,{children:h},null,null,null):h.__b>0?g(h.type,h.props,h.key,null,h.__v):h)){if(h.__=n,h.__b=n.__b+1,null===(f=w[u])||f&&h.key==f.key&&h.type===f.type)w[u]=void 0;else for(d=0;d<x;d++){if((f=w[d])&&h.key==f.key&&h.type===f.type){w[d]=void 0;break}f=null}U(e,h,f=f||_,r,i,a,s,l,c),m=h.__e,(d=h.ref)&&f.ref!=d&&(v||(v=[]),f.ref&&v.push(f.ref,null,h),v.push(d,h.__c||m,h)),null!=m?(null==y&&(y=m),"function"==typeof h.type&&h.__k===f.__k?h.__d=l=E(h,l,e):l=S(e,h,f,w,m,l),"function"==typeof n.type&&(n.__d=l)):l&&f.__e==l&&l.parentNode!=e&&(l=k(f))}for(n.__e=y,u=x;u--;)null!=w[u]&&("function"==typeof n.type&&null!=w[u].__e&&w[u].__e==n.__d&&(n.__d=k(o,u+1)),A(w[u],w[u]));if(v)for(u=0;u<v.length;u++)D(v[u],v[++u],v[++u])}function E(e,t,n){for(var o,r=e.__k,i=0;r&&i<r.length;i++)(o=r[i])&&(o.__=e,t="function"==typeof o.type?E(o,t,n):S(n,o,o,r,o.__e,t));return t}function $(e,t){return t=t||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){$(e,t)})):t.push(e)),t}function S(e,t,n,o,r,i){var a,s,l;if(void 0!==t.__d)a=t.__d,t.__d=void 0;else if(null==n||r!=i||null==r.parentNode)e:if(null==i||i.parentNode!==e)e.appendChild(r),a=null;else{for(s=i,l=0;(s=s.nextSibling)&&l<o.length;l+=2)if(s==r)break e;e.insertBefore(r,i),a=i}return void 0!==a?a:r.nextSibling}function R(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||d.test(t)?n:n+"px"}function P(e,t,n,o,r){var i;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof o&&(e.style.cssText=o=""),o)for(t in o)n&&t in n||R(e.style,t,"");if(n)for(t in n)o&&n[t]===o[t]||R(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])i=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?o||e.addEventListener(t,i?C:z,i):e.removeEventListener(t,i?C:z,i);else if("dangerouslySetInnerHTML"!==t){if(r)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null!=n&&(!1!==n||"a"===t[0]&&"r"===t[1])?e.setAttribute(t,n):e.removeAttribute(t))}}function z(e){this.l[e.type+!1](r.event?r.event(e):e)}function C(e){this.l[e.type+!0](r.event?r.event(e):e)}function U(e,t,n,o,i,a,s,l,c){var u,_,p,d,h,m,g,y,k,w,x,O=t.type;if(void 0!==t.constructor)return null;null!=n.__h&&(c=n.__h,l=t.__e=n.__e,t.__h=null,a=[l]),(u=r.__b)&&u(t);try{e:if("function"==typeof O){if(y=t.props,k=(u=O.contextType)&&o[u.__c],w=u?k?k.props.value:u.__:o,n.__c?g=(_=t.__c=n.__c).__=_.__E:("prototype"in O&&O.prototype.render?t.__c=_=new O(y,w):(t.__c=_=new v(y,w),_.constructor=O,_.render=M),k&&k.sub(_),_.props=y,_.state||(_.state={}),_.context=w,_.__n=o,p=_.__d=!0,_.__h=[]),null==_.__s&&(_.__s=_.state),null!=O.getDerivedStateFromProps&&(_.__s==_.state&&(_.__s=f({},_.__s)),f(_.__s,O.getDerivedStateFromProps(y,_.__s))),d=_.props,h=_.state,p)null==O.getDerivedStateFromProps&&null!=_.componentWillMount&&_.componentWillMount(),null!=_.componentDidMount&&_.__h.push(_.componentDidMount);else{if(null==O.getDerivedStateFromProps&&y!==d&&null!=_.componentWillReceiveProps&&_.componentWillReceiveProps(y,w),!_.__e&&null!=_.shouldComponentUpdate&&!1===_.shouldComponentUpdate(y,_.__s,w)||t.__v===n.__v){_.props=y,_.state=_.__s,t.__v!==n.__v&&(_.__d=!1),_.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach((function(e){e&&(e.__=t)})),_.__h.length&&s.push(_);break e}null!=_.componentWillUpdate&&_.componentWillUpdate(y,_.__s,w),null!=_.componentDidUpdate&&_.__h.push((function(){_.componentDidUpdate(d,h,m)}))}_.context=w,_.props=y,_.state=_.__s,(u=r.__r)&&u(t),_.__d=!1,_.__v=t,_.__P=e,u=_.render(_.props,_.state,_.context),_.state=_.__s,null!=_.getChildContext&&(o=f(f({},o),_.getChildContext())),p||null==_.getSnapshotBeforeUpdate||(m=_.getSnapshotBeforeUpdate(d,h)),x=null!=u&&u.type===b&&null==u.key?u.props.children:u,j(e,Array.isArray(x)?x:[x],t,n,o,i,a,s,l,c),_.base=t.__e,t.__h=null,_.__h.length&&s.push(_),g&&(_.__E=_.__=null),_.__e=!1}else null==a&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=T(n.__e,t,n,o,i,a,s,c);(u=r.diffed)&&u(t)}catch(e){t.__v=null,(c||null!=a)&&(t.__e=l,t.__h=!!c,a[a.indexOf(l)]=null),r.__e(e,t,n)}}function L(e,t){r.__c&&r.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){r.__e(e,t.__v)}}))}function T(e,t,n,r,i,a,s,l){var c,u,p,d=n.props,f=t.props,m=t.type,g=0;if("svg"===m&&(i=!0),null!=a)for(;g<a.length;g++)if((c=a[g])&&"setAttribute"in c==!!m&&(m?c.localName===m:3===c.nodeType)){e=c,a[g]=null;break}if(null==e){if(null===m)return document.createTextNode(f);e=i?document.createElementNS("http://www.w3.org/2000/svg",m):document.createElement(m,f.is&&f),a=null,l=!1}if(null===m)d===f||l&&e.data===f||(e.data=f);else{if(a=a&&o.call(e.childNodes),u=(d=n.props||_).dangerouslySetInnerHTML,p=f.dangerouslySetInnerHTML,!l){if(null!=a)for(d={},g=0;g<e.attributes.length;g++)d[e.attributes[g].name]=e.attributes[g].value;(p||u)&&(p&&(u&&p.__html==u.__html||p.__html===e.innerHTML)||(e.innerHTML=p&&p.__html||""))}if(function(e,t,n,o,r){var i;for(i in n)"children"===i||"key"===i||i in t||P(e,i,null,n[i],o);for(i in t)r&&"function"!=typeof t[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===t[i]||P(e,i,t[i],n[i],o)}(e,f,d,i,l),p)t.__k=[];else if(g=t.props.children,j(e,Array.isArray(g)?g:[g],t,n,r,i&&"foreignObject"!==m,a,s,a?a[0]:n.__k&&k(n,0),l),null!=a)for(g=a.length;g--;)null!=a[g]&&h(a[g]);l||("value"in f&&void 0!==(g=f.value)&&(g!==d.value||g!==e.value||"progress"===m&&!g)&&P(e,"value",g,d.value,!1),"checked"in f&&void 0!==(g=f.checked)&&g!==e.checked&&P(e,"checked",g,d.checked,!1))}return e}function D(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){r.__e(e,n)}}function A(e,t,n){var o,i;if(r.unmount&&r.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||D(o,null,t)),null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){r.__e(e,t)}o.base=o.__P=null}if(o=e.__k)for(i=0;i<o.length;i++)o[i]&&A(o[i],t,"function"!=typeof e.type);n||null==e.__e||h(e.__e),e.__e=e.__d=void 0}function M(e,t,n){return this.constructor(e,n)}function F(e,t,n){var i,a,s;r.__&&r.__(e,t),a=(i="function"==typeof n)?null:n&&n.__k||t.__k,s=[],U(t,e=(!i&&n||t).__k=m(b,null,[e]),a||_,_,void 0!==t.ownerSVGElement,!i&&n?[n]:a?null:t.firstChild?o.call(t.childNodes):null,s,!i&&n?n:a?a.__e:t.firstChild,i),L(s,e)}function G(e,t){F(e,t,G)}function N(e,t,n){var r,i,a,s=f({},e.props);for(a in t)"key"==a?r=t[a]:"ref"==a?i=t[a]:s[a]=t[a];return arguments.length>2&&(s.children=arguments.length>3?o.call(arguments,2):n),g(e.type,s,r||e.key,i||e.ref,null)}function q(e,t){var n={__c:t="__cC"+u++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var n,o;return this.getChildContext||(n=[],(o={})[t]=this,this.getChildContext=function(){return o},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.some(x)},this.sub=function(e){n.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Provider.__=n.Consumer.contextType=n}o=p.slice,r={__e:function(e,t){for(var n,o,r;t=t.__;)if((n=t.__c)&&!n.__)try{if((o=n.constructor)&&null!=o.getDerivedStateFromError&&(n.setState(o.getDerivedStateFromError(e)),r=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(e),r=n.__d),r)return n.__E=n}catch(t){e=t}throw e}},i=0,a=function(e){return null!=e&&void 0===e.constructor},v.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=f({},this.state),"function"==typeof e&&(e=e(f({},n),this.props)),e&&f(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),x(this))},v.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),x(this))},v.prototype.render=b,s=[],l="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,O.__r=0,u=0},396:(e,t,n)=>{"use strict";n.r(t),n.d(t,{useState:()=>h,useReducer:()=>m,useEffect:()=>g,useLayoutEffect:()=>y,useRef:()=>b,useImperativeHandle:()=>v,useMemo:()=>k,useCallback:()=>w,useContext:()=>x,useDebugValue:()=>O,useErrorBoundary:()=>j});var o,r,i,a=n(400),s=0,l=[],c=a.options.__b,u=a.options.__r,_=a.options.diffed,p=a.options.__c,d=a.options.unmount;function f(e,t){a.options.__h&&a.options.__h(r,e,s||t),s=0;var n=r.__H||(r.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function h(e){return s=1,m(z,e)}function m(e,t,n){var i=f(o++,2);return i.t=e,i.__c||(i.__=[n?n(t):z(void 0,t),function(e){var t=i.t(i.__[0],e);i.__[0]!==t&&(i.__=[t,i.__[1]],i.__c.setState({}))}],i.__c=r),i.__}function g(e,t){var n=f(o++,3);!a.options.__s&&P(n.__H,t)&&(n.__=e,n.__H=t,r.__H.__h.push(n))}function y(e,t){var n=f(o++,4);!a.options.__s&&P(n.__H,t)&&(n.__=e,n.__H=t,r.__h.push(n))}function b(e){return s=5,k((function(){return{current:e}}),[])}function v(e,t,n){s=6,y((function(){"function"==typeof e?e(t()):e&&(e.current=t())}),null==n?n:n.concat(e))}function k(e,t){var n=f(o++,7);return P(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function w(e,t){return s=8,k((function(){return e}),t)}function x(e){var t=r.context[e.__c],n=f(o++,9);return n.c=e,t?(null==n.__&&(n.__=!0,t.sub(r)),t.props.value):e.__}function O(e,t){a.options.useDebugValue&&a.options.useDebugValue(t?t(e):e)}function j(e){var t=f(o++,10),n=h();return t.__=e,r.componentDidCatch||(r.componentDidCatch=function(e){t.__&&t.__(e),n[1](e)}),[n[0],function(){n[1](void 0)}]}function E(){for(var e;e=l.shift();)if(e.__P)try{e.__H.__h.forEach(S),e.__H.__h.forEach(R),e.__H.__h=[]}catch(t){e.__H.__h=[],a.options.__e(t,e.__v)}}a.options.__b=function(e){r=null,c&&c(e)},a.options.__r=function(e){u&&u(e),o=0;var t=(r=e.__c).__H;t&&(t.__h.forEach(S),t.__h.forEach(R),t.__h=[])},a.options.diffed=function(e){_&&_(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(1!==l.push(t)&&i===a.options.requestAnimationFrame||((i=a.options.requestAnimationFrame)||function(e){var t,n=function(){clearTimeout(o),$&&cancelAnimationFrame(t),setTimeout(e)},o=setTimeout(n,100);$&&(t=requestAnimationFrame(n))})(E)),r=null},a.options.__c=function(e,t){t.some((function(e){try{e.__h.forEach(S),e.__h=e.__h.filter((function(e){return!e.__||R(e)}))}catch(n){t.some((function(e){e.__h&&(e.__h=[])})),t=[],a.options.__e(n,e.__v)}})),p&&p(e,t)},a.options.unmount=function(e){d&&d(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach((function(e){try{S(e)}catch(e){t=e}})),t&&a.options.__e(t,n.__v))};var $="function"==typeof requestAnimationFrame;function S(e){var t=r,n=e.__c;"function"==typeof n&&(e.__c=void 0,n()),r=t}function R(e){var t=r;e.__c=e.__(),r=t}function P(e,t){return!e||e.length!==t.length||t.some((function(t,n){return t!==e[n]}))}function z(e,t){return"function"==typeof t?t(e):t}},584:(e,t,n)=>{"use strict";n.r(t),n.d(t,{Fragment:()=>o.Fragment,jsx:()=>i,jsxs:()=>i,jsxDEV:()=>i});var o=n(400),r=0;function i(e,t,n,i,a){var s,l,c={};for(l in t)"ref"==l?s=t[l]:c[l]=t[l];var u={type:e,props:c,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--r,__source:i,__self:a};if("function"==typeof e&&(s=e.defaultProps))for(l in s)void 0===c[l]&&(c[l]=s[l]);return o.options.vnode&&o.options.vnode(u),u}},23:function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=n(584),i=n(396),a=n(321),s=n(903),l=o(n(985)),c={onlyVideos:!1,onlyImages:!1,sortByUpvotesOrder:null,onlyRepliesFromOp:!1,onlyRepliesFromMyself:!1,onlyUrls:!1};t.default=function(){const[e,t]=(0,i.useReducer)(((e,t)=>{switch(t.type){case"TOGGLE_IMAGES_ONLY":return Object.assign(Object.assign({},e),{onlyImages:!e.onlyImages});case"TOGGLE_VIDEOS_ONLY":return Object.assign(Object.assign({},e),{onlyVideos:!e.onlyVideos});case"TOGGLE_OP_ONLY":return Object.assign(Object.assign({},e),{onlyRepliesFromOp:!e.onlyRepliesFromOp});case"TOGGLE_OWN_ONLY":return Object.assign(Object.assign({},e),{onlyRepliesFromMyself:!e.onlyRepliesFromMyself});case"TOGGLE_URLS_ONLY":return Object.assign(Object.assign({},e),{onlyUrls:!e.onlyUrls});case"NEXT_SORT_ORDER":return(()=>{const t=null===e.sortByUpvotesOrder?"desc":"desc"===e.sortByUpvotesOrder?"asc":null;return Object.assign(Object.assign({},e),{sortByUpvotesOrder:t})})()}}),c),n=(0,l.default)(e),o=(0,i.useMemo)((()=>(0,s.getReplies)()),[]);return(0,i.useLayoutEffect)((()=>{void 0!==n&&requestIdleCallback((()=>{e.sortByUpvotesOrder!==(null==n?void 0:n.sortByUpvotesOrder)&&(0,s.orderRepliesByUpvotes)(e.sortByUpvotesOrder,o),(0,s.filterReplies)(e)}))}),[e,n]),(0,r.jsxs)("form",{children:[(0,r.jsx)(a.Input,{label:"Urlit",name:"onlyUrls",type:"checkbox",checked:e.onlyUrls,onChange:e=>t({type:"TOGGLE_URLS_ONLY"})},void 0),(0,r.jsx)(a.Separator,{},void 0),(0,r.jsx)(a.Input,{label:"Omat",name:"onlyRepliesFromMyself",type:"checkbox",checked:e.onlyRepliesFromMyself,onChange:e=>t({type:"TOGGLE_OWN_ONLY"})},void 0),(0,r.jsx)(a.Separator,{},void 0),(0,r.jsx)(a.Input,{label:"AP",name:"onlyRepliesFromOp",type:"checkbox",checked:e.onlyRepliesFromOp,onChange:e=>t({type:"TOGGLE_OP_ONLY"})},void 0),(0,r.jsx)(a.Separator,{},void 0),(0,r.jsxs)(a.Group,{children:[(0,r.jsx)(a.Input,{label:"Kuvat",name:"onlyImages",type:"checkbox",checked:e.onlyImages,onChange:e=>t({type:"TOGGLE_IMAGES_ONLY"})},void 0),(0,r.jsx)(a.Input,{label:"Videot",name:"onlyVideos",type:"checkbox",checked:e.onlyVideos,onChange:e=>t({type:"TOGGLE_VIDEOS_ONLY"})},void 0)]},void 0),(0,r.jsx)(a.Separator,{},void 0),(0,r.jsxs)("button",Object.assign({onClick:e=>{t({type:"NEXT_SORT_ORDER"}),e.preventDefault()}},{children:["Tää",null!==e.sortByUpvotesOrder?` ${u=e.sortByUpvotesOrder,"desc"===u?"↓":"asc"===u?"↑":void 0}`:null]}),void 0)]},void 0);var u}},558:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(null==e)throw new Error(`Expected a defined value but got ${e}`)}},321:function(e,t,n){"use strict";var o=this&&this.__rest||function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};Object.defineProperty(t,"__esModule",{value:!0}),t.Group=t.Input=t.Separator=void 0;const r=n(584);t.Separator=function(){return(0,r.jsx)("div",{style:{borderRight:"1px solid hsl(var(--c-pri-h), calc(var(--c-pri-s) - 20% * var(--l-multi)), calc(var(--c-pri-l) + 5% * var(--l-multi)))",height:"26px",width:"1px",display:"inline-block",margin:"0 1rem",verticalAlign:"middle"}},void 0)};const i={padding:"12px 0px",cursor:"pointer"},a={marginLeft:"0.5rem",verticalAlign:"middle"};t.Input=function(e){var{label:t}=e,n=o(e,["label"]);return(0,r.jsxs)("label",Object.assign({style:i},{children:[t,(0,r.jsx)("input",Object.assign({style:a},n),void 0)]}),void 0)},t.Group=function({children:e}){return(0,r.jsx)("div",Object.assign({style:{display:"inline-flex",gap:"1rem"}},{children:e}),void 0)}},903:function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.filterReplies=t.isReplyVisible=t.orderRepliesByUpvotes=t.parseReplyElement=t.getReplies=void 0;const r=o(n(893)),i=o(n(558));function a(){const e=document.querySelectorAll(".thread .thread-replies .post");return Array.from(e).map((e=>s(e)))}function s(e){const t=e.querySelector(".post .post-message");(0,i.default)(t);const n=t.innerText,o=e.querySelector(".post-upvotes");(0,i.default)(o);const a=o.getAttribute("data-count"),s=e.querySelector(".post-downvotes");(0,i.default)(s);const l=s.getAttribute("data-count"),c=a?parseInt(a):0,u=l?parseInt(l):0,_=e.querySelector(".post-file > a"),p=null==_?void 0:_.getAttribute("class"),d=(()=>{switch(p){case"jpg":return"image";case"mp4":return"video";default:return}})(),f=e.classList.contains("op"),h=e.classList.contains("own");return{node:e,upvotes:c,downvotes:u,embedType:d,isOP:f,isOwn:h,message:n,hasUrl:(0,r.default)({strict:!0}).test(n)}}function l({onlyVideos:e,onlyImages:t,onlyRepliesFromOp:n,onlyRepliesFromMyself:o,onlyUrls:r},i){const a=t||e,s="image"===i.embedType,l="video"===i.embedType;return(!a||t&&s||e&&l)&&(!n||i.isOP)&&(!o||i.isOwn)&&(!r||i.hasUrl)}t.getReplies=a,t.parseReplyElement=s,t.orderRepliesByUpvotes=function(e,t){const n=document.querySelector(".thread .thread-replies");(0,i.default)(n),n.children;const o=document.createDocumentFragment(),r="asc"===e?1:-1;(null!==e?[...t].sort(((e,t)=>{const n=e.upvotes-e.downvotes,o=t.upvotes-t.downvotes;return r*(Number(n>o)-Number(o>n))})):t).forEach(((e,t)=>{o.appendChild(e.node)})),n.replaceChildren(),n.appendChild(o)},t.isReplyVisible=l,t.filterReplies=function(e){a().forEach((t=>{t.node.style.display=l(e,t)?"":"none"}))}},796:function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=n(584),i=n(400),a=o(n(23)),s=o(n(558)),l=document.querySelector(".navigation");(0,s.default)(l);const c=document.createElement("div");c.id="ylis-suodatin",c.style.flex="1",c.style.display="flex",c.style.justifyContent="flex-end",l.append(c),(0,i.render)((0,r.jsx)(a.default,{},void 0),c)},985:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(396);t.default=function(e){const t=(0,o.useRef)();return(0,o.useEffect)((()=>{t.current=e}),[e]),t.current}},893:(e,t,n)=>{"use strict";function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=n(476),a=n(248),s=function(){try{var e=n(538);return"function"==typeof e?e:RegExp}catch(e){return RegExp}}(),l=i.v4().source,c=i.v6().source;e.exports=function(e){e=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({exact:!1,strict:!1,auth:!1,localhost:!0,parens:!1,apostrophes:!1,trailingPeriod:!1,ipv4:!0,ipv6:!0,tlds:a,returnString:!1},e);var t="(?:(?:[a-z]+:)?//)".concat(e.strict?"":"?"),n=e.auth?"(?:\\S+(?::\\S*)?@)?":"",i="(?:\\.".concat(e.strict?"(?:[a-z\\u00a1-\\uffff]{2,})":"(?:".concat(e.tlds.sort((function(e,t){return t.length-e.length})).join("|"),")"),")").concat(e.trailingPeriod?"\\.?":""),u=e.parens?e.apostrophes?'(?:[/?#][^\\s"]*)?':"(?:[/?#][^\\s\"']*)?":e.apostrophes?'(?:[/?#][^\\s"\\)]*)?':"(?:[/?#][^\\s\"\\)']*)?",_="(?:".concat(t,"|www\\.)").concat(n,"(?:");return e.localhost&&(_+="localhost|"),e.ipv4&&(_+="".concat(l,"|")),e.ipv6&&(_+="".concat(c,"|")),_+="".concat("(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)").concat("(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*").concat(i,")").concat("(?::\\d{2,5})?").concat(u),e.returnString?_:e.exact?new s("(?:^".concat(_,"$)"),"i"):new s(_,"ig")}},538:()=>{},248:e=>{"use strict";e.exports=JSON.parse('["aaa","aarp","abarth","abb","abbott","abbvie","abc","able","abogado","abudhabi","ac","academy","accenture","accountant","accountants","aco","actor","ad","adac","ads","adult","ae","aeg","aero","aetna","af","afl","africa","ag","agakhan","agency","ai","aig","airbus","airforce","airtel","akdn","al","alfaromeo","alibaba","alipay","allfinanz","allstate","ally","alsace","alstom","am","amazon","americanexpress","americanfamily","amex","amfam","amica","amsterdam","analytics","android","anquan","anz","ao","aol","apartments","app","apple","aq","aquarelle","ar","arab","aramco","archi","army","arpa","art","arte","as","asda","asia","associates","at","athleta","attorney","au","auction","audi","audible","audio","auspost","author","auto","autos","avianca","aw","aws","ax","axa","az","azure","ba","baby","baidu","banamex","bananarepublic","band","bank","bar","barcelona","barclaycard","barclays","barefoot","bargains","baseball","basketball","bauhaus","bayern","bb","bbc","bbt","bbva","bcg","bcn","bd","be","beats","beauty","beer","bentley","berlin","best","bestbuy","bet","bf","bg","bh","bharti","bi","bible","bid","bike","bing","bingo","bio","biz","bj","black","blackfriday","blockbuster","blog","bloomberg","blue","bm","bms","bmw","bn","bnpparibas","bo","boats","boehringer","bofa","bom","bond","boo","book","booking","bosch","bostik","boston","bot","boutique","box","br","bradesco","bridgestone","broadway","broker","brother","brussels","bs","bt","budapest","bugatti","build","builders","business","buy","buzz","bv","bw","by","bz","bzh","ca","cab","cafe","cal","call","calvinklein","cam","camera","camp","cancerresearch","canon","capetown","capital","capitalone","car","caravan","cards","care","career","careers","cars","casa","case","cash","casino","cat","catering","catholic","cba","cbn","cbre","cbs","cc","cd","center","ceo","cern","cf","cfa","cfd","cg","ch","chanel","channel","charity","chase","chat","cheap","chintai","christmas","chrome","church","ci","cipriani","circle","cisco","citadel","citi","citic","city","cityeats","ck","cl","claims","cleaning","click","clinic","clinique","clothing","cloud","club","clubmed","cm","cn","co","coach","codes","coffee","college","cologne","com","comcast","commbank","community","company","compare","computer","comsec","condos","construction","consulting","contact","contractors","cooking","cookingchannel","cool","coop","corsica","country","coupon","coupons","courses","cpa","cr","credit","creditcard","creditunion","cricket","crown","crs","cruise","cruises","csc","cu","cuisinella","cv","cw","cx","cy","cymru","cyou","cz","dabur","dad","dance","data","date","dating","datsun","day","dclk","dds","de","deal","dealer","deals","degree","delivery","dell","deloitte","delta","democrat","dental","dentist","desi","design","dev","dhl","diamonds","diet","digital","direct","directory","discount","discover","dish","diy","dj","dk","dm","dnp","do","docs","doctor","dog","domains","dot","download","drive","dtv","dubai","dunlop","dupont","durban","dvag","dvr","dz","earth","eat","ec","eco","edeka","edu","education","ee","eg","email","emerck","energy","engineer","engineering","enterprises","epson","equipment","er","ericsson","erni","es","esq","estate","et","etisalat","eu","eurovision","eus","events","exchange","expert","exposed","express","extraspace","fage","fail","fairwinds","faith","family","fan","fans","farm","farmers","fashion","fast","fedex","feedback","ferrari","ferrero","fi","fiat","fidelity","fido","film","final","finance","financial","fire","firestone","firmdale","fish","fishing","fit","fitness","fj","fk","flickr","flights","flir","florist","flowers","fly","fm","fo","foo","food","foodnetwork","football","ford","forex","forsale","forum","foundation","fox","fr","free","fresenius","frl","frogans","frontdoor","frontier","ftr","fujitsu","fun","fund","furniture","futbol","fyi","ga","gal","gallery","gallo","gallup","game","games","gap","garden","gay","gb","gbiz","gd","gdn","ge","gea","gent","genting","george","gf","gg","ggee","gh","gi","gift","gifts","gives","giving","gl","glass","gle","global","globo","gm","gmail","gmbh","gmo","gmx","gn","godaddy","gold","goldpoint","golf","goo","goodyear","goog","google","gop","got","gov","gp","gq","gr","grainger","graphics","gratis","green","gripe","grocery","group","gs","gt","gu","guardian","gucci","guge","guide","guitars","guru","gw","gy","hair","hamburg","hangout","haus","hbo","hdfc","hdfcbank","health","healthcare","help","helsinki","here","hermes","hgtv","hiphop","hisamitsu","hitachi","hiv","hk","hkt","hm","hn","hockey","holdings","holiday","homedepot","homegoods","homes","homesense","honda","horse","hospital","host","hosting","hot","hoteles","hotels","hotmail","house","how","hr","hsbc","ht","hu","hughes","hyatt","hyundai","ibm","icbc","ice","icu","id","ie","ieee","ifm","ikano","il","im","imamat","imdb","immo","immobilien","in","inc","industries","infiniti","info","ing","ink","institute","insurance","insure","int","international","intuit","investments","io","ipiranga","iq","ir","irish","is","ismaili","ist","istanbul","it","itau","itv","jaguar","java","jcb","je","jeep","jetzt","jewelry","jio","jll","jm","jmp","jnj","jo","jobs","joburg","jot","joy","jp","jpmorgan","jprs","juegos","juniper","kaufen","kddi","ke","kerryhotels","kerrylogistics","kerryproperties","kfh","kg","kh","ki","kia","kim","kinder","kindle","kitchen","kiwi","km","kn","koeln","komatsu","kosher","kp","kpmg","kpn","kr","krd","kred","kuokgroup","kw","ky","kyoto","kz","la","lacaixa","lamborghini","lamer","lancaster","lancia","land","landrover","lanxess","lasalle","lat","latino","latrobe","law","lawyer","lb","lc","lds","lease","leclerc","lefrak","legal","lego","lexus","lgbt","li","lidl","life","lifeinsurance","lifestyle","lighting","like","lilly","limited","limo","lincoln","linde","link","lipsy","live","living","lk","llc","llp","loan","loans","locker","locus","loft","lol","london","lotte","lotto","love","lpl","lplfinancial","lr","ls","lt","ltd","ltda","lu","lundbeck","luxe","luxury","lv","ly","ma","macys","madrid","maif","maison","makeup","man","management","mango","map","market","marketing","markets","marriott","marshalls","maserati","mattel","mba","mc","mckinsey","md","me","med","media","meet","melbourne","meme","memorial","men","menu","merckmsd","mg","mh","miami","microsoft","mil","mini","mint","mit","mitsubishi","mk","ml","mlb","mls","mm","mma","mn","mo","mobi","mobile","moda","moe","moi","mom","monash","money","monster","mormon","mortgage","moscow","moto","motorcycles","mov","movie","mp","mq","mr","ms","msd","mt","mtn","mtr","mu","museum","music","mutual","mv","mw","mx","my","mz","na","nab","nagoya","name","natura","navy","nba","nc","ne","nec","net","netbank","netflix","network","neustar","new","news","next","nextdirect","nexus","nf","nfl","ng","ngo","nhk","ni","nico","nike","nikon","ninja","nissan","nissay","nl","no","nokia","northwesternmutual","norton","now","nowruz","nowtv","np","nr","nra","nrw","ntt","nu","nyc","nz","obi","observer","office","okinawa","olayan","olayangroup","oldnavy","ollo","om","omega","one","ong","onl","online","ooo","open","oracle","orange","org","organic","origins","osaka","otsuka","ott","ovh","pa","page","panasonic","paris","pars","partners","parts","party","passagens","pay","pccw","pe","pet","pf","pfizer","pg","ph","pharmacy","phd","philips","phone","photo","photography","photos","physio","pics","pictet","pictures","pid","pin","ping","pink","pioneer","pizza","pk","pl","place","play","playstation","plumbing","plus","pm","pn","pnc","pohl","poker","politie","porn","post","pr","pramerica","praxi","press","prime","pro","prod","productions","prof","progressive","promo","properties","property","protection","pru","prudential","ps","pt","pub","pw","pwc","py","qa","qpon","quebec","quest","racing","radio","re","read","realestate","realtor","realty","recipes","red","redstone","redumbrella","rehab","reise","reisen","reit","reliance","ren","rent","rentals","repair","report","republican","rest","restaurant","review","reviews","rexroth","rich","richardli","ricoh","ril","rio","rip","ro","rocher","rocks","rodeo","rogers","room","rs","rsvp","ru","rugby","ruhr","run","rw","rwe","ryukyu","sa","saarland","safe","safety","sakura","sale","salon","samsclub","samsung","sandvik","sandvikcoromant","sanofi","sap","sarl","sas","save","saxo","sb","sbi","sbs","sc","sca","scb","schaeffler","schmidt","scholarships","school","schule","schwarz","science","scot","sd","se","search","seat","secure","security","seek","select","sener","services","ses","seven","sew","sex","sexy","sfr","sg","sh","shangrila","sharp","shaw","shell","shia","shiksha","shoes","shop","shopping","shouji","show","showtime","si","silk","sina","singles","site","sj","sk","ski","skin","sky","skype","sl","sling","sm","smart","smile","sn","sncf","so","soccer","social","softbank","software","sohu","solar","solutions","song","sony","soy","spa","space","sport","spot","sr","srl","ss","st","stada","staples","star","statebank","statefarm","stc","stcgroup","stockholm","storage","store","stream","studio","study","style","su","sucks","supplies","supply","support","surf","surgery","suzuki","sv","swatch","swiss","sx","sy","sydney","systems","sz","tab","taipei","talk","taobao","target","tatamotors","tatar","tattoo","tax","taxi","tc","tci","td","tdk","team","tech","technology","tel","temasek","tennis","teva","tf","tg","th","thd","theater","theatre","tiaa","tickets","tienda","tiffany","tips","tires","tirol","tj","tjmaxx","tjx","tk","tkmaxx","tl","tm","tmall","tn","to","today","tokyo","tools","top","toray","toshiba","total","tours","town","toyota","toys","tr","trade","trading","training","travel","travelchannel","travelers","travelersinsurance","trust","trv","tt","tube","tui","tunes","tushu","tv","tvs","tw","tz","ua","ubank","ubs","ug","uk","unicom","university","uno","uol","ups","us","uy","uz","va","vacations","vana","vanguard","vc","ve","vegas","ventures","verisign","vermögensberater","vermögensberatung","versicherung","vet","vg","vi","viajes","video","vig","viking","villas","vin","vip","virgin","visa","vision","viva","vivo","vlaanderen","vn","vodka","volkswagen","volvo","vote","voting","voto","voyage","vu","vuelos","wales","walmart","walter","wang","wanggou","watch","watches","weather","weatherchannel","webcam","weber","website","wed","wedding","weibo","weir","wf","whoswho","wien","wiki","williamhill","win","windows","wine","winners","wme","wolterskluwer","woodside","work","works","world","wow","ws","wtc","wtf","xbox","xerox","xfinity","xihuan","xin","xxx","xyz","yachts","yahoo","yamaxun","yandex","ye","yodobashi","yoga","yokohama","you","youtube","yt","yun","za","zappos","zara","zero","zip","zm","zone","zuerich","zw","ελ","ευ","бг","бел","дети","ею","католик","ком","мкд","мон","москва","онлайн","орг","рус","рф","сайт","срб","укр","қаз","հայ","ישראל","קום","ابوظبي","اتصالات","ارامكو","الاردن","البحرين","الجزائر","السعودية","العليان","المغرب","امارات","ایران","بارت","بازار","بيتك","بھارت","تونس","سودان","سورية","شبكة","عراق","عرب","عمان","فلسطين","قطر","كاثوليك","كوم","مصر","مليسيا","موريتانيا","موقع","همراه","پاکستان","ڀارت","कॉम","नेट","भारत","भारतम्","भारोत","संगठन","বাংলা","ভারত","ভাৰত","ਭਾਰਤ","ભારત","ଭାରତ","இந்தியா","இலங்கை","சிங்கப்பூர்","భారత్","ಭಾರತ","ഭാരതം","ලංකා","คอม","ไทย","ລາວ","გე","みんな","アマゾン","クラウド","グーグル","コム","ストア","セール","ファッション","ポイント","世界","中信","中国","中國","中文网","亚马逊","企业","佛山","信息","健康","八卦","公司","公益","台湾","台灣","商城","商店","商标","嘉里","嘉里大酒店","在线","大拿","天主教","娱乐","家電","广东","微博","慈善","我爱你","手机","招聘","政务","政府","新加坡","新闻","时尚","書籍","机构","淡马锡","游戏","澳門","点看","移动","组织机构","网址","网店","网站","网络","联通","诺基亚","谷歌","购物","通販","集团","電訊盈科","飞利浦","食品","餐厅","香格里拉","香港","닷넷","닷컴","삼성","한국"]')}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(796)})();