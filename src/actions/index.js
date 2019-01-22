import * as types from './actionsTypes'

function setLoading(loading) {
  return {
    type: types.LOADING,
    loading
  };
}

export const loading = loading => {
  if (loading) {
    return dispatch => dispatch(setLoading(loading))
  }
  return dispatch => {
    setTimeout(() => {
      dispatch(setLoading(loading))
    }, 500)
  }
}

export const company = company => {
  return dispatch => dispatch({
    type: types.COMPANY,
    company
  })
}