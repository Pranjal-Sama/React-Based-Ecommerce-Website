import { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import HeroSlider from "../components/HeroSlider";

function Home({ user }) {
  const [selectedCategory, setSelectedCategory] = useState("Featured");

  const categories = [
    { name: "Featured", label: "Featured Products" },
    { name: "BestSeller", label: "Best Seller" },
    { name: "Premium", label: "Premium Picks" },
    { name: "GiftIdea", label: "Gift Ideas" }
  ];

  // Get featured product for current category
  const categoryProducts = products.filter(p => p.section === selectedCategory);
  const featuredProduct = categoryProducts.length > 0 ? categoryProducts[Math.floor(Math.random() * categoryProducts.length)] : null;

  return (
    <div style={{ padding: "20px" }}>
      <HeroSlider />
      
      {/* Category Showcase */}
      <div className="category-showcase">
        <div className="category-list">
          {categories.map(cat => (
            <div
              key={cat.name}
              className={`category-item ${selectedCategory === cat.name ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.name)}
            >
              {cat.label}
            </div>
          ))}
        </div>
        
        {featuredProduct && (
          <div className="product-ad-container">
            <img 
              src={featuredProduct.image} 
              alt={featuredProduct.name}
              className="product-ad-image"
            />
            <div className="product-ad-content">
              <h3 className="product-ad-title">{featuredProduct.name}</h3>
              <div className="product-ad-price">₹{featuredProduct.price.toLocaleString('en-IN')}</div>
              <div className="product-ad-rating">⭐ {featuredProduct.reviews} | {featuredProduct.category}</div>
              <button className="product-ad-btn">Read More</button>
            </div>
          </div>
        )}
      </div>

      <h2 style={{ marginBottom: "12px", marginTop: 0, fontSize: "1.1rem" }}>{categories.find(c => c.name === selectedCategory)?.label || "Featured Products"}</h2>
      <div className="home-section-grid">
        {products.filter(p => p.section === selectedCategory).map(p => (
          <ProductCard key={p.id} {...p} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Home;