<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>{{ count }}</p>
    <p>
      <button @click="increment">increment</button>
      <button @click="incrementBy(10)">incrementBy(10)</button>
      <button @click="add(100)">add</button>
      <button @click="incrementAsync">incrementAsync</button>
      <button @click="incrementAsyncB">incrementAsyncB</button>
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
import { mapGetters, mapActions } from 'vuex'
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
    // increment () {
    //   this.$store.dispatch('increment')
    // },
    // increment () {
    //   this.$store.commit('increment');
    // }
    // ...mapMutations([
    //   'increment'
    // ]),
    decrement () {
      this.$store.dispatch('decrement', 10)
    },
    ...mapActions([
      'increment',
      'incrementBy'
    ]),
    ...mapActions({
      add: 'increment'
    }),
    incrementAsync () {
      this.$store.dispatch('incrementAsync').then(() => {
        console.log('async increment finish')
      })
    },
    incrementAsyncB () {
      this.$store.dispatch('incrementAsyncB').then(() => {
        console.log('asyncb increment finish')
      })
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
