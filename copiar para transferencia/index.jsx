import React from 'react';

export default function Copy() {

    const handleCopy = () => {
        const textToCopy = document.getElementById('copy').textContent;

        // Cria um elemento temporário (input) para copiar o texto
        const tempInput = document.createElement('input');
        tempInput.value = textToCopy;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);

    }

    return (
        <div onClick={()=>handleCopy()} id="copy">teste de copia</div>
    )
}