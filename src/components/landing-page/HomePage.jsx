import React, { useContext, useEffect, useRef } from 'react'
import CartContext from '../orders/context/CartContext.context';
import { useLocation, useNavigate } from 'react-router-dom';

export default function HomePage() {
  const { sendOrder } = useContext(CartContext);
  const location = useLocation();
  const navigate = useNavigate();
  const orderProcessed = useRef(false);
  const alertShown = useRef(false);


  useEffect(() => {
      const params = new URLSearchParams(location.search);
      if (params.get('success') === "true" && !orderProcessed.current) {
        const costumerInfo = JSON.parse(localStorage.getItem('costumer'));
        const completedOrder = {
            ...costumerInfo,
            products: JSON.parse(localStorage.getItem('cart')).map((product) => ({ product: product._id, quantity: product.quantity })),
            total_price: +(JSON.parse(localStorage.getItem('cart')).reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2))
        };
        sendOrder(completedOrder);
        orderProcessed.current = true;
        navigate(location.pathname, {replace: true})

      }
      if (params.get('canceled') === "true" && !alertShown.current) {
          alert("Order canceled -- continue to shop around and checkout when you're ready.");
          alertShown.current = true;
          navigate(location.pathname, {replace: true})
      }

  }, [location.search, sendOrder]);
    
  return (
    <div>HomePage</div>
  )
}
