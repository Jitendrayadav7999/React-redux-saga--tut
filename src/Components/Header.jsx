import React from 'react'
import {useSelector} from "react-redux"     // get the data from redux to react app
const Header = () => {
    const reduxData = useSelector((state)=>state.cartData)
    console.log(reduxData)
  return (
    <div className='header'>
         <div className='cart'>
           <span>{reduxData.length}</span> 
           <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="" />
         </div>
    </div>
  )
}

export default Header
