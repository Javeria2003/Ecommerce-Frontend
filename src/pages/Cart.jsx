function Cart({ cart, setCart }) {
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * (item.qty || 1)), 0);

  const incrementQty = (index) => {
    const newCart = [...cart];
    newCart[index].qty = (newCart[index].qty || 1) + 1;
    setCart(newCart);
  };

  const decrementQty = (index) => {
    const newCart = [...cart];
    if ((newCart[index].qty || 1) > 1) newCart[index].qty -= 1;
    setCart(newCart);
  };

  const removeItem = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Your Cart</h1>
      {cart.length === 0 ? <p>Your cart is empty</p> : (
        <div style={{ display: "grid", gap: "15px" }}>
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div style={{ flex: 1 }}>
                <h3>{item.name}</h3>
                <p>${item.price}</p>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <button onClick={() => decrementQty(index)}>-</button>
                  <span>{item.qty || 1}</span>
                  <button onClick={() => incrementQty(index)}>+</button>
                </div>
              </div>
              <button className="remove" onClick={() => removeItem(index)}>Remove</button>
            </div>
          ))}
          <h2>Total: ${totalPrice.toFixed(2)}</h2>
        </div>
      )}
    </div>
  );
}

export default Cart;