import React, { FormEvent, useState, useEffect } from "react";

function App() {
  const usuarios = [{name: 'Paul', lastName: 'Snts'}, 
                    {name: "Ana", lastName: 'Andr'}];

  return (
    <>
      {usuarios
        .filter(user => user.name.toLowerCase === "PAUL".toLowerCase)
        .map((usuario) => {
          return (<>{usuario.name} {usuario.lastName} <br /></>);
      })}
    </>
  );
}

export default App;
