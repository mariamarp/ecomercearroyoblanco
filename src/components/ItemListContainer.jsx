import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import { getProductsByCategory, getProducts } from '../firebase/db'; 
import ItemList from './ItemList'; 

const ItemListContainer = () => { 
    const { categoryId } = useParams(); 
    
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true); 
    
    useEffect(() => {
        setLoading(true);

        const fetchProducts = async () => {
            let fetchedProducts;
            
            try {
                if (categoryId) { 
                    fetchedProducts = await getProductsByCategory(categoryId);
                } else {
                    fetchedProducts = await getProducts();
                }
                
                setProductos(fetchedProducts);
            } catch (error) {
                console.error("Error al obtener productos:", error);
                setProductos([]); 
            } finally {
                setLoading(false); 
            }
        };

        fetchProducts();
        
    }, [categoryId]); 


    if (loading) {
        return <h2 className="text-center mt-5">Cargando productos...</h2>;
    }

    return (
        <div className="container my-5">
            <h1>{categoryId ? `Categoría: ${categoryId}` : 'Todos los productos'}</h1>

            <ItemList items={productos} />
        </div>
    );
};

export default ItemListContainer;