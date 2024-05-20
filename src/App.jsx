// src/App.jsx
import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Bienvenido a luxury shop, la mejor tienda calidad-precio." />
    </div>
  );
}

export default App;
