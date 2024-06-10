import React from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import products from '../data/asyncmock'; 

const ItemDetailContainer = () => {
  const { idItem } = useParams();
  const product = products.find(p => p.id.toString() === idItem);

  return (
    <div className="item-detail-container">
      {product ? <ItemDetail product={product} /> : <p>Producto no encontrado</p>}
    </div>
  );
};

export default ItemDetailContainer;
