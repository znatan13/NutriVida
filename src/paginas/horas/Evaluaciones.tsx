import { useNavigate, useParams } from "react-router-dom";

const EvaluacionesDisponibles = [
    {id: 1,
        nombre: "Antropometría completa",
        descripcion: "Peso, talla, IMC, circunferencia de cintura, cadera, brazo y % de grasa corporal y edad metabólica.",
        duracion: "20 minutos",
        modalidad: "Presencial",
        profesional: "Nutricionista",
        precio: 18000
    },
    {id: 2,
        nombre: "BioImedanclometría",
        descripcion: "Medición de composición corporal: masa grasa, masa muscular, agua corporal y edad metabólica.",
        duracion: "15 minutos",
        modalidad: "Presencial",
        profesional: "Nutricionista",
        precio: 12000
    },
    {id: 3,
        nombre: "Encuesta de hábitos alimentarios",
        descripcion: "Análisis del patrón alimentario actual. Identificación de déficit y excesos nutricionales.",
        duracion: "20 minutos",
        modalidad: "Presencial",
        profesional: "Nutricionista",
        precio: 10000
    },
    {id: 4,
        nombre: "Análisis de exámenes de laboratorio.",
        descripcion: "Interpretación de hemograma, perfil bloquímico y lipídico en contexto nutricional.",
        duracion: "20 minutos",
        modalidad: "Presencial",
        profesional: "Nutricionista",
        precio: 15000
    }
];

function Evaluaciones() {
    const navigate = useNavigate();
    return (
        <div className="row">
            {EvaluacionesDisponibles.map((evaluaciones) => (
                <div className="col-sm-6 mb-3 mb-sm-0" key={evaluaciones.id}>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                {evaluaciones.nombre}
                            </h5>

                            <p className="card-text">
                                {evaluaciones.descripcion} <br />
                                Modalidad: {evaluaciones.modalidad}. <br />
                                Precio: ${evaluaciones.precio}. <br />
                                Duración: {evaluaciones.duracion}. <br />
                                Profesional: {evaluaciones.profesional}
                            </p>

                            <a
                                onClick={() => navigate(`/horario/evaluaciones/${evaluaciones.id}`)}
                                className="btn btn-primary"
                            >
                                Tomar hora
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Evaluaciones;
