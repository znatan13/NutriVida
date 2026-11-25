import { useNavigate } from "react-router-dom";

export const consultasDisponibles = [
    {id: 1,
        nombre: "Primera consulta nutricional",
        descripcion: "Evaluación inicial: Anammnesis, antropometria completa y diseño del primer plan alimenticio.",
        duracion: "50 minutos",
        modalidad: "Presencial",
        profesional: "Nutricionista",
        precio: 35000
    },
    {id: 2,
        nombre: "Control nutricional(Seguimiento)",
        descripcion: "Seguimiento mensual: Medición de indicadores y ajuste del plan vigente.",
        duracion: "30 minutos",
        modalidad: "Presencial",
        profesional: "Nutricionista",
        precio: 25000
    },
    {id: 3,
        nombre: "Control nutricional quincenal",
        descripcion: "Seguimiento Intenso cada 15 dias. Recomendado en los primeros 2 meses.",
        duracion: "30 minutos",
        modalidad: "Presencial",
        profesional: "Nutricionista",
        precio: 22000
    },
    {id: 4,
        nombre: "Teleconsulta nutricional.",
        descripcion: "Consulta de seguimiento via videollamada. Requiere contar con consulta presencial previa.",
        duracion: "30 minutos",
        modalidad: "Online(Video)",
        profesional: "Nutricionista",
        precio: 20000
    },
    {id: 5,
        nombre: "Consulta de urgencia / reagendada",
        descripcion: "Para pacientes que requieren atencion fuera de su control habitual",
        duracion: "30 minutos",
        modalidad: "Presencial",
        profesional: "Nutricionista",
        precio: 28000
    }
];


function Consulta() {
    const navigate = useNavigate();
    return (
        <div className="row">
            {consultasDisponibles.map((consulta) => (
                <div className="col-sm-6 mb-3 mb-sm-0" key={consulta.id}>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                {consulta.nombre}
                            </h5>

                            <p className="card-text">
                                {consulta.descripcion} <br />
                                Modalidad: {consulta.modalidad}. <br />
                                Precio: ${consulta.precio}. <br />
                                Duración: {consulta.duracion}. <br />
                                Profesional: {consulta.profesional}
                            </p>

                            <a
                                onClick={() => navigate(`/horario/consultas/${consulta.id}`)}
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

export default Consulta;
