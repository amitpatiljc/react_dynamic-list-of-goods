(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{12:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var r=n(5),c=n.n(r),a=n(3),s=n(6),o=n(1),u=n.n(o),i=n(2),l=(n(12),n(13),function(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){if(!t.ok)throw new Error("".concat(t.status," - ").concat(t.statusText));return t.json()}))}),f=function(){var t=Object(a.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l();case 2:return e=t.sent,t.abrupt("return",e.sort((function(t,e){return t.name.localeCompare(e.name)})).slice(0,5));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),b=function(){var t=Object(a.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l();case 2:return e=t.sent,t.abrupt("return",e.filter((function(t){return"red"===t.color})));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d=n(0),j=function(t){var e=t.goods;return Object(d.jsx)("ul",{children:e.map((function(t){return Object(d.jsx)("li",{style:{color:t.color},children:t.name},t.id)}))})},p=function(){var t=Object(i.useState)([]),e=Object(s.a)(t,2),n=e[0],r=e[1],c=Object(i.useCallback)(Object(a.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l();case 2:e=t.sent,r(e);case 4:case"end":return t.stop()}}),t)}))),[]),o=Object(i.useCallback)(Object(a.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f();case 2:e=t.sent,r(e);case 4:case"end":return t.stop()}}),t)}))),[]),p=Object(i.useCallback)(Object(a.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b();case 2:e=t.sent,r(e);case 4:case"end":return t.stop()}}),t)}))),[]);return Object(d.jsxs)("div",{className:"has-text-centered",children:[Object(d.jsx)("h1",{className:"title",children:"Dynamic list of Goods"}),Object(d.jsx)("button",{type:"button",className:"button is-dark mx-2",onClick:function(){return c()},children:"All"}),Object(d.jsx)("button",{type:"button",className:"button is-dark mx-2",onClick:function(){return o()},children:"5"}),Object(d.jsx)("button",{type:"button",className:"button is-dark mx-2",onClick:function(){return p()},children:"Red"}),Object(d.jsx)("div",{children:Object(d.jsx)(j,{goods:n})})]})};c.a.render(Object(d.jsx)(p,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.50e2173f.chunk.js.map