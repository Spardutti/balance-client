(this["webpackJsonpclient-"]=this["webpackJsonpclient-"]||[]).push([[0],{173:function(e,t){},175:function(e,t){},188:function(e,t){},190:function(e,t){},218:function(e,t){},220:function(e,t){},221:function(e,t){},226:function(e,t){},228:function(e,t){},247:function(e,t){},259:function(e,t){},262:function(e,t){},309:function(e,t,n){},310:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(30),r=n.n(a),s=n(13),o=n(83),i=n(14),l=n(11),j=n.n(l),u=n(18),d=n(2),h=function(e){return Object(d.jsxs)("div",{children:[e.userInfo?Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:"top-bar",children:Object(d.jsxs)("div",{className:"user d-flex justify-content-between ",children:[Object(d.jsxs)("h5",{className:"align-self-center",children:["Welcome ",e.userInfo.username.split(" ")[0]]}),Object(d.jsx)("a",{href:"https://infinite-woodland-48479.herokuapp.com/logout",className:"btn btn-dark text-light btn-sm",onClick:function(){localStorage.clear()},children:"Log out"})]})})}):Object(d.jsx)("div",{className:"top-bar"}),Object(d.jsx)("div",{className:"header",children:Object(d.jsxs)("div",{className:" d-flex flex-column justify-content-center h-75 align-items-center",children:[Object(d.jsx)("div",{children:Object(d.jsx)("h1",{className:"display-5",children:"Balance"})}),Object(d.jsx)("div",{children:Object(d.jsx)("p",{className:" mt-1 text-dark",children:"Balance your expenses, Balance your life"})})]})})]})},f=n(157),b=n.n(f),p=n(321),O=n(314),x=n(322),m=n(323),g=n(315),v=n(316),k=n(317),w=n(324),y=n(325),N=n(160),S=n(326),C=n(319),T=n(24),A=n.n(T),I=n(332),D=n(312),B=n(313),L=n(318),E=function(e){var t=Object(c.useState)(""),n=Object(s.a)(t,2),a=n[0],r=n[1],o=function(){var t=Object(u.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://infinite-woodland-48479.herokuapp.com/folder/add",{method:"POST",headers:{Authorization:"Bearer "+e.token,"Content-Type":"application/json"},body:JSON.stringify({name:a})});case 2:e.toggle(),e.getFolders();case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(d.jsxs)(I.a,{isOpen:e.modal,children:[Object(d.jsx)(D.a,{toggle:e.toggle,children:"Create Folder"}),Object(d.jsx)(B.a,{children:Object(d.jsx)(O.a,{children:Object(d.jsxs)(g.a,{children:[Object(d.jsx)(v.a,{children:"Folder name"}),Object(d.jsx)(k.a,{onChange:function(e){r(e.target.value)},placeholder:"folder name",value:a})]})})}),Object(d.jsx)(L.a,{children:Object(d.jsx)(C.a,{onClick:o,className:"bg-primary",children:"Add"})})]})},Y=n(331),z=n(320),M=function(e){return Object(d.jsx)("div",{children:Object(d.jsx)(Y.a,{trigger:"focus",placement:"bottom",isOpen:e.popoverOpen,target:"Popover1",toggle:e.popUpToggle,children:Object(d.jsx)(z.a,{children:e.msg})})})},P=function(e){var t=Object(c.useState)(""),n=Object(s.a)(t,2),a=n[0],r=n[1],o=Object(c.useState)(0),i=Object(s.a)(o,2),l=i[0],h=i[1],f=Object(c.useState)(""),b=Object(s.a)(f,2),T=b[0],I=b[1],D=Object(c.useState)([]),B=Object(s.a)(D,2),L=B[0],Y=B[1],z=Object(c.useState)(!1),P=Object(s.a)(z,2),F=P[0],_=P[1],U=Object(c.useState)(!1),J=Object(s.a)(U,2),G=J[0],H=J[1],W=function(){return H(!G)},q=function(){_(!F)},K=function(){var t=Object(u.a)(j.a.mark((function t(n){var c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),T&&a&&l||W(),!(a&&l&&T)){t.next=14;break}return e.setLoading(!0),t.next=6,fetch("https://infinite-woodland-48479.herokuapp.com/add/"+e.userInfo._id,{method:"POST",headers:{Authorization:"Bearer "+e.token,"Content-Type":"application/json"},body:JSON.stringify({name:a,price:l,folder:T})});case 6:c=t.sent,e.setActiveYear((new Date).getFullYear()),e.setActiveMonth((new Date).toLocaleDateString("default",{month:"long"})),h(0),r(""),I(""),e.getCurrentDateItems(),c&&e.setLoading(!1);case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),Q=function(){var t=Object(u.a)(j.a.mark((function t(){var n,c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://infinite-woodland-48479.herokuapp.com/folders",{headers:{Authorization:"Bearer "+e.token}});case 2:return n=t.sent,t.next=5,n.json();case 5:c=t.sent,Y(c);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){Q()}),[]),Object(d.jsxs)(p.a,{className:" pt-2",children:[Object(d.jsxs)(O.a,{autoComplete:"off",children:[Object(d.jsxs)(x.a,{children:[Object(d.jsx)(m.a,{sm:4,children:Object(d.jsxs)(g.a,{children:[Object(d.jsx)(v.a,{children:"Description"}),Object(d.jsx)(k.a,{autoComplete:"off",onChange:function(e){r(e.target.value)},type:"text",name:"name",placeholder:"what you bought/paid",value:a})]})}),Object(d.jsx)(m.a,{sm:4,children:Object(d.jsxs)(g.a,{children:[Object(d.jsx)(v.a,{children:"Amount Spent"}),Object(d.jsx)(k.a,{autoComplete:"off",onChange:function(e){h(e.target.value)},type:"number",name:"price",placeholder:"How much you paid for",value:l})]})}),Object(d.jsx)(m.a,{sm:4,children:Object(d.jsxs)(g.a,{children:[Object(d.jsx)(v.a,{children:"Folder"}),Object(d.jsxs)(w.a,{children:[Object(d.jsx)(y.a,{addonType:"prepend",children:Object(d.jsx)(N.a,{onClick:q,className:"",children:Object(d.jsx)("div",{children:Object(d.jsx)("i",{className:"fas fa-folder-plus"})})})}),Object(d.jsxs)(k.a,{type:"select",name:"folder",value:T,onChange:function(e){I(e.target.value)},children:[Object(d.jsx)("option",{disabled:!0,value:"",children:L.length>0?"Select a folder":"Create folder"}),L.map((function(e){return Object(d.jsx)("option",{value:e._id,children:e.name},A()())}))]})]})]})})]}),Object(d.jsx)(m.a,{sm:12,className:"justify-content-center d-flex mt-2",children:e.loading?Object(d.jsx)(S.a,{}):Object(d.jsx)(C.a,{id:"Popover1",onClick:K,className:"bg-primary",children:"Add Item"})})]}),F?Object(d.jsx)(E,{toggle:q,modal:F,token:e.token,getFolders:Q}):null,G?Object(d.jsx)(M,{popoverOpen:G,popUpToggle:W,msg:"Please fill all the field"}):null]})},F=n(327),_=n(328),U=n(329),J=function(e){return Object(d.jsx)("div",{children:Object(d.jsx)(F.a,{tabs:!0,className:"justify-content-center d-flex",children:e.yearsToDisplay.map((function(t){return Object(d.jsx)(_.a,{children:Object(d.jsx)(U.a,{id:t,onClick:function(n){e.getCurrentYearMonths(t),e.getActiveYear(n)},className:e.activeYear===t?"active mt-2 mb-2":"text-dark mt-2 mb-2",children:t})},A()())}))})})},G=function(e){return Object(d.jsx)("div",{children:Object(d.jsx)(F.a,{tabs:!0,className:"justify-content-center d-flex",children:e.monthsToDisplay.map((function(t){return Object(d.jsx)(_.a,{children:Object(d.jsx)(U.a,{id:t,onClick:e.getActiveMonth,className:e.activeMonth===t?"active":"text-dark",children:t})},A()())}))})})},H=n(330),W=function(e){Object(c.useEffect)((function(){e.items.map((function(t){e.setPriceTotal((function(e){return e+t.price}))}))}),[e.items]);var t=function(){var t=Object(u.a)(j.a.mark((function t(n){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://infinite-woodland-48479.herokuapp.com/item/delete/"+n,{method:"DELETE",headers:{Authorization:"Bearer "+e.token,"Content-Type":"application/json"}});case 2:e.getCurrentDateItems();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(d.jsxs)(H.a,{striped:!0,responsive:!0,bordered:!0,className:"text-center",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Description"}),Object(d.jsx)("th",{children:"Spent"}),Object(d.jsx)("th",{children:"Folder"})]})}),Object(d.jsx)("tbody",{children:e.items?e.items.map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsxs)("td",{children:[e.name," ",Object(d.jsx)("i",{className:"far fa-trash-alt",onClick:function(){t(e._id)}})]}),Object(d.jsx)("td",{children:e.price}),Object(d.jsx)("td",{children:e.folder.name})]},A()())})):Object(d.jsx)("p",{children:"no items"})}),Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Total"}),Object(d.jsxs)("th",{children:[e.priceTotal," "]})]})})]})},q=function(e){var t=Object(c.useState)([]),n=Object(s.a)(t,2),a=n[0],r=n[1],o=Object(c.useState)("All"),i=Object(s.a)(o,2),l=i[0],h=i[1],f=Object(c.useState)(),b=Object(s.a)(f,2),p=b[0],O=b[1],x=Object(c.useState)(!1),m=Object(s.a)(x,2),g=(m[0],m[1],function(t){l!==t&&h(t),e.setPriceTotal(0)}),v=function(){var t=Object(u.a)(j.a.mark((function t(){var n,c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://infinite-woodland-48479.herokuapp.com/folders",{headers:{Authorization:"Bearer "+e.token}});case 2:return n=t.sent,t.next=5,n.json();case 5:c=t.sent,r(c);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),k=function(){var t=Object(u.a)(j.a.mark((function t(n){var c,a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setLoading(!0),t.next=3,fetch("https://infinite-woodland-48479.herokuapp.com/folder/"+n+"/"+e.activeYear+"/"+e.activeMonth,{headers:{Authorization:"Bearer "+e.token,"Content-Type":"application/json"}});case 3:return c=t.sent,t.next=6,c.json();case 6:a=t.sent,e.setItems(a),c&&e.setLoading(!1);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),w=function(){var t=Object(u.a)(j.a.mark((function t(n){var c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://infinite-woodland-48479.herokuapp.com/item/folder/"+p,{headers:{Authorization:"Bearer "+e.token,"Content-Type":"application/json"}});case 2:return c=t.sent,t.next=5,c.json();case 5:0===t.sent.length&&y();case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),y=function(){var t=Object(u.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://infinite-woodland-48479.herokuapp.com/folder/delete/"+p,{method:"DELETE",headers:{Authorization:"Bearer "+e.token}});case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){v()}),[]),Object(d.jsx)("div",{className:"d-flex justify-content-center",children:Object(d.jsxs)(F.a,{tabs:!0,children:[Object(d.jsx)(_.a,{children:Object(d.jsx)(U.a,{onClick:function(){g("All"),e.getCurrentDateItems()},className:"All"===l?" active":"text-dark",children:"All"})}),a.map((function(e){return Object(d.jsx)(_.a,{children:Object(d.jsxs)(U.a,{id:e._id,onClick:function(){g(e.name),k(e._id),O(e._id)},className:l===e.name?" active":"text-dark",children:[e.name," ",l===e.name?Object(d.jsx)("i",{className:"far fa-trash-alt",onClick:w}):null]})},A()())}))]})})},K=function(e){var t=Object(c.useState)([]),n=Object(s.a)(t,2),a=n[0],r=n[1],o=Object(c.useState)([]),i=Object(s.a)(o,2),l=i[0],h=i[1],f=Object(c.useState)([]),b=Object(s.a)(f,2),p=b[0],O=b[1],x=Object(c.useState)((new Date).getFullYear()),m=Object(s.a)(x,2),g=m[0],v=m[1],k=Object(c.useState)((new Date).toLocaleDateString("en-US",{month:"long"})),w=Object(s.a)(k,2),y=w[0],N=w[1],C=Object(c.useState)(0),T=Object(s.a)(C,2),A=T[0],I=T[1],D=Object(c.useState)(!1),B=Object(s.a)(D,2),L=B[0],E=B[1],Y=function(){var t=Object(u.a)(j.a.mark((function t(){var n,c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://infinite-woodland-48479.herokuapp.com/items/year",{headers:{"Content-Type":"application/json",Authorization:"Bearer "+e.token}});case 2:return n=t.sent,t.next=5,n.json();case 5:c=t.sent,r(c);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),z=function(){var t=Object(u.a)(j.a.mark((function t(n){var c,a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n||(n=(new Date).getFullYear()),t.next=3,fetch("https://infinite-woodland-48479.herokuapp.com/items/year/"+n,{headers:{Authorization:"Bearer "+e.token}});case 3:return c=t.sent,t.next=6,c.json();case 6:a=t.sent,h(a);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),M=function(){var t=Object(u.a)(j.a.mark((function t(){var n,c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return E(!0),t.next=3,fetch("https://infinite-woodland-48479.herokuapp.com/items/current/"+g+"/"+y,{headers:{"Content-Type":"application/json",Authorization:"Bearer "+e.token}});case 3:return n=t.sent,t.next=6,n.json();case 6:c=t.sent,O(c),I(0),n&&E(!1);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){Y(),z(),e.setLoading(!1)}),[]),Object(c.useEffect)((function(){M()}),[y]),Object(d.jsxs)("div",{children:[Object(d.jsx)(P,{userInfo:e.userInfo,token:e.token,getCurrentDateItems:M,setActiveYear:v,setActiveMonth:N,setLoading:e.setLoading,loading:e.loading}),Object(d.jsx)("div",{children:Object(d.jsx)(J,{yearsToDisplay:a,getCurrentYearMonths:z,getActiveYear:function(e){v(e.target.id),N()},activeYear:g})}),Object(d.jsx)("div",{children:Object(d.jsx)(G,{monthsToDisplay:l,getActiveMonth:function(e){N(e.target.id)},activeMonth:y})}),Object(d.jsxs)("h1",{className:"text-center",children:[y," "]}),Object(d.jsx)(q,{token:e.token,setItems:O,activeYear:g,activeMonth:y,getCurrentDateItems:M,setPriceTotal:I,setLoading:E,loading:L}),L?Object(d.jsx)("div",{className:"d-flex justify-content-center mt-3",children:Object(d.jsx)(S.a,{})}):Object(d.jsx)(W,{items:p,token:e.token,priceTotal:A,setPriceTotal:I,getCurrentDateItems:M})]})},Q=function(e){var t=Object(c.useState)(!1),n=Object(s.a)(t,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){Object(u.a)(j.a.mark((function t(){var n,c,a,r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!localStorage.getItem("token")){t.next=17;break}if(n=localStorage.getItem("token"),!(c=b.a.decode(n))){t.next=17;break}if(!(new Date(1e3*c.exp)<new Date(Date.now()))){t.next=9;break}localStorage.clear(),t.next=17;break;case 9:return e.setToken(n),t.next=12,fetch("https://infinite-woodland-48479.herokuapp.com/user/"+c._id,{headers:{Authorization:"Bearer "+n}});case 12:return a=t.sent,t.next=15,a.json();case 15:r=t.sent,e.setUserInfo(r);case 17:case"end":return t.stop()}}),t)})))()}),[]),Object(d.jsxs)("div",{children:[Object(d.jsx)(h,{userInfo:e.userInfo}),e.userInfo?Object(d.jsxs)("div",{className:"content",children:[Object(d.jsx)("div",{className:"img"}),Object(d.jsx)(K,{userInfo:e.userInfo,token:e.token,loading:a,setLoading:r})]}):Object(d.jsxs)("div",{className:" d-flex justify-content-center content align-items-center",children:[Object(d.jsx)("div",{className:"img"}),a?Object(d.jsx)(S.a,{type:"grow",color:"dark"}):Object(d.jsxs)("div",{className:"google-container",children:[Object(d.jsx)("div",{children:Object(d.jsx)("p",{children:"Please log in to continue"})}),Object(d.jsxs)("div",{className:"google-btn",children:[Object(d.jsx)("div",{className:"google-icon-wrapper",children:Object(d.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"",className:"google-icon"})}),Object(d.jsx)("a",{href:"https://infinite-woodland-48479.herokuapp.com/google/login",className:"btn-text",onClick:function(){return r(!0)},children:Object(d.jsx)("b",{children:"Sign in with google"})})]})]})]})]})},R=function(e){return Object(c.useEffect)((function(){var t=window.location.href,n=t.split("?")[1].split("=")[1];e.setToken(n),window.history.pushState({},"",t.split("?")[0]),localStorage.setItem("token",n)}),[]),Object(d.jsx)("div",{children:e.token?Object(d.jsx)(i.a,{to:"/"}):null})};var V=function(){var e=Object(c.useState)(),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(),l=Object(s.a)(r,2),j=l[0],u=l[1];return Object(d.jsx)(o.a,{children:Object(d.jsxs)(i.d,{children:[Object(d.jsx)(i.b,{exact:!0,path:"/",children:Object(d.jsx)(Q,{token:n,setToken:a,setUserInfo:u,userInfo:j})}),Object(d.jsx)(i.b,{path:"/logged",children:Object(d.jsx)(R,{token:n,setToken:a})})]})})};n(308),n(309);r.a.render(Object(d.jsx)(V,{}),document.getElementById("root"))}},[[310,1,2]]]);
//# sourceMappingURL=main.401b0cf4.chunk.js.map