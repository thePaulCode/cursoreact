import React, { FormEvent, useState, useEffect } from "react";

function App() {
  const [primeiroNumero, setPrimeiroNumero] = useState<number>(0);
  const [segundoNumero, setSegundoNumero] = useState<number>(0);
  const [operacao, setOperacao] = useState("");
  const [resultado, setResultado] = useState<number>(0);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  // se vazio [], useEffect executa primeiro de tudo
  useEffect(() => {
    switch (operacao) {
      case "+":
        const resultadoSoma = primeiroNumero + segundoNumero;
        if (!isNaN(resultadoSoma)) {
          setResultado(resultadoSoma);
        }

        break;
      case "-":
        const resultadoSub = primeiroNumero - segundoNumero;
        if (!isNaN(resultadoSub)) {
          setResultado(resultadoSub);
        }
        break;
      case "*":
        const resultadoMult = primeiroNumero * segundoNumero;
        if (!isNaN(resultadoMult)) {
          setResultado(resultadoMult);
        }
        break;
      case "/":
        const resultadoDivisao = primeiroNumero / segundoNumero;
        if (!isNaN(resultadoDivisao)) {
          setResultado(resultadoDivisao);
        }
        break;

      default:
        break;
    }
  }, [primeiroNumero, segundoNumero, operacao]);

  return (
    <>
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
      <b>Resultado: {resultado}</b>
    </>
  );
}

export default App;
