<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
    <ul>
      <li v-for="(item, index) in todos" :key="index">
        {{ item.text }}
      </li>
    </ul>
    已完成的任务({{ doneTodosCount }})
    <ul>
      <li v-for="(item, index) in doneTodos" :key="index">
        {{ item.text }}
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'app',
  computed: {
    count () {
      return this.$store.state.count
    },
    todos () {
      return this.$store.state.todos
    },
    // doneTodos () {
    //   return this.$store.getters.doneTodos
    // },
    // doneTodosCount () {
    //   return this.$store.getters.doneTodosCount
    // }
    ...mapGetters([
      'doneTodos',
      'doneTodosCount'
    ])
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
