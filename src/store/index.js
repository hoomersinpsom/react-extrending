import { createStore, applyMiddleware, compose } from 'redux'
import MainReducer from 'reducers'
import thunk from 'redux-thunk'

const store = createStore(
  MainReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

export default store