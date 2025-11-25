import React, { useContext } from 'react'; 
import './CartWidget.css'; 

import { CartContext } from '../context/CartProvider'; 

const CartWidget = () => {
    
    const { getCartQuantity } = useContext(CartContext);
    
    const itemCount = getCartQuantity();

    const showCount = itemCount > 0; 

    return (
        <div className="cart-widget" style={{ cursor: "pointer", position: "relative" }}> 
            <span className="cart-icon">🛒</span> 

            {showCount && (
                <span
                    className="cart-count"
                    style={{ 
                        fontSize: "0.8rem", 
                        fontWeight: "bold", 
                        padding: "2px 6px", 
                        backgroundColor: "red", 
                        color: "white", 
                        borderRadius: "50%", 
                        position: "absolute", 
                        top: "-5px", 
                        right: "-10px" 
                    }}
                >
                    {itemCount} 
                </span>
            )}
        </div>
    );
};

export default CartWidget;