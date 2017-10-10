import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import * as types from './mutation-types'

Vue.use(Vuex)

const state = {
  count: 0,
  todos: [
    {id: 1, text: 't', done: true},
    {id: 2, text: 'f', done: false}
  ]
}

const mutations = {
  [types.INCREMENT] (state, payload) {
    state.count += payload.amount
    // state.count++
  },
  [types.DECREMENT] (state, payload) {
    state.count -= payload.amount
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
