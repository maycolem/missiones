"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1313,9105],{10384:function(e,a,n){n.d(a,{Z:function(){return m}});var s=n(59499),t=n(16835),i=n(67294),r=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0px",n=(0,i.useState)(!1),s=n[0],r=n[1];return(0,i.useEffect)(function(){var n=new IntersectionObserver(function(e){(0,t.Z)(e,1)[0].isIntersecting&&(r(!0),n.disconnect())},{rootMargin:a});return e.current&&n.observe(e.current),function(){e.current&&n.unobserve(e.current)}},[s]),s},l=n(85893);function c(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,s)}return n}function d(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?c(Object(n),!0).forEach(function(a){(0,s.Z)(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}var o,h,p,x=function(e){var a=e.from,n=e.to,s=e.children,t=e.delay,c=void 0===t?0:t,o=(0,i.useRef)(null),h=r(o),p={transition:"850ms ease-in-out ".concat(c>500?500:c,"ms")};return(0,l.jsx)("div",{ref:o,style:h?d(d({},p),n):d(d({},p),a),children:s})},m={FadeIn:function(e){var a=e.children;return(0,l.jsx)(x,{from:{opacity:0},to:{opacity:1},children:a})},FadeUp:function(e){var a=e.children,n=e.delay;return(0,l.jsx)(x,{from:{opacity:0,translate:"0 2rem"},to:{opacity:1,translate:"none"},delay:n,children:a})},ScaleIn:function(e){var a=e.children;return(0,l.jsx)(x,{from:{scale:"0"},to:{scale:"1"},children:a})}}},73837:function(e,a,n){n.d(a,{j:function(){return c}});var s=n(29105),t=n(67294),i=function(){var e=(0,t.useState)(0),a=e[0],n=e[1];return(0,t.useEffect)(function(){var e=function(){var e,a=document.documentElement.scrollTop;n(a/(document.documentElement.scrollHeight-document.documentElement.clientHeight)*100)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}},[]),{scroll:a}},r=n(53918),l=n(85893),c=function(e){var a=e.className,n=i().scroll,t=(0,s.Z)().heightHeader;return(0,l.jsx)(d,{$heightHeader:"".concat(t,"px"),className:void 0===a?"":a,children:(0,l.jsx)(o,{className:"progress",style:{width:"".concat(n,"%")}})})},d=r.default.div.withConfig({displayName:"ScrollIndicator__ScrollIndicatorCss",componentId:"sc-1s618ai-0"})(["position:fixed;background-color:",";left:0;top:",";z-index:99999;width:100%;"],function(e){return e.theme.background},function(e){return e.$heightHeader||0}),o=r.default.div.withConfig({displayName:"ScrollIndicator__Progress",componentId:"sc-1s618ai-1"})(["height:3px;background:",";"],function(e){return e.theme.secondary})},29105:function(e,a,n){var s=n(67294),t=n(63933),i=function(){var e=(0,s.useState)(0),a=e[0],n=e[1],i=(0,t.Z)().width;return(0,s.useEffect)(function(){var e=setTimeout(function(){var e=document.getElementById("layout-default-at-apuesta");null!==e&&n(e.offsetHeight)},200);return function(){clearTimeout(e)}},[window,document,i]),{heightHeader:a}};a.Z=i},63933:function(e,a,n){var s=n(67294);a.Z=function(){var e=(0,s.useState)({width:void 0,height:void 0}),a=e[0],n=e[1];return(0,s.useEffect)(function(){function e(){n({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){window.removeEventListener("resize",e)}},[]),a}},21313:function(e,a,n){n.d(a,{I:function(){return ee}});var s=n(50029),t=n(87794),i=n.n(t),r={src:"/_next/static/media/ajustedesk.f201e810.png",height:986,width:1534,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAQAAADSmGXeAAAAQElEQVR42h3JMQqAMABD0WepotiC3V3FIzh4/3sZTPhDfvxZzOhhoiqaI/Nx29jlDyPizRnX01V1pUmJaoHh5ANPRgIXrMv7IQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:5},l={src:"/_next/static/media/apuesta_desk.e903e76e.png",height:985,width:1531,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAQAAADSmGXeAAAAXElEQVR42mNYx7iDcRMQ72RsY1zLyMDAcI3hIMNehvsMFxgWMexk+M/AcN7khMlRpStqlzSX6+2XWcvA0FhR35hV09vQUJPX2ptdbczA26Rcz9AAhPUMzdI5mWIAD4EeE3FJpLEAAAAASUVORK5CYII=",blurWidth:8,blurHeight:5},c={src:"/_next/static/media/casino2.a708a80c.png",height:994,width:1534,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAQAAADSmGXeAAAARUlEQVR42g3Eyw1AUBQA0bMVv+CpQheWFGBFNGRJBMW6mcyhV+s02jipaCVdlKKQTKFSyuVhzWiy2sx2i4HX53G6wtvxA8H1CLreQuEUAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:5},d={src:"/_next/static/media/casino3.952e3bd2.png",height:986,width:1537,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAQAAADSmGXeAAAANUlEQVR42k3KSw6AMBQCwGk12ucvev/LyrJMYAW7TWVDWaDFlOF0KCPy5Yo3fdw+Bc2Kpuv8JzkA8geWilYAAAAASUVORK5CYII=",blurWidth:8,blurHeight:5},o={src:"/_next/static/media/competencia.97d4ffe8.png",height:988,width:1534,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAQAAADSmGXeAAAAOUlEQVR42lXD0QpAMAAAwBMtytpqD6hJifL/X8ijXR29v0AyCt9JVFQ2u8PtcTlVkmwWZcVq0egML1IjAge9D1SWAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:5},h={src:"/_next/static/media/culebradesk.a5fc4315.png",height:986,width:1534,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAa0lEQVR42mMAAWUFRTYgxaSupqZgbW0dZmJiYsPJzCoQHRHJyAAC+vr6rIGBgRpOTk5+tjY2kXp6eo5AYR4GGGhqapJMT0+PCg8Pt9PR0ZFhwAZaW1sF4+Li2BiAwM/Pj5EBF3B1cWFC5gMA8FYSPpiMpzAAAAAASUVORK5CYII=",blurWidth:8,blurHeight:5},p={src:"/_next/static/media/deportivas.db469cf6.png",height:987,width:1537,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAQAAADSmGXeAAAAXUlEQVR42mOQ5JTgZmBQ5NPgZGCYycjLxcAgxiDNoM3gzhDMYMOgwaDCEJUWUOFeFFxiNcG23b9Qwo0hsSF8fnBXerf/bKd5aV1x0Qwi+QYt8rXMDRy9DA0ypeFKAIvEFBcSkSwnAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:5},x={src:"/_next/static/media/derecha.76881ec0.svg",height:987,width:96},m={src:"/_next/static/media/deskcuota.f2d8fe04.png",height:986,width:1534,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAM1BMVEUiHx8hHx8iHx8hHx8iHx8iHx8hHx8iHx8hHx8iHx8hHx8iHx8hHx8hHh8iHx8hHx8iHx8CFiTfAAAAEXRSTlMAAAEBAgMDBAQFBQYGBgcHCWi2V/gAAAAqSURBVHjaBYCHEQAgCAM/VkAs+0/rAfVmFsB2U3fQGaI/YK6IaEKYT+ADEyMAzrW3QaAAAAAASUVORK5CYII=",blurWidth:8,blurHeight:5},A={src:"/_next/static/media/izquierda .9c7d9e45.svg",height:989,width:105},u={src:"/_next/static/media/Portada_mobile.df6113f7.png",height:494,width:741,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAlElEQVR42mOAgRsPn7BNjQ8pnBAXVjmtoTyUgWEBM0Jy2zy+0vquppak+BOVtg43qvOjN15cX6nKgADGPCuKg8uW1Ew+s2JG7f8ji0tfXj/c7QWWutfNwHJ+Q4LyySW1Gy9smn3v3I75G9dWONdvyDDMa+sz4AUrenuuM+rqrgkzGBi2s4H4D2szufflu7gzMDAwAABwkTvA/QN3VwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:5},f={src:"/_next/static/media/portada_desk.38db8f30.png",height:849,width:1711,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAbUlEQVR42mMAgQltE6Rr2ibq1+oxuKcxMGhuXjBNbN3kXgUGGFg8qdlhYmvvkjUNfYeXdmbuXlAb3bFuRuVEBhh4ebjE+Ozm/qz9G9fGnNjcGb8p1yJ1bZGBLgMIfDnix9jmmc7EgAUsznNgBABM6SfBDkdMaQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:4},g={src:"/_next/static/media/primerjuegocasino.ad0c9945.png",height:986,width:1530,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAQAAADSmGXeAAAAOElEQVR42h2KCQoAIRDDsu6o44H/f65BQkkLhcY0i6QSNpVq0CQ0nR8/Zr3OlCRwyoBPFTkEhX0BLkQBFRAZOhsAAAAASUVORK5CYII=",blurWidth:8,blurHeight:5},j={src:"/_next/static/media/proveedorcasino.425f275e.png",height:986,width:1530,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAQAAADSmGXeAAAAX0lEQVR42mO4yLrFZYfNJKNleptct6lNk2JYzrvGaaPbOq11Fuv81zqsUme4xLDRZa3TKoMViuttVkhs5GVYx7BAfi3fVYYWpv8MKxh2MTBsZVwKFFzI4MkAFGDcyggAoaMf53HWAMAAAAAASUVORK5CYII=",blurWidth:8,blurHeight:5},v=n(65600),N=n(67294),E=function(e){var a=e.session,n=(0,N.useState)({}),s=n[0],t=n[1],i=(0,N.useState)(!1),r=i[0],l=i[1];return(0,N.useEffect)(function(){a&&a&&(l(!0),(0,v.Fx)({session:a}).then(function(e){if((null==e?void 0:e.http_code)===200){var a={};Object.entries(null==e?void 0:e.result).forEach(function(e){a[e[0]]=e[1]}),t(a)}else t({});l(!1)}))},[a]),{resumen:s,loading:r}},w=n(53918),y=n(85893),b=function(e){var a=e.children;return(0,y.jsx)(U,{children:a})},U=w.default.div.withConfig({displayName:"SmallText__SpanCss",componentId:"sc-1lrcy7x-0"})(["font-weight:400;font-size:1.1rem;font-style:normal;font-family:Rubik;width:80vw;max-width:500px;margin:auto;text-align:center;"]),S=function(e){var a=e.text,n=(0,N.useRef)();(0,N.useEffect)(function(){if(a.length>40){n.current.style.fontSize="clamp(2.4rem ,2vw ,8rem)";return}if(a.length>30){n.current.style.fontSize="clamp(2.7rem ,2vw ,8rem)";return}if(a.length>20){n.current.style.fontSize="clamp(3rem ,2vw ,8rem)";return}},[n,a]);var s=(0,N.useRef)(),t=a.toUpperCase().split("О").join("O");return(0,y.jsx)(R,{ref:n,children:(0,y.jsx)("p",{ref:s,children:t})})},R=w.default.div.withConfig({displayName:"TopTitle__TopCss",componentId:"sc-42u677-0"})(["display:flex;justify-content:center;align-items:center;margin-bottom:calc(3vh + 2rem);font-size:clamp(3.5rem,2vw,8rem);text-transform:uppercase;p > span,p{display:grid;place-items:center;border-radius:50%;font-weight:700;text-align:center;font-family:Gobold;font-style:italic;transform:rotate(-6deg);color:",";text-transform:uppercase;}"],function(e){return e.theme.secondary}),O=function(e){var a,n,s=e.date,t={day:(n=new Date(s)).getDate(),month:n.getMonth()+1,year:n.getFullYear().toString().slice(-2)};return(0,y.jsxs)(C,{children:[(0,y.jsxs)("div",{className:"box__date",children:[(0,y.jsx)("span",{className:"box__date--text",children:"D\xcdA"}),(0,y.jsx)("span",{className:"box__date--number",children:null==t?void 0:t.day})]}),(0,y.jsxs)("div",{className:"box__date",children:[(0,y.jsx)("span",{className:"box__date--text",children:"MES"}),(0,y.jsx)("span",{className:"box__date--number",children:null==t?void 0:t.month})]}),(0,y.jsxs)("div",{className:"box__date",children:[(0,y.jsx)("span",{className:"box__date--text",children:"A\xd1O"}),(0,y.jsx)("span",{className:"box__date--number",children:null==t?void 0:t.year})]})]})},C=w.default.div.withConfig({displayName:"WrapTime__WrapTimeCss",componentId:"sc-yelwuv-0"})(["max-width:200px;display:flex;flex-direction:row;justify-content:center;gap:1rem;margin-left:auto;margin-right:auto;margin-bottom:calc(5vh + 2rem);> .box__date{display:flex;flex-direction:column;align-items:center;padding:.8rem 1rem;background-color:transparent;border:thin solid ",";border-radius:10px;gap:1rem;}.box__date--text{color:",";font-size:1.4rem;}.box__date--number{color:",";font-size:3rem;font-weight:600;font-style:normal;font-family:Gobold;}"],function(e){return e.theme.secondary},function(e){return e.theme.background},function(e){return e.theme.secondary}),_=n(10384),D=n(73837),F=n(66706),z=n(85260),I=function(){return!0},V=function(){var e,a=(0,N.useState)(0),n=a[0],t=a[1],r=(e=(0,s.Z)(i().mark(function e(){var a;return i().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t(window.innerWidth-document.body.clientWidth);case 2:case"end":return e.stop()}},e)})),function(){return e.apply(this,arguments)});return(0,N.useEffect)(function(){return I&&(r(),window.addEventListener("resize",r)),function(){window.removeEventListener("resize",r)}},[]),{scrollBardWidth:n}},T=n(2817),B=function(e){var a=e.text;return(0,y.jsxs)(M,{children:[a,(0,y.jsx)("span",{className:"stroke-shadow",children:a})]})},M=w.default.span.withConfig({displayName:"TextShadowStroke__SpanCss",componentId:"sc-hkozsl-0"})(["position:relative;font-size:3rem;top:.9rem;> span.stroke-shadow{position:absolute;-webkit-text-stroke:0.04rem white;-webkit-text-fill-color:transparent;-webkit-animation:fill 0.5s infinite alternate;left:0;top:-.3rem;font-size:3rem;transform:scaleY(1.3) scaleX(1.3);opacity:0.3;}"]),k=n(29105),G=n(84225),L=n(73710),Y=n.n(L),Q=function(e){var a=e.children,n=e.elementRef,s=(0,k.Z)().heightHeader;return(0,y.jsx)(y.Fragment,{children:(0,y.jsx)(W,{$heightHeader:s,ref:n,children:a})})},W=w.default.div.withConfig({displayName:"WrapBackground__WrapBackgroundCss",componentId:"sc-fzb1g3-0"})(["position:relative;width:calc(100% + 28px);right:14px;background:black;background-image:repeating-linear-gradient( 45deg,",",",' 0.1px,transparent,transparent 5.9px );scroll-snap-type:y mandatory;scroll-behavior :smooth;overflow:auto;height:100vh;height:100svh;z-index:11;position:fixed;height:100vh;width:100vw;left:0;top:0;&::-webkit-scrollbar{display:none}&::after{content:"";position:fixed;height:20vw;width:20vw;left:calc(50% - 10vw);top:30vh;border-radius:50%;background:#E50517;-webkit-box-shadow:-0.5px -1px 13px 17px #E50517;-moz-box-shadow:-0.5px -1px 13px 17px #E50517;box-shadow:0px 0px 5px 15px #E50517,0px 0px 10px 20px #E50517,0px 0px 25px 50px #E50517,0px 0px 80px 100px #E50517,0px 0px 200px 200px rgba(229,5,23,0.3),0px 0px 250px 250px rgba(229,5,23,0.2),0px 0px 70vh 70vh rgba(229,5,23,0.1);z-index:9;',"{box-shadow:0px 0px 5px 15px #E50517,0px 0px 10px 20px #E50517,0px 0px 25px 50px #E50517,0px 0px 80px 100px #E50517,0px 0px 200px 200px rgba(229,5,23,0.3),0px 0px 250px 250px rgba(229,5,23,0.2),0px 0px 70vh 70vh rgba(229,5,23,0.1),0px 0px 90vw 90vw rgba(229,5,23,0.15);}}"],function(e){var a=e.theme;return Y()(a.secondary,.1)},function(e){var a=e.theme;return Y()(a.secondary,.1)},G.q.min_width.desktopS),P=function(e){var a=e.children,n=e.innerRef,s=(0,k.Z)().heightHeader;return(0,y.jsx)(H,{ref:void 0===n?null:n,$heightHeader:s,children:(0,y.jsx)("div",{className:"wrap",children:a})})},H=w.default.section.withConfig({displayName:"WrapSection__WrapSectionCss",componentId:"sc-1enp1sy-0"})(["position:relative;min-height:100%;width:100%;scroll-snap-align:start;scroll-snap-stop:always;color:white;display:grid;place-items:center;z-index:12;padding-top:","px;overflow:hidden;> .wrap{width:90%;margin:auto;}"],function(e){return e.$heightHeader}),Z=n(42162),J=n(85806),q=n(94184),X=n.n(q),K=n(87979),$=n(42708),ee=function(){var e,a,n=(0,Z.Z)(),t=n.user,v=n.openModalLoginAction,w=n.session,U=null==t?void 0:null===(e=t.firstName)||void 0===e?void 0:e.split(" ")[0],R=E({session:w}),C=R.resumen,D=R.loading,I=V().scrollBardWidth,M=(0,N.useRef)(null),k=(0,N.useRef)(),L=(0,$.YD)({threshold:.5}),Y=L.ref,W=L.inView,H=(0,$.YD)({threshold:.5}),q=H.ref,ee=H.inView,ed=(0,$.YD)({threshold:.5}),eo=ed.ref,eh=ed.inView,ep=(0,$.YD)({threshold:.5}),ex=ep.ref,em=ep.inView,eA=(0,$.YD)({threshold:.5}),eu=eA.ref,ef=eA.inView,eg=(0,$.YD)({threshold:.5}),ej=eg.ref,ev=eg.inView,eN=(0,$.YD)({threshold:.5}),eE=eN.ref,ew=eN.inView,ey=(0,$.YD)({threshold:.5}),eb=ey.ref,eU=ey.inView,eS=(0,$.YD)({threshold:.5}),eR=eS.ref,eO=eS.inView,eC=(0,$.YD)({threshold:.5}),e_=eC.ref,eD=eC.inView,eF=(0,$.YD)({threshold:.5}),ez=eF.ref,eI=eF.inView,eV=(0,$.YD)({threshold:.5}),eT=eV.ref,eB=eV.inView,eM=(0,$.YD)({threshold:.5}),ek=eM.ref,eG=eM.inView,eL=(0,$.YD)({threshold:.5}),eY=eL.ref,eQ=eL.inView,eW=(0,$.YD)({threshold:.5}),eP=eW.ref,eH=eW.inView,eZ=(a=(0,s.Z)(i().mark(function e(){var a,n,s,t,r;return i().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return null==M||null===(a=M.current)||void 0===a||a.updateOptions({intensity:30,traceLength:10,flickering:0,opacity:.7}),e.next=3,(0,z.g)(1e3);case 3:return null==M||null===(n=M.current)||void 0===n||n.updateOptions({intensity:100}),e.next=6,(0,z.g)(1500);case 6:return null==M||null===(s=M.current)||void 0===s||s.updateOptions({intensity:150}),e.next=9,(0,z.g)(2e3);case 9:return null==M||null===(t=M.current)||void 0===t||t.updateOptions({intensity:20}),e.next=12,(0,z.g)(2500);case 12:null==M||null===(r=M.current)||void 0===r||r.updateOptions({intensity:0});case 13:case"end":return e.stop()}},e)})),function(){return a.apply(this,arguments)});(0,N.useEffect)(function(){if(w){var e;null==M||null===(e=M.current)||void 0===e||e.start(),eZ()}},[w]),(0,N.useEffect)(function(){(W||ee)&&eZ()},[W,ee]);var eJ=new J.M().getYear()-1,eq=C.primera_fecha_casino,eX=C.top_proveedor,eK=C.primera_fecha_ad,e$=C.cantidad_deportes,e0=C.cantidad_competencias,e1=C.top_competencia,e2=C.top_equipo,e5=C.top_apuesta_cuota,e3=C.top_apuesta_seleccion,e8=C.top_culebra_selecciones,e4=C.top_culebra_cuota,e9=C.top_maquina_3,e7=C.top_maquina_2,e6=C.top_maquina_1,ae=C.top_deporte,aa=(0,T.Z)(G.q.min_width.desktopS),an=aa?f.src:u.src;return w?D?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(er,{}),(0,y.jsxs)(Q,{elementRef:k,children:[(0,y.jsxs)(et,{$scrollBardWidth:I,children:[(0,y.jsx)(ei,{loading:"lazy",src:A.src,alt:"izquierda",className:"izq"}),(0,y.jsx)(ei,{loading:"lazy",src:x.src,alt:"derecha",className:"der"})]}),(0,y.jsx)(P,{innerRef:Y,children:(0,y.jsx)("div",{})})]})]}):w&&0===Object.keys(C).length?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(er,{}),(0,y.jsxs)(Q,{elementRef:k,children:[(0,y.jsxs)(et,{$scrollBardWidth:I,children:[(0,y.jsx)(ei,{loading:"lazy",src:A.src,alt:"izquierda",className:"izq"}),(0,y.jsx)(ei,{loading:"lazy",src:x.src,alt:"derecha",className:"der"})]}),(0,y.jsxs)(P,{innerRef:Y,children:[(0,y.jsx)(en,{className:X()({desktop:aa}),children:(0,y.jsx)("img",{src:an,alt:""})}),(0,y.jsxs)(ec,{children:[(0,y.jsx)(_.Z.FadeUp,{delay:100,children:(0,y.jsx)("span",{className:"relevant",children:null==U?void 0:U.toUpperCase()})}),(0,y.jsxs)(el,{className:"session-but-not-values",children:[(0,y.jsx)("span",{className:"line not-values",children:"No tuvimos informaci\xf3n suficiente para mostrar tu resumen.\xa0"}),(0,y.jsx)("div",{className:"line not-values",children:"Te esperamos este 2024 para ajustar juntos."}),(0,y.jsx)("br",{}),(0,y.jsx)("div",{className:"line not-values",children:"Para ganar, hay que creer"})]})]})]})]})]}):(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(er,{}),(0,y.jsxs)(Q,{elementRef:k,children:[(0,y.jsxs)(et,{$scrollBardWidth:I,children:[(0,y.jsx)(ei,{loading:"lazy",src:A.src,alt:"izquierda",className:"izq"}),(0,y.jsx)(ei,{loading:"lazy",src:x.src,alt:"derecha",className:"der"})]}),(0,y.jsx)(es,{children:(0,y.jsx)("img",{loading:"lazy",src:o.src,alt:"",className:X()("competencia",{show:eh})})}),(0,y.jsx)(es,{children:(0,y.jsx)("img",{loading:"lazy",src:l.src,alt:"",className:X()("apuesta",{show:ev||em||ee})})}),(0,y.jsx)(es,{children:(0,y.jsx)("img",{loading:"lazy",src:m.src,alt:"",className:X()("competencia",{show:ew})})}),(0,y.jsx)(es,{children:(0,y.jsx)("img",{loading:"lazy",src:p.src,alt:"",className:X()("deportivas",{show:eO})})}),(0,y.jsx)(es,{children:(0,y.jsx)("img",{loading:"lazy",src:c.src,alt:"",className:X()("casino",{show:eD})})}),(0,y.jsx)(es,{children:(0,y.jsx)("img",{loading:"lazy",src:h.src,alt:"",className:X()("casino",{show:eU})})}),(0,y.jsx)(es,{children:(0,y.jsx)("img",{loading:"lazy",src:r.src,alt:"",className:X()("competencia",{show:ef})})}),(0,y.jsx)(es,{children:(0,y.jsx)("img",{loading:"lazy",src:g.src,alt:"",className:X()("primerjuegocasino",{show:eI})})}),(0,y.jsx)(es,{children:(0,y.jsx)("img",{loading:"lazy",src:j.src,alt:"",className:X()("proveedorcasino",{show:eB})})}),(0,y.jsx)(es,{children:(0,y.jsx)("img",{loading:"lazy",src:d.src,alt:"",className:X()("juegostop123",{show:eG||eQ||eH})})}),(0,y.jsx)(F.j,{ref:M,style:{top:0,left:0,width:"100%",height:"100%",position:"fixed",background:"transparent",zIndex:"-1"}}),U&&(0,y.jsxs)(P,{innerRef:Y,children:[(0,y.jsx)(en,{className:X()({desktop:aa}),children:(0,y.jsx)("img",{src:an,alt:""})}),(0,y.jsxs)(ec,{children:[(0,y.jsx)(_.Z.FadeUp,{delay:100,children:(0,y.jsx)("span",{className:"relevant",children:null==U?void 0:U.toUpperCase()})}),(0,y.jsxs)(el,{className:"default-init",children:[(0,y.jsx)("span",{className:"line1",children:"BIENVENIDO A TU"}),(0,y.jsxs)("span",{className:"line2",children:["RESUMEN ",(0,y.jsx)(B,{text:eJ})]}),(0,y.jsx)("span",{className:"line3",children:"DE APUESTA TOTAL"})]})]})]}),(0,y.jsx)(P,{innerRef:eR,children:(0,y.jsx)(ec,{children:(0,y.jsxs)(el,{className:"ad-init",children:[(0,y.jsx)("span",{className:"line1",children:"RECORDEMOS"}),(0,y.jsx)("span",{className:"line2",children:"C\xd3MO TE FUE CON LAS"}),(0,y.jsx)("span",{className:"line3",children:(0,y.jsx)(_.Z.FadeUp,{delay:100,children:(0,y.jsx)("span",{className:"relevant relevantSmall",children:"APUESTAS"})})}),(0,y.jsx)("span",{className:"line4",children:(0,y.jsx)(_.Z.FadeUp,{delay:100,children:(0,y.jsx)("span",{className:"relevant relevantSmall",children:"DEPORTIVAS"})})})]})})}),eK&&(0,y.jsxs)(P,{innerRef:eo,children:[(0,y.jsx)(O,{date:eK}),(0,y.jsx)(ec,{children:(0,y.jsxs)(el,{className:"ad-init",children:[(0,y.jsx)("span",{className:"line1",children:"FUE EL D\xcdA"}),(0,y.jsx)("span",{className:"line2",children:"DE TU PRIMERA"}),(0,y.jsx)("span",{className:"line3",children:(0,y.jsx)(_.Z.FadeUp,{delay:100,children:(0,y.jsx)("span",{className:"relevant relevantSmall",children:"APUESTA"})})}),(0,y.jsx)("span",{className:"line4",children:(0,y.jsx)(_.Z.FadeUp,{delay:100,children:(0,y.jsx)("span",{className:"relevant relevantSmall",children:"DEL A\xd1O"})})})]})})]}),e$&&ae&&(0,y.jsxs)(P,{innerRef:ex,children:[(0,y.jsx)(S,{text:ae}),(0,y.jsx)(ec,{children:Number(e$)>1?(0,y.jsxs)(el,{className:"ad-init at-deporte-favorito",children:[(0,y.jsxs)("span",{className:"line1",children:["FUE TU"," ",(0,y.jsx)(_.Z.FadeUp,{delay:100,children:(0,y.jsx)("span",{className:"relevant relevantSmall",children:"DEPORTE"})})]}),(0,y.jsxs)("span",{className:"line2",children:[(0,y.jsx)(_.Z.FadeUp,{delay:100,children:(0,y.jsx)("span",{className:"relevant relevantSmall",children:"FAVORITO"})}),(0,y.jsx)("span",{children:"ENTRE"})]}),(0,y.jsxs)("span",{className:"line3",children:["LOS ",e$," QUE JUGASTE"]})]}):(0,y.jsxs)(el,{className:X()("ad-init","at-deporte-favorito",{one:1===Number(e$)}),children:[(0,y.jsx)("span",{className:"line1",children:"ES TU FUERTE, Y EL"}),(0,y.jsx)("div",{className:"line2",children:(0,y.jsx)(_.Z.FadeUp,{delay:100,children:(0,y.jsx)("span",{className:"relevant relevantSmall",children:"\xdaNICO DEPORTE"})})}),(0,y.jsx)("span",{className:"line3",children:"AL QUE JUGASTE"})]})})]}),e1&&(0,y.jsxs)(P,{innerRef:eu,children:[(0,y.jsx)(S,{text:e1}),(0,y.jsx)(ec,{children:Number(1)>1?(0,y.jsxs)(el,{className:"ad-init at-deporte-favorito",children:[(0,y.jsxs)("span",{className:"line1",children:[(0,y.jsx)("span",{children:"FUE TU"}),(0,y.jsx)(_.Z.FadeUp,{delay:100,children:(0,y.jsx)("span",{className:"relevant relevantSmall",children:"COMPETENCIA"})})]}),(0,y.jsxs)("span",{className:"line2",children:[(0,y.jsx)(_.Z.FadeUp,{delay:100,children:(0,y.jsx)("span",{className:"relevant relevantSmall",children:"PREFERIDA"})})," ",(0,y.jsx)("span",{children:"ENTRE"})]}),(0,y.jsxs)("span",{className:"line3",children:["LAS ",e0," QUE JUGASTE"]})]}):(0,y.jsxs)(el,{className:"ad-init at-deporte-favorito",children:[(0,y.jsx)("span",{className:"line1",children:(0,y.jsx)("span",{children:"FUE TU"})}),(0,y.jsx)("span",{className:"line2",children:(0,y.jsx)(_.Z.FadeUp,{delay:100,children:(0,y.jsx)("span",{className:"relevant relevantSmall",children:"COMPETENCIA"})})}),(0,y.jsxs)("span",{className:"line3",children:[(0,y.jsx)(_.Z.FadeUp,{delay:100,children:(0,y.jsx)("span",{className:"relevant relevantSmall",children:"PREFERIDA"})})," "]})]})}),(0,y.jsxs)(b,{children:["Este ",eJ+1," explora otras ligas \xa1Sin miedo al \xe9xito, Sobrin@!"]})]}),e2&&(0,y.jsxs)(P,{innerRef:ej,children:[(0,y.jsx)(S,{text:e2}),(0,y.jsx)(ec,{children:(0,y.jsxs)(el,{className:"ad-init at-deporte-favorito ad-equipo-mas-presente",children:[(0,y.jsxs)("span",{className:"line1",children:[(0,y.jsx)("span",{children:"FUE EL"}),(0,y.jsx)(_.Z.FadeUp,{delay:100,children:(0,y.jsx)("span",{className:"relevant relevantSmall",children:"EQUIPO"})})]}),(0,y.jsx)("span",{className:"line2",children:(0,y.jsx)(_.Z.FadeUp,{delay:100,children:(0,y.jsx)("span",{className:"relevant relevantSmall",children:"M\xc1S PRESENTE"})})}),(0,y.jsx)("span",{className:"line3",children:"EN TUS SELECCIONES"}),(0,y.jsx)("span",{className:"line4",children:(0,y.jsx)(_.Z.FadeUp,{delay:100,children:(0,y.jsx)("span",{className:"relevant relevantSmall xss",children:"\xa1AJUSTASTE!"})})})]})})]}),Boolean(Number(e3))&&Boolean(Number(e5))&&(0,y.jsxs)(P,{innerRef:eE,children:[(0,y.jsx)(ec,{children:(0,y.jsxs)(el,{className:"ad-init at-deporte-favorito ad-equipo-mas-presente",children:[(0,y.jsxs)("span",{className:"line1",children:[(0,y.jsx)("span",{children:"TU"}),(0,y.jsx)(_.Z.FadeUp,{delay:100,children:(0,y.jsx)("span",{className:"relevant relevantSmall",children:"APUESTA"})})]}),(0,y.jsxs)("span",{className:"line2",children:[(0,y.jsx)(_.Z.FadeUp,{delay:100,children:(0,y.jsx)("span",{className:"relevant relevantSmall",children:"M\xc1S PREMIADA"})}),(0,y.jsx)("span",{children:"TUVO"})]})]})}),(0,y.jsx)("br",{}),(0,y.jsx)(S,{text:"".concat(e3," ").concat(Number(e3)>1?"SELECCIONES Y":"SELECCI\xd3N Y"," CUOTA ").concat(Number(e5).toFixed(2))}),(0,y.jsx)(ec,{children:(0,y.jsx)(el,{className:"ad-init at-deporte-favorito ad-equipo-mas-presente",children:(0,y.jsxs)("span",{className:"line",children:[(0,y.jsx)("span",{className:"relevant relevantSmall xss white",children:"BIEN JUGADO, SOBRIN@"}),(0,y.jsx)("br",{}),(0,y.jsx)("span",{className:"relevant relevantSmall xss white",children:"\xa1YA CAER\xc1S!"})]})})})]}),Boolean(Number(e8))&&Boolean(Number(e4))&&(0,y.jsxs)(P,{innerRef:eb,children:[(0,y.jsx)(ec,{children:(0,y.jsxs)(el,{className:"ad-init at-deporte-favorito ad-equipo-mas-presente",children:[(0,y.jsxs)("span",{className:"line1",children:[(0,y.jsx)("span",{children:"TU"}),(0,y.jsx)(_.Z.FadeUp,{delay:100,children:(0,y.jsx)("span",{className:"relevant relevantSmall",children:"CULEBRA "})})]}),(0,y.jsxs)("span",{className:"line2",children:[(0,y.jsx)(_.Z.FadeUp,{delay:100,children:(0,y.jsx)("span",{className:"relevant relevantSmall",children:"M\xc1S BRAVA"})}),(0,y.jsx)("span",{children:"TUVO"})]})]})}),(0,y.jsx)(S,{text:"".concat(e8," ").concat(Number(e8)>1?"SELECCIONES Y":"SELECCI\xd3N Y"," CUOTA ").concat(Number(e4).toFixed(2))}),(0,y.jsx)(ec,{children:(0,y.jsx)(el,{className:"ad-init at-deporte-favorito ad-equipo-mas-presente",children:(0,y.jsx)("span",{className:"line",children:(0,y.jsx)("span",{className:"relevant relevantSmall xss white",children:"\xa1TE LIGARON TODITITAS!"})})})})]}),(0,y.jsx)(P,{innerRef:e_,children:(0,y.jsx)(ec,{children:(0,y.jsxs)(el,{className:"ad-init",children:[(0,y.jsx)("span",{className:"line1",children:"RECORDEMOS"}),(0,y.jsx)("span",{className:"line2",children:"C\xd3MO TE FUE JUGANDO"}),(0,y.jsx)("span",{className:"line3",children:(0,y.jsx)(_.Z.FadeUp,{delay:100,children:(0,y.jsx)("span",{className:"relevant relevantSmall",children:"CASINO"})})})]})})}),eq&&(0,y.jsxs)(P,{innerRef:ez,children:[(0,y.jsx)(O,{date:eq}),(0,y.jsx)(ec,{children:(0,y.jsxs)(el,{className:"ad-init",children:[(0,y.jsx)("span",{className:"line1",children:"FUE EL D\xcdA"}),(0,y.jsx)("span",{className:"line2",children:"DE TU PRIMER"}),(0,y.jsx)("span",{className:"line4",children:(0,y.jsx)(_.Z.FadeUp,{delay:100,children:(0,y.jsx)("span",{className:"relevant relevantSmall",children:"JUEGO DEL A\xd1O"})})})]})})]}),eX&&(0,y.jsxs)(P,{innerRef:eT,children:[(0,y.jsx)(S,{text:eX}),(0,y.jsx)(ec,{children:(0,y.jsxs)(el,{children:[(0,y.jsx)("span",{className:"line",children:"FUE TU PROVEEDOR"}),(0,y.jsx)("span",{className:"line",children:"DE CASINO"}),(0,y.jsx)("span",{className:"line",children:(0,y.jsx)(_.Z.FadeUp,{delay:100,children:(0,y.jsx)("span",{className:"relevant relevantSmall",children:"M\xc1S JUGADO"})})})]})})]}),e9&&(0,y.jsxs)(P,{innerRef:eP,children:[(0,y.jsx)(S,{text:e9}),(0,y.jsxs)(ec,{children:[(0,y.jsxs)(el,{children:[(0,y.jsx)("span",{className:"line",children:"FUE TU TERCER JUEGO"}),(0,y.jsx)("span",{className:"line",children:"M\xc1S JUGADO"})]}),(0,y.jsx)(el,{className:"full-bottom",children:"\xa1SE LLEVA EL BRONCE!"})]})]}),e7&&(0,y.jsxs)(P,{innerRef:eY,children:[(0,y.jsx)(S,{text:e7}),(0,y.jsxs)(ec,{children:[(0,y.jsxs)(el,{children:[(0,y.jsx)("span",{className:"line",children:"FUE TU SEGUNDO JUEGO"}),(0,y.jsx)("span",{className:"line",children:"M\xc1S JUGADO"})]}),(0,y.jsx)(el,{className:"full-bottom",children:"\xa1SE LLEVA LA PLATA!"})]})]}),e6&&(0,y.jsxs)(P,{innerRef:ek,children:[(0,y.jsx)(S,{text:e6}),(0,y.jsxs)(ec,{children:[(0,y.jsxs)(el,{children:[(0,y.jsx)("span",{className:"line",children:"ES EL JUEGO CON EL QUE"}),(0,y.jsx)("span",{className:"line",children:"M\xc1S TE VACILASTE"})]}),(0,y.jsx)(el,{className:"full-bottom",children:"\xa1SE LLEVA EL ORO!"})]})]}),(0,y.jsx)(P,{innerRef:q,children:(0,y.jsx)(ec,{children:(0,y.jsxs)(el,{children:[(0,y.jsx)("span",{className:"relevant",children:null==U?void 0:U.toUpperCase()}),(0,y.jsx)("br",{}),(0,y.jsxs)("span",{className:"line",children:["QUE HAYAS PASADO UN GRAN A\xd1O NUEVO Y ESTE ",eJ+1," VENGA LLENO DE \xc9XITO Y AJUSTE."]}),(0,y.jsx)("br",{}),(0,y.jsx)("span",{className:"line",children:"PARA GANAR, HAY QUE CREER"})]})})})]})]}):(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(er,{}),(0,y.jsxs)(Q,{elementRef:k,children:[(0,y.jsxs)(et,{$scrollBardWidth:I,children:[(0,y.jsx)(ei,{loading:"lazy",src:A.src,alt:"izquierda",className:"izq"}),(0,y.jsx)(ei,{loading:"lazy",src:x.src,alt:"derecha",className:"der"})]}),(0,y.jsxs)(P,{innerRef:Y,children:[(0,y.jsx)(en,{className:X()({desktop:aa}),children:(0,y.jsx)("img",{src:an,alt:""})}),(0,y.jsx)(ec,{children:(0,y.jsx)(el,{className:"no-session",children:(0,y.jsxs)("span",{className:"line",children:["RESUMEN ",(0,y.jsx)(B,{text:eJ})]})})}),(0,y.jsx)(ea,{children:(0,y.jsx)(K.z,{onClick:v,children:"INICIA SESI\xd3N"})})]})]})]})},ea=w.default.div.withConfig({displayName:"Wrap2023Page__BottomCss",componentId:"sc-1rcyvmf-0"})(["display:grid;place-items:center;"]),en=w.default.div.withConfig({displayName:"Wrap2023Page__PortadaCss",componentId:"sc-1rcyvmf-1"})(["width:100%;margin:auto;display:flex;align-items:start;justify-content:center;> img{max-width:500px;transform:scale(1.5);}&.desktop{> img{max-width:600px;transform:scale(2.2);object-position:center 2rem;}}"]),es=w.default.div.withConfig({displayName:"Wrap2023Page__FondoIMGCss",componentId:"sc-1rcyvmf-2"})(["position:fixed;display:flex;justify-content:center;top:0;left:0;width:100%;height:100%;z-index:10;mix-blend-mode:color-burn;img{object-fit:cover;height:auto;width:auto;min-width :100%;}> *{transition:500ms;z-index:1;}.competencia,.primerjuegocasino{transform:scale(0);}.competencia.show,.primerjuegocasino.show{transform:scale(1);}.deporte,.casino,.proveedorcasino,.juegostop123{width:initial;opacity:0;object-fit:cover;}.deporte{margin-top:40vh;}.deporte.show,.casino.show,.proveedorcasino.show,.juegostop123.show{opacity:1;}.apuesta,.deportivas{transform:translateY(100%);}.deportivas{opacity:1;}.apuesta{opacity:1;}.apuesta.show,.deportivas.show{transform:translateX(0%);}"]),et=w.default.div.withConfig({displayName:"Wrap2023Page__AdornosIMGCss",componentId:"sc-1rcyvmf-3"})(["position:fixed;width:100vw;top:0;left:0;height:100vh;overflow:hidden;z-index:11;"]),ei=w.default.img.withConfig({displayName:"Wrap2023Page__AdornoIMG",componentId:"sc-1rcyvmf-4"})(["position:absolute;z-index:9;height:50vh;width:auto;&.izq{top:0;left:0;}&.der{bottom:0;right:0;}"]);(0,w.default)(D.j).withConfig({displayName:"Wrap2023Page__ScrollIndicatorCss",componentId:"sc-1rcyvmf-5"})(["&&{position:fixed;top:","px;z-index:20;width:calc(100% + 28px);transform:translateX(-14px);> .progress{height:10px;}}"],function(e){return e.$heightHeader});var er=(0,w.createGlobalStyle)(["footer{z-index:20 !important;display:none !important;}#wcx-chat{display:none;}#button-up{opacity:0;pointer-events:none;}#layout-default-at-apuesta{z-index:21;transition:200ms linear;}#layout-default-at-apuesta.hidden{transform:translateY(-50px);}.nowrap{white-space:nowrap;}.relevant{color:",";font-weight:900;font-size:5.4rem;font-style:italic;}.relevantSmall{font-size:3rem;}.xss{font-size:2rem;}.white{color:white;}.text-center{text-align:center;}"],function(e){return e.theme.secondary}),el=w.default.div.withConfig({displayName:"Wrap2023Page__SubtitleCss",componentId:"sc-1rcyvmf-6"})(["display:flex;flex-direction:column;align-items:center;justify-content:center;.line{text-align:center;max-width:600px;}&.full-bottom{margin-top:1rem;font-size:1.4rem;}&.at-deporte-favorito{.line1,.line2{display:flex;align-items:center;gap:1ch;}}&.ad-equipo-mas-presente{.line4{margin-top:3rem;}}&.default-init{.line1{margin-bottom:-1rem;}}&.no-session{font-size:clamp(4rem,2vw,7rem);span{font-size:clamp(4rem,2vw,7rem) !important;}}&.session-but-not-values{font-size:clamp(1.4rem,1.8vw,3.2rem);text-transform:uppercase;}"]),ec=w.default.div.withConfig({displayName:"Wrap2023Page__MiddleCss",componentId:"sc-1rcyvmf-7"})(["font-size:1.8rem;font-style:italic;transform:rotate(-6deg);margin-bottom:2.5rem;display:flex;flex-direction:column;justify-content:center;align-items:center;*{font-weight:700;font-family:Gobold;}"])}}]);