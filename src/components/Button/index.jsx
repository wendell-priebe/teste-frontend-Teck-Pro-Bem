import React from 'react';

function Button({ handleFunction, ...props}) {
  return(
    <button onClick={handleFunction}>
      { props.children }
    </button>
  );
}

export default Button;

