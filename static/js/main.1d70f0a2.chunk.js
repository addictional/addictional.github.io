(this["webpackJsonponline-store"]=this["webpackJsonponline-store"]||[]).push([[0],[,function(e,a,t){e.exports={wrapper:"style_wrapper__3YJta",element:"style_element__3sDEf",active:"style_active__2DB4Y"}},,,function(e,a,t){e.exports={wrapper:"style_wrapper__1f2iB",element:"style_element__25mS_","element--disabled":"style_element--disabled__2UId0","wrapper--stop":"style_wrapper--stop__3LXIT",buttons:"style_buttons__19E3i",nav:"style_nav__RewZS",circle:"style_circle__19HLJ","circle--active":"style_circle--active__1kqmV",left:"style_left__2ukc_",right:"style_right__OVoem","image-wrapper":"style_image-wrapper__3EvML"}},,function(e,a,t){e.exports={wrapper:"style_wrapper__3Bgnq",logo:"style_logo__2fHhL",nav:"style_nav__3XsCu",city:"style_city__21U9T",favorite:"style_favorite__C-Ex2",search:"style_search__3M0YJ","menu-wrapper":"style_menu-wrapper__3rReK",menu:"style_menu__3SPQM",burger:"style_burger__1Ey4T",text:"style_text__1d6p5"}},function(e,a,t){e.exports={wrapper:"style_wrapper__J2Dya",rating:"style_rating__3jhx3","rating-upper":"style_rating-upper__Q13o3","rating-lower":"style_rating-lower__1O85a",info:"style_info__1GhBs",label:"style_label__XfjQk",name:"style_name__OeLse",params:"style_params__1dqOf",price:"style_price__2IQXy"}},function(e,a,t){e.exports={wrapper:"style_wrapper__26tHW",container:"style_container__1qNI4","first-block":"style_first-block__1I5p9",icons:"style_icons__1K5LO",logo:"style_logo__3ACfc","social-media":"style_social-media__3LKiv",last:"style_last__6lQ7l",paymentMethods:"style_paymentMethods__29vTt",end:"style_end__3m6vj"}},function(e,a,t){e.exports={wrapper:"style_wrapper__UaxGU",title:"style_title__3Bahm",description:"style_description__3VPmV",form:"style_form__24zIT",submit:"style_submit__LC2S3"}},,function(e,a,t){e.exports={wrapper:"style_wrapper__3P6nZ",name:"style_name__ewFTJ",link:"style_link__2NPZ-"}},,,,,,,,function(e,a,t){e.exports=t(30)},,,,,function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(17),s=t.n(r),c=(t(24),t(5)),m=t(1),i=t.n(m),o=t(2),p=function(e){var a=e.spaceBetween,t=Object(n.useState)(0),r=Object(c.a)(t,2),s=r[0],m=r[1],p=Object(n.useState)([0,0]),u=Object(c.a)(p,2),f=u[0],v=u[1],E=Object(n.useRef)(null),_=Object(n.useRef)(null);return l.a.createElement("div",{ref:E,onTouchMove:function(e){var a=e.touches[0],t=a.clientX,n=a.clientY;if(0!==f[0]){var l,r,c=s-f[0]+t,i=(null===(l=_.current)||void 0===l?void 0:l.scrollWidth)-(null===(r=E.current)||void 0===r?void 0:r.clientWidth);if(Math.abs(c)>i||c>0)return void(c>0&&0!==s?m(0):Math.abs(c)>i&&m(-i));m(c)}v([t,n])},className:i.a.wrapper},l.a.createElement("nav",{ref:_,style:{transform:"translateX(".concat(s,"px)")}},l.a.createElement(o.b,{style:{marginRight:a||20},to:"/shit",className:i.a.element,activeClassName:i.a.active},"23 \u0444\u0435\u0432\u0440\u0430\u043b\u044f"),l.a.createElement(o.b,{style:{marginRight:a||20},to:"/shit2",className:i.a.element,activeClassName:i.a.active},"\u0421\u043a\u0438\u0434\u043a\u0438"),l.a.createElement(o.b,{style:{marginRight:a||20},to:"/shit3",className:i.a.element,activeClassName:i.a.active},"\u041a\u043d\u0438\u0433\u0438"),l.a.createElement(o.b,{style:{marginRight:a||20},to:"/shit4",className:i.a.element,activeClassName:i.a.active},"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u0438\u043a\u0430"),l.a.createElement(o.b,{style:{marginRight:a||20},to:"/shit5",className:i.a.element,activeClassName:i.a.active},"\u0412\u0435\u0441\u043d\u0430"),l.a.createElement(o.b,{style:{marginRight:a||20},to:"/shit6",className:i.a.element,activeClassName:i.a.active},"\u0418\u043d\u0442\u0435\u0440\u044c\u0435\u0440"),l.a.createElement(o.b,{style:{marginRight:a||20},to:"/shit7",className:i.a.element,activeClassName:i.a.active},"\u041d\u043e\u0443\u0442\u0431\u0443\u043a\u0438"),l.a.createElement(o.b,{style:{marginRight:a||20},to:"/shit8",className:i.a.element,activeClassName:i.a.active},"\u0425\u0430\u0431\u044b"),l.a.createElement(o.b,{style:{marginRight:a||20},to:"/shit9",className:i.a.element,activeClassName:i.a.active},"\u041a\u0430\u0442\u0440\u0438\u0434\u0436\u044b")))},u=t(6),f=t.n(u),v=function(){return l.a.createElement("header",null,l.a.createElement("div",{className:f.a.wrapper},l.a.createElement("div",{className:f.a.logo},l.a.createElement("svg",{width:104,height:62},l.a.createElement("use",{xlinkHref:"/sprite.svg#logo"})),l.a.createElement("span",null,"free.pick")),l.a.createElement("nav",{className:f.a.nav},l.a.createElement("a",{className:f.a.city,href:"/"},"\u041c\u043e\u0441\u043a\u0432\u0430"),l.a.createElement("a",{href:"/"},"\u041e\u043f\u043b\u0430\u0442\u0430"),l.a.createElement("a",{href:"/"},"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430"),l.a.createElement("a",{href:"/"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0442"),l.a.createElement("a",{href:"/",className:f.a.favorite},l.a.createElement("svg",{width:36,height:30},l.a.createElement("use",{xlinkHref:"/sprite.svg#favorite"})),l.a.createElement("span",null,"3")),l.a.createElement("a",{href:"/"},l.a.createElement("svg",{width:34,height:30},l.a.createElement("use",{xlinkHref:"/sprite.svg#profile"}))),l.a.createElement("a",{href:"/"},l.a.createElement("svg",{width:30,height:30},l.a.createElement("use",{xlinkHref:"/sprite.svg#basket"}))))),l.a.createElement("div",{className:f.a.search},l.a.createElement("input",{type:"text"}),l.a.createElement("button",{type:"submit"},"\u041d\u0430\u0439\u0442\u0438")),l.a.createElement("div",{className:f.a["menu-wrapper"]},l.a.createElement("div",{className:f.a.menu},l.a.createElement("div",{className:f.a.burger}),l.a.createElement("span",{className:f.a.text},"\u041a\u0430\u0442\u0430\u043b\u043e\u0433")),l.a.createElement(p,{spaceBetween:30})))},E=t(4),_=t.n(E);console.log(_.a);var g={prev:{transform:"scale(0.33) translate(-200%)",zIndex:2},active:{transform:"scale(1) translate(0)",zIndex:100},next:{transform:"scale(0.33) translate(200%)",zIndex:2},next2:{transform:"scale(0) translate(0)",opacity:0,zIndex:1},prev2:{transform:"scale(0) translate(0)",opacity:0,zIndex:1}};function d(e,a,t){var n=a.max,l=a.min,r=Math.abs(n-l)/100,s=Math.abs(n-Math.abs(e*r));return{scale:s,translate:t/(s*t)*e*2/3}}var h=function(e){var a=Object(n.useState)(g),t=Object(c.a)(a,2),r=t[0],s=r.prev2,m=r.prev,i=r.active,o=r.next,p=r.next2,u=t[1],f=Object(n.useState)(!1),v=Object(c.a)(f,2),E=v[0],h=v[1],y=Object(n.useState)({start:0,end:5}),b=Object(c.a)(y,2),x=b[0],N=x.start,w=x.end,k=b[1],j=Object(n.useState)(e.products.slice(N,w)),O=Object(c.a)(j,2),S=O[0],M=O[1],C=Object(n.useState)({position:[0,0],fingers:0,timestamp:0}),H=Object(c.a)(C,2),I=H[0],R=H[1],T=Object(n.useState)([0,0]),z=Object(c.a)(T,2),B=z[0],W=z[1],L=Object(n.useState)(0),J=Object(c.a)(L,2),X=J[0],Q=J[1],Y=Object(n.useState)(!1),q=Object(c.a)(Y,2),P=q[0],U=q[1];Object(n.useEffect)((function(){E||P||(u(g),M(e.products.slice(N,w)),setTimeout((function(){h(!0)}),100))}),[E]);var V=function(){E&&(u({prev:g.active,prev2:g.prev,active:g.next,next:g.next2,next2:g.next2}),k({start:0===N?0:N-1,end:w-1}))},D=function(){u({prev:g.prev2,prev2:g.prev2,active:g.prev,next:g.active,next2:g.next}),k({start:N+1,end:w+1})},F=e.products.map((function(e,a){var t=Math.floor((w-1+N)/2);return l.a.createElement("button",{key:a,className:"".concat(_.a.circle," ").concat(t===a?_.a["circle--active"]:"")})}));return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{onTouchMove:function(e){var a=Array.from(e.touches).reduce((function(e,a){return e[0]+=a.clientX,e[1]+=a.clientY,e}),[0,0]).map((function(a){return a/e.touches.length}));if(0===I.fingers)R({position:a,fingers:e.touches.length,timestamp:e.timeStamp}),U(!0);else{var t=a[0]-(0===B[0]?a[0]:B[0]);Q(X+t/5.8),W(a);var n=function(e){var a=d(100-Math.abs(e),e<0?{max:1,min:.33}:{max:0,min:.33},580),t=e>0?d(-100+e,{max:1,min:.33},580):d(-100-e,{max:0,min:.33},580);return{active:d(e,{max:1,min:.33},580),next:a,prev:t}}(X);u({prev2:s,prev:{transform:"scale(".concat(n.prev.scale,") translate(").concat(n.prev.translate,"%)"),zIndex:1},active:{transform:"scale(".concat(n.active.scale,") translate(").concat(n.active.translate,"%)"),zIndex:2},next:{transform:"scale(".concat(n.next.scale,") translate(").concat(n.next.translate,"%)"),zIndex:2},next2:p})}},onTouchEnd:function(e){W([0,0]);var a=I.timestamp,t=Math.abs(X)/(e.timeStamp-a);R({position:[0,0],fingers:0,timestamp:0}),U(!1),X<-30||X>30||t>.15?X<0?D():V():u(g),Q(0)},className:"".concat(_.a.wrapper," ").concat(E&&!P?"":_.a["wrapper--stop"])},S.map((function(e,a){var t={},n="".concat(_.a.element," ").concat(2!==a?_.a["element--disabled"]:"");switch(a){case 0:t=s;break;case 1:t=m;break;case 2:t=i;break;case 3:t=o;break;case 4:t=p}return l.a.createElement("div",{key:a,style:t,onTransitionEnd:function(){2===a&&h(!1)},className:n},l.a.createElement("div",{className:_.a["image-wrapper"]},l.a.createElement("span",null,"- 30%"),l.a.createElement("svg",{width:40,height:40},l.a.createElement("use",{xlinkHref:"/sprite.svg#favorite"})),l.a.createElement("img",{src:e.image,alt:""})))}))),l.a.createElement("div",{className:_.a.buttons},l.a.createElement("button",{onClick:V}," ",l.a.createElement("div",{className:_.a.left})," "),l.a.createElement("div",{className:_.a.nav},F),l.a.createElement("button",{onClick:D}," ",l.a.createElement("div",{className:_.a.right})," ")))},y=t(7),b=t.n(y),x=function(){return l.a.createElement("div",{className:b.a.wrapper},l.a.createElement("img",{src:"/images/product1.png",alt:""}),l.a.createElement("div",{className:b.a.info},l.a.createElement("span",{className:b.a.label},"Mila Bezgerts"),l.a.createElement("span",{className:b.a.name},"\u0416\u0438\u043b\u0435\u0442"),l.a.createElement("span",{className:b.a.params},"44-164, 46-164, 48-1asdf"),l.a.createElement("span",{className:b.a.price},"1 578 \u20bd")),l.a.createElement("div",{className:b.a.rating},l.a.createElement("div",{className:b.a["rating-upper"],style:{width:"50%"}},l.a.createElement("span",null,"\u2605"),l.a.createElement("span",null,"\u2605"),l.a.createElement("span",null,"\u2605"),l.a.createElement("span",null,"\u2605"),l.a.createElement("span",null,"\u2605")),l.a.createElement("div",{className:b.a["rating-lower"]},l.a.createElement("span",null,"\u2605"),l.a.createElement("span",null,"\u2605"),l.a.createElement("span",null,"\u2605"),l.a.createElement("span",null,"\u2605"),l.a.createElement("span",null,"\u2605"))))},N=t(9),w=t.n(N),k=function(){return l.a.createElement("div",{className:w.a.wrapper},l.a.createElement("span",{className:w.a.title},l.a.createElement("strong",null,"\u0421\u043a\u0438\u0434\u043a\u0430")," \u0434\u043e ",l.a.createElement("strong",null,"25%")),l.a.createElement("span",{className:w.a.description},"\u041f\u043e\u0434\u043f\u0438\u0448\u0438\u0442\u0435\u0441\u044c \u043d\u0430 \u043d\u0430\u0448\u0443 \u0440\u0430\u0441\u0441\u043b\u044b\u043a\u0443 ",l.a.createElement("br",null)," \u0438 \u043f\u043e\u043b\u0443\u0447\u0430\u0439\u0442\u0435 \u0432\u044b\u0433\u043e\u0434\u043d\u044b\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f ",l.a.createElement("br",null)," \u043f\u043e \u0432\u0430\u0448\u0438\u043c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u044f\u043c \u0438 \u0441\u043a\u0438\u0434\u043e\u0447\u043d\u044b\u0439 \u043f\u0440\u043e\u043c\u043e-\u043a\u043e\u0434"),l.a.createElement("div",{className:w.a.form},l.a.createElement("input",{type:"email",placeholder:"\u0412\u0430\u0448\u0430 \u043f\u043e\u0447\u0442\u0430"}),l.a.createElement("button",{className:w.a.submit},"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f")))},j=t(11),O=t.n(j),S=function(e){var a=e.name,t=e.links,n=e.className;return l.a.createElement("nav",{className:"".concat(O.a.wrapper," ").concat(n||"")},l.a.createElement("span",{className:O.a.name},a),t.map((function(e,a){var t=e.href,n=e.name;return l.a.createElement(o.b,{key:a,className:O.a.link,to:t},n)})))},M=t(8),C=t.n(M),H=function(){return l.a.createElement("footer",{className:C.a.wrapper},l.a.createElement(k,null),l.a.createElement("div",{className:C.a.container},l.a.createElement("div",{className:C.a["first-block"]},l.a.createElement("div",{className:C.a.icons},l.a.createElement("div",{className:C.a.logo},l.a.createElement("svg",null,l.a.createElement("use",{xlinkHref:"/sprite.svg#logo"})),l.a.createElement("span",null,"free.pick")),l.a.createElement("div",{className:C.a["social-media"]},l.a.createElement("svg",null,l.a.createElement("use",{xlinkHref:"/sprite.svg#youtube"})),l.a.createElement("svg",null,l.a.createElement("use",{xlinkHref:"/sprite.svg#facebook"})),l.a.createElement("svg",null,l.a.createElement("use",{xlinkHref:"/sprite.svg#instagram"})),l.a.createElement("svg",null,l.a.createElement("use",{xlinkHref:"/sprite.svg#linkedin"})),l.a.createElement("svg",null,l.a.createElement("use",{xlinkHref:"/sprite.svg#twitter"})),l.a.createElement("svg",null,l.a.createElement("use",{xlinkHref:"/sprite.svg#vkontakte"})))),l.a.createElement(S,{name:"\u041e \u043d\u0430\u0441",links:[{name:"\u041e \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438",href:"/fasdfas"},{name:"\u0420\u0435\u043a\u0432\u0438\u0437\u0438\u0442\u044b",href:"/fasdfas"},{name:"\u0412\u0430\u043a\u0430\u043d\u0441\u0438\u0438",href:"/fasdfas"},{name:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b",href:"/fasdfas"}]}),l.a.createElement(S,{name:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0438 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430",links:[{name:"\u041e \u0437\u0430\u043a\u0430\u0437\u0435",href:"/fasdfas"},{name:"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430",href:"/fasdfas"},{name:"\u041f\u0443\u0431\u043b\u0438\u0447\u043d\u0430\u044f \u043e\u0444\u0435\u0440\u0442\u0430",href:"/fasdfas"},{name:"\u0427\u0430\u0441\u0442\u044b\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b",href:"/fasdfas"}]}),l.a.createElement(S,{className:C.a.last,name:"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430 \u0438 \u043e\u043f\u043b\u0430\u0442\u0430",links:[{name:"\u0421\u043f\u043e\u0441\u043e\u0431\u044b \u043e\u043f\u043b\u0430\u0442\u044b",href:"/fasdfas"},{name:"\u041f\u0443\u043d\u043a\u0442\u044b \u0441\u0430\u043c\u043e\u0432\u044b\u0432\u043e\u0437\u0430",href:"/fasdfas"},{name:"\u0413\u043e\u0440\u043e\u0434\u0430 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438",href:"/fasdfas"}]}),l.a.createElement("div",{className:C.a.paymentMethods},l.a.createElement("img",{src:"/icons/visa.png",alt:""}),l.a.createElement("img",{src:"/icons/mastercard.png",alt:""}),l.a.createElement("img",{src:"/icons/mir.png",alt:""}))),l.a.createElement("div",{className:C.a.end},l.a.createElement("span",null,"2008-2020 Free.pick.ru \u2014\u043c\u0430\u0433\u0430\u0437\u0438\u043d \u0441\u0432\u043e\u0431\u043e\u0434\u043d\u043e\u0433\u043e \u0432\u044b\u0431\u043e\u0440\u0430"))))},I=[{image:"/images/cofee-machine.png"},{image:"/images/cofee-machine.png"},{image:"/images/phone.png"},{image:"/images/laptop.png"},{image:"/images/cofee-machine.png"},{image:"/images/cofee-machine.png"},{image:"/images/cofee-machine.png"},{image:"/images/cofee-machine.png"},{image:"/images/cofee-machine.png"},{image:"/images/cofee-machine.png"}];var R=function(){return l.a.createElement(o.a,null,l.a.createElement(v,null),l.a.createElement(h,{products:I}),l.a.createElement("div",{style:{margin:"60px 10px 0 10px"}},l.a.createElement("p",{style:{fontStyle:"normal",fontWeight:"bold",fontSize:"34px",lineHeight:"50px",color:"#616267",margin:0,marginBottom:5}},"\u0412\u0435\u0441\u0435\u043d\u043d\u044f\u044f \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f"),l.a.createElement(p,null),l.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",marginTop:40,overflow:"hidden",height:343,flexWrap:"wrap"}},l.a.createElement(x,null),l.a.createElement(x,null),l.a.createElement(x,null),l.a.createElement(x,null),l.a.createElement(x,null))),l.a.createElement("div",{style:{margin:"60px 10px 0 10px"}},l.a.createElement("p",{style:{fontStyle:"normal",fontWeight:"bold",fontSize:"34px",lineHeight:"50px",color:"#616267",margin:0,marginBottom:5}},"\u0412\u0435\u0441\u0435\u043d\u043d\u044f\u044f \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f"),l.a.createElement(p,null),l.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",marginTop:40,overflow:"hidden",height:343,flexWrap:"wrap"}},l.a.createElement(x,null),l.a.createElement(x,null),l.a.createElement(x,null),l.a.createElement(x,null),l.a.createElement(x,null))),l.a.createElement(H,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[19,1,2]]]);
//# sourceMappingURL=main.1d70f0a2.chunk.js.map