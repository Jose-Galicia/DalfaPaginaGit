(function(){var A={8034:function(){function A(){const A=document.querySelector(".slider"),a=A.querySelectorAll("img")[0];arrowIcons=document.querySelectorAll(".wrapper i");let e,t,s=!1,o=a.clientWidth+140;arrowIcons.forEach((a=>{a.addEventListener("click",(()=>{A.scrollLeft+="left"==a.id?-o:o}))}));const n=a=>{s=!0,e=a.pageX,t=A.scrollLeft},i=a=>{if(!s)return;a.preventDefault(),A.classList.add("dragging");let o=a.pageX-e;A.scrollLeft=t-o},d=()=>{s=!1,A.classList.remove("dragging")};A.addEventListener("mousedown",n),A.addEventListener("mousemove",i),A.addEventListener("mouseup",d)}window.addEventListener("load",A)},9180:function(A,a,e){"use strict";var t=e(9242),s=e(3396);function o(A,a){const e=(0,s.up)("router-view");return(0,s.wg)(),(0,s.j4)(e)}var n=e(89);const i={},d=(0,n.Z)(i,[["render",o]]);var r=d,c=e(2483);function l(A,a,e,t,o,n){const i=(0,s.up)("Header"),d=(0,s.up)("LandingPage"),r=(0,s.up)("ServiciosPI"),c=(0,s.up)("ServiciosInt"),l=(0,s.up)("CapacitacionesN"),v=(0,s.up)("Clientes"),u=(0,s.up)("Footer");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(i),(0,s.Wm)(d),(0,s.Wm)(r),(0,s.Wm)(c),(0,s.Wm)(l),(0,s.Wm)(v),(0,s.Wm)(u)],64)}var v=e(7139);const u={class:"hello"},p=(0,s.uE)('<p data-v-b9167eee> For a guide and recipes on how to configure / customize this project,<br data-v-b9167eee> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>vue-cli documentation</a>. </p><h3 data-v-b9167eee>Installed CLI Plugins</h3><ul data-v-b9167eee><li data-v-b9167eee><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-b9167eee>babel</a></li><li data-v-b9167eee><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-b9167eee>eslint</a></li></ul><h3 data-v-b9167eee>Essential Links</h3><ul data-v-b9167eee><li data-v-b9167eee><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>Core Docs</a></li><li data-v-b9167eee><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>Forum</a></li><li data-v-b9167eee><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>Community Chat</a></li><li data-v-b9167eee><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-b9167eee>Twitter</a></li><li data-v-b9167eee><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>News</a></li></ul><h3 data-v-b9167eee>Ecosystem</h3><ul data-v-b9167eee><li data-v-b9167eee><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>vue-router</a></li><li data-v-b9167eee><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>vuex</a></li><li data-v-b9167eee><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-b9167eee>vue-devtools</a></li><li data-v-b9167eee><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>vue-loader</a></li><li data-v-b9167eee><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-b9167eee>awesome-vue</a></li></ul>',7);function m(A,a,e,t,o,n){return(0,s.wg)(),(0,s.iD)("div",u,[(0,s._)("h1",null,(0,v.zw)(e.msg),1),p])}var g={name:"HelloWorld",props:{msg:String}};const f=(0,n.Z)(g,[["render",m],["__scopeId","data-v-b9167eee"]]);var b=f,C=e.p+"img/Logo1.f8371a50.png";const h=A=>((0,s.dD)("data-v-2b412bf8"),A=A(),(0,s.Cn)(),A),w={class:"tm-site-header"},I=h((()=>(0,s._)("div",{class:"cropped"},[(0,s._)("img",{href:"#",src:C,alt:"Imagen",class:"Logo-Imagen"})],-1))),D={class:"border-ul"};function E(A,a,e,t,o,n){const i=(0,s.up)("RouterLink");return(0,s.wg)(),(0,s.iD)("header",w,[I,(0,s._)("div",null,[(0,s._)("ul",D,[(0,s._)("li",null,[(0,s.Wm)(i,{class:"li-element",to:"/"},{default:(0,s.w5)((()=>[(0,s.Uk)("Inicio")])),_:1})]),(0,s._)("li",null,[(0,s.Wm)(i,{class:"li-element",to:"/AboutUs"},{default:(0,s.w5)((()=>[(0,s.Uk)("Acerca de Nosotros")])),_:1})]),(0,s._)("li",null,[(0,s.Wm)(i,{class:"li-element",to:"/Capacitacion"},{default:(0,s.w5)((()=>[(0,s.Uk)("Capacitacion")])),_:1})]),(0,s._)("li",null,[(0,s.Wm)(i,{class:"li-element",to:"/Contacto"},{default:(0,s.w5)((()=>[(0,s.Uk)("Contacto")])),_:1})])])])])}var M={name:"Header",props:{msg:String}};const B=(0,n.Z)(M,[["render",E],["__scopeId","data-v-2b412bf8"]]);var G=B,_=e.p+"img/Engranegif.05fbecd1.gif";const Q=A=>((0,s.dD)("data-v-121d9635"),A=A(),(0,s.Cn)(),A),j={class:"Section-Landing"},y=Q((()=>(0,s._)("div",null,[(0,s._)("h2",{class:"Activos-text"},"Cuidamos de tus activos intangibles"),(0,s._)("h3",{class:"Especialidad-Text"},"Son nuestra especialidad")],-1))),F=Q((()=>(0,s._)("div",null,[(0,s._)("img",{class:"Landing-Image",src:_,alt:"GIF-Landing"})],-1))),N=[y,F];function S(A,a,e,t,o,n){return(0,s.wg)(),(0,s.iD)("section",j,N)}var L={name:"LandinPage",props:{msg:String}};const W=(0,n.Z)(L,[["render",S],["__scopeId","data-v-121d9635"]]);var H=W,T=e.p+"img/Signosdis.bec27e0a.png",P=e.p+"img/Ideas.c507910b.png",q=e.p+"img/Property.5e38d018.png",k="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAG66AABuugHW3rEXAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAVBQTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3ZsMjgAAAG90Uk5TAAEDBQYHCAkKCw8QExUWGBkaHB0kJSYnKC0uNDU2NzhAQkNKTE1OV1tdYWJmaGlrcHF1dn5/gIGCg4SFiI+QkZSen6Gio6arrLCztLW3uLm9w8bKzM3O0dbX2Nne3+Di5ufp7fDy8/X29/r7/P3+y/htRAAADs1JREFUeNrt3fFfE3Ucx3EGyiIhR+XUhNIcOYVyIpyUoyzF4qAkkQQ0HSQwwrz//7fygaa73d2+2+579/1+vq/3j7vPtb6f79Pttg/bBgYMTNnzG4GQNHyvbGKPDU6h1pSy+8dp1grsahf7vypr+19nFQHqqcnb/yCosa+qKQt7/H/zLMB1gGo8ifsfBPPsrGJ8mQB8dlYxYl7/tabBzipG5v4HATsLAAIAAgACAAIAAgACANIZgPQ6AgACAAIAAgACAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAgApYWcBQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAoHPjpNQRABAAEAAQABAAEAAAAAAAAAAAAAAAAAAAAK4DKEWXlWyrY2d7BDAVXTZlWx072yMAL7rMs62One0RwEp02YptdexsjwB2h6KqhnZtq2NnewQQLERVLQS21bGzvQI4mmgvmjgKbKtjZ3sFEGwOh2uGN4PAtjp2tmcAwd1Qh4fvBpExuo6d7R1AsNnyKDuxGcTE5Dp2tg8AwdHC/9faQwtHQWwMrmNn+wHw36utFW+qVJryVnaDxBhbx872B8D6sLMAIAAgACAAIAAgACBpAHj61Ow6AOgF8HBs7KHJdQDQC+D+8MDA8H1z6wCgF8Ct41NumVoHAK0AHl18e87FRybWAUArgGfVwruTCtVnptUBICUAVx+8jGjn89mTraednH0emFP38sFVAKQEYGDg9I2N1pu2bl+IOvPC7S0z6jZunOajYSkC+C9nr8ze8R+/2Nteu1e/fi7+5HPX6/fWtvfyqnvx2L8ze+Vs/DpIjwBYBwBYBwBYBwBYBwBYBwBYBwBYBwBYBwBYBwBYBwBYBwBYBwBYBwBYBwBYBwBYh1sAipX60vEfbSzVK0Wl+yh7fiNIKQ3fKwMgNwCj08sH71cfLE+PdrqHQq0ZpJpmrQCAXACMzO23b8f+3Ejy/q8GqWe1AIDsAQzO7ERvx87MYMId1AINqQEgcwDj6/H7sT4ee1q5qQNAswyAjAFMJl7GNSbjzvMCLZkHQLYAqofJG3JYjTnR1wPAB0CmAKqdtyRGQEMPgAYAsgQwedh5Sw4nlf77aQUAGQIYV/pn3BgHgEwAg+tqe7I+CACRAGZUN2UGABIBjOyobsrOCAAEAphT35U5AMgDMLqvviv7owAQB+BaN9syDQBxAJbbm//Eq5RKlfkn7UeWu//vp/T/CQBNjS0ehCteLb75M5Di4qvwsYMiAIQBqLTt/+V3By+3CagAQBiAerhg8f2ji+GjdQAIA7AUfv5veZAvhq8DlgAgDMBa6HhoEB8e968BQBiA7eQn+fAlwjYAhAHYCx0vtR4uhQ7vAUAYAN3HAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgP0A0goAAAAAAAAAAAAAAAAAAAAAAAAAADAPAF8U6TgAvirWcQB8WbTjAPi6eMcB8IMRrgPgJ2McB8CPRrkOgJ+Ncx6ACesgACAAIAAgACAAIAAgACAAAAAAAAAAAAAAAAAAAAAAAAAAAMBlAFLCzgKAAIAAgACAAIAAgACAtKchc/8b7KxifJkAfHZWMZ5MAPPsrGL0fH4/7zTL7KxqahIB1NhX5ej4/H7eifj+ABIvoCbsWSDy+wNIQtL8/H7eifv+AJJpPtvqduO2PqNrcvLNYff/dA+/oW9CcuqX2F3+66uv/oo9+MspeichX/wZu8W/fzIw8MnvsYf//ILuWZ/CzaO4/f3nu8HXFYPf/RNXcXST63fL89Fvsf++d758W/TlTmzRbx/RQ5ujuLVKTIh1UX9w7/xEQexLV5d3HS4ViX3p8gVe4otFumldTvzQ9Vs8CW8X/XCCjtqVMxs9vMmb8Ibxxhl6alOq+7Fb+dNI/GkjP8Wetl+lq9akj33sUQ4xKQmP5H90fCQ/8wcDQsvT57VcD1ePxKCk8GqOAaHFSeX9HAaEtiatd3QZENqZFGc6DAgtzKU0Ny0J0yV6bWDSfthmQGhXNFy4MSC0KFpeujEgtCXa3rxhQGhFehr9qYUBoQWp7mkc4CQMlvYYEJqQkR81j3ATBoQ/MiDMPX2N/tTCgNDgZHKVxoDQ1GT2Oo0BoZHJ8J0aBoTmJdv3ahkQmpbMP87FgNCoXGpkvh0J5BoMCLPN4Ld5PCAnPel8y4Aww+R2ScaA0Ijk+KKMAWH+yfltGQaEOUfj6E8tDAhzjdbRn1oYEOYX7aM/RYUMCPNJBqM/tTAgzCVfm3P9lXQl+jU7pSWnfjbqFVjCa9GfGRBqyOemvQeT9G7U5+xXyjHxYxoMCLOLod/kyIAwo+Qw+usbJgPC1JLP6E8tDAj1x/C/xmJAqDnG/z0mA0KdseIvshkQakvuoz+1MCDUFANGf2phQKgjH5gx+lO0mjAg/IC97CXnTRn9qSVpQHie3ew+Bo3+1MKAMM0YNvpTCwPC1GLc6E8tDAjTSeHm38aN/tSSMCD8mwGhaqz+ETcGhH3H2NFf33wZECrE5NGfWhgQ9hMRX8TAgLDnCPkqFgaEvUXQlzExIOwhn9ox+lNL0oDwU/Y6KtaM/tTCgLC7WDX6UxTNgFA95zetGv2pJWFAuMmAsCXWjf7UwoBQLR/aOPpTS9KA8EN2/jiWjv7UwoCwU+wd/amFAWFyPvrV4tGfWhIGhL86PyC0fPSniJwBYUzsH/2phQFhdD525zvYkwaEH7u6/079CgMDwnBOfC9m9KeWhAHh9w4OCEWN/tTCgPC9CBv9qYUB4dsIHP0pumdA+DoiR39qYUA4IHb0pxYGhIJHf2pxfEAoevSnFpcHhIVZ2aM/tSQNCGdFDwjH5I/+1JI0IByTu2wnRn9qcXFA6MroTy3uDQgdGv2pxbEBIT/A3haXBoTOjf7U4syA0MHRn1oMGRCWPT/++tyyNHyvTJ+66lOh1pSyquM0a1peU0jtU2FV1rJeZ1WDALF9qslbVxDU0gcgtU9lYY9rx2mmfh0gtk+exHUFwXzaAMT2yZe5MD9tAGL7JOZ1TWsaaQMQ2yeZ6wqCtAGI7RMAAAAAAAAAAAAAAAAAAAAAAMBpAKoNsLUuLQBi6gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFYCkBLdAMT0CQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAEANUG2FqXFgAxdQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA5wCUos8r2VanG4CYPoVvmIo+ccq2Ot0AxPQpfIMXfaJnW51uAGL6FL5hJfrEFdvqdAMQ06fwDbtDUecN7dpWpxuAmD6FbwgWok5cCGyr0w1ATJ/abjmaaD9v4iiwrU47ACl9aj9zczh83vBmENhWpx2AlD5FnHk3dObw3SAyRtfpByCkT5F2Wh49JjaDmJhclwEAGX2KPPNo4f9ryKGFoyA2BtdlAUBEn2JO3V3xpkqlKW9lN0iMsXWZAJDQp0BoMgJgf58AAAAAAAAAAAAAAAAAAAAAIDFPn5pdZwoAe/rUXfnDsbGHJteZAsCiPnVVfX94YGD4vrl1pgCwqU/dFN867sUtU+tMAWBVn9RLH11824yLj0ysMwWAZX1SLXxWLbzrRqH6zLQ6UwBY16fwDVcfvIwoez57srUfJ2efB+bUvXxwNWsAYvrU3rjTNzZab9q6fSGqJRdub5lRt3HjdB4fDRPSp8jGnb0ye8d//GJve+1e/fq5+K6cu16/t7a9l1fdi8f+ndkrZ2M2SDcAIX3S3biskgsACX0CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOB1ipX60vEfIyzVK0WlOy17fiNIKQ3fK1sBwJY+dbew0enlg/erD5anRzstq1BrBqmmWSuYDqC9T9dM7VM3CxuZ22+/m/25keR1rQapZ7VgNACr+qS+sMGZnei72ZkZTFhYLdCQmsEALOuT8sLG1+PvZ308/nmtqWNhzbKxAGzrk+rCJhMvTxqTcefNB1oybyqAXvvk5dUnxYVVD5Pv6LAac6KvZ2G+oQDs65Pawqqd7ypmZQ09C2uYCcDCPiktbPKw810dTio1Lq0YCcDGPqksbFyJZ2PcdQBW9klhYYPrave1Pug2ADv7pLCwGdU7m3EbgJ196rywkR3VO9sZcRmApX3qvLA59XubcxmApX3quLDRffV72x91F4Ctfeq4sOlu7u6auwCudfN/P20RgOX2/+gTr1IqVeaftB9ZHtC1McYDsLVPnU4oHoQrXi2++fOG4uKr8LGDoqsArO1TpxMqbeu6/O7g5baVVVwFYG2fOp1QDxcsvn90MXy07ioAa/vU6YSl8PNay4NXMfz8tuQqAGv71OmEtdDx0M+Sh8f9a64CCPcpNIj3jO1TpxO2k5+8wk99264CsLZPnU7YCx0vtR4uhQ7vuQrA2j7129isNsZ0ANb2CQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAFI6nFekAMusTAAAAAAAAAAAAAAAAAAAAAAAAACkuzJUvirS2T7oX5spXxVrbJ90Lc+XLovs9buyXRfd73JWvi7e2T7oX5soPRljbJ+0Lc+QnY6ztk/aFOfKjUdb2Sf/C3PjZOGv7lMXCsogEALn0CQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAEACnR3TgxfQIAAAAAAAAAAAAAAAAAAAAAADgFoCFzXY20AYjtky9zYX7aAMT2yZO5sPm0AYjtk57PpeedZjltAHL7VJO4sFr6UxSxfdLxufS8E/G5+L4jt0+pfy4970R+Lj4FAXL7lObn0vNO3OfiU7kOENinfwHliYBkLWqULQAAAABJRU5ErkJggg==",x=e.p+"img/DAutor.db81ef99.png",O=e.p+"img/user.e4fea021.png",U=e.p+"img/tecnologias.33ff333b.png";const Y={class:"Texto"},X=(0,s.uE)('<h1 data-v-b7043ed2>SERVICIOS PI Y NUEVAS TECNOLOGIAS</h1><div class="Elementos" data-v-b7043ed2><div data-v-b7043ed2><h3 data-v-b7043ed2>Marcas y demas signos distintivos</h3><div class="Elemento" data-v-b7043ed2><div class="Fondo-IMG" data-v-b7043ed2><img class="IMG-Elements" src="'+T+'" alt="Signos-IMG" data-v-b7043ed2></div></div></div><div data-v-b7043ed2><h3 data-v-b7043ed2>Invenciones</h3><div class="Elemento" data-v-b7043ed2><div class="Fondo-IMG" data-v-b7043ed2><img class="IMG-Elements" src="'+P+'" alt="" data-v-b7043ed2></div></div></div><div data-v-b7043ed2><h3 data-v-b7043ed2>Secretos industriales </h3><div class="Elemento" data-v-b7043ed2><div class="Fondo-IMG" data-v-b7043ed2><img class="IMG-Elements" src="'+q+'" alt="" data-v-b7043ed2></div></div></div><div data-v-b7043ed2><h3 data-v-b7043ed2>Franquicias</h3><div class="Elemento" data-v-b7043ed2><div class="Fondo-IMG" data-v-b7043ed2><img class="IMG-Elements" src="'+k+'" alt="" data-v-b7043ed2></div></div></div><div data-v-b7043ed2><h3 data-v-b7043ed2>Derechos de Autor y conexos</h3><div class="Elemento" data-v-b7043ed2><div class="Fondo-IMG" data-v-b7043ed2><img class="IMG-Elements" src="'+x+'" alt="" data-v-b7043ed2></div></div></div><div data-v-b7043ed2><h3 data-v-b7043ed2>Derechos a la propia imagen</h3><div class="Elemento" data-v-b7043ed2><div class="Fondo-IMG" data-v-b7043ed2><img class="IMG-Elements" src="'+O+'" alt="" data-v-b7043ed2></div></div></div><div data-v-b7043ed2><h3 data-v-b7043ed2>Nuevas Tecnologías y TI</h3><div class="Elemento" data-v-b7043ed2><div class="Fondo-IMG" data-v-b7043ed2><img class="IMG-Elements" src="'+U+'" alt="" data-v-b7043ed2></div></div></div></div>',2),Z=[X];function R(A,a,e,t,o,n){return(0,s.wg)(),(0,s.iD)("section",Y,Z)}var V={name:"ServiciosPI",props:{msg:String}};const J=(0,n.Z)(V,[["render",R],["__scopeId","data-v-b7043ed2"]]);var K=J;const z={class:"Texto"},$=(0,s.uE)('<h1 data-v-775fe753>SERVICIOS INTEGRALES</h1><div class="Elementos" data-v-775fe753><div data-v-775fe753><h3 data-v-775fe753>Creacion de marca</h3><div class="Elemento" data-v-775fe753><div class="Fondo-IMG" data-v-775fe753><img class="IMG-Elements" src="'+T+'" alt="Signos-IMG" data-v-775fe753></div></div></div><div data-v-775fe753><h3 data-v-775fe753>Diseños de interfaces y páginas web</h3><div class="Elemento" data-v-775fe753><div class="Fondo-IMG" data-v-775fe753><img class="IMG-Elements" src="'+P+'" alt="" data-v-775fe753></div></div></div><div data-v-775fe753><h3 data-v-775fe753>Manejo de Marcas</h3><div class="Elemento" data-v-775fe753><div class="Fondo-IMG" data-v-775fe753><img class="IMG-Elements" src="'+q+'" alt="" data-v-775fe753></div></div></div><div data-v-775fe753><h3 data-v-775fe753>Politicas de uso de sitios web</h3><div class="Elemento" data-v-775fe753><div class="Fondo-IMG" data-v-775fe753><img class="IMG-Elements" src="'+k+'" alt="" data-v-775fe753></div></div></div><div data-v-775fe753><h3 data-v-775fe753>Aviso de privacidad de sitios web</h3><div class="Elemento" data-v-775fe753><div class="Fondo-IMG" data-v-775fe753><img class="IMG-Elements" src="'+x+'" alt="" data-v-775fe753></div></div></div></div>',2),AA=[$];function aA(A,a,e,t,o,n){return(0,s.wg)(),(0,s.iD)("section",z,AA)}var eA={name:"ServiciosINT",props:{msg:String}};const tA=(0,n.Z)(eA,[["render",aA],["__scopeId","data-v-775fe753"]]);var sA=tA;const oA=A=>((0,s.dD)("data-v-884b1b98"),A=A(),(0,s.Cn)(),A),nA={class:"Section-Capacitaciones"},iA=oA((()=>(0,s._)("h1",null,"Capacitaciones",-1))),dA={class:"contenedor"},rA=oA((()=>(0,s._)("h4",null,"Curso 1",-1))),cA=oA((()=>(0,s._)("figure",null,[(0,s._)("img",{src:"https://www.cofide.mx/hs-fs/hubfs/Imágenes%20Agosto/Tipos%20de%20capacitación/art-1-Capacitacion-para-el-trabajo.jpg?width=900&name=art-1-Capacitacion-para-el-trabajo.jpg",alt:"XV"}),(0,s._)("div",{class:"overlay"},[(0,s._)("p",{class:"Texto-IMG"},"Viabilidad de registro marcario para Diseñadores Gráficos, y publico afin con valor curricular")])],-1))),lA=oA((()=>(0,s._)("h4",null,"Curso 2",-1))),vA=oA((()=>(0,s._)("figure",null,[(0,s._)("img",{src:"https://www.cofide.mx/hs-fs/hubfs/Imágenes%20Agosto/Tipos%20de%20capacitación/art-2-Capacitacion-en-el-trabajo.jpg?width=900&name=art-2-Capacitacion-en-el-trabajo.jpg",alt:"XV"}),(0,s._)("div",{class:"overlay"},[(0,s._)("p",{class:"Texto-IMG"},"Cómo registro mi marca en línea en IMPI")])],-1))),uA=oA((()=>(0,s._)("h4",null,"Curso 3",-1))),pA=oA((()=>(0,s._)("figure",null,[(0,s._)("img",{src:"https://www.cofide.mx/hs-fs/hubfs/Imágenes%20Agosto/Tipos%20de%20capacitación/art-3-Capacitacion-promocional.jpg?width=900&name=art-3-Capacitacion-promocional.jpg",alt:"XV"}),(0,s._)("div",{class:"overlay"},[(0,s._)("p",{class:"Texto-IMG"},"Cómo registro mi obra en INDAUTOR")])],-1)));function mA(A,a,e,t,o,n){const i=(0,s.up)("RouterLink");return(0,s.wg)(),(0,s.iD)("section",nA,[iA,(0,s._)("div",dA,[(0,s._)("div",null,[rA,(0,s.Wm)(i,{class:"li-element",to:"/Capacitacion/Curso1"},{default:(0,s.w5)((()=>[cA])),_:1})]),(0,s._)("div",null,[lA,(0,s.Wm)(i,{class:"li-element",to:"/Capacitacion/Curso2"},{default:(0,s.w5)((()=>[vA])),_:1})]),(0,s._)("div",null,[uA,(0,s.Wm)(i,{class:"li-element",to:"/Capacitacion/Curso3"},{default:(0,s.w5)((()=>[pA])),_:1})])])])}var gA={name:"CapacitacionesN",props:{msg:String}};const fA=(0,n.Z)(gA,[["render",mA],["__scopeId","data-v-884b1b98"]]);var bA=fA,CA=e.p+"img/Cliente.7c815878.png";const hA={class:"Section-Slider"},wA=(0,s.uE)('<h1 data-v-4241dabc>Nuestros Clientes</h1><div class="wrapper" data-v-4241dabc><i id="left" class="fa-sharp fa-solid fa-circle-arrow-right fa-rotate-180" data-v-4241dabc></i><div class="slider" data-v-4241dabc><div class="slide" data-v-4241dabc><img src="'+CA+'" alt="" data-v-4241dabc></div><div class="slide" data-v-4241dabc><img src="'+CA+'" alt="" data-v-4241dabc></div><div class="slide" data-v-4241dabc><img src="'+CA+'" alt="" data-v-4241dabc></div><div class="slide" data-v-4241dabc><img src="'+CA+'" alt="" data-v-4241dabc></div><div class="slide" data-v-4241dabc><img src="'+CA+'" alt="" data-v-4241dabc></div><div class="slide" data-v-4241dabc><img src="'+CA+'" alt="" data-v-4241dabc></div><div class="slide" data-v-4241dabc><img src="'+CA+'" alt="" data-v-4241dabc></div><div class="slide" data-v-4241dabc><img src="'+CA+'" alt="" data-v-4241dabc></div><div class="slide" data-v-4241dabc><img src="'+CA+'" alt="" data-v-4241dabc></div></div><i id="right" class="fa-sharp fa-solid fa-circle-arrow-right" data-v-4241dabc></i></div>',2),IA=[wA];function DA(A,a,e,t,o,n){return(0,s.wg)(),(0,s.iD)("section",hA,IA)}var EA={name:"Clientes",props:{msg:String}};const MA=(0,n.Z)(EA,[["render",DA],["__scopeId","data-v-4241dabc"]]);var BA=MA;const GA=A=>((0,s.dD)("data-v-3102ef36"),A=A(),(0,s.Cn)(),A),_A={class:"Footer-Area"},QA=(0,s.uE)('<div class="Redes-Display" data-v-3102ef36><a href="https://www.instagram.com/dalfar_consult/?igshid=YmMyMTA2M2Y%3D" target="_blank" class="Cursor" data-v-3102ef36><i class="fa-brands fa-instagram" data-v-3102ef36></i></a><a href="https://www.facebook.com/profile.php?id=100090690902830&amp;mibextid=ZbWKwL" target="_blank" class="Cursor" data-v-3102ef36><i class="fa-brands fa-facebook" data-v-3102ef36></i></a><a href="#" target="_blank" class="Cursor" data-v-3102ef36><i class="fa-brands fa-whatsapp Cursor" data-v-3102ef36></i></a></div><p class="copyright" data-v-3102ef36>DalfaRCONSULTORES @ 2023 All rights reserved </p>',2),jA={class:"Display-Info"},yA=GA((()=>(0,s._)("p",{class:"Info-Cursor"},"AVISO DE PRIVACIDAD",-1))),FA=GA((()=>(0,s._)("p",{class:"Info-Cursor"},"TERMINOS Y CONDICIONES",-1)));function NA(A,a,e,t,o,n){const i=(0,s.up)("P");return(0,s.wg)(),(0,s.iD)("section",_A,[QA,(0,s._)("div",jA,[yA,FA,(0,s.Wm)(i,{class:"Info-Cursor"},{default:(0,s.w5)((()=>[(0,s.Uk)("POLITICA DE COOKIES")])),_:1})])])}var SA={name:"Footer",props:{msg:String}};const LA=(0,n.Z)(SA,[["render",NA],["__scopeId","data-v-3102ef36"]]);var WA=LA,HA={name:"HomeView",components:{Header:G,HelloWorld:b,LandingPage:H,ServiciosPI:K,ServiciosInt:sA,CapacitacionesN:bA,Clientes:BA,Footer:WA}};const TA=(0,n.Z)(HA,[["render",l]]);var PA=TA;function qA(A,a,e,t,o,n){const i=(0,s.up)("Header"),d=(0,s.up)("Curso1Cap"),r=(0,s.up)("Footer");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Wm)(i,{class:"Header-Class"}),(0,s.Wm)(d),(0,s.Wm)(r)])}const kA=A=>((0,s.dD)("data-v-755a23bb"),A=A(),(0,s.Cn)(),A),xA={class:"Section-Capacitaciones"},OA=kA((()=>(0,s._)("h1",null,"Capacitacion curso 1",-1))),UA=[OA];function YA(A,a,e,t,o,n){return(0,s.wg)(),(0,s.iD)("section",xA,UA)}var XA={name:"Curso1Cap",props:{msg:String}};const ZA=(0,n.Z)(XA,[["render",YA],["__scopeId","data-v-755a23bb"]]);var RA=ZA,VA={name:"Curso1",components:{Header:G,Footer:WA,CapacitacionesN:bA,Curso1Cap:RA}};const JA=(0,n.Z)(VA,[["render",qA],["__scopeId","data-v-03e4faf4"]]);var KA=JA;function zA(A,a,e,t,o,n){const i=(0,s.up)("Header"),d=(0,s.up)("Curso2Cap"),r=(0,s.up)("Footer");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Wm)(i,{class:"Header-Class"}),(0,s.Wm)(d),(0,s.Wm)(r)])}const $A=A=>((0,s.dD)("data-v-d1afd548"),A=A(),(0,s.Cn)(),A),Aa={class:"Section-Capacitaciones"},aa=$A((()=>(0,s._)("h1",null,"Capacitacion curso 2",-1))),ea=[aa];function ta(A,a,e,t,o,n){return(0,s.wg)(),(0,s.iD)("section",Aa,ea)}var sa={name:"Curso2Cap",props:{msg:String}};const oa=(0,n.Z)(sa,[["render",ta],["__scopeId","data-v-d1afd548"]]);var na=oa,ia={name:"Curso2",components:{Header:G,Footer:WA,CapacitacionesN:bA,Curso2Cap:na}};const da=(0,n.Z)(ia,[["render",zA],["__scopeId","data-v-6cffa57c"]]);var ra=da;function ca(A,a,e,t,o,n){const i=(0,s.up)("Header"),d=(0,s.up)("Curso3Cap"),r=(0,s.up)("Footer");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Wm)(i,{class:"Header-Class"}),(0,s.Wm)(d),(0,s.Wm)(r)])}const la=A=>((0,s.dD)("data-v-5831087d"),A=A(),(0,s.Cn)(),A),va={class:"Section-Capacitaciones"},ua=la((()=>(0,s._)("h1",null,"Capacitacion curso 3",-1))),pa=[ua];function ma(A,a,e,t,o,n){return(0,s.wg)(),(0,s.iD)("section",va,pa)}var ga={name:"Curso3Cap",props:{msg:String}};const fa=(0,n.Z)(ga,[["render",ma],["__scopeId","data-v-5831087d"]]);var ba=fa,Ca={name:"Curso3",components:{Header:G,Footer:WA,CapacitacionesN:bA,Curso3Cap:ba}};const ha=(0,n.Z)(Ca,[["render",ca],["__scopeId","data-v-79bc36ba"]]);var wa=ha;function Ia(A,a,e,t,o,n){const i=(0,s.up)("Header"),d=(0,s.up)("AboutUsComponent"),r=(0,s.up)("Footer");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Wm)(i),(0,s.Wm)(d),(0,s.Wm)(r)])}const Da={class:"Section-Landing"},Ea=(0,s.uE)("<h1 data-v-071e1434>ACERCA DE NOSOTROS</h1><h2 data-v-071e1434>Descripcion</h2><p data-v-071e1434>Somos una Consultoría especializada en llevar tu negocio al siguiente nivel, previniendo, conteniendo y solucionando conflictos en materia de Propiedad Intelectual y Nuevas Tecnologías, enfocados en promover una competencia leal, así como el respeto a los activos intangibles.</p><h2 data-v-071e1434>MIsion</h2><p data-v-071e1434>Identificar las necesidades de nuestros clientes, aportando con diligencia y profesionalismo las soluciones y estrategias más viables que garanticen la mayor certeza jurídica, salvaguardando en todo momento el talento, creatividad, innovación y distintividad, así como los valores que los definan bajo una cultura de respeto y competencia leal. </p><h2 data-v-071e1434>Vision</h2><p data-v-071e1434>Ser una consultoría con presencia en toda la república mexicana, siendo un referente en el sector por nuestra calidad, diligencia y profesionalismo en nuestros servicios.</p><h2 data-v-071e1434>Valores</h2><ul data-v-071e1434><li data-v-071e1434>Diligencia</li><li data-v-071e1434>Etica profesional y corporativa</li><li data-v-071e1434>Confidencialidad</li><li data-v-071e1434>Trabajo en equipo</li><li data-v-071e1434>Responsabilidad social</li></ul>",9),Ma=[Ea];function Ba(A,a,e,t,o,n){return(0,s.wg)(),(0,s.iD)("section",Da,Ma)}var Ga={name:"AboutUsComponent",props:{msg:String}};const _a=(0,n.Z)(Ga,[["render",Ba],["__scopeId","data-v-071e1434"]]);var Qa=_a,ja={name:"AboutUs",components:{Header:G,AboutUsComponent:Qa,Footer:WA}};const ya=(0,n.Z)(ja,[["render",Ia]]);var Fa=ya;function Na(A,a,e,t,o,n){const i=(0,s.up)("Header"),d=(0,s.up)("ContactoComponent"),r=(0,s.up)("Footer");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Wm)(i,{class:"Header-Class"}),(0,s.Wm)(d),(0,s.Wm)(r)])}const Sa=A=>((0,s.dD)("data-v-6d411c0d"),A=A(),(0,s.Cn)(),A),La={class:"Section-Contacto"},Wa=Sa((()=>(0,s._)("div",{class:"form-wrapper"},[(0,s._)("h1",null,"Formulario de Correo"),(0,s._)("form",{method:"post",action:""},[(0,s._)("label",{for:"name"},"Nombre:"),(0,s._)("input",{type:"text",id:"name",name:"name",placeholder:"Ingresa tu nombre",required:""}),(0,s._)("label",{for:"email"},"Correo Electrónico:"),(0,s._)("input",{type:"email",id:"email",name:"email",placeholder:"Ingresa tu correo electrónico",required:""}),(0,s._)("label",{for:"tema"},"Tema:"),(0,s._)("input",{type:"text",id:"tema",name:"tema",placeholder:"Que tema quieres tratar",required:""}),(0,s._)("label",{for:"message"},"Mensaje:"),(0,s._)("textarea",{id:"message",name:"message",rows:"6",placeholder:"Escribe aquí tu mensaje",required:""}),(0,s._)("input",{type:"submit",value:"Enviar"}),(0,s._)("p",{class:"form-message"})])],-1))),Ha=[Wa];function Ta(A,a,e,t,o,n){return(0,s.wg)(),(0,s.iD)("section",La,Ha)}var Pa={name:"Contacto",props:{msg:String}};const qa=(0,n.Z)(Pa,[["render",Ta],["__scopeId","data-v-6d411c0d"]]);var ka=qa,xa={name:"Contacto",components:{Header:G,Footer:WA,CapacitacionesN:bA,ContactoComponent:ka}};const Oa=(0,n.Z)(xa,[["render",Na],["__scopeId","data-v-00e1b59e"]]);var Ua=Oa;function Ya(A,a,e,t,o,n){const i=(0,s.up)("Header"),d=(0,s.up)("CapacitacionesN"),r=(0,s.up)("Footer");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Wm)(i,{class:"Header-Class"}),(0,s.Wm)(d,{class:"Capacitaciones"}),(0,s.Wm)(r)])}var Xa={name:"Capacitacion",components:{Header:G,Footer:WA,CapacitacionesN:bA}};const Za=(0,n.Z)(Xa,[["render",Ya],["__scopeId","data-v-85675678"]]);var Ra=Za;const Va=[{path:"/",name:"home",component:PA},{path:"/AboutUS",name:"AboutUS",component:Fa},{path:"/Capacitacion",name:"Capacitacion",component:Ra},{path:"/Capacitacion/Curso1",name:"Curso1",component:KA},{path:"/Capacitacion/Curso2",name:"Curso2",component:ra},{path:"/Capacitacion/Curso3",name:"Curso3",component:wa},{path:"/Contacto",name:"Contacto",component:Ua}],Ja=(0,c.p7)({history:(0,c.PO)("/DalfaPaginaGit/"),routes:Va,mode:"hash"});var Ka=Ja;e(8034);(0,t.ri)(r).use(Ka).mount("#app")}},a={};function e(t){var s=a[t];if(void 0!==s)return s.exports;var o=a[t]={exports:{}};return A[t](o,o.exports,e),o.exports}e.m=A,function(){var A=[];e.O=function(a,t,s,o){if(!t){var n=1/0;for(c=0;c<A.length;c++){t=A[c][0],s=A[c][1],o=A[c][2];for(var i=!0,d=0;d<t.length;d++)(!1&o||n>=o)&&Object.keys(e.O).every((function(A){return e.O[A](t[d])}))?t.splice(d--,1):(i=!1,o<n&&(n=o));if(i){A.splice(c--,1);var r=s();void 0!==r&&(a=r)}}return a}o=o||0;for(var c=A.length;c>0&&A[c-1][2]>o;c--)A[c]=A[c-1];A[c]=[t,s,o]}}(),function(){e.n=function(A){var a=A&&A.__esModule?function(){return A["default"]}:function(){return A};return e.d(a,{a:a}),a}}(),function(){e.d=function(A,a){for(var t in a)e.o(a,t)&&!e.o(A,t)&&Object.defineProperty(A,t,{enumerable:!0,get:a[t]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(A){if("object"===typeof window)return window}}()}(),function(){e.o=function(A,a){return Object.prototype.hasOwnProperty.call(A,a)}}(),function(){e.p="/DalfaPaginaGit/"}(),function(){var A={143:0};e.O.j=function(a){return 0===A[a]};var a=function(a,t){var s,o,n=t[0],i=t[1],d=t[2],r=0;if(n.some((function(a){return 0!==A[a]}))){for(s in i)e.o(i,s)&&(e.m[s]=i[s]);if(d)var c=d(e)}for(a&&a(t);r<n.length;r++)o=n[r],e.o(A,o)&&A[o]&&A[o][0](),A[o]=0;return e.O(c)},t=self["webpackChunkdalfarconsultores"]=self["webpackChunkdalfarconsultores"]||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))}();var t=e.O(void 0,[998],(function(){return e(9180)}));t=e.O(t)})();
//# sourceMappingURL=app.43ebc632.js.map