(this["webpackJsonpacm-ioit"]=this["webpackJsonpacm-ioit"]||[]).push([[0],{108:function(e,t,a){},109:function(e,t,a){},111:function(e,t,a){},112:function(e,t,a){},345:function(e,t,a){},346:function(e,t,a){},347:function(e,t,a){},361:function(e,t,a){},362:function(e,t,a){},367:function(e,t,a){},368:function(e,t,a){},369:function(e,t,a){},370:function(e,t,a){},371:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a(1),c=a.n(i),s=a(45),l=a.n(s),r=(a(108),a(109),a(32)),o=(a(110),a(111),a(112),a(10)),d=function(){return c.a.useEffect((function(){!function(){var e=document.querySelector(".sphere-animation"),t=e.querySelectorAll(".sphere path"),a=t.length,n=[];!function(e,t){var a=function(){o.anime.set(e,{scale:1})};a(),window.addEventListener("resize",a)}(e);var i=Object(o.anime)({begin:function(){for(var e=0;e<a;e++)n.push(Object(o.anime)({targets:t[e],stroke:{value:["#00aaff","rgba(80,80,80,.35)"],duration:500},translateX:[2,-4],translateY:[2,-4],easing:"easeOutQuad",autoplay:!1}))},update:function(e){n.forEach((function(t,a){var n=(1-Math.sin(.35*a+.0022*e.currentTime))/2;t.seek(t.duration*n)}))},duration:1/0,autoplay:!1}),c=o.anime.timeline({autoplay:!1}).add({targets:t,strokeDashoffset:{value:[o.anime.setDashoffset,0],duration:3900,easing:"easeInQuad",delay:o.anime.stagger(190,{direction:"reverse"})},duration:2e3,delay:o.anime.stagger(60,{direction:"reverse"}),easing:"linear"},0),s=Object(o.anime)({targets:"#sphereGradient",x1:"25%",x2:"25%",y1:"0%",y2:"75%",duration:3e4,easing:"easeOutQuint",autoplay:!1},0);c.play(),i.play(),s.play()}()}),[]),Object(n.jsx)("div",{className:"animation-wrapper",children:Object(n.jsx)("div",{className:"sphere-animation",children:Object(n.jsxs)("svg",{className:"sphere",viewBox:"0 0 440 440",stroke:"rgba(80,80,80,.35)",children:[Object(n.jsx)("defs",{children:Object(n.jsxs)("linearGradient",{id:"sphereGradient",x1:"5%",x2:"5%",y1:"0%",y2:"15%",children:[Object(n.jsx)("stop",{stopColor:"#373734",offset:"0%"}),Object(n.jsx)("stop",{stopColor:"#242423",offset:"50%"}),Object(n.jsx)("stop",{stopColor:"#0D0D0C",offset:"100%"})]})}),Object(n.jsx)("path",{d:"M361.604 361.238c-24.407 24.408-51.119 37.27-59.662 28.727-8.542-8.543 4.319-35.255 28.726-59.663 24.408-24.407 51.12-37.269 59.663-28.726 8.542 8.543-4.319 35.255-28.727 59.662z"}),Object(n.jsx)("path",{d:"M360.72 360.354c-35.879 35.88-75.254 54.677-87.946 41.985-12.692-12.692 6.105-52.067 41.985-87.947 35.879-35.879 75.254-54.676 87.946-41.984 12.692 12.692-6.105 52.067-41.984 87.946z"}),Object(n.jsx)("path",{d:"M357.185 356.819c-44.91 44.91-94.376 68.258-110.485 52.149-16.11-16.11 7.238-65.575 52.149-110.485 44.91-44.91 94.376-68.259 110.485-52.15 16.11 16.11-7.239 65.576-52.149 110.486z"}),Object(n.jsx)("path",{d:"M350.998 350.632c-53.21 53.209-111.579 81.107-130.373 62.313-18.794-18.793 9.105-77.163 62.314-130.372 53.209-53.21 111.579-81.108 130.373-62.314 18.794 18.794-9.105 77.164-62.314 130.373z"}),Object(n.jsx)("path",{d:"M343.043 342.677c-59.8 59.799-125.292 91.26-146.283 70.268-20.99-20.99 10.47-86.483 70.269-146.282 59.799-59.8 125.292-91.26 146.283-70.269 20.99 20.99-10.47 86.484-70.27 146.283z"}),Object(n.jsx)("path",{d:"M334.646 334.28c-65.169 65.169-136.697 99.3-159.762 76.235-23.065-23.066 11.066-94.593 76.235-159.762s136.697-99.3 159.762-76.235c23.065 23.065-11.066 94.593-76.235 159.762z"}),Object(n.jsx)("path",{d:"M324.923 324.557c-69.806 69.806-146.38 106.411-171.031 81.76-24.652-24.652 11.953-101.226 81.759-171.032 69.806-69.806 146.38-106.411 171.031-81.76 24.652 24.653-11.953 101.226-81.759 171.032z"}),Object(n.jsx)("path",{d:"M312.99 312.625c-73.222 73.223-153.555 111.609-179.428 85.736-25.872-25.872 12.514-106.205 85.737-179.428s153.556-111.609 179.429-85.737c25.872 25.873-12.514 106.205-85.737 179.429z"}),Object(n.jsx)("path",{d:"M300.175 299.808c-75.909 75.909-159.11 115.778-185.837 89.052-26.726-26.727 13.143-109.929 89.051-185.837 75.908-75.908 159.11-115.778 185.837-89.051 26.726 26.726-13.143 109.928-89.051 185.836z"}),Object(n.jsx)("path",{d:"M284.707 284.34c-77.617 77.617-162.303 118.773-189.152 91.924-26.848-26.848 14.308-111.534 91.924-189.15C265.096 109.496 349.782 68.34 376.63 95.188c26.849 26.849-14.307 111.535-91.923 189.151z"}),Object(n.jsx)("path",{d:"M269.239 267.989c-78.105 78.104-163.187 119.656-190.035 92.807-26.849-26.848 14.703-111.93 92.807-190.035 78.105-78.104 163.187-119.656 190.035-92.807 26.849 26.848-14.703 111.93-92.807 190.035z"}),Object(n.jsx)("path",{d:"M252.887 252.52C175.27 330.138 90.584 371.294 63.736 344.446 36.887 317.596 78.043 232.91 155.66 155.293 233.276 77.677 317.962 36.521 344.81 63.37c26.85 26.848-14.307 111.534-91.923 189.15z"}),Object(n.jsx)("path",{d:"M236.977 236.61C161.069 312.52 77.867 352.389 51.14 325.663c-26.726-26.727 13.143-109.928 89.052-185.837 75.908-75.908 159.11-115.777 185.836-89.05 26.727 26.726-13.143 109.928-89.051 185.836z"}),Object(n.jsx)("path",{d:"M221.067 220.7C147.844 293.925 67.51 332.31 41.639 306.439c-25.873-25.873 12.513-106.206 85.736-179.429C200.6 53.786 280.931 15.4 306.804 41.272c25.872 25.873-12.514 106.206-85.737 179.429z"}),Object(n.jsx)("path",{d:"M205.157 204.79c-69.806 69.807-146.38 106.412-171.031 81.76-24.652-24.652 11.953-101.225 81.759-171.031 69.806-69.807 146.38-106.411 171.031-81.76 24.652 24.652-11.953 101.226-81.759 171.032z"}),Object(n.jsx)("path",{d:"M189.247 188.881c-65.169 65.169-136.696 99.3-159.762 76.235-23.065-23.065 11.066-94.593 76.235-159.762s136.697-99.3 159.762-76.235c23.065 23.065-11.066 94.593-76.235 159.762z"}),Object(n.jsx)("path",{d:"M173.337 172.971c-59.799 59.8-125.292 91.26-146.282 70.269-20.991-20.99 10.47-86.484 70.268-146.283 59.8-59.799 125.292-91.26 146.283-70.269 20.99 20.991-10.47 86.484-70.269 146.283z"}),Object(n.jsx)("path",{d:"M157.427 157.061c-53.209 53.21-111.578 81.108-130.372 62.314-18.794-18.794 9.104-77.164 62.313-130.373 53.21-53.209 111.58-81.108 130.373-62.314 18.794 18.794-9.105 77.164-62.314 130.373z"}),Object(n.jsx)("path",{d:"M141.517 141.151c-44.91 44.91-94.376 68.259-110.485 52.15-16.11-16.11 7.239-65.576 52.15-110.486 44.91-44.91 94.375-68.258 110.485-52.15 16.109 16.11-7.24 65.576-52.15 110.486z"}),Object(n.jsx)("path",{d:"M125.608 125.241c-35.88 35.88-75.255 54.677-87.947 41.985-12.692-12.692 6.105-52.067 41.985-87.947C115.525 43.4 154.9 24.603 167.592 37.295c12.692 12.692-6.105 52.067-41.984 87.946z"}),Object(n.jsx)("path",{d:"M109.698 109.332c-24.408 24.407-51.12 37.268-59.663 28.726-8.542-8.543 4.319-35.255 28.727-59.662 24.407-24.408 51.12-37.27 59.662-28.727 8.543 8.543-4.319 35.255-28.726 59.663z"})]})})})},j=a(374),b=a(375),m=a(100),h=a.n(m),u={particles:{number:{value:40,density:{enable:!0,value_area:800}},color:{value:"#00aaff"},shape:{type:"circle",stroke:{width:0,color:"#000000"}},opacity:{value:.4,random:!0,anim:{enable:!0,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!0,speed:2,size_min:.1,sync:!1}},line_linked:{enable_auto:!0,distance:100,color:"#00aaff",opacity:1,width:1,condensed_mode:{enable:!1,rotateX:600,rotateY:600},shadow:{enable:!0,color:"#3CA9D1",blur:5}},move:{enable:!0,speed:1,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!0,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"window",events:{onhover:{enable:!0},onclick:{enable:!0},resize:!0}},retina_detect:!0},x=function(){var e=c.a.useRef(null);return c.a.useEffect((function(){o.anime.timeline({loop:!0,autoplay:!0,direction:"alternate",duration:5e3}).add({targets:".unleashed, .scroll-indicator, .about-ioit-header, .unleashed-ioit",color:"#09FF00",easing:"easeInOutCirc"}),o.anime.timeline({loop:!0,autoplay:!0,direction:"alternate",duration:800}).add({targets:".scroll-indicator",easing:"easeInOutQuad",translateY:15})}),[]),Object(n.jsxs)("div",{children:[Object(n.jsxs)(j.a,{style:{paddingTop:"5rem"},className:"title-animation base",children:[Object(n.jsx)(h.a,{style:{position:"absolute",width:"100%",height:"90vh",top:0,left:0,opacity:"0.8"},params:u}),Object(n.jsxs)(b.a,{xs:12,lg:5,md:5,xl:5,children:[Object(n.jsxs)("div",{className:"title-animation-title",children:["AISSMS IOIT ACM Student Chapter ",Object(n.jsx)("br",{}),Object(n.jsx)("div",{className:"unleashed",children:"#UNLEASHED"}),Object(n.jsx)("div",{className:"unleashed-ioit",children:"\u2022 institute \u2022 of \u2022 information \u2022 technology \u2022"})]}),Object(n.jsx)(d,{})]}),Object(n.jsxs)(b.a,{xs:12,lg:7,md:7,xl:7,children:[Object(n.jsxs)("div",{className:"title-animation-side-head",children:["Association for Computing Machinery ",Object(n.jsx)("br",{}),"Advancing Computing as a Science ","&"," Profession"]}),Object(n.jsx)("div",{className:"title-animation-side",children:"ACM brings together computing educators, researchers, and professionals to inspire dialogue, share resources, and address the field's challenges. As the world\u2019s largest computing society, ACM strengthens the profession's collective voice through strong leadership, promotion of the highest standards, and recognition of technical excellence."}),Object(n.jsx)("div",{className:"fa fa-chevron-down scroll-indicator",onClick:function(){return e.current.scrollIntoView({behavior:"smooth"})}})]})]}),Object(n.jsx)("div",{ref:e})]})},O=a(46),p=a(21),f=a(13),g=(a(345),a(376)),v=a(379),y=a(377),N=function(){var e=Object(i.useState)({fullname:"",email:"",phone:"",msg:""}),t=Object(f.a)(e,2),a=t[0],c=t[1],s=function(e){var t=e.target,a=t.name,n=t.value;c((function(e){return Object(p.a)(Object(p.a)({},e),{},Object(O.a)({},a,n))}))},l={backgroundColor:"#00aaff",border:"0px",borderBottom:"1px solid black",borderRadius:"0%",color:"#000",fontSize:"1.8vh",fontWeight:"bold",boxShadow:"0px 0px"},r={fontWeight:"bold",fontSize:"1.8vh"};return Object(n.jsx)("div",{className:"container-fluid contact-div p-3",children:Object(n.jsxs)(j.a,{children:[Object(n.jsx)(b.a,{sm:12,lg:5,md:5,xl:5,children:Object(n.jsx)("div",{className:"map-container",children:Object(n.jsxs)(g.a,{scrollWheelZoom:!1,style:{height:"52.5vh",zIndex:"1",marginTop:"3rem",marginLeft:"2rem",borderRadius:"1%",border:"2px solid black"},center:[18.530989,73.8672683],zoom:17,children:[Object(n.jsx)(v.a,{attribution:'Map data \xa9 <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',url:"https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw"}),Object(n.jsx)(y.a,{position:[18.530989,73.8672683]})]})})}),Object(n.jsxs)(b.a,{sm:12,lg:7,md:7,xl:7,children:[Object(n.jsx)("div",{className:"my-5 ",children:Object(n.jsx)("h1",{className:"text-center font-weight-bolder",children:"Contact Us"})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col-md-6 col-10 mx-auto",children:Object(n.jsx)("div",{className:"mb-3",children:Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),alert("Hello ".concat(a.fullname,", Thank you for reaching out to us!"))},children:[Object(n.jsxs)("div",{className:"mb-3",children:[Object(n.jsx)("label",{style:r,htmlFor:"exampleFormControlInput1",className:"form-label",children:"Full Name"}),Object(n.jsx)("input",{style:l,type:"text",className:"form-control",id:"exampleFormControlInput1",name:"fullname",value:a.fullname,onChange:s,placeholder:"Enter Full Name"})]}),Object(n.jsxs)("div",{className:"mb-3",children:[Object(n.jsx)("label",{style:r,htmlFor:"exampleFormControlInput1",className:"form-label",children:"Email address"}),Object(n.jsx)("input",{style:l,type:"email",className:"form-control",id:"exampleFormControlInput1",name:"email",value:a.email,onChange:s,placeholder:"Enter Email Id"})]}),Object(n.jsxs)("div",{className:"mb-3",children:[Object(n.jsx)("label",{style:r,htmlFor:"exampleFormControlInput1",className:"form-label",children:"Mobile Number"}),Object(n.jsx)("input",{style:l,type:"number",className:"form-control",id:"exampleFormControlInput1",name:"phone",value:a.phone,onChange:s,placeholder:"Enter Phone Number"})]}),Object(n.jsxs)("div",{className:"mb-3",children:[Object(n.jsx)("label",{style:r,htmlFor:"exampleFormControlTextarea1",className:"form-label",children:"Message"}),Object(n.jsx)("textarea",{style:l,className:"form-control",id:"exampleFormControlTextarea1",rows:"3",name:"msg",value:a.msg,onChange:s,placeholder:"Send us a Message"})]}),Object(n.jsx)("div",{className:"col-12 text-center",children:Object(n.jsx)("button",{className:"btn btn-outline-dark font-weight-bold",type:"submit",children:"SEND"})})]})})})})]})]})})},w=a(378),C=(a(346),function(){return Object(n.jsx)("div",{style:{backgroundColor:"#000"},children:Object(n.jsxs)(w.a,{fluid:!0,className:"about-ioit-container",children:[Object(n.jsx)(j.a,{className:"about-ioit-header",children:"About Institute of Information Technology"}),Object(n.jsxs)(j.a,{className:"about-ioit-body",children:[Object(n.jsx)("p",{children:"All India Shri Shivaji Memorial Society\u2019s Institute of Information Technology, Pune was established in August 1999. The college is a self-financing college and is affiliated to Savitribai Phule Pune University (SPPU). It is approved by AICTE and Director of Technical Education, Maharashtra State. The College is centrally located in the heart of Pune City about 1 km from Pune and Shivaji Nagar Railway Stations. The institute enhances the teaching-learning experience by providing students greater resources, contact with industries and academia, employment opportunities and internships."}),Object(n.jsx)("p",{children:"The institute has well qualified and dedicated staff with good infrastructure facilities for UG and PG courses in the form of well-equipped laboratories in all the branches, namely, Computer Engineering, Electrical Engineering, Instrumentation Engineering, Electronics and Telecommunication Engineering, Information Technology and Artificial Intelligence and Data Sciences. The Institute also has Research centre for Electronics and Telecommunication Engineering."})]})]})})}),k=(a(347),function(){return c.a.useEffect((function(){o.anime.timeline({loop:!0,autoplay:!0,direction:"alternate",duration:5e3}).add({targets:".gear-main",rotateZ:275,easing:"easeInOutQuad"}),o.anime.timeline({loop:!0,autoplay:!0,direction:"alternate",duration:5e3}).add({targets:".gear-secondary",rotateZ:-450,easing:"easeInOutQuad"}),o.anime.timeline({loop:!0,autoplay:!0,direction:"alternate",duration:5e3}).add({targets:".gear-ternary",rotateZ:900,easing:"easeInOutQuad"})}),[]),Object(n.jsxs)(c.a.Fragment,{children:[Object(n.jsx)("div",{style:{height:"20vh",backgroundColor:"#000"}}),Object(n.jsxs)("div",{className:"digital-library-container",children:[Object(n.jsx)("img",{className:"gear-main",src:"https://img.pngio.com/cogwheel-element-equipment-fix-gearwheel-industry-mechanism-repair-png-gear-wheel-980_982.png",alt:""}),Object(n.jsx)("img",{className:"gear-secondary",src:"https://img.pngio.com/cogwheel-element-equipment-fix-gearwheel-industry-mechanism-repair-png-gear-wheel-980_982.png",alt:""}),Object(n.jsx)("img",{className:"gear-ternary",src:"https://img.pngio.com/cogwheel-element-equipment-fix-gearwheel-industry-mechanism-repair-png-gear-wheel-980_982.png",alt:""})]})]})}),I=a(101),S=a.n(I),M=(a(360),a(361),function(e){return Object(n.jsxs)("div",{className:"jumbotron--body",children:[Object(n.jsx)("h1",{children:e.title}),Object(n.jsx)("h3",{children:Object(n.jsx)("p",{children:e.text})})]})}),z=(a(362),function(e){return e.href?Object(n.jsx)("a",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),href:e.href,children:e.children}):e.to?Object(n.jsx)(r.b,{to:e.to,exact:e.exact,className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),children:e.children}):Object(n.jsx)("button",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),type:e.type,onClick:e.onClick,disabled:e.disabled,children:e.children})}),T=a.p+"static/media/placeholder.6a5f8d79.jpg",A=(a(367),function(){var e=[{id:0,title:"1st Slide",text:"OK!",image:T},{id:1,title:"2nd Slide",text:"OK!",image:T},{id:2,title:"3rd Slide",text:"OK!",image:T},{id:3,title:"4th Slide",text:"OK!",image:T}],t=Object(i.useState)(!1),a=Object(f.a)(t,2),s=a[0],l=a[1],r=Object(i.useState)(0),o=Object(f.a)(r,2),d=o[0],j=o[1],b=Object(i.useState)(-1),m=Object(f.a)(b,2),h=m[0],u=m[1],x=function(e){j(Number(e.target.getAttribute("index-key"))),O(),p()},O=function(){d!==h&&l(!0)},p=function(){u(d)};return Object(n.jsx)(c.a.Fragment,{children:Object(n.jsxs)("div",{className:"carousel-body",children:[Object(n.jsx)(S.a,{swipeable:!1,draggable:!1,showDots:!0,responsive:{desktop:{breakpoint:{max:3e3,min:1024},items:3,slidesToSlide:3},tablet:{breakpoint:{max:1024,min:464},items:2,slidesToSlide:2},mobile:{breakpoint:{max:464,min:0},items:1,slidesToSlide:1}},infinite:!0,keyBoardControl:!0,customTransition:"all .5",transitionDuration:500,containerClass:"carousel-container",dotListClass:"custom-dot-list-style",itemClass:"carousel-item-padding-40-px",children:e.map((function(e){return Object(n.jsx)("div",{className:"carousel-image__effect",children:Object(n.jsx)("img",{"index-key":e.id,className:"carousel-image",src:e.image,alt:e.title,onClick:x},e.id)},e.id)}))}),Object(n.jsx)("div",{className:"jumbotron-body",children:s&&e.filter((function(e){return e.id===d})).map((function(e){return Object(n.jsx)(M,{title:e.title,text:e.text},e.id)}))}),Object(n.jsx)("div",{align:"center",className:"button-body",children:s&&Object(n.jsx)(z,{onClick:function(){l(!1),j(0),u(-1)},children:"Close"})})]})})}),_=(a(368),function(){return Object(n.jsx)("div",{className:"news-body",children:Object(n.jsx)(c.a.Fragment,{children:Object(n.jsx)("div",{className:"carousel-body",children:Object(n.jsx)(A,{})})})})}),E=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(x,{}),Object(n.jsx)(k,{}),Object(n.jsx)(_,{}),Object(n.jsx)(C,{}),Object(n.jsx)(N,{})]})},F=a(61),D=[{id:1,title:"Home",cName:"nav_link"},{id:2,title:"About",cName:"nav_link"},{id:3,title:"Events",cName:"nav_link"},{id:4,title:"Membership",cName:"nav_link"},{id:5,title:"Team",cName:"nav_link"},{id:6,title:"Contact",cName:"nav_link"}],P=(a(369),function(e){var t=Object(i.useState)(!1),a=Object(f.a)(t,2),c=a[0],s=a[1],l=Object(i.useState)(),d=Object(f.a)(l,2),j=d[0],b=d[1];return Object(i.useEffect)((function(){o.anime.timeline({loop:!0,autoplay:!0,direction:"alternate",duration:5e3}).add({targets:".logo-text",color:"#09FF00",easing:"easeInOutCirc"}),window.addEventListener("scroll",(function(){window.scrollY>100?s(!0):s(!1)}))}),[]),Object(n.jsx)("nav",{className:"nav ".concat(c&&"nav_black"),children:Object(n.jsxs)("div",{className:"nav_center container",children:[Object(n.jsx)("div",{className:"logo-text",children:"ACM IOIT"}),Object(n.jsx)("ul",{className:j?"nav_list active":"nav_list",children:D.map((function(e){var t=e.id,a=e.title,i=e.cName;return Object(n.jsx)("li",{className:"nav_item",children:Object(n.jsx)(r.c,{to:"/acm-ioit-react/".concat(a),className:i,children:a})},t)}))}),Object(n.jsx)("div",{className:"hamburger",onClick:function(){b(!j)},children:j?Object(n.jsx)(F.b,{}):Object(n.jsx)(F.a,{})})]})})}),q=(a(370),function(){var e={fontWeight:"bold"};return Object(n.jsx)("div",{children:Object(n.jsx)("footer",{children:Object(n.jsxs)(w.a,{children:[Object(n.jsxs)("div",{className:"sec about__sec",children:[Object(n.jsx)("h2",{children:"About ACM"}),Object(n.jsx)("p",{style:e,children:"ACM IOIT Student Chapter was founded on 2019, with a vision to carry forward ACM\u2019s international intentions on a grass root level at AISSMS\u2019 Institute of Information Technology."}),Object(n.jsxs)("ul",{className:"sci",children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://www.facebook.com/ioit.acm",children:Object(n.jsx)("i",{className:"fab fa-facebook-f"})})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://www.instagram.com/ioit.acm/",children:Object(n.jsx)("i",{className:"fab fa-instagram"})})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://twitter.com/IOIT_ACM",children:Object(n.jsx)("i",{className:"fab fa-twitter"})})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://www.linkedin.com/company/ioit-acm",children:Object(n.jsx)("i",{className:"fab fa-linkedin-in"})})})]})]}),Object(n.jsxs)("div",{className:"sec contact",children:[Object(n.jsx)("h2",{children:"Contact Us"}),Object(n.jsxs)("ul",{className:"info",children:[Object(n.jsxs)("li",{children:[Object(n.jsx)("span",{children:Object(n.jsx)("i",{className:"fas fa-map-marker-alt"})}),Object(n.jsx)("span",{style:e,children:"AISSMS IOIT ACM Student Chapter. RB Motilal Kennedy Road, near RTO, Sangamvadi, Pune-411001"})]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("span",{children:Object(n.jsx)("i",{className:"far fa-envelope"})}),Object(n.jsx)("p",{children:Object(n.jsx)("a",{style:e,href:"mailto:support@ioit.acm.org",children:"support@ioit.acm.org"})})]})]})]}),Object(n.jsxs)("div",{className:"sec quickLinks",children:[Object(n.jsx)("h2",{children:"Quick Links"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{style:e,href:"localhost:3000",children:"About"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{style:e,href:"localhost:3000",children:"Home"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{style:e,href:"https://dl.acm.org/",children:"ACM Digital Library"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{style:e,href:"localhost:3000",children:"Membership"})})]})]})]})})})});var L=function(){return Object(n.jsx)(c.a.Fragment,{children:Object(n.jsxs)("div",{children:[Object(n.jsx)(r.a,{children:Object(n.jsx)(P,{})}),Object(n.jsx)(E,{}),Object(n.jsx)(q,{})]})})};l.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(L,{})}),document.getElementById("root"))}},[[371,1,2]]]);
//# sourceMappingURL=main.69fff74a.chunk.js.map