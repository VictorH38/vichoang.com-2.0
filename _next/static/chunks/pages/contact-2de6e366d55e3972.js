(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{6405:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return a(6161)}])},6103:function(e,t,a){"use strict";var s=a(5893),n=a(5675),i=a.n(n);let r=()=>(0,s.jsx)("div",{className:"w-[200px] xl:w-[300px] absolute -right-16 -bottom-2 mix-blend-color-dodge animate-pulse duration-75 z-10",children:(0,s.jsx)(i(),{src:"/circles.png",width:260,height:200,className:"w-full h-full",alt:""})});t.Z=r},6161:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return g}});var s=a(5893);a(6103);var n=a(3750),i=a(3495),r=a(6356),l=a(7294);let o={_origin:"https://api.emailjs.com"},c=(e,t="https://api.emailjs.com")=>{o._userID=e,o._origin=t},d=(e,t,a)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!a)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class u{constructor(e){this.status=e.status,this.text=e.responseText}}let m=(e,t,a={})=>new Promise((s,n)=>{let i=new XMLHttpRequest;i.addEventListener("load",({target:e})=>{let t=new u(e);200===t.status||"OK"===t.text?s(t):n(t)}),i.addEventListener("error",({target:e})=>{n(new u(e))}),i.open("POST",o._origin+e,!0),Object.keys(a).forEach(e=>{i.setRequestHeader(e,a[e])}),i.send(t)}),p=(e,t,a,s)=>{let n=s||o._userID;return d(n,e,t),m("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:n,service_id:e,template_id:t,template_params:a}),{"Content-type":"application/json"})},h=e=>{let t;if(!(t="string"==typeof e?document.querySelector(e):e)||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t},x=(e,t,a,s)=>{let n=s||o._userID,i=h(a);d(n,e,t);let r=new FormData(i);return r.append("lib_version","3.2.0"),r.append("service_id",e),r.append("template_id",t),r.append("user_id",n),m("/api/v1.0/email/send-form",r)};var f={init:c,send:p,sendForm:x};let v=()=>{let[e,t]=(0,l.useState)({name:"",email:"",subject:"",message:""}),[a,o]=(0,l.useState)(""),c=a=>{let{name:s,value:n}=a.target;t({...e,[s]:n})},d=e=>{e.preventDefault(),f.sendForm("service_qh0n5t8","template_qxetvvr",e.target,"z8dSSxIkmmNpUjEqS").then(e=>{console.log(e.text),o("Message sent successfully!"),t({name:"",email:"",subject:"",message:""})},e=>{console.log(e.text),o("Failed to send the message, please try again.")})};return(0,s.jsx)("div",{className:"h-full bg-primary/30",children:(0,s.jsx)("div",{className:"container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full",children:(0,s.jsxs)("div",{className:"flex flex-col w-full max-w-[700px]",children:[(0,s.jsxs)(i.E.h2,{variants:(0,r.J)("up",.2),initial:"hidden",animate:"show",exit:"hidden",className:"h2 text-center mb-12",children:["Let's ",(0,s.jsx)("span",{className:"text-accent",children:"connect."})]}),(0,s.jsxs)(i.E.form,{onSubmit:d,variants:(0,r.J)("up",.4),initial:"hidden",animate:"show",exit:"hidden",className:"flex-1 flex flex-col gap-6 w-full mx-auto",children:[(0,s.jsxs)("div",{className:"flex gap-x-6 w-full",children:[(0,s.jsx)("input",{type:"text",name:"name",placeholder:"name",className:"input",value:e.name,onChange:c,required:!0}),(0,s.jsx)("input",{type:"email",name:"email",placeholder:"email",className:"input",value:e.email,onChange:c,required:!0})]}),(0,s.jsx)("input",{type:"text",name:"subject",placeholder:"subject",className:"input",value:e.subject,onChange:c,required:!0}),(0,s.jsx)("textarea",{name:"message",placeholder:"message",className:"textarea",value:e.message,onChange:c,required:!0}),(0,s.jsxs)("button",{type:"submit",className:"btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group",children:[(0,s.jsx)("span",{className:"group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500",children:"Let's talk"}),(0,s.jsx)(n.lzl,{className:"-translate-y-[120%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"})]})]}),a&&(0,s.jsx)("div",{className:"mt-4 text-center text-white",children:a})]})})})};var g=v},6356:function(e,t,a){"use strict";a.d(t,{J:function(){return s}});let s=(e,t)=>({hidden:{y:"up"===e?80:"down"===e?-80:0,opacity:0,x:"left"===e?80:"right"===e?-80:0,transition:{type:"tween",duration:1.5,delay:t,ease:[.25,.6,.3,.8]}},show:{y:0,x:0,opacity:1,transition:{type:"tween",duration:1.4,delay:t,ease:[.25,.25,.25,.75]}}})}},function(e){e.O(0,[13,774,888,179],function(){return e(e.s=6405)}),_N_E=e.O()}]);