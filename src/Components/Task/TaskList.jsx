import React from 'react'
import TaskItem from '../TaskItem'
const TaskList = ({tasks}) =>{
    return (
        <div>
            {
                tasks.lenght == 0
                ? <h2>Aun no has ingresado nada</h2>
                : tasks.map(task =>(
                    <TaskItem task={task} key={task.id} deleteTask={deleteTask}/>
                ))
            }
        </div>
    )
}