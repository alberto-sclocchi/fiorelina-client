import './App.css';
import { Route, Routes } from 'react-router-dom';
import IndexRoutes from './components/core/IndexRoutes';
import NavBar from './components/core/NavBar';
import Footer from './components/core/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="*" element={<IndexRoutes />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
