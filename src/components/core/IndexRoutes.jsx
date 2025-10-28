import { Route, Routes } from 'react-router-dom'
import HomePage from '../landing-page/HomePage'
import Contact from './Contact'
import Products from '../products/Products'
import CreateProduct from '../products/CreateProduct'

export default function IndexRoutes() {
  return (
    <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/create-products" element={<CreateProduct />} />
    </Routes>
  )
}
