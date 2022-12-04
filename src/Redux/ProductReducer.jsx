import {PRODUCT_LIST, SET_PRODUCT_LIST} from "./Constant"

export const ProductData = (data=[],action)=>{      // data = [] initial value because all data present in array
      
        switch(action.type){
            case SET_PRODUCT_LIST:
            console.log("PRODUCT_LIST data",action)
            return [...action.data]
            default:
                return data
        }
    
    
    

}