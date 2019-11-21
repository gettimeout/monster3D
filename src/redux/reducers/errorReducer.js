import * as ActionType from '../actions/actionTypes'

const errorReducer = (state = null, action) => {
  const { type } = action

  if (type === ActionType.ERROR_RESET) {
    return null
  } else if (type === ActionType.ERROR_OTHER) {
    return action.error
  }

  return state
}

export { errorReducer }

