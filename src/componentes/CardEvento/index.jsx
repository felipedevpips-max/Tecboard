import "./card-evento.estilos.css";

export function CardEvento({ evento }) {
  return (
    <div className="card-evento">
      <img src={evento.capa} alt={evento.titulo}></img>
      <div className="corpo">
        <p className="tag">{evento.tema.nome}</p>
        <p className="data">{evento.data.toLocaleDateString("pt-Br")}</p>
        <h4 className="titulo">{evento.titulo}</h4>
        <p className="texto">{evento.texto}</p>
      </div>
    </div>
  );
}
