import React from 'react'
import "./TaskItem.css"

export const TaskItem = ({task, deleteTask}) => {
    return(
        <div>
            <h3>{task.titulo}</h3>
            <p>{task.descripcion}</p>
            <button onClick={() => deleteTask(task.id)}>Finalizar</button>
        </div>
    )
}