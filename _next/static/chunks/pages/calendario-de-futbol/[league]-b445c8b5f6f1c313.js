(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3540],{48590:function(e,n,t){"use strict";t.d(n,{v:function(){return m}});var r=t(73710),a=t.n(r),i=t(41664),s=t.n(i),o=t(11163);t(67294);var l=t(63750),u=t(53918),c=t(85893),d=function(e){return e.replace(/-/g," ").replace(/^\w/,function(e){return e.toUpperCase()})},f=function(e){var n=e.label,t=e.href,r=e.isLast;return(0,c.jsxs)(p,{children:[r?(0,c.jsx)(x,{children:d(n)}):(0,c.jsx)(s(),{href:t,passHref:!0,children:(0,c.jsx)(h,{children:d(n)})}),!r&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(w,{}),(0,c.jsx)(l.fmn,{fontSize:"small"}),(0,c.jsx)(w,{})]})]})},m=function(){var e=(0,o.useRouter)(),n=e.asPath.split("?")[0].split("/");n.shift(),(n=n.filter(function(e){return""!==e})).splice(3,1);var t=e.asPath.split("/").filter(Boolean),r=n.map(function(e,r){var a="/".concat(t.slice(0,r+1).join("/"));return(0,c.jsx)(f,{label:e,href:a,isLast:r===n.length-1},a)});return(0,c.jsx)(g,{children:r})},p=u.default.div.withConfig({displayName:"BreadcrumbNews__BreadcrumbItemContainer",componentId:"sc-b8iogq-0"})(["display:flex;align-items:center;"]),h=u.default.a.withConfig({displayName:"BreadcrumbNews__StyledLink",componentId:"sc-b8iogq-1"})(["color:",";font-size:1rem;font-size:clamp(10px,1.8vw,16px);font-weight:500;text-transform:uppercase;&:hover{color:",";}"],function(e){var n=e.theme;return a()(n.contrastText,.7)},function(e){return e.theme.primary}),x=u.default.span.withConfig({displayName:"BreadcrumbNews__CurrentBreadcrumb",componentId:"sc-b8iogq-2"})(["color:",";font-weight:600;font-size:clamp(10px,1.8vw,16px);text-transform:uppercase;"],function(e){return e.theme.primary}),g=u.default.nav.withConfig({displayName:"BreadcrumbNews__BreadcrumbsContainer",componentId:"sc-b8iogq-3"})(["padding-top:1.5rem;display:flex;flex-wrap:wrap;align-items:center;font-size:0.875rem;"]),w=u.default.span.withConfig({displayName:"BreadcrumbNews__Spacer",componentId:"sc-b8iogq-4"})(["margin-right:0.5rem;"])},90053:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return h}});var r=t(10253),a=t(48590),i=t(11163),s=t(67294),o=t(53918),l=t(38351),u=t(85893),c=function(){var e=(0,i.useRouter)().query.league,n=(0,s.useMemo)(function(){return l.s.find(function(n){return n.url===e})},[e]),t=(0,s.useMemo)(function(){return null!=n&&n.canal?"https://at-web-widgets.s3.amazonaws.com/html/v3/index.html?channel=deportes.futbol.".concat(n.canal,"&lang=es_LA"):""},[n]);return(0,u.jsx)(d,{children:t&&(0,u.jsx)(f,{src:t})})},d=o.default.div.withConfig({displayName:"Calendar__CalendarCss",componentId:"sc-1uqylj0-0"})(["padding:1rem 0 0;max-width:1200px;margin:auto;display:flex;flex-direction:column;gap:1rem;"]),f=o.default.iframe.withConfig({displayName:"Calendar__IframeCss",componentId:"sc-1uqylj0-1"})(["width:100%;height:100vh;border:none;"]),m=t(50023),p=t(19701),h=function(){var e=(0,i.useRouter)().query.league,n=l.s.find(function(n){return n.url===e});return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(r.h,{title:"".concat(null==n?void 0:n.title," | Calendario de F\xfatbol | Informaci\xf3n apuestas deportivas"),description:"Encuentra el calendario de futbol de la ".concat(null==n?void 0:n.title," y m\xe1s en Apuesta Total")}),(0,u.jsx)(m.v,{}),(0,u.jsx)(p.vx,{children:(0,u.jsx)(a.v,{})}),(0,u.jsx)(c,{})]})}},69406:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/calendario-de-futbol/[league]",function(){return t(90053)}])}},function(e){e.O(0,[3662,4801,9774,2888,179],function(){return e(e.s=69406)}),_N_E=e.O()}]);