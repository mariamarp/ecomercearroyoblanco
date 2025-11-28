import React, { useState, useEffect, useRef } from "react"; 
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../assets/logo.png";
import { getUniqueCategories } from '../firebase/db';
import CartWidget from './CartWidget';

const NavBar = () => {
    const [showCategories, setShowCategories] = useState(false);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true); 
    
    const dropdownRef = useRef(null);

const toggleCategories = (e) => {
    e.stopPropagation();
    setShowCategories((prev) => {
        console.log("NavBar: toggleCategories, showCategories de", prev, "a", !prev); 
        return !prev;
    });
}

useEffect(() => {
    setLoading(true);
    console.log("NavBar: Iniciando carga de categorías...");
    const fetchFirebaseCategories = async () => {
        try {
            const data = await getUniqueCategories();
            console.log("NavBar: Categorías obtenidas:", data); 
            setCategories(data);
        } catch (error) {
            console.error("NavBar: Error cargando categorías desde Firebase:", error);
        } finally {
            setLoading(false);
            console.log("NavBar: Carga de categorías finalizada. Loading:", false);
        }
    };

    fetchFirebaseCategories();
}, []);

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
    
    const handleLinkClick = () => {
        setShowCategories(false); 
    };


    return (
        <nav className="nav-bar">
            <div className="nav-container">
                <Link to="/" className="brand-link">
                    <img src={logo} alt="Logo" className="brand-logo" width="40" />
                    <span className="brand-name"></span>
                </Link>

                <ul className="nav-list">
                    <li 
                        className="nav-item" 
                        ref={dropdownRef} 
                    >
                        <button className="nav-button" onClick={toggleCategories} disabled={loading}>
                            {loading ? 'Cargando...' : 'Categorías ▾'}
                        </button>

                        {showCategories && (
                            <ul className="dropdown-menu" style={{ display: 'block' }}> 
                                {categories.map((catName) => { 
                                    const formattedName = catName.charAt(0).toUpperCase() + catName.slice(1);

                                    return (
                                        <li key={catName}>
                                            <Link
                                                to={`/category/${catName}`} 
                                                className="dropdown-link"
                                                onClick={handleLinkClick} 
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
                            <CartWidget />
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;