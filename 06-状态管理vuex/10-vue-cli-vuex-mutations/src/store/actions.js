import * as types from './mutation-types'

// export const increment = ({ commit }) => commit(types.INCREMENT, {amount: 5})
export const increment = ({ commit }) => commit({type: types.INCREMENT, amount: 5})
export const decrement = ({ commit }, amount) => commit(types.DECREMENT, {amount: amount})
export const incrementIfOdd = ({ commit, state }) => {
  if ((state.count + 1) % 2 === 0) {
    commit(types.INCREMENT)
  }
}
export const incrementAsync = ({ commit }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      commit(types.INCREMENT)
      resolve()
    }, 1000)
  })
}
