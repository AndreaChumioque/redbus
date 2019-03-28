import { combineReducers } from 'redux'
import contentReducer from './content-reducer'
import selectedReducer from './selected-reducer'
import infoReducer from './info-reducer'

const rootReducer = combineReducers({
  tabs: contentReducer,
  info: infoReducer,
  selectedBank: selectedReducer,
})

export default rootReducer