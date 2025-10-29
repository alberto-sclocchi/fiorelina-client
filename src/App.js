import './App.css';
import { Route, Routes } from 'react-router-dom';
import IndexRoutes from './components/core/IndexRoutes';
import NavBar from './components/core/NavBar';
import Footer from './components/core/Footer';
import { ProductProvider } from './components/products/context/ProductContext.context';
import { CartProvider } from './components/orders/context/CartContext.context';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <ProductProvider>
          <NavBar />
          <Routes>
            <Route exact path="*" element={<IndexRoutes />} />
          </Routes>
          <Footer />
        </ProductProvider>
      </CartProvider>
    </div>
  );
}

export default App;
