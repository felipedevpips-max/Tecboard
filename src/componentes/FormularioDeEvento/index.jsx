import "./formulario-de-evento.estilos.css";
import { CampoDeEntrada } from "../CampoDeEntrada";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import { TituloFormulario } from "../TituloFormulario";
import { BotaoFormulario } from "../BotaoFormulario";
import { ListaSupensa } from "../ListaSuspensa";

export function FormularioDeEvento({ temas, aoSubmeter }) {
  function aoFormSubmetido(formData) {
    console.log("Opa, ta na hora de criar um novo evento", formData);
    const evento = {
      capa: formData.get("capa"),
      tema: temas.find(function (item) {
        return item.id == formData.get("tema");
      }),
      data: new Date(formData.get("dataEvento")),
      titulo: formData.get("nomeEvento"),
      texto: formData.get("descricaoEvento"),
    };
    aoSubmeter(evento);
  }

  return (
    <form className="form-evento" action={aoFormSubmetido}>
      <TituloFormulario>Preencha para criar um evento:</TituloFormulario>
      <div className="campos">
        <CampoDeFormulario>
          <Label htmlFor="nomeEvento">Qual o nome do evento?</Label>
          <CampoDeEntrada
            type="text"
            id="nomeEvento"
            name="nomeEvento"
            placeholder="Summer dev hits"
          ></CampoDeEntrada>
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="capa">Qual o endereço da imagem da capa?</Label>
          <CampoDeEntrada
            type="text"
            id="capa"
            name="capa"
            placeholder="http://"
          ></CampoDeEntrada>
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="dataEvento">Data do evento</Label>
          <CampoDeEntrada
            type="date"
            id="dataEvento"
            name="dataEvento"
            placeholder="XX/XX/XXXX"
          ></CampoDeEntrada>
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="texto">Descrição do Evento:</Label>
          <CampoDeEntrada
            type="text"
            id="descricaoEvento"
            name="descricaoEvento"
            placeholder="Descreva o Evento"
          ></CampoDeEntrada>
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="tema">Tema do evento</Label>
          <ListaSupensa id="tema" name="tema" itens={temas}></ListaSupensa>
        </CampoDeFormulario>
      </div>
      <div className="acoes">
        <BotaoFormulario>Criar evento</BotaoFormulario>
      </div>
    </form>
  );
}
