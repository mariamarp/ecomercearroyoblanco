import React, { useState } from 'react';

const ItemCount = ({ initial = 1, stock, onAdd }) => {

    const [quantity, setQuantity] = useState(initial);

 
    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    };

    return (
        <div className="item-count-container" style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            maxWidth: '200px',
            margin: '20px auto',
            padding: '15px',
            border: '1px solid #ccc',
            borderRadius: '5px'
        }}>
            <div className="controls" style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                <button 
                    onClick={decrement} 
                    disabled={quantity <= 1}
                    style={{ padding: '8px 15px', cursor: 'pointer' }}
                >
                    -
                </button>
                <h4 className="count-display" style={{ margin: '0', alignSelf: 'center' }}>
                    {quantity}
                </h4>
                <button 
                    onClick={increment} 
                    disabled={quantity >= stock}
                    style={{ padding: '8px 15px', cursor: 'pointer' }}
                >
                    +
                </button>
            </div>
            
            <button 
                onClick={() => onAdd(quantity)} 
                disabled={stock === 0}
                style={{ 
                    padding: '10px 20px', 
                    cursor: 'pointer', 
                    backgroundColor: '#5cb85c', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '4px' 
                }}
            >
                {stock > 0 ? `Agregar al Carrito (${quantity})` : 'Sin Stock'}
            </button>
            <p className="stock-info" style={{ fontSize: '0.8rem', color: '#666' }}>
                Stock disponible: {stock} unidades
            </p>
        </div>
    );
};

export default ItemCount;