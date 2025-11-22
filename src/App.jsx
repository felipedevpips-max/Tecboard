import "./App.css";
//NO REACT,COMPONENTES SÃO FUNÇÕES

function FormularioDeEvento() {
  return (
    <form className="form-evento">
      <h2>Preencha para criar um evento:</h2>
      <fieldset>
        <label htmlFor="nome">Qual o nome do evento?</label>
        <input type="text" id="nome"></input>
      </fieldset>
      <fieldset>
        <label htmlFor="data">Data do evento</label>
        <input type="date" id="data"></input>
      </fieldset>
      <fieldset>
        <label htmlFor="tema">Tema do evento</label>
        <input type="text" id="tema"></input>
      </fieldset>
    </form>
  );
}
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
