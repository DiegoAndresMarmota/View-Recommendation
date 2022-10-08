import React from 'react';
import Gato1 from '../img/gato1.jpg';

function Carta() {
    return (
        <div className='carta-container'>
            <div>
                <img className='carta-img' src={Gato1} alt="carta-imagen-perfil" />
                <h3 className='carta-nombre'>Gato1</h3>
                <p className='carta-calificacion'>
                    <i class="fa-regular fa-star"></i>
                </p>
            </div>
            <div>
                <p className='carta-lorem'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, perspiciatis?</p>
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
