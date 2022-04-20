import { createStore, combineReducers } from 'redux'
// import devstolls, yg sudah di install
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from "./reducer/indexReducer"

// membuat stor e
const store = createStore(rootReducer, composeWithDevTools())

export default store