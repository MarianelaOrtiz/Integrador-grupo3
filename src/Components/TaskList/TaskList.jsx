import React from 'react'
import { TaskItem } from '../TaskItem/TaskItem'

const TaskList = ({tasks}) =>{
    return (
        <div>
            {
                tasks.length == 0
                ? <h2>Aun no has ingresado nada</h2>
                : tasks.map(task =>(
                    <TaskItem task={task} key={task.id} deleteTask={deleteTask}/>
                ))
            }
        </div>
    )
}

export default TaskList

/*import {TaskItem} from './TaskItem'
<TaskItem task={task} key={task.id} deleteTask={deleteTask}/>*/