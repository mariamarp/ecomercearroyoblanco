import React from 'react';

const ItemDetail = ({ product }) => {
    const { title, price, description, images, stock } = product;
    
    const mainImage = images && images.length > 0 ? images[0] : '';

    return (
        <div className="detail-card">
            <h2 className="detail-title">{title}</h2>
            
            <img 
                src={mainImage} 
                alt={title} 
                className="detail-image" 
                style={{ width: '100%', maxWidth: '300px', height: 'auto', objectFit: 'cover' }}
            />
            
            <p className="detail-price">
                Precio: **${price}**
            </p>
            <p className="detail-description">
                **Descripción:** {description}
            </p>
            <p className="detail-stock" style={{ color: stock > 0 ? 'green' : 'red' }}>
                {stock > 0 ? `¡En Stock! (${stock} unidades)` : 'Agotado'}
            </p>
        </div>
    );
};

export default ItemDetail;