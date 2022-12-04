import React from 'react'
import {useSelector,useDispatch} from "react-redux"     // get the data from redux to react app
import {Link} from "react-router-dom"
import {searchProduct} from "../Redux/ProductAction"
const Header = () => {
    const reduxData = useSelector((state)=>state.cartData)
    console.log(reduxData)
    const dispatch = useDispatch()
  return (
    <div className='header'>
       <Link to="/"> <h1 className='logo'>E-COMM</h1></Link>
       <div className='search-bar'>
         <input type="text" placeholder='Search Product' onChange={(e)=>dispatch(searchProduct(e.target.value))} />
       </div>
       <Link to="/cart" >
       <div className='cart'>
           <span>{reduxData.length}</span> 
           <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="cart" />
         </div>
       </Link>
         
         
    </div>
  )
}

export default Header
