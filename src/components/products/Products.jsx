import React, { useContext, useEffect } from 'react'
import ProductBox from './pages/ProductBox'
import ProductContext from './context/ProductContext.context';

export default function Products() {
  const { products, getAllProducts } = useContext(ProductContext);

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div>
        <h3>Products</h3>
        {!!products && 
          products.map((product, index) => {
            return <ProductBox key={index} {...product} />
        })}
    </div>
  )
}
