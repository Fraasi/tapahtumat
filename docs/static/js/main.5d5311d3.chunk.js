(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,a,t){e.exports=t(80)},28:function(e,a,t){},75:function(e,a,t){},76:function(e,a,t){},80:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(18),o=t.n(r),i=(t(28),t(14)),c=t(6),s=(t(75),function(e){var a=e.data,t=a.name,n=a.url,r=a.events,o=function(){};if(r.error_msg)return l.a.createElement(c.CollapsibleItem,{header:"".concat(r.error_title," (").concat(t,") *!*!*"),onSelect:o},l.a.createElement("span",{className:"sub-header"},"K\xe4yh\xe4n nettisivuilla\xa0",l.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},n)),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("ul",null,l.a.createElement("li",{key:"error"},r.error_msg)));if("dogs_home"===t||"maanalainen"===t)return null;"vastavirta"===t&&(r=r.slice(0,10));var i="".concat(t.charAt(0).toUpperCase()).concat(t.slice(1)).replace(/_/g," "),s=(new Date).getDate(),u=!1,m=r.sort(function(e,a){return e.startTimeStamp<a.startTimeStamp?-1:1}).map(function(e,a){var t=new Date(e.startTimeStamp),n="".concat(e.preStartTimeStamp||"").concat(t.getDate(),".").concat(t.getMonth()+1),r=t.getDate()===s;r&&(u=!0);var o=r?"rgba(39,169,157,0.7)":"";return l.a.createElement("tr",{key:a,style:{backgroundColor:o}},l.a.createElement("td",null,n),l.a.createElement("td",null,"\u2014"),l.a.createElement("td",null,e.event))});return l.a.createElement(c.CollapsibleItem,{header:"".concat(i," (").concat(r.length,") ").concat(u?"!":""),onSelect:o},l.a.createElement("span",{className:"sub-header"},"Aukioloajat & tarkemmat tiedot ",l.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},n)),"hirvitalo"===t&&l.a.createElement(l.a.Fragment,null,l.a.createElement("br",null),l.a.createElement("span",{className:"sub-header"},"Kansankeitti\xf6 lauantaisin ",l.a.createElement("a",{href:"https://www.facebook.com/groups/294496307351291/",target:"_blank",rel:"noopener noreferrer"},"https://www.facebook.com/groups/294496307351291/"))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("table",null,l.a.createElement("tbody",null,m)))}),u=function(){return l.a.createElement(c.Modal,{header:"Pispalan tapahtumista",actions:l.a.createElement(c.Button,{waves:"green",modal:"close"},"Sulje"),trigger:l.a.createElement(c.Button,{style:{top:"10px",right:"10px",position:"absolute"},title:"Info"},"?")},l.a.createElement("p",null,"Pispalassa on paljon pieni\xe4 eri yhdistyksi\xe4, jotka j\xe4rjest\xe4v\xe4t kaikenlaisia tapahtumia ja tekemisi\xe4. T\xe4m\xe4 on pieni yritys koota kaikki samalle sivustolle, jotta olisi helpompi l\xf6yt\xe4\xe4 mit\xe4 harjulla milloinkin tapahtuu."),l.a.createElement("p",null,l.a.createElement("strong",null,"vinkki: "),"T\xe4m\xe4 nettisivu on suunniteltu k\xe4nnyk\xe4lle ja toimii parhaiten kun avaa nettisivun luurin selaimessa ja valitsee asetuksista 'Add to home screen', jolloin l\xe4ht\xf6ruudulle napsahtaa kuvake jota klikkaamalla sivu toimii kuten muutkin '\xe4pit'."),l.a.createElement("p",null,l.a.createElement("strong",null,"huom: "),"P\xe4iv\xe4m\xe4\xe4rien kanssa ty\xf6skentely on kutakuinkin vaikeaa, joten jotain erheit\xe4 on odotettavissa. Korjailen niit\xe4 sit\xe4 mukaa kun niit\xe4 ilmenee ja aika antaa my\xf6ten."),l.a.createElement("p",null,"Jos sivulta l\xf6ytyy virheit\xe4 tai on jotain muuta valitettavaa tai haluat ehdottaa jotain paikkaa listalle, s\xe4hk\xf6postia voi l\xe4hett\xe4\xe4 osoitteeseen fraasi.gh@gmail.com"))},m=(t(76),t(13)),p=m.c.initializeDefaultAppClient("tapahtumat-api-lffsa"),d=p.getServiceClient(m.b.factory,"mongodb-atlas").db("tapahtumat");var h=function(){var e=Object(n.useState)(null),a=Object(i.a)(e,2),t=a[0],r=a[1],o=Object(n.useState)(null),h=Object(i.a)(o,2),k=h[0],E=h[1],f=Object(n.useState)(!1),v=Object(i.a)(f,2),b=v[0],g=v[1];return Object(n.useEffect)(function(){document.querySelector(".switch").title="Avaa/sulje kaikki",p.auth.loginWithCredential(new m.a).then(function(e){return d.collection("pispala").find({},{data:1,_id:0}).asArray()}).then(function(e){var a=e[0].data.sort(function(e,a){return e.name<a.name?-1:1});r(function(){return a}),console.log("data",a)}).catch(function(e){console.error("error",e),E(function(){return e})})},[]),l.a.createElement("div",{className:"App"},l.a.createElement(u,null),l.a.createElement(c.Switch,{offLabel:"",onLabel:"",onChange:function(){g(function(e){return!e}),b?document.querySelector(".collapsible.expandable").M_Collapsible.close():document.querySelector(".collapsible.expandable").M_Collapsible.open()}}),l.a.createElement("header",{className:"App-header"},l.a.createElement("div",{className:"title"},"Pispalan Tapahtumat")),null!==k?l.a.createElement("div",{className:"error-loader"},k.toString()):null===t?l.a.createElement("div",{className:"error-loader"},"Haetaan tapahtumia...",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(c.Preloader,{size:"small",flashing:!0})):l.a.createElement(c.Collapsible,{accordion:!1},t.map(function(e,a){return l.a.createElement(s,{data:e,key:e.name})})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));console.log("process.env.NODE_ENV:","production");var k=function(){window.dataLayer.push(arguments)};window.dataLayer=window.dataLayer||[],k("js",new Date),k("config","UA-91006134-3"),o.a.render(l.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,1,2]]]);
//# sourceMappingURL=main.5d5311d3.chunk.js.map