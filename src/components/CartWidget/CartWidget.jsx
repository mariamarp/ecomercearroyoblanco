import React from 'react';
import './CartWidget.css'; 

const CartWidget = () => {
  return (
    <div className="cart-widget" style={{ cursor: "pointer" }}> 
      <span className="cart-icon">🛒</span> 
      
      <span
        className="cart-count"
        style={{ fontSize: "0.7rem" }}
      >
        1
      </span>
    </div>
  );
};

export default CartWidget;