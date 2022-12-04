import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./Constant"

export const AddToCart = (data) => {
    console.log("action is called")
    console.log(data)
    return {
        type: ADD_TO_CART,                     // define type must impotant
        data: data     // data 
    }
}
export const RemoveFromCart = (data) => {
    console.log("RemoveFromCart is called")
    console.log(data)
    return {
        type: REMOVE_FROM_CART,                     // define type must impotant
        data: data     // data 
    }
}
export const EmptyCart = () => {
    console.log("EmptyCart is called")
    return {
        type: EMPTY_CART,                     // define type must impotant
            // data 
    }
}