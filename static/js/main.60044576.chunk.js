(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{44:function(n,t,e){n.exports=e(57)},49:function(n,t,e){},57:function(n,t,e){"use strict";e.r(t);var r,a,i=e(0),o=e.n(i),c=e(10),s=e.n(c),l=(e(49),e(1)),u={borderRadius:"4px",breakpoints:{mobile:"375px",tablet:"768px",hd:"1024px",fullHD:"1920px"},colors:{main:"#ffffff",second:"#000000",fonts:{main:"#000000",error:"#FF0000",hover:"#ffffff"},input:{background:"#F2F2F2",backgroundFocus:"#ffffff"}},fonts:{sizes:{mobile:14,tablet:16,desctop:20}},max:function(n){return"@media (max-width: ".concat(n,")")},min:function(n){return"@media (min-width: ".concat(n,")")}},d=e(26),f=e(15),m=e(17),p=e(42),b=e(8);!function(n){n.SET_VIEWPORT_WIDTH="@@main/SET_VIEWPORT_WIDTH",n.GET_TASK_LIST="@@main/GET_TASK_LIST",n.UPDATE_TASK="@@main/UPDATE_TASK",n.CREATE_TASK="@@main/CREATE_TASK",n.DELETE_TASK="@@main/DELETE_TASK"}(r||(r={})),function(n){n.SUCCESS="SUCCESS",n.LOADING="LOADING",n.ERROR="ERROR"}(a||(a={}));var h={taskList:{items:[],status:a.SUCCESS,error:""},updateAction:{id:null,status:a.SUCCESS},deleteAction:{id:null,status:a.SUCCESS},createAction:{status:a.SUCCESS}},v=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.GET_TASK_LIST:var e=t.payload,i=n.taskList;return Object(b.a)({},n,{taskList:Object(b.a)({},i,{},e)});case r.CREATE_TASK:var o=t.payload,c=n.taskList;return o.error||o.status!==a.SUCCESS||c.items.push({id:o.id,title:o.title}),o.error&&(n.taskList.error=o.error),Object(b.a)({},n,{taskList:Object(b.a)({},c,{items:c.items}),createAction:Object(b.a)({},n.createAction,{},o)});case r.DELETE_TASK:var s=t.payload,l=n.taskList;if(s.status===a.SUCCESS){console.log(l);var u=l.items.findIndex((function(n){return n.id===s.id}));console.log(s.id,u),-1!==u&&l.items.splice(u,1)}return s.error&&(n.taskList.error=s.error),Object(b.a)({},n,{taskList:Object(b.a)({},l,{items:Object(p.a)(l.items)}),deleteAction:Object(b.a)({},n.deleteAction,{},s)});default:return Object(b.a)({},n)}},E=e(36),x=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||m.d,g=Object(m.c)({main:v}),k=Object(m.e)(g,x(Object(m.a)(E.a))),O=function(){return Object(f.b)()},j=k,y=e(11),S=e.n(y),w=e(19),T={getList:{uri:"https://test.megapolis-it.ru/api/list",method:"GET"},create:{uri:"https://test.megapolis-it.ru/api/list",method:"POST"},update:{uri:function(n){return"https://test.megapolis-it.ru/api/list/".concat(n)},method:"POST"},delete:{uri:function(n){return"https://test.megapolis-it.ru/api/list/".concat(n)},method:"DELETE"}};function C(n){return{type:r.GET_TASK_LIST,payload:n}}function A(n){return{type:r.CREATE_TASK,payload:n}}function L(n){return{type:r.DELETE_TASK,payload:n}}var R={Main:{getTaskListAsync:function(){return function(){var n=Object(w.a)(S.a.mark((function n(t,e){var r,i,o,c,s;return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,e().main.taskList.status!==a.LOADING){n.next=4;break}return n.abrupt("return");case 4:return t(C({status:a.LOADING})),i=(r=T.getList).uri,o=r.method,n.next=8,fetch(i,{method:o});case 8:if((c=n.sent).ok){n.next=11;break}throw new Error("\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u0435\u0442\u0438");case 11:return n.next=13,c.json();case 13:if(!(s=n.sent).success){n.next=18;break}t(C({status:a.SUCCESS,items:s.data})),n.next=19;break;case 18:throw new Error(s.error);case 19:n.next=24;break;case 21:n.prev=21,n.t0=n.catch(0),t(C({status:a.ERROR,error:n.t0.message}));case 24:case"end":return n.stop()}}),n,null,[[0,21]])})));return function(t,e){return n.apply(this,arguments)}}()},deleteTaskAsync:function(n){return function(){var t=Object(w.a)(S.a.mark((function t(e){var r,i,o,c,s;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e(L({id:n,status:a.LOADING})),i=(r=T.delete).uri,o=r.method,t.next=5,fetch(i(n),{method:o});case 5:if((c=t.sent).ok){t.next=8;break}throw new Error("\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u0435\u0442\u0438");case 8:return t.next=10,c.json();case 10:if(!(s=t.sent).success){t.next=15;break}e(L({status:a.SUCCESS,id:n})),t.next=16;break;case 15:throw new Error(s.error);case 16:t.next=21;break;case 18:t.prev=18,t.t0=t.catch(0),e(L({id:n,status:a.ERROR,error:t.t0.message}));case 21:case"end":return t.stop()}}),t,null,[[0,18]])})));return function(n){return t.apply(this,arguments)}}()},createTaskAsync:function(n){return function(){var t=Object(w.a)(S.a.mark((function t(e,r){var i,o,c,s,l,u,d;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e(A({status:a.LOADING})),o=(i=T.create).uri,c=i.method,t.next=5,fetch(o,{method:c,body:JSON.stringify({title:n})});case 5:if((s=t.sent).ok){t.next=8;break}throw new Error("\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u0435\u0442\u0438");case 8:return t.next=10,s.json();case 10:if(l=t.sent,u=l.error,d=l.id,!l.success){t.next=18;break}e(A({status:a.SUCCESS,id:d,title:n})),t.next=19;break;case 18:throw new Error(u);case 19:t.next=25;break;case 21:throw t.prev=21,t.t0=t.catch(0),e(A({status:a.ERROR,error:t.t0.message})),t.t0;case 25:case"end":return t.stop()}}),t,null,[[0,21]])})));return function(n,e){return t.apply(this,arguments)}}()}}},_=e(2);function D(){var n=Object(_.a)(["\n    width: 22px;\n    height: 22px;\n    fill: #666666;\n    cursor: pointer;\n    transition: fill .2s, transform .2s; \n    &:hover {\n        fill: #1890ff;\n        transform: scale(1.2);\n    }\n"]);return D=function(){return n},n}function I(){var n=Object(_.a)(["\n    width: 18px;\n    height: 22px;\n    fill: #F4583F;\n    cursor: pointer;\n    transition: fill .2s, transform .2s; \n    &:hover {\n        fill: #1890ff;\n        transform: scale(1.2);\n    }\n"]);return I=function(){return n},n}function F(){var n=Object(_.a)(["\n    padding: 16px 0 16px 21px;\n    border: 1px solid #E6E6E6;\n    line-height: 17px;\n    vertical-align: middle;\n    ","    \n"]);return F=function(){return n},n}function K(){var n=Object(_.a)(["\n    vertical-align: middle;\n    & > td {\n        overflow: hidden;\n        text-overflow: ellipsis;\n    }\n    td:nth-child(1) {\n        width: 20%;\n    }\n    td:nth-child(2) {\n    }\n    td:last-child {\n        width: 83px;\n        & > svg:first-child {\n            margin-right: 28px;\n        }\n    }\n    ","  \n"]);return K=function(){return n},n}function N(){var n=Object(_.a)(["\n    width: 100%;\n    text-align: left;\n    table-layout: fixed;\n    border: 1px solid #E6E6E6;\n    border-radius: ",";\n"]);return N=function(){return n},n}var U=l.b.table(N(),(function(n){return n.theme.borderRadius})),G=l.b.tr(K(),(function(n){var t=n.theme,e=t.max,r=t.breakpoints;return"\n        ".concat(e(r.mobile)," {\n            td:last-child {\n                width: 66px;\n                & > svg:first-child {\n                    margin-right: 16px;\n                }\n            }\n        }\n    ")})),z=l.b.td(F(),(function(n){var t=n.theme,e=t.max,r=t.breakpoints;return"\n        ".concat(e(r.tablet)," {\n            padding: 16px 0 16px 12px;\n        }\n        ").concat(e(r.mobile)," {\n            padding: 16px 5px 16px 9px;\n        }\n    ")})),P=l.b.svg(I()),B=l.b.svg(D()),H=o.a.memo((function(n){var t=n.item,e=n.onDelete,r=n.onEdit,a=Object.keys(t).map((function(n,e){return"id"===n?o.a.createElement(z,{key:e},"\u0417\u0430\u0434\u0430\u0447\u0430 \u2116",t[n]):o.a.createElement(z,{key:e},t[n])}));return o.a.createElement(G,null,a,o.a.createElement(z,null,o.a.createElement(B,{onClick:function(){r(t)}},o.a.createElement("use",{xlinkHref:"/sprite.svg#pancel"})),o.a.createElement(P,{onClick:function(){e(t)}},o.a.createElement("use",{xlinkHref:"/sprite.svg#basket"}))))}),(function(n,t){return n.item.id===t.item.id})),M=o.a.memo((function(n){var t=n.items,e=n.onDelete,r=n.onEdit,a=Object(i.useCallback)((function(n){"function"===typeof e&&e(n)}),[e]),c=Object(i.useCallback)((function(n){"function"===typeof r&&r(n)}),[r]),s=t.map((function(n){return o.a.createElement(H,{onDelete:a,onEdit:c,item:Object(b.a)({},n),key:n.id})}));return o.a.createElement(U,null,o.a.createElement("tbody",null,s))})),W=e(21);function V(){var n=Object(_.a)(["\n    ","\n"]);return V=function(){return n},n}function J(){var n=Object(_.a)(["\n    margin-bottom: 12px;\n    line-height: 16px;\n    display: block;\n"]);return J=function(){return n},n}function X(){var n=Object(_.a)(["\n    ","\n"]);return X=function(){return n},n}function Y(){var n=Object(_.a)(["\n    position: relative;\n    text-align: left;\n"]);return Y=function(){return n},n}var q=l.b.div(Y()),$=Object(l.b)(W.a)(X(),(function(n){var t=n.theme,e=t.colors,r=t.borderRadius;return"\n        color: ".concat(e.fonts.main,";\n        background-color: ").concat(e.input.background,";\n        border: 1px solid transparent;\n        border-radius: ").concat(r,";\n        transition: background-color .2s, color .2s;\n        height: 40px;\n        width: calc(100% - 12px);\n        padding-left: 10px;\n        &:focus {\n            border: 1px solid #E6E6E6;\n            outline: none;\n            background-color: ").concat(e.input.backgroundFocus,";\n        }\n    ")})),Q=l.b.label(J()),Z=l.b.span(V(),(function(n){var t=n.theme.colors;return"\n        color: ".concat(t.fonts.error,";\n        background-color: transparent;\n        font-size: 12px;\n        line-height: 14px;\n        position: absolute;\n        bottom: -20px;\n    ")})),nn=function(n){var t=n.error,e=n.label;return o.a.createElement(q,null,e&&o.a.createElement(Q,{htmlFor:n.id},e),o.a.createElement($,n),t&&o.a.createElement(Z,null,t))};function tn(){var n=Object(_.a)(["\n    ","\n"]);return tn=function(){return n},n}var en=l.b.button(tn(),(function(n){var t=n.color,e=n.theme,r=e.borderRadius,a=e.colors,i=e.max,o=e.breakpoints;return"\n        min-width: 148px;\n        border: 1px solid ".concat(t,";\n        border-radius: ").concat(r,";\n        height: 35px;\n        color: ").concat(a.fonts.main,";\n        background-color: ").concat(a.main,";\n        padding: 0 25px;\n        text-align: center;\n        transition: background-color 200ms,color 200ms;\n        cursor: pointer;\n        &:hover {\n            color: ").concat(a.fonts.hover,";\n            background-color: ").concat(t,";\n        }\n        &:focus {\n            color: ").concat(a.fonts.hover,";\n            background-color: ").concat(t,";\n        }\n        ").concat(i(o.mobile)," {\n            min-width: 123px;\n        }\n    ")}));function rn(){var n=Object(_.a)(["\n    text-align: left;\n    font-size: 32px;\n    line-height: 37px;\n    font-family: Roboto-Bold;\n    ","   \n"]);return rn=function(){return n},n}var an=l.b.h1(rn(),(function(n){var t=n.theme,e=t.max,r=t.breakpoints;return"\n        ".concat(e(r.mobile)," {\n            font-size: 26px;\n        }\n    ")}));function on(){var n=Object(_.a)(["\n    margin: 40px 0;\n    padding: 0 64px;\n    ","\n"]);return on=function(){return n},n}var cn=l.b.main(on(),(function(n){var t=n.theme,e=t.max,r=t.breakpoints;return"\n        ".concat(e(r.tablet)," {\n            padding: 0 30px;\n        }\n        ").concat(e(r.mobile)," {\n            padding: 0 10px;\n        }\n    ")})),sn=e(59);function ln(){var n=Object(_.a)(["\n    transition: opacity .15s linear;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    z-index: 2;\n    background-color: #000;\n    transition: opacity 200ms;\n    opacity: 0.5;\n    &.","-exited {\n        visibility: hidden;\n        opacity: 0;\n    }\n    &.","-exiting {\n        opacity: 0;\n    }\n    &.","-entering {\n        opacity: 0.5;\n    }\n"]);return ln=function(){return n},n}function un(){var n=Object(_.a)(["\n    ","    \n"]);return un=function(){return n},n}function dn(){var n=Object(_.a)(["\n    ","\n"]);return dn=function(){return n},n}function fn(){var n=Object(_.a)(["\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    display: flex;\n    width: 100%;\n    z-index: 3;\n    justify-content: center;\n    align-items: center;\n    display: flex;\n    transition: opacity 200ms;\n    &.","-exited {\n        visibility: hidden;\n        opacity: 0;\n    }\n    &.","-exiting {\n        opacity: 0;\n    }\n    &.","-entering {\n        opacity: 1;\n    }\n"]);return fn=function(){return n},n}var mn=l.b.div(fn(),"modal","modal","modal"),pn=l.b.div(dn(),(function(n){var t=n.theme,e=t.borderRadius,r=t.max,a=t.breakpoints;return"\n        border: 1px solid #F2F2F2;\n        border-radius: ".concat(e,";\n        position: relative;\n        background-color: #ffffff;\n        padding: 30px 32px 32px;\n        transition: transform 200ms ease-in-out;\n        ").concat(r(a.mobile)," {\n            width: 100%;\n            height: 100%;\n            width: calc(100% - 20px);\n            padding: 60px 10px 10px;\n        }\n        &.").concat("modal","-exited {\n            transform: translateY(calc(-50vh - 50%));\n        }\n        &.").concat("modal","-exiting {\n            transform: translateY(calc(-50vh - 50%));\n        }\n    ")})),bn=l.b.svg(un(),(function(n){var t=n.theme,e=t.max,r=t.breakpoints;return"    \n        cursor: pointer;\n        width: 14px;\n        height: 14px;\n        fill: #FF0000;\n        position: absolute;\n        right: 32px;\n        top: 30px;\n        z-index: 1;\n        transition: transform 200ms;\n        &:hover {\n            transform: scale(1.1);\n        }\n        ".concat(e(r.mobile)," {\n            top: 60px;\n            right: 10px;\n        }\n    ")})),hn=l.b.div(ln(),"modal","modal","modal"),vn=function(n){var t=n.children,e=n.visibility,r=void 0===e||e,a=n.onClose,s=document.getElementById("modal");Object(i.useEffect)((function(){document.body.style.overflow=r?"hidden":"auto"}),[r]);var l=Object(i.useCallback)((function(n){if(n.target.dataset.close){if("function"!==typeof a)throw new Error("handler onClose required!");a()}}),[]);return Object(c.createPortal)(o.a.createElement(sn.a,{in:r,classNames:"modal",timeout:200},(function(n){return o.a.createElement(o.a.Fragment,null,o.a.createElement(hn,{className:"".concat("modal","-").concat(n)}),o.a.createElement(mn,{className:"".concat("modal","-").concat(n),"data-close":!0,onClick:l},o.a.createElement(pn,{className:"".concat("modal","-").concat(n)},o.a.createElement(bn,{"data-close":!0,onClick:l},o.a.createElement("use",{xlinkHref:"/sprite.svg#cross"})),t)))})),s)};function En(){var n=Object(_.a)(["\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 32px;\n"]);return En=function(){return n},n}var xn=l.b.div(En()),gn=e(3);function kn(){var n=Object(_.a)(["\n    margin-top: 20px;\n    width: 100%;\n    display: flex;\n    justify-content:",";\n    ","\n"]);return kn=function(){return n},n}function On(){var n=Object(_.a)(["\n    width: 462px;\n    ","\n"]);return On=function(){return n},n}var jn=l.b.div(On(),(function(n){var t=n.theme,e=t.max,r=t.breakpoints;return"\n        ".concat(e(r.mobile)," {\n            width: 100%;\n        }\n    ")})),yn=l.b.div(kn(),(function(n){return"right"===n.align?"flex-end":"flex-start"}),(function(n){var t=n.theme,e=t.max,r=t.breakpoints;return"\n        ".concat(e(r.mobile)," {\n            justify-content: center;\n        }\n    ")})),Sn=function(n){var t=n.description,e=void 0===t?"":t,r=n.disabled,a=void 0!==r&&r,i=n.children,c=n.align,s=void 0===c?"right":c,l=n.onSuccess,u=O(),d={title:e},f=function(){var n=Object(w.a)(S.a.mark((function n(t,e){var r;return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.title,n.prev=1,n.next=4,u(R.Main.createTaskAsync(r));case 4:"function"===typeof l&&l(),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(1),e.setErrors({title:n.t0.message});case 10:case"end":return n.stop()}}),n,null,[[1,7]])})));return function(t,e){return n.apply(this,arguments)}}();return o.a.createElement(jn,null,o.a.createElement(W.c,{enableReinitialize:!0,initialValues:d,onSubmit:f,validate:function(n){var t={};return 0===n.title.length&&(t.title="\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"),t}},(function(n){var t=n.errors;return o.a.createElement(W.b,null,o.a.createElement(nn,{disabled:a,label:"\u041a\u0440\u0430\u0442\u043a\u043e\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",error:t.title,name:"title",id:"title"}),o.a.createElement(yn,{align:s},i))})))},wn=o.a.memo((function(n){var t=n.visibility,e=n.onClose,r=Object(i.useCallback)((function(){"function"===typeof e&&e()}),[e]);return o.a.createElement(vn,{visibility:t,onClose:r},o.a.createElement(Sn,{onSuccess:r},o.a.createElement(en,{color:"#39B54A"},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c")))}),(function(n,t){return n.visibility===t.visibility})),Tn=R.Main,Cn=function(){var n=Object(i.useState)(!1),t=Object(d.a)(n,2),e=t[0],r=t[1],a=Object(f.c)((function(n){return n.main})).taskList.items,c=Object(gn.f)(),s=O();Object(i.useEffect)((function(){s(Tn.getTaskListAsync())}),[s]);var l=Object(i.useCallback)((function(){r(!1)}),[]),u=Object(i.useCallback)((function(n){s(Tn.deleteTaskAsync(n.id))}),[]),m=Object(i.useCallback)((function(n){c.push("/task/".concat(n.id))}),[]);return o.a.createElement(cn,null,o.a.createElement(xn,null,o.a.createElement(an,null,"\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u0434\u0430\u0447"),o.a.createElement(en,{onClick:function(){r(!0)},color:"#39B54A"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c")),o.a.createElement(M,{onDelete:u,onEdit:m,items:a}),o.a.createElement(wn,{onClose:l,visibility:e}))},An=e(18);function Ln(){var n=Object(_.a)(["\n    margin-top: 20px;\n"]);return Ln=function(){return n},n}var Rn=l.b.div(Ln()),_n=function(){var n=Object(gn.g)().id,t=O(),e=Object(f.c)((function(n){return n.main.taskList.items})),r=Object(i.useState)(""),a=Object(d.a)(r,2),c=a[0],s=a[1];return Object(i.useEffect)((function(){if(0===e.length)t(R.Main.getTaskListAsync());else{var r=e.find((function(t){return t.id===parseInt(n)}));r&&s(r.title)}}),[e]),o.a.createElement(cn,null,o.a.createElement(an,null,"\u0417\u0430\u0434\u0430\u0447\u0430 \u2116",n),o.a.createElement(Rn,null,o.a.createElement(Sn,{description:c,disabled:!0,align:"left"},o.a.createElement(An.b,{to:"/"},o.a.createElement(en,{color:"#0071BC"},"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u0432 \u0441\u043f\u0438\u0441\u043e\u043a")))))};var Dn=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(l.a,{theme:u},o.a.createElement(f.a,{store:j},o.a.createElement(An.a,null,o.a.createElement(gn.c,null,o.a.createElement(gn.a,{exact:!0,path:"/",render:function(){return o.a.createElement(Cn,null)}}),o.a.createElement(gn.a,{path:"/task/:id",render:function(){return o.a.createElement(_n,null)}}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(Dn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.60044576.chunk.js.map