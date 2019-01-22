import { combineReducers } from 'redux'
// import todos from './TodoReducer'
import loading from './LoadingReducer'
import company from './CompanyReducer'

export default combineReducers({
  loading,
  company
})