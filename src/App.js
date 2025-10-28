import './App.css';
import { Route, Routes } from 'react-router-dom';
import IndexRoutes from './components/core/IndexRoutes';
import NavBar from './components/core/NavBar';
import Footer from './components/core/Footer';
import { ProductProvider } from './components/products/context/ProductContext.context';

function App() {
  return (
    <div className="App">
      <ProductProvider>
        <NavBar />
        <Routes>
          <Route exact path="*" element={<IndexRoutes />} />
        </Routes>
        <Footer />
      </ProductProvider>
    </div>
  );
}

export default App;
