import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Heritage from './pages/Heritage';
import Products from './pages/Products';
import About from './pages/About';

<<<<<<< HEAD
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="heritage" element={<Heritage />} />
          <Route path="premium-teas" element={<Products />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
=======
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="heritage" element={<Heritage />} />
            <Route path="premium-teas" element={<Products />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
>>>>>>> main
  );
}

export default App;
