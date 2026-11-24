import Boton from "../atoms/Boton";

interface cardProps{
    id:number;
    nombre:string;
    imagen: string;
    especialidad:string;
    dias_horario:string;
    horario:string;
}

function CardProductperso({id,nombre,imagen,especialidad,dias_horario,horario}: cardProps){
    return(
    <div className="card" style={{width: '21rem'}}>
        <div>
            
            
            <div className="card-body d-flex flex-column">

            <img src={imagen} alt="imagen trabajador" />
            <h5 className="card-title">{nombre}</h5>
            <p className="card-text">{especialidad}</p>
            <p className="card-text">{dias_horario}</p>
            <p className="card-text">{horario}</p>

            <div className="mt-auto">
                <Boton id = {id}/>
            </div>

            </div>

        </div>
    </div>
    )
}

export default CardProductperso