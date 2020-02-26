import React from "react";

import Exercise from "../Exercise/Exercise";


import "./Card.scss";

const Card = ({ item }) => {
  return (
    <div className="card-container">
      <header className="card-header"dia={item.dia} >
        <h2 className="title">{item.dia}</h2>
        </header>
      <section className="card-section">
        <Exercise ejercicios={item.ejercicios}></Exercise>
      </section>
    </div>
  );
};

export default Card;
