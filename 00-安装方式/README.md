#兼容性
  Vue.js 不支持 IE8 及其以下版本，因为 Vue.js 使用了 IE8 不能模拟的 ECMAScript 5 特性。
  Vue只支持 兼容ECMAScript5的浏览器 http://caniuse.com/#feat=es5

#Vue DevTools
当使用 Vue 时，我们推荐同时在你的浏览器上安装 Vue Devtools，它允许你在一个更加友善的界面中审查和调试你的 Vue 应用。
  https://github.com/vuejs/vue-devtools#vue-devtools

#安装
- 下载开发版本并引入
  直接下载并用 <script> 标签引入，Vue 会被注册为一个全局变量。重要提示：在开发时请用开发版本，遇到常见错误它会给出友好的警告。
- npm 安装: `npm install vue`
- vue-cli:
  Vue.js 提供一个官方命令行工具，可用于快速搭建大型单页应用。该工具提供开箱即用的构建工具配置，带来现代化的前端开发流程。只需几分钟即可创建并启动一个带热重载、保存时静态检查以及可用于生产环境的构建配置的项目：
  全局安装 vue-cli
  `npm i -g vue-cli`
  创建一个基于 webpack 模板的新项目
  `vue init webpack demo`
  切的到项目目录
  `cd demo`
  安装依赖
  `npm i  或者 yarn`
  运行开发环境
  `npm run dev`
  觉得网速慢可以使用国内的镜像：http://riny.net/2014/cnpm/

nodejs
webpack
es6
javascript

#开发工具
- nodejs   到官网网站上面下载并安装
- IDE + vue插件 搜索vue对应的插件安装一下，写起来方便
- yarn     nodejs的包管理工具，默认npm就行，觉得慢可以使用淘宝的镜像cnpm, 还想提升速度可以使用yarn(facebook出品)

https://github.com/vuejs-templates
https://github.com/vuejs/awesome-vue

学习顺序：
安装 -- 声明式渲染 -- 组件系统 -- 客户端路由vue-router  -- 状态管理vuex -- ajax数据请求axios, VueAxios -- 构建系统vue-cli -- 服务器端渲染Nuxt.js
