import{j as s,b as i,c as a,aa as t}from"./chunks/framework.BdPFiiJb.js";const u=JSON.parse('{"title":"算法基础学习","description":"","frontmatter":{"title":"算法基础学习","date":"2022-11-13T20:04:09.000Z","tag":["算法"],"categories":["前端进击"]},"headers":[],"relativePath":"posts/growth-record/computer/algorithm/basics-knowledge.md","filePath":"posts/growth-record/computer/algorithm/basics-knowledge.md","lastUpdated":1713715426000}'),e={name:"posts/growth-record/computer/algorithm/basics-knowledge.md"},l=t(`<h1 id="算法基础学习" tabindex="-1">算法基础学习 <a class="header-anchor" href="#算法基础学习" aria-label="Permalink to &quot;算法基础学习&quot;">​</a></h1><h2 id="数据结构的存储方式" tabindex="-1">数据结构的存储方式 <a class="header-anchor" href="#数据结构的存储方式" aria-label="Permalink to &quot;数据结构的存储方式&quot;">​</a></h2><p><strong>数据结果的存储方式只有两种：数组（顺序存储）和链表（链式存储）。属于底层存储的数据结构类型，其余的数据结构多是基于这两种进行延伸实现的</strong></p><blockquote><p><strong>分析问题要有递归思想，自顶向下，从抽象到具体</strong></p></blockquote><p>数组特点：</p><ul><li>元素紧凑连续存储，可以随机访问：通过索引快速找到对应的元素，优点：相对节约存储空间</li><li>如果要动态扩容存储数据，需要重新分配一块更大的空间，再把数据全部复制过去，时间复杂度为 O(N)</li><li>对数组的 API 操作，比如插入或删除，需要迁移后面的所有元素数据保持连续存储，时间复杂度 O(N)</li></ul><p>链表特点：</p><ul><li>元素不连续存储，靠指针指向下一个元素的位置，所以不存在数组中的动态扩容问题</li><li>因为存储空间不连续，所以无法根据索引算出对应元素的地址，不能随机访问</li><li>如果知道某一元素的前驱和后驱，操作指针即可删除该元素或者插入新元素，时间复杂度 O(1)</li><li>由于每个元素必须存储指向前后元素位置的指针，会消耗更多的存储空间</li></ul><h2 id="数据结构的基本操作" tabindex="-1">数据结构的基本操作 <a class="header-anchor" href="#数据结构的基本操作" aria-label="Permalink to &quot;数据结构的基本操作&quot;">​</a></h2><p>对于任何数据结构的基本操作都是遍历 + 访问，简单的说就是：增删改查</p><blockquote><p>各种数据结构的遍历 + 访问无非两种形式：线性的和非线性的</p></blockquote><p>线性的：for/while 非线性的：递归</p><p>数组遍历框架：典型的线性迭代结构</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> traverse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">arr</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> arr.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    ...</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 访问arr[i]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>链表遍历框架：兼具迭代和递归结构</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 待补充ing</span></span></code></pre></div><p>二叉树遍历框架：典型的非线性递归遍历结构</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 待补充ing</span></span></code></pre></div><blockquote><p>所谓框架，就是套路。不管增删改查，这些代码都是永远无法脱离的结构</p></blockquote><h2 id="参考学习资料" tabindex="-1">参考学习资料 <a class="header-anchor" href="#参考学习资料" aria-label="Permalink to &quot;参考学习资料&quot;">​</a></h2><ul><li><a href="https://labuladong.github.io/algo/1/2/" target="_blank" rel="noreferrer">学习算法和刷题的框架思维 :: labuladong的算法小抄</a></li></ul>`,21),p=[l];function n(h,r,o,k,d,c){return i(),a("div",null,p)}const E=s(e,[["render",n]]);export{u as __pageData,E as default};
