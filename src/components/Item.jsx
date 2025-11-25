import React from 'react';
import { Link } from 'react-router-dom';


const Item = ({ id, nombre, precio, stock, categoria, img }) => {
    return (
        <div className="item-card">
            <img src={img} alt={nombre} className="item-image" />
            <h3>{nombre}</h3>
            <p>Categoría: {categoria}</p>
            <p className="price">${precio.toFixed(2)}</p>
            <p className="stock">Stock disponible: {stock}</p>
            
        </div>
    );
};

export default Item;