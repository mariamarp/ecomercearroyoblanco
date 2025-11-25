
import React, { createContext, useState } from 'react'; 

export const CartContext = createContext();

function CartProvider ( { children }) {
    const [cart, setCart] = useState([]);
    
    const contextValue = {

    };

    return(
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
}


export default CartProvider;