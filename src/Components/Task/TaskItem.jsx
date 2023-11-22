import React from 'react'
import "./TaskItem.css";

const Task = ({task, deleteTask}) => {
    return(
        <div>
            <h3>{task.titulo}</h3>
            <p>{task.descripcion}</p>
            <button onClick={() => deleteTask(task.id)}>Finalizar</button>
        </div>
    )
}

export default Task

/*
 <div className="container">
            <div className="division1">
                <span className="span"></span>
                    <h2>
                        {propiedades.titulo}
                    </h2>
                    <p>
                        {propiedades.descripcion}
                    </p>
            </div>
         <img className="delete" src="/delete-icon.svg" alt="Delete Icon"/>
        </div>
*/