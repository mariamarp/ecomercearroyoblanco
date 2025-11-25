import React, { useState, useEffect, useContext } from 'react'; 
import { useParams } from 'react-router-dom';
import ItemDetail from "./ItemDetail";
import ItemCount from './ItemCount'; 
import { getProductById } from '../firebase/db'; 
import { CartContext } from '../context/CartProvider'; 

const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams(); 
    const { addToCart } = useContext(CartContext); 


    useEffect(() => {
        setLoading(true);

        const fetchProduct = async () => {
            try {
                const data = await getProductById(itemId);
                setProduct(data);
            } catch (error) {
                console.error("Error al cargar el detalle del producto:", error);
                setProduct(null); 
            } finally {
                setLoading(false);
            }
        };
        
        fetchProduct(); 
    }, [itemId]);


    const handleOnAdd = (quantity) => {

        const itemToAdd = {
            id: product.id,
            nombre: product.nombre,
            precio: product.precio,
            img: product.img,
            quantity: quantity 
        };
        
        addToCart(itemToAdd); 
        
        console.log(`✅ Producto añadido: ${quantity} unidades de ${product.nombre}`);
    };

    if (loading) { 
        return <h2 style={{ textAlign: 'center', margin: '50px' }}>Cargando detalles del producto...</h2>;
    }
    
    if (!product) { 
        return <h2 style={{ textAlign: 'center', margin: '50px', color: 'red' }}>Producto no encontrado.</h2>;
    }


    return (
        <div className="item-detail-container">
            <ItemDetail product={product} /> 
            
            <ItemCount 
                initial={1} 
                stock={product.stock} 
                onAdd={handleOnAdd} 
            />
        </div>
    );
}; 

export default ItemDetailContainer;