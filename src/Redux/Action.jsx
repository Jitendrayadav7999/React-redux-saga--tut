import {ADD_TO_CART} from "./Constant"
export const AddToCart = (data)=>{
    console.log("action is called")
    console.log(data)
    return {
        type: ADD_TO_CART,                     // define type must impotant
        data:data     // data 
    }
}