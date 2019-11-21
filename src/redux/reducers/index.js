import { combineReducers } from 'redux'
import { errorReducer } from './errorReducer'
import { navigateReducer } from './navigateReducer'

const rootReducer = combineReducers({
  navigate: navigateReducer,
  error: errorReducer,
})

export { rootReducer }
