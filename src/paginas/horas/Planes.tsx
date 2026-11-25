import { useNavigate } from "react-router-dom";

export const planesDisponibles = [
    {id: 1,
        nombre: "Plan pérdida de peso",
        descripcion: "Incluye primera consulta +1 control quincenal + plan alimenticio personalizado + seguimiento por WhatsApp.",
        duracion: "1 mes",
        modalidad: "Presencial",
        profesional: "Nutricionista",
        precio: 65000
    },
    {id: 2,
        nombre: "Plan Pérdida de peso",
        descripcion: "Incluye primera consulta +5 controles + 3 planes mensuales + seguimiento continuo.",
        duracion: "3 meses",
        modalidad: "Presencial",
        profesional: "Nutricionista",
        precio: 170000
    },
    {id: 3,
        nombre: "Plan nutrición deportiva",
        descripcion: "Para deportistas y personas con actividad fisica frecuente. Cálculo de requerimientos energéticos y proteicos.",
        duracion: "1 mes",
        modalidad: "Presencial",
        profesional: "Nutricionista",
        precio: 70000
    },
    {id: 4,
        nombre: "Plan control diabetes / hipertensión",
        descripcion: "Plan adaptado para patologías metabólicas. Coordinación con médico tratante si aplica.",
        duracion: "Dependiente",
        modalidad: "Presencial",
        profesional: "Nutricionista",
        precio: 75000
    },
    {id: 5,
        nombre: "Plan alimentación vegetariana / vegana",
        descripcion: "Diseñado para garantizar aporte adecuado de proteínas, hierro, vitamina B12 y calcio sin productos animales.",
        duracion: "Dependiente",
        modalidad: "Presencial",
        profesional: "Nutricionista",
        precio: 68000
    },
    {id: 6,
        nombre: "Plan alimentación Infantil",
        descripcion: "Evaluación nutricional pediátrica y diseño de plan adaptado a la etapa de desarrollo del niño.",
        duracion: "2-12 años",
        modalidad: "Presencial",
        profesional: "Nutricionista",
        precio: 65000
    }
];

function Planes() {
    const navigate = useNavigate();
    return (
        <div className="row">
            {planesDisponibles.map((planes) => (
                <div className="col-sm-6 mb-3 mb-sm-0" key={planes.id}>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                {planes.nombre}
                            </h5>

                            <p className="card-text">
                                {planes.descripcion} <br />
                                Modalidad: {planes.modalidad}. <br />
                                Precio: ${planes.precio}. <br />
                                Duración: {planes.duracion}. <br />
                                Profesional: {planes.profesional}
                            </p>

                            <a
                                onClick={() => navigate(`/horario/planes/${planes.id}`)}
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

export default Planes;