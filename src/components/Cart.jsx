
import React, { useContext } from 'react';
import { CartContext } from '../context/CartProvider';

const Cart = () => {
    const { cart, removeItem } = useContext(CartContext); 
    

    
    return (
        <div>
            <h2>Tu Carrito</h2>
            {cart.map(item => (
                <div key={item.id} className="cart-item">
                    <p>{item.nombre} - Cantidad: {item.quantity}</p>
                    <p>Precio: ${item.precio * item.quantity}</p>
                    
                    <button onClick={() => removeItem(item.id)}>
                        Eliminar
                    </button>
                </div>
            ))}
            

        </div>
    );
};