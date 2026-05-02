import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    const existing = cartItems.find((i) => i.id === item.id);
    if (existing) {
      setCartItems(cartItems.map((i) =>
        i.id === item.id ? { ...i, qty: i.qty + item.qty } : i
      ));
    } else {
      setCartItems([...cartItems, { ...item, qty: item.qty || 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((i) => i.id !== id));
  };

  const updateCartItemQty = (id, delta) => {
    setCartItems(cartItems.flatMap((item) => {
      if (item.id !== id) return item;
      const nextQty = item.qty + delta;
      return nextQty > 0 ? { ...item, qty: nextQty } : [];
    }));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateCartItemQty, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
