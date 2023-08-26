import React, { useRef } from "react";

/**
 * Componente de botão
 * 
 * @param {string} - A classe css personalizada para o botão
 * @param {string} - Titulo do botão
 * @param {function} onPress -  A função de callback a ser executada quando o botão for clicado.
 */
function Button({ className, title, onPress }) {

    const buttonRef = useRef(null);

    /**
    * Manipula o clique no botão (remove o focus).
    */
    const handleClick = () => {
        buttonRef.current.blur();
    }

    return (
        <>

            <button
                className={className}
                ref={buttonRef}
                onClick={() => {
                    onPress();
                    handleClick();
                }}>

                <p>{title}</p>

            </button>

        </>
    )
}

export default Button