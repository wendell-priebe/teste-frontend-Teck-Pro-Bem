import React from 'react';

function Imagem({ name, url, ...props}) {
  return(
    <img src={url} alt={name} />
  );
}

export default Imagem;