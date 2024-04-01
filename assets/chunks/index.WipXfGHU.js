var $=Object.defineProperty,B=Object.getOwnPropertySymbols,A=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,E=(s,t,e)=>t in s?$(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,F=(s,t)=>{for(var e in t||(t={}))A.call(t,e)&&E(s,e,t[e]);if(B)for(var e of B(t))j.call(t,e)&&E(s,e,t[e]);return s},o=(s,t,e)=>(E(s,typeof t!="symbol"?t+"":t,e),e),h=(s,t,e)=>new Promise((i,n)=>{var r=m=>{try{u(e.next(m))}catch(v){n(v)}},c=m=>{try{u(e.throw(m))}catch(v){n(v)}},u=m=>m.done?i(m.value):Promise.resolve(m.value).then(r,c);u((e=e.apply(s,t)).next())});window._iconfont_svg_string_3847283='<svg><symbol id="icon-rest" viewBox="0 0 1280 1024"><path d="M352 512c88.22 0 160-71.78 160-160s-71.78-160-160-160-160 71.78-160 160 71.78 160 160 160z m704-256H608c-17.68 0-32 14.32-32 32v288H128V160c0-17.68-14.32-32-32-32H32C14.32 128 0 142.32 0 160v704c0 17.68 14.32 32 32 32h64c17.68 0 32-14.32 32-32v-96h1024v96c0 17.68 14.32 32 32 32h64c17.68 0 32-14.32 32-32V480c0-123.72-100.28-224-224-224z"  ></path></symbol><symbol id="icon-about" viewBox="0 0 1024 1024"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272z m-32-344c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"  ></path></symbol><symbol id="icon-like" viewBox="0 0 1024 1024"><path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z"  ></path></symbol><symbol id="icon-skin" viewBox="0 0 1024 1024"><path d="M870 126H663.8c-17.4 0-32.9 11.9-37 29.3C614.3 208.1 567 246 512 246s-102.3-37.9-114.8-90.7c-4.1-17.4-19.5-29.3-37-29.3H154c-24.3 0-44 19.7-44 44v252c0 24.3 19.7 44 44 44h75v388c0 24.3 19.7 44 44 44h478c24.3 0 44-19.7 44-44V466h75c24.3 0 44-19.7 44-44V170c0-24.3-19.7-44-44-44z"  ></path></symbol><symbol id="icon-setting" viewBox="0 0 1024 1024"><path d="M512.5 390.6c-29.9 0-57.9 11.6-79.1 32.8-21.1 21.2-32.8 49.2-32.8 79.1 0 29.9 11.7 57.9 32.8 79.1 21.2 21.1 49.2 32.8 79.1 32.8 29.9 0 57.9-11.7 79.1-32.8 21.1-21.2 32.8-49.2 32.8-79.1 0-29.9-11.7-57.9-32.8-79.1-21.2-21.2-49.2-32.8-79.1-32.8z"  ></path><path d="M924.8 626.1l-65.4-55.9c3.1-19 4.7-38.4 4.7-57.7s-1.6-38.8-4.7-57.7l65.4-55.9c10.1-8.6 13.8-22.6 9.3-35.2l-0.9-2.6c-18.1-50.4-44.8-96.8-79.6-137.7l-1.8-2.1c-8.6-10.1-22.5-13.9-35.1-9.5l-81.2 28.9c-30-24.6-63.4-44-99.6-57.5l-15.7-84.9c-2.4-13.1-12.7-23.3-25.8-25.7l-2.7-0.5c-52-9.4-106.8-9.4-158.8 0l-2.7 0.5c-13.1 2.4-23.4 12.6-25.8 25.7l-15.8 85.3c-35.9 13.6-69.1 32.9-98.9 57.3l-81.8-29.1c-12.5-4.4-26.5-0.7-35.1 9.5l-1.8 2.1c-34.8 41.1-61.5 87.4-79.6 137.7l-0.9 2.6c-4.5 12.5-0.8 26.5 9.3 35.2l66.2 56.5c-3.1 18.8-4.6 38-4.6 57 0 19.2 1.5 38.4 4.6 57l-66 56.5c-10.1 8.6-13.8 22.6-9.3 35.2l0.9 2.6c18.1 50.3 44.8 96.8 79.6 137.7l1.8 2.1c8.6 10.1 22.5 13.9 35.1 9.5l81.8-29.1c29.8 24.5 63 43.9 98.9 57.3l15.8 85.3c2.4 13.1 12.7 23.3 25.8 25.7l2.7 0.5c26.1 4.7 52.7 7.1 79.4 7.1 26.7 0 53.4-2.4 79.4-7.1l2.7-0.5c13.1-2.4 23.4-12.6 25.8-25.7l15.7-84.9c36.2-13.6 69.6-32.9 99.6-57.5l81.2 28.9c12.5 4.4 26.5 0.7 35.1-9.5l1.8-2.1c34.8-41.1 61.5-87.4 79.6-137.7l0.9-2.6c4.3-12.4 0.6-26.3-9.5-35z m-412.3 52.2c-97.1 0-175.8-78.7-175.8-175.8s78.7-175.8 175.8-175.8 175.8 78.7 175.8 175.8-78.7 175.8-175.8 175.8z"  ></path></symbol><symbol id="icon-switch" viewBox="0 0 1024 1024"><path d="M512 565c133.7 0 242-108.3 242-242S645.7 81 512 81 270 189.3 270 323s108.3 242 242 242z m4.8 299.3a264.4 264.4 0 0 1 0-205.6c2.3-5.4 4.8-10.8 7.4-16a4 4 0 0 0-3.7-5.8H512a311.4 311.4 0 0 1-122.2-24.7 319.8 319.8 0 0 1-57.9-32 4 4 0 0 0-4.2-0.3C208.7 645.3 128 771.7 128 917v25a4 4 0 0 0 4 4h429.9a4 4 0 0 0 3-6.7 261.9 261.9 0 0 1-48.1-75zM760 568c-106 0-192 86-192 192s86 192 192 192 192-86 192-192-86-192-192-192z m-98.4 136a4 4 0 0 1 4-4h124v-33.4c0-16 20.8-22.1 29.4-8.7l36.9 57.5a16 16 0 0 1-13.5 24.6H665.6a4 4 0 0 1-4-4z m196.8 112a4 4 0 0 1-4 4h-124v33.4c0 16-20.8 22.1-29.4 8.7l-36.9-57.5a16 16 0 0 1 13.5-24.6h176.8a4 4 0 0 1 4 4z"  ></path></symbol><symbol id="icon-loading" viewBox="0 0 1024 1024"><path d="M563.2 819.2a102.4 102.4 0 1 1 0 204.8 102.4 102.4 0 0 1 0-204.8z m-320.4608-153.6a128 128 0 1 1 0 256 128 128 0 0 1 0-256z m592.7936 25.6a102.4 102.4 0 1 1 0 204.8 102.4 102.4 0 0 1 0-204.8zM947.2 477.1328a76.8 76.8 0 1 1 0 153.6 76.8 76.8 0 0 1 0-153.6zM128 307.2a128 128 0 1 1 0 256 128 128 0 0 1 0-256z m782.6432-40.6016a51.2 51.2 0 1 1 0 102.4 51.2 51.2 0 0 1 0-102.4zM409.6 0a153.6 153.6 0 1 1 0 307.2 153.6 153.6 0 0 1 0-307.2z m384 153.6a25.6 25.6 0 1 1 0 51.2 25.6 25.6 0 0 1 0-51.2z"  ></path></symbol></svg>',function(s){var e=(e=document.getElementsByTagName("script"))[e.length-1],t=e.getAttribute("data-injectcss"),e=e.getAttribute("data-disable-injectsvg");if(!e){var i,n,r,c,u,m=function(f,d){d.parentNode.insertBefore(f,d)};if(t&&!s.__iconfont__svg__cssinject__){s.__iconfont__svg__cssinject__=!0;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(f){console&&console.log(f)}}i=function(){var f,d=document.createElement("div");d.innerHTML=s._iconfont_svg_string_3847283,(d=d.getElementsByTagName("svg")[0])&&(d.setAttribute("aria-hidden","true"),d.style.position="absolute",d.style.width=0,d.style.height=0,d.style.overflow="hidden",d=d,(f=document.body).firstChild?m(d,f.firstChild):f.appendChild(d))},document.addEventListener?~["complete","loaded","interactive"].indexOf(document.readyState)?setTimeout(i,0):(n=function(){document.removeEventListener("DOMContentLoaded",n,!1),i()},document.addEventListener("DOMContentLoaded",n,!1)):document.attachEvent&&(r=i,c=s.document,u=!1,I(),c.onreadystatechange=function(){c.readyState=="complete"&&(c.onreadystatechange=null,v())})}function v(){u||(u=!0,r())}function I(){try{c.documentElement.doScroll("left")}catch{return void setTimeout(I,50)}v()}}(window);class X{constructor(){o(this,"eventMap",new Map)}add(t,e){if(!e)return;const i=this.eventMap.get(t)||[];i.push(e),this.eventMap.set(t,i)}emit(t,...e){const i=this.eventMap.get(t);i==null||i.forEach(n=>void n(...e))}}class W{constructor(t,e){o(this,"app"),this.PIXI=t,this.stage=e,this.app=new this.PIXI.Application({view:this.stage.canvasElement,resolution:2,autoStart:!0,autoDensity:!0,backgroundAlpha:0,resizeTo:this.stage.element})}mount(t){t?(this.clearAppStage(),this.app.stage.addChild(t)):console.error("挂载模型失败")}unMount(){this.clearAppStage()}clearAppStage(){var t;(((t=this.app)==null?void 0:t.stage.children.length)||0)>0&&this.app.stage.removeChildren(0)}resize(){var t;(t=this.app)==null||t.resize()}}const P=s=>`
  @keyframes oml2d-shake-tips{
    0% {
      transform: translate(-50%, 5%) scale(0.99);
    }
    50% {
   
      transform: translate(-50%, 0%) scale(1);
    }
    100% {
      transform: translate(-50%, 5%) scale(0.99);
    }
  }
  
  @keyframes oml2d-stage-slide-in {
    from {
      transform: translateY(130%);
    }
    to {
      transform: translateY(0%);
    }
  }
  
  @keyframes oml2d-stage-slide-out {
    from {
      transform: translateY(0%);
    }
    to {
      transform: translateY(130%);
    }
  }
  
  @keyframes oml2d-display-tips {
    0% {
      opacity: 0;
      visibility: hidden;
    }
    100% {
      opacity: 1;
      visibility: visible;
    }
  }
  
  @keyframes oml2d-hidden-tips {
    0% {
      opacity: 1;
      visibility: visible;
    }
    100% {
      opacity: 0;
      visibility: hidden;
    }
  }

  @keyframes oml2d-loading-rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .oml2d-icon {
    width: 1em; 
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  
  .oml2d-loading{
    animation-name: oml2d-loading-rotate;
    animation-duration: 600ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  .oml2d-menus-item {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    align-items: center;
    transition: all 300ms;
    color: ${s};
    cursor: pointer;
    background-color: #fff;
  }
  
  .oml2d-menus-item:hover {
    background-color: ${s};
    color: #fff;
    box-shadow: 0 0 5px #000;
  }
  
  #${y.menus} .oml2d-menus-item:not(:last-child) {
    margin-bottom: 10px;
  }
  
  @keyframes oml2d-status-bar-left-slide-out {
    0% {
      transform: translateX(-8%);
    }
    100% {
      transform: translateX(-120%);
    }
  }
  
  
  @keyframes oml2d-status-bar-left-slide-in {
    0% {
      transform: translateX(-120%);
    }
    100% {
      transform: translateX(-8%);
    }
  }

  @keyframes oml2d-status-bar-right-slide-out {
    0% {
      transform: translateX(8%);
    }
    100% {
      transform: translateX(120%);
    }
  }
  
  
  @keyframes oml2d-status-bar-right-slide-in {
    0% {
      transform: translateX(120%);
    }
    100% {
      transform: translateX(8%);
    }
  }
  `,R={width:"0px",height:"0px",position:"fixed",right:"auto",bottom:0,zIndex:"9997",transform:"translateY(130%)"},L={position:"absolute",fontSize:"18px",borderRadius:"10px",filter:"drop-shadow(0 0 5px #999)",border:"2px solid #fff",color:"#fff",padding:"5px 5px",opacity:0,visibility:"hidden",transform:"translateX(-50%)",textAlign:"center",justifyContent:"center",animationDuration:"1000ms,1000ms",animationFillMode:"forwards, none",animationIterationCount:"1, infinite",width:"60%",left:"50%",top:0,display:"flex",alignItems:"center",minHeight:"100px"},z={minWidth:"20px",minHeight:"40px",position:"fixed",transform:"translateX(-110%)",bottom:"80px",padding:"7px 5px",zIndex:"9998",borderStyle:"solid",borderColor:"#fff",fontWeight:"bold",borderRadius:"5px",borderWidth:"2px",boxShadow:"0 0 5px #999",color:"#fff",display:"flex",alignItems:"center",textAlign:"center",flexWrap:"wrap",fontSize:"14px",writingMode:"vertical-lr",cursor:"pointer"},N={transition:"all 500ms",visibility:"hidden",opacity:0,position:"absolute",bottom:"10%",zIndex:"9999",fontSize:"26px"},V="#38B0DE",Y="#F08080",k="https://lib.oml2d.com",b={dockedPosition:"left",mobileDisplay:!1,primaryColor:V,sayHello:!0,transitionTime:1e3,parentElement:document.body,importType:"complete",libraryUrls:{complete:`${k}/complete.js`,cubism2:`${k}/cubism2.js`,cubism5:`${k}/cubism5.js`},models:[],statusBar:{disable:!1,transitionTime:800,switchingMessage:"正在切换",loadingMessage:"加载中",loadSuccessMessage:"加载成功",loadFailMessage:"加载失败",reloadMessage:"重新加载",restMessage:"看板娘休息中",restMessageDuration:8e3,loadingIcon:"icon-loading",errorColor:Y,style:z,mobileStyle:z},tips:{messageLine:3,mobileStyle:L,style:L,idleTips:{wordTheDay:!1,message:[],duration:5e3,interval:1e4,priority:2},welcomeTips:{message:{daybreak:"早上好！一日之计在于晨，美好的一天就要开始了。",morning:"上午好！工作顺利嘛，不要久坐，多起来走动走动哦！",noon:"中午了，工作了一个上午，现在是午餐时间！",afternoon:"午后很容易犯困呢，来杯咖啡吧~",dusk:"傍晚了！工作一天幸苦啦~",night:"晚上好，今天过得怎么样呢？",lateNight:"已经这么晚了呀，早点休息吧，晚安~",weeHours:"这么晚还不睡吗？当心熬夜秃头哦！"},duration:6e3,priority:3},copyTips:{duration:3e3,priority:3,message:["你复制了什么内容呢?记得注明出处哦~"]}},menus:{disable:!1,items:[{id:"Rest",icon:"icon-rest",title:"休息",onClick(s){s.statusBarOpen(s.options.statusBar.restMessage),s.clearTips(),s.setStatusBarClickEvent(()=>{s.statusBarClose(),s.stageSlideIn(),s.statusBarClearEvents()}),s.stageSlideOut()}},{id:"SwitchModel",icon:"icon-switch",title:"切换模型",onClick(s){s.loadNextModel()}},{id:"About",icon:"icon-about",title:"关于",onClick(){window.open("https://oml2d.com")}}],style:N,itemStyle:{},mobileStyle:N,mobileItemStyle:{}}},y={globalStyle:"oml2d-global-style",stage:"oml2d-stage",canvas:"oml2d-canvas",statusBar:"oml2d-statusBar",tips:"oml2d-tips",menus:"oml2d-menus",iconSvg:"oml2d-icon-svg"},C=s=>{const t=s.length;if(t===0)return;const e=Math.floor(Math.random()*t);return s[e]},G=(s,t)=>{let e;return{start:function(){return h(this,null,function*(){const i=()=>h(this,null,function*(){e&&(yield s(),clearTimeout(e),e=setTimeout(i,t))});e||(clearTimeout(e),e=setTimeout(i,t))})},stop:function(){clearTimeout(e),e=void 0}}},T=s=>s!==null&&typeof s=="object"&&!Array.isArray(s),w=s=>typeof s=="number"||s instanceof Number,K=s=>Array.isArray(s),x=s=>typeof s=="function",l=(s,t)=>{const e=Object.assign({},s);return T(s)&&T(t)&&Object.keys(t).forEach(i=>{T(t[i])?i in s?e[i]=l(s[i],t[i]):Object.assign(e,{[i]:t[i]}):Object.assign(e,{[i]:t[i]})}),e};var a=(s=>(s.pc="PC",s.mobile="MOBILE",s))(a||{}),D=(s=>(s.ALL="ALL",s.IDLE="IDLE",s.NONE="NONE",s))(D||{});const J=function(s){const{message:t}=s;let e="";const i=new Date().getHours().toString(),n=/^[5-7]$/,r=/^(?:[8-9]|1[0-1])$/,c=/^(1[2-3])$/,u=/^1[4-7]$/,m=/^1[8-9]$/,v=/^2[0-1]$/,I=/^2[2-3]$/;return n.test(i)?e=t.daybreak:r.test(i)?e=t==null?void 0:t.morning:c.test(i)?e=t==null?void 0:t.noon:u.test(i)?e=t==null?void 0:t.afternoon:m.test(i)?e=t==null?void 0:t.dusk:v.test(i)?e=t==null?void 0:t.night:I.test(i)?e=t==null?void 0:t.lateNight:e=t==null?void 0:t.weeHours,e},U=()=>console.log(`
 %c 🎉🎉🎉 %c %c ✨ oh-my-live2d v0.15.2 - https://oml2d.com Happy Hacking !! ✨ %c %c 🎉🎉🎉 
`,"background: #add7fb; padding:5px 0;","background: #58b0fc; padding:5px 0;","color: #fff; background: #030307; padding:5px 0;","background: #58b0fc; padding:5px 0;","background: #add7fb; padding:5px 0;"),p=s=>{const t=F({},s);return"width"in s&&w(s.width)&&(t.width=`${s.width}px`),"height"in s&&w(s.height)&&(t.height=`${s.height}px`),t},S=(s,t)=>{Object.assign(t.style,s)},q=s=>new Promise(t=>setTimeout(t,s)),g=s=>{const t=document.createElement(s.tagName);return t.id=s.id,s.className&&(t.className=s.className),s.dataName&&t.setAttribute("data-name",s.dataName),s.children&&s.children.forEach(e=>{t.appendChild(g(e))}),s.innerHtml&&(t.innerHTML=s.innerHtml),s.innerText&&(t.innerText=s.innerText),t},Q=s=>new Promise(t=>{et(s==null?void 0:s.id);const e=document.createElement("script");e.id=s==null?void 0:s.id,document.head.append(e),e.src=s==null?void 0:s.url,e.addEventListener("load",()=>{t()})}),Z=()=>h(void 0,null,function*(){const s=yield fetch("https://unpkg.com/oh-my-live2d@latest/package.json"),{version:t}=yield s.json();t!=="0.15.2"&&console.warn("[oml2d] 检查到 oh-my-live2d 存在最新版:",`v${t}`,"请前往: https://oml2d.com 以获得最新版详细信息, 并及时更新.")}),H=s=>h(void 0,null,function*(){const t=yield(yield fetch("https://v1.hitokoto.cn/")).json();return s?s(t):`${t.hitokoto}    -- ${t.from}`}),_=window.matchMedia("screen and (max-width: 768px)"),M=()=>_.matches?a.mobile:a.pc,tt=s=>{_.addEventListener("change",t=>{t.matches?s(a.mobile):s(a.pc)})},et=s=>{const t=document.getElementById(s);t==null||t.remove()},st=(s,t)=>{const e=l(s,t);return e.parentElement=t.parentElement||document.body,e},it=(s,t)=>h(void 0,null,function*(){return yield Q({url:t[s],id:`oml2d-${s}`}),window.PIXI.utils.skipHello(),{PIXI:window.PIXI,PixiLive2dDisplay:window.PIXI.live2d}}),O=(s,t=0,e=!1)=>{switch(s){case"left":return e?{left:"auto",right:`${t}px`}:{left:`${t}px`,right:"auto"};case"right":return e?{left:`${t}px`,right:"auto"}:{left:"auto",right:`${t}px`}}};class ot{constructor(t){o(this,"styleSheet"),this.options=t}create(){document.getElementById(y.globalStyle)||(this.styleSheet=g({tagName:"style",id:y.globalStyle,innerHtml:P(this.options.primaryColor)}))}mount(){this.styleSheet&&document.head.append(this.styleSheet)}initialize(){this.create(),this.mount(),this.reloadStyleSheet()}initializeStyle(){this.reloadStyleSheet()}reloadStyleSheet(){this.styleSheet&&(this.styleSheet.innerHTML=P(this.options.primaryColor))}}class nt{constructor(t,e){o(this,"element"),o(this,"style",{}),o(this,"itemStyle",{}),o(this,"menuItemList",[]),o(this,"_menuOptions",b.menus),this.options=t,this.globalOml2d=e}reload(t){this.unmount(),this.create(),this.reloadStyle(),this.mount(t)}get menuOptions(){return this._menuOptions}set menuOptions(t){let e;x(t)?e=l(b.menus,t(this.options.models[this.globalOml2d.modelIndex||0],this.globalOml2d.modelIndex||0)):e=t,this._menuOptions=e}createMenuItemElements(t){this.menuItemList=t.map(e=>{const i=g({id:e.id,tagName:"div",dataName:e.id,className:"oml2d-menus-item",innerHtml:`<svg class="oml2d-icon"><use xlink:href="#${e.icon}"></use></svg>`});return i.title=e.title,i.onclick=()=>{var n;(n=e.onClick)==null||n.call(e,this.globalOml2d)},i})}createMenuItem(){if(K(this.menuOptions.items))this.createMenuItemElements(this.menuOptions.items);else if(x(this.menuOptions.items)){const t=this.menuOptions.items(b.menus.items);this.createMenuItemElements(t)}}create(){this.menuOptions=this.options.menus,this.menuOptions.disable===!1&&(this.element=g({id:y.menus,tagName:"div",className:y.menus}),this.createMenuItem())}unmountItems(){this.menuItemList.forEach(t=>{t.remove()})}unmount(){var t;this.unmountItems(),(t=this.element)==null||t.remove()}mountItems(){this.element&&this.element.append(...this.menuItemList)}mount(t){if(this.element){t.append(this.element),this.mountItems(),t.onmouseover=()=>{this.setStyle({opacity:1,visibility:"visible"})},t.onmouseout=()=>{this.setStyle({opacity:0,visibility:"hidden"})};let e;t.ontouchend=()=>{clearTimeout(e),this.setStyle({opacity:1,visibility:"visible"}),e=setTimeout(()=>{this.setStyle({opacity:0,visibility:"hidden"})},3e3)}}}reloadStyle(){switch(this.style={},M()){case a.pc:this.setStyle(p(l(O(this.options.dockedPosition,10,!0),this.menuOptions.style||{}))),this.setItemStyle(p(this.menuOptions.itemStyle||{}));break;case a.mobile:this.setStyle(p(l(O(this.options.dockedPosition,10,!0),this.menuOptions.mobileStyle||{}))),this.setItemStyle(p(this.menuOptions.mobileItemStyle||{}));break}}update(t){this.options=t,this.reloadStyle()}setStyle(t){this.element&&(this.style=l(this.style,t),S(this.style,this.element))}setItemStyle(t){this.itemStyle=l(this.itemStyle,t),this.menuItemList.forEach(e=>{S(this.itemStyle,e)})}}class lt{constructor(t,e,i){o(this,"model"),o(this,"currentModelIndex",0),o(this,"hitAreaFrames"),this.options=t,this.PixiLive2dDisplay=e,this.events=i,this.hitAreaFrames=new e.HitAreaFrames}get modelIndex(){return this.currentModelIndex}set modelIndex(t){this.currentModelIndex=t}get currentModelOptions(){return this.options.models[this.modelIndex]}create(){return new Promise((t,e)=>{this.events.emit("load","loading"),this.model=this.PixiLive2dDisplay.Live2DModel.fromSync(this.currentModelOptions.path,{motionPreload:this.currentModelOptions.motionPreloadStrategy||D.IDLE,onError:()=>{this.events.emit("load","fail"),e()}}),this.model.on("load",()=>{this.events.emit("load","success"),t()}),this.model.on("hit",i=>{this.events.emit("hit",i),this.playRandomMotion(i)})})}settingModel(){switch(M()){case a.mobile:this.setPosition(...this.currentModelOptions.mobilePosition||[]),this.setScale(this.currentModelOptions.mobileScale);break;case a.pc:this.setPosition(...this.currentModelOptions.position||[]),this.setScale(this.currentModelOptions.scale);break}this.currentModelOptions.showHitAreaFrames&&this.addHitAreaFrames(),w(this.currentModelOptions.volume)&&(this.PixiLive2dDisplay.SoundManager.volume=this.currentModelOptions.volume)}addHitAreaFrames(){var t;(t=this.model)==null||t.addChild(this.hitAreaFrames)}removeHitAreaFrames(){var t;(t=this.model)==null||t.removeChildren(0)}get modelSize(){var t,e;return{width:((t=this.model)==null?void 0:t.width)||0,height:((e=this.model)==null?void 0:e.height)||0}}setScale(t=.1){var e;(e=this.model)==null||e.scale.set(t,t)}setPosition(t=0,e=0){this.model.x=t,this.model.y=e}playMotion(t,e){var i;(i=this.model)==null||i.motion(t,e)}playRandomMotion(t){var e;const i=Object.keys(((e=this.model)==null?void 0:e.internalModel.motionManager.motionGroups)||{});let n=i.find(r=>t[0].includes(r.toLowerCase())||r.toLowerCase().includes(t[0]));n||(n=C(i)),this.playMotion(n||"")}}class at{constructor(t,e){o(this,"element"),o(this,"canvasElement"),o(this,"status",!1),o(this,"style",{}),o(this,"canvasStyle",{}),o(this,"currentModelIndex",0),this.options=t,this.events=e}create(){this.element=g({id:y.stage,tagName:"div"}),this.canvasElement=g({id:y.canvas,tagName:"canvas"})}set modelIndex(t){this.currentModelIndex=t}get modelIndex(){return this.currentModelIndex}mount(){this.element&&this.canvasElement&&(this.element.append(this.canvasElement),this.options.parentElement.append(this.element))}reloadStyle(t={}){var e,i,n,r;switch(this.style={},t=l(t,O(this.options.dockedPosition)),M()){case a.mobile:t=l(t,((i=(e=this.options.models)==null?void 0:e[this.modelIndex])==null?void 0:i.mobileStageStyle)||{});break;case a.pc:t=l(t,((r=(n=this.options.models)==null?void 0:n[this.modelIndex])==null?void 0:r.stageStyle)||{});break}this.setStyle(p(l(R,t)))}unMount(){var t;(t=this.element)==null||t.remove()}reMount(){this.unMount(),this.mount()}setStyle(t,e){this.element&&(this.style=l(this.style,t),S(this.style,this.element),this.setCanvasStyle({width:"100%",height:"100%",zIndex:"9998",position:"relative"}),e==null||e())}setCanvasStyle(t){this.canvasElement&&(this.canvasStyle=l(this.canvasStyle,t),S(this.canvasStyle,this.canvasElement))}get transitionTime(){return this.options.transitionTime}slideIn(){return this.setStyle({animationName:"oml2d-stage-slide-in",animationDuration:`${this.transitionTime}ms`,animationFillMode:"forwards"}),new Promise(t=>{setTimeout(()=>{this.status=!0,this.events.emit("stageSlideIn"),t()},this.transitionTime)})}slideOut(){return new Promise(t=>{this.status?(this.setStyle({animationName:"oml2d-stage-slide-out",animationDuration:`${this.transitionTime}ms`,animationFillMode:"forwards"}),setTimeout(()=>{this.status=!1,this.events.emit("stageSlideOut"),t()},this.transitionTime)):t()})}}class rt{constructor(t){o(this,"element"),o(this,"style",{}),o(this,"timer",0),o(this,"status",!1),this.options=t}get statusBarOptions(){return this.options.statusBar}create(){this.options.statusBar.disable||(this.element=g({id:y.statusBar,tagName:"div",innerText:""}))}mount(){this.element&&this.options.parentElement.append(this.element)}reloadStyle(){switch(this.style={},M()){case a.pc:this.setStyle(p(l(O(this.options.dockedPosition),this.options.statusBar.style||{})));break;case a.mobile:this.setStyle(p(l(O(this.options.dockedPosition),this.options.statusBar.mobileStyle||{})));break}}initializeStyle(){this.setColor(this.options.primaryColor),this.reloadStyle()}unMount(){var t;(t=this.element)==null||t.remove()}reMounte(){this.unMount(),this.mount()}setStyle(t){this.element&&(this.style=l(this.style,t),S(t,this.element))}slideIn(){return new Promise(t=>{this.status&&t(),this.setStyle({animationName:`oml2d-status-bar-${this.options.dockedPosition}-slide-in`,animationDuration:`${this.statusBarOptions.transitionTime}ms`,animationFillMode:"forwards"}),setTimeout(()=>{this.status=!0,t()},this.statusBarOptions.transitionTime)})}slideOut(){return new Promise(t=>{this.status?(this.setStyle({animationName:`oml2d-status-bar-${this.options.dockedPosition}-slide-out`,animationDuration:`${this.statusBarOptions.transitionTime}ms`,animationFillMode:"forwards"}),setTimeout(()=>{this.status=!0,t()},this.statusBarOptions.transitionTime)):t()})}showLoading(){this.open(`
      <div style="margin-bottom:3px;">${this.statusBarOptions.loadingMessage}</div>
      <svg class="oml2d-icon oml2d-loading" aria-hidden="true">
        <use xlink:href=#${this.statusBarOptions.loadingIcon}></use>
      </svg>
    `)}hideLoading(){this.popup(this.statusBarOptions.loadSuccessMessage,1e3)}setHoverEvent(t){this.element&&(this.element.onmouseover=(t==null?void 0:t.onIn)||null,this.element.onmouseout=(t==null?void 0:t.onOut)||null)}setClickEvent(t){this.element&&(this.element.onclick=t)}clearHoverEvent(){this.element&&(this.element.onmouseover=null,this.element.onmouseout=null)}clearClickEvent(){this.element&&(this.element.onclick=null)}rest(){this.popup(this.statusBarOptions.restMessage,this.statusBarOptions.restMessageDuration)}loadingError(t){this.setHoverEvent({onIn:()=>{this.setContent(this.statusBarOptions.reloadMessage)},onOut:()=>{this.setContent(this.statusBarOptions.loadFailMessage)}}),this.setClickEvent(()=>{t()}),this.open(this.statusBarOptions.loadFailMessage,this.options.statusBar.errorColor)}get stateColor(){return{info:this.options.primaryColor,error:this.options.statusBar.errorColor}}setColor(t){t&&this.setStyle({backgroundColor:t})}open(t,e=this.options.primaryColor){this.popup(t,!1,e)}close(t,e=this.options.primaryColor,i=0){this.popup(t,i,e)}popup(t,e=0,i=this.options.primaryColor){clearTimeout(this.timer),this.setColor(i),t&&this.setContent(t),this.slideIn().then(()=>{w(e)&&(this.timer=setTimeout(()=>{this.slideOut()},e))})}setContent(t){this.element&&(this.element.innerHTML=t)}}class dt{setModelInfo(t){const e=JSON.stringify(t);localStorage.setItem("OML2D_MODEL_INFO",e)}getModuleInfo(t){const e=this.getModelDataKey(t),i=JSON.parse(localStorage.getItem("OML2D_MODEL_INFO"));if((i==null?void 0:i.key)===e)return i}getModelDataKey(t){return(t==null?void 0:t.map(e=>e.path)).join()}updateModelInfo(t,e){const i=this.getModelDataKey(t);this.setModelInfo({key:i,currentIndex:e})}getModelCurrentIndex(t){var e;return((e=this.getModuleInfo(t))==null?void 0:e.currentIndex)||0}}class ht{constructor(t,e){o(this,"idlePlayer"),o(this,"element"),o(this,"contentElement"),o(this,"closeTimer",0),o(this,"transitionTime",1e3),o(this,"style",{}),o(this,"priority",0),o(this,"contentStyle",{}),o(this,"_tipsOptions",b.tips),this.options=t,this.globalOml2d=e}reload(t){this.clear(),this.unmount(),this.create(),this.reloadStyle(),this.mount(t)}get tipsOptions(){return this._tipsOptions}set tipsOptions(t){let e;x(t)?e=l(b.tips,t(this.options.models[this.globalOml2d.modelIndex||0],this.globalOml2d.modelIndex||0)):e=t,this._tipsOptions=e}create(){this.tipsOptions=this.options.tips,this.idlePlayer=this.createIdleMessagePlayer(),this.element=g({id:y.tips,tagName:"div"}),this.contentElement=g({id:"oml2d-tips-content",tagName:"div"})}mount(t){this.element&&this.contentElement&&(this.element.append(this.contentElement),t.append(this.element))}unmount(){var t,e;(t=this.element)==null||t.remove(),(e=this.contentElement)==null||e.remove()}get primaryColor(){return this.options.primaryColor}reloadStyle(){switch(this.style={},this.setContentStyle({wordBreak:"break-all",display:"-webkit-box",textOverflow:"ellipsis",WebkitBoxOrient:"vertical",WebkitLineClamp:this.tipsOptions.messageLine,overflow:"hidden"}),M()){case a.pc:this.setStyle(p(this.tipsOptions.style||{}));break;case a.mobile:this.setStyle(p(this.tipsOptions.mobileStyle||{}));break}}setStyle(t={}){var e;this.element&&(this.style=l(this.style,t),(e=this.style).backgroundColor||(e.backgroundColor=this.options.primaryColor),S(this.style,this.element))}setContentStyle(t){this.contentElement&&(this.contentStyle=l(this.contentStyle,t),S(this.contentStyle,this.contentElement))}setContent(t){this.contentElement&&(this.contentElement.innerHTML=t)}showMessage(t,e=3e3,i=0){i<this.priority||(this.priority=i,this.closeTimer&&clearTimeout(this.closeTimer),this.setContent(t),this.setStyle({animationName:"oml2d-display-tips,oml2d-shake-tips"}),this.closeTimer=setTimeout(()=>{this.setStyle({animationName:"oml2d-hidden-tips,oml2d-shake-tips"}),this.priority=0},e))}clear(){var t;this.setStyle({animationName:"oml2d-hidden-tips,oml2d-shake-tips"}),(t=this.idlePlayer)==null||t.stop(),clearTimeout(this.closeTimer),this.priority=0}notification(t,e=3e3,i=3){var n;(n=this.idlePlayer)==null||n.stop(),this.showMessage(t,e,i),setTimeout(()=>{var r;(r=this.idlePlayer)==null||r.start()},e+this.transitionTime)}welcome(){const t=J(this.tipsOptions.welcomeTips||{}),{duration:e,priority:i}=this.tipsOptions.welcomeTips;this.notification(t,e,i)}copy(){if(this.tipsOptions.copyTips.message.length){const t=C(this.tipsOptions.copyTips.message)||"";this.notification(t,this.tipsOptions.copyTips.duration,this.tipsOptions.copyTips.priority)}}createIdleMessagePlayer(){let t="";const e=G(()=>h(this,null,function*(){this.tipsOptions.idleTips.wordTheDay?x(this.tipsOptions.idleTips.wordTheDay)?t=yield H(this.tipsOptions.idleTips.wordTheDay):t=yield H():x(this.tipsOptions.idleTips.message)?t=yield this.tipsOptions.idleTips.message():t=C(this.tipsOptions.idleTips.message||[])||"",t?(this.showMessage(t,this.tipsOptions.idleTips.duration,this.tipsOptions.idleTips.priority),yield q(this.tipsOptions.idleTips.duration)):e.stop()}),this.tipsOptions.idleTips.interval);return e}}class mt{constructor(t,e,i,n){o(this,"store"),o(this,"globalStyle"),o(this,"stage"),o(this,"statusBar"),o(this,"tips"),o(this,"menus"),o(this,"models"),o(this,"pixiApp"),o(this,"currentModelIndex",0),o(this,"options"),this.globalOml2d=t,this.events=e,this.PIXI=i,this.PixiLive2dDisplay=n,this.options=this.globalOml2d.options,this.globalStyle=new ot(this.options),this.stage=new at(this.options,this.events),this.statusBar=new rt(this.options),this.tips=new ht(this.options,this.globalOml2d),this.menus=new nt(this.options,this.globalOml2d),this.models=new lt(this.options,this.PixiLive2dDisplay,this.events),this.store=new dt,this.modelIndex=this.store.getModelCurrentIndex(this.options.models)}get mobileHidden(){return!this.options.mobileDisplay&&M()===a.mobile}set modelIndex(t){this.currentModelIndex=t,this.stage.modelIndex=t,this.models.modelIndex=t,this.store.updateModelInfo(this.options.models,t)}get modelIndex(){return this.currentModelIndex}create(){this.stage.create(),this.pixiApp=new W(this.PIXI,this.stage),this.statusBar.create(),this.statusBar.initializeStyle()}mount(){this.stage.mount(),this.statusBar.mount()}loadModel(){return h(this,null,function*(){if(!(!this.options.models||!this.options.models.length)){if(this.mobileHidden){this.statusBar.rest();return}this.statusBar.showLoading(),yield this.models.create().catch(()=>{this.statusBar.loadingError(()=>void this.reloadModel())}).then(()=>h(this,null,function*(){var t,e;(t=this.pixiApp)==null||t.mount(this.models.model),this.menus.reload(this.stage.element),this.tips.reload(this.stage.element),this.models.settingModel(),this.stage.reloadStyle(this.models.modelSize),(e=this.pixiApp)==null||e.resize(),this.statusBar.hideLoading(),yield this.stage.slideIn()}))}})}reloadModel(){return h(this,null,function*(){var t;this.tips.clear(),yield this.stage.slideOut(),yield this.loadModel(),(t=this.tips.idlePlayer)==null||t.start()})}loadNextModel(){return h(this,null,function*(){var t;this.modelIndex++,this.modelIndex>this.options.models.length-1&&(this.modelIndex=0),this.tips.clear(),this.statusBar.open(this.options.statusBar.switchingMessage),yield this.stage.slideOut(),yield this.loadModel(),(t=this.tips.idlePlayer)==null||t.start()})}initialize(){Z(),this.options.sayHello&&U(),this.registerGlobalEvent(),this.globalStyle.initialize(),this.create(),this.mount(),this.loadModel()}registerGlobalEvent(){tt(()=>{this.reloadModel()}),this.globalOml2d.onStageSlideIn(()=>{this.tips.welcome()}),window.document.oncopy=()=>{this.tips.copy()}}}class ct{constructor(){o(this,"options",b),o(this,"events"),o(this,"oml2d"),this.events=new X}setup(t){return h(this,null,function*(){this.options=st(b,t);const{PIXI:e,PixiLive2dDisplay:i}=yield it(this.options.importType,this.options.libraryUrls);this.oml2d=new mt(this,this.events,e,i),this.oml2d.initialize()})}get modelIndex(){var t;return(t=this.oml2d)==null?void 0:t.modelIndex}tipsMessage(t,e,i){var n;(n=this.oml2d)==null||n.tips.notification(t,e,i)}loadNextModel(){return h(this,null,function*(){var t;yield(t=this.oml2d)==null?void 0:t.loadNextModel()})}reloadModel(){return h(this,null,function*(){var t;yield(t=this.oml2d)==null?void 0:t.reloadModel()})}stageSlideIn(){return h(this,null,function*(){var t;yield(t=this.oml2d)==null?void 0:t.stage.slideIn()})}stageSlideOut(){return h(this,null,function*(){var t;yield(t=this.oml2d)==null?void 0:t.stage.slideOut()})}clearTips(){var t;(t=this.oml2d)==null||t.tips.clear()}stopTipsIdle(){var t,e;(e=(t=this.oml2d)==null?void 0:t.tips.idlePlayer)==null||e.stop()}startTipsIdle(){var t,e;(e=(t=this.oml2d)==null?void 0:t.tips.idlePlayer)==null||e.start()}statusBarOpen(t,e){var i;(i=this.oml2d)==null||i.statusBar.open(t,e)}statusBarClose(t,e,i){var n;(n=this.oml2d)==null||n.statusBar.close(t,e,i)}statusBarPopup(t,e,i){var n;(n=this.oml2d)==null||n.statusBar.popup(t,e,i)}statusBarClearEvents(){var t,e;(t=this.oml2d)==null||t.statusBar.clearClickEvent(),(e=this.oml2d)==null||e.statusBar.clearHoverEvent()}setStatusBarClickEvent(t){var e;(e=this.oml2d)==null||e.statusBar.setClickEvent(t)}setStatusBarHoverEvent(t){var e;(e=this.oml2d)==null||e.statusBar.setHoverEvent(t)}onLoad(t){this.events.add("load",t)}onStageSlideIn(t){this.events.add("stageSlideIn",t)}onStageSlideOut(t){this.events.add("stageSlideOut",t)}}const ut=()=>s=>{const t=new ct;return t.setup(s),t},pt=ut();export{pt as loadOml2d};
