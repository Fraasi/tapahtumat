(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,a,t){e.exports=t(80)},28:function(e,a,t){},75:function(e,a,t){},76:function(e,a,t){},80:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(18),o=t.n(r),i=(t(28),t(14)),c=t(6),u=(t(75),function(e){var a=e.data,t=a.name,n=a.url,r=a.events;if("dogs_home"===t||"maanalainen"===t)return null;var o=function(){};if(r.error_msg)return l.a.createElement(c.CollapsibleItem,{header:"".concat(r.error_title," (").concat(t,") *!*!*"),onSelect:o},l.a.createElement("span",{className:"sub-header"},"K\xe4yh\xe4n nettisivuilla\xa0",l.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},n)),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("ul",null,l.a.createElement("li",{key:"error"},r.error_msg)));"vastavirta"===t&&(r=r.slice(0,10));var i="".concat(t.charAt(0).toUpperCase()).concat(t.slice(1)).replace(/_/g," "),u=(new Date).getTime(),s=new Date,m=!1,p=r.sort(function(e,a){return e.startTimeStamp<a.startTimeStamp?-1:1}).filter(function(e){var a=e.startTimeStamp,t=e.endTimeStamp;return!(t&&t<u)&&!(!t&&a<u)}),h=p.map(function(e,a){var t=e.startTimeStamp,n=e.endTimeStamp,r=e.event,o=new Date(t),i="";if(n){var c=new Date(n);i="\u2013".concat(c.getDate(),".").concat(c.getMonth()+1)}var u="".concat(o.getDate(),".").concat(o.getMonth()+1).concat(i),p=o.getDate()===s.getDate()&&o.getMonth()===s.getMonth();p&&(m=!0);var h=p?"rgba(39,169,157,0.7)":"";return l.a.createElement("tr",{key:a,style:{backgroundColor:h}},l.a.createElement("td",null,u),l.a.createElement("td",null,"\u2014"),l.a.createElement("td",null,r))});return l.a.createElement(c.CollapsibleItem,{header:"".concat(i," (").concat(p.length,") ").concat(m?"!":""),onSelect:o},l.a.createElement("span",{className:"sub-header"},"Aukioloajat & tarkemmat tiedot ",l.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},n)),"hirvitalo"===t&&l.a.createElement(l.a.Fragment,null,l.a.createElement("br",null),l.a.createElement("span",{className:"sub-header"},"Kansankeitti\xf6 lauantaisin ",l.a.createElement("a",{href:"https://www.facebook.com/groups/294496307351291/",target:"_blank",rel:"noopener noreferrer"},"https://www.facebook.com/groups/294496307351291/"))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("table",null,l.a.createElement("tbody",null,h)))}),s=function(){return l.a.createElement(c.Modal,{header:"Pispalan tapahtumista",actions:l.a.createElement(c.Button,{waves:"green",modal:"close"},"Sulje"),trigger:l.a.createElement(c.Button,{style:{top:"10px",right:"10px",position:"absolute"},title:"Info"},"?")},l.a.createElement("p",null,"Pispalassa on paljon pieni\xe4 eri yhdistyksi\xe4, jotka j\xe4rjest\xe4v\xe4t kaikenlaisia tapahtumia ja tekemisi\xe4. T\xe4m\xe4 on pieni yritys koota kaikki samalle sivustolle, jotta olisi helpompi l\xf6yt\xe4\xe4 mit\xe4 harjulla milloinkin tapahtuu."),l.a.createElement("p",null,l.a.createElement("strong",null,"vinkki: "),"T\xe4m\xe4 nettisivu on suunniteltu k\xe4nnyk\xe4lle ja toimii parhaiten kun avaa nettisivun luurin selaimessa ja valitsee asetuksista 'Add to home screen', jolloin l\xe4ht\xf6ruudulle napsahtaa kuvake jota klikkaamalla sivu toimii kuten muutkin '\xe4pit'."),l.a.createElement("p",null,l.a.createElement("strong",null,"huom: "),"P\xe4iv\xe4m\xe4\xe4rien kanssa ty\xf6skentely on kutakuinkin vaikeaa, joten jotain erheit\xe4 on odotettavissa. Korjailen niit\xe4 sit\xe4 mukaa kun niit\xe4 ilmenee ja aika antaa my\xf6ten."),l.a.createElement("p",null,"Jos sivulta l\xf6ytyy virheit\xe4 tai on jotain muuta valitettavaa tai haluat ehdottaa jotain paikkaa listalle, s\xe4hk\xf6postia voi l\xe4hett\xe4\xe4 osoitteeseen fraasi.gh@gmail.com"))},m=(t(76),t(13)),p=m.c.initializeDefaultAppClient("tapahtumat-api-lffsa"),h=p.getServiceClient(m.b.factory,"mongodb-atlas").db("tapahtumat");var d=function(){var e=Object(n.useState)(null),a=Object(i.a)(e,2),t=a[0],r=a[1],o=Object(n.useState)(null),d=Object(i.a)(o,2),k=d[0],f=d[1],v=Object(n.useState)(!1),E=Object(i.a)(v,2),b=E[0],g=E[1];return Object(n.useEffect)(function(){document.querySelector(".switch").title="Avaa/sulje kaikki",p.auth.loginWithCredential(new m.a).then(function(e){return h.collection("pispala").find({},{data:1,_id:0}).asArray()}).then(function(e){var a=e[0].data.sort(function(e,a){return e.name<a.name?-1:1});r(function(){return a}),console.log("data",a)}).catch(function(e){console.error("error",e),f(function(){return e})})},[]),l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("h1",{className:"title"},"Pispalan Tapahtumat"),l.a.createElement(s,null),l.a.createElement(c.Switch,{offLabel:"",onLabel:"",onChange:function(){g(function(e){return!e}),b?document.querySelector(".collapsible.expandable").M_Collapsible.close():document.querySelector(".collapsible.expandable").M_Collapsible.open()}})),null!==k?l.a.createElement("div",{className:"error-loader"},k.toString()):null===t?l.a.createElement("div",{className:"error-loader"},"Haetaan tapahtumia...",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(c.Preloader,{size:"small",flashing:!0})):l.a.createElement(c.Collapsible,{accordion:!1},t.map(function(e,a){return l.a.createElement(u,{data:e,key:e.name})})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var k=function(){window.dataLayer.push(arguments)};window.dataLayer=window.dataLayer||[],k("js",new Date),k("config","UA-91006134-3"),o.a.render(l.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,1,2]]]);
//# sourceMappingURL=main.08b23e4a.chunk.js.map