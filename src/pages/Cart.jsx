import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../styles/main.css";

function Cart() {
  const { cartItems, removeFromCart, updateCartItemQty } = useContext(CartContext);
  const total = cartItems.reduce((sum, item) => sum + (item.price * (item.qty || 1)), 0);

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your cart is empty</h2>
        <p>Add items from the shop</p>
        <Link to="/products" className="empty-cart-link">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-img" />
            <div className="cart-item-info">
              <h3>{item.name}</h3>
              <p>{item.category}</p>
              <div className="product-card__qty-controls">
                <button
                  className="qty-btn"
                  onClick={() => updateCartItemQty(item.id, -1)}
                >
                  −
                </button>
                <span className="qty-display">{item.qty || 1}</span>
                <button
                  className="qty-btn"
                  onClick={() => updateCartItemQty(item.id, 1)}
                >
                  +
                </button>
              </div>
              <p className="cart-item-price">₹{item.price} x {item.qty || 1}</p>
            </div>
            <button
              className="cart-item-remove"
              onClick={() => removeFromCart(item.id)}
            >
              ✕ Remove
            </button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h3>Order Summary</h3>
        <p>Items: {cartItems.length}</p>
        <p className="cart-total">Total: ₹{total}</p>
        <Link to="/checkout" className="cart-checkout-btn">Proceed to Checkout</Link>
      </div>
    </div>
  );
}

export default Cart;