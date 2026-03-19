import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/cart">Cart ({cartCount})</Link>
    </nav>
  );
}

export default Navbar;