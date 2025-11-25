import React, { createContext, useState } from 'react';

export const CartContext = createContext();

function CartProvider ( { children }) {
    const [cart, setCart] = useState([]);

    const isInCart = (id) => cart.some(item => item.id === id);

    const getCartQuantity = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0); 
    };

    const addToCart = (itemToAdd) => {
        if (isInCart(itemToAdd.id)) {
            setCart(prevCart => 
                prevCart.map(prod => 
                    prod.id === itemToAdd.id 
                    ? { ...prod, quantity: prod.quantity + itemToAdd.quantity } 
                    : prod 
                )
            );

        } else {
            setCart(prevCart => [...prevCart, itemToAdd]); 
        }
        console.log(`Producto añadido al carrito: ${itemToAdd.nombre || itemToAdd.id}`);
    };
    

    const removeItem = (itemId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== itemId));
        console.log(`Producto con ID ${itemId} eliminado del carrito.`);
    };


    const contextValue = {
        cart,
        addToCart,
        getCartQuantity,
        isInCart,
        removeItem 
    };

    return(
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;