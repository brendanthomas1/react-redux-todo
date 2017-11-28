import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

/* this is what redux's combineReducers function does
function todoApp(state = initialState, action) {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    todos: todos(state.todos, action)
  }
}
*/

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp
