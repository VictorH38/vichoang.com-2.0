(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{8273:function(t,e,i){"use strict";i.r(e),i.d(e,{CountUp:function(){return s}});var n=function(){return(n=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)},s=function(){function t(t,e,i){var s=this;this.endVal=e,this.options=i,this.version="2.8.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(t){s.startTime||(s.startTime=t);var e=t-s.startTime;s.remaining=s.duration-e,s.useEasing?s.countDown?s.frameVal=s.startVal-s.easingFn(e,0,s.startVal-s.endVal,s.duration):s.frameVal=s.easingFn(e,s.startVal,s.endVal-s.startVal,s.duration):s.frameVal=s.startVal+(s.endVal-s.startVal)*(e/s.duration);var i=s.countDown?s.frameVal<s.endVal:s.frameVal>s.endVal;s.frameVal=i?s.endVal:s.frameVal,s.frameVal=Number(s.frameVal.toFixed(s.options.decimalPlaces)),s.printValue(s.frameVal),e<s.duration?s.rAF=requestAnimationFrame(s.count):null!==s.finalEndVal?s.update(s.finalEndVal):s.options.onCompleteCallback&&s.options.onCompleteCallback()},this.formatNumber=function(t){var e,i,n,a=(Math.abs(t).toFixed(s.options.decimalPlaces)+"").split(".");if(e=a[0],i=a.length>1?s.options.decimal+a[1]:"",s.options.useGrouping){n="";for(var o=3,r=0,l=0,u=e.length;l<u;++l)s.options.useIndianSeparators&&4===l&&(o=2,r=1),0!==l&&r%o==0&&(n=s.options.separator+n),r++,n=e[u-l-1]+n;e=n}return s.options.numerals&&s.options.numerals.length&&(e=e.replace(/[0-9]/g,function(t){return s.options.numerals[+t]}),i=i.replace(/[0-9]/g,function(t){return s.options.numerals[+t]})),(t<0?"-":"")+s.options.prefix+e+i+s.options.suffix},this.easeOutExpo=function(t,e,i,n){return i*(1-Math.pow(2,-10*t/n))*1024/1023+e},this.options=n(n({},this.defaults),i),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(e),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,t):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push(function(){return s.handleScroll(s)}),window.onscroll=function(){window.onScrollFns.forEach(function(t){return t()})},this.handleScroll(this)))}return t.prototype.handleScroll=function(t){if(t&&window&&!t.once){var e=window.innerHeight+window.scrollY,i=t.el.getBoundingClientRect(),n=i.top+window.pageYOffset,s=i.top+i.height+window.pageYOffset;s<e&&s>window.scrollY&&t.paused?(t.paused=!1,setTimeout(function(){return t.start()},t.options.scrollSpyDelay),t.options.scrollSpyOnce&&(t.once=!0)):(window.scrollY>s||n>e)&&!t.paused&&t.reset()}},t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;if(this.countDown=this.startVal>t,Math.abs(t-this.startVal)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=t;var e=this.countDown?1:-1;this.endVal=t+e*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.options.onStartCallback&&this.options.onStartCallback(),t&&(this.options.onCompleteCallback=t),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var e;if(this.el){var i=this.formattingFn(t);(null===(e=this.options.plugin)||void 0===e?void 0:e.render)?this.options.plugin.render(this.el,i):"INPUT"===this.el.tagName?this.el.value=i:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=i:this.el.innerHTML=i}},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var e=Number(t);return this.ensureNumber(e)?e:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}()},1233:function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return i(401)}])},9905:function(t,e,i){"use strict";i(5893),i(5675)},6103:function(t,e,i){"use strict";var n=i(5893),s=i(5675),a=i.n(s);let o=()=>(0,n.jsx)("div",{className:"w-[200px] xl:w-[300px] absolute -right-16 -bottom-2 mix-blend-color-dodge animate-pulse duration-75 z-10",children:(0,n.jsx)(a(),{src:"/circles.png",width:260,height:200,className:"w-full h-full",alt:""})});e.Z=o},401:function(t,e,i){"use strict";i.r(e);var n=i(5893),s=i(7294),a=i(9583),o=i(7735);i(9905);var r=i(6103),l=i(3495),u=i(6356);i(7857);let h=[{title:"skills",info:[{title:"Languages",icons:[(0,n.jsx)(o.Ces,{},"cplusplus"),(0,n.jsx)(a.osz,{},"python"),(0,n.jsx)(a.zEo,{},"java"),(0,n.jsx)(o.KOm,{},"go"),(0,n.jsx)(a.gtO,{},"html5"),(0,n.jsx)(a.FGx,{},"css3"),(0,n.jsx)(a.zPb,{},"js"),(0,n.jsx)(a.Hv5,{},"php"),(0,n.jsx)(a.y$j,{},"swift")]},{title:"Frameworks and Technologies",icons:[(0,n.jsx)(a.huN,{},"react"),(0,n.jsx)(a.jPo,{},"nodejs"),(0,n.jsx)(o.faG,{},"django"),(0,n.jsx)(o.Vce,{},"springboot"),(0,n.jsx)(o.YnA,{},"tailwind"),(0,n.jsx)(a.l51,{},"snowflake"),(0,n.jsx)(a.JTf,{},"laravel"),(0,n.jsx)(o.uJt,{},"mysql"),(0,n.jsx)(o.zKo,{},"sqlite"),(0,n.jsx)(a.UC$,{},"aws"),(0,n.jsx)(o.tkX,{},"googlecloud"),(0,n.jsx)(a.X2n,{},"docker"),(0,n.jsx)(a.U40,{},"git"),(0,n.jsx)(a.hJX,{},"github"),(0,n.jsx)(o.nB$,{},"postman")]}]},{title:"experience",info:[{title:"Software Engineer Intern - Coinbase",stage:"May 2024 to August 2024"},{title:"Full Stack Web Developer - Tresi",stage:"May 2023 to Present"}]}],c=()=>{let[t,e]=(0,s.useState)(0);return(0,n.jsxs)("div",{className:"h-full bg-primary/30 py-32 text-center xl:text-left",children:[(0,n.jsx)(r.Z,{}),(0,n.jsxs)("div",{className:"container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6",children:[(0,n.jsxs)("div",{className:"flex-1 flex flex-col justify-center",children:[(0,n.jsxs)(l.E.h2,{variants:(0,u.J)("right",.2),initial:"hidden",animate:"show",exit:"hidden",className:"h2",children:["Transforming ",(0,n.jsx)("span",{className:"text-accent",children:"vision"})," into innovative solutions."]}),(0,n.jsxs)(l.E.p,{variants:(0,u.J)("right",.4),initial:"hidden",animate:"show",exit:"hidden",className:"max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0",children:["With a robust background in computer science and hands-on experience in software engineering, I have contributed to major projects at ",(0,n.jsx)("a",{href:"https://www.coinbase.com/",target:"_blank",className:"underline hover:text-accent transition-all duration-300",children:"Coinbase"})," and ",(0,n.jsx)("a",{href:"https://shoptresi.com/",target:"_blank",className:"underline hover:text-accent transition-all duration-300",children:"Tresi"}),". From developing full stack applications to engineering mobile solutions, my expertise spans multiple languages and frameworks. My work drives user engagement and operational efficiency, reflecting a commitment to quality and innovation."]})]}),(0,n.jsxs)(l.E.div,{variants:(0,u.J)("left",.4),initial:"hidden",animate:"show",exit:"hidden",className:"flex flex-col w-full xl:max-w-[48%] h-[480px]",children:[(0,n.jsx)("div",{className:"flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4",children:h.map((i,s)=>(0,n.jsx)("div",{className:"".concat(t===s&&"text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"," cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0"),onClick:()=>e(s),children:i.title},s))}),(0,n.jsx)("div",{className:"py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start",children:h[t].info.map((t,e)=>{var i;return(0,n.jsxs)("div",{className:"flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60",children:[(0,n.jsx)("div",{className:"font-light mb-2 md:mb-0",children:t.title}),(0,n.jsx)("div",{className:"hidden md:flex",children:"-"}),(0,n.jsx)("div",{children:t.stage}),(0,n.jsx)("div",{className:"flex flex-wrap gap-x-4 gap-y-2",children:null===(i=t.icons)||void 0===i?void 0:i.map((t,e)=>(0,n.jsx)("div",{className:"text-2xl text-white",children:t},e))})]},e)})})]})]})]})};e.default=c},6356:function(t,e,i){"use strict";i.d(e,{J:function(){return n}});let n=(t,e)=>({hidden:{y:"up"===t?80:"down"===t?-80:0,opacity:0,x:"left"===t?80:"right"===t?-80:0,transition:{type:"tween",duration:1.5,delay:e,ease:[.25,.6,.3,.8]}},show:{y:0,x:0,opacity:1,transition:{type:"tween",duration:1.4,delay:e,ease:[.25,.25,.25,.75]}}})},7857:function(t,e,i){"use strict";var n=i(7294),s=i(8273);function a(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,n)}return i}var o="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?n.useLayoutEffect:n.useEffect}},function(t){t.O(0,[415,445,774,888,179],function(){return t(t.s=1233)}),_N_E=t.O()}]);