import React, { FormEvent, useState } from "react";

function App() {
  const [primeiroNumero, setPrimeiroNumero] = useState<number>(0);
  const [segundoNumero, setSegundoNumero] = useState<number>(0);
  const [operacao, setOperacao] = useState("");
  const [resultado, setResultado] = useState<number>(0);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    switch (operacao) {
      case "+":
        setResultado(primeiroNumero + segundoNumero);
        break;
      case "-":
        setResultado(primeiroNumero - segundoNumero);
        break;
      case "*":
        setResultado(primeiroNumero * segundoNumero);
        break;
      case "/":
        setResultado(primeiroNumero / segundoNumero);
        break;

      default:
        break;
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} action="">
        <input
          type="number"
          onChange={(e) => {
            setPrimeiroNumero(e.target.valueAsNumber);
          }}
          value={primeiroNumero}
        />
        <select
          name=""
          id=""
          onChange={(e) => {
            setOperacao(e.target.value);
          }}
          value={operacao}
        >
          <option value="">--Selecione a operação--</option>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="/">/</option>
          <option value="*">*</option>
        </select>
        <input
          type="number"
          name=""
          id=""
          onChange={(e) => {
            setSegundoNumero(e.target.valueAsNumber);
          }}
          value={segundoNumero}
        />
        <button type="submit">Calcular</button> <b>Resultado: {resultado}</b>
      </form>
    </>
  );
}

export default App;
