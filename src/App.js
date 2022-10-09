import React from 'react';
import { useState } from 'react';
import Button from './components/Button';
import './styles/App.css';
import './styles/index.css';
import './styles/button.css';
import Carta from './components/Carta';
import Gato1 from './img/gato1.jpg';
import Gato2 from './img/gato2.jpg';
import Gato3 from './img/gato3.jpg';

function App() {

  const [modo, setModo] = useState('dia');

  function cambiarModo(){
    if(modo == 'dia') {
      setModo('noche')
    }else{
      setModo('dia')
    }
  }

  return (
    <div className={'container-principal ' + modo}>
      <Button
        cambiarModo={cambiarModo}
        modoVista={modo == 'noche' ? 'dia' : 'noche'}
      />
      <Carta
        imagen={Gato1}
        nombre="Mr. Galleta"
        calificacion="⚡⚡⚡⚡"
        lorem="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, distinctio?"
      />
      <Carta
        imagen={Gato2}
        nombre="Mr. Bigotes"
        calificacion="⚡⚡⚡"
        lorem="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, impedit?"
      />
       <Carta
        imagen={Gato3}
        nombre="Mr. Mascada"
        calificacion="⚡⚡⚡⚡⚡"
        lorem="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, velit."
      />
    </div>
  );
}

export default App;
