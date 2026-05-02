import { useParams, Link } from "react-router-dom";
import { useContext, useState } from "react";
import products from "../data/products";
import { CartContext } from "../context/CartContext";
import "../styles/main.css";

function ProductDetails({ user }) {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));
  const { addToCart } = useContext(CartContext);
  const [qty, setQty] = useState(1);

  if (!product) return <div className="detail-error">❌ Product not found</div>;

  const handleAddToCart = () => {
    if (!user) {
      alert("Please login to add items to cart.");
      return;
    }
    addToCart({ ...product, qty });
    alert("✓ Added to cart!");
  };

  const details = [
    "Premium quality product with excellent build",
    "Long-lasting performance guaranteed",
    "Best value for money in its category",
    "Certified authentic from authorized reseller",
    "Hassle-free returns within 30 days",
    "Genuine warranty included"
  ];

  return (
    <div className="detail-page">
      <Link to="/products" className="detail-back">← Back to Products</Link>
      <div className="detail-container">
        <div className="detail-img">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="detail-info">
          <h1>{product.name}</h1>
          <p className="detail-cat">{product.category}</p>
          <div style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
            <span style={{ color: "#ff9900" }}>⭐ {product.reviews || 4.5}</span>
            <span style={{ color: "#666" }}>(1,234 reviews)</span>
          </div>
          <p className="detail-price">₹{product.price.toLocaleString('en-IN')}</p>
          <ul className="detail-bullets">
            {details.map((d, i) => <li key={i}>{d}</li>)}
          </ul>
          <div className="detail-qty">
            <label>Quantity:</label>
            <input type="number" min="1" max="10" value={qty} onChange={(e) => setQty(Math.max(1, parseInt(e.target.value) || 1))} />
          </div>
          <button className="detail-add" onClick={handleAddToCart}>
            🛒 Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;