export const evenOrOdd = state => state.count % 2 === 0 ? 'even' : 'odd'
export const doneTodos = state => state.todos.filter(todo => todo.done)
export const doneTodosCount = (state, getters) => getters.doneTodos.length
