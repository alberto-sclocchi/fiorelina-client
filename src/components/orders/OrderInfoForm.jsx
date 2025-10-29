import React, { useContext, useState } from 'react'
import CartContext from './context/CartContext.context';

export default function OrderInfoForm() {
   const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone_number: '',
    email: ''
  })

  const { sendOrder } = useContext(CartContext);


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({...prevState, [name]: value}));
  }


  const handleSubmit = (event) => {
    event.preventDefault();

    const completedOrder = {
        ...formData,
        products: JSON.parse(localStorage.getItem('cart')).map((product) => ({ product: product._id, quantity: product.quantity })),
        total_price: JSON.parse(localStorage.getItem('cart')).reduce((total, product) => total + product.price * product.quantity, 0)
    }

    console.log("Order submitted:", completedOrder);
    sendOrder(completedOrder);
    
    setTimeout(() => {
      setFormData({
        name: '',
        adress: '',
        phone_number: '',
        email: ''
      })
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
