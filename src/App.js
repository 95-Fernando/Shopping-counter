import './App.css';
import libroDeCocina from "./assets/libro-de-cocina.jpg"
import React, { useState } from 'react';

function App() {

/* useState, valor inicial 0 y función setCounter para modificar el valor inicial*/ 
  const [counter, setCounter] = useState(0);

  /* Función para incrementar el contador*/ 
  const clickPlus = () => {
    setCounter(counter + 1);
  };

  /* Función para disminuir el contador*/
  const clickMinus = () => {
    if(counter > 0 ) {
      setCounter( counter -1)
    }
  }
  /* Función para simular la compra, solo recarga la página*/
  const buy = () => {
    window.location.reload();
  }
 
  return (
    <div className="App">     
      <div className = "main__container">
        <h1>Shopping Counter</h1>
        <div className="image__container">
          <img src= {libroDeCocina} alt="libro de cocina"/>
        </div>
        <p>El Gran Libro de la Cocina Tradicional</p>
        <p>Precio: <a>$499.00</a></p>
        <div className = "pieces__container">
          <button className = "button__minus" onClick = {clickMinus}>--</button>
          <a className = "pieces">{counter} Piezas </a>
          <button className = "button__plus" onClick = {clickPlus}>+</button>
        </div>
        <button className="button__buy" onClick = {buy} >Comprar</button>
      </div>
    </div>
  );
}

export default App;
