import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductDetail({ addToCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`http://192.168.43.229:3000/products/${id}`);
        if (!res.ok) throw new Error("Network response not ok");
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error(err);
        setError(true);
      }
    }
    fetchProduct();
  }, [id]);

  if (error) return <p style={{ padding: "20px" }}>Failed to load product.</p>;
  if (!product) return <p style={{ padding: "20px" }}>Loading...</p>;

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <div>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <h3>${product.price}</h3>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductDetail;