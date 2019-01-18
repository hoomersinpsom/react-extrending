import * as types from '../actions/actionsTypes'

const INITIAL_DATA = {
  openMenu: false
}

const MenuReducer = (state=INITIAL_DATA, action) => {
  switch (action.type) {
    case types.OPENMENU: 
      return {
        openMenu: action.openMenu
      }
    default:
    return state
  }
}

export default MenuReducer