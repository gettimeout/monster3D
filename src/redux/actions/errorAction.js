import { ERROR_OTHER, ERROR_RESET } from './actionTypes'

export const errorResetAction = () => ({
  type: ERROR_RESET
})

export const errorOtherAction = (payload) => ({
  type: ERROR_OTHER,
  payload
})