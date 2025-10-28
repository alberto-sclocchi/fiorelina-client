import React from 'react'
import ProductBox from './pages/ProductBox'

export default function Products() {
  const productsArray = [
    { id: 1, name: 'Product 1', price: 10.0 },
    { id: 2, name: 'Product 2', price: 20.0 },
    { id: 3, name: 'Product 3', price: 30.0 }
  ]
  return (
    <div>
        <h3>Products</h3>
        {productsArray.map((product) => {
            return <ProductBox key={product.id} {...product} />
        })}
    </div>
  )
}
