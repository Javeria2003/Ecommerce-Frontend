// src/components/Products.jsx
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./Products.css";

function Products({ cart, setCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  const addToCart = (product) => setCart([...cart, product]);

  return (
    <section className="products">
      <h2>Our Products</h2>
      <div className="grid">
        {products.length === 0 ? (
          <p>Loading...</p>
        ) : (
          products.map((product) => (
            <ProductCard key={product._id} product={product} addToCart={addToCart} />
          ))
        )}
      </div>
    </section>
  );
}

export default Products;