import * as ActionType from '../actions/actionTypes'

const navigateReducer = (state = null, action) => {
  const { type } = action

  if (type === ActionType.NAVIGATE) {
    return action.payload
  }

  return state
}

export { navigateReducer }

