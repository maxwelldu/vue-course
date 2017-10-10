#兼容性
  Vue.js 不支持 IE8 及其以下版本，因为 Vue.js 使用了 IE8 不能模拟的 ECMAScript 5 特性。
  Vue只支持 兼容ECMAScript5的浏览器 http://caniuse.com/#feat=es5

`测试：要能够记住IE8以下不能用，因为使用了ES5里面的Object.defineProperty方法`

#Vue DevTools
当使用 Vue 时，我们推荐同时在你的浏览器上安装 Vue Devtools，它允许你在一个更加友善的界面中审查和调试你的 Vue 应用。
  https://github.com/vuejs/vue-devtools#vue-devtools
`测试：能够翻墙安装上Vue DevTools并打开，在打开vue项目的时候能看到`

#安装
- 下载开发版本并引入
  直接下载并用 <script> 标签引入，Vue 会被注册为一个全局变量。重要提示：在开发时请用开发版本，遇到常见错误它会给出友好的警告。
- npm 安装(需要先在电脑上安装好nodejs): `npm install vue`
- vue-cli(需要先在电脑上安装好nodejs):
  Vue.js 提供一个官方命令行工具，可用于快速搭建大型单页应用。该工具提供开箱即用的构建工具配置，带来现代化的前端开发流程。只需几分钟即可创建并启动一个带热重载、保存时静态检查以及可用于生产环境的构建配置的项目：
  全局安装 vue-cli
  `npm i -g vue-cli`
  创建一个基于 webpack 模板的新项目,所有的模板： https://github.com/vuejs-templates
  `vue init webpack demo`
  切的到项目目录
  `cd demo`
  安装依赖
  `npm i  或者 yarn`
  运行开发环境
  `npm run dev`
  觉得网速慢可以使用国内的镜像：http://riny.net/2014/cnpm/

- nodejs
- webpack
- es6
- javascript

#开发工具
- nodejs   到官网网站上面下载并安装
- IDE + vue插件 搜索vue对应的插件安装一下，写起来方便,能够高亮显示
- yarn     nodejs的包管理工具，默认npm就行，觉得慢可以使用淘宝的镜像cnpm, 还想提升速度可以使用yarn(facebook出品)

vue比较优秀的项目：
https://github.com/vuejs/awesome-vue
http://awesomes.cn

#学习顺序：
安装 --> 声明式渲染 --> 组件系统 --> 客户端路由vue-router --> 构建系统vue-cli  --> ajax数据请求axios, VueAxios --> 状态管理vuex --> 上线步骤 --> 项目

#声明式渲染(2小时)
var vm = new Vue({
  //选项
  el: '#app',
  data: {//数据集合
    //数据可以通过vm.message 访问和修改
    message: 'Hello'
  },

  methods: {//方法的集合
    reverseMessage: function() {
      //方法中的this指的是vm实例
      this.message = this.message.split('').reverse().join('');
  //计算属性
  computed: {
    sum: function() {
      //this指向vm的实例
      return this.pricea * this.numbera + this.priceb * this.numberb;
    }
  },
  //生命周期钩子
  //方法中的this是指向vm实例
  beforeCreate: function() {
    console.log('beforeCreate');
  },
  created: function () {
    console.log('created');
    console.log('a is: ' + this.a)
  },
  beforeMount: function() {
    console.log('beforeMount');
  },
  mounted: function() {
    console.log('mounted');
  },
  beforeUpdate: function() {
    console.log('beforeUpdate');
    debugger;
  },
  updated: function() {
    console.log('updated');
    debugger;
  },
  beforeDestroy: function() {
    console.log('beforeDestroy');
  },
  destroyed: function() {
    console.log('destroyed');
  },
  //组件系统集合
  components: {
    'my-li': MyLi
  }
})
- todolist示例

#组件系统
- 如何构建组件系统
- 父往子组件传值
- 子组件的变化让父组件跟着变化
- 非父子组件之间通信
- 内容分发（插槽slot）

#路由
https://router.vuejs.org/zh-cn/
- 一级路由,默认一级路由，路由跳转，匹配不到的路由
- 二级路由,默认二级路由
- 三级路由，实现选项卡效果 未完成
- 动态路由实现选项卡 未完成
- 路由钩子 未完成

#vue-cli
- 面向数据编程原理 https://segmentfault.com/a/1190000007434923
`响应式的原理Object.defineProperty()`

- web服务器知识普及
  IIS(不用)
  Apache(大部分网站都用的这个)
  Nginx(现代用的较多)
  http-server(nodejs生成的服务器)

- 命令行 https://guoyongfeng.github.io/book/21/04-shell%20%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%9F%BA%E7%A1%80%E4%BD%BF%E7%94%A8.html

- nodejs  https://nodejs.org/en/download/  https://guoyongfeng.github.io/book/02/01-%E6%A6%82%E8%BF%B0.html
- nodejs写restful api(todo)
- npm https://www.npmjs.com/ bower gulp express lodash underscore axios http-server json-server localtunnel webpack pm2 supervisor yo mockjs
```
//初始化一个package.json
npm init -y
//根据package.json去安装对应的依赖包
npm i
//全局安装
npm i -g 包名称
//安装为项目依赖
npm i -S 包名称
//安装为项目开发依赖
npm i -D 包名称
```

- package.json(script功能方便) http://javascript.ruanyifeng.com/nodejs/packagejson.html

- babel http://babeljs.io/
.babelrc是babel的配置文件
语法的转码是根据插件来的, 就是plugins里面配置的
如果写一堆插件的名称显的内容太多，多个插件可以合成一个presets, 所以一个presets相当于多个plugins
转码：
`babel input.js -o output.js`

- eslint https://eslint.org/docs/user-guide/getting-started
静态代码规范检查：
.eslintrc.js是eslint的配置文件
extends里面是配置一下eslint的规范是标准的还是airbnb
检查的时候
eslint file.js
或者在当前模块下
./node_modules/.bin/eslint file.js

- 严格模式 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode
(如果第一个js不是严格模式，第二个js是严格模式，把代码合并到一起，整个代码全部都不是严格模式；反过来如果第一个是严格模式，第二个不是严格模式，代码一合并，会让整个代码都运行在严格模式；所以通常我们会把代码写到IIFE里面，也就是写在函数里面)
- ES6
https://guoyongfeng.github.io/book/05/01-%E6%A6%82%E8%BF%B0.html
```
必会的知识点
let const 模板字符串 箭头函数 增强的对象字面量（属性和值一样时只写一个，方法可以不写function关键字） 解构 promise 模块导入导出
```
模块的默认导出 export default {}
//一个是导入自己的模块，一个是导入npm安装的第三方模块
模块的导入 import 变量名 from '模块地址'

- html预处理(jade) http://jade-lang.com/ http://naltatis.github.io/jade-syntax-docs/ https://segmentfault.com/a/1190000000357534
通过缩进表示层级关系
标签 内容
标签(属性=值)
#container 表示一个div，ID为container
span#container 表示一个span, ID为container
支持模板的继承
jade index.jade
block 块名称    声明和使用块
block content 就类似于组件里面的slot,先继承过来，再将对应block块的内容替换

- express http://www.expressjs.com.cn/
- css预处理 less  http://lesscss.cn/  http://less.bootcss.com/
lessc styles.less > styles.css
sass[scss]
http://sass-lang.com/ https://www.sass.hk/
sass当中没有大括号和分号,scss中和正常的css类似有分号和大括号
sass input.scss output.css
sass --watch index.scss
sass --watch list.sass

stylus
http://www.zhangxinxu.com/jq/stylus/
stylus index.styl -o index.css

- postcss http://postcss.org/ https://segmentfault.com/a/1190000003909268
postcss src/index.css -u autoprefixer -o index.css

- js预处理 typescript https://www.tslang.cn/docs/handbook/typescript-in-5-minutes.html https://cn.vuejs.org/v2/guide/typescript.html

- webpack http://www.jianshu.com/p/42e11515c10f https://webpack.js.org/guides/getting-started/
webpack entry.js bundle.js

- 单文件组件 https://cn.vuejs.org/v2/guide/single-file-components.html
- git https://git-scm.com/  https://guoyongfeng.github.io/book/01/01-%E6%A6%82%E8%BF%B0.html
- .gitignore https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/0013758404317281e54b6f5375640abbb11e67be4cd49e0000
- .gitkeep http://www.cnblogs.com/zhangjing230/archive/2012/05/09/2489745.html
- 热加载 build/dev-client.js中 window.location.reload()
- webpack入口出口, @是src目录的别名 build/webpack.base.conf.js
`如果在代码里 里面如果写字符串需要加单引号 :src="'/static/img/' + item.productImg"`
- config/index.js
```
配置索引文件位置
网站根目录
静态资源目录
静态资源发布目录
是否生成sourcemap文件
是否采用gzip压缩
gzip针对哪些文件类型进行压缩
web服务器的端口
是否自动打开浏览器
资源目录
资源子目录
proxyTable http://www.jianshu.com/p/95b2caf7e0da
```
- 用单文件组件写组件
  - 自定义控件组件(选择，计数，多选，下拉选择，模态框) 未完成
  - 自定义业务组件(登录弹出框，轮播图，选项卡) 未完成
  - 自定义页面组件 未完成
  - 使用第三方组件 未完成
  - 一个项目的静态页面搭建, 把一个静态的网站变成一个基于vue组件化的网站 未完成

#axios
- axios
- vue-axios
```
//安装axios, 以及vue-axios插件
npm i -S axios vue-axios

//在main.js入口文件当中引入，并使用vue-axios插件
import Axios from 'axios'
import VueAxios from 'vue-axios'
//使用VueAxios插件，把Axios当成配置对象传进去,之后在组件当中就可以使用this.$http访问到axios
Vue.use(VueAxios, Axios)

//在一个组件当中可以遍历出来数据
<div v-for="(item, index) in goodsList" class="goods">
  <div class="img">
    <img :src="item.goods_thumb" alt="">
  </div>
  <div class="desc">
    <i>{{item.price}}</i> <span>{{item.goods_name}}</span>
  </div>
</div>

//在组件内部的data里面添加一个属性goodsList
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      goodsList: []
    }
  },
  //当组件创建的时候请求api
  created: function () {
    //通过this.$http就可以访问到axios对象，然后访问get方法，返回的是promise, 所以可以.then调用, 在方法里面需要使用外部的这个vue对象，所以在then里面传递的函数用箭头函数的方式传递，因为箭头函数中没有this, 这个this就是指外部的这个vue实例
    this.$http.get('http://h6.duchengjiu.top/shop/api_goods.php?pagesize=12').then((result) => {
      //返回的result对象是包装过后的对象, ajax返回的值在result.data中
      console.log(result)
      this.goodsList = result.data.data
    })
  }
```

#状态管理
- state //相当于data中的数据
- getters //相当于计算属性
- actions //提交mutation
- mutations //mutation去改变state的值

`import * as obj from "xxx" 会将 "xxx" 中所有 export 导出的内容组合成一个对象返回`
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/import
export https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/export

```
//在Vue-cli项目中使用vuex
//安装
npm i -S vuex
mkdir store
vim index.js
//导入
import Vuex from 'vuex'
Vue.use(Vuex)

在main.js中引入
import store from './store'
在vue的初始化时传入store

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})


经典的使用有六个步骤：
store里面有state,
state要在组件中显示需要用computed计算属性，
组件中写method方法，
method中通过store.dispatch触发action
action当中通过commit提交mutation,
mutation方法负责修改state的值
getter，当我们在组件中获取store里面的状态

mapState
  // 在单独构建的版本中辅助函数为 Vuex.mapState
  import { mapState } from 'vuex'

  export default {
    // ...
    computed: mapState({
      // 箭头函数可使代码更简练
      count: state => state.count,

      // 传字符串参数 'count' 等同于 `state => state.count`
      countAlias: 'count',

      // 为了能够使用 `this` 获取局部状态，必须使用常规函数
      countPlusLocalState (state) {
        return state.count + this.localCount
      }
    })
  }

  computed: mapState([
    // 映射 this.count 为 store.state.count
    'count'
  ])

  computed: {
    localComputed () { /* ... */ },
    // 使用对象展开运算符将此对象混入到外部对象中
    ...mapState({
      // ...
    })
  }

mapGetters
  import { mapGetters } from 'vuex'

  export default {
  // ...
  computed: {
  // 使用对象展开运算符将 getters 混入 computed 对象中
    ...mapGetters([
      'doneTodosCount',
      'anotherGetter',
      // ...
    ])
  }
  }

  如果你想将一个 getter 属性另取一个名字，使用对象形式：
  mapGetters({
    // 映射 this.doneCount 为 store.getters.doneTodosCount
    doneCount: 'doneTodosCount'
  })

mapMutations
  import { mapMutations } from 'vuex'

  export default {
    // ...
    methods: {
      ...mapMutations([
        'increment' // 映射 this.increment() 为 this.$store.commit('increment')
      ]),
      ...mapMutations({
        add: 'increment' // 映射 this.add() 为 this.$store.commit('increment')
      })
    }
  }

mapActions
  import { mapActions } from 'vuex'

  export default {
    // ...
    methods: {
      ...mapActions([
        'increment' // 映射 this.increment() 为 this.$store.dispatch('increment')
      ]),
      ...mapActions({
        add: 'increment' // 映射 this.add() 为 this.$store.dispatch('increment')
      })
    }
  }

在actions当中使用axios请求数据
...mapActions([
      'increment', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`

      // `mapActions` 也支持载荷：
      'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.dispatch('incrementBy', amount)`
    ]),
    ...mapActions({
      add: 'increment' // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`,
      addAs: 'increment' // 将 `this.add(amount)` 映射为 `this.$store.dispatch('increment', amount)`
    })

Modules
项目结构

```

#上线步骤
npm run build
放到web服务器上即可

#其他
- material-design介绍 http://www.material-ui.com/#/
- muse-ui http://www.muse-ui.org/#/flatButton
- 富文本编辑器 vue-quill-editor

#实战开发

开发一个电子商城项目

声明式渲染
组件系统
路由
状态管理
构建系统
实战

视频时长：
0 开头 22+18+19+18+6+9+4+4+12+7+14 = 134分
1 开头 5+4+5+6+4+3+3+4+3 = 37分
2 开头 5+6 = 11分
3 开头 5+6+3+12+8+12+4+8+12+8+4+3+3+2+3+11+7+4+18+11+6+3+10+8+15+4+2+9 = 201分
4 开头 6+6+5 = 17分

134+37+11+201+17 = 400
5 开头 20+3+14+12+20+9
