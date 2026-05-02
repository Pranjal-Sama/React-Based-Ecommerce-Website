import { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Products({ searchText, user }) {
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");

  let filtered = category === "All" ? products : products.filter(p => p.category === category);
  filtered = filtered.filter(p => p.name.toLowerCase().includes(searchText.toLowerCase()));
  
  if (sort === "price-asc") filtered = [...filtered].sort((a, b) => a.price - b.price);
  else if (sort === "price-desc") filtered = [...filtered].sort((a, b) => b.price - a.price);
  else if (sort === "reviews") filtered = [...filtered].sort((a, b) => (b.reviews || 0) - (a.reviews || 0));

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ marginBottom: "20px" }}>All Products</h1>
      <div style={{ display: "flex", gap: 16, marginBottom: 20, flexWrap: "wrap" }}>
        <select onChange={e => setCategory(e.target.value)} value={category} style={{ padding: "8px 12px", borderRadius: "4px" }}>
          <option value="All">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Fashion">Fashion</option>
          <option value="Accessories">Accessories</option>
        </select>
        <select onChange={e => setSort(e.target.value)} value={sort} style={{ padding: "8px 12px", borderRadius: "4px" }}>
          <option value="">Sort By</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="reviews">Top Reviews</option>
        </select>
      </div>
      <div className="home-section-grid">
        {filtered.map(p => (
          <ProductCard key={p.id} {...p} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Products;
