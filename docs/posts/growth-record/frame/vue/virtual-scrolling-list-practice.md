---
title: 大数据虚拟列表优化实战
date: 2022-11-09 20:00:00
tag:
 - Vue
categories:
 - 前端进击
---
# 大数据虚拟列表优化实战
待更新🚀...

# TO DO LIST
- [ ] 需求分析（管理后台案场录音详情优化）
- [ ] STAR 法则分析
- [ ] 市面技术文章案例及原理分析
- [ ] 制定需求优化分析技术方案
- [ ] 实践并产出对比分析
- [ ] 总结并制定分享准备
# 需求分析

1. **技术难点**：
- 虚拟滚动技术方案
- 自适应列表高度
- 分片渲染算法
- 分页设置
- 图片懒加载
- 图片的动态裁剪
- 关键词搜索算法
- 检索切换算法
- 浏览器和代码性能分析优化

2. 技术选型：
- 参考现有的市面实现技术方案
- 参考现有的组件库或第三方插件技术实现方案
- 记录不同的技术方案实现过程及对比（方案原理及优缺点，特别是代码性能和浏览器性能监控这一块重点说明）
- 各个技术实现架构图

3. 最终实现效果
- 几种方案的实现效果对比（重点突出优缺点）
- 总结
## Situation 背景

## Task 任务

## Action 行为

## Result 结果

# 现有案例
- [基于【虚拟列表】高性能渲染海量数据 - 掘金](https://juejin.cn/post/7138070983381876749)
- [渲染十万条数据就把你卡住了？不存在的 - 掘金](https://juejin.cn/post/7110588879060598820)
- [后端一次给你10万条数据，如何优雅展示，到底考察我什么? - 掘金](https://juejin.cn/post/7031923575044964389)
- [「前端进阶」高性能渲染十万条数据(虚拟列表) - 掘金](https://juejin.cn/post/6844903982742110216)
- [花三个小时，完全掌握分片渲染和虚拟列表～ - 掘金](https://juejin.cn/post/7121551701731409934)
- [虚拟列表，我真的会了！！！ - 掘金](https://juejin.cn/post/7085941958228574215)
- [Vue 虚拟列表，纵享丝滑【实践篇】 - 掘金](https://juejin.cn/post/6937939870018961439)
- [Vue.js 一个超长列表无限滚动加载的解决方案 - 掘金](https://juejin.cn/post/6844903449297944589#heading-8)
- [Vue3 实现列表虚拟滚动 - 掘金](https://juejin.cn/post/7086359708507832356)
- [前端长列表优化之虚拟滚动vue-virtual-scroller - 掘金](https://juejin.cn/post/6965675310159233037)
- [使用 虚拟列表 对列表大数据进行优化 - 掘金](https://juejin.cn/post/7002056556116181000)
- [听说你还不会虚拟列表？原谅我来晚了 - 掘金](https://juejin.cn/post/7036152951399776264)
- [浅说虚拟列表的实现原理 · Issue #70 · dwqs/blog](https://github.com/dwqs/blog/issues/70)
- [前端列表优化重器之虚拟列表 - 掘金](https://juejin.cn/post/7071993460261126152)
- [长列表优化之虚拟列表 - 掘金](https://juejin.cn/post/6844903893441183751)
- [百万PV商城实践系列 - 前端长列表渲染优化实战 - 掘金](https://juejin.cn/post/6995334008603148295)
- [再谈前端虚拟列表的实现](https://zhuanlan.zhihu.com/p/34585166)
- [聊聊前端开发中的长列表](https://zhuanlan.zhihu.com/p/26022258)
- [浅谈虚拟列表实现与原理分析 - 掘金](https://juejin.cn/post/6877507011769008135)
- [虚拟列表的实现 - 掘金](https://juejin.cn/post/6844903907387244558)
- [如何实现一个高度自适应的虚拟列表 - 掘金](https://juejin.cn/post/6948011958075392036)
- [「百毒不侵(三)」结合“康熙选秀”，给大家讲讲“虚拟列表” - 掘金](https://juejin.cn/post/6966179727329460232)
- [微信小程序虚拟列表 - 掘金](https://juejin.cn/post/6984992069592809480)
- [如何让10万条数据的小程序列表如丝般顺滑 - 掘金](https://juejin.cn/post/6966904317148299271)
- [在React项目中，如何优雅的优化长列表 - 掘金](https://juejin.cn/post/6844903729460674567)
- [「前端进阶」高性能渲染十万条数据(时间分片) - 掘金](https://juejin.cn/post/6844903938894872589)
- [当后端一次性丢给你10万条数据, 作为前端工程师的你,要怎么处理? - 掘金](https://juejin.cn/post/6844904184689475592)
- [如何处理前端超长列表 - 掘金](https://juejin.cn/post/6855129007990505480)
- [前端面经题记：长列表怎么优化？ - 掘金](https://juejin.cn/post/6844904008667103240)
- [如何一次性加载10万条数据（虚拟长列表）](https://zhuanlan.zhihu.com/p/387907431)
- [虚拟列表组件开发思路和遇到的问题](https://zhuanlan.zhihu.com/p/60610599)
- [A vue component support big amount data list with high render performance and efficient.](https://github.com/tangbc/vue-virtual-scroll-list)
- [GitHub - Akryum/vue-virtual-scroller: ⚡️ Blazing fast scrolling for any amount of data](https://github.com/Akryum/vue-virtual-scroller)
- [DOM 数量固定的无限滚动列表 - 掘金](https://juejin.cn/post/6844904013360529415)
- [Vue长列表优化专题：封装一个Vue长列表虚拟滚动插件_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1Vy4y147SB?spm_id_from=333.337.search-card.all.click&vd_source=59ef88925a159f981edad5ce1c4ec076)
- [Vue长列表优化专题：封装一个Vue长列表虚拟滚动插件_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1Vy4y147SB?spm_id_from=333.337.search-card.all.click&vd_source=59ef88925a159f981edad5ce1c4ec076)
- [原生 Javascript 实现虚拟列表、无限滚动加载（固定行高）_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1qU4y197hv?spm_id_from=333.337.search-card.all.click&vd_source=59ef88925a159f981edad5ce1c4ec076)
- [通俗易懂的讲解web前端虚拟列表_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1qz4y1o7QA?spm_id_from=333.337.search-card.all.click&vd_source=59ef88925a159f981edad5ce1c4ec076)
- [https://www.bilibili.com/video/BV1MZ4y1Y7WM?spm_id_from=333.337.search-card.all.click&vd_source=59ef88925a159f981edad5ce1c4ec076](https://www.bilibili.com/video/BV1MZ4y1Y7WM?spm_id_from=333.337.search-card.all.click&vd_source=59ef88925a159f981edad5ce1c4ec076)
- [理解虚拟列表底层实现原理_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1xL411A7yA?spm_id_from=333.337.search-card.all.click&vd_source=59ef88925a159f981edad5ce1c4ec076)
- [vue实现虚拟列表_achao_2020的博客-CSDN博客_iview虚拟列表](https://blog.csdn.net/achao_2020/article/details/107607510)
- [web前端进阶，vue高性能渲染十万条数据(虚拟列表)，告别卡顿 - 新概念技术博客](https://www.hlwen.com/2021/08/19/324.html)
- [https://www.jianshu.com/p/622ddf13e707](https://www.jianshu.com/p/622ddf13e707)
- [列表渲染 | Vue.js](https://cn.vuejs.org/guide/essentials/list.html#displaying-filtered-sorted-results)
- [虚拟列表在哈啰商城H5中的实践](https://mp.weixin.qq.com/s/T3NtJ41oC1GOIT7s2Wtnbg)

在线演示 1w 表格数据展示：[http://miniui.com/BigTest/10000-datagrid.html](http://miniui.com/BigTest/10000-datagrid.html)
