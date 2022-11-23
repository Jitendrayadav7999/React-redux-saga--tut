import {AddToCart} from "../Redux/Action"
import {useDispatch} from "react-redux"

function Main() {
  const dispatch = useDispatch()
  const product = {
    name:"i phone",
    company:"apple",
    price:50000
  }
  return (
    <div className="App">
     <button onClick={()=>dispatch(AddToCart(product))}>AddToCart</button>
    </div>
  );
}

export default Main;
