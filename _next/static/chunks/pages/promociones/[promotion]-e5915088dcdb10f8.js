(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8989],{10384:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(59499),o=n(16835),i=n(67294),c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0px",n=(0,i.useState)(!1),r=n[0],c=n[1];return(0,i.useEffect)(function(){var n=new IntersectionObserver(function(e){(0,o.Z)(e,1)[0].isIntersecting&&(c(!0),n.disconnect())},{rootMargin:t});return e.current&&n.observe(e.current),function(){e.current&&n.unobserve(e.current)}},[r]),r},a=n(85893);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var l,m,f,p=function(e){var t=e.from,n=e.to,r=e.children,o=e.delay,s=void 0===o?0:o,l=(0,i.useRef)(null),m=c(l),f={transition:"850ms ease-in-out ".concat(s>500?500:s,"ms")};return(0,a.jsx)("div",{ref:l,style:m?u(u({},f),n):u(u({},f),t),children:r})},d={FadeIn:function(e){var t=e.children;return(0,a.jsx)(p,{from:{opacity:0},to:{opacity:1},children:t})},FadeUp:function(e){var t=e.children,n=e.delay;return(0,a.jsx)(p,{from:{opacity:0,translate:"0 2rem"},to:{opacity:1,translate:"none"},delay:n,children:t})},ScaleIn:function(e){var t=e.children;return(0,a.jsx)(p,{from:{scale:"0"},to:{scale:"1"},children:t})}}},9e4:function(e,t,n){"use strict";n.d(t,{r:function(){return i}});var r=n(42162),o=n(67294),i=function(e){var t=e.PageURL,n=e.PageTitle,i=e.PageCategory,c=(0,r.Z)().user,a=c?"".concat(c.user):null;(0,o.useEffect)(function(){var e;null!==(e=window.optimoveSDK)&&void 0!==e&&e.API&&(a?window.optimoveSDK.API.setPageVisit(t,n,i,a):window.optimoveSDK.API.setPageVisit(t,n,i))},[t,n,i,a])}},43447:function(e,t,n){"use strict";n.d(t,{A:function(){return w}});var r=n(10384),o=n(84225),i=n(67294),c=n(53918),a=n(3841),s=function(e){var t=[];if(e){var n=1;for(var r in e){var o,i=e[r];t.push({item_name:(null===(o=i.title)||void 0===o?void 0:o.toLowerCase())||"sin titulo",item_list_name:"promociones",item_category:i.promotion.replace(/-/g," "),index:"".concat(n++)})}a.f.push({event:"atm.ecommerce",eventName:"view_promotion",ecommerce:t})}},u=function(e,t,n){a.f.push({event:"atm.ecommerce",eventName:"select_promotion",ecommerce:{items:[{item_name:(null==e?void 0:e.toLowerCase())||"sin titulo",item_list_name:"promociones",item_category:t.replace(/-/g," "),index:"".concat(n+1)}]}})},l=n(66338),m=function(e){var t,n=e.lobby,r=(0,l.lf)({lobby:n}),o=r.data;return{data:o,isLoading:r.isLoading,isError:r.isError}},f=n(8621),p=n(23870),d=n(73710),h=n.n(d),v=n(41664),y=n.n(v),g=n(85893),b=function(e){var t=e.item,n=e.index,r=t.title,o=t.promotion,i=t.image,c=t.body;return(0,g.jsx)(y(),{href:{pathname:f.H["/promociones/[promotion]"].url,query:{promotion:o}},children:(0,g.jsxs)(j,{onClick:function(){u(r,o,n)},children:[(0,g.jsx)("div",{className:"wrapper-img",children:(0,g.jsx)("img",{src:"".concat("https://www.apuestatotal.com").concat(i),alt:"promocion ".concat(r)})}),(0,g.jsxs)("div",{className:"body",children:[(0,g.jsx)("h2",{children:r}),(0,g.jsx)(p.Z,{fragment:c})]})]})})},j=c.default.div.withConfig({displayName:"SinglePromotion__PromoLobby",componentId:"sc-1j0wpb6-0"})(["display:flex;flex-direction:column;align-items:center;gap:0.5rem;padding-bottom:1rem;cursor:pointer;filter:drop-shadow(0px 10px 12px ",");transition:transform 0.2s ease-in-out;> .wrapper-img{width:100%;> img{object-fit:contain;}}> .body{flex:1;> h2{color:",";font-weight:500;font-size:1rem;text-align:center;}> div{> p{color:",";font-size:clamp(.9rem,1vw,1rem);font-weight:400;text-align:center;}> a{color:",";}}}&:active{transform:scale(0.98);}"],function(e){return h()(e.theme.contrastText,.15)},function(e){return e.theme.contrastText},function(e){return h()(e.theme.contrastText,.7)},function(e){return e.theme.link}),w=function(){var e=m({lobby:"MAIN"}).data;(0,i.useEffect)(function(){(null==e?void 0:e.entities)&&s(e.entities)},[null==e?void 0:e.entities]);var t=(0,i.useMemo)(function(){return null==e?void 0:e.ids.map(function(t,n){var o=e.entities[t];return(0,g.jsx)(i.Fragment,{children:(0,g.jsx)(r.Z.FadeUp,{delay:100*n,children:(0,g.jsx)(b,{item:o,index:n})})},t)})},[e]);return(0,g.jsx)(O,{children:t})},O=c.default.div.withConfig({displayName:"ListPromotions__ListPromotionS",componentId:"sc-1hkokm7-0"})(["display:grid;grid-template-columns:repeat(auto-fit,minmax(290px,1fr));gap:1rem;padding-bottom:1rem;","{grid-template-columns:repeat(auto-fit,minmax(350px,1fr));}"],o.q.min_width.tabletL)},66338:function(e,t,n){"use strict";n.d(t,{OA:function(){return f},lf:function(){return m}});var r=n(59499),o=n(61876),i=n(7631);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var a=(0,o.HF)({selectId:function(e){return e.promotion}}),s=a.getInitialState({ids:[],entities:{}}),u=function(e){return new URLSearchParams(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({company:"ATP"},e))},l=i._g.injectEndpoints({endpoints:function(e){return{getPromotionLobbyv2:e.query({query:function(e){return{url:"contents/getPromotionsLobby",method:"POST",body:u({lobby:e.lobby})}},transformResponse:function(e){return a.setAll(s,e.lobby)},keepUnusedDataFor:60}),getPromotionDetailv2:e.query({query:function(e){return{url:"contents/getPromotionDetails",method:"POST",body:u({promotion:e.promotion})}},transformResponse:function(e){return e.details},keepUnusedDataFor:60})}}}),m=l.useGetPromotionLobbyv2Query,f=l.useGetPromotionDetailv2Query},44737:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var r=n(73710),o=n.n(r),i=n(41664),c=n.n(i),a=n(11163),s=n(60155),u=n(53918),l=n(8621),m=n(9e4),f=n(43447),p=n(59499),d=n(66338);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var v=function(e){var t=e.promotion;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach(function(t){(0,p.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},(0,d.OA)({promotion:t},{skip:!t}))},y=n(87979),g=n(23870),b=n(85893),j=function(){return(0,b.jsx)(c(),{href:l.H["/promociones"].url,passHref:!0,children:(0,b.jsxs)(x,{size:"small",variant:"contained",children:[(0,b.jsx)(s.$Ku,{})," Volver a promociones"]})})},w=function(){var e,t,n=(0,a.useRouter)(),r=null==n?void 0:null===(e=n.query)||void 0===e?void 0:e.promotion,o=v({promotion:r}).data;return(0,m.r)({PageURL:window.location.href,PageTitle:"Promocion - ".concat(null==o?void 0:null===(t=o.cms)||void 0===t?void 0:t.title),PageCategory:"Promociones"}),(0,b.jsxs)(O,{children:[o&&(0,b.jsx)(g.Z,{fragment:null==o?void 0:o.terms}),(0,b.jsxs)(P,{children:[(0,b.jsx)("h2",{children:"Promociones destacadas"}),(0,b.jsx)(f.A,{}),(0,b.jsx)(j,{})]})]})},O=u.default.div.withConfig({displayName:"promotion__PromotionCss",componentId:"sc-kyup8k-0"})(["background:",";margin:auto;width:100%;max-width:1000px;position:relative;padding:1rem 0;overflow:hidden;*{color:",";font-size:1rem;}h1,h2,h3{font-size:1.2rem;}a{color:",";cursor:pointer !important;}"],function(e){return e.theme.background},function(e){return o()(e.theme.contrastText,.6)},function(e){return e.theme.link}),P=u.default.div.withConfig({displayName:"promotion__PromocionesDestacadasS",componentId:"sc-kyup8k-1"})(["padding-top:1rem;display:flex;width:100%;flex-direction:column;gap:1rem;align-items:stretch;h2{font-size:1.2rem;font-weight:500;color:",";}"],function(e){return o()(e.theme.contrastText,.8)}),x=(0,u.default)(y.z).withConfig({displayName:"promotion__ButtonCss",componentId:"sc-kyup8k-2"})(["&&{box-shadow:none;border:none;text-transform:capitalize;background:",";color:",";transition:250ms;align-self:center;margin:1rem 0;&:hover{opacity:0.7;}> div{color:",";display:flex;align-items:center;gap:0.5rem;svg{stroke:",";}}}"],function(e){return o()(e.theme.primary,.1)},function(e){return e.theme.primary},function(e){return e.theme.primary},function(e){return e.theme.primary})},32777:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/promociones/[promotion]",function(){return n(44737)}])}},function(e){e.O(0,[260,9774,2888,179],function(){return e(e.s=32777)}),_N_E=e.O()}]);