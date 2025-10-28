import React from 'react'

export default function ProductBox(product) {
  const { name, price, imageUrl } = product;

  return (
    <div>
        <h4>{name}</h4>
        <p>Price: ${price.toFixed(2)}</p>
        {imageUrl && <img src={imageUrl} alt={name} />}
    </div>
  )
}
