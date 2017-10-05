import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

const state = {
  count: 0,
  todos: [
    {id: 1, text: 't', done: true},
    {id: 2, text: 'f', done: false}
  ]
}

const mutations = {
  increment (state) {
    state.count++
  },
  decrement (state) {
    state.count--
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
