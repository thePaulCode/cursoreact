import React, { FormEvent, useState } from "react";

function App() {
  
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  function handleSubmit(e: React.FormEvent){
    e.preventDefault();
    console.log(nome, email, mensagem);
  }
 

  return (
    <>
      <form onSubmit={handleSubmit}>
        <p>Nome:</p>
        <input
          type="text"
          required
          onChange={(e)=>{setNome(e.target.value)}}
          value={nome}
        />
        <br />
        <p>Email:</p>
        <input
          type="text"
          required
          onChange={(e)=>{setEmail(e.target.value)}}
          value={email}
        />
        
        <br />
        <br />
        <p>Mensagem</p>
        <textarea
          required
          name=""
          id=""
          placeholder="Digite sua mensagem..."
          onChange={(e)=>{setMensagem(e.target.value)}}
          
        >{mensagem}</textarea>
        <br />
        <button type="submit">Enviar</button>
      </form>

    </>
  );
}

export default App;
