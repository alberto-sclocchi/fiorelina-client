import { Route, Routes } from 'react-router-dom'
import HomePage from '../landing-page/HomePage'
import Contact from './Contact'
import Products from '../products/Products'
import CreateProduct from '../products/CreateProduct'
import ProductInfoBox from '../products/pages/ProductInfoBox'
import Cart from '../orders/Cart'

export default function IndexRoutes() {
  return (
    <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/create" element={<CreateProduct />} />
        <Route exact path="/products/:productId" element={<ProductInfoBox />} />
        <Route exact path="/cart" element={<Cart />} />
    </Routes>
  )
}
