import React from 'react';
import './ItemDetail.css';


const ItemDetail = ({ product }) => {
  return (
    <div className="item-detail">
      <h1 className="item-name">{product.name}</h1>
      <img src={product.image} alt={product.name} className="item-image" />
      <p className="item-description">{product.description}</p>
      <p className="item-price">Precio: ${product.price}</p>
    </div>
  );
};

export default ItemDetail;
