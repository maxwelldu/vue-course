<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>{{ count }}</p>
    <!-- <p>{{ countAlias }}</p>
    <p>{{ countPlusLocalState }}</p> -->
    <p>{{ localCounter }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'app',
  data () {
    return {
      counter: 10,
      localCount: 1
    }
  },
  // computed: {
  //   count () {
  //     return this.$store.state.count
  //   }
  // },
  // mapState 辅助函数
  // computed: mapState({
  //   // 箭头函数可使代码更简练
  //   count: state => state.count,
  //
  //   // 传字符串参数 'count' 等同于 `state => state.count`
  //   countAlias: 'count',
  //
  //   // 为了能够使用 `this` 获取局部状态，必须使用常规函数
  //   countPlusLocalState (state) {
  //     return state.count + this.localCount
  //   }
  // }),

  // 如果计算属性的名字和state当中的属性一样时写数组，里面写字符串
  // computed: mapState([
  //   'count'
  // ]),

  // 对象展开运算符
  computed: {
    // 本地的计算属性
    localCounter () {
      return this.counter * 2
    },
    // ...表示将mapState返回的对象，比如{count: 1} 就变成当前computed当中的一个属性count
    // store当中的得到的计算属性
    ...mapState({
      count: state => state.count
    })
  },
  methods: {
    increment () {
      this.$store.dispatch('increment')
    },
    decrement () {
      this.$store.dispatch('decrement')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
