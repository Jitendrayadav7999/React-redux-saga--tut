import {ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART} from "./Constant"

export const cartData = (data=[],action)=>{      // data = [] initial value because all data present in array
        //   if(action.type ===ADD_TO_CART ){      // reducer return sume value imp
        //     console.log("reducer data",action)
        //     return action.data
        //   }else{
        //     return "No Action Match"
        //   }  
        
        switch(action.type){
            case ADD_TO_CART:
            console.log("ADD to cart data",action)
            return [action.data, ...data]

            case REMOVE_FROM_CART:
            console.log("REMOVE_FROM_CART data",action)
            // data.length = data.length? data.length -1:[]
            const remaingItem = data.filter((item)=> item.id !== action.data)
            return [...remaingItem]

            case EMPTY_CART:
                console.log("EMPTY_CART",action)
                data= []
                return [...data]

            default:
                return data
        }
    
    
    

}