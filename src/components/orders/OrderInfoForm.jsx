import React, { useContext, useState } from 'react'
import CartContext from './context/CartContext.context';
import { loadStripe } from '@stripe/stripe-js';


export default function OrderInfoForm() {
   const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone_number: '',
    email: ''
  })

  const { sendOrder, createStripeSession } = useContext(CartContext);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({...prevState, [name]: value}));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const stripe = await loadStripe("pk_test_51SNjXGJTlLPzrncOLr0pDWwqoPHaTFAe3BxUpv2GKfVoiyqu3XAMxtOV2uAN20tnqW0RongcDkMhYWON218QuMnY00KEsAx9SZ")

    // const completedOrder = {
    //     ...formData,
    //     products: JSON.parse(localStorage.getItem('cart')).map((product) => ({ product: product._id, quantity: product.quantity })),
    //     total_price: +(JSON.parse(localStorage.getItem('cart')).reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2))
    // };

    // console.log("Order submitted:", completedOrder);
    // await sendOrder(completedOrder);

    // Stripe payment integration

    const sessionURL = await createStripeSession(JSON.parse(localStorage.getItem('cart')));

    window.location.href = sessionURL;

    setTimeout(() => {
      setFormData({
        name: '',
        address: '',
        phone_number: '',
        email: ''
      });
    }, 500);
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name"  name="name" value={formData.name} onChange={handleChange}/>
            <input type="text" placeholder="Address" name="address" value={formData.price} onChange={handleChange}/>
            <input type="text" placeholder="Phone Number" name="phone_number" value={formData.phone_number} onChange={handleChange}/>
            <input type="text" placeholder="Email" name="email" value={formData.email} onChange={handleChange}/>
            <button type="submit">Proceed to Checkout</button>
        </form>
    </div>
  )
}
