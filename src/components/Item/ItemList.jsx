import React from 'react';
import './ItemStyles.css'; 
import products from '../data/asyncmock';

const ItemList = () => {
  return (
    <div className="item-list">
      {products.map(item => (
        <div key={item.id} className={`item ${item.type}`}>
          <img src={item.image} alt={item.name} />
          <p className="item-name">{item.name}</p> 
        </div>
      ))}
    </div>
  );
};

export default ItemList;
