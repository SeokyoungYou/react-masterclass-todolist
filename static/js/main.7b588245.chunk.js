(this["webpackJsonpreact-masterclass"]=this["webpackJsonpreact-masterclass"]||[]).push([[0],{36:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(12),c=n.n(a),i=n(7),s=n(17),l=n(22),b=n(4),u={TO_DO:"TO_DO",DOING:"DOING",DONE:"DONE"},d="currentToDos",j="currentCats",O=localStorage.getItem(d),f=JSON.parse(O),g=Object(i.b)({key:"toDo",default:(null===f||void 0===f?void 0:f.length)>0?f:[]}),h=Object(i.b)({key:"category",default:u.TO_DO}),m=Object(i.c)({key:"toDoSelector",get:function(e){var t=e.get,n=t(g),r=t(h);return n.filter((function(e){return e.category===r}))}}),p=n(9),v=n(16),x=n(3),y=u;var S=localStorage.getItem(j);if(null!==S){var k=JSON.parse(S);y=k}var D=function(){var e=Object(v.a)(),t=e.register,n=e.handleSubmit,r=e.setValue;return Object(x.jsxs)("form",{onSubmit:n((function(e){var t=e.category;Object.assign(u,Object(p.a)({},t,t)),Object.assign(y,u),localStorage.setItem(j,JSON.stringify(y)),r("category","")})),children:[Object(x.jsx)("input",Object(b.a)(Object(b.a)({},t("category",{required:"Please write a category"})),{},{placeholder:"Wirte a new category"})),Object(x.jsx)("button",{children:"Add category"})]})},w=n(6),q=new Array;var I=localStorage.getItem(d);if(null!==I){var N=JSON.parse(I);q=N}var T=function(){var e=Object(i.f)(g),t=Object(i.e)(h),n=Object(v.a)(),r=n.register,o=n.handleSubmit,a=n.setValue;return Object(x.jsxs)("form",{onSubmit:o((function(n){var r={text:n.toDo,id:Date.now(),category:t};e((function(e){return[r].concat(Object(w.a)(e))})),q.push(r),localStorage.setItem(d,JSON.stringify(q)),a("toDo","")})),children:[Object(x.jsx)("input",Object(b.a)(Object(b.a)({},r("toDo",{required:"Please write a To Do"})),{},{placeholder:"Write a to do"})),Object(x.jsx)("button",{children:"Add to do"})]})},C=n(2);var J=function(){var e=Object(i.d)(h),t=Object(C.a)(e,2),n=t[0],r=t[1];return Object(x.jsx)("select",{value:n,onInput:function(e){r(e.currentTarget.value)},children:Object.keys(y).map((function(e){return Object(x.jsx)("option",{value:e,children:e})}))})};var P=function(e){var t=e.text,n=e.category,r=e.id,o=Object(i.f)(g),a=function(e){var n=e.currentTarget.name;o((function(e){var o=e.findIndex((function(e){return e.id===r})),a={text:t,id:r,category:n},c=[].concat(Object(w.a)(e.slice(0,o)),[a],Object(w.a)(e.slice(o+1)));return localStorage.setItem(d,JSON.stringify(c)),c}))};return Object(x.jsxs)("li",{children:[Object(x.jsx)("span",{children:t}),Object.keys(y).map((function(e){return n!==e&&Object(x.jsx)("button",{name:e,onClick:a,children:e})}))]})};var A,E=function(){var e=Object(i.e)(m);return Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"To Dos"}),Object(x.jsx)("hr",{}),Object(x.jsx)(D,{}),Object(x.jsx)(J,{}),Object(x.jsx)(T,{}),null===e||void 0===e?void 0:e.map((function(e){return Object(x.jsx)(P,Object(b.a)({},e),e.id)}))]})},M=Object(s.b)(A||(A=Object(l.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  font-weight: 300;\n  font-family: 'Source Sans Pro', sans-serif;\n  background-color:",";\n  color:",";\n  line-height: 1.2;\n}\na {\n  text-decoration:none;\n  color:inherit;\n}\n"])),(function(e){return e.theme.bgColor}),(function(e){return e.theme.textColor}));var _=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(M,{}),Object(x.jsx)(E,{})]})};c.a.render(Object(x.jsx)(o.a.StrictMode,{children:Object(x.jsx)(i.a,{children:Object(x.jsx)(s.a,{theme:{bgColor:"#2f3640",textColor:"white",accentColor:"#9c88ff",cardBgColor:"transparent"},children:Object(x.jsx)(_,{})})})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.7b588245.chunk.js.map