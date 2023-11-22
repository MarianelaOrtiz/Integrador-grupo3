import React from 'react'

const Task = (propiedades) => {
    return(
        <div>
            <h3>{propiedades.titulo}</h3>
            <p>{propiedades.descripcion}</p>
        </div>
    )
}

export default Task