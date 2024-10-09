import React, { FormEvent, useState, useEffect } from "react";
import './assets/css/app.css';

function App() {
  const usuarios = [{name: 'Paul', lastName: 'Snts'}, 
                    {name: "Ana", lastName: 'Andr'}];

  const [logged, setLogged] = useState(false);

  return (
    <>
      <h1 className="titulo" >SUPERMERCADO STELLA</h1>
      <h2>Onde a economia é certa!</h2>
      <br />
      <br />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil necessitatibus nisi excepturi culpa porro ipsum cum doloremque! Tempore, alias incidunt in excepturi, molestiae illo nisi, earum exercitationem dolores quos voluptatum!</p>
      {
        logged === true && <p>Usuário logado. Promoções do dia.</p> 
      }
      {
        logged === false &&
        <p>Faça seu Login para ver as Promoções do dia.</p>
      }
      <button onClick={()=>{setLogged(true)}}>Login</button>
      <button onClick={()=>{setLogged(false)}}>Logoff</button>
    </>
  );
}

export default App;
