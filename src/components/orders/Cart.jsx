import React from 'react'
import { Link } from 'react-router-dom';

export default function Cart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  return (
    <div>
        <h3>Cart</h3>
        {cart.length === 0 ? 
          <p>Your cart is empty.</p>
         : 
         <div>
            <ul>
                {cart.map((item, index) => (
                <li key={index}>
                    <h4>{item.name}</h4>
                    <p>Price: ${(item.price * item.quantity).toFixed(2)}</p>
                </li>
                ))}
            </ul>
            <Link to="/cart/order-info">Next</Link>
         </div>
        }
    </div>
  )
}
