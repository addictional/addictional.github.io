(this["webpackJsonponline-store"]=this["webpackJsonponline-store"]||[]).push([[0],[,function(e,a,t){e.exports={topSlider:"App_topSlider__3u5bQ",topSliderItem:"App_topSliderItem__2GHPp",title:"App_title__2NQUu",description:"App_description__22pJT",image:"App_image__3r6tt"}},,function(e,a,t){e.exports={wrapper:"style_wrapper__J2Dya",addToBasket:"style_addToBasket__1J6mQ",image:"style_image__3U_yK",rating:"style_rating__3jhx3","rating-upper":"style_rating-upper__Q13o3","rating-lower":"style_rating-lower__1O85a",info:"style_info__1GhBs",label:"style_label__XfjQk",name:"style_name__OeLse",params:"style_params__1dqOf",price:"style_price__2IQXy"}},,function(e,a,t){e.exports={wrapper:"style_wrapper__3Bgnq",logo:"style_logo__2fHhL",nav:"style_nav__3XsCu",city:"style_city__21U9T",favorite:"style_favorite__C-Ex2",search:"style_search__3M0YJ","menu-wrapper":"style_menu-wrapper__3rReK",menu:"style_menu__3SPQM",burger:"style_burger__1Ey4T",text:"style_text__1d6p5"}},function(e,a,t){e.exports={wrapper:"style_wrapper__26tHW",container:"style_container__1qNI4","first-block":"style_first-block__1I5p9",icons:"style_icons__1K5LO",logo:"style_logo__3ACfc","social-media":"style_social-media__3LKiv",last:"style_last__6lQ7l",paymentMethods:"style_paymentMethods__29vTt",end:"style_end__3m6vj"}},,function(e,a,t){e.exports={wrapper:"style_wrapper__UaxGU",title:"style_title__3Bahm",description:"style_description__3VPmV",form:"style_form__24zIT",submit:"style_submit__LC2S3",first:"style_first__1Gv-u",second:"style_second__1S-Lz"}},function(e,a,t){e.exports={top:"style_top__2MswD",name:"style_name__rtf1H",wrapper:"style_wrapper__3OwyV",products:"style_products__1tVUG",topSlider:"style_topSlider__3SlGj",topSliderItem:"style_topSliderItem__UVWbN",title:"style_title__2h83q",description:"style_description__3hTjb",image:"style_image__2QT3u",buyButton:"style_buyButton__2ShQR"}},,function(e,a,t){e.exports={wrapper:"style_wrapper__3YJta",element:"style_element__3sDEf",active:"style_active__2DB4Y"}},function(e,a,t){e.exports={wrapper:"style_wrapper__3LpoH",link:"style_link__2ufaV",active:"style_active__aEYhf"}},function(e,a,t){e.exports={wrapper:"style_wrapper__3P6nZ",name:"style_name__ewFTJ",link:"style_link__2NPZ-"}},function(e,a,t){e.exports={wrapper:"style_wrapper__24s9e",container:"style_container__3BnvA"}},,,,function(e,a,t){e.exports={roundedButton:"style_roundedButton__2nDLk",purple:"style_purple__2WqrE"}},,,,,function(e,a,t){e.exports=t(34)},,,,,function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(21),s=t.n(r),m=(t(28),t(4)),i=t(7),c=t(12),o=t.n(c),p=function(e){var a=e.links;return l.a.createElement("nav",{className:o.a.wrapper},a.map((function(e,a){var t=e.link,n=e.logo,r=e.name;return l.a.createElement(i.b,{className:o.a.link,activeClassName:o.a.active,exact:"/"===t,to:t},l.a.createElement("span",null,r),l.a.createElement("svg",{width:20,height:20},l.a.createElement("use",{xlinkHref:n})))})))},E=t(11),u=t.n(E),d=function(e){var a=e.spaceBetween,t=e.data,r=Object(n.useState)(0),s=Object(m.a)(r,2),c=s[0],o=s[1],p=Object(n.useState)([0,0]),E=Object(m.a)(p,2),d=E[0],_=E[1],g=Object(n.useRef)(null),f=Object(n.useRef)(null);return l.a.createElement("div",{ref:g,onTouchMove:function(e){var a=e.touches[0],t=a.clientX,n=a.clientY;if(0!==d[0]){var l,r,s=c-d[0]+t,m=(null===(l=f.current)||void 0===l?void 0:l.scrollWidth)-(null===(r=g.current)||void 0===r?void 0:r.clientWidth);if(Math.abs(s)>m||s>0)return void(s>0&&0!==c?o(0):Math.abs(s)>m&&o(-m));o(s)}_([t,n])},onTouchEnd:function(){_([0,0])},className:u.a.wrapper},l.a.createElement("nav",{ref:f,style:{transform:"translateX(".concat(c,"px)")}},t.map((function(e){var t=e.name;return e.href?l.a.createElement(i.b,{style:{marginRight:a||20},to:"/shit",className:u.a.element,activeClassName:u.a.active},t):l.a.createElement("button",{style:{marginRight:a||20},className:u.a.element},t)}))))},_=t(5),g=t.n(_),f=function(){return l.a.createElement("header",null,l.a.createElement("div",{className:g.a.wrapper},l.a.createElement("div",{className:g.a.logo},l.a.createElement("svg",{width:104,height:62},l.a.createElement("use",{xlinkHref:"/sprite.svg#logo"})),l.a.createElement("span",null,"free.pick")),l.a.createElement("nav",{className:g.a.nav},l.a.createElement("a",{className:g.a.city,href:"/"},"\u041c\u043e\u0441\u043a\u0432\u0430"),l.a.createElement("a",{href:"/"},"\u041e\u043f\u043b\u0430\u0442\u0430"),l.a.createElement("a",{href:"/"},"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430"),l.a.createElement("a",{href:"/"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0442"),l.a.createElement("a",{href:"/",className:g.a.favorite},l.a.createElement("svg",{width:36,height:30},l.a.createElement("use",{xlinkHref:"/sprite.svg#favorite"})),l.a.createElement("span",null,"3")),l.a.createElement("a",{href:"/"},l.a.createElement("svg",{width:34,height:30},l.a.createElement("use",{xlinkHref:"/sprite.svg#profile"}))),l.a.createElement("a",{href:"/"},l.a.createElement("svg",{width:30,height:30},l.a.createElement("use",{xlinkHref:"/sprite.svg#basket"}))))),l.a.createElement("div",{className:g.a.search},l.a.createElement("input",{type:"text"}),l.a.createElement("button",{type:"submit"},"\u041d\u0430\u0439\u0442\u0438")),l.a.createElement("div",{className:g.a["menu-wrapper"]},l.a.createElement("div",{className:g.a.menu},l.a.createElement("div",{className:g.a.burger}),l.a.createElement("span",{className:g.a.text},"\u041a\u0430\u0442\u0430\u043b\u043e\u0433")),l.a.createElement(d,{data:[{name:"23 \u0444\u0435\u0432\u0440\u0430\u043b\u044f",href:"/shit"},{name:"\u0421\u043a\u0438\u0434\u043a\u0438",href:"/shit2"},{name:"\u041a\u043d\u0438\u0433\u0438",href:"/shit3"},{name:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u0438\u043a\u0430",href:"/shit4"},{name:"\u0412\u0435\u0441\u043d\u0430",href:"/shit5"},{name:"\u0418\u043d\u0442\u0435\u0440\u044c\u0435\u0440",href:"/shit6"},{name:"\u041d\u043e\u0443\u0442\u0431\u0443\u043a\u0438",href:"/shit7"},{name:"\u0425\u0430\u0431\u044b",href:"/shit8"},{name:"\u041a\u0430\u0442\u0440\u0438\u0434\u0436\u044b",href:"/shit9"}],spaceBetween:30})))},v=t(8),N=t.n(v),h=function(){return l.a.createElement("div",{className:N.a.wrapper},l.a.createElement("span",{className:N.a.title},l.a.createElement("strong",{className:N.a.first},"\u0421\u043a\u0438\u0434\u043a\u0430")," ",l.a.createElement("span",{className:N.a.second},"\u0434\u043e ",l.a.createElement("strong",null,"25%"))),l.a.createElement("span",{className:N.a.description},"\u041f\u043e\u0434\u043f\u0438\u0448\u0438\u0442\u0435\u0441\u044c \u043d\u0430 \u043d\u0430\u0448\u0443 \u0440\u0430\u0441\u0441\u043b\u044b\u043a\u0443 ",l.a.createElement("br",null)," \u0438 \u043f\u043e\u043b\u0443\u0447\u0430\u0439\u0442\u0435 \u0432\u044b\u0433\u043e\u0434\u043d\u044b\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f ",l.a.createElement("br",null)," \u043f\u043e \u0432\u0430\u0448\u0438\u043c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u044f\u043c \u0438 \u0441\u043a\u0438\u0434\u043e\u0447\u043d\u044b\u0439 \u043f\u0440\u043e\u043c\u043e-\u043a\u043e\u0434"),l.a.createElement("div",{className:N.a.form},l.a.createElement("input",{type:"email",placeholder:"\u0412\u0430\u0448\u0430 \u043f\u043e\u0447\u0442\u0430"}),l.a.createElement("button",{className:N.a.submit},"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f")))},y=t(13),b=t.n(y),w=function(e){var a=e.name,t=e.links,n=e.className;return l.a.createElement("nav",{className:"".concat(b.a.wrapper," ").concat(n||"")},l.a.createElement("span",{className:b.a.name},a),t.map((function(e,a){var t=e.href,n=e.name;return l.a.createElement(i.b,{key:a,className:b.a.link,to:t},n)})))},k=t(6),S=t.n(k),x=l.a.createContext(window.innerWidth),C=function(){var e=Object(n.useContext)(x);return l.a.createElement("footer",{className:S.a.wrapper},l.a.createElement(h,null),e>767?l.a.createElement("div",{className:S.a.container},l.a.createElement("div",{className:S.a["first-block"]},l.a.createElement("div",{className:S.a.icons},l.a.createElement("div",{className:S.a.logo},l.a.createElement("svg",null,l.a.createElement("use",{xlinkHref:"/sprite.svg#logo"})),l.a.createElement("span",null,"free.pick")),l.a.createElement("div",{className:S.a["social-media"]},l.a.createElement("svg",null,l.a.createElement("use",{xlinkHref:"/sprite.svg#youtube"})),l.a.createElement("svg",null,l.a.createElement("use",{xlinkHref:"/sprite.svg#facebook"})),l.a.createElement("svg",null,l.a.createElement("use",{xlinkHref:"/sprite.svg#instagram"})),l.a.createElement("svg",null,l.a.createElement("use",{xlinkHref:"/sprite.svg#linkedin"})),l.a.createElement("svg",null,l.a.createElement("use",{xlinkHref:"/sprite.svg#twitter"})),l.a.createElement("svg",null,l.a.createElement("use",{xlinkHref:"/sprite.svg#vkontakte"})))),l.a.createElement(w,{name:"\u041e \u043d\u0430\u0441",links:[{name:"\u041e \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438",href:"/fasdfas"},{name:"\u0420\u0435\u043a\u0432\u0438\u0437\u0438\u0442\u044b",href:"/fasdfas"},{name:"\u0412\u0430\u043a\u0430\u043d\u0441\u0438\u0438",href:"/fasdfas"},{name:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b",href:"/fasdfas"}]}),l.a.createElement(w,{name:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0438 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430",links:[{name:"\u041e \u0437\u0430\u043a\u0430\u0437\u0435",href:"/fasdfas"},{name:"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430",href:"/fasdfas"},{name:"\u041f\u0443\u0431\u043b\u0438\u0447\u043d\u0430\u044f \u043e\u0444\u0435\u0440\u0442\u0430",href:"/fasdfas"},{name:"\u0427\u0430\u0441\u0442\u044b\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b",href:"/fasdfas"}]}),l.a.createElement(w,{className:S.a.last,name:"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430 \u0438 \u043e\u043f\u043b\u0430\u0442\u0430",links:[{name:"\u0421\u043f\u043e\u0441\u043e\u0431\u044b \u043e\u043f\u043b\u0430\u0442\u044b",href:"/fasdfas"},{name:"\u041f\u0443\u043d\u043a\u0442\u044b \u0441\u0430\u043c\u043e\u0432\u044b\u0432\u043e\u0437\u0430",href:"/fasdfas"},{name:"\u0413\u043e\u0440\u043e\u0434\u0430 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438",href:"/fasdfas"}]}),l.a.createElement("div",{className:S.a.paymentMethods},l.a.createElement("img",{src:"/icons/visa.png",alt:""}),l.a.createElement("img",{src:"/icons/mastercard.png",alt:""}),l.a.createElement("img",{src:"/icons/mir.png",alt:""}))),l.a.createElement("div",{className:S.a.end},l.a.createElement("span",null,"2008-2020 Free.pick.ru \u2014\u043c\u0430\u0433\u0430\u0437\u0438\u043d \u0441\u0432\u043e\u0431\u043e\u0434\u043d\u043e\u0433\u043e \u0432\u044b\u0431\u043e\u0440\u0430"))):void 0)},O=t(9),j=t.n(O),I=t(3),B=t.n(I),M=new Intl.NumberFormat("ru-RU",{style:"currency",currency:"RUB",minimumFractionDigits:0});var L=function(e){var a,t=e.label,r=e.name,s=e.params,m=e.price,i=e.rate,c=e.image,o=Object(n.useContext)(x);return l.a.createElement("div",{className:B.a.wrapper},l.a.createElement("div",{className:B.a.image},l.a.createElement("img",{src:c,alt:""})),l.a.createElement("div",{className:B.a.info},l.a.createElement("span",{className:B.a.label},t),l.a.createElement("span",{className:B.a.name},r),l.a.createElement("span",{className:B.a.params},s||l.a.createElement("br",null)),l.a.createElement("span",{className:B.a.price},(a=m,M.format(a)))),l.a.createElement("div",{className:B.a.rating},l.a.createElement("div",{className:B.a["rating-upper"],style:{width:"".concat(100*i,"%")}},l.a.createElement("span",null,"\u2605"),l.a.createElement("span",null,"\u2605"),l.a.createElement("span",null,"\u2605"),l.a.createElement("span",null,"\u2605"),l.a.createElement("span",null,"\u2605")),l.a.createElement("div",{className:B.a["rating-lower"]},l.a.createElement("span",null,"\u2605"),l.a.createElement("span",null,"\u2605"),l.a.createElement("span",null,"\u2605"),l.a.createElement("span",null,"\u2605"),l.a.createElement("span",null,"\u2605"))),o<768?l.a.createElement("button",{className:B.a.addToBasket},"\u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"):void 0)},H=t(18),T=t.n(H),A=function(e){var a=e.className,t=e.children;return l.a.createElement("button",{className:"".concat(T.a.roundedButton," ").concat(T.a.purple," ").concat(a||"")},t)},R=function(e){var a=e.filter,t=e.name,n=e.products,r=e.slider;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:j.a.top},l.a.createElement("p",{className:j.a.name},t),a&&a.length?l.a.createElement(d,{data:a}):void 0),l.a.createElement("div",null,r,l.a.createElement("div",{className:j.a.wrapper},l.a.createElement("div",{className:j.a.products},n.map((function(e,a){return l.a.createElement(L,Object.assign({key:a},e))}))),l.a.createElement(A,{className:j.a.buyButton},"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0432\u0441\u0435 \u0442\u043e\u0432\u0430\u0440\u044b"))))},W=t(14),X=t.n(W),D=function(e){var a=e.children,t=e.className,r=e.initialOffset,s=Object(n.useRef)(null),i=Object(n.useRef)(null),c=Object(n.useState)(r?-r:0),o=Object(m.a)(c,2),p=o[0],E=o[1],u=Object(n.useState)({x:0,timeStamp:0}),d=Object(m.a)(u,2),_=d[0],g=d[1],f=Object(n.useState)({x:0,timeStamp:0}),v=Object(m.a)(f,2),N=v[0],h=v[1];return l.a.createElement("div",{onTouchMove:function(e){var a=e.touches,t=e.timeStamp;if(_.x){h(_);var n=_.x-a[0].clientX;E(p+n)}g({x:a[0].clientX,timeStamp:t})},onTouchEnd:function(e){var a=e.timeStamp;if(N.x){var t=(N.x-_.x)/(a-N.timeStamp);!function(e){var a=e.timing,t=e.draw,n=e.duration,l=performance.now();requestAnimationFrame((function e(r){var s=(r-l)/n;s>1&&(s=1);var m=a(s);t(m),s<1&&requestAnimationFrame(e)}))}({timing:function(e){return 1-Math.sin(Math.pow(e,2))},draw:function(e){E((function(a){return a+t*e}))},duration:Math.abs(.4*t*1e3)})}h({x:0,timeStamp:0}),g({x:0,timeStamp:0})},ref:s,className:"".concat(X.a.wrapper," ").concat(t||"")},l.a.createElement("div",{ref:i,className:X.a.container,style:{transform:"translateX(".concat(-p,"px)")}},l.a.Children.map(a,(function(e,a){return l.a.createElement("div",{className:X.a.element,key:a},e)}))))},F=t(1),Q=t.n(F),U=[{link:"/",logo:"/sprite.svg#home",name:"\u0414\u043e\u043c\u0430\u0448\u043d\u044f\u044f"},{link:"/product-cart",logo:"/sprite.svg#basket",name:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"},{link:"/catalog",logo:"/sprite.svg#catalog",name:"\u041a\u0430\u0442\u0430\u043b\u043e\u0433"},{link:"/favorite",logo:"/sprite.svg#favorite",name:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"},{link:"/profile",logo:"/sprite.svg#profile",name:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"}],G=[{label:"T.TACCARDI",name:"\u0422\u0443\u0444\u043b\u0438",params:"35, 36, 37, 38, 39, 40",price:4590,rate:1,image:"/images/image 83.png"},{label:"Mila Bezgerts",name:"\u0416\u0438\u043b\u0435\u0442",params:"44-164, 46-164, 48-12, 23-32",price:6327,rate:.8,image:"/images/product1.png"},{label:"Envy Lab",name:"\u0422\u043e\u043b\u0441\u0442\u043e\u0432\u043a\u0430",params:"XS, S, \u041c, L, XL, 2XL, 3XL",price:3789,rate:1,image:"/images/image 85.png"},{label:"Lassie",name:"\u041a\u0443\u0440\u0442\u043a\u0430 \u0434\u0435\u0442\u0441\u043a\u0430\u044f",params:" 92, 98, 104, 110, 116 ",price:5410,rate:.8,image:"/images/image 86.png"},{label:"Mothercare",name:"\u0414\u0436\u0438\u043d\u0441\u044b \u0434\u0435\u0442\u0441\u043a\u0438\u0435",params:" 92, 98, 104, 110, 116",price:2e3,rate:.6,image:"/images/image 87.png"}],J=[{label:"Black+Decker",name:"\u0414\u0440\u0435\u043b\u044c- \u0448\u0443\u0440\u0443\u043f\u043e\u0432\u0435\u0440\u0442 BDfdasfasdfas",params:"",price:2670,rate:.54,image:"/images/\u0428\u0443\u0440\u0438\u043a 1.png"},{label:"Makita",name:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043b\u043e\u0431\u0437\u0438\u043a 4329KX1",params:"",price:15344,rate:.8,image:"/images/Kj,pbr 1.png"},{label:"\u0421\u0422\u0410\u0412\u0420",name:"\u041a\u043e\u043c\u043f\u0440\u0435\u0441\u0441\u043e\u0440 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0439",params:"",price:2662,rate:.46,image:"/images/\u041a\u043e\u043c\u043f\u0440\u0435\u0441\u0441\u043e\u04401 1.png"},{label:"Makita",name:"\u0428\u043b\u0438\u0444\u043c\u0430\u0448\u0438\u043d\u043a\u0430 DGA504RF",params:"",price:8900,rate:1,image:"/images/image 80.png"},{label:"Makita",name:"\u041f\u0438\u043b\u0430 \u0434\u0438\u0441\u043a\u043e\u0432\u0430\u044f 5008 MG",params:"",price:11278,rate:.32,image:"/images/image 82.png"}],q=[{label:"CASIO Edifice",name:"Edifice EFR-547L-7A",params:"",price:9500,rate:.9,image:"/images/\u0427\u0430\u0441\u044b Casio 1.png"},{label:"CASIO Edifice",name:"EDIFICE EFR-556L-1A",params:"",price:9832,rate:.7,image:"/images/image 76.png"}];var K=function(){var e=Object(n.useState)(window.innerWidth),a=Object(m.a)(e,2),t=a[0],r=a[1],s=Object(n.useState)(window.innerWidth<768?J.slice(0,4):J),c=Object(m.a)(s,2),o=c[0],E=c[1],u=Object(n.useState)(window.innerWidth<768?G.slice(0,4):G),d=Object(m.a)(u,2),_=d[0],g=d[1],v=function(){r(window.innerWidth),window.innerWidth<768?(E(J.slice(0,4)),g(G.slice(0,4))):(E(J),g(G))};return Object(n.useEffect)((function(){return window.addEventListener("resize",v),function(){window.removeEventListener("resize",v)}}),[]),l.a.createElement(i.a,null,l.a.createElement(x.Provider,{value:t},t>767?l.a.createElement(f,null):void 0,l.a.createElement(R,{name:"\u0427\u0430\u0441\u044b",products:q,filter:[{name:"\u0428\u0443\u0440\u0443\u043f\u043e\u0432\u0451\u0440\u0442"},{name:"\u041b\u043e\u0431\u0437\u0438\u043a\u0438"},{name:"\u0414\u0440\u0435\u043b\u0438"},{name:"\u041d\u0430\u0431\u043e\u0440\u044b \u0438\u043d\u0441\u0442\u0443\u0440\u043c\u0435\u043d\u0442\u043e\u0432"}],slider:l.a.createElement(D,{initialOffset:10,className:Q.a.topSlider},l.a.createElement("div",{className:Q.a.topSliderItem},l.a.createElement("div",null,l.a.createElement("span",{className:Q.a.title},"\u0427\u0430\u0441\u044b Casio"),l.a.createElement("span",{className:Q.a.description},"\u041b\u0443\u0447\u0448\u0438\u0435 \u043c\u043e\u0434\u0435\u043b\u0438 \u043c\u0430\u0440\u043a\u0438")),l.a.createElement("div",{className:Q.a.image},l.a.createElement("img",{src:"/images/Casio_\u043f\u0440\u0435\u0432\u044c\u044e 2.png",alt:""}))),l.a.createElement("div",{className:Q.a.topSliderItem},l.a.createElement("div",null,l.a.createElement("span",{className:Q.a.title},"\u0427\u0430\u0441\u044b Casio"),l.a.createElement("span",{className:Q.a.description},"\u041b\u0443\u0447\u0448\u0438\u0435 \u043c\u043e\u0434\u0435\u043b\u0438 \u043c\u0430\u0440\u043a\u0438")),l.a.createElement("div",{className:Q.a.image},l.a.createElement("img",{src:"/images/Casio_\u043f\u0440\u0435\u0432\u044c\u044e 2.png",alt:""}))),l.a.createElement("div",{className:Q.a.topSliderItem},l.a.createElement("div",null,l.a.createElement("span",{className:Q.a.title},"\u0427\u0430\u0441\u044b Casio"),l.a.createElement("span",{className:Q.a.description},"\u041b\u0443\u0447\u0448\u0438\u0435 \u043c\u043e\u0434\u0435\u043b\u0438 \u043c\u0430\u0440\u043a\u0438")),l.a.createElement("div",{className:Q.a.image},l.a.createElement("img",{src:"/images/Casio_\u043f\u0440\u0435\u0432\u044c\u044e 2.png",alt:""}))),l.a.createElement("div",{className:Q.a.topSliderItem},l.a.createElement("div",null,l.a.createElement("span",{className:Q.a.title},"\u0427\u0430\u0441\u044b Casio"),l.a.createElement("span",{className:Q.a.description},"\u041b\u0443\u0447\u0448\u0438\u0435 \u043c\u043e\u0434\u0435\u043b\u0438 \u043c\u0430\u0440\u043a\u0438")),l.a.createElement("div",{className:Q.a.image},l.a.createElement("img",{src:"/images/Casio_\u043f\u0440\u0435\u0432\u044c\u044e 2.png",alt:""}))),l.a.createElement("div",{className:Q.a.topSliderItem},l.a.createElement("div",null,l.a.createElement("span",{className:Q.a.title},"\u0427\u0430\u0441\u044b Casio"),l.a.createElement("span",{className:Q.a.description},"\u041b\u0443\u0447\u0448\u0438\u0435 \u043c\u043e\u0434\u0435\u043b\u0438 \u043c\u0430\u0440\u043a\u0438")),l.a.createElement("div",{className:Q.a.image},l.a.createElement("img",{src:"/images/Casio_\u043f\u0440\u0435\u0432\u044c\u044e 2.png",alt:""}))),l.a.createElement("div",{className:Q.a.topSliderItem},l.a.createElement("div",null,l.a.createElement("span",{className:Q.a.title},"\u0427\u0430\u0441\u044b Casio"),l.a.createElement("span",{className:Q.a.description},"\u041b\u0443\u0447\u0448\u0438\u0435 \u043c\u043e\u0434\u0435\u043b\u0438 \u043c\u0430\u0440\u043a\u0438")),l.a.createElement("div",{className:Q.a.image},l.a.createElement("img",{src:"/images/Casio_\u043f\u0440\u0435\u0432\u044c\u044e 2.png",alt:""}))),l.a.createElement("div",{className:Q.a.topSliderItem},l.a.createElement("div",null,l.a.createElement("span",{className:Q.a.title},"\u0427\u0430\u0441\u044b Casio"),l.a.createElement("span",{className:Q.a.description},"\u041b\u0443\u0447\u0448\u0438\u0435 \u043c\u043e\u0434\u0435\u043b\u0438 \u043c\u0430\u0440\u043a\u0438")),l.a.createElement("div",{className:Q.a.image},l.a.createElement("img",{src:"/images/Casio_\u043f\u0440\u0435\u0432\u044c\u044e 2.png",alt:""}))),l.a.createElement("div",{className:Q.a.topSliderItem},l.a.createElement("div",null,l.a.createElement("span",{className:Q.a.title},"\u0427\u0430\u0441\u044b Casio"),l.a.createElement("span",{className:Q.a.description},"\u041b\u0443\u0447\u0448\u0438\u0435 \u043c\u043e\u0434\u0435\u043b\u0438 \u043c\u0430\u0440\u043a\u0438")),l.a.createElement("div",{className:Q.a.image},l.a.createElement("img",{src:"/images/Casio_\u043f\u0440\u0435\u0432\u044c\u044e 2.png",alt:""}))),l.a.createElement("div",{className:Q.a.topSliderItem},l.a.createElement("div",null,l.a.createElement("span",{className:Q.a.title},"\u0427\u0430\u0441\u044b Casio"),l.a.createElement("span",{className:Q.a.description},"\u041b\u0443\u0447\u0448\u0438\u0435 \u043c\u043e\u0434\u0435\u043b\u0438 \u043c\u0430\u0440\u043a\u0438")),l.a.createElement("div",{className:Q.a.image},l.a.createElement("img",{src:"/images/Casio_\u043f\u0440\u0435\u0432\u044c\u044e 2.png",alt:""}))),l.a.createElement("div",{className:Q.a.topSliderItem},l.a.createElement("div",null,l.a.createElement("span",{className:Q.a.title},"\u0427\u0430\u0441\u044b Casio"),l.a.createElement("span",{className:Q.a.description},"\u041b\u0443\u0447\u0448\u0438\u0435 \u043c\u043e\u0434\u0435\u043b\u0438 \u043c\u0430\u0440\u043a\u0438")),l.a.createElement("div",{className:Q.a.image},l.a.createElement("img",{src:"/images/Casio_\u043f\u0440\u0435\u0432\u044c\u044e 2.png",alt:""}))),l.a.createElement("div",{className:Q.a.topSliderItem},l.a.createElement("div",null,l.a.createElement("span",{className:Q.a.title},"\u0427\u0430\u0441\u044b Casio"),l.a.createElement("span",{className:Q.a.description},"\u041b\u0443\u0447\u0448\u0438\u0435 \u043c\u043e\u0434\u0435\u043b\u0438 \u043c\u0430\u0440\u043a\u0438")),l.a.createElement("div",{className:Q.a.image},l.a.createElement("img",{src:"/images/Casio_\u043f\u0440\u0435\u0432\u044c\u044e 2.png",alt:""}))),l.a.createElement("div",{className:Q.a.topSliderItem},l.a.createElement("div",null,l.a.createElement("span",{className:Q.a.title},"\u0427\u0430\u0441\u044b Casio"),l.a.createElement("span",{className:Q.a.description},"\u041b\u0443\u0447\u0448\u0438\u0435 \u043c\u043e\u0434\u0435\u043b\u0438 \u043c\u0430\u0440\u043a\u0438")),l.a.createElement("div",{className:Q.a.image},l.a.createElement("img",{src:"/images/Casio_\u043f\u0440\u0435\u0432\u044c\u044e 2.png",alt:""}))),l.a.createElement("div",{className:Q.a.topSliderItem},l.a.createElement("div",null,l.a.createElement("span",{className:Q.a.title},"\u0427\u0430\u0441\u044b Casio"),l.a.createElement("span",{className:Q.a.description},"\u041b\u0443\u0447\u0448\u0438\u0435 \u043c\u043e\u0434\u0435\u043b\u0438 \u043c\u0430\u0440\u043a\u0438")),l.a.createElement("div",{className:Q.a.image},l.a.createElement("img",{src:"/images/Casio_\u043f\u0440\u0435\u0432\u044c\u044e 2.png",alt:""}))))}),l.a.createElement(R,{name:"\u0418\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b",products:o,filter:[{name:"\u0428\u0443\u0440\u0443\u043f\u043e\u0432\u0451\u0440\u0442"},{name:"\u041b\u043e\u0431\u0437\u0438\u043a\u0438"},{name:"\u0414\u0440\u0435\u043b\u0438"},{name:"\u041d\u0430\u0431\u043e\u0440\u044b \u0438\u043d\u0441\u0442\u0443\u0440\u043c\u0435\u043d\u0442\u043e\u0432"}]}),l.a.createElement(R,{name:"\u041e\u0434\u0435\u0436\u0434\u0430",products:_,filter:[{name:"\u041e\u0431\u0443\u0432\u044c \u0436\u0435\u043d\u0441\u043a\u0430\u044f"},{name:"\u041e\u0431\u0443\u0432\u044c \u043c\u0443\u0436\u0441\u043a\u0430\u044f"},{name:"\u0414\u0435\u0442\u044f\u043c"},{name:"\u041f\u043b\u0430\u0442\u044c\u044f"},{name:"\u041f\u0435\u0434\u0436\u0430\u043a\u0438"},{name:"\u0428\u043e\u0440\u0442\u044b"},{name:"\u0422\u0440\u0443\u0441\u044b"}]}),l.a.createElement(p,{links:U}),l.a.createElement(C,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[23,1,2]]]);
//# sourceMappingURL=main.4ad1912c.chunk.js.map