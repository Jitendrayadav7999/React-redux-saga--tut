import {takeEvery,put} from "redux-saga/effects"
import {PRODUCT_LIST,SEARCH_PRODUCT,SET_PRODUCT_LIST} from "./Constant"

function* getProduct(){
    console.log("hi i am, saga");
     let data = yield fetch("http://localhost:3004/product")
     data = yield data.json()
    yield put({type:SET_PRODUCT_LIST,data})
}
function* searchProduct(data){
     let result = yield fetch(`http://localhost:3004/product?q=${data.query}`)
     result = yield result.json()
     console.log("Search data", data ,result );
    yield put({type:SET_PRODUCT_LIST,data:result})
}

function* productSaga (){          // function* = Generator functions why use handle asyn opreations
 yield takeEvery(PRODUCT_LIST,  getProduct)
 yield takeEvery(SEARCH_PRODUCT,  searchProduct)
}

export default productSaga