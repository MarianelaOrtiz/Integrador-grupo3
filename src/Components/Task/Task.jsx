import React from 'react'
import "./Task.css";

const Task = (propiedades) => {
    return(
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
    )
}

export default Task