(function(){var A={8034:function(){function A(){const A=document.querySelector(".slider"),e=A.querySelectorAll("img")[0];arrowIcons=document.querySelectorAll(".wrapper i");let a,n,o=!1,t=e.clientWidth+140;arrowIcons.forEach((e=>{e.addEventListener("click",(()=>{A.scrollLeft+="left"==e.id?-t:t}))}));const s=e=>{o=!0,a=e.pageX,n=A.scrollLeft},r=e=>{if(!o)return;e.preventDefault(),A.classList.add("dragging");let t=e.pageX-a;A.scrollLeft=n-t},i=()=>{o=!1,A.classList.remove("dragging")};A.addEventListener("mousedown",s),A.addEventListener("mousemove",r),A.addEventListener("mouseup",i)}window.addEventListener("load",A)},6626:function(A,e,a){"use strict";var n=a(9242),o=a(3396);function t(A,e){const a=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(a)}var s=a(89);const r={},i=(0,s.Z)(r,[["render",t]]);var c=i,l=a(2483);function d(A,e,a,n,t,s){const r=(0,o.up)("Header"),i=(0,o.up)("LandingPage"),c=(0,o.up)("ServiciosPI"),l=(0,o.up)("ServiciosInt"),d=(0,o.up)("CapacitacionesN"),u=(0,o.up)("Clientes"),p=(0,o.up)("Footer");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(r),(0,o.Wm)(i),(0,o.Wm)(c),(0,o.Wm)(l),(0,o.Wm)(d),(0,o.Wm)(u),(0,o.Wm)(p)],64)}var u=a(7139);const p={class:"hello"},v=(0,o.uE)('<p data-v-b9167eee> For a guide and recipes on how to configure / customize this project,<br data-v-b9167eee> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>vue-cli documentation</a>. </p><h3 data-v-b9167eee>Installed CLI Plugins</h3><ul data-v-b9167eee><li data-v-b9167eee><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-b9167eee>babel</a></li><li data-v-b9167eee><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-b9167eee>eslint</a></li></ul><h3 data-v-b9167eee>Essential Links</h3><ul data-v-b9167eee><li data-v-b9167eee><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>Core Docs</a></li><li data-v-b9167eee><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>Forum</a></li><li data-v-b9167eee><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>Community Chat</a></li><li data-v-b9167eee><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-b9167eee>Twitter</a></li><li data-v-b9167eee><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>News</a></li></ul><h3 data-v-b9167eee>Ecosystem</h3><ul data-v-b9167eee><li data-v-b9167eee><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>vue-router</a></li><li data-v-b9167eee><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>vuex</a></li><li data-v-b9167eee><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-b9167eee>vue-devtools</a></li><li data-v-b9167eee><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>vue-loader</a></li><li data-v-b9167eee><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-b9167eee>awesome-vue</a></li></ul>',7);function m(A,e,a,n,t,s){return(0,o.wg)(),(0,o.iD)("div",p,[(0,o._)("h1",null,(0,u.zw)(a.msg),1),v])}var g={name:"HelloWorld",props:{msg:String}};const f=(0,s.Z)(g,[["render",m],["__scopeId","data-v-b9167eee"]]);var C=f,b=a.p+"img/Logo1.f8371a50.png";const h=A=>((0,o.dD)("data-v-2b412bf8"),A=A(),(0,o.Cn)(),A),w={class:"tm-site-header"},_=h((()=>(0,o._)("div",{class:"cropped"},[(0,o._)("img",{href:"#",src:b,alt:"Imagen",class:"Logo-Imagen"})],-1))),I={class:"border-ul"};function M(A,e,a,n,t,s){const r=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)("header",w,[_,(0,o._)("div",null,[(0,o._)("ul",I,[(0,o._)("li",null,[(0,o.Wm)(r,{class:"li-element",to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("Inicio")])),_:1})]),(0,o._)("li",null,[(0,o.Wm)(r,{class:"li-element",to:"/AboutUs"},{default:(0,o.w5)((()=>[(0,o.Uk)("Acerca de Nosotros")])),_:1})]),(0,o._)("li",null,[(0,o.Wm)(r,{class:"li-element",to:"/Capacitacion"},{default:(0,o.w5)((()=>[(0,o.Uk)("Capacitacion")])),_:1})]),(0,o._)("li",null,[(0,o.Wm)(r,{class:"li-element",to:"/Contacto"},{default:(0,o.w5)((()=>[(0,o.Uk)("Contacto")])),_:1})])])])])}var S={name:"Header",props:{msg:String}};const D=(0,s.Z)(S,[["render",M],["__scopeId","data-v-2b412bf8"]]);var W=D,F=a.p+"img/Engranegif.05fbecd1.gif";const E=A=>((0,o.dD)("data-v-121d9635"),A=A(),(0,o.Cn)(),A),B={class:"Section-Landing"},G=E((()=>(0,o._)("div",null,[(0,o._)("h2",{class:"Activos-text"},"Cuidamos de tus activos intangibles"),(0,o._)("h3",{class:"Especialidad-Text"},"Son nuestra especialidad")],-1))),P=E((()=>(0,o._)("div",null,[(0,o._)("img",{class:"Landing-Image",src:F,alt:"GIF-Landing"})],-1))),H=[G,P];function N(A,e,a,n,t,s){return(0,o.wg)(),(0,o.iD)("section",B,H)}var y={name:"LandinPage",props:{msg:String}};const j=(0,s.Z)(y,[["render",N],["__scopeId","data-v-121d9635"]]);var Q=j,Y=a.p+"img/Signosdis.bec27e0a.png",T=a.p+"img/Ideas.c507910b.png",L=a.p+"img/Property.5e38d018.png",q="data:image/png;base64,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",U=a.p+"img/DAutor.db81ef99.png",k=a.p+"img/user.e4fea021.png",x=a.p+"img/tecnologias.33ff333b.png";const O=A=>((0,o.dD)("data-v-d9d24698"),A=A(),(0,o.Cn)(),A),Z={class:"Texto"},X=O((()=>(0,o._)("h1",null,"SERVICIOS PI Y NUEVAS TECNOLOGIAS",-1))),R={class:"Elementos"},V=O((()=>(0,o._)("h3",null,"Marcas y demas signos distintivos",-1))),J=O((()=>(0,o._)("div",{class:"Elemento"},[(0,o._)("div",{class:"Fondo-IMG"},[(0,o._)("img",{class:"IMG-Elements",src:Y,alt:"Signos-IMG"})])],-1))),K=O((()=>(0,o._)("h3",null,"Invenciones",-1))),z=O((()=>(0,o._)("div",{class:"Elemento"},[(0,o._)("div",{class:"Fondo-IMG"},[(0,o._)("img",{class:"IMG-Elements",src:T,alt:""})])],-1))),$=O((()=>(0,o._)("h3",null,"Secretos industriales ",-1))),AA=O((()=>(0,o._)("div",{class:"Elemento"},[(0,o._)("div",{class:"Fondo-IMG"},[(0,o._)("img",{class:"IMG-Elements",src:L,alt:""})])],-1))),eA=O((()=>(0,o._)("h3",null,"Franquicias",-1))),aA=O((()=>(0,o._)("div",{class:"Elemento"},[(0,o._)("div",{class:"Fondo-IMG"},[(0,o._)("img",{class:"IMG-Elements",src:q,alt:""})])],-1))),nA=O((()=>(0,o._)("h3",null,"Derechos de Autor y conexos",-1))),oA=O((()=>(0,o._)("div",{class:"Elemento"},[(0,o._)("div",{class:"Fondo-IMG"},[(0,o._)("img",{class:"IMG-Elements",src:U,alt:""})])],-1))),tA=O((()=>(0,o._)("h3",null,"Derechos a la propia imagen",-1))),sA=O((()=>(0,o._)("div",{class:"Elemento"},[(0,o._)("div",{class:"Fondo-IMG"},[(0,o._)("img",{class:"IMG-Elements",src:k,alt:""})])],-1))),rA=O((()=>(0,o._)("h3",null,"Nuevas Tecnologías y TI",-1))),iA=O((()=>(0,o._)("div",{class:"Elemento"},[(0,o._)("div",{class:"Fondo-IMG"},[(0,o._)("img",{class:"IMG-Elements",src:x,alt:""})])],-1)));function cA(A,e,a,n,t,s){const r=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)("section",Z,[X,(0,o._)("div",R,[(0,o._)("div",null,[V,(0,o.Wm)(r,{class:"#",to:"/ServiciosPi/MarcasyServicios"},{default:(0,o.w5)((()=>[J])),_:1})]),(0,o._)("div",null,[K,(0,o.Wm)(r,{class:"#",to:"/ServiciosPi/Invenciones"},{default:(0,o.w5)((()=>[z])),_:1})]),(0,o._)("div",null,[$,(0,o.Wm)(r,{class:"#",to:"/ServiciosPi/SecretosIndustriales"},{default:(0,o.w5)((()=>[AA])),_:1})]),(0,o._)("div",null,[eA,(0,o.Wm)(r,{class:"#",to:"/ServiciosPi/Franquicias"},{default:(0,o.w5)((()=>[aA])),_:1})]),(0,o._)("div",null,[nA,(0,o.Wm)(r,{class:"#",to:"/ServiciosPi/DerechosdeAutor"},{default:(0,o.w5)((()=>[oA])),_:1})]),(0,o._)("div",null,[tA,(0,o.Wm)(r,{class:"#",to:"/ServiciosPi/DerechosImagen"},{default:(0,o.w5)((()=>[sA])),_:1})]),(0,o._)("div",null,[rA,(0,o.Wm)(r,{class:"#",to:"/ServiciosPi/NuevasTecnologias"},{default:(0,o.w5)((()=>[iA])),_:1})])])])}var lA={name:"ServiciosPI",props:{msg:String}};const dA=(0,s.Z)(lA,[["render",cA],["__scopeId","data-v-d9d24698"]]);var uA=dA;const pA=A=>((0,o.dD)("data-v-7e84220e"),A=A(),(0,o.Cn)(),A),vA={class:"Texto"},mA=pA((()=>(0,o._)("h1",null,"SERVICIOS INTEGRALES",-1))),gA={class:"Elementos"},fA=pA((()=>(0,o._)("h3",null,"Creacion de marca",-1))),CA=pA((()=>(0,o._)("div",{class:"Elemento"},[(0,o._)("div",{class:"Fondo-IMG"},[(0,o._)("img",{class:"IMG-Elements",src:Y,alt:"Signos-IMG"})])],-1))),bA=pA((()=>(0,o._)("h3",null,"Diseños de interfaces y páginas web",-1))),hA=pA((()=>(0,o._)("div",{class:"Elemento"},[(0,o._)("div",{class:"Fondo-IMG"},[(0,o._)("img",{class:"IMG-Elements",src:T,alt:""})])],-1))),wA=pA((()=>(0,o._)("h3",null,"Manejo de Marcas",-1))),_A=pA((()=>(0,o._)("div",{class:"Elemento"},[(0,o._)("div",{class:"Fondo-IMG"},[(0,o._)("img",{class:"IMG-Elements",src:L,alt:""})])],-1))),IA=pA((()=>(0,o._)("h3",null,"Politicas de uso de sitios web",-1))),MA=pA((()=>(0,o._)("div",{class:"Elemento"},[(0,o._)("div",{class:"Fondo-IMG"},[(0,o._)("img",{class:"IMG-Elements",src:q,alt:""})])],-1))),SA=pA((()=>(0,o._)("h3",null,"Aviso de privacidad de sitios web",-1))),DA=pA((()=>(0,o._)("div",{class:"Elemento"},[(0,o._)("div",{class:"Fondo-IMG"},[(0,o._)("img",{class:"IMG-Elements",src:U,alt:""})])],-1)));function WA(A,e,a,n,t,s){const r=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)("section",vA,[mA,(0,o._)("div",gA,[(0,o._)("div",null,[fA,(0,o.Wm)(r,{class:"#",to:"/ServiciosINT/CreaciondeMarca"},{default:(0,o.w5)((()=>[CA])),_:1})]),(0,o._)("div",null,[bA,(0,o.Wm)(r,{class:"#",to:"/ServiciosINT/DisenoyPaginasWeb"},{default:(0,o.w5)((()=>[hA])),_:1})]),(0,o._)("div",null,[wA,(0,o.Wm)(r,{class:"#",to:"/ServiciosINT/ManejodeMarcas"},{default:(0,o.w5)((()=>[_A])),_:1})]),(0,o._)("div",null,[IA,(0,o.Wm)(r,{class:"#",to:"/ServiciosINT/PoliticasUsoWeb"},{default:(0,o.w5)((()=>[MA])),_:1})]),(0,o._)("div",null,[SA,(0,o.Wm)(r,{class:"#",to:"/ServiciosINT/AvisodePrivacidad"},{default:(0,o.w5)((()=>[DA])),_:1})])])])}var FA={name:"ServiciosINT",props:{msg:String}};const EA=(0,s.Z)(FA,[["render",WA],["__scopeId","data-v-7e84220e"]]);var BA=EA;const GA=A=>((0,o.dD)("data-v-884b1b98"),A=A(),(0,o.Cn)(),A),PA={class:"Section-Capacitaciones"},HA=GA((()=>(0,o._)("h1",null,"Capacitaciones",-1))),NA={class:"contenedor"},yA=GA((()=>(0,o._)("h4",null,"Curso 1",-1))),jA=GA((()=>(0,o._)("figure",null,[(0,o._)("img",{src:"https://www.cofide.mx/hs-fs/hubfs/Imágenes%20Agosto/Tipos%20de%20capacitación/art-1-Capacitacion-para-el-trabajo.jpg?width=900&name=art-1-Capacitacion-para-el-trabajo.jpg",alt:"XV"}),(0,o._)("div",{class:"overlay"},[(0,o._)("p",{class:"Texto-IMG"},"Viabilidad de registro marcario para Diseñadores Gráficos, y publico afin con valor curricular")])],-1))),QA=GA((()=>(0,o._)("h4",null,"Curso 2",-1))),YA=GA((()=>(0,o._)("figure",null,[(0,o._)("img",{src:"https://www.cofide.mx/hs-fs/hubfs/Imágenes%20Agosto/Tipos%20de%20capacitación/art-2-Capacitacion-en-el-trabajo.jpg?width=900&name=art-2-Capacitacion-en-el-trabajo.jpg",alt:"XV"}),(0,o._)("div",{class:"overlay"},[(0,o._)("p",{class:"Texto-IMG"},"Cómo registro mi marca en línea en IMPI")])],-1))),TA=GA((()=>(0,o._)("h4",null,"Curso 3",-1))),LA=GA((()=>(0,o._)("figure",null,[(0,o._)("img",{src:"https://www.cofide.mx/hs-fs/hubfs/Imágenes%20Agosto/Tipos%20de%20capacitación/art-3-Capacitacion-promocional.jpg?width=900&name=art-3-Capacitacion-promocional.jpg",alt:"XV"}),(0,o._)("div",{class:"overlay"},[(0,o._)("p",{class:"Texto-IMG"},"Cómo registro mi obra en INDAUTOR")])],-1)));function qA(A,e,a,n,t,s){const r=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)("section",PA,[HA,(0,o._)("div",NA,[(0,o._)("div",null,[yA,(0,o.Wm)(r,{class:"li-element",to:"/Capacitacion/Curso1"},{default:(0,o.w5)((()=>[jA])),_:1})]),(0,o._)("div",null,[QA,(0,o.Wm)(r,{class:"li-element",to:"/Capacitacion/Curso2"},{default:(0,o.w5)((()=>[YA])),_:1})]),(0,o._)("div",null,[TA,(0,o.Wm)(r,{class:"li-element",to:"/Capacitacion/Curso3"},{default:(0,o.w5)((()=>[LA])),_:1})])])])}var UA={name:"CapacitacionesN",props:{msg:String}};const kA=(0,s.Z)(UA,[["render",qA],["__scopeId","data-v-884b1b98"]]);var xA=kA,OA=a.p+"img/Cliente.7c815878.png";const ZA={class:"Section-Slider"},XA=(0,o.uE)('<h1 data-v-4241dabc>Nuestros Clientes</h1><div class="wrapper" data-v-4241dabc><i id="left" class="fa-sharp fa-solid fa-circle-arrow-right fa-rotate-180" data-v-4241dabc></i><div class="slider" data-v-4241dabc><div class="slide" data-v-4241dabc><img src="'+OA+'" alt="" data-v-4241dabc></div><div class="slide" data-v-4241dabc><img src="'+OA+'" alt="" data-v-4241dabc></div><div class="slide" data-v-4241dabc><img src="'+OA+'" alt="" data-v-4241dabc></div><div class="slide" data-v-4241dabc><img src="'+OA+'" alt="" data-v-4241dabc></div><div class="slide" data-v-4241dabc><img src="'+OA+'" alt="" data-v-4241dabc></div><div class="slide" data-v-4241dabc><img src="'+OA+'" alt="" data-v-4241dabc></div><div class="slide" data-v-4241dabc><img src="'+OA+'" alt="" data-v-4241dabc></div><div class="slide" data-v-4241dabc><img src="'+OA+'" alt="" data-v-4241dabc></div><div class="slide" data-v-4241dabc><img src="'+OA+'" alt="" data-v-4241dabc></div></div><i id="right" class="fa-sharp fa-solid fa-circle-arrow-right" data-v-4241dabc></i></div>',2),RA=[XA];function VA(A,e,a,n,t,s){return(0,o.wg)(),(0,o.iD)("section",ZA,RA)}var JA={name:"Clientes",props:{msg:String}};const KA=(0,s.Z)(JA,[["render",VA],["__scopeId","data-v-4241dabc"]]);var zA=KA;const $A=A=>((0,o.dD)("data-v-3102ef36"),A=A(),(0,o.Cn)(),A),Ae={class:"Footer-Area"},ee=(0,o.uE)('<div class="Redes-Display" data-v-3102ef36><a href="https://www.instagram.com/dalfar_consult/?igshid=YmMyMTA2M2Y%3D" target="_blank" class="Cursor" data-v-3102ef36><i class="fa-brands fa-instagram" data-v-3102ef36></i></a><a href="https://www.facebook.com/profile.php?id=100090690902830&amp;mibextid=ZbWKwL" target="_blank" class="Cursor" data-v-3102ef36><i class="fa-brands fa-facebook" data-v-3102ef36></i></a><a href="#" target="_blank" class="Cursor" data-v-3102ef36><i class="fa-brands fa-whatsapp Cursor" data-v-3102ef36></i></a></div><p class="copyright" data-v-3102ef36>DalfaRCONSULTORES @ 2023 All rights reserved </p>',2),ae={class:"Display-Info"},ne=$A((()=>(0,o._)("p",{class:"Info-Cursor"},"AVISO DE PRIVACIDAD",-1))),oe=$A((()=>(0,o._)("p",{class:"Info-Cursor"},"TERMINOS Y CONDICIONES",-1)));function te(A,e,a,n,t,s){const r=(0,o.up)("P");return(0,o.wg)(),(0,o.iD)("section",Ae,[ee,(0,o._)("div",ae,[ne,oe,(0,o.Wm)(r,{class:"Info-Cursor"},{default:(0,o.w5)((()=>[(0,o.Uk)("POLITICA DE COOKIES")])),_:1})])])}var se={name:"Footer",props:{msg:String}};const re=(0,s.Z)(se,[["render",te],["__scopeId","data-v-3102ef36"]]);var ie=re,ce={name:"HomeView",components:{Header:W,HelloWorld:C,LandingPage:Q,ServiciosPI:uA,ServiciosInt:BA,CapacitacionesN:xA,Clientes:zA,Footer:ie}};const le=(0,s.Z)(ce,[["render",d]]);var de=le;function ue(A,e,a,n,t,s){const r=(0,o.up)("Header"),i=(0,o.up)("Curso1Cap"),c=(0,o.up)("Footer");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(r,{class:"Header-Class"}),(0,o.Wm)(i),(0,o.Wm)(c)])}const pe=A=>((0,o.dD)("data-v-755a23bb"),A=A(),(0,o.Cn)(),A),ve={class:"Section-Capacitaciones"},me=pe((()=>(0,o._)("h1",null,"Capacitacion curso 1",-1))),ge=[me];function fe(A,e,a,n,t,s){return(0,o.wg)(),(0,o.iD)("section",ve,ge)}var Ce={name:"Curso1Cap",props:{msg:String}};const be=(0,s.Z)(Ce,[["render",fe],["__scopeId","data-v-755a23bb"]]);var he=be,we={name:"Curso1",components:{Header:W,Footer:ie,CapacitacionesN:xA,Curso1Cap:he}};const _e=(0,s.Z)(we,[["render",ue],["__scopeId","data-v-03e4faf4"]]);var Ie=_e;function Me(A,e,a,n,t,s){const r=(0,o.up)("Header"),i=(0,o.up)("Curso2Cap"),c=(0,o.up)("Footer");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(r,{class:"Header-Class"}),(0,o.Wm)(i),(0,o.Wm)(c)])}const Se=A=>((0,o.dD)("data-v-d1afd548"),A=A(),(0,o.Cn)(),A),De={class:"Section-Capacitaciones"},We=Se((()=>(0,o._)("h1",null,"Capacitacion curso 2",-1))),Fe=[We];function Ee(A,e,a,n,t,s){return(0,o.wg)(),(0,o.iD)("section",De,Fe)}var Be={name:"Curso2Cap",props:{msg:String}};const Ge=(0,s.Z)(Be,[["render",Ee],["__scopeId","data-v-d1afd548"]]);var Pe=Ge,He={name:"Curso2",components:{Header:W,Footer:ie,CapacitacionesN:xA,Curso2Cap:Pe}};const Ne=(0,s.Z)(He,[["render",Me],["__scopeId","data-v-6cffa57c"]]);var ye=Ne;function je(A,e,a,n,t,s){const r=(0,o.up)("Header"),i=(0,o.up)("Curso3Cap"),c=(0,o.up)("Footer");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(r,{class:"Header-Class"}),(0,o.Wm)(i),(0,o.Wm)(c)])}const Qe=A=>((0,o.dD)("data-v-5831087d"),A=A(),(0,o.Cn)(),A),Ye={class:"Section-Capacitaciones"},Te=Qe((()=>(0,o._)("h1",null,"Capacitacion curso 3",-1))),Le=[Te];function qe(A,e,a,n,t,s){return(0,o.wg)(),(0,o.iD)("section",Ye,Le)}var Ue={name:"Curso3Cap",props:{msg:String}};const ke=(0,s.Z)(Ue,[["render",qe],["__scopeId","data-v-5831087d"]]);var xe=ke,Oe={name:"Curso3",components:{Header:W,Footer:ie,CapacitacionesN:xA,Curso3Cap:xe}};const Ze=(0,s.Z)(Oe,[["render",je],["__scopeId","data-v-79bc36ba"]]);var Xe=Ze;function Re(A,e,a,n,t,s){const r=(0,o.up)("Header"),i=(0,o.up)("AboutUsComponent"),c=(0,o.up)("Footer");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(r),(0,o.Wm)(i),(0,o.Wm)(c)])}const Ve={class:"Section-Landing"},Je=(0,o.uE)("<h1 data-v-071e1434>ACERCA DE NOSOTROS</h1><h2 data-v-071e1434>Descripcion</h2><p data-v-071e1434>Somos una Consultoría especializada en llevar tu negocio al siguiente nivel, previniendo, conteniendo y solucionando conflictos en materia de Propiedad Intelectual y Nuevas Tecnologías, enfocados en promover una competencia leal, así como el respeto a los activos intangibles.</p><h2 data-v-071e1434>MIsion</h2><p data-v-071e1434>Identificar las necesidades de nuestros clientes, aportando con diligencia y profesionalismo las soluciones y estrategias más viables que garanticen la mayor certeza jurídica, salvaguardando en todo momento el talento, creatividad, innovación y distintividad, así como los valores que los definan bajo una cultura de respeto y competencia leal. </p><h2 data-v-071e1434>Vision</h2><p data-v-071e1434>Ser una consultoría con presencia en toda la república mexicana, siendo un referente en el sector por nuestra calidad, diligencia y profesionalismo en nuestros servicios.</p><h2 data-v-071e1434>Valores</h2><ul data-v-071e1434><li data-v-071e1434>Diligencia</li><li data-v-071e1434>Etica profesional y corporativa</li><li data-v-071e1434>Confidencialidad</li><li data-v-071e1434>Trabajo en equipo</li><li data-v-071e1434>Responsabilidad social</li></ul>",9),Ke=[Je];function ze(A,e,a,n,t,s){return(0,o.wg)(),(0,o.iD)("section",Ve,Ke)}var $e={name:"AboutUsComponent",props:{msg:String}};const Aa=(0,s.Z)($e,[["render",ze],["__scopeId","data-v-071e1434"]]);var ea=Aa,aa={name:"AboutUs",components:{Header:W,AboutUsComponent:ea,Footer:ie}};const na=(0,s.Z)(aa,[["render",Re]]);var oa=na;function ta(A,e,a,n,t,s){const r=(0,o.up)("Header"),i=(0,o.up)("ContactoComponent"),c=(0,o.up)("Footer");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(r,{class:"Header-Class"}),(0,o.Wm)(i),(0,o.Wm)(c)])}const sa=A=>((0,o.dD)("data-v-6d411c0d"),A=A(),(0,o.Cn)(),A),ra={class:"Section-Contacto"},ia=sa((()=>(0,o._)("div",{class:"form-wrapper"},[(0,o._)("h1",null,"Formulario de Correo"),(0,o._)("form",{method:"post",action:""},[(0,o._)("label",{for:"name"},"Nombre:"),(0,o._)("input",{type:"text",id:"name",name:"name",placeholder:"Ingresa tu nombre",required:""}),(0,o._)("label",{for:"email"},"Correo Electrónico:"),(0,o._)("input",{type:"email",id:"email",name:"email",placeholder:"Ingresa tu correo electrónico",required:""}),(0,o._)("label",{for:"tema"},"Tema:"),(0,o._)("input",{type:"text",id:"tema",name:"tema",placeholder:"Que tema quieres tratar",required:""}),(0,o._)("label",{for:"message"},"Mensaje:"),(0,o._)("textarea",{id:"message",name:"message",rows:"6",placeholder:"Escribe aquí tu mensaje",required:""}),(0,o._)("input",{type:"submit",value:"Enviar"}),(0,o._)("p",{class:"form-message"})])],-1))),ca=[ia];function la(A,e,a,n,t,s){return(0,o.wg)(),(0,o.iD)("section",ra,ca)}var da={name:"Contacto",props:{msg:String}};const ua=(0,s.Z)(da,[["render",la],["__scopeId","data-v-6d411c0d"]]);var pa=ua,va={name:"Contacto",components:{Header:W,Footer:ie,CapacitacionesN:xA,ContactoComponent:pa}};const ma=(0,s.Z)(va,[["render",ta],["__scopeId","data-v-00e1b59e"]]);var ga=ma;function fa(A,e,a,n,t,s){const r=(0,o.up)("Header"),i=(0,o.up)("CapacitacionesN"),c=(0,o.up)("Footer");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(r,{class:"Header-Class"}),(0,o.Wm)(i,{class:"Capacitaciones"}),(0,o.Wm)(c)])}var Ca={name:"Capacitacion",components:{Header:W,Footer:ie,CapacitacionesN:xA}};const ba=(0,s.Z)(Ca,[["render",fa],["__scopeId","data-v-85675678"]]);var ha=ba;function wa(A,e,a,n,t,s){const r=(0,o.up)("Header"),i=(0,o.up)("MarcasYSComponent"),c=(0,o.up)("Footer");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(r),(0,o.Wm)(i),(0,o.Wm)(c)])}const _a=A=>((0,o.dD)("data-v-a4436f30"),A=A(),(0,o.Cn)(),A),Ia={class:"Section-Capacitaciones"},Ma=_a((()=>(0,o._)("h1",{class:"Marca"},"Capacitacion curso 1",-1))),Sa=[Ma];function Da(A,e,a,n,t,s){return(0,o.wg)(),(0,o.iD)("section",Ia,Sa)}var Wa={name:"MarcasYSComponent",props:{msg:String}};const Fa=(0,s.Z)(Wa,[["render",Da],["__scopeId","data-v-a4436f30"]]);var Ea=Fa,Ba={name:"MarcasyServicios",components:{Header:W,MarcasYSComponent:Ea,Footer:ie}};const Ga=(0,s.Z)(Ba,[["render",wa]]);var Pa=Ga;function Ha(A,e,a,n,t,s){const r=(0,o.up)("Header"),i=(0,o.up)("MarcasYSComponent"),c=(0,o.up)("Footer");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(r),(0,o.Wm)(i),(0,o.Wm)(c)])}var Na={name:"Invenciones",components:{Header:W,MarcasYSComponent:Ea,Footer:ie}};const ya=(0,s.Z)(Na,[["render",Ha]]);var ja=ya;function Qa(A,e,a,n,t,s){const r=(0,o.up)("Header"),i=(0,o.up)("MarcasYSComponent"),c=(0,o.up)("Footer");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(r),(0,o.Wm)(i),(0,o.Wm)(c)])}var Ya={name:"SecretosIndustriales",components:{Header:W,MarcasYSComponent:Ea,Footer:ie}};const Ta=(0,s.Z)(Ya,[["render",Qa]]);var La=Ta;function qa(A,e,a,n,t,s){const r=(0,o.up)("Header"),i=(0,o.up)("MarcasYSComponent"),c=(0,o.up)("Footer");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(r),(0,o.Wm)(i),(0,o.Wm)(c)])}var Ua={name:"Franquicias",components:{Header:W,MarcasYSComponent:Ea,Footer:ie}};const ka=(0,s.Z)(Ua,[["render",qa]]);var xa=ka;function Oa(A,e,a,n,t,s){const r=(0,o.up)("Header"),i=(0,o.up)("MarcasYSComponent"),c=(0,o.up)("Footer");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(r),(0,o.Wm)(i),(0,o.Wm)(c)])}var Za={name:"DerechosdeAutor",components:{Header:W,MarcasYSComponent:Ea,Footer:ie}};const Xa=(0,s.Z)(Za,[["render",Oa]]);var Ra=Xa;function Va(A,e,a,n,t,s){const r=(0,o.up)("Header"),i=(0,o.up)("MarcasYSComponent"),c=(0,o.up)("Footer");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(r),(0,o.Wm)(i),(0,o.Wm)(c)])}var Ja={name:"DerechosImagen",components:{Header:W,MarcasYSComponent:Ea,Footer:ie}};const Ka=(0,s.Z)(Ja,[["render",Va]]);var za=Ka;function $a(A,e,a,n,t,s){const r=(0,o.up)("Header"),i=(0,o.up)("MarcasYSComponent"),c=(0,o.up)("Footer");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(r),(0,o.Wm)(i),(0,o.Wm)(c)])}var An={name:"NuevasTecnologias",components:{Header:W,MarcasYSComponent:Ea,Footer:ie}};const en=(0,s.Z)(An,[["render",$a]]);var an=en;function nn(A,e,a,n,t,s){const r=(0,o.up)("Header"),i=(0,o.up)("MarcasYSComponent"),c=(0,o.up)("Footer");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(r),(0,o.Wm)(i),(0,o.Wm)(c)])}var on={name:"CreaciondeMarca",components:{Header:W,MarcasYSComponent:Ea,Footer:ie}};const tn=(0,s.Z)(on,[["render",nn]]);var sn=tn;function rn(A,e,a,n,t,s){const r=(0,o.up)("Header"),i=(0,o.up)("MarcasYSComponent"),c=(0,o.up)("Footer");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(r),(0,o.Wm)(i),(0,o.Wm)(c)])}var cn={name:"DisenoyPaginasWeb",components:{Header:W,MarcasYSComponent:Ea,Footer:ie}};const ln=(0,s.Z)(cn,[["render",rn]]);var dn=ln;function un(A,e,a,n,t,s){const r=(0,o.up)("Header"),i=(0,o.up)("MarcasYSComponent"),c=(0,o.up)("Footer");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(r),(0,o.Wm)(i),(0,o.Wm)(c)])}var pn={name:"ManejodeMarcas",components:{Header:W,MarcasYSComponent:Ea,Footer:ie}};const vn=(0,s.Z)(pn,[["render",un]]);var mn=vn;function gn(A,e,a,n,t,s){const r=(0,o.up)("Header"),i=(0,o.up)("MarcasYSComponent"),c=(0,o.up)("Footer");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(r),(0,o.Wm)(i),(0,o.Wm)(c)])}var fn={name:"PoliticasUsoWeb",components:{Header:W,MarcasYSComponent:Ea,Footer:ie}};const Cn=(0,s.Z)(fn,[["render",gn]]);var bn=Cn;function hn(A,e,a,n,t,s){const r=(0,o.up)("Header"),i=(0,o.up)("MarcasYSComponent"),c=(0,o.up)("Footer");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(r),(0,o.Wm)(i),(0,o.Wm)(c)])}var wn={name:"AvisodePrivacidad",components:{Header:W,MarcasYSComponent:Ea,Footer:ie}};const _n=(0,s.Z)(wn,[["render",hn]]);var In=_n;const Mn=[{path:"/",name:"home",component:de},{path:"/AboutUS",name:"AboutUS",component:oa},{path:"/Capacitacion",name:"Capacitacion",component:ha},{path:"/Capacitacion/Curso1",name:"Curso1",component:Ie},{path:"/Capacitacion/Curso2",name:"Curso2",component:ye},{path:"/Capacitacion/Curso3",name:"Curso3",component:Xe},{path:"/Contacto",name:"Contacto",component:ga},{path:"/ServiciosPi/MarcasyServicios",name:"MarcasyServicios",component:Pa},{path:"/ServiciosPi/Invenciones",name:"Invenciones",component:ja},{path:"/ServiciosPi/SecretosIndustriales",name:"SecretosIndustriales",component:La},{path:"/ServiciosPi/Franquicias",name:"Franquicias",component:xa},{path:"/ServiciosPi/DerechosdeAutor",name:"DerechosdeAutor",component:Ra},{path:"/ServiciosPi/DerechosImagen",name:"DerechosImagen",component:za},{path:"/ServiciosPi/NuevasTecnologias",name:"NuevasTecnologias",component:an},{path:"/ServiciosINT/CreaciondeMarca",name:"CreaciondeMarca",component:sn},{path:"/ServiciosINT/DisenoyPaginasWeb",name:"DisenoyPaginasWeb",component:dn},{path:"/ServiciosINT/ManejodeMarcas",name:"ManejodeMarcas",component:mn},{path:"/ServiciosINT/PoliticasUsoWeb",name:"PoliticasUsoWeb",component:bn},{path:"/ServiciosINT/AvisodePrivacidad",name:"AvisodePrivacidad",component:In}],Sn=(0,l.p7)({history:(0,l.PO)("/DalfaPaginaGit/"),routes:Mn});var Dn=Sn;a(8034);(0,n.ri)(c).use(Dn).mount("#app")}},e={};function a(n){var o=e[n];if(void 0!==o)return o.exports;var t=e[n]={exports:{}};return A[n](t,t.exports,a),t.exports}a.m=A,function(){var A=[];a.O=function(e,n,o,t){if(!n){var s=1/0;for(l=0;l<A.length;l++){n=A[l][0],o=A[l][1],t=A[l][2];for(var r=!0,i=0;i<n.length;i++)(!1&t||s>=t)&&Object.keys(a.O).every((function(A){return a.O[A](n[i])}))?n.splice(i--,1):(r=!1,t<s&&(s=t));if(r){A.splice(l--,1);var c=o();void 0!==c&&(e=c)}}return e}t=t||0;for(var l=A.length;l>0&&A[l-1][2]>t;l--)A[l]=A[l-1];A[l]=[n,o,t]}}(),function(){a.n=function(A){var e=A&&A.__esModule?function(){return A["default"]}:function(){return A};return a.d(e,{a:e}),e}}(),function(){a.d=function(A,e){for(var n in e)a.o(e,n)&&!a.o(A,n)&&Object.defineProperty(A,n,{enumerable:!0,get:e[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(A){if("object"===typeof window)return window}}()}(),function(){a.o=function(A,e){return Object.prototype.hasOwnProperty.call(A,e)}}(),function(){a.p="/DalfaPaginaGit/"}(),function(){var A={143:0};a.O.j=function(e){return 0===A[e]};var e=function(e,n){var o,t,s=n[0],r=n[1],i=n[2],c=0;if(s.some((function(e){return 0!==A[e]}))){for(o in r)a.o(r,o)&&(a.m[o]=r[o]);if(i)var l=i(a)}for(e&&e(n);c<s.length;c++)t=s[c],a.o(A,t)&&A[t]&&A[t][0](),A[t]=0;return a.O(l)},n=self["webpackChunkdalfarconsultores"]=self["webpackChunkdalfarconsultores"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(6626)}));n=a.O(n)})();
//# sourceMappingURL=app.34a2a2e4.js.map