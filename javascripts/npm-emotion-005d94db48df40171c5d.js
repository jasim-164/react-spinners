/*! For license information please see npm-emotion-005d94db48df40171c5d.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_spinners=self.webpackChunkreact_spinners||[]).push([[959],{9423:(e,t,r)=>{r.d(t,{Z:()=>p});var n=function(){function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var r=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{r.insertRule(e,r.cssRules.length)}catch(e){}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),o=r(9307),a=r(2781),i=r(6414),s=r(6439),c=r(8885),l=new WeakMap,f=function(e){if("rule"===e.type&&e.parent&&e.length){for(var t=e.value,r=e.parent,n=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||l.get(r))&&!n){l.set(e,!0);for(var i=[],s=function(e,t){return(0,o.cE)(function(e,t){var r=-1,n=44;do{switch((0,o.r)(n)){case 0:38===n&&12===(0,o.fj)()&&(t[r]=1),e[r]+=(0,o.QU)(o.FK-1);break;case 2:e[r]+=(0,o.iF)(n);break;case 4:if(44===n){e[++r]=58===(0,o.fj)()?"&\f":"",t[r]=e[r].length;break}default:e[r]+=(0,a.Dp)(n)}}while(n=(0,o.lp)());return e}((0,o.un)(e),t))}(t,i),c=r.props,f=0,u=0;f<s.length;f++)for(var d=0;d<c.length;d++,u++)e.props[u]=i[f]?s[f].replace(/&\f/g,c[d]):c[d]+" "+s[f]}}},u=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}},d=[i.Ji];const p=function(e){var t=e.key;if("css"===t){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var o,a,l=e.stylisPlugins||d,p={},y=[];o=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),r=1;r<t.length;r++)p[t[r]]=!0;y.push(e)}));var m,h=[f,u],v=[s.P,(0,i.cD)((function(e){m.insert(e)}))],g=(0,i.qR)(h.concat(l,v));a=function(e,t,r,n){var o;m=r,o=e?e+"{"+t.styles+"}":t.styles,(0,s.q)((0,c.MY)(o),g),n&&(b.inserted[t.name]=!0)};var b={key:t,sheet:new n({key:t,container:o,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend}),nonce:e.nonce,inserted:p,registered:{},insert:a};return b.sheet.hydrate(y),b}},3733:(e,t,r)=>{r.d(t,{iv:()=>o,F4:()=>a}),r(2396),r(9423),r(9605);var n=r(4714);function o(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.O)(t)}var a=function(){var e=o.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}},7556:(e,t,r)=>{r.d(t,{tZ:()=>y,BX:()=>m});var n=r(2396),o=r(9423),a=r(4714),i=Object.prototype.hasOwnProperty,s=(0,n.createContext)("undefined"!=typeof HTMLElement?(0,o.Z)({key:"css"}):null);s.Provider;var c=function(e){return(0,n.forwardRef)((function(t,r){var o=(0,n.useContext)(s);return e(t,o,r)}))},l=(0,n.createContext)({}),f="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",u=function(e,t){var r={};for(var n in t)i.call(t,n)&&(r[n]=t[n]);return r[f]=e,r},d=c((function(e,t,r){var o=e.css;"string"==typeof o&&void 0!==t.registered[o]&&(o=t.registered[o]);var s=e[f],c=[o],u="";"string"==typeof e.className?u=function(e,t,r){var n="";return r.split(" ").forEach((function(r){void 0!==e[r]?t.push(e[r]+";"):n+=r+" "})),n}(t.registered,c,e.className):null!=e.className&&(u=e.className+" ");var d=(0,a.O)(c,void 0,(0,n.useContext)(l));!function(e,t,r){var n=e.key+"-"+t.name;if(!1===r&&void 0===e.registered[n]&&(e.registered[n]=t.styles),void 0===e.inserted[t.name]){var o=t;do{e.insert(t===o?"."+n:"",o,e.sheet,!0),o=o.next}while(void 0!==o)}}(t,d,"string"==typeof s),u+=t.key+"-"+d.name;var p={};for(var y in e)i.call(e,y)&&"css"!==y&&y!==f&&(p[y]=e[y]);return p.ref=r,p.className=u,(0,n.createElement)(s,p)}));r(9605);var p=r(8109);function y(e,t,r){return i.call(t,"css")?(0,p.jsx)(d,u(e,t),r):(0,p.jsx)(e,t,r)}function m(e,t,r){return i.call(t,"css")?(0,p.jsxs)(d,u(e,t),r):(0,p.jsxs)(e,t,r)}p.Fragment},9605:(e,t,r)=>{var n=r(7067),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function c(e){return n.isMemo(e)?i:s[e.$$typeof]||o}s[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[n.Memo]=i;var l=Object.defineProperty,f=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,y=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(y){var o=p(r);o&&o!==y&&e(t,o,n)}var i=f(r);u&&(i=i.concat(u(r)));for(var s=c(t),m=c(r),h=0;h<i.length;++h){var v=i[h];if(!(a[v]||n&&n[v]||m&&m[v]||s&&s[v])){var g=d(r,v);try{l(t,v,g)}catch(e){}}}}return t}},896:(e,t)=>{var r="function"==typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,i=r?Symbol.for("react.strict_mode"):60108,s=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.async_mode"):60111,u=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,p=r?Symbol.for("react.suspense"):60113,y=r?Symbol.for("react.suspense_list"):60120,m=r?Symbol.for("react.memo"):60115,h=r?Symbol.for("react.lazy"):60116,v=r?Symbol.for("react.block"):60121,g=r?Symbol.for("react.fundamental"):60117,b=r?Symbol.for("react.responder"):60118,S=r?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case f:case u:case a:case s:case i:case p:return e;default:switch(e=e&&e.$$typeof){case l:case d:case h:case m:case c:return e;default:return t}}case o:return t}}}function C(e){return x(e)===u}t.AsyncMode=f,t.ConcurrentMode=u,t.ContextConsumer=l,t.ContextProvider=c,t.Element=n,t.ForwardRef=d,t.Fragment=a,t.Lazy=h,t.Memo=m,t.Portal=o,t.Profiler=s,t.StrictMode=i,t.Suspense=p,t.isAsyncMode=function(e){return C(e)||x(e)===f},t.isConcurrentMode=C,t.isContextConsumer=function(e){return x(e)===l},t.isContextProvider=function(e){return x(e)===c},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return x(e)===d},t.isFragment=function(e){return x(e)===a},t.isLazy=function(e){return x(e)===h},t.isMemo=function(e){return x(e)===m},t.isPortal=function(e){return x(e)===o},t.isProfiler=function(e){return x(e)===s},t.isStrictMode=function(e){return x(e)===i},t.isSuspense=function(e){return x(e)===p},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===u||e===s||e===i||e===p||e===y||"object"==typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===m||e.$$typeof===c||e.$$typeof===l||e.$$typeof===d||e.$$typeof===g||e.$$typeof===b||e.$$typeof===S||e.$$typeof===v)},t.typeOf=x},7067:(e,t,r)=>{e.exports=r(896)},4714:(e,t,r)=>{r.d(t,{O:()=>y});const n=function(e){for(var t,r=0,n=0,o=e.length;o>=4;++n,o-=4)t=1540483477*(65535&(t=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))+(59797*(t>>>16)<<16),r=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&r)+(59797*(r>>>16)<<16);switch(o){case 3:r^=(255&e.charCodeAt(n+2))<<16;case 2:r^=(255&e.charCodeAt(n+1))<<8;case 1:r=1540483477*(65535&(r^=255&e.charCodeAt(n)))+(59797*(r>>>16)<<16)}return(((r=1540483477*(65535&(r^=r>>>13))+(59797*(r>>>16)<<16))^r>>>15)>>>0).toString(36)},o={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var a=/[A-Z]|^ms/g,i=/_EMO_([^_]+?)_([^]*?)_EMO_/g,s=function(e){return 45===e.charCodeAt(1)},c=function(e){return null!=e&&"boolean"!=typeof e},l=function(e){var t=Object.create(null);return function(e){return void 0===t[e]&&(t[e]=s(r=e)?r:r.replace(a,"-$&").toLowerCase()),t[e];var r}}(),f=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(i,(function(e,t,r){return d={name:t,styles:r,next:d},t}))}return 1===o[e]||s(e)||"number"!=typeof t||0===t?t:t+"px"};function u(e,t,r){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return d={name:r.name,styles:r.styles,next:d},r.name;if(void 0!==r.styles){var n=r.next;if(void 0!==n)for(;void 0!==n;)d={name:n.name,styles:n.styles,next:d},n=n.next;return r.styles+";"}return function(e,t,r){var n="";if(Array.isArray(r))for(var o=0;o<r.length;o++)n+=u(e,t,r[o])+";";else for(var a in r){var i=r[a];if("object"!=typeof i)null!=t&&void 0!==t[i]?n+=a+"{"+t[i]+"}":c(i)&&(n+=l(a)+":"+f(a,i)+";");else if(!Array.isArray(i)||"string"!=typeof i[0]||null!=t&&void 0!==t[i[0]]){var s=u(e,t,i);switch(a){case"animation":case"animationName":n+=l(a)+":"+s+";";break;default:n+=a+"{"+s+"}"}}else for(var d=0;d<i.length;d++)c(i[d])&&(n+=l(a)+":"+f(a,i[d])+";")}return n}(e,t,r);case"function":if(void 0!==e){var o=d,a=r(e);return d=o,u(e,t,a)}}if(null==t)return r;var i=t[r];return void 0!==i?i:r}var d,p=/label:\s*([^\s;\n{]+)\s*(;|$)/g,y=function(e,t,r){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var o=!0,a="";d=void 0;var i=e[0];null==i||void 0===i.raw?(o=!1,a+=u(r,t,i)):a+=i[0];for(var s=1;s<e.length;s++)a+=u(r,t,e[s]),o&&(a+=i[s]);p.lastIndex=0;for(var c,l="";null!==(c=p.exec(a));)l+="-"+c[1];return{name:n(a)+l,styles:a,next:d}}}}]);