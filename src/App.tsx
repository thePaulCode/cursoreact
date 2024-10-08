import Topo from './components/Topo';
import Lateral from './components/Lateral';
import Autor from './components/Autor';
import Conteudo from './components/Conteudo';
import Titulo from './components/Titulo';
import Subtitulo from './components/Subtitulo';
import React, {useState} from 'react';

function App(){

  const [login, setLogin] = useState("Não Logado");


  return(
    <>
      <button onClick={()=>{setLogin("Logado")}}>
        LOGIN        
      </button>


      <br />
      <br />
      <br />
      {login}

      <br />
      <br />
      <br />
      <button onClick={()=>{setLogin("Não Logado")}}>
        LOGOFF
      </button>



    </>
  );
}

/* function App() {
  const name: string = "Paul"
  function tecladoAtividade(){
    alert('Digitou...');
  }
  
  function comprar(){
    alert("Finalizar compras do carrinho.");
  }
  return (
    <div >

      <Topo />
      <br />
      <Lateral />
      <Autor name="Stll" last_name="Snts" age={34}/>
      <Titulo />
      <Subtitulo />
      <Conteudo />
      <br />
      Olá, {name}!!!
      <br />
      <br />
      <button onClick={()=>comprar()}>
        Comprar
      </button>
      <br />
      <br />
      <input type="text" onChange={() => tecladoAtividade()}/>
    </div>
  );
} */

export default App;
