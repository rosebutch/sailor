import {createStore,combineReducers} from 'redux'
import monthMarks from './monthMarks'

const appReducer = combineReducers({
  // reducers
  monthMarks,
})

export default createStore(appReducer)
