(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6560],{36844:function(e,n,t){"use strict";t.d(n,{JK:function(){return o},fG:function(){return a},my:function(){return r}});var i=t(32912),s=t(24002),a=function(e){if(!e)return"";var n=new Date(e.replace(" ","T"));n.setHours(n.getHours()-5);var t=(0,i.Z)(n,"dd-MM-yyyy hh:mm aaaaa'm'").replace("12:00 am","00:00 pm");return"".concat(t)},o=function(e){if(!e)return"";var n=new Date(e.replace(" ","T"));n.setHours(n.getHours()-5);var t=(0,i.Z)(n,"dd-MM-yyyy");return"".concat(t)},r=function(e){if(!e||"string"!=typeof e)return"";var n=(0,s.Z)(e,"yyyy-MM-dd",new Date);if(isNaN(n.getTime()))return"";var t=(0,i.Z)(n,"dd-MM-yyyy");return"".concat(t)}},38353:function(e,n,t){"use strict";var i,s,a,o,r,l,c,d,u,m;t.d(n,{n$:function(){return i}}),(l=i||(i={})).NIUBIZ="NIUBIZ",l.NIUBIZ_YAPE="NIUBIZ_YAPE",l.PROMETEO="PROMETEO",l.ASTROPAY="ASTROPAY",l.KUSHKI_TRANSFER_IN="KUSHKI_TRANSFER_IN",l.KUSHKI="KUSHKI",l.CASH_DEPOSIT_CASH="CASH_DEPOSIT_CASH",l.CASH="CASH",l.NUVEI="NUVEI",l.KASHIO="KASHIO",l.MONNET="MONNET",l.PAGOEFECTIVO="PAGOEFECTIVO",l.PAGOEFECTIVOQR="PAGOEFECTIVOQR",l.ATPAYMENTTELESERVICIOS="ATPAYMENTTELESERVICIOS",l.SAFETYPAY="SAFETYPAY",l.BANK_PAYOUT="BANK_PAYOUT",l.NIUBIZ_PAYOUT="NIUBIZ_PAYOUT",l.ATPAYMENTSERVICE_PAYOUT="ATPAYMENTSERVICE_PAYOUT",(c=s||(s={})).Atp="ATP",(d=a||(a={})).Pen="PEN",(u=o||(o={})).Success="SUCCESS",(m=r||(r={})).Deposit="DEPOSIT"},72333:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return z}});var i=t(50029),s=t(87794),a=t.n(s),o=t(38353),r=t(67294),l=t(87979),c=t(38138),d=t(5434),u=t(53918),m=t(85893),h=function(e){var n=e.operation,t=e.onClickTryAgain,i=e.message;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(p,{$status:null==n?void 0:n.status,children:[["NEW","SUCCESS"].includes(null==n?void 0:n.status)?(0,m.jsx)(d.U5,{}):(0,m.jsx)(c.WCb,{}),(0,m.jsx)("p",{children:i})]}),!["NEW","SUCCESS"].includes(null==n?void 0:n.status)&&(0,m.jsxs)(l.z,{size:"small",className:"niubiz",onClick:t,variant:"outline",children:["<"," Vuelve a intentarlo aqu\xed"]})]})},p=u.default.div.withConfig({displayName:"DepositSuccessDefault__StyledMessage",componentId:"sc-6x3zeb-0"})(["display:flex;justify-content:center;align-items:center;flex-direction:column;gap:1rem;width:60%;max-width:140px;> p{line-height:1.5;font-size:1rem;text-align:center;}> svg{font-size:3rem;color:",";}",""],function(e){return e.theme.success2},function(e){return e.$status.includes("DENIED")?(0,u.css)(["> svg{font-size:3rem;color:",";}"],function(e){return e.theme.primary}):null}),f=t(36844),v=t(42162),x=t(94184),N=t.n(x),g=t(11163),E=function(e){var n,t,i=e.operation,s=e.onClickTryAgain,a=e.message,o=(0,v.Z)().user,r=(0,g.useRouter)();return(0,m.jsxs)(m.Fragment,{children:[["NEW","SUCCESS"].includes(null==i?void 0:i.status)?(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(j,{className:N()({SUCCESS:null==i?void 0:i.status}),children:[(0,m.jsxs)("h2",{children:[(0,m.jsx)(d.U5,{})," Transacci\xf3n autorizada"]}),(0,m.jsx)("div",{className:"top",children:"N\xfamero de pedido"}),(0,m.jsx)("div",{className:"bottom",children:null==i?void 0:i.idempotence}),(0,m.jsx)("div",{className:"top",children:"Nombre y apellido del tarjeta habiente"}),(0,m.jsxs)("div",{className:"bottom",children:[null==o?void 0:o.firstName," ",null==o?void 0:o.lastName]}),(0,m.jsx)("div",{className:"top",children:"Numero de tarjeta enmascarada"}),(0,m.jsx)("div",{className:"bottom",children:null!==(n=null==r?void 0:null===(t=r.query)||void 0===t?void 0:t.card)&&void 0!==n?n:""}),(0,m.jsx)("div",{className:"top",children:"Fecha y hora del pedido"}),(0,m.jsx)("div",{className:"bottom",children:(0,f.fG)(null==i?void 0:i.operation_date)}),(0,m.jsx)("div",{className:"top",children:"Importe de la transacci\xf3n"}),(0,m.jsx)("div",{className:"bottom",children:new Intl.NumberFormat("es-PE",{style:"currency",currency:"PEN",maximumFractionDigits:2}).format((null==i?void 0:i.amount)/100)}),(0,m.jsx)("div",{className:"top",children:"Tipo de moneda"}),(0,m.jsx)("div",{className:"bottom",children:null==i?void 0:i.currency}),(0,m.jsxs)("div",{className:"top",children:["Descripci\xf3n de el/los ","producto(s)"]}),(0,m.jsx)("div",{className:"bottom",children:"Pago Web"}),(0,m.jsx)("div",{className:"top"}),(0,m.jsx)("div",{className:"bottom guardar",children:"Guarde la informacion de este formulario"})]})}):(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(j,{className:N()({DENIED:null==i?void 0:i.status}),children:[(0,m.jsxs)("h2",{children:[(0,m.jsx)(c.WCb,{})," Transacci\xf3n denegada"]}),(0,m.jsx)("div",{className:"top",children:"N\xfamero de pedido"}),(0,m.jsx)("div",{className:"bottom",children:null==i?void 0:i.idempotence}),(0,m.jsx)("div",{className:"top",children:"Fecha y hora del pedido"}),(0,m.jsx)("div",{className:"bottom",children:(0,f.fG)(null==i?void 0:i.operation_date)}),(0,m.jsx)("div",{className:"top",children:"Descripci\xf3n de la denegaci\xf3n"}),(0,m.jsx)("div",{className:"bottom",children:null==i?void 0:i.extra}),(0,m.jsxs)(l.z,{size:"small",className:"niubiz",onClick:s,variant:"outline",children:["<"," Vuelve a intentarlo aqu\xed"]})]})}),(null==i?void 0:i.status)==="NEW"&&(0,m.jsx)("div",{className:"",children:a})]})},j=u.default.div.withConfig({displayName:"Niubiz__CardNiubizS",componentId:"sc-1j0t1ba-0"})(["&{display:grid;> h2{font-size:1.5rem;font-weight:500;padding-bottom:1rem;display:flex;align-items:center;gap:1ch;> svg{font-size:2rem;}}&.SUCCESS{h2 svg{color:",";}}&.DENIED{h2 svg{color:",";}}> .top{font-size:0.9rem;color:",";padding-bottom:2px;}> .bottom{font-size:1rem;color:black;padding-bottom:12px;&.link{cursor:pointer;color:",";text-decoration:underline;}&.guardar{margin-top:2rem;color:",";}}> .niubiz{margin-top:2rem;}}"],function(e){return e.theme.status.success},function(e){return e.theme.status.error},function(e){return e.theme.alternate11},function(e){return e.theme.info3},function(e){return e.theme.dark});u.default.div.withConfig({displayName:"Niubiz__StyledMessage",componentId:"sc-1j0t1ba-1"})(["display:flex;justify-content:center;align-items:center;flex-direction:column;gap:1rem;width:60%;max-width:140px;> p{line-height:1.5;font-size:1rem;text-align:center;}> svg{font-size:3rem;color:",";}",""],function(e){return e.theme.success2},function(e){return e.$status.includes("DENIED")?(0,u.css)(["> svg{font-size:3rem;color:",";}"],function(e){return e.theme.primary}):null});var y={src:"/_next/static/media/Logo Positive.846a2866.svg",height:121,width:120},S=function(e){var n=e.operation,t=e.onClickTryAgain,i=e.message,s=(0,v.Z)().user;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(C,{$status:null==n?void 0:n.status,children:(0,m.jsx)("img",{src:y.src,alt:"logo yape"})}),["NEW","SUCCESS"].includes(null==n?void 0:n.status)?(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(b,{className:N()({SUCCESS:null==n?void 0:n.status}),children:[(0,m.jsxs)("h2",{children:[(0,m.jsx)(d.U5,{})," Transacci\xf3n autorizada"]}),(0,m.jsx)("div",{className:"top",children:"N\xfamero de pedido"}),(0,m.jsx)("div",{className:"bottom",children:null==n?void 0:n.idempotence}),(0,m.jsx)("div",{className:"top",children:"Nombre y apellido del tarjeta habiente"}),(0,m.jsxs)("div",{className:"bottom",children:[null==s?void 0:s.firstName," ",null==s?void 0:s.lastName]}),(0,m.jsx)("div",{className:"top",children:"Fecha y hora del pedido"}),(0,m.jsx)("div",{className:"bottom",children:(0,f.fG)(null==n?void 0:n.operation_date)}),(0,m.jsx)("div",{className:"top",children:"Importe de la transacci\xf3n"}),(0,m.jsx)("div",{className:"bottom",children:new Intl.NumberFormat("es-PE",{style:"currency",currency:"PEN",maximumFractionDigits:2}).format((null==n?void 0:n.amount)/100)}),(0,m.jsx)("div",{className:"top",children:"Tipo de moneda"}),(0,m.jsx)("div",{className:"bottom",children:null==n?void 0:n.currency}),(0,m.jsxs)("div",{className:"top",children:["Descripci\xf3n de el/los ","producto(s)"]}),(0,m.jsx)("div",{className:"bottom",children:"Pago Web"}),(0,m.jsx)("div",{className:"top"}),(0,m.jsx)("div",{className:"bottom guardar",children:"Guarde la informacion de este formulario"})]})}):(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(b,{className:N()({DENIED:null==n?void 0:n.status}),children:[(0,m.jsxs)("h2",{children:[(0,m.jsx)(c.WCb,{}),"Transacci\xf3n denegada"]}),(0,m.jsx)("div",{className:"top",children:"N\xfamero de pedido"}),(0,m.jsx)("div",{className:"bottom",children:null==n?void 0:n.idempotence}),(0,m.jsx)("div",{className:"top",children:"Fecha y hora del pedido"}),(0,m.jsx)("div",{className:"bottom",children:(0,f.fG)(null==n?void 0:n.operation_date)}),(0,m.jsx)("div",{className:"top",children:"Descripci\xf3n de la denegaci\xf3n"}),(0,m.jsx)("div",{className:"bottom",children:null==n?void 0:n.extra}),(0,m.jsxs)(l.z,{size:"small",className:"niubiz",onClick:t,variant:"outline",children:["<"," Vuelve a intentarlo aqu\xed"]})]})}),(null==n?void 0:n.status)==="NEW"&&(0,m.jsx)("div",{className:"",children:i})]})},b=u.default.div.withConfig({displayName:"NiubizYape__CardNiubizS",componentId:"sc-2bmsil-0"})(["&{display:grid;grid-template-columns:1fr;> h2{font-size:1.5rem;font-weight:500;padding-bottom:1rem;display:flex;align-items:center;gap:1ch;> svg{font-size:2rem;}}&.SUCCESS{h2 svg{color:",";}}&.DENIED{h2 svg{color:",";}}> .top{font-size:0.9rem;color:",";padding-bottom:2px;}> .bottom{font-size:1rem;color:black;padding-bottom:12px;&.link{cursor:pointer;color:",";text-decoration:underline;}&.guardar{margin-top:2rem;color:",";}}> .niubiz{margin-top:2rem;}}"],function(e){return e.theme.status.success},function(e){return e.theme.status.error},function(e){return e.theme.alternate11},function(e){return e.theme.info3},function(e){return e.theme.dark}),C=u.default.div.withConfig({displayName:"NiubizYape__StyledMessage",componentId:"sc-2bmsil-1"})(["display:flex;justify-content:center;align-items:center;flex-direction:column;gap:1rem;width:60%;max-width:140px;> p{line-height:1.5;font-size:1rem;text-align:center;}> svg{font-size:3rem;color:",";}",""],function(e){return e.theme.success2},function(e){return e.$status.includes("DENIED")?(0,u.css)(["> svg{font-size:3rem;color:",";}"],function(e){return e.theme.primary}):null}),I=function(e){var n=e.operation,t=e.onClickTryAgain,i=e.message,s=(0,r.useMemo)(function(){if(n&&i)switch(null==n?void 0:n.method){case o.n$.NIUBIZ:return E;case o.n$.NIUBIZ_YAPE:return S;default:return h}return null},[n,i]);return s?(0,m.jsx)(s,{operation:n,onClickTryAgain:t,message:i}):(0,m.jsx)(m.Fragment,{})},T=t(9669),A=t.n(T),_=t(76642),z=function(){var e,n=(0,r.useState)(""),t=n[0],s=n[1],o=(0,r.useState)(),l=o[0],c=o[1],d=(0,r.useState)(!1),u=d[0],h=d[1],p=(0,g.useRouter)(),f=function(){try{var e,n,t;null===(e=window)||void 0===e||null===(n=e.parent)||void 0===n||null===(t=n.backAllDeposits)||void 0===t||t.call(n)}catch(i){console.error(i)}},v=function(e){try{var n,t;null===(n=(t=window.parent).dtRecargaExitosa)||void 0===n||n.call(t,e)}catch(i){}},x=(e=(0,i.Z)(a().mark(function e(n,t){var i;return a().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:h(!0),i="".concat("https://api-staging.calimaco.com/api","/payment/getOperationByHash?operationHash=").concat(n,"&db=").concat(t),A().get(i).then(function(e){var n;c(null==e?void 0:null===(n=e.data)||void 0===n?void 0:n.operation)}).catch(function(){s("Ups! Ocurrio algo, not found.")}).finally(function(){h(!1)});case 3:case"end":return e.stop()}},e)})),function(n,t){return e.apply(this,arguments)});return((0,r.useEffect)(function(){if(l){switch(null==l?void 0:l.status){case"DENIED":s("Algo pas\xf3, no pudimos procesar tu deposito.");break;case"SUCCESS":s("\xa1Tu dep\xf3sito fue realizado con \xe9xito!");break;case"NEW":s("Estamos procesando su dep\xf3sito realizado en ".concat(null==l?void 0:l.method,". Conf\xedrmalo en tu historial de dep\xf3sito en breve."));break;default:s("Ups! Ocurrio algo")}((null==l?void 0:l.status)==="SUCCESS"||(null==l?void 0:l.status)==="NEW")&&v(null==l?void 0:l.method)}},[l]),(0,r.useEffect)(function(){var e,n,t,i;null!=p&&null!==(e=p.query)&&void 0!==e&&e.db&&null!=p&&null!==(n=p.query)&&void 0!==n&&n.hash&&null!=p&&p.isReady&&x(null==p?void 0:null===(t=p.query)||void 0===t?void 0:t.hash,null==p?void 0:null===(i=p.query)||void 0===i?void 0:i.db)},[p]),u)?(0,m.jsx)(P,{children:(0,m.jsx)(_.g,{loading:!0,color:"primary",width:"2rem",height:"2rem"})}):l?(0,m.jsx)(P,{children:(0,m.jsx)(I,{operation:l,onClickTryAgain:f,message:t})}):(0,m.jsx)(m.Fragment,{})},P=u.default.div.withConfig({displayName:"deposito-exitoso__StyledS",componentId:"sc-10lfslx-0"})(["min-height:100vh;display:flex;justify-content:center;align-items:center;flex-direction:column;padding:1rem;gap:1rem;position:relative;"])},11036:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/interna/deposito-exitoso",function(){return t(72333)}])}},function(e){e.O(0,[9401,2912,4002,9774,2888,179],function(){return e(e.s=11036)}),_N_E=e.O()}]);