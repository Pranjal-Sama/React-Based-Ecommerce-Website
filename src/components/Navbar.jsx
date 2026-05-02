
import { useLocation, Link } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home", icon: "🏠" },
  { to: "/products", label: "Products", icon: "🛍️" },
  { to: "/cart", label: "Cart", icon: "🛒" },
  { to: "/account", label: "Account", icon: "👤" },
];

function Navbar() {
  const location = useLocation();
  return (
    <nav className="navbar">
      {navItems.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className={`navbar__link${location.pathname === item.to ? " navbar__link--active" : ""}`}
        >
          <span className="navbar__icon">{item.icon}</span>
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

export default Navbar;