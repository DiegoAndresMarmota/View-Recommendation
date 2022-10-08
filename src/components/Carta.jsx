import React from 'react';

function Carta({imagen, nombre, calificacion, lorem}) {
    return (
        <div className='carta-container'>
            <div>
                <img className='carta-img' src={imagen} alt="carta-imagen-perfil" />
                <h3 className='carta-nombre'>{nombre}</h3>
                <p className='carta-calificacion'>
                    {calificacion}
                </p>
            </div>
            <div>
                <p className='carta-lorem'>{lorem}</p>
                <button className='carta-valoracion'>
                    <i class="fa-solid fa-thumbs-up"></i>
                </button>
                <button className='carta-valoracion'>
                    <i class="fa-solid fa-thumbs-down"></i>
                </button>
            </div>
        </div>
    );
}

export default Carta;
