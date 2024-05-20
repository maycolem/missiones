(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8550],{32866:function(e,n,t){"use strict";t.d(n,{B:function(){return i}});var a=t(67294),r=t(87536),i=function(e){var n=e.as,t=e.errors,i=e.name,o=e.message,s=e.render,d=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n.indexOf(t=i[a])>=0||(r[t]=e[t]);return r}(e,["as","errors","name","message","render"]),l=(0,r.Gc)(),c=(0,r.U2)(t||l.formState.errors,i);if(!c)return null;var u=c.message,m=c.types,f=Object.assign({},d,{children:u||o});return a.isValidElement(n)?a.cloneElement(n,f):s?s({message:u||o,messages:m}):a.createElement(n||a.Fragment,f)}},63345:function(e,n,t){"use strict";t.d(n,{Z:function(){return p}});var a={lessThanXSeconds:{one:"menos de un segundo",other:"menos de {{count}} segundos"},xSeconds:{one:"1 segundo",other:"{{count}} segundos"},halfAMinute:"medio minuto",lessThanXMinutes:{one:"menos de un minuto",other:"menos de {{count}} minutos"},xMinutes:{one:"1 minuto",other:"{{count}} minutos"},aboutXHours:{one:"alrededor de 1 hora",other:"alrededor de {{count}} horas"},xHours:{one:"1 hora",other:"{{count}} horas"},xDays:{one:"1 d\xeda",other:"{{count}} d\xedas"},aboutXWeeks:{one:"alrededor de 1 semana",other:"alrededor de {{count}} semanas"},xWeeks:{one:"1 semana",other:"{{count}} semanas"},aboutXMonths:{one:"alrededor de 1 mes",other:"alrededor de {{count}} meses"},xMonths:{one:"1 mes",other:"{{count}} meses"},aboutXYears:{one:"alrededor de 1 a\xf1o",other:"alrededor de {{count}} a\xf1os"},xYears:{one:"1 a\xf1o",other:"{{count}} a\xf1os"},overXYears:{one:"m\xe1s de 1 a\xf1o",other:"m\xe1s de {{count}} a\xf1os"},almostXYears:{one:"casi 1 a\xf1o",other:"casi {{count}} a\xf1os"}},r=function(e,n,t){var r,i=a[e];return(r="string"==typeof i?i:1===n?i.one:i.other.replace("{{count}}",n.toString()),null!=t&&t.addSuffix)?t.comparison&&t.comparison>0?"en "+r:"hace "+r:r},i=t(49526),o={date:(0,i.Z)({formats:{full:"EEEE, d 'de' MMMM 'de' y",long:"d 'de' MMMM 'de' y",medium:"d MMM y",short:"dd/MM/y"},defaultWidth:"full"}),time:(0,i.Z)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,i.Z)({formats:{full:"{{date}} 'a las' {{time}}",long:"{{date}} 'a las' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},s={lastWeek:"'el' eeee 'pasado a la' p",yesterday:"'ayer a la' p",today:"'hoy a la' p",tomorrow:"'ma\xf1ana a la' p",nextWeek:"eeee 'a la' p",other:"P"},d={lastWeek:"'el' eeee 'pasado a las' p",yesterday:"'ayer a las' p",today:"'hoy a las' p",tomorrow:"'ma\xf1ana a las' p",nextWeek:"eeee 'a las' p",other:"P"},l=function(e,n,t,a){return 1!==n.getUTCHours()?d[e]:s[e]},c=t(88486),u={ordinalNumber:function(e,n){return Number(e)+"\xba"},era:(0,c.Z)({values:{narrow:["AC","DC"],abbreviated:["AC","DC"],wide:["antes de cristo","despu\xe9s de cristo"]},defaultWidth:"wide"}),quarter:(0,c.Z)({values:{narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1\xba trimestre","2\xba trimestre","3\xba trimestre","4\xba trimestre"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,c.Z)({values:{narrow:["e","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"],wide:["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]},defaultWidth:"wide"}),day:(0,c.Z)({values:{narrow:["d","l","m","m","j","v","s"],short:["do","lu","ma","mi","ju","vi","s\xe1"],abbreviated:["dom","lun","mar","mi\xe9","jue","vie","s\xe1b"],wide:["domingo","lunes","martes","mi\xe9rcoles","jueves","viernes","s\xe1bado"]},defaultWidth:"wide"}),dayPeriod:(0,c.Z)({values:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"ma\xf1ana",afternoon:"tarde",evening:"tarde",night:"noche"},abbreviated:{am:"AM",pm:"PM",midnight:"medianoche",noon:"mediodia",morning:"ma\xf1ana",afternoon:"tarde",evening:"tarde",night:"noche"},wide:{am:"a.m.",pm:"p.m.",midnight:"medianoche",noon:"mediodia",morning:"ma\xf1ana",afternoon:"tarde",evening:"tarde",night:"noche"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"de la ma\xf1ana",afternoon:"de la tarde",evening:"de la tarde",night:"de la noche"},abbreviated:{am:"AM",pm:"PM",midnight:"medianoche",noon:"mediodia",morning:"de la ma\xf1ana",afternoon:"de la tarde",evening:"de la tarde",night:"de la noche"},wide:{am:"a.m.",pm:"p.m.",midnight:"medianoche",noon:"mediodia",morning:"de la ma\xf1ana",afternoon:"de la tarde",evening:"de la tarde",night:"de la noche"}},defaultFormattingWidth:"wide"})},m=t(60974),f=t(76723),h={ordinalNumber:(0,m.Z)({matchPattern:/^(\d+)(º)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,f.Z)({matchPatterns:{narrow:/^(ac|dc|a|d)/i,abbreviated:/^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,wide:/^(antes de cristo|antes de la era com[uú]n|despu[eé]s de cristo|era com[uú]n)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^ac/i,/^dc/i],wide:[/^(antes de cristo|antes de la era com[uú]n)/i,/^(despu[eé]s de cristo|era com[uú]n)/i]},defaultParseWidth:"any"}),quarter:(0,f.Z)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^[1234](º)? trimestre/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,f.Z)({matchPatterns:{narrow:/^[efmajsond]/i,abbreviated:/^(ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic)/i,wide:/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^e/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^en/i,/^feb/i,/^mar/i,/^abr/i,/^may/i,/^jun/i,/^jul/i,/^ago/i,/^sep/i,/^oct/i,/^nov/i,/^dic/i]},defaultParseWidth:"any"}),day:(0,f.Z)({matchPatterns:{narrow:/^[dlmjvs]/i,short:/^(do|lu|ma|mi|ju|vi|s[áa])/i,abbreviated:/^(dom|lun|mar|mi[ée]|jue|vie|s[áa]b)/i,wide:/^(domingo|lunes|martes|mi[ée]rcoles|jueves|viernes|s[áa]bado)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^j/i,/^v/i,/^s/i],any:[/^do/i,/^lu/i,/^ma/i,/^mi/i,/^ju/i,/^vi/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:(0,f.Z)({matchPatterns:{narrow:/^(a|p|mn|md|(de la|a las) (mañana|tarde|noche))/i,any:/^([ap]\.?\s?m\.?|medianoche|mediodia|(de la|a las) (mañana|tarde|noche))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mn/i,noon:/^md/i,morning:/mañana/i,afternoon:/tarde/i,evening:/tarde/i,night:/noche/i}},defaultParseWidth:"any"})},p={code:"es",formatDistance:r,formatLong:o,formatRelative:l,localize:u,match:h,options:{weekStartsOn:1,firstWeekContainsDate:1}}},9117:function(e,n,t){"use strict";t.d(n,{b:function(){return l}});var a=t(83452),r=t(92044),i=t(67294),o=t(53918),s=t(85893),d=i.memo(function(e){var n=e.cat,t=e.time;return(0,r.y)(t).isStayed?(0,s.jsx)(c,{children:(0,s.jsx)("iframe",{src:"https://11210665.fls.doubleclick.net/activityi;src=11210665;type=ma_aptot;cat=".concat(n,";ord=").concat((0,a.L)(),"?"),title:"Floodlight"})}):null}),l=function(e){var n=e.floods;return(0,s.jsx)(s.Fragment,{children:n.map(function(e,n){return(0,s.jsx)(d,{cat:e.cat,time:e.time},n)})})},c=o.default.div.withConfig({displayName:"Floodlights__Styled",componentId:"sc-owntef-0"})(["position:absolute;left:-300%;opacity:0;pointer-events:none;visibility:hidden;width:0;height:0;"])},83452:function(e,n,t){"use strict";t.d(n,{L:function(){return a}});var a=function(){return 1e13*Math.random()}},92044:function(e,n,t){"use strict";t.d(n,{y:function(){return r}});var a=t(67294),r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2e4,n=(0,a.useState)(!1),t=n[0],r=n[1];return(0,a.useEffect)(function(){var n=setTimeout(function(){r(!0)},e);return function(){clearTimeout(n)}},[]),{isStayed:t}}},44290:function(e,n,t){"use strict";t.r(n);var a=t(16835),r=t(59499),i=t(50029),o=t(4730),s=t(87794),d=t.n(s),l=t(10253),c=t(32561),u=t(9117),m=t(73403),f=t(32866),h=t(2817),p=t(84778),x=t(93222),g=t(17673),b=t(91921),v=t(86841),j=t(87764),A=t(83530),_=t(68921),y=t(37249),w=t(20527),C=t(55263),N=t(47220),k=t(53640),M=t(20847),Z=t(45993),E=t(68061),W=t(63931),I=t(65600),P=t(7631),T=t(84225),Q=t(94184),B=t.n(Q),O=t(6767),S=t.n(O),z=t(98787),D=t(87979),q=t(19794),L=t(6799),F=t(59106),V=t(75734),H=t(8189),G=t(87751),R=t(47583),X=t(67294),U=t(87536),K=t(77058),Y=t(5434),J=t(53918),$=t(85893),ee=["agent_shop","preferences"],en=["error"];function et(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,a)}return t}function ea(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?et(Object(t),!0).forEach(function(n){(0,r.Z)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):et(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var er=function(){var e=c.Z.src,n=(0,K.$)().t,t=(0,L.e)({autoHideDuration:1e4}).enqueue,r=(0,w.c)(),s=r.validateDniAndNames,E=r.validateDniMenor,W=(0,h.Z)(T.q.min_width.tabletS),Q=(0,P.wb)({typePromotions:"default"}).data,O=(0,X.useRef)();C.fK.agent_shop,C.fK.preferences;var S=(0,o.Z)(C.fK,ee),F=(0,y.m)({schema:S,formRef:O,useFormProps:{defaultValues:{agent:""}}}),H=F.firstError,J=F.isError,et=F.isSuccess,er=F.onSubmit,ei=F.focusInput,ep=F.useFormObject,ex=ep.watch,eg=ep.formState,eb=ep.control,ev=ep.setValue,ej=ep.resetField,eA=ep.handleSubmit,e_=eg.errors,ey=eg.isSubmitting,ew=ex("national_id_type"),eC=ex("national_id"),eN=ex("state"),ek=ex("province"),eM=ex("city"),eZ=ex("firstname"),eE=ex("lastname"),eW=ex("email"),eI=ex("mobile"),eP=(0,P.BA)({fragment:"INCIDENCIAREGISTRO",session:""}).data,eT=(0,N.ab)(null).data,eQ=(0,N.$5)({state:eN}).data,eB=(0,N.tu)({state:eN,province:ek}).data,eO=(0,_.n)(n,ev),eS=eO.domainConfirm,ez=eO.countEmailCode,eD=eO.countMobileCode,eq=eO.generateCodeMobile,eL=eO.modalOpen,eF=eO.setModalOpen,eV=(0,X.useState)(!1),eH=eV[0],eG=eV[1],eR=(0,X.useState)(""),eX=eR[0],eU=eR[1];(0,X.useEffect)(function(){"DNI"===ew&&ev("nationality",m.si)},[ew]),(0,X.useEffect)(function(){(null==eQ?void 0:eQ.find(function(e){return e.province===ek}))||(ej("province"),ej("city"))},[eQ,ek]),(0,X.useEffect)(function(){(null==eB?void 0:eB.find(function(e){return e.city===eM}))||ej("city")},[eB,eM]);var eK,eY,eJ,e$,e0,e1=function(){return eF(!1)},e2=(eK=(0,i.Z)(d().mark(function e(){var n;return d().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("DNI"!==ew){e.next=5;break}return e.next=3,s({firstname:eZ,lastname:eE,national_id:eC});case 3:!(null!=(n=e.sent)&&n.isValid)&&(null==n?void 0:n.html)&&t(null==n?void 0:n.html,"error");case 5:case"end":return e.stop()}},e)})),function(){return eK.apply(this,arguments)}),e3=(eY=(0,i.Z)(d().mark(function e(){return d().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!eX){e.next=6;break}return e.next=3,eS(eW,eZ,eX);case 3:eF(!1),e.next=7;break;case 6:t("Ocurrio un error inesperado","error");case 7:case"end":return e.stop()}},e)})),function(){return eY.apply(this,arguments)}),e5=(eJ=(0,i.Z)(d().mark(function e(){return d().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:eZ||ei("firstname"),eW||ei("email"),!e_.email&&eZ&&eW&&eF(!0);case 3:case"end":return e.stop()}},e)})),function(){return eJ.apply(this,arguments)}),e4=(e$=(0,i.Z)(d().mark(function e(){return d().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(eZ||ei("firstname"),eI||ei("mobile"),e.t0=!e_.mobile&&eI&&eZ,!e.t0){e.next=6;break}return e.next=6,eq(eI,eZ);case 6:case"end":return e.stop()}},e)})),function(){return e$.apply(this,arguments)}),e6=(e0=(0,i.Z)(d().mark(function e(){var n,t,a;return d().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,I.Mj)({email:eW});case 2:eU(null==(t=e.sent)?void 0:null===(n=t.result)||void 0===n?void 0:n.hash);case 5:case"end":return e.stop()}},e)})),function(){return e0.apply(this,arguments)});return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(l.b,{}),(0,$.jsx)(u.b,{floods:[{cat:"apt_btrg",time:0}]}),(0,$.jsx)(ef,{children:(0,$.jsx)(eh,{$imgURL:e,children:(0,$.jsxs)("div",{className:"wrapper",children:[(0,$.jsx)(q.B,{position:"absolute",maxSnack:2}),(0,$.jsx)(x.j,{open:eL,email:eW,onClose:e1,onClickCancel:e1,onClickConfirm:e3}),(0,$.jsxs)("div",{className:"wrapper-relative",children:[eP&&(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(z.b,{severity:"warning",children:(0,$.jsx)(V.y,{text:(0,R.OQ)(eP)})}),(0,$.jsx)("br",{})]}),(0,$.jsx)("h1",{children:"REG\xcdSTRATE AQU\xcd"}),(0,$.jsxs)("form",{onSubmit:eA(er),ref:O,children:[(0,$.jsx)(U.Qr,{name:"national_id_type",control:eb,rules:{required:!0},render:function(e){var n=e.field;return n.onChange=function(e){ev("national_id","",{shouldValidate:!0}),ev("national_id_type",e.target.value,{shouldValidate:!0,shouldTouch:!0,shouldDirty:!0})},(0,$.jsx)("div",{className:n.name,children:(0,$.jsx)(ec,ea(ea({label:"Tipo de documento",error:J(n.name),success:et(n.name)},n),{},{children:null===v.vc||void 0===v.vc?void 0:v.vc.map(function(e){return(0,$.jsx)(eu,{value:e.value,children:e.label},e.value)})}))})}}),(0,$.jsx)(U.Qr,{name:"national_id",control:eb,render:function(e){var n=e.field;return n.onBlur=(0,i.Z)(d().mark(function e(){var n;return d().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(eC){e.next=2;break}return e.abrupt("return");case 2:if(!("DNI"!==ew)){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,E({national_id:eC});case 6:null!=(n=e.sent)&&n.isValid||((null==n?void 0:n.html)&&t(null==n?void 0:n.html,"error"),ev("national_id","",{shouldValidate:!0}));case 8:case"end":return e.stop()}},e)})),(0,$.jsx)("div",{className:n.name,children:(0,$.jsx)(k.Z,{fullWidth:!0,children:(0,$.jsx)(el,ea({fullWidth:!0,className:B()({textfield__error:e_[n.name]}),success:et(n.name),label:"N\xfamero de documento",variant:"outlined",hiddenLabel:!0,inputProps:{inputMode:"numeric",pattern:"[0-9]*"},disabled:Boolean(!ex("national_id_type")),helperText:H[n.name]?H[n.name].message:"",onKeyPress:"DNI"===ew?function(e){return(0,A.W)(e,ex(n.name),8)}:void 0},n))})})}}),"DNI"!==ew&&ew&&(0,$.jsx)(U.Qr,{name:"nationality",control:eb,rules:{required:!0},render:function(e){var n=e.field;return(0,$.jsx)("div",{className:n.name,children:(0,$.jsx)(ec,ea(ea({label:"Nacionalidad",error:J(n.name),success:et(n.name)},n),{},{children:j.o.map(function(e){return(0,$.jsx)(eu,{value:e.country,children:e.name},e.isd)})}))})}}),W?(0,$.jsx)(k.Z,{className:"tablets__helpertext",children:(0,$.jsx)(z.b,{severity:"info",children:(0,$.jsxs)("div",{children:["Ingresa tus ",(0,$.jsx)("strong",{children:"nombres"})," y ",(0,$.jsx)("strong",{children:"apellidos"})," exactamente como se muestran en tu ",(0,$.jsx)("strong",{children:"documento"}),"."]})})}):null,(0,$.jsx)(U.Qr,{name:"firstname",control:eb,render:function(e){var n=e.field;return(0,$.jsx)("div",{className:n.name,children:(0,$.jsx)(k.Z,{fullWidth:!0,children:(0,$.jsx)(el,ea({fullWidth:!0,className:B()({textfield__error:e_[n.name]}),success:et(n.name),label:W?"Nombres":"Nombres (Igual a como est\xe1n en tu documento)",variant:"outlined",hiddenLabel:!0,helperText:H[n.name]?H[n.name].message:""},n))})})}}),(0,$.jsx)(U.Qr,{name:"lastname",control:eb,render:function(e){var n=e.field;return(0,$.jsx)("div",{className:n.name,children:(0,$.jsx)(k.Z,{fullWidth:!0,children:(0,$.jsx)(el,ea(ea({fullWidth:!0,className:B()({textfield__error:e_[n.name]}),success:et(n.name),label:W?"Apellidos":"Apellidos (Igual a como est\xe1n en tu documento)",variant:"outlined",hiddenLabel:!0,helperText:H[n.name]?H[n.name].message:""},n),{},{onBlur:e2}))})})}}),(0,$.jsx)(U.Qr,{name:"birthday",control:eb,render:function(e){var n=e.field;return(0,$.jsx)("div",{className:n.name,children:(0,$.jsx)(em,{fullWidth:!0,children:(0,$.jsx)(p.Y,ea({renderInput:function(e){e.error;var t=(0,o.Z)(e,en);return(0,$.jsx)(el,ea({success:et(n.name),fullWidth:!0,className:B()(n.name,{textfield__error:e_[n.name]}),label:"Fecha de nacimiento",variant:"outlined",hiddenLabel:!0,helperText:H[n.name]?H[n.name].message:"",name:n.name},t))}},n))})})}}),(0,$.jsx)(U.Qr,{name:"gender",control:eb,rules:{required:!0},render:function(e){var n=e.field;return(0,$.jsx)("div",{className:n.name,children:(0,$.jsx)(ec,ea(ea({label:"G\xe9nero",error:J(n.name),success:et(n.name)},n),{},{children:null===v.xG||void 0===v.xG?void 0:v.xG.map(function(e){return(0,$.jsx)(eu,{value:e.value,children:e.label},e.value)})}))})}}),(0,$.jsx)(U.Qr,{name:"email",control:eb,render:function(e){var n=e.field;return(0,$.jsx)("div",{className:n.name,children:(0,$.jsx)(k.Z,{fullWidth:!0,children:(0,$.jsx)(el,ea(ea({fullWidth:!0,className:B()({textfield__error:e_[n.name]}),success:et(n.name),label:"Correo electr\xf3nico (te enviaremos un c\xf3digo)",variant:"outlined",hiddenLabel:!0,helperText:H[n.name]?H[n.name].message:""},n),{},{onBlur:e_[n.name]?void 0:(0,i.Z)(d().mark(function e(){return d().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,e6();case 2:case"end":return e.stop()}},e)}))}))})})}}),(0,$.jsx)("div",{className:"email_code_button",children:(0,$.jsx)(G.E.div,{className:"button",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:(0,$.jsx)(G.E.div,{whileTap:{scale:.8},children:(0,$.jsx)(D.z,{loading:ey,type:"button",size:"small",color:ez>-1?"default":"info",disabled:ez>-1,onClick:e5,children:ez>-1?ez:"Generar c\xf3digo email"})})})}),(0,$.jsx)(U.Qr,{name:"email_code",control:eb,render:function(e){var n=e.field;return(0,$.jsx)("div",{className:n.name,children:(0,$.jsx)(k.Z,{fullWidth:!0,children:(0,$.jsx)(el,ea({fullWidth:!0,className:B()({textfield__error:e_[n.name]}),success:et(n.name),label:"C\xf3digo",variant:"outlined",hiddenLabel:!0,disabled:Boolean(!ex("email")),helperText:H[n.name]?H[n.name].message:"",inputProps:{inputMode:"numeric",pattern:"[0-9]*",maxLength:6},onKeyPress:function(e){/[0-9]/.test(e.key)||e.preventDefault()}},n))})})}}),(0,$.jsx)(U.Qr,{name:"password",control:eb,render:function(e){var n=e.field;return(0,$.jsx)("div",{className:n.name,children:(0,$.jsx)(k.Z,{fullWidth:!0,children:(0,$.jsx)(el,ea({fullWidth:!0,className:B()(n.name,{textfield__error:e_[n.name]}),success:et(n.name),label:"Contrase\xf1a",variant:"outlined",hiddenLabel:!0,disabled:Boolean(!ex("email")||!ex("email_code")),helperText:(0,$.jsx)(f.B,{errors:H,name:n.name,render:function(e){var n=e.messages;return n&&Object.entries(n).map(function(e){var n=(0,a.Z)(e,2),t=n[0],r=n[1];return(0,$.jsx)("p",{children:r},t)})}}),type:eH?"text":"password",InputProps:{endAdornment:(0,$.jsx)(ed,{onClick:function(){return eG(!eH)},children:eH?(0,$.jsx)(Y.t2l,{}):(0,$.jsx)(Y.wqE,{})})}},n))})})}}),(0,$.jsx)(U.Qr,{name:"confirm_password",control:eb,render:function(e){var n=e.field;return(0,$.jsx)("div",{className:n.name,children:(0,$.jsx)(k.Z,{fullWidth:!0,children:(0,$.jsx)(el,ea({fullWidth:!0,className:B()(n.name,{textfield__error:e_[n.name]}),success:et(n.name),label:"Confirmar contrase\xf1a",variant:"outlined",hiddenLabel:!0,disabled:Boolean(!ex("email")||!ex("password")),helperText:(0,$.jsx)(f.B,{errors:H,name:n.name,render:function(e){var n=e.messages;return n&&Object.entries(n).map(function(e){var n=(0,a.Z)(e,2),t=n[0],r=n[1];return(0,$.jsx)("p",{children:r},t)})}}),type:eH?"text":"password",InputProps:{endAdornment:(0,$.jsx)(ed,{onClick:function(){return eG(!eH)},children:eH?(0,$.jsx)(Y.t2l,{}):(0,$.jsx)(Y.wqE,{})})}},n))})})}}),(0,$.jsx)(U.Qr,{name:"address",control:eb,render:function(e){var n=e.field;return(0,$.jsx)("div",{className:n.name,children:(0,$.jsx)(k.Z,{fullWidth:!0,children:(0,$.jsx)(el,ea({fullWidth:!0,className:B()({textfield__error:e_[n.name]}),success:et(n.name),label:"Direcci\xf3n actual",variant:"outlined",hiddenLabel:!0,helperText:H[n.name]?H[n.name].message:""},n))})})}}),(0,$.jsx)(U.Qr,{name:"state",control:eb,rules:{required:!0},render:function(e){var n=e.field;return(0,$.jsx)("div",{className:n.name,children:(0,$.jsx)(ec,ea(ea({},n),{},{label:"Departamento",success:et(n.name),error:J(n.name),children:null==eT?void 0:eT.map(function(e){return(0,$.jsx)(eu,{value:e.state,children:e.name},e.name)})}))})}}),(0,$.jsx)(U.Qr,{name:"province",control:eb,rules:{required:!0},render:function(e){var n=e.field;return(0,$.jsx)("div",{className:n.name,children:(0,$.jsx)(ec,ea(ea({},n),{},{label:"Provincia",success:et(n.name),error:J(n.name),children:null==eQ?void 0:eQ.map(function(e){return(0,$.jsx)(eu,{value:e.province,children:e.name},e.name)})}))})}}),(0,$.jsx)(U.Qr,{name:"city",control:eb,rules:{required:!0},render:function(e){var n=e.field;return(0,$.jsx)("div",{className:n.name,children:(0,$.jsx)(ec,ea(ea({},n),{},{label:"Distrito",success:et(n.name),error:J(n.name),children:null==eB?void 0:eB.map(function(e){return(0,$.jsx)(eu,{value:e.city,children:e.name},e.name)})}))})}}),(0,$.jsx)(U.Qr,{name:"mobile",control:eb,render:function(e){var n=e.field;return(0,$.jsx)("div",{className:n.name,children:(0,$.jsx)(k.Z,{fullWidth:!0,children:(0,$.jsx)(el,ea({fullWidth:!0,className:B()({textfield__error:e_[n.name]}),success:et(n.name),label:"Celular",variant:"outlined",hiddenLabel:!0,helperText:H[n.name]?H[n.name].message:""},n))})})}}),(0,$.jsx)("div",{className:"mobile_code_button",children:(0,$.jsx)(G.E.div,{className:"button",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:(0,$.jsx)(G.E.div,{whileTap:{scale:.8},children:(0,$.jsx)(D.z,{loading:ey,type:"button",size:"small",onClick:e4,color:eD>-1?"default":"info",disabled:eD>-1,children:eD>-1?eD:"Generar c\xf3digo celular"})})})}),(0,$.jsx)(U.Qr,{name:"mobile_code",control:eb,render:function(e){var n=e.field;return(0,$.jsx)("div",{className:n.name,children:(0,$.jsx)(k.Z,{fullWidth:!0,children:(0,$.jsx)(el,ea({fullWidth:!0,className:B()({textfield__error:e_[n.name]}),success:et(n.name),label:"C\xf3digo",variant:"outlined",hiddenLabel:!0,disabled:Boolean(!ex("mobile")),helperText:H[n.name]?H[n.name].message:"",onKeyPress:function(e){return(0,A.W)(e,e.target.value,6)}},n))})})}}),(null==Q?void 0:Q.length)&&(0,$.jsx)(U.Qr,{name:"promotion",control:eb,defaultValue:Q[0].promotion,render:function(e){var n=e.field;return(0,$.jsx)($.Fragment,{children:(0,$.jsxs)(es,{className:n.name,children:[(0,$.jsx)("div",{className:"gift",children:(0,$.jsx)(Y.N2J,{})}),(0,$.jsx)("header",{className:"header",children:(0,$.jsx)("h4",{children:"Elige aqu\xed tu regalo de bienvenida"})}),(0,$.jsx)(eo,ea(ea({className:B()("".concat(n.name,"__radiogroup"))},n),{},{children:null==Q?void 0:Q.map(function(e,n){var t;return(0,$.jsx)(M.Z,{control:(0,$.jsx)(Z.Z,{}),label:null==e?void 0:null===(t=e.cms)||void 0===t?void 0:t.summary_title,value:null==e?void 0:e.promotion},null==e?void 0:e.promotion)})}))]})})}}),(0,$.jsx)("div",{className:"terms_and_Conditions",children:(0,$.jsx)(g.E,{})}),(0,$.jsx)(U.Qr,{name:"pep",control:eb,defaultValue:v._u[0].value,render:function(e){var n=e.field;return(0,$.jsxs)("div",{className:n.name,children:[(0,$.jsx)(eo,ea(ea({},n),{},{children:null===v._u||void 0===v._u?void 0:v._u.map(function(e,n){return(0,$.jsx)(M.Z,{control:(0,$.jsx)(Z.Z,{}),label:null==e?void 0:e.label,value:null==e?void 0:e.value},null==e?void 0:e.value)})})),(0,$.jsx)(b.V,{})]})}}),e_.validateCodeAT&&(0,$.jsx)("div",{className:"validateCodeAT",children:(0,$.jsx)(z.b,{severity:"error",children:(0,$.jsx)($.Fragment,{children:e_.validateCodeAT.message})})}),(0,$.jsx)(G.E.div,{className:"button__register",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:(0,$.jsx)(G.E.div,{whileTap:{scale:.8},children:(0,$.jsx)(D.z,{loading:ey,disabled:ey,type:"submit",children:"Registrar"})})})]})]})]})})})]})};n.default=er;var ei=(0,J.css)(["display:grid;gap:.3rem;.MuiFormControlLabel-root{margin-right:0;color:",";.MuiButtonBase-root{padding-top:0;padding-bottom:0;.MuiSvgIcon-root{font-size:1.4rem;}}.MuiTypography-root{font-size:1rem;}.MuiButtonBase-root.Mui-checked ~ .MuiTypography-root{font-weight:500;}}"],function(e){return e.theme.contrastText}),eo=(0,J.default)(E.Z).withConfig({displayName:"registro__RadioGroupCss",componentId:"sc-q5pzfb-0"})(["&.MuiFormGroup-root{","}"],ei),es=(0,J.default)("div").withConfig({displayName:"registro__RegisterGiftStyled",componentId:"sc-q5pzfb-1"})(["border-style:solid;border-width:1px;border-color:",";border-radius:.7rem;width:100%;padding:2rem 2rem 1rem 2rem;position:relative;margin-top:1.5rem;> .gift{position:absolute;top:-2rem;left:calc(50% - 1.5rem);svg{background:",";font-size:3.5rem;}","{left:0rem;top:1.5rem;top:.5rem;}}> .header{margin-bottom:1rem;color:",";> h4{font-size:1rem;font-weight:500;}}",'{> .gift{position:static;display:flex;}display:grid;gap:2rem;row-gap:1rem;margin:0;padding:0;border:0;grid-template-columns:auto 1fr;grid-template-areas:"header header" "gift promotion__group";.gift{grid-area:gift;display:flex;align-items:center;}.header{grid-area:header;margin:0;}.promotion__group{grid-area:promotion__group;}}'],function(e){return e.theme.contrastText},function(e){return e.theme.background},T.q.min_width.desktopXS,function(e){return e.theme.contrastText},T.q.min_width.desktopXS),ed=J.default.div.withConfig({displayName:"registro__ButtonEndContentCss",componentId:"sc-q5pzfb-2"})(["cursor:pointer;position:absolute;right:.6rem;display:flex;align-items:center;justify-content:center;svg{font-size:1.6rem;}"]),el=(0,J.default)(H.Z).withConfig({displayName:"registro__TextFieldOverrideCss",componentId:"sc-q5pzfb-3"})(["&&{--paddingInputH :1rem;--paddingInputV :.6rem;--transformVertical :calc(-.6rem);&.birthday label.MuiFormLabel-root{max-width:calc(100% - 40px);}&.birthday label.MuiFormLabel-root.Mui-focused,&.birthday label.MuiFormLabel-root.MuiFormLabel-filled{transform:translate(var(--paddingInputH),var(--transformVertical)) scale(0.83);max-width:calc(133% - 32px);}&.password > .MuiInputBase-root,&.confirm_password > .MuiInputBase-root{padding-right:0;}}"]),ec=(0,J.default)(F.Z).withConfig({displayName:"registro__AnimatedSelectOverrideCss",componentId:"sc-q5pzfb-4"})(["&&{--paddingInputH :1rem;--paddingInputV :.6rem;--transformVertical :calc(-.6rem);}"]),eu=(0,J.default)(W.Z).withConfig({displayName:"registro__MenuItemOverrideCss",componentId:"sc-q5pzfb-5"})(["&&{min-height:1.2rem;}"]),em=(0,J.default)(k.Z).withConfig({displayName:"registro__FormControlOverrideCss",componentId:"sc-q5pzfb-6"})([".MuiInputBase-root{padding-right:0;}.MuiInputAdornment-root{position:absolute;right:1rem;}"]),ef=J.default.div.withConfig({displayName:"registro__WrapCss",componentId:"sc-q5pzfb-7"})(["min-width:320px;position:relative;z-index:10;"]),eh=J.default.div.withConfig({displayName:"registro__WrapContentCss",componentId:"sc-q5pzfb-8"})(["background-repeat:no-repeat;background-position:left;background-size:cover;min-height:100vh;min-height:100dvh;display:flex;align-items:center;justify-content:center;width:100%;margin:auto;overflow:auto;background-image:url(",");box-shadow:inset -30vw 0 100px -100px rgba(0,0,0,1);","{min-height:initial;height:100vh;height:100dvh;background-size:cover;background-size:auto 100vh;background-size:auto 100dvh;background-position:left top;background-repeat:no-repeat;align-items:flex-start;justify-content:center;padding:1rem;}","{justify-content:flex-end;padding:1rem;}","{padding:1rem 1rem;}","{padding:1rem 5rem;}","{padding:1rem 10rem;}> .wrapper{color:",";padding:clamp(10px,2.5vw,30px);padding-top:1rem;padding-bottom:2rem;border-radius:7px;max-width:calc(52rem + 1vw);width:100%;position:relative;background:",";","{border:1px solid white;}","{padding-top:1rem;padding-bottom:3rem;border:1px solid white;}.wrapper-relative{position:relative;h1{font-size:clamp(1.6rem,2vw,1.8rem);margin-bottom:1rem;text-align:center;}form{background:white;display:grid;gap:1rem;column-gap:.7rem;grid-template-columns:repeat(2,minmax(0px,1fr));align-items:stretch;align-content:start;.button__register > div{width:100%;display:flex;justify-content:center;max-width:30ch;margin:auto;}.button__register button{flex:1;border-radius:1rem;text-transform:uppercase;}.email_code_button,.mobile_code_button{display:flex;width:100%;}.email_code_button .button{display:flex;align-items:flex-start;}.email_code_button .button,.mobile_code_button .button{flex:1;display:flex;}.email_code_button .button > div,.mobile_code_button .button > div{flex:1;display:flex;align-items:flex-start;}.email_code_button button,.mobile_code_button button{white-space:nowrap;flex:1;font-size:0.85rem;min-height:calc(1rem + 1.65rem);}.pep{display:grid;gap:.5rem;grid-template-columns:1fr 4rem;}> *{grid-column:span 2;}> .gender,.birthday,.national_id,.national_id_type,.email_code_button,.email_code,> .mobile_code_button,> .mobile_code{grid-column:span 1;}","{grid-template-columns:repeat(12,minmax(0px,1fr));>.tablets__helpertext,> .button__register,> .address,> .promotion,>.terms_and_Conditions,>.pep,>.preferences,>.agent_shop,>.validateCodeAT,>.nationality{grid-column:span 12;}> *{grid-column:span 6;}> .gender,> .birthday,> .national_id,> .national_id_type{grid-column:span 6;}> .email{grid-column:span 6;}> .email_code_button{grid-column:span 4;}> .email_code{grid-column:span 2;}> .mobile,.mobile_code,> .mobile_code_button{grid-column:span 4;}> .state,>.province,>.city{grid-column:span 4;}}}}}"],function(e){return null==e?void 0:e.$imgURL},T.q.min_width.tabletL,T.q.min_width.desktopS,T.q.min_width.desktopL,T.q.min_width.desktopXXL,T.q.min_width.desktopXL,function(e){return e.theme.contrastText},function(e){return S()(e.theme.background).alpha(1)},T.q.min_width.tabletL,T.q.min_width.desktopS,T.q.min_width.tabletS)},38935:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/registro",function(){return t(44290)}])},32561:function(e,n){"use strict";n.Z={src:"/_next/static/media/nuevo_land.32530a99.jpg",height:1080,width:1900,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAwT/2gAMAwEAAhADEAAAAI4FR//EABwQAAMAAQUAAAAAAAAAAAAAAAECAwQABhIhQf/aAAgBAQABPwBtw2ngSbGx5wZpsrkAHkB16Nf/xAAZEQEAAgMAAAAAAAAAAAAAAAABAAIDERP/2gAIAQIBAT8A5Y1d1J//xAAZEQABBQAAAAAAAAAAAAAAAAADAAECESL/2gAIAQMBAT8Ac5ajtf/Z",blurWidth:8,blurHeight:5}},36864:function(e,n,t){"use strict";function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}t.d(n,{Z:function(){return a}})}},function(e){e.O(0,[1465,2912,1876,4002,5095,6425,2103,882,377,5600,9035,5231,9774,2888,179],function(){return e(e.s=38935)}),_N_E=e.O()}]);