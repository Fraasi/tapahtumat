(this.webpackJsonptapahtumat=this.webpackJsonptapahtumat||[]).push([[0],{56:function(e){e.exports=JSON.parse('{"name":"tapahtumat","author":"fraasi <fraasi.gh@gmail.com> (https://fraasi.github.io)","version":"0.7.0","private":true,"homepage":".","scripts":{"start":"react-scripts start","build":"react-scripts build","postbuild":"rm -rf docs && cp -r build/ docs && rm -rf build","test":"react-scripts test","analyze":"source-map-explorer \'docs/static/js/*.js\'"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"dependencies":{"@material-ui/core":"^4.7.0","@material-ui/icons":"^4.5.1","leaflet":"^1.6.0","mongodb-stitch-browser-sdk":"^4.7.1","react":"^16.12.0","react-dom":"^16.12.0","react-leaflet":"^2.6.0","react-scripts":"^3.2.0"},"devDependencies":{"eslint":"^6.7.1","eslint-plugin-react":"^7.17.0","source-map-explorer":"^2.1.1"},"eslintIgnore":["/docs/**"]}')},64:function(e,t,a){e.exports=a(83)},69:function(e,t,a){},70:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),o=a.n(l),c=(a(69),a(22)),i=a(120),s=a(115),u=a(108),m=a(118),p=a(112),d=a(111),h=a(47),f=a.n(h),b=(a(70),Object(u.a)((function(e){return{root:{width:"100%"},secondaryHeading:{color:"rgba(0, 0, 0, 0.6)"},icon:{verticalAlign:"bottom",height:20,width:20}}}))),E=function(e){var t=Object(n.useState)(!1),a=Object(c.a)(t,2),l=a[0],o=a[1];Object(n.useEffect)((function(){o((function(){return e.isSwitchOn}))}),[e.isSwitchOn]);var i=b(),s=e.data,u=s.name,h=s.url,E=s.events,v=s.error_msg,g=s.error_title;if(e.showOnlyPispalaVenues){if(["dogs_home","maanalainen","visit_tampere","huurupiilo"].includes(u))return null}if(v)return r.a.createElement(m.a,{className:i.root,expanded:l},r.a.createElement(d.a,{expandIcon:r.a.createElement(f.a,null),"aria-controls":"panel1c-content"},r.a.createElement("div",{className:"collapsible-header"},"".concat(g," (").concat(u,") *!*!*"))),r.a.createElement(p.a,{className:"collapsible-body"},r.a.createElement("span",{className:"sub-header"},"K\xe4yh\xe4n nettisivuilla\xa0",r.a.createElement("a",{href:h,target:"_blank",rel:"noopener noreferrer"},h)),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("ul",null,r.a.createElement("li",{key:"error"},v))));"vastavirta"===u&&(E=E.slice(0,10));var k="".concat(u.charAt(0).toUpperCase()).concat(u.slice(1)).replace(/_/g," "),w=new Date,y=w.getDate(),j=w.getMonth(),O=!1,N=E.sort((function(e,t){return e.startTimeStamp<t.startTimeStamp?-1:1})).filter((function(e){var t=e.startTimeStamp,a=e.endTimeStamp;if(a){var n=new Date(a),r=n.getDate(),l=n.getMonth();return!(r<y&&l<=j)}var o=new Date(t),c=o.getDate(),i=o.getMonth();return!(c<y&&i<=j)})),S=N.map((function(e,t){var a=e.startTimeStamp,n=e.endTimeStamp,l=e.event,o=new Date(a),c="";if(n){var i=new Date(n);c="\u2013".concat(i.getDate(),".").concat(i.getMonth()+1)}var s="".concat(o.getDate(),".").concat(o.getMonth()+1).concat(c),u=o.getDate()===y&&o.getMonth()===j;u&&(O=!0);var m=u?"rgba(39,169,157,0.7)":"";return r.a.createElement("tr",{key:t,style:{backgroundColor:m}},r.a.createElement("td",null,s),r.a.createElement("td",null,"\u2014"),r.a.createElement("td",null,l))}));return r.a.createElement(m.a,{className:i.root,expanded:l},r.a.createElement(d.a,{expandIcon:r.a.createElement(f.a,null),"aria-controls":"panel1c-content",id:"panel1c-header",onClick:function(){return o((function(e){return!e}))}},r.a.createElement("div",{className:"collapsible-header"},k,r.a.createElement("span",{className:"secondary-header"},"\xa0"," (".concat(N.length,") ").concat(O?"!":"")))),r.a.createElement(p.a,{className:"collapsible-body"},r.a.createElement("span",{className:"sub-header"},"Aukioloajat & tarkemmat tiedot ",r.a.createElement("a",{href:h,target:"_blank",rel:"noopener noreferrer"},h)),"hirvitalo"===u&&r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement("span",{className:"sub-header"},"Kansankeitti\xf6 lauantaisin ",r.a.createElement("a",{href:"https://www.facebook.com/groups/294496307351291/",target:"_blank",rel:"noopener noreferrer"},"https://www.facebook.com/groups/294496307351291/"))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("table",null,r.a.createElement("tbody",null,S))))},v=a(119),g=a(114),k=a(122),w=a(123),y=a(113),j=a(124),O=a(117),N=(a(76),function(){return r.a.createElement(k.a,{center:[61.50238,23.71477],zoom:13},r.a.createElement(w.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.osm.org/{z}/{x}/{y}.png"}),window.map_data&&window.map_data.map((function(e){var t=e.title,a=e.latLong;return r.a.createElement(y.a,{position:a,key:t},r.a.createElement(j.a,null,t))})))}),S=function(e){var t=e.isMapOpen,a=e.setMap;return r.a.createElement(O.a,{id:"modal-root",className:"modal-root","aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",open:t,onRendered:function(){gtag("event","map_opened",{event_category:"user",event_label:"map"});var e=document.querySelector(".map"),t=document.querySelector(".map-close-button");o.a.render(r.a.createElement(N,null),e),e.appendChild(t)},onClose:function(){return a(!1)},onBackdropClick:function(){return a(!1)}},r.a.createElement("div",{className:"modal-content"},r.a.createElement(g.a,{className:"map-close-button",onClick:function(){return a(!1)},variant:"outlined",color:"inherit"},"X"),r.a.createElement("div",{className:"map"})))},_=(a(77),[{name:"sadfg",url:"www.example.com",until:Date.now()-173800},{name:"suutari",url:"www.example.com",until:Date.now()-173800}]),D=function(){var e=_.filter((function(e){return e.until>Date.now()}));return console.log("hj",e),Boolean(e.length)&&r.a.createElement("ul",{className:"sponsors"},"\xc4ppi\xe4 ylpe\xe4sti sponsoroi:",e.map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},e.name))})))},x=a(56),C=(a(78),Object(u.a)((function(e){return{button:{width:"50%",margin:"5px 25%",background:e.custom.primary,color:"white","&:hover":{background:e.custom.onhover}}}}))),M=function(){var e=C(),t=Object(n.useState)(!1),a=Object(c.a)(t,2),l=a[0],o=a[1],i=Object(n.useState)(!1),s=Object(c.a)(i,2),u=s[0],m=s[1],p=function(){o((function(e){return!e})),l||gtag("event","menu_opened",{event_category:"user",event_label:"menu"})};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"burger-container",className:"".concat(l?"open":""),onClick:p,title:"Menu"},r.a.createElement("div",{id:"burger"},r.a.createElement("span",null,"\xa0"),r.a.createElement("span",null,"\xa0"),r.a.createElement("span",null,"\xa0"))),r.a.createElement("div",{className:"drawer-container"},r.a.createElement(v.a,{open:l,onClose:function(){return p()}},r.a.createElement("div",{className:"menu-content"},r.a.createElement("h3",null,"Pispalan tapahtumat ",r.a.createElement("span",{className:"version"},"v",x.version)),r.a.createElement("p",null,"Pispalan harjun tapahtumat yhdell\xe4 sivustolla."),r.a.createElement("p",null,r.a.createElement("strong",null,"Vinkki: "),"T\xe4m\xe4 nettisivu (",r.a.createElement("a",{href:"https://fraasi.github.io/pispalan-tapahtumat/",target:"_blank",rel:"noopener noreferrer"},"https://fraasi.github.io/pispalan-tapahtumat/"),") on suunniteltu k\xe4nnyk\xe4lle ja toimii parhaiten kun avaa nettisivun luurin selaimessa ja valitsee asetuksista 'Add to home screen', jolloin l\xe4ht\xf6ruudulle napsahtaa kuvake jota klikkaamalla sivu toimii kuten muutkin '\xe4pit'."),r.a.createElement("p",null,"Jos sivulta l\xf6ytyy virheit\xe4 tai haluat ehdottaa jotain paikkaa listalle, palautetta voi l\xe4hett\xe4\xe4 osoitteeseen ",r.a.createElement("a",{href:"mailto:fraasi.gh@gmail.com"},"fraasi.gh@gmail.com")),r.a.createElement(g.a,{variant:"outlined",color:"inherit",className:e.button,onClick:function(){p(),m(!0)}},"Kartalla"),r.a.createElement(D,null))),r.a.createElement(S,{isMapOpen:u,setMap:m})))},T=(a(79),a(45)),A=T.c.initializeDefaultAppClient("tapahtumat-api-lffsa"),P=A.getServiceClient(T.b.factory,"mongodb-atlas").db("tapahtumat");var z=function(){var e=Object(n.useState)(null),t=Object(c.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(null),u=Object(c.a)(o,2),m=u[0],p=u[1],d=Object(n.useState)(!1),h=Object(c.a)(d,2),f=h[0],b=h[1],v=Object(n.useState)(!0),g=Object(c.a)(v,2),k=g[0],w=g[1];Object(n.useEffect)((function(){A.auth.loginWithCredential(new T.a).then((function(e){return P.collection("pispala").find({},{data:1,_id:0}).asArray()})).then((function(e){var t=e[0].data,a=t.events_data,n=t.map_data;l((function(){return a})),console.log("data",a),window.map_data=n})).catch((function(e){console.error("Data fetch error:",e),p((function(){return e}))}))}),[]);var y=null,j=function(){clearTimeout(y),y=setTimeout((function(){w((function(e){return!e}))}),5e3)},O=function(){clearTimeout(y)};return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",{className:"title",onMouseDown:j,onMouseUp:O,onTouchStart:j,onTouchEnd:O,onContextMenu:function(e){return e.preventDefault()}},"Pispalan Tapahtumat"),r.a.createElement(i.a,{className:"switch",checked:f,onClick:function(){b((function(e){return!e}))},title:"Avaa/sulje kaikki",color:"default",inputProps:{"aria-label":"primary checkbox"}}),r.a.createElement(M,null)),null!==m?r.a.createElement("div",{className:"error-loader"},m.toString()):null===a?r.a.createElement("div",{className:"error-loader"},"Haetaan tapahtumia...",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(s.a,null)):r.a.createElement("div",null,a.sort((function(e,t){return e.name<t.name?-1:1})).map((function(e){return r.a.createElement(E,{data:e,key:e.name,showOnlyPispalaVenues:k,isSwitchOn:f})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=a(58),I=a(116),J=Object(B.a)({custom:{primary:"#1d7d74",onhover:"#1b7068"}});o.a.render(r.a.createElement((function(){return r.a.createElement(I.a,{theme:J},r.a.createElement(z,null))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[64,1,2]]]);
//# sourceMappingURL=main.519f8338.chunk.js.map