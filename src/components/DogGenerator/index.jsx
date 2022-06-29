import React, { useState } from 'react';
import Button from '../Button/index'
import Imagem from './../Imagem/index';


function DogGenerator() {
  const [imgDog, setImgDog] = useState(`https://place.dog/200/300`);
  const randon = Math.floor(Math.random() * 10);


  function handleDog(){
    const urlDog = `https://place.dog/20${randon}/30${randon}`;
    setImgDog(urlDog);
    console.log(randon + " Dog");
    return urlDog;
  }

  return(
    <div>

      <Button handleFunction={() => handleDog()} >
        Gerar foto de doguinho
      </Button>

      <Imagem name={'Cachorro'} url={imgDog} ></Imagem>

    </div>

  );
}

export default DogGenerator;