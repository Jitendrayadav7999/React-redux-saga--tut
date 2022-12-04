import { AddToCart,EmptyCart,RemoveFromCart } from "../Redux/Action"
import { useDispatch } from "react-redux"
import { ProductList } from "../Redux/ProductAction";
import {useSelector} from "react-redux"
import { useEffect } from "react";

function Main() {
  const dispatch = useDispatch()
  const data = useSelector((state)=>state.ProductData)
  console.log("this is a main section ",data,"=>");
 
  useEffect(()=>{
   dispatch(ProductList())
  },[])
  return (
    <div className="App">
      <div>
        <button onClick={() => dispatch(EmptyCart())}>Empty Cart</button>
      </div>
      <div className="product-container">
       {
        data.map((item)=> <div key={item.id} className="product-item">
         <img className="image" src={item.photo} alt="" />
         <div>Name:    {item.name}</div>
         <div>Company: {item.company}</div>
         <div>Price:   {item.price}</div>
         <div>Rating:  {item.rating}</div>
         <div>
         <button onClick={() => dispatch(AddToCart(item))}>Add To Cart</button>
         <button onClick={() => dispatch(RemoveFromCart(item.id))}>Remove To Cart</button>
         </div>
        </div>)
       }
      </div>
    </div>
  );
}

export default Main;
