import React from 'react'
import { useSelector } from 'react-redux'

import { Link } from "react-router-dom"
const Cart = () => {
    const CartData = useSelector((state) => state.cartData)
    let amount = CartData.length && CartData.map(item=>item.price).reduce((prev,current)=>prev+current)
    return (
        <div >
            <Link to="/">Go to Product List</Link>
            <h1>Cart Page</h1>
            <div className='cart-page-container'>
                <table>
                    <tr>
                        <td>name</td>
                        <td>Company</td>
                        <td>Price</td>
                        <td>Rating</td>
                    </tr>
                    {
                        CartData.map((item) => <tr>
                            <td>{item.name}</td>
                            <td>{item.company}</td>
                            <td>{item.price}</td>
                            <td>{item.rating}</td>
                        </tr>)
                    }
                </table>
                <div className='price-details'>
                    <div className='adjust-price'><span>Amount</span><span>{amount}</span> </div>
                    <div className='adjust-price'><span>Discount</span><span>-{amount/10}</span></div>
                    <div className='adjust-price'> <span>GST</span><span>+{amount * 2/100}</span></div>
                    <div className='adjust-price'> <span>Total</span><span>{amount - amount/10 + amount * 2/100}</span></div>
                   
                </div>
            </div>
        </div>
    )
}

export default Cart
