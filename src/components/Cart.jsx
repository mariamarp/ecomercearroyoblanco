import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartProvider'; 
import CheckoutForm from './CheckoutForm'; 

const Cart = () => {
    const { 
        cart, 
        removeItem, 
        increaseQuantity, 
        decreaseQuantity, 
        getTotalPrice 
    } = useContext(CartContext); 
    
    const [isCheckout, setIsCheckout] = useState(false);
    

    if (cart.length === 0 && !isCheckout) {
        return (
            <div style={{ padding: '50px', textAlign: 'center' }}>
                <h2>🛒 Tu carrito está vacío</h2>
                <p>Agrega productos para continuar comprando.</p>
            </div>
        );
    }
    

    const CartItems = () => (
        <>
            {cart.map(item => (
                <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eee', padding: '15px 0' }}>
                    
                    <div style={{ flex: 3 }}>
                        <p style={{ fontWeight: 'bold' }}>{item.nombre}</p>
                        <p style={{ fontSize: '0.9em', color: '#666' }}>Precio unitario: ${item.precio.toFixed(2)}</p>
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', flex: 1, minWidth: '120px' }}>
                        <button 
                            onClick={() => decreaseQuantity(item.id)} 
                            disabled={item.quantity <= 1} 
                            style={{ padding: '5px', background: '#f0f0f0', cursor: 'pointer' }}>
                            -
                        </button>
                        <span style={{ margin: '0 10px' }}>{item.quantity}</span>
                        <button 
                            onClick={() => increaseQuantity(item.id)} 
                            disabled={item.quantity >= item.stock} 
                            style={{ padding: '5px', background: '#f0f0f0', cursor: 'pointer' }}>
                            +
                        </button>
                    </div>
                    

                    <p style={{ flex: 1, textAlign: 'right', fontWeight: 'bold' }}>${(item.precio * item.quantity).toFixed(2)}</p>
                    

                    <button onClick={() => removeItem(item.id)} style={{ marginLeft: '20px', background: 'none', border: 'none', color: 'red', cursor: 'pointer' }}>
                        🗑️
                    </button>
                </div>
            ))}
        </>
    );

    return (
        <div style={{ padding: '20px' }}>
            {isCheckout ? (
                <CheckoutForm onCancel={() => setIsCheckout(false)} /> 
            ) : (
                <div style={{ maxWidth: '800px', margin: '20px auto' }}>
                    <h2 style={{ textAlign: 'center' }}>Resumen del Carrito</h2>
                    
                    <CartItems />
                    
                    <div style={{ textAlign: 'right', marginTop: '30px' }}>
                        <div style={{ fontSize: '1.5em', marginBottom: '20px' }}>
                            Total Final: **${getTotalPrice()}**
                        </div>
                        
                        <button 
                            onClick={() => setIsCheckout(true)} 
                            style={{ padding: '10px 20px', background: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                            Finalizar Compra
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;