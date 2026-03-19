import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./Products.css";

function ProductGrid() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;