import React, { useEffect, useState } from 'react';

import './styles.css'

export default function CustomModal({modalInfos, handleModal}) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Função para fechar o modal quando clicar fora dele
    const handleClickOutside = (event) => {
      const modalContainer = document.getElementById('modal');
      const buttons = document.getElementById('buttons');

      // Verifica se o clique foi fora do modal
      if (modalContainer && !modalContainer.contains(event.target) && !buttons.contains(event.target)) {
        handleModal(false);
      }
    };

    const handleKeyPress = (event) => {
      if (event.key === 'Escape') {
        handleModal(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleModal]);

  useEffect(() => {
    const preloadImages = () => {
      const image = new Image();
      const imageUrl = require('./images/' + modalInfos.type + '.svg');
      image.src = imageUrl;

      image.onload = () => {
        setImageLoaded(true);
      };
    };

    preloadImages();

    // Remove the listener when the component unmounts
    return () => {
      // Cleanup code if needed
    };
  }, [modalInfos.type]);

  if(!modalInfos.type) return
  if (!imageLoaded || !modalInfos.type) return null;

  return (

    <div id="modalContainer">

      <div id='modal' className="modal">

        <img loading='lazy' src={require('./images/' + modalInfos.type + '.svg')} alt="" />

        {modalInfos.text}

        <div id='buttons' className="buttons">

          {
            modalInfos.type === 'confirmation' ?
              <button onClick={() => modalInfos.confirmation()}>
                <p>Confirmar</p>
              </button>
              :
              <button
                onClick={() => modalInfos.confirmation ? modalInfos.confirmation() : handleModal(false)}
                className={modalInfos.type === 'confirmation' ? 'confirmationButton' : ''}>
                <p>Fechar</p>
              </button>
          }
          {
            modalInfos.type === 'confirmation' &&
            <button
              onClick={() => handleModal(false)}>
              <p>Cancelar</p>
            </button>
          }
        </div>

      </div>

    </div>
  )
}