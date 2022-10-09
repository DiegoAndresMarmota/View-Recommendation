function Button({ cambiarModo, modoVista }) {
    //A través del evento onClick, se llama la función cambiarModo al presionar el button, entregara un valor modoVista, el cual ira cambiando como props
    return (
        <button onClick={cambiarModo}>{modoVista}</button>
    );
}

export default Button;