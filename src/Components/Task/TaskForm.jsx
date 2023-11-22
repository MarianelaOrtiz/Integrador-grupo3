import React from 'react'

import './TaskForm.css'
const TaskForm = () =>{
    const [isOpenModal, setisOpenModal] = useState(false)

    const handleCloseModal = () => {
        setisOpenModal(false)
    }

    const handleOpenModal = () => {
        setisOpenModal(true)
    }

    const handleSubmitTask = (e) => {
        e.preventDefault()
        const titulo = e.target.titulo.value
        const descripcion = e.target.descripcion.value
        const task = {titulo, descripcion, id:uuidv4()}
        handleCloseModal()
    }
    return(
        <div className='todo-wrapper'>
            <div className='todo-input'>
                    <div className='todo-input-item'> 
                        <label>Titulo</label>
                        <input type="text" id = "titulo" placeholder="Por favor insertar la tarea a realizar"/>
                    </div>
                <div className='todo-input-item'>
                    <label>Descripcion</label>
                    <input type="text" id = "descripcion" placeholder="Por favor inserte una descripcion de la tarea"/>
                </div>
                <div className='todo-input-item'>
                    <button type="button" className='primaryBtn' onClick={handleOpenModal} >Añadir</button>
                </div>
            </div>
        </div>
    )
}