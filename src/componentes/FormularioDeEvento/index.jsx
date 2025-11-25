import "./formulario-de-evento.estilos.css";
import { CampoDeEntrada } from "../CampoDeEntrada";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import { TituloFormulario } from "../TituloFormulario";
import { BotaoFormulario } from "../BotaoFormulario";
import { ListaSupensa } from "../ListaSuspensa";

export function FormularioDeEvento() {
  return (
    <form className="form-evento">
      <TituloFormulario>Preencha para criar um evento:</TituloFormulario>
      <div className="campos">
        <CampoDeFormulario>
          <Label htmlFor="nomeEvento">Qual o nome do evento?</Label>
          <CampoDeEntrada
            type="text"
            id="nomeEvento"
            nome="nomeEvento"
            placeholder="Summer dev hits"
          ></CampoDeEntrada>
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="dataEvento">Data do evento</Label>
          <CampoDeEntrada
            type="date"
            id="dataEvento"
            nome="dataEvento"
            placeholder="XX/XX/XXXX"
          ></CampoDeEntrada>
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="temaEvento">Tema do evento</Label>
          <ListaSupensa
            type="text"
            id="temaEvento"
            nome="temaEvento"
            placeholder="Selecione uma opção"
          ></ListaSupensa>
        </CampoDeFormulario>
      </div>
      <div className="acoes">
        <BotaoFormulario>Criar evento</BotaoFormulario>
        
      </div>
    </form>
  );
}
