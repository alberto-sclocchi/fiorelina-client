import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ProductContext from '../context/ProductContext.context';

export default function ProductInfoBox() {
  const { productId } = useParams();
  const { product, getProduct } = useContext(ProductContext);

  useEffect(() => {
    // You can use productId to fetch product details here
    getProduct(productId)
  }, [productId]);

  return (
    <div>
        <h3>Product Info</h3>
        {!!product ? (
          <div>
            <h4>{product.name}</h4>
            <img src="https://www.giverecipe.com/wp-content/uploads/2020/06/Chocolate-Strawberry-Cake-Recipe.jpg" alt={product.name} style={{width:"6vw"}}/>
            <p>Price: ${product.price.toFixed(2)}</p>
            <p>{product.ingredients.join("/")}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
    </div>
  )
}
