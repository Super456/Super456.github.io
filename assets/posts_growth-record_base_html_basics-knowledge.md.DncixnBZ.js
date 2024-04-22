import{j as r,b as i,c as d,L as t,s as e,f as l,aa as o,G as c}from"./chunks/framework.BdPFiiJb.js";const T=JSON.parse('{"title":"HTML 知识点","description":"","frontmatter":{"title":"HTML 知识点","date":"2021-03-22T20:04:05.000Z","tag":["HTML"],"categories":["前端进击"]},"headers":[],"relativePath":"posts/growth-record/base/html/basics-knowledge.md","filePath":"posts/growth-record/base/html/basics-knowledge.md","lastUpdated":1713715426000}'),h={name:"posts/growth-record/base/html/basics-knowledge.md"},s=e("h1",{id:"html-知识点",tabindex:"-1"},[l("HTML 知识点 "),e("a",{class:"header-anchor",href:"#html-知识点","aria-label":'Permalink to "HTML 知识点"'},"​")],-1),n=e("h2",{id:"概要",tabindex:"-1"},[l("概要 "),e("a",{class:"header-anchor",href:"#概要","aria-label":'Permalink to "概要"'},"​")],-1),m=o('<ul><li><a href="http://www.html5star.com/manual/html5label-meaning/" target="_blank" rel="noreferrer">HTML5 标签含义之元素周期表在线版</a></li><li>资源学习网站：<a href="http://www.html5star.com/" target="_blank" rel="noreferrer">HTML5 星空</a></li></ul><h2 id="语义化" tabindex="-1">语义化 <a class="header-anchor" href="#语义化" aria-label="Permalink to &quot;语义化&quot;">​</a></h2><h3 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-label="Permalink to &quot;概述&quot;">​</a></h3><ol><li>语义化的标签：说明让标签有自己的含义</li><li>存在的意义：让前端开发人员，在开发过程中，更容易去阅读代码，以及明白这些代码的意义</li><li>建议</li></ol><ul><li>少使用无意义的 <code>&lt;div&gt;/&lt;span&gt;</code> 标签等</li><li>在 <code>&lt;label&gt;</code> 标签中设置 for 属性和对应的 <code>&lt;input&gt;</code> 关联起来</li><li>在设置 <code>&lt;img&gt;</code> 标签的 alt 属性，给 <code>&lt;a&gt;</code> 标签设置 title 属性，利于 SEO</li><li>在页面的标题部分使用 <code>&lt;h1&gt;~&lt;h6&gt;</code> 标签，不需要给它们加多余的样式</li><li>与表单、有序列表、无序列表相关的标签不要单独使用</li></ul><ol start="4"><li>好处</li></ol><ul><li>能够更好的展示内容结构</li><li>便于团队的维护与开发</li><li>有利于 SEO</li><li>爬虫可以分析每个关键词的权重</li><li>方便其他设备解析（如屏幕阅读器）</li></ul><h3 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h3>',8),_=o('<ul><li><code>&lt;header&gt;</code> 标签通常放在页面或页面某个区域的顶部，用来设置页眉</li><li><code>&lt;nav&gt;</code> 标签可以用来定义导航链接的集合，点击链接可以跳转到其他页面</li><li><code>&lt;article&gt;</code> 标签中的内容比较独立，可以是一篇新闻报道，一篇博客，它可以独立于页面的其他内容进行阅读</li><li><code>&lt;section&gt;</code> 标签表示页面中的一个区域，通常对页面进行分块或对内容进行分段，<code>&lt;section&gt;</code> 标签和 <code>&lt;article&gt;</code> 标签可以互相嵌套</li><li><code>&lt;aside&gt;</code> 标签用来表示除页面主要内容之外的内容，比如侧边栏</li><li><code>&lt;footer&gt;</code> 标签位于页面或页面某个区域的底部，用来设置页脚，通常包含版权信息，联系方式等</li></ul><h2 id="seo" tabindex="-1">SEO <a class="header-anchor" href="#seo" aria-label="Permalink to &quot;SEO&quot;">​</a></h2><h2 id="doctype" tabindex="-1">DOCTYPE <a class="header-anchor" href="#doctype" aria-label="Permalink to &quot;DOCTYPE&quot;">​</a></h2><h2 id="link-与-import" tabindex="-1">link 与 @import <a class="header-anchor" href="#link-与-import" aria-label="Permalink to &quot;link 与 @import&quot;">​</a></h2><h2 id="async-与-defer" tabindex="-1">async 与 defer <a class="header-anchor" href="#async-与-defer" aria-label="Permalink to &quot;async 与 defer&quot;">​</a></h2><h2 id="捕捉、冒泡与委托" tabindex="-1">捕捉、冒泡与委托 <a class="header-anchor" href="#捕捉、冒泡与委托" aria-label="Permalink to &quot;捕捉、冒泡与委托&quot;">​</a></h2><h2 id="渐进增强与优雅降级" tabindex="-1">渐进增强与优雅降级 <a class="header-anchor" href="#渐进增强与优雅降级" aria-label="Permalink to &quot;渐进增强与优雅降级&quot;">​</a></h2><h2 id="标签元素" tabindex="-1">标签元素 <a class="header-anchor" href="#标签元素" aria-label="Permalink to &quot;标签元素&quot;">​</a></h2><h2 id="html5-常用基础-api" tabindex="-1">HTML5 常用基础 API <a class="header-anchor" href="#html5-常用基础-api" aria-label="Permalink to &quot;HTML5 常用基础 API&quot;">​</a></h2><h2 id="参考资料" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料" aria-label="Permalink to &quot;参考资料&quot;">​</a></h2><h2 id="刷题" tabindex="-1">刷题 <a class="header-anchor" href="#刷题" aria-label="Permalink to &quot;刷题&quot;">​</a></h2>',11);function b(u,g,f,p,k,q){const a=c("CustomImage");return i(),d("div",null,[s,t(a,{src:"/growth-record/base/html/html-00.png"}),n,t(a,{src:"/growth-record/base/html/html-01.png"}),m,t(a,{src:"/growth-record/base/html/html-02.png"}),_])}const x=r(h,[["render",b]]);export{T as __pageData,x as default};
