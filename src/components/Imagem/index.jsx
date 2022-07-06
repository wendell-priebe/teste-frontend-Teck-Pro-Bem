import React from 'react';

import {ImagemStyle} from './styles'

function Imagem({ name, url, ...props}) {
  return(
    <ImagemStyle src={url} alt={name} />
  );
}

export default Imagem;