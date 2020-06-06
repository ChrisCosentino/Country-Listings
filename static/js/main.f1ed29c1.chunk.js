(this.webpackJsonpcountries=this.webpackJsonpcountries||[]).push([[0],{12:function(e,t,n){e.exports=n(30)},18:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(3),c=n.n(r),o=n(4),u=n.n(o),i=n(10),s=n(1),m=(n(18),function(e){var t=e.query,n=e.handleQuery;return l.a.createElement("form",{id:"search-container"},l.a.createElement("h1",null,"Country Search"),l.a.createElement("input",{type:"text",id:"search-box",placeholder:"Search for country...",value:t,onChange:n}))}),p=n(11),f=n.n(p),E={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},d=function(e){var t=e.country,n=Object(a.useState)(!1),r=Object(s.a)(n,2),c=r[0],o=r[1];return l.a.createElement(a.Fragment,null,l.a.createElement("div",{id:"country",onClick:function(){o(!0)}},l.a.createElement("img",{src:t.flag,id:"flag",alt:"flag"}),l.a.createElement("div",{className:"country-details"},l.a.createElement("div",{id:"name"},t.name," "),l.a.createElement("div",{id:"population"},"Population: ",t.population.toLocaleString()))),l.a.createElement(f.a,{isOpen:c,onRequestClose:function(){o(!1)},style:E,contentLabel:"Country Modal",ariaHideApp:!1},l.a.createElement("h1",null,t.name),l.a.createElement("ul",null,l.a.createElement("li",null,"Population: ",t.population.toLocaleString()),l.a.createElement("li",null,"Region: ",t.region),l.a.createElement("li",null,"Capital: ",t.capital),l.a.createElement("li",null,"Alternate spellings: ",t.altSpellings.toString()),l.a.createElement("li",null,"Currencies:"),l.a.createElement("ul",null,t.currencies.map((function(e){return l.a.createElement(a.Fragment,{key:e.code},l.a.createElement("li",null,"Symbol: ",e.symbol),l.a.createElement("li",null,"Code: ",e.code),l.a.createElement("li",null,"Name: ",e.name))}))),l.a.createElement("li",null,"Domain: ",t.topLevelDomain.toString()))))},h=function(e){var t=e.list;return l.a.createElement("div",{className:"country-container"},t.map((function(e){return l.a.createElement(d,{key:e.name,country:e})})))},g=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)([]),o=Object(s.a)(c,2),p=o[0],f=o[1];Object(a.useEffect)((function(){function e(){return(e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://restcountries.eu/rest/v2/all");case 2:e.sent.json().then((function(e){return f(e)})).catch((function(e){return console.log(e.message)}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var E=p.filter((function(e){return e.name.toLowerCase().startsWith(n.toLowerCase())}));return l.a.createElement("div",null,l.a.createElement(m,{query:n,handleQuery:function(e){r(e.target.value)}}),l.a.createElement(h,{list:E}))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(g,null)),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.f1ed29c1.chunk.js.map