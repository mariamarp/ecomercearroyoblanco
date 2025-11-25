import React from 'react';

const ItemDetail = ({ product }) => {
    const { 
        nombre, 
        precio, 
        stock, 
        img, 
        descripcion, 
        categoria 
    } = product;
    
    const mainImage = img; 

    return (
        <div className="detail-card">
            <h2 className="detail-title">{nombre}</h2> 
            

            <img 
                src={mainImage} 
                alt={nombre} 
                className="detail-image" 
                style={{ width: '100%', maxWidth: '300px', height: 'auto', objectFit: 'cover' }}
            />
            
            <p className="detail-price">
                Precio: **${precio}**
            </p>
            <p className="detail-description">
                **Descripción:** {descripcion || 'No hay descripción disponible.'} 
            </p>
            <p className="detail-stock" style={{ color: stock > 0 ? 'green' : 'red' }}>
                {stock > 0 ? `¡En Stock! (${stock} unidades)` : 'Agotado'}
            </p>
            <p className="detail-category">
                Categoría: {categoria}
            </p>
        </div>
    );
};

export default ItemDetail;