import Boton from "../atoms/Boton";


interface cardProps{
    id:number;
    nombre:string;
    descripcion:string;
    duracion:string;
    modalidad:string;
    profesional:string;
    precio:number;
}

function CardProductHora({id,nombre,descripcion,duracion,modalidad,profesional,precio}: cardProps){
    return(
    <div className="card" style={{width: '21rem'}}>
        <div>
            
            
            <div className="card-body d-flex flex-column">

            <h5 className="card-title">{nombre}</h5>
            <p className="card-text">{descripcion}</p>
            <p className="card-text">{profesional}</p>
            <p className="card-text">{modalidad}</p>
            <p className="card-text">{duracion}</p>
            <p className="card-text">precio: ${precio}</p>

            <div className="mt-auto">
                <Boton id = {id}/>
            </div>

            </div>

        </div>
    </div>
    )
}

export default CardProductHora