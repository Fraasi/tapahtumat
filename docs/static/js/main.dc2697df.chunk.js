(this.webpackJsonptapahtumat=this.webpackJsonptapahtumat||[]).push([[0],{56:function(e){e.exports=JSON.parse('{"name":"tapahtumat","author":"fraasi <fraasi.gh@gmail.com> (https://fraasi.github.io)","version":"0.7.0","private":true,"homepage":".","scripts":{"start":"react-scripts start","build":"react-scripts build","postbuild":"rm -rf docs && cp -r build/ docs && rm -rf build","test":"react-scripts test","analyze":"source-map-explorer \'docs/static/js/*.js\'"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"dependencies":{"@material-ui/core":"^4.7.0","@material-ui/icons":"^4.5.1","leaflet":"^1.6.0","mongodb-stitch-browser-sdk":"^4.7.1","react":"^16.12.0","react-dom":"^16.12.0","react-leaflet":"^2.6.0","react-scripts":"^3.2.0"},"devDependencies":{"eslint":"^6.7.1","eslint-plugin-react":"^7.17.0","source-map-explorer":"^2.1.1"},"eslintIgnore":["/docs/**"],"license":"UNLICENSED"}')},64:function(e,t,a){e.exports=a(83)},69:function(e,t,a){},70:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),o=a.n(l),c=(a(69),a(22)),i=a(120),s=a(115),u=a(108),m=a(118),p=a(112),d=a(111),f=a(47),h=a.n(f),v=(a(70),Object(u.a)((function(e){return{root:{width:"100%"},secondaryHeading:{color:"rgba(0, 0, 0, 0.6)"},icon:{verticalAlign:"bottom",height:20,width:20}}}))),b=function(e){var t=Object(n.useState)(!1),a=Object(c.a)(t,2),l=a[0],o=a[1];Object(n.useEffect)((function(){o((function(){return e.isSwitchOn}))}),[e.isSwitchOn]);var i=v(),s=function(){return o((function(e){return!e}))},u=e.data,f=u.name,b=u.url,g=u.events,E=u.error_msg,w=u.error_title;if(e.showOnlyPispalaVenues){if(["dogs_home","maanalainen","visit_tampere","huurupiilo"].includes(f))return null}var k="".concat(f.charAt(0).toUpperCase()).concat(f.slice(1)).replace(/_/g," ");if(E)return r.a.createElement(m.a,{className:i.root,expanded:l},r.a.createElement(d.a,{expandIcon:r.a.createElement(h.a,null),"aria-controls":"panel1c-content",id:"panel1c-header",onClick:s},r.a.createElement("div",{className:"collapsible-header"},k,r.a.createElement("span",{className:"secondary-header"},"(",w," \ud83d\udc1b)"))),r.a.createElement(p.a,{className:"collapsible-body"},r.a.createElement("span",{className:"sub-header"},"K\xe4yh\xe4n nettisivuilla\xa0",r.a.createElement("a",{href:b,target:"_blank",rel:"noopener noreferrer"},b)),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("ul",null,r.a.createElement("li",{key:"error"},E))));"vastavirta"===f&&(g=g.slice(0,10));var y=new Date,j=y.getDate(),N=y.getMonth(),O=!1,S=g.sort((function(e,t){return e.startTimeStamp<t.startTimeStamp?-1:1})).filter((function(e){var t=e.startTimeStamp,a=e.endTimeStamp;if(a){var n=new Date(a),r=n.getDate(),l=n.getMonth();return!(r<j&&l<=N)}var o=new Date(t),c=o.getDate(),i=o.getMonth();return!(c<j&&i<=N)})),_=S.map((function(e,t){var a=e.startTimeStamp,n=e.endTimeStamp,l=e.event,o=new Date(a),c="";if(n){var i=new Date(n);c="\u2013".concat(i.getDate(),".").concat(i.getMonth()+1)}var s="".concat(o.getDate(),".").concat(o.getMonth()+1).concat(c),u=o.getDate()===j&&o.getMonth()===N;u&&(O=!0);var m=u?"rgba(39,169,157,0.7)":"";return r.a.createElement("tr",{key:t,style:{backgroundColor:m}},r.a.createElement("td",null,s),r.a.createElement("td",null,"\u2014"),r.a.createElement("td",null,l))}));return r.a.createElement(m.a,{className:i.root,expanded:l},r.a.createElement(d.a,{expandIcon:r.a.createElement(h.a,null),"aria-controls":"panel1c-content",id:"panel1c-header",onClick:s},r.a.createElement("div",{className:"collapsible-header"},k,r.a.createElement("span",{className:"secondary-header"},"\xa0"," (".concat(S.length,") ").concat(O?"!":"")))),r.a.createElement(p.a,{className:"collapsible-body"},r.a.createElement("span",{className:"sub-header"},"Aukioloajat & tarkemmat tiedot ",r.a.createElement("a",{href:b,target:"_blank",rel:"noopener noreferrer"},b)),"hirvitalo"===f&&r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement("span",{className:"sub-header"},"Kansankeitti\xf6 lauantaisin ",r.a.createElement("a",{href:"https://www.facebook.com/groups/294496307351291/",target:"_blank",rel:"noopener noreferrer"},"https://www.facebook.com/groups/294496307351291/"))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("table",null,r.a.createElement("tbody",null,_))))},g=a(119),E=a(114),w=a(122),k=a(123),y=a(113),j=a(124),N=a(117),O=(a(76),function(){return r.a.createElement(w.a,{center:[61.50238,23.71477],zoom:13},r.a.createElement(k.a,{attribution:'\xa9 <a href="https://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.osm.org/{z}/{x}/{y}.png"}),window.map_data&&window.map_data.map((function(e){var t=e.title,a=e.latLong;return r.a.createElement(y.a,{position:a,key:t},r.a.createElement(j.a,null,t))})))}),S=function(e){var t=e.isMapOpen,a=e.setMap;return r.a.createElement(N.a,{id:"modal-root",className:"modal-root","aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",open:t,onRendered:function(){window.gtag("event","map_opened",{event_category:"user",event_label:"map"});var e=document.querySelector(".map"),t=document.querySelector(".map-close-button");o.a.render(r.a.createElement(O,null),e),e.appendChild(t)},onClose:function(){return a(!1)},onBackdropClick:function(){return a(!1)}},r.a.createElement("div",{className:"modal-content"},r.a.createElement(E.a,{className:"map-close-button",onClick:function(){return a(!1)},variant:"outlined",color:"inherit"},"X"),r.a.createElement("div",{className:"map"})))},_=(a(77),[{name:"sadfg",url:"www.example.com",until:Date.now()-173800},{name:"suutari",url:"www.example.com",until:Date.now()-173800}]),C=function(){var e=_.filter((function(e){return e.until>Date.now()}));return console.log("hj",e),Boolean(e.length)&&r.a.createElement("ul",{className:"sponsors"},"\xc4ppi\xe4 ylpe\xe4sti sponsoroi:",e.map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},e.name))})))},D=a(56),x=(a(78),Object(u.a)((function(e){return{button:{width:"50%",margin:"5px 25%",background:e.custom.primary,color:"white","&:hover":{background:e.custom.onhover}}}}))),M=function(){var e=x(),t=Object(n.useState)(!1),a=Object(c.a)(t,2),l=a[0],o=a[1],i=Object(n.useState)(!1),s=Object(c.a)(i,2),u=s[0],m=s[1],p=function(){o((function(e){return!e})),l||gtag("event","menu_opened",{event_category:"user",event_label:"menu"})};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"burger-container",className:"".concat(l?"open":""),onClick:p,title:"Menu"},r.a.createElement("div",{id:"burger"},r.a.createElement("span",null,"\xa0"),r.a.createElement("span",null,"\xa0"),r.a.createElement("span",null,"\xa0"))),r.a.createElement("div",{className:"drawer-container"},r.a.createElement(g.a,{open:l,onClose:function(){return p()}},r.a.createElement("div",{className:"menu-content"},r.a.createElement("h3",null,"Pispalan tapahtumat\xa0",r.a.createElement("span",{className:"version"},"v",D.version," \xa9Fraasi")),r.a.createElement("p",null,"Pispalan harjun tapahtumat yhdell\xe4 sivustolla."),r.a.createElement("p",null,r.a.createElement("strong",null,"Vinkki: "),"T\xe4m\xe4 nettisivu (",r.a.createElement("a",{href:"https://pispala.events/",target:"_blank",rel:"noopener noreferrer"},"https://pispala.events/"),") on suunniteltu k\xe4nnyk\xe4lle ja toimii parhaiten kun avaa nettisivun luurin selaimessa ja valitsee asetuksista 'Add to home screen', jolloin l\xe4ht\xf6ruudulle napsahtaa kuvake jota klikkaamalla sivu toimii kuten muutkin '\xe4pit'."),r.a.createElement("p",null,"Jos sivulta l\xf6ytyy virheit\xe4 tai haluat ehdottaa jotain paikkaa listalle, palautetta voi l\xe4hett\xe4\xe4 osoitteeseen ",r.a.createElement("a",{href:"mailto:fraasi.gh@gmail.com"},"fraasi.gh@gmail.com")),r.a.createElement(E.a,{variant:"outlined",color:"inherit",className:e.button,onClick:function(){p(),m(!0)}},"Kartalla"),r.a.createElement(C,null))),r.a.createElement(S,{isMapOpen:u,setMap:m})))},T=(a(79),a(45)),A=T.c.initializeDefaultAppClient("tapahtumat-api-lffsa"),P=A.getServiceClient(T.b.factory,"mongodb-atlas").db("tapahtumat");var W=function(){var e=Object(n.useState)(null),t=Object(c.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(null),u=Object(c.a)(o,2),m=u[0],p=u[1],d=Object(n.useState)(!1),f=Object(c.a)(d,2),h=f[0],v=f[1],g=Object(n.useState)(!0),E=Object(c.a)(g,2),w=E[0],k=E[1];Object(n.useEffect)((function(){A.auth.loginWithCredential(new T.a).then((function(e){return P.collection("pispala").find({},{data:1,_id:0}).asArray()})).then((function(e){var t=e[0].data,a=t.events_data,n=t.map_data;l((function(){return a})),console.log("data",a),window.map_data=n})).catch((function(e){console.error("Data fetch error:",e),p((function(){return e}))}))}),[]);var y=null,j=function(){clearTimeout(y),y=setTimeout((function(){k((function(e){return!e}))}),5e3)},N=function(){clearTimeout(y)};return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",{className:"title",onMouseDown:j,onMouseUp:N,onTouchStart:j,onTouchEnd:N,onContextMenu:function(e){return e.preventDefault()}},"Pispalan Tapahtumat"),r.a.createElement(i.a,{className:"switch",checked:h,onClick:function(){v((function(e){return!e}))},title:"Avaa/sulje kaikki",color:"default",inputProps:{"aria-label":"primary checkbox"}}),r.a.createElement(M,null)),null!==m?r.a.createElement("div",{className:"error-loader"},m.toString()):null===a?r.a.createElement("div",{className:"error-loader"},"Haetaan tapahtumia...",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(s.a,null)):r.a.createElement("div",null,a.sort((function(e,t){return e.name<t.name?-1:1})).map((function(e){return r.a.createElement(b,{data:e,key:e.name,showOnlyPispalaVenues:w,isSwitchOn:h})}))))},U=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function I(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var z=a(58),B=a(116),J=Object(z.a)({custom:{primary:"#1d7d74",onhover:"#1b7068"}});o.a.render(r.a.createElement((function(){return r.a.createElement(B.a,{theme:J},r.a.createElement(W,null))}),null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");U?(!function(e,t){fetch(e).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):I(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):I(t,e)}))}}()}},[[64,1,2]]]);
//# sourceMappingURL=main.dc2697df.chunk.js.map