import React from 'react'

export default function Cart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  return (
    <div>
        <h3>Cart</h3>
        {cart.length === 0 ? 
          <p>Your cart is empty.</p>
         : 
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                <h4>{item.name}</h4>
                <p>Price: ${item.price.toFixed(2)}</p>
              </li>
            ))}
          </ul>
        }
    </div>
  )
}
