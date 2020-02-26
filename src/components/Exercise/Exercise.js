import React from "react";

import "./Exercise.scss";
const Exercise = ({ ejercicios }) => {
  return (
    <>
      {ejercicios.map(ejercicio => (
        <div className="exercise-container">
          <ul className="exercise-list">
            <h3 className="exercise-name">{ejercicio.exercise}</h3>
            <li className="exercise-itemlist">{ejercicio.repeticiones}</li>
          </ul>
        </div>
      ))}
    </>
  );
};

export default Exercise;
