import{j as t,b as e,c as p,L as n,s,f as i,aa as h,G as l}from"./chunks/framework.BdPFiiJb.js";const A=JSON.parse('{"title":"微信小程序之 swiper 组件上传图片删除后其余不显示","description":"","frontmatter":{"title":"微信小程序之 swiper 组件上传图片删除后其余不显示","date":"2018-09-20T20:00:00.000Z","tag":["微信小程序"],"categories":["前端进击"]},"headers":[],"relativePath":"posts/growth-record/platform/applet/swiper-image-no-display.md","filePath":"posts/growth-record/platform/applet/swiper-image-no-display.md","lastUpdated":1713665060000}'),k={name:"posts/growth-record/platform/applet/swiper-image-no-display.md"},r=s("h1",{id:"微信小程序之-swiper-组件上传图片删除后其余不显示",tabindex:"-1"},[i("微信小程序之 swiper 组件上传图片删除后其余不显示 "),s("a",{class:"header-anchor",href:"#微信小程序之-swiper-组件上传图片删除后其余不显示","aria-label":'Permalink to "微信小程序之 swiper 组件上传图片删除后其余不显示"'},"​")],-1),d=s("p",null,[i("这个不知道是不是微信小程序官方的问题，简单描述一下遇到的问题：在使用swiper组件来预览显示用户上传的多张图片后，右上角有一个可以删除图片的按钮，用户可以点击删除符号删除上传的图片。"),s("strong",null,"重点是"),i("顺时针点击删除图片和删除中间的指定图片，都其余图片显示没问题。"),s("strong",null,"唯独"),i("删除最后一张图片，问题就来了，排序前面的图片显示不出来（空白）；但是可以查到图片组件还有图片地址的？？？（真机环境也测试过，问题效果是一样的）")],-1),E=s("h3",{id:"一-问题详情",tabindex:"-1"},[i("（一）问题详情 "),s("a",{class:"header-anchor",href:"#一-问题详情","aria-label":'Permalink to "（一）问题详情"'},"​")],-1),g=s("p",null,"1、问题效果图：",-1),c=s("p",null,"上传了三张图片，通过swiper组件显示出来，右上角的是删除符号操作，右边中间数字是当前索引值； 首先是点击删除第一张图片，后面图片正常显示并将第二张图片归为第一张，索引值也变为0；（三张图片变为两张） 再次点击删除的是两张图片中的第二张（索引值为1的），结果剩下显示的一张图片，为空白，查了图片地址显示没问题；如图：",-1),o=h("",12);function y(F,C,u,m,_,B){const a=l("CustomImage");return e(),p("div",null,[r,d,E,g,n(a,{src:"/growth-record/platform/applet/swiper-image-no-01.gif"}),c,n(a,{src:"/growth-record/platform/applet/swiper-image-no-02.png"}),o])}const f=t(k,[["render",y]]);export{A as __pageData,f as default};
