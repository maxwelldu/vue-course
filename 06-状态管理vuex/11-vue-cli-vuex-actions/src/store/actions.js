import * as types from './mutation-types'

// export const increment = ({ commit }) => commit(types.INCREMENT, {amount: 5})
export const increment = ({ commit }, amount) => commit({type: types.INCREMENT, amount: amount})
export const incrementBy = ({ commit }, amount) => commit({type: types.INCREMENT, amount: amount})
export const decrement = ({ commit }, amount) => commit(types.DECREMENT, {amount: amount})
export const incrementIfOdd = ({ commit, state }) => {
  if ((state.count + 1) % 2 === 0) {
    commit(types.INCREMENT)
  }
}
export const incrementAsync = ({ commit }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      commit(types.INCREMENT, {amount: 3})
      resolve()
    }, 1000)
  })
}

export const incrementAsyncB = ({ dispatch, commit }) => {
  return dispatch('incrementAsync').then(() => {
    commit(types.INCREMENT, {amount: 7})
  })
}
