import React, { useState } from 'react';
import Button from '../Button/index'
import Imagem from './../Imagem/index';

import {Cartao} from './styles'

function Card({ name, url, ...props }) {
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

  return (
    <Cartao>
        <Button handleFunction={() => handleImg(name)} >
            Gerar foto de {
                name === 'cat' ? 'Gatinho' : 'Doguinho'
            }
        </Button>
    
        <Imagem name={name} url={imgPet} ></Imagem>

        <Button>
            Compartilhar
        </Button>
    </Cartao>
  );
}

export default Card;