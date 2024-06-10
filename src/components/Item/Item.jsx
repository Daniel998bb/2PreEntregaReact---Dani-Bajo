
import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
    return (
        <div className="item">
            <img src={item.image} alt={item.name} className="item-image" />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <Link to={`/item/${item.id}`}>Ver detalles</Link>
        </div>
    );
}

export default Item;
