import React from 'react';

function Carta({ imagen, nombre, calificacion, lorem }) {

    function onClick() {
        console.log('marcado')
    }

    return (
        <div className='carta-container'>
            <div>
                <img className='carta-img' src={imagen} alt="carta-imagen-perfil" />
                <h3 className='carta-nombre'>{nombre}</h3>
            </div>
            <div className='carta-contenido'>
                <p className='carta-lorem'>{lorem}</p>
                <p className='carta-calificacion'>
                    {calificacion}
                </p>
                <button onClick={onClick} className='carta-valoracion'>
                    <i class="fa-solid fa-thumbs-up"></i>
                </button>
                <button onClick={onClick} className='carta-valoracion'>
                    <i class="fa-solid fa-thumbs-down"></i>
                </button>
            </div>
        </div>
    );
}

export default Carta;
