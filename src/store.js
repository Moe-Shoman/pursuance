import { createStore } from 'redux'
import taskApp from './reducers'

let store = createStore(
  taskApp,
  (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) || function(){}
)

export default store
