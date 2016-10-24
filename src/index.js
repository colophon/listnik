import React from 'react'
import ReactDOM from 'react-dom'
import { compose, createStore } from 'redux'
import { Provider } from 'react-redux'
import persistState, {mergePersistedState} from 'redux-localstorage'
import adapter from 'redux-localstorage/lib/adapters/localStorage'
import App from './containers/App'
import rootReducer from './reducers'

import 'react-mdl/extra/material.css'
import 'react-mdl/extra/material.js'

const reducer = compose(
  mergePersistedState()
)(rootReducer)

const storage = (adapter(window.localStorage))

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = composeEnhancers(
  persistState(storage, 'lisnik')
)

const store = createStore(reducer, enhancer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
