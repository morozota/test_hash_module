import { createStore, applyMiddleware } from 'redux'
import RootReducer from './reducer'
import checkTitleName from './middleware/checkTitleName'
import { createLogger } from 'redux-logger'

const logger = createLogger({
  // ...options
  collapsed: true,
})

export default createStore(RootReducer, applyMiddleware(checkTitleName, logger))
