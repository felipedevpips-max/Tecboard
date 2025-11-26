import "./formulario-de-evento.estilos.css";
import { CampoDeEntrada } from "../CampoDeEntrada";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import { TituloFormulario } from "../TituloFormulario";
import { BotaoFormulario } from "../BotaoFormulario";
import { ListaSupensa } from "../ListaSuspensa";

export function FormularioDeEvento({ temas }) {
  return (
    <form className="form-evento">
      <TituloFormulario>Preencha para criar um evento:</TituloFormulario>
      <div className="campos">
        <CampoDeFormulario>
          <Label htmlFor="capa">Qual o endereço da imagem da capa?</Label>
          <CampoDeEntrada
            type="text"
            id="capa"
            nome="capa"
            placeholder="http://"
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
          <Label htmlFor="tema">Tema do evento</Label>
          <ListaSupensa id="tema" nome="tema" itens={temas}></ListaSupensa>
        </CampoDeFormulario>
      </div>
      <div className="acoes">
        <BotaoFormulario>Criar evento</BotaoFormulario>
      </div>
    </form>
  );
}
