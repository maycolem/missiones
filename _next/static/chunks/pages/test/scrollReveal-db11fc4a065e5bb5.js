(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[418],{46574:function(e,i,t){"use strict";var o=t(35266),n=t(98216),r=t(90948),a=t(71657);let d=(0,o.Z)({createStyledComponent:(0,r.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver(e,i){let{ownerState:t}=e;return[i.root,i[`maxWidth${(0,n.Z)(String(t.maxWidth))}`],t.fixed&&i.fixed,t.disableGutters&&i.disableGutters]}}),useThemeProps:e=>(0,a.Z)({props:e,name:"MuiContainer"})});i.Z=d},35266:function(e,i,t){"use strict";t.d(i,{Z:function(){return q}});var o=t(63366),n=t(87462),r=t(67294),a=t(70828),d=t(14142),u=t(34867),s=t(94780),l=t(29628),c=t(13264),m=t(88647),p=t(85893);let x=["className","component","disableGutters","fixed","maxWidth","classes"],h=(0,m.Z)(),v=(0,c.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver(e,i){let{ownerState:t}=e;return[i.root,i[`maxWidth${(0,d.Z)(String(t.maxWidth))}`],t.fixed&&i.fixed,t.disableGutters&&i.disableGutters]}}),b=e=>(0,l.Z)({props:e,name:"MuiContainer",defaultTheme:h}),f=(e,i)=>{let t=e=>(0,u.ZP)(i,e),{classes:o,fixed:n,disableGutters:r,maxWidth:a}=e,l={root:["root",a&&`maxWidth${(0,d.Z)(String(a))}`,n&&"fixed",r&&"disableGutters"]};return(0,s.Z)(l,t,o)};function q(e={}){let{createStyledComponent:i=v,useThemeProps:t=b,componentName:d="MuiContainer"}=e,u=i(({theme:e,ownerState:i})=>(0,n.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!i.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}}),({theme:e,ownerState:i})=>i.fixed&&Object.keys(e.breakpoints.values).reduce((i,t)=>{let o=e.breakpoints.values[t];return 0!==o&&(i[e.breakpoints.up(t)]={maxWidth:`${o}${e.breakpoints.unit}`}),i},{}),({theme:e,ownerState:i})=>(0,n.Z)({},"xs"===i.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},i.maxWidth&&"xs"!==i.maxWidth&&{[e.breakpoints.up(i.maxWidth)]:{maxWidth:`${e.breakpoints.values[i.maxWidth]}${e.breakpoints.unit}`}})),s=r.forwardRef(function(e,i){let r=t(e),{className:s,component:l="div",disableGutters:c=!1,fixed:m=!1,maxWidth:h="lg"}=r,v=(0,o.Z)(r,x),b=(0,n.Z)({},r,{component:l,disableGutters:c,fixed:m,maxWidth:h}),q=f(b,d);return(0,p.jsx)(u,(0,n.Z)({as:l,ownerState:b,className:(0,a.Z)(q.root,s),ref:i},v))});return s}},10384:function(e,i,t){"use strict";t.d(i,{Z:function(){return x}});var o=t(59499),n=t(16835),r=t(67294),a=function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0px",t=(0,r.useState)(!1),o=t[0],a=t[1];return(0,r.useEffect)(function(){var t=new IntersectionObserver(function(e){(0,n.Z)(e,1)[0].isIntersecting&&(a(!0),t.disconnect())},{rootMargin:i});return e.current&&t.observe(e.current),function(){e.current&&t.unobserve(e.current)}},[o]),o},d=t(85893);function u(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);i&&(o=o.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,o)}return t}function s(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?u(Object(t),!0).forEach(function(i){(0,o.Z)(e,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))})}return e}var l,c,m,p=function(e){var i=e.from,t=e.to,o=e.children,n=e.delay,u=void 0===n?0:n,l=(0,r.useRef)(null),c=a(l),m={transition:"850ms ease-in-out ".concat(u>500?500:u,"ms")};return(0,d.jsx)("div",{ref:l,style:c?s(s({},m),t):s(s({},m),i),children:o})},x={FadeIn:function(e){var i=e.children;return(0,d.jsx)(p,{from:{opacity:0},to:{opacity:1},children:i})},FadeUp:function(e){var i=e.children,t=e.delay;return(0,d.jsx)(p,{from:{opacity:0,translate:"0 2rem"},to:{opacity:1,translate:"none"},delay:t,children:i})},ScaleIn:function(e){var i=e.children;return(0,d.jsx)(p,{from:{scale:"0"},to:{scale:"1"},children:i})}}},59945:function(e,i,t){"use strict";t.r(i);var o=t(10384),n=t(46574),r=t(23972),a=t(53918),d=t(85893),u=function(){return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(n.Z,{children:(0,d.jsxs)(s,{children:[(0,d.jsx)(o.Z.FadeIn,{children:(0,d.jsx)(r.Z,{variant:"h2",children:"FadeIn: Ad aliquip voluptate duis qui consequat tempor incididunt velit laboris laborum dolor aliquip do. Excepteur amet sunt tempor duis commodo id esse duis elit enim est minim cupidatat elit. Eu reprehenderit commodo quis anim incididunt et nostrud cupidatat dolore esse dolor ea eiusmod. Aute nulla commodo est ut exercitation exercitation sit labore veniam sit."})}),(0,d.jsx)(o.Z.FadeUp,{children:(0,d.jsx)(r.Z,{variant:"h2",children:"FadeUp: Ad aliquip voluptate duis qui consequat tempor incididunt velit laboris laborum dolor aliquip do. Excepteur amet sunt tempor duis commodo id esse duis elit enim est minim cupidatat elit. Eu reprehenderit commodo quis anim incididunt et nostrud cupidatat dolore esse dolor ea eiusmod. Aute nulla commodo est ut exercitation exercitation sit labore veniam sit."})}),(0,d.jsx)(o.Z.ScaleIn,{children:(0,d.jsx)(r.Z,{variant:"h2",children:"ScaleIn: Ad aliquip voluptate duis qui consequat tempor incididunt velit laboris laborum dolor aliquip do. Excepteur amet sunt tempor duis commodo id esse duis elit enim est minim cupidatat elit. Eu reprehenderit commodo quis anim incididunt et nostrud cupidatat dolore esse dolor ea eiusmod. Aute nulla commodo est ut exercitation exercitation sit labore veniam sit."})}),(0,d.jsx)(o.Z.FadeIn,{children:(0,d.jsx)(r.Z,{variant:"h2",children:"FadeIn: Ad aliquip voluptate duis qui consequat tempor incididunt velit laboris laborum dolor aliquip do. Excepteur amet sunt tempor duis commodo id esse duis elit enim est minim cupidatat elit. Eu reprehenderit commodo quis anim incididunt et nostrud cupidatat dolore esse dolor ea eiusmod. Aute nulla commodo est ut exercitation exercitation sit labore veniam sit."})}),(0,d.jsx)(o.Z.ScaleIn,{children:(0,d.jsx)(r.Z,{variant:"h2",children:"ScaleIn: Ad aliquip voluptate duis qui consequat tempor incididunt velit laboris laborum dolor aliquip do. Excepteur amet sunt tempor duis commodo id esse duis elit enim est minim cupidatat elit. Eu reprehenderit commodo quis anim incididunt et nostrud cupidatat dolore esse dolor ea eiusmod. Aute nulla commodo est ut exercitation exercitation sit labore veniam sit."})}),(0,d.jsx)(o.Z.FadeIn,{children:(0,d.jsx)(r.Z,{variant:"h2",children:"FadeIn: Ad aliquip voluptate duis qui consequat tempor incididunt velit laboris laborum dolor aliquip do. Excepteur amet sunt tempor duis commodo id esse duis elit enim est minim cupidatat elit. Eu reprehenderit commodo quis anim incididunt et nostrud cupidatat dolore esse dolor ea eiusmod. Aute nulla commodo est ut exercitation exercitation sit labore veniam sit."})}),(0,d.jsx)(o.Z.ScaleIn,{children:(0,d.jsx)(r.Z,{variant:"h2",children:"ScaleIn: Ad aliquip voluptate duis qui consequat tempor incididunt velit laboris laborum dolor aliquip do. Excepteur amet sunt tempor duis commodo id esse duis elit enim est minim cupidatat elit. Eu reprehenderit commodo quis anim incididunt et nostrud cupidatat dolore esse dolor ea eiusmod. Aute nulla commodo est ut exercitation exercitation sit labore veniam sit."})}),(0,d.jsx)(o.Z.ScaleIn,{children:(0,d.jsx)(r.Z,{variant:"h2",children:"ScaleIn: Ad aliquip voluptate duis qui consequat tempor incididunt velit laboris laborum dolor aliquip do. Excepteur amet sunt tempor duis commodo id esse duis elit enim est minim cupidatat elit. Eu reprehenderit commodo quis anim incididunt et nostrud cupidatat dolore esse dolor ea eiusmod. Aute nulla commodo est ut exercitation exercitation sit labore veniam sit."})}),(0,d.jsx)(o.Z.FadeIn,{children:(0,d.jsx)(r.Z,{variant:"h2",children:"FadeIn: Ad aliquip voluptate duis qui consequat tempor incididunt velit laboris laborum dolor aliquip do. Excepteur amet sunt tempor duis commodo id esse duis elit enim est minim cupidatat elit. Eu reprehenderit commodo quis anim incididunt et nostrud cupidatat dolore esse dolor ea eiusmod. Aute nulla commodo est ut exercitation exercitation sit labore veniam sit."})}),(0,d.jsx)(o.Z.FadeUp,{children:(0,d.jsx)(r.Z,{variant:"h2",children:"FadeUp: Ad aliquip voluptate duis qui consequat tempor incididunt velit laboris laborum dolor aliquip do. Excepteur amet sunt tempor duis commodo id esse duis elit enim est minim cupidatat elit. Eu reprehenderit commodo quis anim incididunt et nostrud cupidatat dolore esse dolor ea eiusmod. Aute nulla commodo est ut exercitation exercitation sit labore veniam sit."})}),(0,d.jsx)(o.Z.ScaleIn,{children:(0,d.jsx)(r.Z,{variant:"h2",children:"ScaleIn: Ad aliquip voluptate duis qui consequat tempor incididunt velit laboris laborum dolor aliquip do. Excepteur amet sunt tempor duis commodo id esse duis elit enim est minim cupidatat elit. Eu reprehenderit commodo quis anim incididunt et nostrud cupidatat dolore esse dolor ea eiusmod. Aute nulla commodo est ut exercitation exercitation sit labore veniam sit."})}),(0,d.jsx)(o.Z.ScaleIn,{children:(0,d.jsx)(r.Z,{variant:"h1",children:"Im Scale In"})})]})})})};i.default=u;var s=a.default.div.withConfig({displayName:"scrollReveal__Content",componentId:"sc-r15tzi-0"})(["padding:20px;"])},3108:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/test/scrollReveal",function(){return t(59945)}])}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=3108)}),_N_E=e.O()}]);