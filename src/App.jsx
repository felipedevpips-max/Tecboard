import "./App.css";
import { FormularioDeEvento } from "./componentes/FormularioDeEvento";
import { Tema } from "./componentes/Tema";
//NO REACT,COMPONENTES SÃO FUNÇÕES

//props e um OBJETO
//props.children

//sempre tem que estar dentro de um elemento tudo com identação
function App() {
  const temas = [
    {
      id: 1,
      nome: "front-end",
    },
    {
      id: 2,
      nome: "back-end",
    },
    {
      id: 3,
      nome: "devops",
    },
    {
      id: 4,
      nome: "inteligencia-artificial",
    },
    {
      id: 5,
      nome: "data-science",
    },
    {
      id: 6,
      nome: "cloud",
    },
  ];

  return (
    <main>
      <header>
        <img src="/public/logo.png" alt="" />
      </header>
      <section>
        <img src="/public/banner.png" alt="" />
      </section>
      <FormularioDeEvento />
      <section>
        <Tema tema={temas[0]} />
      </section>
      <section>
        <Tema tema={temas[1]} />
      </section>
      <section>
        <Tema tema={temas[2]} />
      </section>
      <section>
        <Tema tema={temas[3]} />
      </section>
      <section>
        <Tema tema={temas[4]} />
      </section>
      <section>
        <Tema tema={temas[5]} />
      </section>
    </main>
  );
}

export default App;
