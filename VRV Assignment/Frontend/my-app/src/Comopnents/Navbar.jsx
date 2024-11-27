import React, { useContext ,useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineLogin, AiOutlineUserAdd } from "react-icons/ai";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { AuthContext } from "../context/AuthProvider";
import "../CSS/Navbar.css"; // Import the CSS file

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Check for admin privileges
  const isAdmin = user && (user.email === "admin@gmail.com" || user?.pass === "1234");

  const handleLogout = () => {
    logout()
      .then(() => console.log("Logged out"))
      .catch((error) => console.error(error));
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Ladoo
      </Link>

      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>

      <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/combos">Combos</Link>
          </li>
          <li>
            <Link to="/customize">Customize</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to='/reward'>Rewards</Link>
          </li>
          {isAdmin && (
            <li>
              <Link to="/admin/dashboard">Sell</Link>
            </li>
          )}
        </ul>
        {user ? (
          <button onClick={handleLogout} className="btn-signup">
            <FaSignOutAlt /> Logout
          </button>
        ) : (
          <>
            <Link to="/login" className="btn-signup">
              <AiOutlineLogin /> Login
            </Link>
            <Link to="/register" className="btn-signup">
              <AiOutlineUserAdd /> Register
            </Link>
          </>
        )}
      </div>
      {user && (
        <div className="navbar-user">
          <FaUserCircle style={{ marginRight: "5px" }} />
          <span>{user.email}</span>
        </div>
      )}
    </nav>
  );
}
