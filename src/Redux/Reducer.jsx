import {ADD_TO_CART} from "./Constant"

export const cartData = (data=[],action)=>{      // data = [] initial value because all data present in array
        //   if(action.type ===ADD_TO_CART ){      // reducer return sume value imp
        //     console.log("reducer data",action)
        //     return action.data
        //   }else{
        //     return "No Action Match"
        //   }  
        
        switch(action.type){
            case ADD_TO_CART:
                //logic
            console.log("reducer data",action)
            return [action.data, ...data]

            default:
                return data
        }
    
    
    

}