import { Link } from "react-router-dom"

interface BotonProps{
  id: number;
}



function Boton({id}: BotonProps) {
    return(
        <Link
        to={`/horario/consultas/${id}`}
        className="btn btn-primary"
        >
        Ver Horarios
        </Link>
    )
}

export default Boton