(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{53:function(e){e.exports={name:"tapahtumat",author:"fraasi <fraasi.gh@gmail.com> (https://fraasi.github.io)",version:"0.7.0",private:!0,homepage:".",scripts:{start:"react-scripts start",build:"react-scripts build",postbuild:"rm -rf docs && cp -r build/ docs && rm -rf build",test:"react-scripts test",eject:"react-scripts eject"},eslintConfig:{extends:"react-app"},browserslist:{production:[">0.2%","not dead","not op_mini all"],development:["last 1 chrome version","last 1 firefox version","last 1 safari version"]},dependencies:{"@material-ui/core":"^4.3.2","@material-ui/icons":"^4.2.1",leaflet:"^1.5.1","mongodb-stitch-browser-sdk":"^4.5.0",react:"^16.8.6","react-dom":"^16.8.6","react-leaflet":"^2.4.0","react-scripts":"3.0.1"},devDependencies:{"date-fns":"^1.30.1","eslint-plugin-react":"^7.14.3"}}},61:function(e,a,t){e.exports=t(80)},66:function(e,a,t){},67:function(e,a,t){},74:function(e,a,t){},75:function(e,a,t){},76:function(e,a,t){},80:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(8),o=t.n(l),c=(t(66),t(24)),i=t(114),s=t(111),u=t(105),m=t(115),p=t(108),d=t(107),h=t(48),f=t.n(h),b=(t(67),Object(u.a)(function(e){return{root:{width:"100%"},secondaryHeading:{color:"rgba(0, 0, 0, 0.6)"},icon:{verticalAlign:"bottom",height:20,width:20}}})),E=function(e){var a=Object(n.useState)(!1),t=Object(c.a)(a,2),l=t[0],o=t[1];Object(n.useEffect)(function(){o(function(){return e.isSwitchOn})},[e.isSwitchOn]);var i=b(),s=e.data,u=s.name,h=s.url,E=s.events;if(e.showOnlyPispalaVenues&&["dogs_home","maanalainen","visit_tampere","huurupiilo"].includes(u))return null;if(E.error_msg)return r.a.createElement(m.a,{className:i.root,expanded:l},r.a.createElement(d.a,{expandIcon:r.a.createElement(f.a,null),"aria-controls":"panel1c-content"},r.a.createElement("div",{className:"collapsible-header"},"".concat(E.error_title," (").concat(u,") *!*!*"))),r.a.createElement(p.a,{className:"collapsible-body"},r.a.createElement("span",{className:"sub-header"},"K\xe4yh\xe4n nettisivuilla\xa0",r.a.createElement("a",{href:h,target:"_blank",rel:"noopener noreferrer"},h)),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("ul",null,r.a.createElement("li",{key:"error"},E.error_msg))));"vastavirta"===u&&(E=E.slice(0,10));var v="".concat(u.charAt(0).toUpperCase()).concat(u.slice(1)).replace(/_/g," "),g=new Date,k=g.getDate(),w=g.getMonth(),y=!1,j=E.sort(function(e,a){return e.startTimeStamp<a.startTimeStamp?-1:1}).filter(function(e){var a=e.startTimeStamp,t=e.endTimeStamp;if(t){var n=new Date(t),r=n.getDate(),l=n.getMonth();return!(r<k&&l<=w)}var o=new Date(a),c=o.getDate(),i=o.getMonth();return!(c<k&&i<=w)}),O=j.map(function(e,a){var t=e.startTimeStamp,n=e.endTimeStamp,l=e.event,o=new Date(t),c="";if(n){var i=new Date(n);c="\u2013".concat(i.getDate(),".").concat(i.getMonth()+1)}var s="".concat(o.getDate(),".").concat(o.getMonth()+1).concat(c),u=o.getDate()===k&&o.getMonth()===w;u&&(y=!0);var m=u?"rgba(39,169,157,0.7)":"";return r.a.createElement("tr",{key:a,style:{backgroundColor:m}},r.a.createElement("td",null,s),r.a.createElement("td",null,"\u2014"),r.a.createElement("td",null,l))});return r.a.createElement(m.a,{className:i.root,expanded:l},r.a.createElement(d.a,{expandIcon:r.a.createElement(f.a,null),"aria-controls":"panel1c-content",id:"panel1c-header",onClick:function(){return o(function(e){return!e})}},r.a.createElement("div",{className:"collapsible-header"},v,r.a.createElement("span",{className:"secondary-header"},"\xa0"," (".concat(j.length,") ").concat(y?"!":"")))),r.a.createElement(p.a,{className:"collapsible-body"},r.a.createElement("span",{className:"sub-header"},"Aukioloajat & tarkemmat tiedot ",r.a.createElement("a",{href:h,target:"_blank",rel:"noopener noreferrer"},h)),"hirvitalo"===u&&r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement("span",{className:"sub-header"},"Kansankeitti\xf6 lauantaisin ",r.a.createElement("a",{href:"https://www.facebook.com/groups/294496307351291/",target:"_blank",rel:"noopener noreferrer"},"https://www.facebook.com/groups/294496307351291/"))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("table",null,r.a.createElement("tbody",null,O))))},v=t(113),g=t(110),k=t(116),w=t(120),y=t(109),j=t(118),O=t(112),N=(t(74),function(){return r.a.createElement(k.a,{center:[61.50238,23.71477],zoom:13},r.a.createElement(w.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.osm.org/{z}/{x}/{y}.png"}),window.map_data&&window.map_data.map(function(e){var a=e.title,t=e.latLong;return r.a.createElement(y.a,{position:t,key:a},r.a.createElement(j.a,null,a))}))}),S=function(e){var a=e.isMapOpen,t=e.setMap;return r.a.createElement(O.a,{id:"modal-root",className:"modal-root","aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",open:a,onRendered:function(){window.dataLayer.push({event:"map_modal_opened"});var e=document.querySelector(".map"),a=document.querySelector(".map-close-button");o.a.render(r.a.createElement(N,null),e),e.appendChild(a)},onClose:function(){return t(!1)},onBackdropClick:function(){return t(!1)}},r.a.createElement("div",{className:"modal-content"},r.a.createElement(g.a,{className:"map-close-button",onClick:function(){return t(!1)},variant:"outlined",color:"inherit"},"X"),r.a.createElement("div",{className:"map"})))},_=t(53),C=(t(75),Object(u.a)({button:{width:"50%",margin:"5px 25%"}})),D=function(){var e=C(),a=Object(n.useState)(!1),t=Object(c.a)(a,2),l=t[0],o=t[1],i=Object(n.useState)(!1),s=Object(c.a)(i,2),u=s[0],m=s[1],p=function(){o(function(e){return!e}),l||window.dataLayer.push({event:"Menu_opened"})};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"burger-container",className:"".concat(l?"open":""),onClick:p,title:"Menu"},r.a.createElement("div",{id:"burger"},r.a.createElement("span",null,"\xa0"),r.a.createElement("span",null,"\xa0"),r.a.createElement("span",null,"\xa0"))),r.a.createElement("div",{className:"drawer-container"},r.a.createElement(v.a,{open:l,onClose:function(){return p()}},r.a.createElement("div",{className:"menu-content"},r.a.createElement("h3",null,"Pispalan tapahtumat ",r.a.createElement("span",{className:"version"},"v",_.version)),r.a.createElement("p",null,"Pispalan harjun tapahtumat yhdell\xe4 sivustolla."),r.a.createElement("p",null,r.a.createElement("strong",null,"Vinkki: "),"T\xe4m\xe4 nettisivu (",r.a.createElement("a",{href:"https://fraasi.github.io/pispalan-tapahtumat/",target:"_blank",rel:"noopener noreferrer"},"https://fraasi.github.io/pispalan-tapahtumat/"),") on suunniteltu k\xe4nnyk\xe4lle ja toimii parhaiten kun avaa nettisivun luurin selaimessa ja valitsee asetuksista 'Add to home screen', jolloin l\xe4ht\xf6ruudulle napsahtaa kuvake jota klikkaamalla sivu toimii kuten muutkin '\xe4pit'."),r.a.createElement("p",null,"Jos sivulta l\xf6ytyy virheit\xe4 tai on jotain muuta valitettavaa tai haluat ehdottaa jotain paikkaa listalle, s\xe4hk\xf6postia voi l\xe4hett\xe4\xe4 osoitteeseen ",r.a.createElement("a",{href:"mailto:fraasi.gh@gmail.com"},"fraasi.gh@gmail.com")),r.a.createElement(g.a,{variant:"outlined",color:"inherit",className:e.button,onClick:function(){p(),m(!0)}},"Kartalla"))),r.a.createElement(S,{isMapOpen:u,setMap:m})))},M=(t(76),t(44)),T=M.c.initializeDefaultAppClient("tapahtumat-api-lffsa"),x=T.getServiceClient(M.b.factory,"mongodb-atlas").db("tapahtumat");var A=function(){var e=Object(n.useState)(null),a=Object(c.a)(e,2),t=a[0],l=a[1],o=Object(n.useState)(null),u=Object(c.a)(o,2),m=u[0],p=u[1],d=Object(n.useState)(!1),h=Object(c.a)(d,2),f=h[0],b=h[1],v=Object(n.useState)(!0),g=Object(c.a)(v,2),k=g[0],w=g[1];Object(n.useEffect)(function(){T.auth.loginWithCredential(new M.a).then(function(e){return x.collection("pispala").find({},{data:1,_id:0}).asArray()}).then(function(e){var a=e[0].data,t=a.events_data,n=a.map_data;window.map_data=n,l(function(){return t}),console.log("data",t)}).catch(function(e){console.error("Data fetch error:",e),p(function(){return e})})},[]);var y=null,j=function(){clearTimeout(y),y=setTimeout(function(){w(function(e){return!e})},5e3)},O=function(){clearTimeout(y)};return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",{className:"title",onMouseDown:j,onMouseUp:O,onTouchStart:j,onTouchEnd:O,onContextMenu:function(e){return e.preventDefault()}},"Pispalan Tapahtumat"),r.a.createElement(i.a,{className:"switch",checked:f,onClick:function(){b(function(e){return!e})},title:"Avaa/sulje kaikki",color:"default",inputProps:{"aria-label":"primary checkbox"}}),r.a.createElement(D,null)),null!==m?r.a.createElement("div",{className:"error-loader"},m.toString()):null===t?r.a.createElement("div",{className:"error-loader"},"Haetaan tapahtumia...",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(s.a,null)):r.a.createElement("div",null,t.sort(function(e,a){return e.name<a.name?-1:1}).map(function(e){return r.a.createElement(E,{data:e,key:e.name,showOnlyPispalaVenues:k,isSwitchOn:f})})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[61,1,2]]]);
//# sourceMappingURL=main.c274f440.chunk.js.map