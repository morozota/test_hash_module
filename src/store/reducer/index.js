import { combineReducers } from 'redux'
import { hashReducer } from './hashReducer'
import { comboHash } from './comboHash'

export default combineReducers({
  hashReducer,
  comboHash,
})
