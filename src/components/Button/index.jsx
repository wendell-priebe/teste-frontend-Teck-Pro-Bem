import React from 'react';

import { BotaoStyle } from './styles'

function Button({ handleFunction, ...props}) {
  return(
    <BotaoStyle onClick={handleFunction}>
      { props.children }
    </BotaoStyle>
  );
}

export default Button;

