import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ProductContext from '../context/ProductContext.context';

export default function ProductInfoBox() {
  const { productId } = useParams();
  const { product, getProduct } = useContext(ProductContext);

  useEffect(() => {
    getProduct(productId)
  }, [productId]);

  const addToCart = () => {
    console.log(`Product ${product._id} added to cart.`);
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log(product)
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  return (
    <div>
        <h3>Product Info</h3>
        {!!product ? (
          <div>
            <h4>{product.name}</h4>
            <img src="https://www.giverecipe.com/wp-content/uploads/2020/06/Chocolate-Strawberry-Cake-Recipe.jpg" alt={product.name} style={{width:"6vw"}}/>
            <p>Price: ${product.price.toFixed(2)}</p>
            <p>{product.ingredients.join("/")}</p>
            <button onClick={addToCart}>Add to Cart</button>
          </div>
        ) : (
          <p>Loading...</p>
        )}
    </div>
  )
}
