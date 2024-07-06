// ItemList.js
import React from 'react';
import Item from './Item'; // Importa el componente Item


const ItemList = ({ products }) => {
  return (
    <div className="item-list">
      {products.map(product => (
        <Item key={product.id} item={product} />
      ))}
    </div>
  );
};

export default ItemList;
