import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ id, title, price, description, thumbnail }) => {
    return (
        <div className="item-card">
            <img src={thumbnail} alt={title} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
            <h3>{title}</h3> 
            <p>Precio: ${price}</p>
            <p className="description">{description.substring(0, 50)}...</p> 
            
            <Link to={`/item/${id}`} className="detail-button">
                Ver Detalle
            </Link>
        </div>
    );
};

export default Item;