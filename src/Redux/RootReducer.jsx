import{ combineReducers} from "redux"
import {cartData} from "./Reducer"
import { ProductData } from "./ProductReducer"

export default combineReducers({
    cartData,
    ProductData
})