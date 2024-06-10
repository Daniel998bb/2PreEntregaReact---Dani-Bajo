import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './ItemListContainer.css'; 

const ItemListContainer = ({ greeting, products }) => {
  const { idCategory } = useParams(); // Obtiene el parámetro de la categoría desde la URL

  // Filtra los productos basados en la categoría
  const filteredProducts = idCategory 
    ? products.filter(product => product.type === idCategory) 
    : products;

  return (
    <div className="item-list-container">
      <div className="greeting-container">
        <h1 className="greeting">{greeting}</h1>
      </div>
      <ul className="product-list">
        {filteredProducts.map(product => (
          <li key={product.id} className="product-item">
            <h2 className="product-name">{product.name}</h2>
            <p className="product-description">{product.description}</p>
            <img src={product.image} alt={product.name} className="product-image" />
            <Link to={`/item/${product.id}`} className="see-more-link">Mostrar precio</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListContainer;
