import { combineReducers } from 'redux'
import query  from './query'
import list from './list'

const hnApp = combineReducers({
  //import reducers and put them here
  query,
  list
})

export default hnApp
