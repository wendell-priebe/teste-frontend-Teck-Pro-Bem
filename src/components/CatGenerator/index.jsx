import React, { useState } from 'react';
import Button from '../Button/index'
import Imagem from './../Imagem/index';


function CatGenerator() {
  const [imgCat, setImgCat] = useState(`http://placekitten.com/200/300`);
  const randon = Math.floor(Math.random() * 10);


  function handleCat(){
    const urlCat = `http://placekitten.com/20${randon}/30${randon}`;
    setImgCat(urlCat);
    console.log(randon + " Cat");
    return urlCat;
  }

  return(
    <div>

      <Button handleFunction={() => handleCat()} >
        Gerar foto de gatinho
      </Button>

      <Imagem name={'Gato'} url={imgCat} ></Imagem>

    </div>
    );
}

export default CatGenerator;