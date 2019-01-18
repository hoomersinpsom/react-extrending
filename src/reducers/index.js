import { combineReducers } from 'redux'
// import todos from './TodoReducer'
import loading from './LoadingReducer'
import menu from './MenuReducer'

export default combineReducers({
  loading,
  menu
})