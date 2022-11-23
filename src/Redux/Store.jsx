import {createStore} from "redux"
import RootReducer from "./RootReducer"

const Store = createStore(RootReducer);    // its need function

export default Store