import React, { createContext, useState } from 'react';

export const CartContext = createContext();

function CartProvider ( { children }) {
    const [cart, setCart] = useState([]);

    const isInCart = (id) => cart.some(item => item.id === id);

    const getCartQuantity = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0); 
    };

    const getTotalPrice = () => {
        return cart.reduce((acc, item) => acc + (item.precio * item.quantity), 0).toFixed(2);
    };

    const addToCart = (itemToAdd) => {
        if (isInCart(itemToAdd.id)) {
            setCart(prevCart => 
                prevCart.map(prod => 
                    prod.id === itemToAdd.id 
                    ? { ...prod, quantity: prod.quantity + itemToAdd.quantity } // Suma la nueva cantidad
                    : prod 
                )
            );
        } else {
            setCart(prevCart => [...prevCart, itemToAdd]); 
        }
    };
    
    const increaseQuantity = (itemId) => {
        setCart(prevCart => 
            prevCart.map(item =>
                item.id === itemId && item.quantity < item.stock 
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
        );
    };

    const decreaseQuantity = (itemId) => {
        const item = cart.find(i => i.id === itemId);

        if (item.quantity === 1) {
            removeItem(itemId); 
        } else {
            setCart(prevCart => 
                prevCart.map(i => 
                    i.id === itemId 
                    ? { ...i, quantity: i.quantity - 1 }
                    : i
                )
            );
        }
    };

    const removeItem = (itemId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== itemId));
    };

    const clearCart = () => {
        setCart([]);
    };

    const contextValue = {
        cart,
        addToCart,
        getCartQuantity,
        getTotalPrice, 
        increaseQuantity,
        decreaseQuantity,
        removeItem,
        clearCart, 
        isInCart
    };

    return(
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;