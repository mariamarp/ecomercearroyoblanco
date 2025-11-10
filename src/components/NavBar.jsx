import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../assets/logo.png";

const NavBar = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [categories, setCategories] = useState([]);

  const toggleCategories = () => setShowCategories(!showCategories);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error cargando categorías:", error));
  }, []);

  return (
    <nav className="nav-bar">
      <div className="nav-container">
        <Link to="/" className="brand-link">
          <img src={logo} alt="Logo" className="brand-logo" width="40" />
          <span className="brand-name">Arroyo Blanco</span>
        </Link>

        <ul className="nav-list">
          <li className="nav-item">
            <button className="nav-button" onClick={toggleCategories}>
              Categorías ▾
            </button>

            {showCategories && (
              <ul className="dropdown-menu">
                {categories.map((cat) => {
                  // Soporte para ambas estructuras: string u objeto
                  const slug = typeof cat === "string" ? cat : cat.slug;
                  const name = typeof cat === "string" ? cat : cat.name;

                  return (
                    <li key={slug}>
                      <Link
                        to={`/category/${slug}`}
                        className="dropdown-link"
                        onClick={() => setShowCategories(false)}
                      >
                        {name.charAt(0).toUpperCase() + name.slice(1)}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </li>

          <li className="nav-item">
            <Link to="/cart" className="nav-link">
              🛒 Carrito
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
