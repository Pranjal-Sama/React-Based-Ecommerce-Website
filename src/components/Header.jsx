
import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/main.css";

function Header({ searchText, setSearchText, user, onLogin, onLogout, darkMode, onDarkMode }) {
  const { cartItems } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    onLogin(email, password);
    setShowModal(false);
    setEmail("");
    setPassword("");
  };

  return (
    <header className="header">
      <div className="header__logo">
        <span role="img" aria-label="cart" className="header__icon">
          🛒
          {cartItems.length > 0 && <span className="cart-badge">{cartItems.length}</span>}
        </span>
        <span className="header__brand">Cartify</span>
        <span className="header__tagline">Your Smart Shopping Partner</span>
      </div>
      <input
        className="header__search"
        type="text"
        placeholder="Search products..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <div className="header__auth">
        <button className="header__dark-btn" onClick={onDarkMode} title="Toggle Dark Mode">
          {darkMode ? "☀️" : "🌙"}
        </button>
        {user ? (
          <>
            <span className="header__user">Hi, {user.name || user.email}</span>
            <button className="header__btn" onClick={onLogout}>Logout</button>
          </>
        ) : (
          <button className="header__btn" onClick={() => setShowModal(true)}>
            Login / Register
          </button>
        )}
      </div>
      {showModal && (
        <div className="modal__backdrop" onClick={() => setShowModal(false)}>
          <form
            className="modal__content"
            onClick={(e) => e.stopPropagation()}
            onSubmit={handleLogin}
          >
            <h3>Login / Register</h3>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Continue</button>
            <button type="button" onClick={() => setShowModal(false)}>
              Cancel
            </button>
          </form>
        </div>
      )}
    </header>
  );
}

export default Header;
