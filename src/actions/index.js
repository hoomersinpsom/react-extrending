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

export const openMenu = openMenu => {
  return dispatch => dispatch({
    type: types.OPENMENU,
    openMenu
  })
}