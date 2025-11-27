import "./App.css";
import { Banner } from "./componentes/Banner";
import { CardEvento } from "./componentes/CardEvento";
import { FormularioDeEvento } from "./componentes/FormularioDeEvento";
import { Tema } from "./componentes/Tema";
import { useState } from "react";
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

  const [eventos, setEventos] = useState([
    {
      capa: "./card-mulheres-front.svg",
      tema: temas[0],
      data: new Date(),
      titulo: "Mulheres no Front",
      texto:
        "Valorizando e impulsionando a participação feminina no desenvolvimento front-end.",
    },
  ]);

  function adicionarEvento(evento) {
    setEventos([...eventos, evento]);
    console.log("eventos =>", eventos);
  }

  //.map vai pervcorrer o array e permitir modificado e retornando

  return (
    <main>
      <header>
        <img src="/public/logo.png" alt="" />
      </header>
      <Banner />
      <FormularioDeEvento temas={temas} aoSubmeter={adicionarEvento} />
      {temas.map(function (item) {
        return (
          <section key={item.id}>
            <Tema tema={item} />
            {eventos.map(function (item, index) {
              return <CardEvento evento={item} key={index} />;
            })}
          </section>
        );
      })}
    </main>
  );
}

export default App;
