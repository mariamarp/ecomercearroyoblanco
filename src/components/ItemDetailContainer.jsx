import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from "./ItemDetail";
import ItemCount from './ItemCount'; 

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams(); 

    useEffect(() => {
        setLoading(true);

        fetch(`https://dummyjson.com/products/${itemId}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
            })
            .catch(error => {
                console.error("Error al cargar el detalle del producto:", error);
                setProduct(null); 
            })
            .finally(() => {
                setLoading(false);
            });
            
    }, [itemId]);

    if (loading) {
        return <h2 style={{ textAlign: 'center', margin: '50px' }}>Cargando detalles del producto desde DummyJSON...</h2>;
    }

    if (!product || product.message) {
        return <h2 style={{ textAlign: 'center', margin: '50px', color: 'red' }}>Producto con ID {itemId} no encontrado.</h2>;
    }

    return (
        <div className="item-detail-container">
            <ItemDetail product={product} /> 
            
            <ItemCount initial={1} stock={product.stock} onAdd={(quantity) => console.log(`Agregado al carrito: ${quantity} unidades de ${product.title}`)} />
        </div>
    );
};

export default ItemDetailContainer;