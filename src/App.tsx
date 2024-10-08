import Topo from './components/Topo';
import Lateral from './components/Lateral';
import Autor from './components/Autor';
import Conteudo from './components/Conteudo';
import Titulo from './components/Titulo';
import Subtitulo from './components/Subtitulo';

function App() {
  const name: string = "Paul"
  return (
    <div >
      <Topo />
      <br />
      <Lateral />
      <Autor name="Stll" last_name="Snts" />
      <Titulo />
      <Subtitulo />
      <Conteudo />
      <br />
      Olá, {name}!!!
    </div>
  );
}

export default App;
