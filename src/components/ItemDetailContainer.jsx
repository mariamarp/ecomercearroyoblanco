import React, { useState, useEffect, useContext } from 'react'; 
import { useParams, Link } from 'react-router-dom';
import ItemDetail from "./ItemDetail";
import ItemCount from './ItemCount'; 
import { getProductById } from '../firebase/db'; 
import { CartContext } from '../context/CartProvider'; 
import "./ItemDetail.css"; 

const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [qtyAdded, setQtyAdded] = useState(0); 
    const { itemId } = useParams(); 
    const { addToCart } = useContext(CartContext); 


    useEffect(() => {
        setLoading(true);

        setQtyAdded(0); 

        const fetchProduct = async () => {
            try {
                const data = await getProductById(itemId);
                
                if (data) {
                    const cleanProduct = {
                        ...data,
                        detalle: data.detalle || data.Detalle || data.descripcion || 'No hay descripción disponible.',
                        precio: Number(data.precio) || 0,
                        stock: Number(data.stock) || 0
                    };
                    setProduct(cleanProduct);
                } else {
                    setProduct(null);
                }
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
            stock: product.stock, 
            quantity: quantity
        };
        
        addToCart(itemToAdd); 
        setQtyAdded(quantity); 
    };


    if (loading) { 
        return <h2 style={{ textAlign: 'center', margin: '50px' }}>Cargando detalles del producto...</h2>;
    }
    
    if (!product) { 
        return <h2 style={{ textAlign: 'center', margin: '50px', color: 'red' }}>Producto no encontrado.</h2>;
    }


    return (
        <div className="item-detail-container"> 
            
            <div className="detail-card">
                <ItemDetail product={product} /> 
            </div>

            <div className="detail-info">
                <h3 className="detail-price">Precio: ${product.precio.toFixed(2)}</h3>

                
                {qtyAdded > 0 ? (
                    <div style={{ padding: '15px', background: '#f0f8ff', border: '1px solid #cceeff', borderRadius: '5px', textAlign: 'center' }}>
                        <p style={{ fontWeight: 'bold', color: '#007bff' }}>
                            ¡Agregaste {qtyAdded} unidad(es) al carrito!
                        </p>
                        <Link 
                            to="/cart" 
                            style={{ display: 'inline-block', padding: '10px 20px', background: '#007bff', color: 'white', textDecoration: 'none', borderRadius: '5px', marginTop: '10px' }}
                        >
                            Terminar Compra
                        </Link>
                    </div>
                ) : (
                    <ItemCount 
                        initial={1} 
                        stock={product.stock} 
                        onAdd={handleOnAdd} 
                    />
                )}
            </div>
        </div>
    );
};

export default ItemDetailContainer;