import "./App.css";
import { FormularioDeEvento } from "./componentes/FormularioDeEvento";
//NO REACT,COMPONENTES SÃO FUNÇÕES

//props e um OBJETO
//props.children

//sempre tem que estar dentro de um elemento tudo com identação
function App() {
  return (
    <main>
      <header>
        <img src="/public/logo.png" alt="" />
      </header>
      <section>
        <img src="/public/banner.png" alt="" />
      </section>
      <FormularioDeEvento />
    </main>
  );
}

export default App;
