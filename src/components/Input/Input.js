import React from "react";

import "./Input.scss";

const Input = props => {
  return (
    <div className="input-container">
      <header className="input-header">
        <h3>Insert Routine</h3>
      </header>
      <input
        className="input"
        type="text"
        placeholder="Ingrese ejercicio"
        id="ejercicio"
      ></input>
      <input
        className="input"
        placeholder="Ingrese duración"
        id="duracion"
      ></input>
      <input
        className="input"
        placeholder="Ingrese cantidad de repeticiones"
        id="repeticiones"
      ></input>
    </div>
  );
};

export default Input;
