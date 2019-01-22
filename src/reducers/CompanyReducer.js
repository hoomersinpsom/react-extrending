import * as types from 'actions/actionsTypes'


const CompanyReducer = (state = {}, action) => {
  console.log()
  switch (action.type) {
    case types.COMPANY: 
      return {
        ...action.company
      }
    default:
    return state
  }
}

export default CompanyReducer