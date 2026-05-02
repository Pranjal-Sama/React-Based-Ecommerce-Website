import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function ProductCard({ id, name, category, price, image, user, reviews }) {
  const { addToCart } = useContext(CartContext);
  const [qty, setQty] = useState(1);
  const [showNotif, setShowNotif] = useState(false);

  const handleAdd = () => {
    if (!user) {
      alert("Please login to add items to cart.");
      return;
    }
    addToCart({ id, name, price, image, qty });
    setShowNotif(true);
    setTimeout(() => setShowNotif(false), 2000);
    setQty(1);
  };

  return (
    <div className="product-card">
      <Link to={`/products/${id}`}>
        <img src={image} alt={name} className="product-card__img" />
      </Link>
      <Link to={`/products/${id}`} className="product-card__name">
        {name}
      </Link>
      <div className="product-card__meta">
        <span style={{ fontSize: "0.9rem" }}>⭐ {reviews || 4.5}</span>
        <span className="product-card__price">₹{price}</span>
      </div>
      <div className="product-card__qty-controls">
        <button onClick={() => setQty(Math.max(1, qty - 1))} className="qty-btn">−</button>
        <span className="qty-display">{qty}</span>
        <button onClick={() => setQty(Math.min(3, qty + 1))} className="qty-btn">+</button>
      </div>
      <button className="product-card__btn" onClick={handleAdd}>
        Add to Cart
      </button>
      {showNotif && <div className="toast-notif">✓ Added to cart!</div>}
    </div>
  );
}

export default ProductCard;