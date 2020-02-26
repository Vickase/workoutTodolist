import React from "react";

import Form from "./components/Form/Form";

import Card from "./components/Card/Card";

import "./App.css";

function App() {
  const rutina = [
    {
      dia: "Lunes",
      ejercicios: [
        {
          exercise: "Abdominales",
          repeticiones: "15x4"
        },
        {
          exercise: "Barbell Bench Press",
          repeticiones: "12x5"
        },
        {
          exercise: "Floor Press",
          repeticiones: "10x4"
        },
        {
          exercise: "Biceps  Curl",
          repeticiones: "8x3"
        }
      ]
    },
    {
      dia: "Martes",
      ejercicios: [
        {
          exercise: "Burpees",
          repeticiones: "20x3"
        },
        {
          exercise: "Abdominales",
          repeticiones: "14x3"
        },
        {
          exercise: "Push-ups",
          repeticiones: "10x3"
        },
        {
          exercise: "Leg Press",
          repeticiones: "8x3"
        }
      ]
    },
    {
      dia: "Miércoles",
      ejercicios: [
        {
          exercise: "Burpees",
          repeticiones: "20x3"
        },
        {
          exercise: "Abdominales",
          repeticiones: "14x3"
        },
        { exercise: "Flexiones de brazos", repeticiones: "20x2" }
        ,
        {
          exercise: "Crunches",
          repeticiones: "10x2"
        },
        {
          exercise: "Squats",
          repeticiones: "15x3"
        }
      ]
    }
  ];

  return (
    <div className="todolist-container">
      <Form></Form>
      <section className="list-section"></section>
      {rutina.map((item,index) => (
        <Card key ={`exercise ${index}`}item={item} dia={item.dia} ejercicio={item.ejercicios.exercise}></Card>
      ))}
    </div>
  );
}

export default App;
