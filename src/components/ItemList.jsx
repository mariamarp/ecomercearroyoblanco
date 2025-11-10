import React from 'react';
import Item from './Item'; 
import './ItemList.css';


const ItemList = ({ products }) => {
  if (!products || products.length === 0) {
    return <p style={{ textAlign: 'center', marginTop: '50px' }}>No hay productos para mostrar.</p>;
  }

  return (
    <div className="item-list">
      {products.map(prod => (
        <Item key={prod.id} {...prod} />
      ))}
    </div>
  );
};


export default ItemList;