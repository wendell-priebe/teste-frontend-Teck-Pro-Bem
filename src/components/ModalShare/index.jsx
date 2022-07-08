import React from 'react';
import Modal from 'react-modal'

import { useShareImagem } from '../../hooks/useShareImagem';

import { Container } from './styles';
import Button from './../Button/index';
import Imagem from '../Imagem';

function ModalShare({ isOpen, onRequestClose }) {
    const { shareImagem } = useShareImagem()

  return (
    <Modal
        isOpen={ isOpen } 
        onRequestClose={ onRequestClose }
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
    >
        <Container>
            <Button handleFunction={ onRequestClose }>
                X
            </Button>

            <Imagem url={shareImagem} />

            <Button >
                <a href={`https://api.whatsapp.com/send?text=${shareImagem}`} >Compartilhar</a>
            </Button>
        </Container>
    </Modal>
  );
}

export default ModalShare;