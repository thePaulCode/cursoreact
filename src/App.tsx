import React, { FormEvent, useState } from "react";
import {Estado, Botao} from './AppStyled';

function App() {

  const [black, setBlack] = useState(false);
  return (
    <>
      <Estado black={black}>
        Grêmio
      </Estado>
      <Botao onClick={()=>setBlack(!black)}>DARK</ Botao>

    </>
  );
}

export default App;
