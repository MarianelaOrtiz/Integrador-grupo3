import React from 'react'
import Task from './Components/Task/Task'
import TodoList  from './Components/Task/ToDoList'

const App = () => {
  return (
  /*Creacion de los formatos para rellenar*/
  <div className='todo-wrapper'>
  <div className='todo-input'>
    <div className='todo-input-item'> 
      <label>Titulo</label>
      <input type="text" placeholder="Por favor insertar la tarea a realizar"/>
    </div>
    <div className='todo-input-item'>
      <label>Descripcion</label>
      <input type="text" placeholder="Por favor inserte una descripcion de la tarea"/>
    </div>
    <div className='todo-input-item'>
      <button type="button" className='primaryBtn'>Añadir</button>
    </div>
  </div>
  <TodoList/>
  <div>
    <Task titulo='Sopita' descripcion='Quesito'/>
  </div>

  </div>
  )
}

export default App
