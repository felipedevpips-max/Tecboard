import "./App.css";
import { Banner } from "./componentes/Banner";
import { CardEvento } from "./componentes/CardEvento";
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

  const evento = [
    {
      capa: "./card-mulheres-front.svg",
      tema: temas[0],
      data: new Date(),
      titulo: "Mulheres no Front",
      texto:
        "Valorizando e impulsionando a participação feminina no desenvolvimento front-end.",
    },
  ];

  //.map vai pervcorrer o array e permitir modificado e retornando

  return (
    <main>
      <header>
        <img src="/public/logo.png" alt="" />
      </header>
      <Banner />
      <FormularioDeEvento />
      {temas.map(function (item) {
        return (
          <section key={item.id}>
            <Tema tema={item} />
            <CardEvento evento={evento[0]} />
          </section>
        );
      })}
    </main>
  );
}

export default App;
