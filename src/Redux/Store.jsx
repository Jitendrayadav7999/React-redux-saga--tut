// import {createStore} from "redux"
import {configureStore} from "@reduxjs/toolkit"
import RootReducer from "./RootReducer"
import productSaga from "./ProductSaga"
import createSagaMiddleware from "@redux-saga/core"

// const Store = createStore(RootReducer);    // its need function/ its old syntax
const sagaMiddleware = createSagaMiddleware()
const Store = configureStore(
    {
        reducer: RootReducer,
        middleware:()=>[sagaMiddleware]
    })

sagaMiddleware.run(productSaga)
export default Store