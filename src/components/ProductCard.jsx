import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("Clicked:", product); // DEBUG
    navigate(`/product/${product._id}`);
  };

  return (
    <div
      className="card"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <img src={product.image} alt={product.name} />
      <h4 className="product-name">{product.name}</h4>
    </div>
  );
}

export default ProductCard;