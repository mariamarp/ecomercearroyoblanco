import React, { useState } from 'react'; 
import toast from 'react-hot-toast';

const MIN_COUNT = 1; 

const ItemCount = ({ stock, initial, onAdd }) => {
    const numericStock = Number(stock) || 50; 

    const [count, setCount] = useState(initial);

    const handleIncrement = () => {
        if (count < numericStock) { 
            setCount(count + 1);
        } else {
            console.warn(`Límite de stock (${numericStock}) alcanzado.`);
        }
    };

    const handleDecrement = () => {
        if (count > MIN_COUNT) {
            setCount(count - 1);
        }
    };

    const handleAddToCart = () => {
        toast('Se agregó al carrito');
        
        if (numericStock > 0 && count >= MIN_COUNT && count <= numericStock) {
            onAdd(count);
        } else if (numericStock === 0) {
            console.error("No hay stock disponible.");
        }
    };

    const isAddDisabled = numericStock === 0 || count > numericStock || count < MIN_COUNT;

    return (
        <div className="item-count-wrapper" style={{ marginTop: '20px', padding: '15px', border: '1px solid #ddd', borderRadius: '8px', maxWidth: '300px' }}>
            
            <div className="counter-controls" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '15px' }}>
                <button 
                    onClick={handleDecrement} 
                    disabled={count === MIN_COUNT} 
                    style={{ padding: '8px 15px', fontSize: '1.2rem', cursor: 'pointer', border: '1px solid #ccc', backgroundColor: '#f0f0f0' }}
                >
                    -
                </button>
                
                <span style={{ fontSize: '1.5rem', margin: '0 20px', fontWeight: 'bold' }}>
                    {count}
                </span>
                
                <button 
                    onClick={handleIncrement} 
                    disabled={count === numericStock || numericStock === 0} 
                    style={{ padding: '8px 15px', fontSize: '1.2rem', cursor: 'pointer', border: '1px solid #ccc', backgroundColor: '#f0f0f0' }}
                >
                    +
                </button>
            </div>

            {numericStock > 0 && (
                <p style={{ textAlign: 'center', fontSize: '0.9rem', color: '#666' }}>
                    Stock disponible: {numericStock} unidades
                </p>
            )}

            {numericStock === 0 && (
                <p style={{ textAlign: 'center', fontSize: '1rem', color: 'red', fontWeight: 'bold' }}>
                    ¡PRODUCTO SIN STOCK!
                </p>
            )}

            <button 
                onClick={handleAddToCart}
                disabled={isAddDisabled} 
                style={{ 
                    width: '100%', 
                    padding: '10px', 
                    fontSize: '1rem', 
                    cursor: isAddDisabled ? 'not-allowed' : 'pointer', 
                    backgroundColor: isAddDisabled ? '#ccc' : '#4CAF50', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '5px',
                    marginTop: '10px'
                }}
            >
                {numericStock === 0 ? "Agotado" : "Agregar al Carrito"}
            </button>
        </div>
    );
};

export default ItemCount;