(this["webpackJsonpchat-app"]=this["webpackJsonpchat-app"]||[]).push([[0],{105:function(e,t,n){},110:function(e,t,n){},112:function(e,t,n){},148:function(e,t,n){"use strict";n.r(t);var a,c,s,r=n(1),o=n(40),i=n.n(o),u=(n(105),n(26)),l=n(160),j=n(57),b=n(149),d=n(147),p=n(92),g=n(36),O=function(){return Object(g.b)()},m=g.c,h=n(27),f=Object(h.b)({name:"loggedin",initialState:{loggedin:!1},reducers:{login:function(e){e.loggedin=!0},logout:function(e){e.loggedin=!1}}}),x=f.actions,v=x.login,N=(x.logout,f.reducer),w=n(10),S=n(161),y=n(44),C=n(25),k=Object(C.a)(a||(a=Object(y.a)(["\n    query getUser(\n        $username: String!\n        $password: String!\n    ) {\n        getUser(\n            username: $username\n            password: $password\n        ) {\n            username\n            password\n        }\n    }\n"]))),$=Object(h.b)({name:"account",initialState:{account:{username:"",password:""}},reducers:{setUsername:function(e,t){e.account.username=t.payload},setPassword:function(e,t){e.account.password=t.payload},logout:function(e){e.account.password="",e.account.password=""}}}),E=$.actions,U=E.setUsername,L=E.setPassword,H=(E.logout,$.reducer),P=(n(110),n(28)),J=n.n(P),_=n(47),q=n(163),A=Object(C.a)(c||(c=Object(y.a)(["\n    mutation createUser(\n        $firstName: String!\n        $lastName: String!\n        $username: String!\n        $password: String!\n    ) {\n        createUser(\n            firstName: $firstName\n            lastName: $lastName\n            username: $username\n            password: $password\n        ) {\n            successful\n            message\n        }\n    }\n"]))),I=(n(112),n(3)),Q=function(e){var t=e.noSignupHandle,n=e.loginHandle,a=Object(r.useState)(""),c=Object(w.a)(a,2),s=c[0],o=c[1],i=Object(r.useState)(""),u=Object(w.a)(i,2),l=u[0],j=u[1],b=Object(r.useState)(""),d=Object(w.a)(b,2),p=d[0],g=d[1],m=Object(r.useState)(""),h=Object(w.a)(m,2),f=h[0],x=h[1],v=Object(q.a)(A),N=Object(w.a)(v,2),S=N[0],y=N[1],C=y.error,k=y.loading,$=y.data,E=O(),H=function(){var e=Object(_.a)(J.a.mark((function e(){return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S({variables:{firstName:s,lastName:l,username:p,password:f}});case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){C&&console.error(C),k||console.log($),$&&(E(U(p)),E(L(f)),n(),t())}),[C,k,$]),Object(I.jsxs)("div",{className:"signup-container",children:[Object(I.jsx)("h1",{className:"signup-heading",children:"Signup"}),Object(I.jsx)("p",{className:"signup-caption",children:"Start chatting in the browser today!"}),Object(I.jsx)("input",{type:"text",placeholder:"First Name",onChange:function(e){return o(e.target.value)},className:"first-name-input"}),Object(I.jsx)("input",{type:"text",placeholder:"Last Name",onChange:function(e){return j(e.target.value)},className:"last-name-input"}),Object(I.jsx)("input",{type:"text",placeholder:"Username",onChange:function(e){return g(e.target.value)},className:"username-input"}),Object(I.jsx)("input",{type:"text",placeholder:"Password",onChange:function(e){return x(e.target.value)},className:"password-input"}),Object(I.jsx)("button",{className:"signup-button",onClick:H,children:"Launch"})]})},R=function(e){var t=e.loginHandle,n=Object(r.useState)(!1),a=Object(w.a)(n,2),c=a[0],s=a[1],o=Object(r.useState)(""),i=Object(w.a)(o,2),u=i[0],l=i[1],j=Object(r.useState)(""),b=Object(w.a)(j,2),d=b[0],p=b[1],g=Object(S.a)(k,{variables:{username:u,password:d}}),m=Object(w.a)(g,2),h=m[0],f=m[1],x=f.error,v=f.loading,N=f.data,y=O();return Object(r.useEffect)((function(){x&&console.error(x),v||console.log(N)}),[x,v,N]),Object(r.useEffect)((function(){N&&(y(U(u)),y(L(d)),t())}),[N,u,d,y,t]),Object(I.jsx)("div",{children:c?Object(I.jsx)(Q,{noSignupHandle:function(){s(!1)},loginHandle:t}):Object(I.jsxs)("div",{className:"login-container",children:[Object(I.jsx)("h1",{className:"login-heading",children:"Login"}),Object(I.jsx)("p",{className:"login-caption",children:"Start chatting today!"}),Object(I.jsx)("input",{type:"text",placeholder:"Username",onChange:function(e){return l(e.target.value)},className:"username-input"}),Object(I.jsx)("input",{type:"text",placeholder:"Password",onChange:function(e){return p(e.target.value)},className:"password-input"}),Object(I.jsx)("button",{className:"login-button",onClick:function(){return h()},children:"Log In"}),Object(I.jsxs)("p",{className:"login-register",children:["Not registered yet? ",Object(I.jsx)("span",{onClick:function(){s(!0)},children:"Create an Account"})]})]})})},B=n(62),F=n(91),G=function(){var e=Object(r.useState)(!1),t=Object(w.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(!1),o=Object(w.a)(c,2),i=o[0],u=o[1],l=Object(r.useState)(""),j=Object(w.a)(l,2),b=j[0],d=j[1],p=m((function(e){return e.account.account.username})),g=Object(r.useState)([]),O=Object(w.a)(g,2),h=O[0],f=O[1],x=Object(r.useState)(""),v=Object(w.a)(x,2),N=v[0],S=v[1];Object(r.useEffect)((function(){s=Object(F.io)("localhost:3001/"),a(!0)}),[n]);Object(r.useEffect)((function(){s.on("receive_message",(function(e){f([].concat(Object(B.a)(h),[e]))}))}));var y=function(){var e=Object(_.a)(J.a.mark((function e(){var t;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={room:b,content:{author:p,message:N}},f([].concat(Object(B.a)(h),[t.content])),S(""),e.next=5,s.emit("send_message",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(I.jsx)("div",{children:i?Object(I.jsxs)("div",{className:"messenger-page-container",children:[Object(I.jsx)("div",{className:"chat-container",children:h.map((function(e){return Object(I.jsxs)("div",{className:"messageList-container",children:[Object(I.jsx)("p",{children:e.author}),Object(I.jsx)("div",{className:"message",children:Object(I.jsx)("p",{children:e.message})})]})}))}),Object(I.jsxs)("div",{className:"message-input-container",children:[Object(I.jsx)("input",{type:"text",placeholder:"Message",value:N,onChange:function(e){return S(e.target.value)}}),Object(I.jsx)("button",{onClick:y,children:"Send"})]})]}):Object(I.jsxs)("div",{className:"room-selector",children:[Object(I.jsx)("input",{type:"text",onChange:function(e){return d(e.target.value)},placeholder:"Enter Room Name"}),Object(I.jsx)("button",{onClick:function(){u(!0),s.emit("join_room",b)},children:"Join Room"})]})})},M=Object(p.a)((function(e){var t=e.graphQLErrors,n=e.networkError;t&&t.map((function(e){var t=e.message;return console.log("GraphQL error ".concat(t)),null})),n&&console.log(n)})),z=Object(u.from)([M,new l.a({uri:"http://localhost:3001/graphql"})]),D=new j.a({cache:new b.a,link:z}),K=function(){var e=m((function(e){return e.loggedin.loggedin})),t=O();return Object(I.jsx)(d.a,{client:D,children:Object(I.jsx)("div",{className:"App",children:e?Object(I.jsx)(G,{}):Object(I.jsx)(R,{loginHandle:function(){t(v())}})})})},T=Object(h.a)({reducer:{loggedin:N,account:H}});i.a.render(Object(I.jsx)(g.a,{store:T,children:Object(I.jsx)(K,{})}),document.getElementById("root"))}},[[148,1,2]]]);
//# sourceMappingURL=main.05c153a7.chunk.js.map