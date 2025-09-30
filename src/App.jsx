import { Routes, Route } from 'react-router';
import ProductsList from './pages/ProductsList';
import NotFound from './pages/NotFound';
import Product from './pages/Product';
import Cart from './pages/Cart';
import NavBar from './components/NavBar';
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ProductsList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
