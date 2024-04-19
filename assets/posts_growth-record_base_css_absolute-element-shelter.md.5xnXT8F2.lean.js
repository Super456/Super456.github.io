import{j as o,b as r,c as l,L as a,s as e,f as t,G as n}from"./chunks/framework.BdPFiiJb.js";const B=JSON.parse('{"title":"绝对定位元素布局遮挡问题","description":"","frontmatter":{"title":"绝对定位元素布局遮挡问题","date":"2020-05-21T20:00:00.000Z","tag":["CSS"],"categories":["前端进击"]},"headers":[],"relativePath":"posts/growth-record/base/css/absolute-element-shelter.md","filePath":"posts/growth-record/base/css/absolute-element-shelter.md","lastUpdated":1713541674000}'),c={name:"posts/growth-record/base/css/absolute-element-shelter.md"},d=e("h1",{id:"绝对定位元素布局遮挡问题",tabindex:"-1"},[t("绝对定位元素布局遮挡问题 "),e("a",{class:"header-anchor",href:"#绝对定位元素布局遮挡问题","aria-label":'Permalink to "绝对定位元素布局遮挡问题"'},"​")],-1),i=e("h2",{id:"一、需求场景",tabindex:"-1"},[t("一、需求场景 "),e("a",{class:"header-anchor",href:"#一、需求场景","aria-label":'Permalink to "一、需求场景"'},"​")],-1),h=e("p",null,"实现一个内容排版如下图：",-1),_=e("h2",{id:"二、需求分析",tabindex:"-1"},[t("二、需求分析 "),e("a",{class:"header-anchor",href:"#二、需求分析","aria-label":'Permalink to "二、需求分析"'},"​")],-1),p=e("p",null,"从内容排版来看，这个是一个内容块，包含三个子内容块，右下角那个是图片，实现方式有两种，第一种是设在父级的背景图上，通过定位解决；第二种是设置在内容块，通过绝对定位设置解决。我们通过第二种方法设置。",-1),b=e("h2",{id:"三、问题描述",tabindex:"-1"},[t("三、问题描述 "),e("a",{class:"header-anchor",href:"#三、问题描述","aria-label":'Permalink to "三、问题描述"'},"​")],-1),m=e("p",null,"按照第二步分析设置，实现效果如下：",-1),u=e("p",null,"存在绝对定位图片覆盖了同级内容块问题，加了红色边框就是为了突出被覆盖现象。",-1),f=e("h2",{id:"四、解决方法",tabindex:"-1"},[t("四、解决方法 "),e("a",{class:"header-anchor",href:"#四、解决方法","aria-label":'Permalink to "四、解决方法"'},"​")],-1),x=e("p",null,[t("通过设置父级容器的："),e("code",null,"z-index:1;"),t(" 然后在设置绝对定位元素层级："),e("code",null,"z-index:-1;"),t(" （这里不要单纯设置了这里没有设置父级，不然会不显示的）。这同级红色边框内容就不会被绝对定位元素遮挡了。")],-1),g=e("p",null,"因为同级红色边框层级默认会继承父级的层级属性，而绝对定位元素在继承父级层级的同时设置了比同级低一个层级，所以在显示的同时又不遮挡同级元素了。",-1);function k(w,P,C,N,S,$){const s=n("CustomImage");return r(),l("div",null,[d,i,h,a(s,{src:"/growth-record/base/css/absolute01.webp"}),_,p,b,m,a(s,{src:"/growth-record/base/css/absolute02.webp"}),u,f,x,g])}const V=o(c,[["render",k]]);export{B as __pageData,V as default};
