import * as types from './mutation-types'

export const increment = ({ commit }) => commit(types.INCREMENT)
export const decrement = ({ commit }) => commit(types.DECREMENT)
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
