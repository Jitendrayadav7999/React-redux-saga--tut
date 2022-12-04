import { PRODUCT_LIST,SEARCH_PRODUCT } from "./Constant"

export const ProductList = () => {
    return {
        type: PRODUCT_LIST
     
    }
}
export const searchProduct = (query) => {
    return {
        type: SEARCH_PRODUCT,
        query
     
    }
}

