import {combineReducers} from "redux"
import listReducer from "./listReducer"


// membuat comabain reducer krna reducernya akan banyak,
//  combain reducer berfungsi untuk menggabungkan reducer lain" nya
export default combineReducers({
    lists: listReducer
})
