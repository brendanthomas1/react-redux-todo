import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import './index.css';
import App from './App';


/* fer testin'
import {
  addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters
} from './actions'
*/

let store = createStore(todoApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

/* fer testin'
console.log(store.getState())

const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

store.dispatch(addTodo('eat'))
store.dispatch(addTodo('drink'))
store.dispatch(addTodo('go home'))

store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))

store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))
*/
