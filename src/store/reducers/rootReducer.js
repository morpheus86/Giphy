import fetchReducer from './fetchReducer'
import { combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'

const rootReducer = combineReducers({
  fetch: fetchReducer
})
export const middleware = applyMiddleware(logger)

export default rootReducer;