import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux'
import todoApp from './reducers'

/* fer testin'
import {
  addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters
} from './actions'
*/

let store = createStore(todoApp)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

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
