import React, { useState } from 'react';
import Button from '../Button/index'
import Imagem from './../Imagem/index';

import {Cartao} from './styles'

import { useShareImagem } from './../../hooks/useShareImagem';

function Card({ openShareModal, name, url, ...props }) {
    const { setShareImagem } = useShareImagem();

    const [imgPet, setImgPet] = useState(url);
    const randon1 = Math.floor(Math.random() * 10);  
    const randon2 = Math.floor(Math.random() * 10);  
  
    function handleImg(name){
        let urlPet = ''
        if( name === 'cat'){
            urlPet = `http://placekitten.com/20${randon1}/30${randon2}`;
        }
        if( name === 'dog'){
            urlPet = `https://place.dog/20${randon1}/30${randon2}`;
        }
        setImgPet(urlPet);
    }

    function setImgPetShare(imgPet){
        setShareImagem(imgPet)
    }

    function eventOnClick(){
        // tentar usar 2 onclick em um botao de compartilhar
    }

  return (
    <Cartao>
        <Button handleFunction={() => handleImg(name)} >
            Gerar foto de {
                name === 'cat' ? 'Gatinho' : 'Doguinho'
            }
        </Button>
    
        <Imagem name={name} url={imgPet} ></Imagem>

        <Button type="button" handleFunction={ openShareModal } onClick={setImgPetShare(imgPet)}>
            Compartilhar
        </Button>
    </Cartao>
  );
}

export default Card;