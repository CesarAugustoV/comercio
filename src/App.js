import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mi Tienda</h1>
        <p>Bienvenido a mi tienda online</p>
        <div className="product-list">
          <div className="product">
            <h2>Producto 1</h2>
            <p>Descripción del producto 1</p>
          </div>
          <div className="product">
            <h2>Producto 2</h2>
            <p>Descripción del producto 2</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
