import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import BulkOrders from './pages/BulkOrders';
import Products from './pages/Products';
import About from './pages/About';
import Team from './pages/Team';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="bulk-orders" element={<BulkOrders />} />
            <Route path="premium-teas" element={<Products />} />
            <Route path="about" element={<About />} />
            <Route path="our-team" element={<Team />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
