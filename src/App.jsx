import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/Item/ItemDetailContainer';
import products from './components/data/asyncmock';

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenido a luxury shop, la mejor tienda calidad-precio." products={products} />} />
          <Route path="/category/:idCategory" element={<ItemListContainer products={products} />} />
          <Route path="/item/:idItem" element={<ItemDetailContainer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
