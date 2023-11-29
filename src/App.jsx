import React from "react";
import "./App.css";
import Container from "./Components/Container";
import FilterComponent from "./Components/FilterComponent";

function App(){
  return (
    <div className='App'>
      <h1 className="titulo">Lista de tareas</h1>
      <h4>Proyecto final Argentina Programa</h4>
      <Container/>
      <FilterComponent />
    </div>
  );
}

export default App