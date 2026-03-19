import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("http://192.168.43.229:3000/products");
        if (!res.ok) throw new Error("Network response not ok");
        const data = await res.json();
        if (Array.isArray(data)) setProducts(data);
        else setProducts([]);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (loading) return <p style={{ padding: "20px" }}>Loading products...</p>;
  if (error) return <p style={{ padding: "20px" }}>Failed to load products.</p>;
  if (!products || products.length === 0) return <p style={{ padding: "20px" }}>No products available.</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Products</h1>
      <div className="product-grid">
        {products.map(p => (
          <div key={p._id} className="product-card">
            <img src={p.image} alt={p.name} />
            <h3>{p.name}</h3>
            <p>${p.price}</p>
            <Link to={`/product/${p._id}`}>
              <button>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;