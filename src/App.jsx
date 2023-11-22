import React from 'react'
import { TaskForm, TaskList } from './Components/Task'



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
    <TaskForm addTask={addTask} />
    <TaskList tasks={tasks} deleteTask = {deleteTask} />
  </>
  )
}

export default App