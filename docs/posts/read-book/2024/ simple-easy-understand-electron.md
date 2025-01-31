---
title: 第 60 本《深入浅出 Electron 原理、工程与实践》
cover: /read-book/2024/simple-easy-electron.jpg
tags:
 - 2024
 - 阅读
categories:
 - 朝花夕拾
---
# 第 60 本《深入浅出 Electron 原理、工程与实践》

## 简介
这是一本能帮助读者夯实 Electron 基础进而开发出稳定、健壮的 Electron 应用的著作。

书中对 Electron 的工作原理、大型工程构建、常见技术方案、周边生态工具等进行了细致、深入地讲解。

工作原理维度：

对 Electron 及其周边工具的原理进行了深入讲解，包括 Electron 依赖包的原理、Electron 原理、electron-builder 的原理等。

工程构建维度：

讲解了如何驾驭和构建一个大型 Electron 工程，包括使用各种现代前端构建工具构建 Electron 工程、自动化测试、编译和调试 Electron 源码等。

技术方案维度：

总结了实践过程中遇到的一些技术难题以及应对这些难题的技术方案，包括跨进程消息总线、窗口池、大数据渲染、点对点通信等。

周边工具维度：

作者根据自己的“踩坑”经验和教训，有针对性地讲解了大量 Electron 的周边工具、库和技术，涉及 Qt 开发框架、C++ 语言、Node.js 框架甚至 Vite 构建工具等，帮助读者拓宽技术广度，掌握开发 Electron 应用需要的全栈技术

## 阅读笔记
《深入浅出Electron：原理、工程与实践》

刘晓伦
113个笔记

点评

◆ 2024/10/07 认为好看

对于刚开始探索 Electron 开发的新手来说，这本书无疑是一份宝贵的资源。尽管书中介绍的一些发行版本和技术点略显陈旧，但它们对于构建技术视野和理解底层原理仍然大有裨益。毕竟，书中的精华内容凝聚了作者的辛勤努力和深入验证

我已经亲自投身于 Electron 桌面应用开发大约三个月了，虽然主要依靠官方文档进行学习，但对 Electron 的打包原理仍然知之甚少，缺乏系统性的深入理解。这本书恰好为我提供了一个清晰的学习路径，从源码分析到工程架构，再到实际应用的落地分析，几乎涵盖了项目开发的全过程和技术要点，其中包含了大量实用的分析和讲解

遗憾的是，为了追求内容的全面性，书中对某些主题的探讨可能不够深入，仅触及皮毛。但这并不影响书籍的整体质量。或许作者正是有意为之，将这本书定位为一本注重实战和实用项目的书籍，而非单纯的技术手册。在这种情况下，某些内容的取舍是不可避免的

前言

◆ 2024/06/04发表想法

学技术确实要有目的，为了实实在在解决问题或自身能力成长加持，不要跟风随大流。而且技术永远为产品业务赋能，再好的技术没有用武之地，也发挥不出其价值。

原文：不是为了学习技术而学习技术，而是为了达到目的、创造价值而学习技术

◆ 功利心太强可能会导致开发者忽视基础知识的重要性，在这种状态下构建工程是很容易出问题的，且一旦出问题开发者也没有能力在短时间内解决，甚至连甄别问题的根源都无能为力

1.1 安装失败

◆ 为什么说它是一个“复合型”的依赖包呢？这是因为在安装Electron依赖包的过程中，npm还额外执行了它在包内的配置文件中定义的脚本，这些脚本会去GitHub的代码仓储内下载Electron的可执行文件及其依赖的二进制资源。
这些可执行文件和资源有70～80MB之大，加之网络环境不稳定，所以大概率你会看到上面的报错信息。

1.2 npm钩子

◆ `> npm install electron --save-dev  --timing=true --loglevel=verbose`
这两个参数会把安装过程的日志打印到用户的控制台上

◆ postinstall脚本是依赖包的开发者为npm工具定义的一个钩子，任何一个npm包都可以为自己指定这样的钩子，这个钩子会在依赖包安装完成后被npm执行。

◆ preinstall：包安装之前执行；
▪  postuninstall：包被卸载之后执行；
▪  preuninstall：包被卸载之前执行；
▪  poststart：当npm start执行后触发；
▪  poststop：当npm stop执行后触发；
▪  posttest：当npm test执行后触发。

2.1 Chromium原理

◆ Chromium把管理页面、管理选项卡和插件的进程称为主进程。把特定于页面的进程称为渲染进程。渲染进程使用Blink开源布局引擎来解释和渲染HTML。渲染进程与主进程通过IPC管道进行通信

◆ 每个渲染进程都对应一个全局的RenderProcess对象，都有一个或多个RenderView对象。RenderProcess对象负责与主进程通信并管理这些RenderView对象，通常每个新窗口或选项卡都会在新进程中打开。主进程负责创建这些新的进程，并指示它们创建各自的RenderView对象

◆ Electron也继承了Chromium的多进程模式，每个BrowserWindow、BrowserView、WebView都对应一个渲染进程（并不是很准确，但基本可以这么理解），进程间通信也是通过IPC管道来实现的。多进程模式带来的缺点在Electron应用中也都存在

2.2 Node.js原理

◆ Node.js是一个集成项目，是一系列成熟项目的集合体，内置了V8、libuv、zlib、openssl等项目

◆ Node.js有以下两个主要特点。1）Node.js解释并执行JavaScript脚本时是单线程执行的，也就是说，同一时刻只有一个用户线程用于JavaScript程序的执行

◆ 2）Node.js绝大多数接口都具备非阻塞I/O的特性，无论是读写文件、网络请求还是进程间通信，开发者都不必等待操作执行完成再执行下一步操作

◆ 正是Node.js的这两个特性，导致Node.js不适合执行CPU密集型任务（比如科学计算、音视频处理、仿真模拟等），因为它没有多线程模型来支持并行性（目前Node.js已经有worker_threads模块支持并行地执行JavaScript线程，但实际应用中其能力尚显不足），所以Node.js更适合I/O密集型的任务（比如处理网络请求、用户交互等

◆ 在Node.js中，模块主要可以分为以下几种类型。核心模块：是Node.js内置的，被编译到Node.js的可执行文件中，比如常用的http、fs等模块都属于核心模块。文件模块：开发者通过require的方式加载的指定文件，比如`require('./util.js')`。第三方模块：开发者通过npm安装到node_modules目录下的模块，其内部原理与文件模块类似

◆ Node.js的一个简单的架构图。[插图]

◆ 当使用Node.js执行一个JavaScript脚本文件时

◆ Node.js内部执行以下五项任务。1）初始化自己的执行环境

◆ 2）创建libuv的消息循环

◆ 3）创建V8引擎的运行环境

◆ 4）绑定底层模块

◆ 5）读取并执行`index.js`文件的内容

2.5 公开API

◆ Electron使用webpack对TypeScript文件进行转义的，转义TypeScript文件的工作被定义在Electron的编译脚本中（`BUILD.gn`）

◆ 接着编译指令再通过一个名为`js2c.py`的Python的脚本处理这些JavaScript文件

◆ 这个Python脚本把上述几个JavaScript文件的内容转换成ASCII码的形式存放到一个C数组中，最终会生成一个名为`electron_natives.cc`的文件

◆ 因为Node.js的内置模块也使用了类似的机制来公开API，实际上Electron团队就是参考了Node.js的实现方案。

2.6 不同进程不同的API

◆ 在Electron中主进程和渲染进程可以使用的API是不同的，比如app模块和ipcMain模块只能在主进程中使用，ipcRenderer和webFrame等模块只能在渲染进程使用，clipboard和desktopCapturer等模块可以在两个进程中使用，Electron是如何做到的呢？

2.12 进程间通信

◆ Mojo框架提供了一套底层的IPC实现，包括消息管道、数据管道和共享缓冲区等。Chromium在Mojo框架之上又做了一层封装，以简化不同语言（如C++、Java或JavaScript等）、不同进程（如主进程、渲染进程等）之间的消息传递

3.2 原理介绍

◆ 由此可见，虽然我们都是Electron开发者，但更是一个桌面应用开发者，并不能把眼光局限在Electron领域，只有这样才能做出更好的产品。

5.2 V8脚本执行原理

◆ 目前开发人员使用的编程语言主要分为两大类：一类是编译执行的语言；另一类是解释执行的语言。

◆ 在V8开始执行一段JavaScript脚本前，它做了如下三个事情：
1）初始化内存中的堆栈结构。V8有自己的堆空间和栈空间设计，代码运行期产生的数据都是存储在这些空间内的，所以要提前完成初始化工作。
2）初始化全局环境。这个工作包含一些全局变量、工具函数的初始化任务。
3）初始化消息循环。这个工作包含V8的消息驱动器和消息队列的初始化任务。

◆ 两种架构的解释器，基于栈的解释器和基于寄存器的解释器。基于栈的解释器会将一些中间数据存放到栈中，而基于寄存器的解释器会将一些中间数据存放到寄存器中

◆ V8会针对不同类型的代码执行不同的优化手段，最为人所称道的就是直接把字节码编译为二进制代码，由于二进制代码具备执行速度快的特点，所以这也是V8引擎高效的原因之一。

◆ V8是一种内嵌了编译执行能力的JavaScript解释器。它是复杂的，但也是高效的，因为它同时具备两种能力——编译执行能力和解释执行能力。

6.1 Vite为什么如此之快

◆ 由于不需要做捆绑工作，服务器冷启动速度非常快。代码是按需编译的，因此只编译当前界面上实际导入的代码，不必等到整个应用被捆绑后才开始开发。这对于拥有非常多界面的应用来说是一个巨大的性能差异。热更新（Hot Module Replacement，HMR）的性能与模块总数解耦。这使得HMR始终快速，无论你的应用程序有多大

◆ Vite默认使用esbuild（https://github.com/evanw/esbuild）作为内置的编译器，esbuild在将TypeScript转换为JavaScript的工作上性能表现优异，比常用的tsc工具快20～30倍，HMR更新可以在50ms内反映在浏览器中

6.2 大型Electron工程结构

◆ 对于一个大型工程来说，工程的目录结构非常重要，一个清晰的目录结构不仅可以帮助开发者更方便地维护项目，也为项目的扩展、演进提供帮助

6.3 定义启动脚本

◆ 一般情况下为一个工程安装Electron依赖时，都是安装为开发依赖（--save-dev）的，这是因为所有生产依赖都会在electron-buildder打包时被放置到安装包内，用户安装应用后，应用的安装目录下也会有相应的node_modules目录，这些生产依赖也会被放置在这个目录下，如果没有特殊的设置，node_modules目录及其内部的文件是体现在应用的asar文件中的。然而这并不是我们想要的，electron-builder会帮我们把Electron的可执行程序和相关资源放置到正确位置，如果我们以生产依赖的形式安装Electron，那么十有八九你分发给用户的安装包内有两份Electron：一份是electron-builder为你准备的；一份在node_modules内，是你自己的生产依赖，用户是不需要这些文件的

◆ 在scripts标签内定义的脚本，还可以有关联脚本，只要你给脚本名称加上pre或post前缀即可，比如下面的配置：

```
{￼   "scripts": {￼     "precompress": "{{ executes BEFORE the 'compress' script }}",￼     "compress": "{{ run command to compress files }}",￼     "postcompress": "{{ executes AFTER 'compress' script }}"￼   }￼ }
```

在开发者执行npm run compress时，先执行precompress脚本，再执行compress脚本，最后执行postcompress脚本

6.4 启动开发服务

◆ 正常情况下开发者设置在vite.config.js中的内容。需要注意以下几点：1）由于我们的启动脚本放置在工程的script子目录内，所以不能用__dirname来指定root属性，此处我们通过process.cwd()来获取当前工程的根目录。2）我们手动定义了开发环境http服务的端口号，并把这个端口号保存到当前dev对象内，因为接下来启动Electron客户端进程时，需要通过这个端口号来加载开发服务的首页。3）Vite雄心很大，Vue并不是Vite的唯一支持对象，而只是它的一个插件，此处通过require("@vitejs/plugin-vue")引入Vue插件，并通过plugins: [vue()]置入Vite内部。4）我们通过vite.createServer创建这个开发环境http服务，并通过server.listen()方法启动这个服务。

6.8 配置调试环境

◆ 至于调试渲染进程，则无须做任何操作，待Electron主窗口打开后，按Ctrl+Shift+i快捷键即可打开Chromium的开发者调试工具，按一个普通的Web前端页面的调试方法进行调试即可

◆ 注意在渲染进程中使用环境变量必须写作：process["env"].XXX，以防Vite编译时改写你的代码，在开发者调试工具的console drawer里则不用这么写

6.9 打包源码

◆ 读者执行这两步编译打包的工作时需要注意以下两点：1）主进程入口代码与渲染进程入口代码存放在同一个目录下，如读者有自定义文件名的需求，应注意避免文件名或目录名冲突的问题。2）一定要先构建渲染进程的代码再构建主进程的代码，顺序不能反。这是因为vite.build方法执行时会先清空目标目录，如果你先构建主进程的代码，那么在执行vite.build时，主进程的源码构建结果就被删掉了

7.1 需求起源

◆ 热更新技术。其原理是：webpack通过webpack-dev-server在开发者本地启动一个http服务和一个websocket服务，同时监控本地源码文件的变化，一旦监控到源码发生改变，则立即执行与之相关的编译工作，之后通过websocket长链接告知开发者的浏览器哪些模块发生了变化，浏览器获取这些信息后发起http请求获取更新后且编译过的模块，同时执行模块里的代码以起到热更新的效果

8.1 Rollup与Svelte

◆ Rollup使用ES6模块规则完成打包工作，它会从入口模块开始把待打包的文件生成AST语法抽象树，然后对每一个AST节点进行分析。如果某个节点有被依赖的函数或对象，那么就会分析该函数或对象是否在当前作用域，如果不在，则递归向上查找，一直找到顶级作用域为止。通过这种方式Rollup能找到所有依赖的模块，即使项目只依赖了某些模块的一部分代码，Rollup也可以通过这种方式分辨出来。当Rollup把所有代码都分析出来后，生成最终的产物也就是水到渠成的事了。

◆ Svelte抛弃了这种虚拟DOM的技术架构，将虚拟DOM相关的工作放到构建应用程序的编译阶段来处理，这就使得Svelte可以不像React和Vue那样，它不需要一个运行时库来处理应用运行过程中的一些工作。实际上Svelte也有运行时库，只不过非常轻量。

9.2 在Jest测试框架中使用Spectron

◆ 开发者开发一个业务复杂的应用，势必会对应用内的业务进行一定程度的抽象、封装、隔离，以保证代码的可复用性和可维护性。每个抽象出的模块或组件都会暴露出自己的接口、对象和数据属性等供其他模块或组件使用

11.1 源码混淆

◆ 对于一般的压缩工具来说，它们都主要完成了以下五项工作：去掉不必要的注释、空行、空格。将变量命名替换成更短形式的命名（一般是一两个字符）。尽可能地将方括号表示法替换成点表示法，比如把obj["param"]替换为obj.param，这不但能压缩体积，还能提升JavaScript的执行效率。尽可能地去掉直接量属性名的引号，比如把{"param": "value"}替换为{param: "value"}。尽可能地合并常量，比如把let str = "str1"+"str2"替换为let str = "str1str2"。

◆ 专门用于混淆JavaScript代码的工具——javascript-obfuscator，这个工具可以在更高程度上压缩混淆代码，使代码的可读、可调试性进一步下降（并不能完全解决这些问题

◆ 在提升安全性的同时需要损失一部分性能

11.2 应用签名

◆ 在electron-builder为应用打包时，至少有三个可执行文件被打包到应用程序的安装包中，这三个可执行文件如下：应用程序.exe。应用程序的卸载文件.exe。elevate.exe（这个文件用于以管理员的身份启动程序）。另外再加上应用程序的安装文件，共有四个文件需要签名

◆ curl工具（https://github.com/curl/curl），这是一个著名的网络请求客户端工具

13.1 使用D8调试工具

◆ V8把内存分为两块，一块是新生代，一块是老生代，清理新生代内存的过程就是Scavenge类型的垃圾收集过程；清理老生代内存的过程就是Mark-sweep类型的垃圾收集过程

13.2 内存消耗监控

◆ 面板中提供了三种监控内存的方式。Heap snapshot：用于打印内存堆快照，堆快照用于分析页面JavaScript对象和相关DOM节点之间的内存分布情况。Allocation instrumentation on timeline：用于从时间维度观察内存的变化情况。Allocation sampling：用于采样内存分配信息，由于其开销较小，可以用于长时间记录内存的变化情况

13.3 子应用管控

◆ 康威定律指出：组织架构越庞大，其系统间沟通成本越高，解决这一问题的有效手段就是将大的系统拆分成一个个微小的可以独立自治的子系统。一旦系统的依赖限制在了内部，功能上就会更加内聚，对外部的依赖就会变少，这就能显著减少了跨系统之间的沟通成本

◆ iframe方案也有其缺点，具体如下：1）页面刷新时子页面的状态丢失。比如刷新页面后浏览器的前进、后退操作将失效，不过这个问题在Electron应用中影响不大，因为我们使用Electron开发桌面应用一般都会禁用刷新、前进、后退等功能。2）DOM结构不共享。比如页面内某个iframe希望创建一个全局的遮罩层的弹框，这个问题影响也不大，可以在父页面实现这个遮罩层弹窗，并暴露出API供子页面调用，或者直接在子页面访问父页面的DOM对象，为父页面创建DOM，再控制这些DOM实现遮罩层弹窗的功能（这个方案侵入式比较强，不推荐）。3）同源策略限制。比如子页面与父页面根域名不同的情况下，还需要访问父页面的cookie（这往往在子页面身份验证时会碰到，比如获取用户的token信息）。这个问题可以通过关闭Electron的同源策略开关来解决。4）上下文完全隔离导致内存变量不共享。这个问题主要是考校开发人员的编码水平，应尽量避免子页面持有父页面的对象的引用，避免内存不能及时清理而导致内存溢出的问题。5）性能问题。由于每个页面都有一套独立的DOM树，独立的脚本上下文环境，甚至与服务器传输数据都会有多余的数据传输。这个问题不是很好解决，好在影响不大，只在较低配置的电脑上才表现得比较明显。

◆ 因为native ES modules是动态地按需加载JavaScript资源的，而微前端要求提前把JavaScript资源加载好，要适应微前端框架的这个要求非常困难且得不偿失，这也是至今为止知名的微前端框架qiankun仍不支持vite的原因

◆ 目前webview标签及其关联的事件和方法尚不稳定，其API很有可能在未来被修改或删掉，Electron官方不推荐使用，这是webview最大的局限性，也是webview标签默认不可用的原因之一（另一个原因是使用webview标签加载第三方内容可能带来潜在的安全风险）。

◆ BrowserView是仅主进程可用的类型，它被设计成一个子窗口的形式，依托于Browser-Window存在，可以绑定到BrowserWindow的一个具体区域，可以随BrowserWindow放大缩小而放大缩小，随BrowserWindow移动而移动，看起来就是BrowserWindow里的一个元素一样

◆ 通过控制系统内模块间的耦合程度、增强产品的管控能力、增强团队的管控能力来避免多子应用同时存在的问题是更值得推荐的

第三部分 实践

◆ 一旦应用变得复杂，会有大量的跨进程消息，该如何管控这些消息呢（第14章将介绍具体的方案）？Electron创建并显示一个窗口太慢该如何解决（第15章将具体介绍应对策略）？如何自己开发原生模块和为什么Node.js生态里的原生模块无法在Electron应用内使用？如何整合Electron应用和Qt应用等

◆ 我强烈建议你读一下前两部分的内容，哪怕一时用不上那些知识，但我相信它们也同样能给你带来收获知识的乐趣

14.1 前端事件机制

◆ 实际上并不是非得利用现代前端框架才能使用事件机制，还可以使用HTML5提供的CustomEvent来自己构造一个事件机制

◆ 自己实现一套事件机制也不是特别复杂，只要维护一个全局的map对象，当某组件注册事件时，就把这个事件及其处理函数记录到map对象中，当另一个组件发射这个事件时，就遍历map对象，找到前面注册的回调函数，然后执行回调函数就可以了，这里不再给出具体的实现。有一个非常著名的开源项目——mitt（https://github.com/developit/mitt）就是使用这个原理实现的

14.2 Node.js的事件机制

◆ 因为在Electron项目中，无论是渲染进程还是主进程都有使用Node.js API的能力，且Node.js提供了内置的事件支持模块events

◆ 使用Node.js提供的事件API有如下三个好处：1）统一了主进程和渲染进程的事件机制的实现逻辑，不必渲染进程使用一套事件机制，主进程再使用另一套事件机制。2）不必引入任何第三方库。3）渲染进程和主进程在工程上可以复用事件发射接收器的实现代码，事件发射接收器的实现代码最好放置在src/common目录下

14.3 Electron进程间通信

◆ 渲染进程与主进程互相通信往往通过IpcRenderer和IpcMain两个模块收发消息

14.4 跨进程事件

◆ eventer.ts的基本能力：在某个渲染进程中发射的事件，当前渲染进程可以接收，主进程也可以接收，其他任何一个渲染进程也可以接收。主进程发射的事件，主进程可以接收，所有渲染进程都可以接收。任何一个进程都应该复用一套代码来实现上述两个诉求

◆ 主进程instance对象发射了这个事件之后，接着遍历了应用中所有的webContents对象，如果此时应用中有其他的窗口，那么就通过这些窗口的webContents对象的send方法向它们的渲染进程发送了一个名为__eventPipe的消息。这就涉及主进程发射事件、渲染进程接收事件的逻辑了，当我们在主进程通过eventer对象的emit方法发射事件时，首先执行的就是在主进程的instance对象上发射这个事件，接下来就遍历所有的渲染进程，并给所有的渲染进程发送__eventPipe的消息（同时也携带了主进程事件要传递的数据）。渲染进程在实例化eventer对象时，也会执行initEventPipe方法，这个方法在渲染进程内会使用ipcRenderer对象的on方法监听__eventPipe消息，一旦收到消息，就在自己的instance对象上发射对应的事件

14.6 基于HTML API的跨进程事件

◆ 使用随机字符串作为localStorage数据的键名，而不直接使用eventName作为键名，主要是为了避免短时间内有大量同一个eventName的事件被触发而导致接收逻辑混乱的问题

14.7 跨进程通信带来的问题

◆ 建议大家使用performance.timeOrigin来生成时间戳，它比Date.now()要精确得多，更容易区分消息的先后

15.1 窗口渲染过慢

◆ Electron创建窗口速度非常快，但渲染窗口速度很慢

◆ 开发者很快就能想到：我先把窗口都创建好，但并不显示，等需要的时候再显示，用完也不关闭窗口，只是隐藏窗口，等待下一次使用。这个方案是可行的，因为让一个窗口从隐藏状态切换到显示状态是非常快的

15.2 构建窗口池

◆ 窗口池的原理就是提前准备n个隐藏的备用窗口，这里的n可以随意设置，一般情况下1～2个足矣。让这n个隐藏的窗口加载一个空白页面，如果是Vue或者React项目，也可以让这些窗口提前初始化它们的实例，甚至可以把自定义的窗口标题栏渲染出来，只不过内容区域不做渲染

◆ 当用户关闭窗口时，就直接把窗口实例释放掉，但程序会监听窗口的关闭事件，一旦释放了一个窗口，就马上创建一个新的隐藏窗口备用，也就是说确保窗口池中始终有n个窗口等待被使用

◆ 窗口池的原理与线程池、数据库链接池的原理类似，创建线程或数据库链接是消耗资源非常高的操作，所以程序会创建一个“池子”​，提前准备好n个线程或链接，当应用程序索取时，就从“池子”里“捞出”一个空闲的线程或链接给消费者程序使用

◆ 窗口池的代码分为两部分：一部分为窗口池的代码；一部分为窗口池内窗口实例的代码

15.5 消费窗口池中的窗口

◆ 开发者也可以考虑使用this.win.webContents.executeJavaScript方法来迫使窗口的渲染进程执行一段JavaScript脚本，然后让渲染进程完成路由跳转的工作，这种方案的执行效率又比上一种方案高一些

15.6 模拟模态窗口

◆ 一个全新的窗口加载一个全新的页面是非常慢的，模态窗口也是一样

16.1 需求起源

◆ 很早以前，计算机的世界里只有单线程应用程序，程序完成一项操作前必须等待前一项操作结束。这种模式有很大的局限性，因为进程之间内存是不共享的，要开发大型应用程序需要很复杂的程序模型和较高的资源消耗

◆ 需要注意的是，JavaScript是单线程的，但Node.js并不是单线程的，写文件的工作是由Node.js底层的C++模块完成的，完成后再触发JavaScript执行线程的回调事件

◆ Node.js是Electron的三驾马车（Chromium、Node.js、Electron Native Module）之一，所以Node.js面临的问题，Electron也会面临，Node.js具备的能力，Electron同样也具备

16.2 原生模块开发方式

◆ V8：谷歌浏览器团队使用C++语言开发的JavaScript执行引擎（https://v8docs.nodesource.com/

◆ libuv：实现了Node.js的事件循环、工作线程以及平台所有的异步执行库，基于C语言开发

◆ Node.js自身还包含一系列的静态链接库，比如OpenSSL、zlib等

16.6 Electron环境下的原生模块

◆ Electron内置的Node.js版本可能与你编译原生模块使用的Node.js版本不同（Electron内置的一些模块也与Node.js不同，比如Electron使用了Chromium的加密解密库BoringSL，而不是Node.js使用的OpenSSL加密解密库

17.1 应用单开

◆ app.requestSingleInstanceLock()方法请求一个单应用实例锁，如果这个方法返回false，则说明当前操作系统中已经有一个应用程序实例获得了这个锁，也就是说已经有一个当前应用成功启动了，新的应用则不必再启动了。我们直接调用app.quit()方法退出了应用，否则将执行你的启动逻辑

18.1 需求起源

◆ 引入Qt应用到Electron应用中有两种方式，一种方式是通过Addon的方式引入，这种方式需要编写Electron的原生Addon模块，然后再通过这个模块启动Qt的应用。这种方式两者结合更紧密，数据交互效率更高，但耦合性也更高，一端崩溃后另一端也会被拉垮，另外由于Qt应用附属在Electron应用的Addon模块内，所以必须得先启动Electron应用才能再启动Qt应用，进程的加载方式比较死板。第二种方式是Qt应用和Electron应用是两个独立的进程，两者之间无依赖关系，先启动Qt应用，再通过Qt应用启动Electron应用，或是反过来，先启动Electron应用，再通过Electron应用启动Qt应用，两个应用通过本地命名管道进行通信完成数据交互

18.6 应用退出的事件顺序

◆ Electron提供了很多监控应用退出的事件，比如window-all-closed、before-quit、will-quit、quit等

19.6 内置的数据持久化能力

◆ Electron底层也是一个浏览器，所以开发Electron应用时，也可以自由使用浏览器提供的数据存储技术，其控制能力甚至强于Web开发，比如读写被标记为Http Only的Cookie等

◆ Cookie用于存储少量的数据，最多不能超过4KB。设计Cookie的目的是服务客户端和服务端数据传输，一般情况下浏览器发起的每次请求都会携带同域下的Cookie数据，大多数时候服务端程序和客户端脚本都有访问Cookie的权力。开发者可以设置数据保存的有效期，Cookie数据超过有效期后将被浏览器自动删除

◆ Local Storage可以存储的数据量也不大，各浏览器限额不同，但不会超过10MB。它只能被客户端脚本访问，不会自动随浏览器请求发送给服务端，服务端也无权设置Local Storage的数据。它存储的数据没有过期时间，除非手动删除，不然数据一直会保存在客户端

◆ Session Storage的各种特性都与Local Storage相同，唯一不同的是，浏览器关闭后Session Storage里的数据将被自动清空，Electron应用中几乎不会用它来持久保存数据

◆ IndexedDB是一个基于JavaScript的面向对象的数据库，开发者可以用它存储大量的数据。在Electron应用内它的存储容量与用户的磁盘容量有关。IndexedDB也只能被客户端脚本访问，其内的数据不随浏览器请求发送到服务端，服务端也无权访问IndexedDB内的数据，它存储的数据亦无过期时间

◆ dexie（https://dexie.org/）​：项目稳定、维护频繁、文档齐全，但对于一些复杂的数据操作来说，API组合使用不当可能会造成性能问题。idb（https://github.com/jakearchibald/idb）​：由谷歌工程师研发，非常稳定，维护也很频繁，很多上层的数据处理库都是基于idb开发的，但它封装过于简单，开发者使用起来还是会有些不方便。JsStore（http://jsstore.net/）​：提供了类似T-SQL/PL-SQL的API，对后端工程师很友好。使用了WebWorker技术，性能表现也不错。但问世时间较晚，更新少，可能存在隐藏比较深的问题。PouchDB（https://pouchdb.com/）​：可以与服务端的CouchDB无缝对接。它是一个重量级的客户端数据库，入门门槛也比较高

◆ SQLite（https://sqlite.org/）是使用C语言编写的嵌入式数据库引擎，它不像常见的客户端-服务器数据库范例，SQLite内嵌到开发者的应用中，直接为开发者提供数据存储与访问的API，数据存储介质可以是终端的内存也可以是磁盘，其特点是自给自足、无服务器、零配置、支持事务，是在世界上部署最广泛的SQL数据库引擎

◆ 它把SQLite编译成WebAssembly，然后再让IndexedDB作为存储介质。这就完全把SQLite的能力迁移到Web领域中来了，开发者可以使用SQLite API操作存储在IndexedDB中的数据

20.1 WebRTC原理

◆ WebRTC（Web Real Time Communication）是一项实时通信技术，它允许网络应用在不借助中间媒介的情况下建立浏览器之间点对点的连接，实现视频流、音频流以及其他任意格式的数据传输。WebRTC使用户在无须安装任何插件或者第三方软件的情况下，仅基于浏览器创建点对点的数据分享成为可能

◆ PeerJS（https://github.com/peers）项目构建WebRTC工程

20.2 构建WebRTC服务器

◆ WebRTC与IndexedDB一样，基于原生API使用这些技术非常烦琐，且容易出错，所以建议大家使用成熟的第三方库。本节介绍的PeerJs（https://peerjs.com/）就是Node生态下操作WebRTC技术非常成熟的第三方库

第21章 加密信息提取

◆ 很多Web应用服务都是把数据加密后再发送给前端页面的，前端页面获取到这些加密数据后再解密并呈现给用户

21.3 暴露解密方法

◆ 立即执行函数有两个优势：第一是不必为函数命名，避免了污染全局变量；第二是函数内部形成了一个单独的作用域，外部代码无法访问内部的对象或方法。这可以有效地避免业务变量或方法被恶意脚本引用的风险

◆ 但还有一个问题，那就是这个文件被修改过了，保存在我们自己的磁盘上，怎么能让目标网站不加载他们自己的js文件而加载我们的js文件呢？这就需要用到Electron的转发请求的能力

21.6 监控cookie

◆ 目标网站的开发者往往会给这些敏感的cookie加上HttpOnly标记，携带这类标记的cookie只能在浏览器请求服务端的时候被服务端访问，不能被浏览器端的JavaScript脚本访问，但这个限制在Electron内是可以通过特殊手段规避掉的

◆ 目标网站可能有大量的脚本，每个脚本都有可能发起请求与服务端交互，服务端可能在任一次交互过程中更改客户端的cookie，分析每一个脚本或分析每个请求，都代表着巨大的工作量，而且分析完后还要想办法截获请求，做这样的工作不如直接监控浏览器内cookie的变化，幸好Electron也提供了相关的能力

22.1 分析首屏加载时间

◆ 从用户启动一个Electron应用到应用的第一个窗口渲染完成，共经历了三个阶段

◆ performance.timing.fetchStart记录了浏览器准备使用HTTP请求读取文档时的时间戳。该时间戳在网页查询本地缓存之前发生

◆ Performance API可以获取到当前页面中与性能相关的信息。它包含事件计数器（eventCounts）​、内存使用信息（memory）​、导航计数器（navigation）和时间记录器（timing）等属性和一系列方法，通过performance.now()方法可以得到当前网页从加载开始到当前时间之间的微秒数，其精度可达100万分之一秒，为开发者更精准地控制页面性能提供了支持

22.3 数据存储方案性能对比

◆ 对于插入数据的测试用例来说，所有测试结果都显示IndexedDB的性能要优于SQLite

◆ 除dexie外，开发者还可以考虑使用JsStore（https://github.com/ujjwalguptaofficial/JsStore）作为客户端ORM框架，这个框架提供的API更加人性化，因为它使用了WebWorker技术，所以综合性能略强于dexie，但由于其问世较晚，稳定性尚有待验证

22.5 桌面端编程的生态演化

◆ Qt（https://www.qt.io/）​、wxWidgets（https://www.wxwidgets.org/）​、GTK（https://www.gtk.org/）​、IUP（http://webserver2.tecgraf.puc-rio.br/iup/）​、Ultimate++（https://www.ultimatepp.org/）等库就是在这段时间内应运而生的，这些库在一定程度上达到了跨平台的需求，但都要求开发者使用C/C++语言进行开发，开发效率不是很高，但并没有什么更佳的选择，所以也就只能这样

◆ 如今已经有非常多的且很知名的应用是使用这些技术开发的，比如字节跳动的飞书、微软的VSCode、腾讯的微信开发者工具、国外著名团队协作软件Slack等，即使有这么多行业标杆在使用这两个技术制作应用，也难掩它们自身的缺点，比如用这两个技术开发的应用体积巨大，某些场景下性能表现不尽如人意，这两个技术自身迭代速度非常快导致某些API不是很稳定（包括其底层的Node.js和Chromium也都是飞速发展迭代，隔几周就出一个新版本）​。

22.6 Electron的竞争对手

◆ 如果你同时拥有C++和前端开发技能，那么你有三个方案可选：Qt、cef和Electron

-- 来自微信读书
