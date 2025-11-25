import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../assets/logo.png";
import { getUniqueCategories } from '../firebase/db';

const NavBar = () => {
    const [showCategories, setShowCategories] = useState(false);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true); 

    const toggleCategories = () => setShowCategories(!showCategories);

    useEffect(() => {
        setLoading(true);
        const fetchFirebaseCategories = async () => {
            try {

                const data = await getUniqueCategories(); 
                setCategories(data);
            } catch (error) {
                console.error("Error cargando categorías desde Firebase:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchFirebaseCategories();
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
                        <button className="nav-button" onClick={toggleCategories} disabled={loading}>
                            {loading ? 'Cargando...' : 'Categorías ▾'}
                        </button>

                        {showCategories && (
                            <ul className="dropdown-menu">

                                {categories.map((catName) => { 
                                    const formattedName = catName.charAt(0).toUpperCase() + catName.slice(1);

                                    return (
                                        <li key={catName}>
                                            <Link

                                                to={`/category/${catName}`} 
                                                className="dropdown-link"
                                                onClick={() => setShowCategories(false)}
                                            >
                                                {formattedName}
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