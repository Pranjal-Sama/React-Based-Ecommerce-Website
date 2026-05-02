import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "../styles/main.css";

function Checkout() {
  const { cartItems, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [address, setAddress] = useState("");
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handlePlaceOrder = () => {
    if (!address.trim()) {
      alert("Please enter delivery address.");
      return;
    }
    clearCart();
    setOrderPlaced(true);
    setTimeout(() => navigate("/"), 3000);
  };

  if (orderPlaced) {
    return (
      <div className="checkout-success">
        <h2>✓ Order Placed Successfully!</h2>
        <p>Your order has been confirmed. Redirecting to home...</p>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="checkout-empty">
        <h2>Cart is empty</h2>
        <p>Add items before checkout</p>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <div className="checkout-container">
        <div className="checkout-items">
          <h3>Order Items</h3>
          {cartItems.map((item, i) => (
            <div key={i} className="checkout-item">
              <span>{item.name}</span>
              <span>₹{item.price}</span>
            </div>
          ))}
          <div className="checkout-total">
            <strong>Total: ₹{total}</strong>
          </div>
        </div>
        <div className="checkout-form">
          <h3>Delivery Address</h3>
          <textarea
            placeholder="Enter your full delivery address..."
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <button className="checkout-btn" onClick={handlePlaceOrder}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;