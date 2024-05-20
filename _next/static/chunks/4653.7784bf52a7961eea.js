"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4653],{94653:function(e,t,n){n.d(t,{h:function(){return I}});var r=n(27812),i=n(59499),o=n(16835),a=n(67294),c=function(){var e=(0,a.useState)(!1),t=e[0],n=e[1];return(0,a.useEffect)(function(){var e;n("ontouchstart"in window||navigator.maxTouchPoints>0||(null===(e=navigator)||void 0===e?void 0:e.msMaxTouchPoints)>0)},[]),{hasTouch:t}},l=n(85260),u=n(42162),s=n(88123),d=n(20324),f=n(18990),p=n(84225),m=n(77549),h=n(94184),v=n.n(h),g=n(90838),w=n(87751),b=n(73710),x=n.n(b),y=n(42708),C=n(53918),_=n(24697),j=function(e){var t=(0,a.useState)(0),n=t[0],r=t[1],i=(0,_.y1)(function(){if(e){var t,n=e.scrollHeight-e.clientHeight;r(e.scrollTop/n*100)}},0),o=(0,a.useCallback)(i,[e]);return(0,a.useEffect)(function(){return e&&e.addEventListener("scroll",o),function(){e&&e.removeEventListener("scroll",o)}},[e]),n},k=n(41664),N=n.n(k),E=n(85893),O=a.memo(function(e){var t=e.pathname,n=e.lobby,r=e.onClick,i=n.web_name,o=n.sub_provider,a=n.logo,c=n.name;return n.provider,(0,E.jsx)(N(),{href:{pathname:t,query:{provider:o,gameName:i}},children:(0,E.jsx)(w.E.a,{layout:!0,animate:{opacity:1},initial:{opacity:0},exit:{opacity:0},children:(0,E.jsxs)("div",{onClick:r,children:[(0,E.jsx)("div",{className:"image",children:(0,E.jsx)("img",{src:"".concat("https://www.apuestatotal.com","/").concat(a),alt:c,loading:"lazy"})}),(0,E.jsxs)("div",{className:"desc",children:[(0,E.jsx)("div",{className:"name",children:c}),(0,E.jsx)("div",{className:"provider",children:o})]})]})})})}),R=function(e){var t=e.providers,n=e.pathname,r=e.onClose,i=t.all,o=t.filtered;return(0,E.jsx)(q,{layout:!0,children:(0,E.jsx)(g.M,{children:null==i?void 0:i.map(function(e){var t,i=e.provider,a=o.find(function(e){return e.provider.includes(i)});return(0,E.jsx)(N(),{href:{pathname:n,query:{id:i}},children:(0,E.jsx)(w.E.a,{layout:!0,animate:{opacity:1},initial:{opacity:0},exit:{opacity:0},onClick:r,className:o.length&&v()({isCoincidence:a,notCoincidence:!a}),children:e.name})},i)})})})},q=(0,C.default)(w.E.div).withConfig({displayName:"ProvidersLink__OnlyTextResultCss",componentId:"sc-1368h1x-0"})(["width:100%;gap:7px;display:grid;grid-auto-rows:min-content;gap:12px;grid-template-columns:repeat(auto-fill,minmax(min(100%,calc(100px + 5vw)),1fr));> a{font-weight:500;padding:5px;white-space:nowrap;width:100%;color:",";overflow:hidden;text-overflow:ellipsis;display:flex;height:auto;&:hover{transition:200ms;color:",";}&.notCoincidence{pointer-events:none;opacity:0.4 !important;}&.isCoincidence{opacity:1;color:",";font-size:1.2rem;}}"],function(e){return e.theme.contrastText},function(e){return e.theme.primary},function(e){return e.theme.primary}),M=function(e){var t=e.tags,n=e.pathname,r=e.onClose,i=t.all,o=t.filtered;return(0,E.jsx)(S,{children:null==i?void 0:i.map(function(e){var t,i=e.toLowerCase().replace(/[^\w\s]/g," ").replace(/\s+|_/g," "),a=o.find(function(t){return t.includes(e)});return(0,E.jsx)(N(),{href:{pathname:n,query:{id:e}},children:(0,E.jsx)(w.E.a,{layout:!0,animate:{opacity:1},initial:{opacity:0},exit:{opacity:0},onClick:r,className:o.length&&v()({isCoincidence:a,notCoincidence:!a}),children:i})},e)})})},S=(0,C.default)(w.E.div).withConfig({displayName:"TagsLink__OnlyTextResultCss",componentId:"sc-7vsv8b-0"})(["width:100%;gap:7px;display:grid;grid-auto-rows:min-content;gap:12px;grid-template-columns:repeat(auto-fill,minmax(min(100%,calc(100px + 5vw)),1fr));> a{font-weight:500;padding:5px;white-space:nowrap;width:100%;color:",";overflow:hidden;text-overflow:ellipsis;display:flex;height:auto;&:hover{transition:200ms;color:",";}&.notCoincidence{pointer-events:none;opacity:0.4 !important;}&.isCoincidence{opacity:1;color:",";font-size:1.2rem;}}"],function(e){return e.theme.contrastText},function(e){return e.theme.primary},function(e){return e.theme.primary});function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach(function(t){(0,i.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var I=function(e){var t,n,i=e.onClose,p=e.gamingOptions,m=p.lobby,h=p.pathnameGame,w=p.pathnameProvider,b=p.pathnameTag,x=(0,a.useState)("lobbies"),C=x[0],k=x[1],N=(0,u.Z)().session,q=(0,a.useState)(null),S=q[0],T=q[1],I=j(S),Z=(0,y.YD)(),H=Z.ref;Z.inView;var B=c().hasTouch,W=(0,a.useState)(""),$=W[0],Y=W[1],G=(0,_.Nr)($,800),X=(0,o.Z)(G,1)[0],K={init:0,end:60,lobby:m,namegame:""},Q=(0,a.useState)(K),U=Q[0],ee=Q[1],et=(0,d.Zc)({props:U,session:N}),en=et.data;et.isLoading,et.isFetching;var er=(0,a.useState)([]),ei=er[0],eo=er[1],ea=(0,a.useState)([]),ec=ea[0],el=ea[1],eu=(0,a.useState)([]),es=eu[0],ed=eu[1],ef=(0,a.useRef)(!1),ep=(0,a.useRef)(0);(0,a.useEffect)(function(){var e;null!=en&&null!==(e=en.lobby)&&void 0!==e&&e.length&&(ep.current+=1,1===ep.current&&(eo(null==en?void 0:en.providers),el(null==en?void 0:en.tags)))},[en]),(0,a.useEffect)(function(){I>70&&!ef.current&&(ee(L(L({},U),{},{init:U.end+1,end:U.end+U.end})),ef.current=!0)},[I]),(0,a.useEffect)(function(){if(X.length>=3||0===X.length){ed([]),ee(L(L({},K),{},{namegame:X}));return}},[X]),(0,a.useEffect)(function(){var e;null!=en&&null!==(e=en.lobby)&&void 0!==e&&e.length&&(ed([].concat((0,r.Z)(es),(0,r.Z)(en.lobby))),(0,l.R)("1s").then(function(){ef.current=!1}))},[en]);var em=function(e){return null==e?void 0:e.replace(/\s/g,"").toLocaleLowerCase()},eh=(0,a.useMemo)(function(){if(!X)return{all:ei,filtered:[]};var e=0,t=null==ei?void 0:ei.filter(function(t){var n=em(t.name).replace(/\s/g,""),r=em(X).replace(/\s/g,"");return e++,n.includes(r)}),n=null==ei?void 0:ei.filter(function(e){var t=em(e.name).replace(/\s/g,""),n=em(X).replace(/\s/g,"");return!t.includes(n)});return{all:[].concat((0,r.Z)(t),(0,r.Z)(n)),filtered:t}},[X,ei]),ev=(0,a.useMemo)(function(){if(!X)return{all:ec,filtered:[]};var e=0,t=null==ec?void 0:ec.filter(function(t){var n=em(t).replace(/\s/g,""),r=em(X).replace(/\s/g,"");return e++,n.includes(r)}),n=null==ec?void 0:ec.filter(function(e){var t=em(e).replace(/\s/g,""),n=em(X).replace(/\s/g,"");return!t.includes(n)});return{all:[].concat((0,r.Z)(t),(0,r.Z)(n)),filtered:t}},[X,ec]),eg=(null==X?void 0:X.length)>=3?null==es?void 0:es.length:null,ew=null==eh?void 0:null===(t=eh.filtered)||void 0===t?void 0:t.length,eb=null==ev?void 0:null===(n=ev.filtered)||void 0===n?void 0:n.length,ex=(0,a.useRef)(null);(0,a.useEffect)(function(){ex.current},[]);var ey=function(e){if(e.preventDefault(),B){var t=document.activeElement;t instanceof HTMLElement&&t.blur()}};return(0,E.jsxs)(F,{children:[(0,E.jsxs)(J,{children:[(0,E.jsxs)(z,{children:[(0,E.jsx)("div",{className:"title__icon",children:(0,E.jsx)("img",{src:s.Z.src,alt:""})}),(0,E.jsx)("form",{onSubmit:ey,children:(0,E.jsx)("div",{className:"title__input",children:(0,E.jsx)("input",{value:$,onChange:function(e){return Y(e.target.value)},type:"text",autoComplete:"none",placeholder:"Escribe el nombre del juego o proveedor",ref:ex})})}),(0,E.jsx)("div",{className:"title__close",onClick:i,children:(0,E.jsx)("button",{children:"cerrar"})})]}),(0,E.jsxs)(V,{children:[(0,E.jsx)("button",{onClick:function(){return k("lobbies")},className:v()({active:"lobbies"===C}),children:eg?"Juegos ".concat(eg):"Juegos"}),(0,E.jsx)("button",{onClick:function(){return k("providers")},className:v()({active:"providers"===C}),children:ew?"Proveedores ".concat(ew):"Proveedores"}),(0,E.jsx)("button",{onClick:function(){return k("tags")},className:v()({active:"tags"===C}),children:eb?"Categorias ".concat(eb):"Categorias"})]})]}),(0,E.jsxs)(A,{children:[(0,E.jsx)(D,{ref:function(e){return T(e)},className:v()({show:"lobbies"===C}),children:"lobbies"===C&&(0,E.jsxs)(P,{layout:!0,children:[(0,E.jsx)(g.M,{children:null==es?void 0:es.map(function(e){return(0,E.jsx)(O,{lobby:e,pathname:h,onClick:function(){(0,f.JV)(null==e?void 0:e.web_name,"casino")}},null==e?void 0:e.machine)})}),(0,E.jsx)("div",{ref:H})]})}),(0,E.jsx)(D,{className:v()({show:"providers"===C}),children:"providers"===C&&(0,E.jsx)(R,{onClose:i,pathname:w,providers:eh})}),(0,E.jsx)(D,{className:v()({show:"tags"===C}),children:"tags"===C&&(0,E.jsx)(M,{onClose:i,pathname:b,tags:ev})})]})]})},P=(0,C.default)(w.E.div).withConfig({displayName:"ModalContent__LobbiesResultCss",componentId:"sc-qefo3q-0"})(["width:100%;gap:7px;font-size:0.9rem;display:grid;grid-auto-rows:min-content;gap:12px;grid-template-columns:repeat(auto-fill,minmax(min(100%,calc(400px + 3vw)),1fr));> a{height:auto;display:flex;> div{width:100%;display:flex;gap:10px;> div.image{display:flex;flex:1 1 45%;align-items:flex-start;> img{object-fit :cover;overflow:hidden;border-radius:5px;aspect-ratio:44/31;height:auto;--shadow-color:358deg 86% 22%;--shadow-color:0deg 5% 0%;","}}> div.desc{display:flex;flex:1 1 55%;flex-direction:column;gap:.3rem;justify-content:center;.name{font-size:1.2rem;font-weight:500;}.provider{opacity:0.4;font-weight:600;font-size:1rem;text-transform:uppercase;}}}}"],(0,m.q)({shadowColorHSL:"0deg 5% 0%"}).medium),Z=(0,C.css)(["overflow:auto;",""],function(){if(!("ontouchstart"in window))return(0,C.css)(["scrollbar-gutter:stable;::-webkit-scrollbar{width:12px;}::-webkit-scrollbar-track{background-color:#e4e4e4;border-radius:100px;}::-webkit-scrollbar-thumb{box-shadow:inset 0 0 6px rgba(0,0,0,0.3);background-color:",";border-radius:100px;border:2px solid #e4e4e4;}::-webkit-scrollbar{width:12px;}::-webkit-scrollbar-track{border-radius:100vh;background:#1f2937;background-color:#e4e4e4;background:transparent;}::-webkit-scrollbar-thumb{background:linear-gradient(#ff0000,#dc00c9,#ffc700);}"],function(e){return x()(e.theme.contrastText,.1)})}),D=(0,C.default)(w.E.div).withConfig({displayName:"ModalContent__TabContentCss",componentId:"sc-qefo3q-1"})(["transition:300ms;flex:0 0 0%;opacity:0;display:flex;scrollbar-width:thin;"," &&.show{flex:1 1 0%;opacity:1;}"],Z),V=C.default.div.withConfig({displayName:"ModalContent__TabsCss",componentId:"sc-qefo3q-2"})(["width:100%;display:grid;grid-template-columns:auto auto auto;justify-content:flex-start;> button{padding:1rem .5rem;padding-bottom:5px;background:none;white-space:nowrap;transition:200ms;border-bottom:2px solid transparent;&.active{color:",";border-bottom:2px solid ",";}}"],function(e){return e.theme.primary},function(e){return e.theme.primary}),z=C.default.div.withConfig({displayName:"ModalContent__InputCss",componentId:"sc-qefo3q-3"})(["display:flex;flex:1;gap:.5rem;align-items:center;width:100%;display:grid;grid-template-columns:1.4rem 1fr max-content;.title__icon{width:1.2rem;height:1.2rem;> img{width:auto;height:auto;}}.title__input{flex:1;display:flex;border-bottom:2px solid black;padding:5px;> input{flex:1;background:transparent;border:0;outline:0;}}.title__close{> button{background:none;border:none;}}"]),A=(0,C.default)("div").withConfig({displayName:"ModalContent__ModalBodyCss",componentId:"sc-qefo3q-4"})(["overflow:auto;flex:1;display:flex;flex-direction:column;height:100%;max-height:100%;"]),F=C.default.div.withConfig({displayName:"ModalContent__ModalContentCss",componentId:"sc-qefo3q-5"})(["background:white;box-shadow:0 5px 15px rgba(0,0,0,0.5);border-radius:10px;color:black;overflow:hidden;padding:1.5rem 1rem;display:flex;flex-direction:column;max-width:80rem;width:95vw;width:95dvw;height:97vh;height:97dvh;gap:.5rem;","{width:95vw;height:90vh;width:95dvw;height:90dvh;}"],p.q.min_width.desktopXS),J=C.default.div.withConfig({displayName:"ModalContent__ModalTitleCss",componentId:"sc-qefo3q-6"})(["display:flex;align-items:center;position:sticky;top:0;background:white;flex-direction:column;"])},18990:function(e,t,n){n.d(t,{$O:function(){return u},F7:function(){return l},JV:function(){return s},Tt:function(){return i},kw:function(){return c},mI:function(){return o},vJ:function(){return a}});var r=n(3841),i=function(e,t){r.f.push({event:"atm.event",title:null==e?void 0:e.toLowerCase().replace(/'/g,"").replace(/-/g," "),eventName:"banner_click",section:t,action:"click"})},o=function(e,t){r.f.push({event:"atm.event",title:(null==e?void 0:e.toLowerCase().replace(/'/g,"").replace(/-/g," "))||"sin titulo",eventName:"banner_view",section:t,action:"view"})},a=function(e,t,n){r.f.push({event:"atm.ecommerce",eventName:"view_promotion",ecommerce:{item_name:(null==e?void 0:e.toLowerCase().replace(/-/g," "))||"sin titulo",item_list_name:t,item_category:"juego",index:"".concat(n)}})},c=function(e,t,n){r.f.push({event:"atm.ecommerce",eventName:"select_promotion",ecommerce:{item_name:null==e?void 0:e.toLowerCase().replace(/-/g," "),item_list_name:t,item_category:"juego",index:"".concat(n)}})},l=function(e,t){r.f.push({event:"atm.event",option:null==e?void 0:e.toLowerCase(),eventName:"quick_link",section:t,action:"click"})},u=function(e,t,n){r.f.push({event:"atm.event",game_name:e.toLowerCase().replace(/[-_]/g," ").replace(/[^\w\d ]+/g,""),eventName:"".concat(t,"_game").toLowerCase().replace(/ /g,"_"),option:n,action:"click"})},s=function(e,t){r.f.push({event:"atm.event",eventName:"".concat(t,"_search").replace(/ /g,"_"),game_name:e.toLowerCase().replace(/[-_]/g," ").replace(/[^\w\d ]+/g,""),option:"jugar",action:"search"})}},24697:function(e,t,n){n.d(t,{Nr:function(){return c},y1:function(){return i}});var r=n(67294);function i(e,t,n){var i=this,o=(0,r.useRef)(null),a=(0,r.useRef)(0),c=(0,r.useRef)(null),l=(0,r.useRef)([]),u=(0,r.useRef)(),s=(0,r.useRef)(),d=(0,r.useRef)(e),f=(0,r.useRef)(!0);(0,r.useEffect)(function(){d.current=e},[e]);var p=!t&&0!==t&&"undefined"!=typeof window;if("function"!=typeof e)throw TypeError("Expected a function");t=+t||0;var m=!!(n=n||{}).leading,h=!("trailing"in n)||!!n.trailing,v="maxWait"in n,g=v?Math.max(+n.maxWait||0,t):null;return(0,r.useEffect)(function(){return f.current=!0,function(){f.current=!1}},[]),(0,r.useMemo)(function(){var e=function(e){var t=l.current,n=u.current;return l.current=u.current=null,a.current=e,s.current=d.current.apply(n,t)},n=function(e,t){p&&cancelAnimationFrame(c.current),c.current=p?requestAnimationFrame(e):setTimeout(e,t)},r=function(e){if(!f.current)return!1;var n=e-o.current;return!o.current||n>=t||n<0||v&&e-a.current>=g},w=function(t){return c.current=null,h&&l.current?e(t):(l.current=u.current=null,s.current)},b=function e(){var i=Date.now();if(r(i))return w(i);if(f.current){var c=t-(i-o.current);n(e,v?Math.min(c,g-(i-a.current)):c)}},x=function(){var d=Date.now(),p=r(d);if(l.current=[].slice.call(arguments),u.current=i,o.current=d,p){if(!c.current&&f.current)return a.current=o.current,n(b,t),m?e(o.current):s.current;if(v)return n(b,t),e(o.current)}return c.current||n(b,t),s.current};return x.cancel=function(){c.current&&(p?cancelAnimationFrame(c.current):clearTimeout(c.current)),a.current=0,l.current=o.current=u.current=c.current=null},x.isPending=function(){return!!c.current},x.flush=function(){return c.current?w(Date.now()):s.current},x},[m,v,t,g,h,p])}function o(e,t){return e===t}function a(e){return"function"==typeof e?function(){return e}:e}function c(e,t,n){var c,l,u=n&&n.equalityFn||o,s=(l=(c=(0,r.useState)(a(e)))[1],[c[0],(0,r.useCallback)(function(e){return l(a(e))},[])]),d=s[0],f=s[1],p=i((0,r.useCallback)(function(e){return f(e)},[f]),t,n),m=(0,r.useRef)(e);return u(m.current,e)||(p(e),m.current=e),[d,p]}},42708:function(e,t,n){n.d(t,{YD:function(){return l}});var r=n(67294),i=new Map,o=new WeakMap,a=0,c=void 0;function l({threshold:e,delay:t,trackVisibility:n,rootMargin:l,root:u,triggerOnce:s,skip:d,initialInView:f,fallbackInView:p,onChange:m}={}){let[h,v]=r.useState(null),g=r.useRef(),[w,b]=r.useState({inView:!!f,entry:void 0});g.current=m,r.useEffect(()=>{if(d||!h)return;let r;return r=function e(t,n,r={},l=c){if(void 0===window.IntersectionObserver&&void 0!==l){let u=t.getBoundingClientRect();return n(l,{isIntersecting:l,target:t,intersectionRatio:"number"==typeof r.threshold?r.threshold:0,time:0,boundingClientRect:u,intersectionRect:u,rootBounds:u}),()=>{}}let{id:s,observer:d,elements:f}=function(e){var t;let n=Object.keys(e).sort().filter(t=>void 0!==e[t]).map(t=>{var n;return`${t}_${"root"===t?(n=e.root)?(o.has(n)||(a+=1,o.set(n,a.toString())),o.get(n)):"0":e[t]}`}).toString(),r=i.get(n);if(!r){let c=new Map,l,u=new IntersectionObserver(t=>{t.forEach(t=>{let n=t.isIntersecting&&l.some(e=>t.intersectionRatio>=e);e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=n),c.get(t.target)?.forEach(e=>{e(n,t)})})},e);l=u.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:n,observer:u,elements:c},i.set(n,r)}return r}(r),p=f.get(t)||[];return f.has(t)||f.set(t,p),p.push(n),d.observe(t),function(){p.splice(p.indexOf(n),1),0===p.length&&(f.delete(t),d.unobserve(t)),0===f.size&&(d.disconnect(),i.delete(s))}}(h,(e,t)=>{b({inView:e,entry:t}),g.current&&g.current(e,t),t.isIntersecting&&s&&r&&(r(),r=void 0)},{root:u,rootMargin:l,threshold:e,trackVisibility:n,delay:t},p),()=>{r&&r()}},[Array.isArray(e)?e.toString():e,h,u,l,s,d,n,p,t]);let x=w.entry?.target,y=r.useRef();h||!x||s||d||y.current===x||(y.current=x,b({inView:!!f,entry:void 0}));let C=[v,w.inView,w.entry];return C.ref=C[0],C.inView=C[1],C.entry=C[2],C}r.Component}}]);