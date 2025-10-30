import React, { useContext } from 'react'
import CartContext from '../orders/context/CartContext.context';

export default function HomePage() {
  const { sendOrder } = useContext(CartContext);

  return (
    <div>HomePage</div>
  )
}
