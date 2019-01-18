import * as types from '../actions/actionsTypes'

const INITIAL_DATA = {
  isLoading: 1
}

const LoadingReducer = (state=INITIAL_DATA, action) => {
  switch (action.type) {
    case types.LOADING: 
    if (action.loading) {
      return {
        isLoading: ++state.isLoading
      }
    }
    return {
      isLoading: --state.isLoading
    }
    default:
    return state
  }
}

export default LoadingReducer