import { useState } from 'react'
import "./App.css"
import TaskForm from './Components/TaskForm/TaskForm'
import TaskList from './Components/TaskList/TaskList'


const App = () => {
  const [tasks, setTasks] = useState([])  

  const deleteTask = (taskId) => {
    setTasks(task.filter(task => task.id != taskId))
  }

  const addTask = (task) =>{
    setTasks([...tasks, task])
  }

  return (
  <>
    <TaskForm addTask={addTask}/>
    <TaskList task={tasks} deleteTask={deleteTask}/>
  </>
  )
}

export default App


/*<TaskForm addTask={addTask}/>
<TaskList tasks={tasks} deleteTask={deleteTask}
import TaskList from './Components/TaskList/TaskList'
import TaskForm from './Components/TaskForm'*/