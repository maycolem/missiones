(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[868],{36844:function(e,t,n){"use strict";n.d(t,{JK:function(){return r},fG:function(){return o},my:function(){return s}});var i=n(32912),a=n(24002),o=function(e){if(!e)return"";var t=new Date(e.replace(" ","T"));t.setHours(t.getHours()-5);var n=(0,i.Z)(t,"dd-MM-yyyy hh:mm aaaaa'm'").replace("12:00 am","00:00 pm");return"".concat(n)},r=function(e){if(!e)return"";var t=new Date(e.replace(" ","T"));t.setHours(t.getHours()-5);var n=(0,i.Z)(t,"dd-MM-yyyy");return"".concat(n)},s=function(e){if(!e||"string"!=typeof e)return"";var t=(0,a.Z)(e,"yyyy-MM-dd",new Date);if(isNaN(t.getTime()))return"";var n=(0,i.Z)(t,"dd-MM-yyyy");return"".concat(n)}},35168:function(e,t,n){"use strict";n.d(t,{t:function(){return d}});var i=n(2817),a=n(64840),o=n(84225),r=n(53918),s=n(85893),d=function(e){var t=e.fetchData,n=e.count,r=e.page,d=(0,i.Z)(o.q.min_width.tabletL),c=(0,i.Z)(o.q.min_width.mobileM);return(0,s.jsx)(l,{children:(0,s.jsx)(a.Z,{boundaryCount:d?2:1,siblingCount:d?2:c?1:0,color:"primary",count:n,onChange:t,page:r,shape:"rounded",variant:"text"})})},l=r.default.div.withConfig({displayName:"Pagination__Styled",componentId:"sc-1971sdx-0"})(["padding:1rem 1rem;display:flex;flex-direction:column;gap:1rem;> nav{display:flex;justify-content:center;> ul{margin:auto;}}"])},76570:function(e,t,n){"use strict";n.d(t,{W:function(){return d}});var i=n(85260),a=n(67294),o=n(51649),r=n(53918),s=n(85893),d=function(e){var t=e.isFetching,n=e.refetch,r=(0,a.useState)(!1),d=r[0],c=r[1];return(0,a.useEffect)(function(){t?c(!0):(0,i.g)(1e3).then(function(){c(!1)})},[t]),(0,s.jsxs)(l,{onClick:function(){!d&&n()},$loading:d,children:[(0,s.jsx)(o.yRD,{}),(0,s.jsx)("span",{children:"Actualizar"})]})},l=r.default.div.withConfig({displayName:"RefreshData__StyledRefresh",componentId:"sc-o148eh-0"})(["display:flex;align-items:center;gap:5px;cursor:pointer;color:#3467ff;padding:14px 0px;transition:250ms;"," @keyframes spin{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}> span{font-weight:400;font-size:1rem;}> svg{color:#3467ff;font-size:1.5rem;}"],function(e){return e.$loading?(0,r.css)(["cursor:not-allowed;svg{animation-name:spin;animation-duration:1s;animation-iteration-count:infinite;animation-timing-function:linear;}"]):null})},98532:function(e,t,n){"use strict";n.d(t,{b:function(){return s}});var i=n(73710),a=n.n(i);n(67294);var o=n(53918),r=n(85893),s=function(e){var t=e.activeTabFilter,n=e.totalData;return t?["ALL","LAST-MOUNTH"].includes(t.value)?(0,r.jsx)(d,{children:(0,r.jsxs)("p",{children:[(0,r.jsx)("span",{children:n})," resultados"]})}):(0,r.jsx)(d,{children:(0,r.jsxs)("p",{children:[(0,r.jsx)("span",{children:n})," resultados ",(0,r.jsx)("span",{className:"last30",children:"de los ultimos 30 dias"})]})}):(0,r.jsx)(d,{children:(0,r.jsxs)("p",{children:[(0,r.jsx)("span",{children:n})," resultados"]})})},d=o.default.div.withConfig({displayName:"ResultFilter__Styled",componentId:"sc-1o2ablb-0"})(["> p{color:",';font-feature-settings:"tnum";max-width:200px;text-align:right;span{font-weight:500;&.last30{white-space:nowrap;font-weight:400;}}}'],function(e){return a()(e.theme.contrastText,.7)})},58706:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ei}});var i=n(10253),a=n(2817),o=n(71843),r=n(33372),s=n(84225),d=n(67294),l=n(53918),c=n(50029),u=n(59499),p=n(87794),m=n.n(p),f=n(98353),g=n(36844),h=n(85260),v={src:"/_next/static/media/cabeceraCapturaMisApuestas.b6e5a50c.png",height:100,width:480,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAIAAADq9gq6AAAAPUlEQVR42mP4+ezZyzt3/nd2/s3M/F9d/TE8/BEDww8eHoZfDx++PnHif17e366u/+3t75OTbzMwfOfjBwAryh2hQ11mSwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:2},y={src:"/_next/static/media/costadosCapturaMisNotificaciones.c3dcacf8.png",height:133,width:27,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAAICAQAAAB5JObJAAAAMUlEQVR42mNgUmSWZmAJZvJjYPBj8GTo9OvzZpjnM9eLYabbLB+GWX6zkhhmSc2SAwCdlgoWWM+q3AAAAABJRU5ErkJggg==",blurWidth:2,blurHeight:8},x=n(7952),b=n(29306),w=n.n(b),_=n(41248),C=function(){var e,t,n=(0,d.useState)(!1),i=n[0],a=n[1],o=(0,_.I0)(),r=function(e){var t=new ClipboardItem({"image/png":new Promise(function(t){w().toBlob(e).then(function(e){t(new Blob([e],{type:"image/png"})),o((0,x.TQ)(URL.createObjectURL(e)))})})});navigator.clipboard.write([t]).then(function(){o((0,x.A_)()),document.getElementById("containerClone").remove(),a(!1)}).catch(function(){o((0,x.T2)("La imagen no pudo ser copiada. Vuelve a intentarlo m\xe1s tarde.")),o((0,x.A_)()),document.getElementById("containerClone").remove(),a(!1)})},s=function(e){w().toBlob(e).then(function(e){var t=URL.createObjectURL(e);confirm("Este navegador no admite la copia de im\xe1genes en el portapapeles.\n\n 1. Presione 'Aceptar' para abrir la imagen en una nueva ventana.\n 2. Presione 'Cancelar' para regresar a la web.")&&window.open(t,"_blank"),document.getElementById("containerClone").remove(),a(!1)}).catch(function(){a(!1)})};return{addToClipboard:(e=(0,c.Z)(m().mark(function e(t){var n,i,o,d,l,c,u,p,f;return m().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a(!0),n=document.getElementById(t)){e.next=4;break}return e.abrupt("return",null);case 4:return n.style.background="white",(i=n.cloneNode(!0)).style.width="100%",i.style.minWidth="360px",i.style.maxWidth="100%",(o=i.querySelector("._asb_bethistory-item-footer-bet-info")).style.display="flex",o.style.flexDirection="column",(d=document.createElement("div")).style.width="100%",d.style.minWidth="400px",d.style.maxWidth="400px",d.style.position="relative",d.style.pointerEvents="none",d.style.background="white",(l=document.createElement("img")).src=v.src,l.style.width="100%",l.style.minWidth="400px",l.style.maxWidth="400px",l.style.display="block",(c=document.createElement("div")).style.margin="auto",c.style.marginTop="2px",c.style.width="100%",c.style.maxWidth="400px",c.style.display="grid",c.style.gridTemplateColumns="20px 1fr 20px",(u=document.createElement("div")).style.display="inline-block",u.style.backgroundSize="16px 100px",u.style.backgroundRepeat="repeat-y",u.style.backgroundPosition="center",u.style.backgroundImage="url(".concat(y.src,")"),(p=document.createElement("div")).style.display="inline-block",p.style.backgroundSize="16px 100px",p.style.backgroundRepeat="repeat-y",p.style.backgroundPosition="center",p.style.backgroundImage="url(".concat(y.src,")"),c.appendChild(u),c.appendChild(i),c.appendChild(p),d.id="containerClone",d.appendChild(l),d.appendChild(c),document.body.appendChild(d),e.next=53,(0,h.g)(1e3);case 53:f=document.getElementById("containerClone"),navigator.clipboard&&"undefined"!=typeof ClipboardItem?r(f):s(f);case 55:case"end":return e.stop()}},e)})),function(t){return e.apply(this,arguments)}),addToClipboardElement:function(e){a(!0),w().toJpeg(e,{quality:.95}).then(function(e){var t=document.createElement("a");t.download="my-image-name.jpeg",t.href=e,t.click()})},loading:i}},j=n(29105),A=n(85893),N=function(e){var t=e.props,n=e.tokens,i=(0,d.useRef)();return(0,d.useEffect)(function(){return window.altenarWSDK.addWidget({widget:"WBetDetails",props:t,tokens:n,container:i.current}),function(){}},[]),(0,A.jsx)("div",{ref:i})},k=n(77549),B=n(94184),T=n.n(B),I=n(6767),E=n.n(I),M=n(77058),S=n(16835),D=n(42162),O=n(24705),H=function(e){var t=e.operation,n=e.item,i=(0,O.Fy)(),a=(0,S.Z)(i,2),o=a[0],r=a[1],s=(r.isLoading,r.data),l=(null==s?void 0:s.data)||[],c=(0,M.$)().t,u=(0,D.Z)().session;return(0,d.useEffect)(function(){o({session:u,operation:t})},[]),(0,A.jsx)(Z,{children:(0,A.jsxs)(L,{id:"altenar_bets",className:T()({open:(null==n?void 0:n.status)==="OPEN",lost:(null==n?void 0:n.status)==="LOST",won:(null==n?void 0:n.status)==="WON"}),children:[(0,A.jsxs)("div",{className:"top",children:[(0,A.jsx)("div",{className:"type",children:c(null==n?void 0:n.type)}),(0,A.jsx)("div",{className:"status",children:c(null==n?void 0:n.status)})]}),(0,A.jsx)("div",{className:"middle",children:null==l?void 0:l.map(function(e,t){return(0,A.jsxs)(U,{className:"middle-row",children:[(0,A.jsx)("div",{className:"selection",children:null==e?void 0:e.selection}),(0,A.jsx)("div",{className:"winning",children:Number(null!=e&&e.odds?null==e?void 0:e.odds:0).toFixed(2)}),(0,A.jsx)("div",{className:"event_name",children:null==e?void 0:e.event_name}),(0,A.jsx)("div",{className:"event_date",children:(0,g.fG)(null==e?void 0:e.event_date)})]},e.event_name)})}),(0,A.jsxs)(R,{children:[(0,A.jsx)("div",{className:"monto_total_label",children:"Monto Total:"}),(0,A.jsx)("div",{className:"monto_total",children:(0,f.Aq)(null==n?void 0:n.wager)}),(0,A.jsx)("div",{className:"ganancia_label",children:"Ganancia Total:"}),(0,A.jsx)("div",{className:"ganancia",children:(0,f.Aq)(null==n?void 0:n.winning)})]}),(0,A.jsxs)("div",{className:"bottom_fotter",children:[(0,A.jsx)(W,{}),(0,A.jsx)("div",{className:"id_date",children:"ID: ".concat(null==n?void 0:n.operation," ").concat((0,g.fG)(null==n?void 0:n.created_date))})]})]})})},Z=l.default.div.withConfig({displayName:"CardBetHistoryOldMobile__Styled",componentId:"sc-1prwav9-0"})(["min-height:200px;"]),R=l.default.div.withConfig({displayName:"CardBetHistoryOldMobile__DesktopHistoryDetailsCardBottomS",componentId:"sc-1prwav9-1"})(["&{display:grid;grid-template-columns:150px 100px;padding:9px;.monto_total_label,.ganancia_label{text-align:left;}.monto_total,.ganancia{text-align:right;}}"]),W=l.default.div.withConfig({displayName:"CardBetHistoryOldMobile__DividerS",componentId:"sc-1prwav9-2"})(["&{display:block;width:100%;border-bottom:1px solid #ededed;}"]),U=l.default.div.withConfig({displayName:"CardBetHistoryOldMobile__DesktopHistoryDetailsCardRowS",componentId:"sc-1prwav9-3"})(["&{display:grid;grid-template-columns:1fr 1fr;padding:9px;background:#ededed;color:#595959;.selection,.event_name{text-align:start;}.winning,.event_date{text-align:end;}.event_date{font-size:0.85rem;}}"]),L=l.default.div.withConfig({displayName:"CardBetHistoryOldMobile__DesktopHistoryDetailsCardS",componentId:"sc-1prwav9-4"})(["&{color:rgb(89,89,89);border-bottom:8px solid #ededed;&.open{.top{background:#616161;}}&.lost{.top{background:#ff0000;}}&.won{.top{background:#009847;}}.top{color:#fff;display:flex;justify-content:space-between;padding:9px;}.bottom_fotter{font-size:0.85rem;display:flex;flex-direction:column;> .id_date{padding:9px;align-self:flex-start;}}}"]),P=function(e){var t,n,i,a,o,r=e.bet,s=e.betIdActive,l=e.setBetIdActive,p=r.game,v=(r.account,r.status),y=r.operation,x=C();x.addToClipboardElement,x.loading;var b=(0,j.Z)().heightHeader,w=(0,d.useState)(!1),_=w[0],k=w[1],B=(0,M.$)().t,I=(o={},(0,u.Z)(o,"Fecha_y_hora_de_creaci\xf3n",(0,g.fG)(null==r?void 0:r.created_date)),(0,u.Z)(o,"Tipo",B(null==r?void 0:r.type)),(0,u.Z)(o,"Monto",null==r?void 0:r.wager),(0,u.Z)(o,"Cuota",null==r?void 0:r.odds),(0,u.Z)(o,"Resultado",B(null==r?void 0:r.status)),(0,u.Z)(o,"Ganancia",(0,f.Aq)(null==r?void 0:r.winning)),o),E=Number(p),S=(0,d.useRef)(),D=function(e){var t=0,n=e;if(e.offsetParent)do t+=n.offsetTop,n=n.offsetParent;while(n);return t>=0?t:0};return(0,d.useEffect)(function(){s!==E?k(!1):(0,h.g)(400).then(function(){var e=D(S.current);window.scrollTo({behavior:"smooth",top:e-b-5})})},[s]),(0,A.jsxs)($,{$status:v,ref:S,$open:_&&s===E,children:[(0,A.jsx)(J,{$status:v,className:"header",children:p}),(0,A.jsx)(F,{children:function(){var e=[];for(var t in I){var n=I[t],i=t.replace(/_/g," ");e.push((0,A.jsxs)(G,{className:T()(t),children:[(0,A.jsx)("div",{className:"top",children:i}),(0,A.jsx)("div",{className:"bottom",children:n})]},t))}return(0,A.jsx)(A.Fragment,{children:e})}()}),(0,A.jsx)(z,{onClick:(t=(0,c.Z)(m().mark(function e(t){return m().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:k(!_),_||l(E);case 2:case"end":return e.stop()}},e)})),function(e){return t.apply(this,arguments)}),children:_?"Ver menos":"Ver m\xe1s"}),(0,A.jsx)(q,{$open:_&&s===E,children:s&&_&&(i=new Date("2022-08-16T00:00:00"),(a=new Date(null==r?void 0:null===(n=r.created_date)||void 0===n?void 0:n.replace(" ","T")))>=i?(0,A.jsx)(N,{props:{betId:s}}):(0,A.jsx)(H,{item:r,operation:y}))})]})},q=l.default.div.withConfig({displayName:"CardBetHistoryMobile__BetDetailAcordionCss",componentId:"sc-15nhidr-0"})(["transition:350ms;padding-top:.5rem;",""],function(e){return e.$open?(0,l.css)(["opacity:1;min-height:250px;max-height:100vh;"]):(0,l.css)(["opacity:0;min-height:0px;max-height:0px;"])}),z=l.default.div.withConfig({displayName:"CardBetHistoryMobile__ShowMoreCss",componentId:"sc-15nhidr-1"})(["margin:auto;max-width:min-content;white-space:nowrap;padding:5px 10px;border-radius:0.5rem;background:",";color:",";cursor:pointer;",""],function(e){return E()(e.theme.primary).fade(.9)},function(e){return e.theme.primary},(0,k.q)().small),F=l.default.div.withConfig({displayName:"CardBetHistoryMobile__BodyCss",componentId:"sc-15nhidr-2"})(["grid-template-columns:1fr 1fr;display:grid;padding:.5rem 1rem;grid-auto-flow:dense;"]),$=l.default.div.withConfig({displayName:"CardBetHistoryMobile__CardBetMobileCss",componentId:"sc-15nhidr-3"})(["border-radius:0.5rem;overflow:hidden;border:1px solid ",";padding-bottom:.5rem;background:white;align-self:start;"," ",""],function(e){return E()(e.theme.contrastText).fade(.8)},function(e){if(e.$open)return(0,l.css)(["",""],(0,k.q)().medium)},function(e){switch(e.$status){case"LOST":case"OPEN":case"CASHOUT":default:return(0,l.css)([""]);case"WON":return(0,l.css)(["            "])}}),G=l.default.div.withConfig({displayName:"CardBetHistoryMobile__RowCss",componentId:"sc-15nhidr-4"})(["display:flex;flex-direction:column;justify-content:space-between;padding-bottom:0.5rem;padding-top:0.5rem;gap:0.25rem;border-bottom:1px solid ",";padding-right:.5rem;> div.bottom{color:",";font-size:0.9rem;}"],function(e){return E()(e.theme.contrastText).fade(.8)},function(e){return E()(e.theme.contrastText).fade(.5)}),J=l.default.div.withConfig({displayName:"CardBetHistoryMobile__HeaderCss",componentId:"sc-15nhidr-5"})(["padding:0.5rem;font-size:1rem;letter-spacing:0.03rem;text-align:center;",""],function(e){switch(e.$status){case"LOST":return(0,l.css)(["background:",";color:white;"],function(e){return E()(e.theme.status.primary)});case"OPEN":return(0,l.css)(["background:",";color:white;"],function(e){return E()(e.theme.status.default).darken(.2)});case"WON":return(0,l.css)(["             background:",";color:white;"],function(e){return E()(e.theme.status.success).darken(.2)});case"CASHOUT":return(0,l.css)(["background:",";color:white;"],function(e){return E()(e.theme.status.info).darken(.2)});default:return(0,l.css)(["background:",";color:white;"],function(e){return E()(e.theme.status.default).darken(.2)})}}),V=function(e){var t=e.bets,n=(0,d.useState)(),i=n[0],a=n[1];return(0,A.jsx)(A.Fragment,{children:(0,A.jsx)(Q,{children:t.map(function(e){return(0,A.jsx)(P,{bet:e,betIdActive:i,setBetIdActive:a},e.operation)})})})};l.default.div.withConfig({displayName:"CardBetsHistoryMobile__InitWidgetCss",componentId:"sc-4vh96a-0"})(["opacity:0;height:0px;pointer-events:none;"]);var Q=l.default.div.withConfig({displayName:"CardBetsHistoryMobile__GridCss",componentId:"sc-4vh96a-1"})(["display:grid;gap:1rem;grid-template-columns:repeat(auto-fill,minmax(min( 320px,100%),1fr));","{padding:1rem;}"],s.q.min_width.desktopS),K=n(96486),X=n(42342),Y=n(35168),ee=n(76570),et=n(98532),en=n(85905),ei=function(){(0,r.V)(),(0,o.y)(),(0,a.Z)(s.q.min_width.desktopS);var e=(0,d.useState)(null),t=e[0],n=e[1],l=(0,en.Z)(),c=l.bets,u=l.changePage,p=l.count,m=l.fetchData,f=l.isFetching,g=(l.isLoading,l.page),h=l.refetch,v=l.resetAndUpdateQuery,y=l.totalData,x=function(e){if(u(1),(0,K.isObject)(e))"CUSTOM_FILTER"===e.value&&(v({status:e.obj.status,type:e.obj.type,op_date_init:e.obj.dateObj.init,op_date_end:e.obj.dateObj.end,game:e.obj.game}),n(null));else{var t=X.ob.find(function(t){return t.value===e});if(n(t),"op_date_init"===t.filter){"LAST-MOUNTH"===t.value&&v(null);return}if("all"===t.filter){v({op_date_init:"2021-01-01 00:00:00"});return}"status"===t.filter&&v({status:t.value})}};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(i.h,{canonical:"/cuenta/mis-apuestas-deportivas/",title:"Apuestas Deportivas"}),(0,A.jsxs)(ea,{children:[(0,A.jsx)(X.A9,{items:X.ob,onActive:x}),(0,A.jsxs)(eo,{children:[(0,A.jsx)(ee.W,{isFetching:f,refetch:h}),(0,A.jsx)(et.b,{activeTabFilter:t,totalData:y})]}),(0,A.jsx)(V,{bets:c}),c&&(null==c?void 0:c.length)>0&&(0,A.jsx)(Y.t,{count:p,fetchData:m,page:g})]})]})},ea=l.default.div.withConfig({displayName:"widgetBetDetail__Styled",componentId:"sc-1o7tkig-0"})(["display:flex;flex-direction:column;flex:1;min-height:inherit;padding-top:7px;"]),eo=l.default.div.withConfig({displayName:"widgetBetDetail__StyledWrapperTop",componentId:"sc-1o7tkig-1"})(["display:flex;padding:0 14px;align-items:center;justify-content:space-between;"])},74365:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/test/altenar/mis-apuestas-deportivas/widgetBetDetail",function(){return n(58706)}])}},function(e){e.O(0,[3662,9866,1465,2912,4002,5095,2103,4276,9306,948,6281,9774,2888,179],function(){return e(e.s=74365)}),_N_E=e.O()}]);