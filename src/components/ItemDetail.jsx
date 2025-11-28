import React from 'react';

const ItemDetail = ({ product }) => {
    const { 
        nombre, 
        stock, 
        img, 
        detalle, 
        categoria,
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
            <p className="detail-description" style={{ marginBottom: '15px' }}>
            {detalle || 'No hay descripción disponible.'} 
            </p>

        </div>
    );
};

export default ItemDetail;