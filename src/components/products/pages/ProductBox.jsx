import React from 'react'
import { Link } from 'react-router-dom';

export default function ProductBox(product) {
  const { name, price, imageUrl } = product;

  return (
    <div>
        <h4>{name}</h4>
        <img src="https://www.giverecipe.com/wp-content/uploads/2020/06/Chocolate-Strawberry-Cake-Recipe.jpg" alt={name} style={{width:"6vw"}}/>
        <p>Price: ${price.toFixed(2)}</p>
        <Link to={`/products/${product._id}`}>View Details</Link>
    </div>
  )
}
