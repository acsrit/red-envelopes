(this["webpackJsonpred-envelopes"]=this["webpackJsonpred-envelopes"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},27:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(17),s=n.n(r),i=(n(24),n(7)),o=(n(25),n(12)),u=n(2),j=n(13),p=n.n(j),l=n(18),b=(n(27),Object(c.createContext)(null)),h=n(1);function d(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(i.a)(r,2),o=s[0],j=s[1],d=Object(c.useContext)(b),O=(d.participant,d.setParticipant),f=function(){var e=Object(l.a)(p.a.mark((function e(t){var n,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.ok){e.next=6;break}return e.next=3,t.json();case 3:throw n=e.sent,c=n.message,Error(c);case 6:return e.abrupt("return",t.json());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=Object(u.f)();return Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"center",children:[Object(h.jsx)("h1",{className:"title",children:"ACS' Lunar New Year Red Envelope Event"}),o&&Object(h.jsx)("span",{style:{color:"#e0bf00 "},children:o}),Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),fetch("https://acslunarnewyear.herokuapp.com/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:n})}).then(f).then((function(){O(n),m.push("/laisee")})).catch((function(e){console.log("we are here",e),j(e.message)}))},children:[Object(h.jsx)("input",{onChange:function(e){a(e.target.value)},type:"text",name:"name",className:"question writing",id:"nme",required:!0,autoComplete:"off"}),Object(h.jsx)("label",{htmlFor:"nme",children:Object(h.jsx)("span",{children:"Enter your RIT email"})}),Object(h.jsx)("input",{type:"submit",value:"Enter!"})]})]})})}n(34);function O(){var e=Object(c.useContext)(b),t=e.participant,n=(e.setParticipant,Object(c.useState)("")),a=Object(i.a)(n,2),r=a[0],s=a[1],o=Object(c.useState)(""),u=Object(i.a)(o,2),j=(u[0],u[1],function(e){fetch("https://acslunarnewyear.herokuapp.com/delete",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({number:e})})});return Object(h.jsx)("div",{children:Object(h.jsx)("div",{className:"container",children:r?Object(h.jsx)("h2",{className:"prize",children:r}):Object(h.jsx)("button",{onClick:function(){var e=new URL("https://acslunarnewyear.herokuapp.com/prize");e.search=new URLSearchParams({username:t}),fetch(e,{method:"GET",url:e}).then((function(e){return e.json()})).then((function(e){s(e.prize),e.number<9&&j(e.number)}))}})})})}function f(){return Object(h.jsx)("div",{})}var m=function(){var e=Object(c.useState)(null),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(o.a,{children:Object(h.jsx)(u.c,{children:Object(h.jsxs)(b.Provider,{value:{participant:n,setParticipant:a},children:[Object(h.jsx)(u.a,{exact:!0,path:"/",component:d}),Object(h.jsx)(u.a,{exact:!0,path:"/laisee",component:O}),Object(h.jsx)(u.a,{exact:!0,path:"/prize",component:f})]})})})})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(m,{})}),document.getElementById("root")),x()}},[[35,1,2]]]);
//# sourceMappingURL=main.56512169.chunk.js.map