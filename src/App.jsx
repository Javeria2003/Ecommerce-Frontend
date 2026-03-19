import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Cart from "./pages/Cart.jsx";
import Navbar from "./components/Navbar.jsx";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((p) => p._id === product._id);
      if (existing) {
        return prev.map((p) =>
          p._id === product._id ? { ...p, qty: (p.qty || 1) + 1 } : p
        );
      } else {
        return [...prev, { ...product, qty: 1 }];
      }
    });
  };

  return (
    <Router>
      <Navbar cartCount={cart.reduce((sum, item) => sum + (item.qty || 1), 0)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
    </Router>
  );
}

export default App;