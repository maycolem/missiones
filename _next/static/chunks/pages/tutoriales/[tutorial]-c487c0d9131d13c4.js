(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5800],{14298:function(t,e,n){"use strict";n.d(e,{j:function(){return d}});var i=n(50029),r=n(87794),o=n.n(r),a=n(8621),s=n(11163);n(67294);var l=n(89583),c=n(53918),u=n(85893),d=function(t){var e,n,r,c=t.className,d=t.title,h=t.description_short,g=t.url,x=t.image,v=(0,s.useRouter)(),w=(e=(0,i.Z)(o().mark(function t(){return o().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.push({pathname:a.H["/tutoriales/[tutorial]"].url,query:{tutorial:g}});case 2:case"end":return t.stop()}},t)})),function(){return e.apply(this,arguments)}),_=(null==h?void 0:h.length)>60?"".concat(h.slice(0,60).trim(),"..."):h;return(0,u.jsxs)(f,{className:c,onClick:w,children:[(0,u.jsxs)(m,{children:[(0,u.jsx)("img",{className:"img__thumb",src:x,loading:"lazy",alt:"Imagen de ".concat(d)}),(0,u.jsx)("div",{className:"content__icon",children:(0,u.jsx)(l.gmG,{})})]}),(0,u.jsxs)(p,{children:[(0,u.jsx)("p",{className:"title",children:d}),(0,u.jsxs)("p",{className:"description",children:[_,(null==h?void 0:h.length)>10&&(0,u.jsx)("span",{className:"read-more",children:" ver m\xe1s"})]})]})]})},f=c.default.div.withConfig({displayName:"SingleTutorial__SingleTutorialCss",componentId:"sc-1xjnzu3-0"})(["display:flex;flex-direction:column;cursor:pointer;border-radius:1rem;min-height:100%;overflow:hidden;transition:all 0.3s ease-in-out;box-shadow:rgba(176,176,176,0.35) 0 2px 15px 0px;&:hover{box-shadow:rgba(102,102,102,0.35) 0px 10px 20px 0px;& .content__icon{transform:scale(1.2);background-color:",";& svg{color:",";}}}"],function(t){return t.theme.primary},function(t){return t.theme.background}),m=c.default.div.withConfig({displayName:"SingleTutorial__ThumbnailContainer",componentId:"sc-1xjnzu3-1"})(["overflow:hidden;position:relative;transition:all 0.3s ease-in-out;& .content__icon{position:absolute;height:35px;width:35px;margin:auto;left:0;right:0;top:30px;bottom:0;border-radius:50%;background-color:",";box-shadow:0 0 30px rgba(111,111,111,0.5);display:flex;justify-content:center;align-items:center;overflow:hidden;transition:250ms;& svg{color:",";margin-left:2px;}}"],function(t){return t.theme.background},function(t){return t.theme.primary}),p=c.default.div.withConfig({displayName:"SingleTutorial__CardContent",componentId:"sc-1xjnzu3-2"})(["flex:1;background:",";padding:1rem;display:flex;flex-direction:column;& .title{font-weight:500;color:#333;font-size:clamp(0.85rem,1.2vw,1rem);margin-bottom:0.5rem;}& .description{color:#666;font-size:clamp(0.75rem,1vw,0.95rem);"," & .read-more{color:",";font-weight:500;}}"],function(t){return t.theme.background},(0,c.css)(["overflow:hidden;-webkit-line-clamp:",";display:-webkit-box;-webkit-box-orient:vertical;text-overflow:ellipsis;"],4),function(t){return t.theme.primary})},35199:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return E},default:function(){return B}});var i=n(10253),r=n(9e4),o=n(84225),a=n(73710),s=n.n(a),l=n(70804);n(85278);var c=n(53918),u=n(50029),d=n(87794),f=n.n(d),m=n(85260),p=n(67294),h=function(){var t=(0,p.useState)(!1),e=t[0],n=t[1],i=(0,p.useState)(!1),r=i[0],o=i[1],a=(0,p.useRef)(null);(0,p.useEffect)(function(){var t,e=function(){if(a.current){var t=a.current,e=t.scrollLeft,i=t.scrollWidth,r=t.clientWidth;n(e>200),o(e<i-r-50)}},i=function(){return e()};return(t=(0,u.Z)(f().mark(function t(){var n;return f().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,m.g)(500);case 2:n=document.getElementById("scroll-video-container"),a.current=n,a.current&&(e(),a.current.addEventListener("scroll",i));case 5:case"end":return t.stop()}},t)})),function(){return t.apply(this,arguments)})(),function(){var t;null===(t=a.current)||void 0===t||t.removeEventListener("scroll",i)}},[]);var s=function(t){if(a.current){var e=a.current,n=e.scrollLeft,i=e.clientWidth/3;a.current.scrollTo({top:0,left:n+("right"===t?i:-i),behavior:"smooth"})}};return{showButtonLeft:e,showButtonRight:r,handleScrollLeft:function(){return s("left")},handleScrollRight:function(){return s("right")},ref:a}},g=n(14298),x=n(85893),v=function(t){var e=t.tutorials,n=h(),i=n.showButtonLeft,r=n.showButtonRight,o=n.handleScrollLeft,a=n.handleScrollRight;return(0,x.jsxs)(w,{children:[i&&(0,x.jsx)(k,{className:"left",onClick:o,children:(0,x.jsx)("span",{children:"<"})}),r&&(0,x.jsx)(k,{className:"right",onClick:a,children:(0,x.jsx)("span",{children:">"})}),(0,x.jsx)(_,{id:"scroll-video-container",children:(0,x.jsx)(b,{children:e.map(function(t){var e=t.title,n=t.description_short,i=t.url,r=t.image;return(0,x.jsx)(j,{children:(0,x.jsx)(g.j,{description_short:n,url:i,image:r,title:e})},"tutorial-".concat(i))})})})]})},w=c.default.div.withConfig({displayName:"ListTutorials__ListTutorialsCss",componentId:"sc-88nem5-0"})(["position:relative;"]),_=(0,c.default)(l.ZP).withConfig({displayName:"ListTutorials__StyledScrollContainer",componentId:"sc-88nem5-1"})(["&&{position:relative;padding-left:1rem;padding-right:30px;padding-bottom:14px;display:flex;gap:0.8rem;min-width:100%;","{padding-right:calc(50px + 14px);}}"],o.q.min_width.desktopS),b=c.default.div.withConfig({displayName:"ListTutorials__StyledScrollContents",componentId:"sc-88nem5-2"})(["display:flex;gap:1.5rem;"]),j=c.default.div.withConfig({displayName:"ListTutorials__StyledScrollContentContent",componentId:"sc-88nem5-3"})(["flex:1 1 25%;min-width:250px;position:relative;"]),y=c.default.div.withConfig({displayName:"ListTutorials__ButtonArrow",componentId:"sc-88nem5-4"})(["position:absolute;height:calc(100% - 14px);right:0px;z-index:10;top:0;display:flex;align-items:center;justify-content:center;color:",";font-weight:500;cursor:pointer;transition:250ms;background:",";backdrop-filter:blur(8px);width:30px;font-size:2.2rem;","{width:50px;font-size:calc(3rem + 1vw);&:hover{span{transform:scaleY(1.5) scaleX(1.3);}}}"],function(t){return t.theme.primary},function(t){var e=t.theme;return s()(e.background,.5)},o.q.min_width.desktopS),k=(0,c.default)(y).withConfig({displayName:"ListTutorials__ButtonArrowCss",componentId:"sc-88nem5-5"})(["&&{&.left{left:0px;right:initial;}span{transition:150ms;transform:scaleY(1.2);}}"]),C=n(43906),N=n(40111),S=n(5152),T=n.n(S),L=n(11163),I=T()(function(){return n.e(3716).then(n.bind(n,33716))},{ssr:!1,loadableGenerated:{webpack:function(){return[33716]}}}),z=T()(function(){return Promise.all([n.e(4111),n.e(633)]).then(n.bind(n,90633))},{ssr:!1,loadableGenerated:{webpack:function(){return[90633]}}}),E=!0,B=function(t){var e,n=t.tutorial,o=(0,L.useRouter)(),a=(null==o?void 0:null===(e=o.query)||void 0===e?void 0:e.tutorial)||"",s=a.split("-").join(" ");return(0,r.r)({PageURL:window.location.href,PageTitle:"Tutoriales | ".concat(s),PageCategory:"Tutoriales"}),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(i.h,{canonical:"/tutoriales/".concat(a),title:"Tutoriales | ".concat(s),children:[(0,x.jsx)("div",{id:"fb-root"}),(0,x.jsx)("script",{async:!0,crossOrigin:"anonymous",defer:!0,nonce:"e7vAu8BV",src:"https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v15.0"})]}),(0,x.jsx)(R,{children:(0,x.jsxs)(N.v,{children:[(0,x.jsx)(I,{}),(0,x.jsx)(z,{tutorial:n}),(0,x.jsx)("h2",{children:"Tutoriales relacionados"}),(0,x.jsx)(v,{tutorials:C.I})]})})]})},R=c.default.div.withConfig({displayName:"tutorial__MainContentCss",componentId:"sc-ih46sg-0"})(["position:relative;margin-inline:-14px;background:",";& h2{padding:2rem 1rem;font-size:clamp(1.2rem,1.5vw,1.4rem);font-weight:600;","{font-size:1.5rem;padding:2rem 1rem;}}"],function(t){return t.theme.alternative},o.q.min_width.desktopS)},66561:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tutoriales/[tutorial]",function(){return n(35199)}])}},function(t){t.O(0,[962,9774,2888,179],function(){return t(t.s=66561)}),_N_E=t.O()}]);