// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 引入根组件App
import App from './App'
// 引入路由 ./router/index.js
import router from './router'
// 引入Axios
import Axios from 'axios'
// 引入VueAxios插件
import VueAxios from 'vue-axios'
// 使用VueAxios插件, 把Axios当成配置对象
Vue.use(VueAxios, Axios)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
