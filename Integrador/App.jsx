import { useState } from "react";
import "./App.css";
import {TodoInput, TodoList } from "./Components";

function App(){

  const [tareas, setTareas] = useState([
    {
      id: 1,
      title: "Estudiar",
      completed: false,
    }
  ])

  return (
    <div className='App'>
      <h1>Trabajo Final Argentina Programa</h1>
      <hr/>
      <TodoInput/>
      <TodoList/>
    </div>
  );
}

export default App


/*<form>
<input type="text" placeholder="Añade una tarea"/>
<button>Añadir</button>
</form>*/
