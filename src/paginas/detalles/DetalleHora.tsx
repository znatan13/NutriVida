import { useNavigate, useParams } from "react-router-dom";

const consultasDisponibles = [
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

const TalleresGrupales = [
    {id: 1,
        nombre: "Taller de alimentación saludable",
        descripcion: "Máx. 10 personas. Conceptos básicos de alimentación equilibrada y lectura de etiquetas.",
        duracion: "90 minutos",
        modalidad: "Presencial(Grupo)",
        profesional: "Nutricionista",
        precio: 15000
    },
    {id: 2,
        nombre: "Taller de cocina nutritiva",
        descripcion: "Preparación de recetas saludables. Incluye degustación. Máx 8 personas.",
        duracion: "120 minutos",
        modalidad: "Presencial(Grupo)",
        profesional: "Nutricionista",
        precio: 20000
    },
    {id: 3,
        nombre: "Taller nutrición para deportistas",
        descripcion: "Hidratación, nutricion pre y post entrenamiento, suplementación básica. Máx 12 personas.",
        duracion: "90 minutos",
        modalidad: "Presencial(Grupo)",
        profesional: "Nutricionista",
        precio: 18000
    }
];


const planesDisponibles = [
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


function DetalleConsultas() {
    const { id } = useParams();
    const navigate = useNavigate();
    const consulta = consultasDisponibles.find(item => item.id === Number(id));

    if (!consulta) return <h2>Consulta no encontrada</h2>;

    return (
        <div className="card">
            <div className="card-body">
                <h2>{consulta.nombre}</h2>
                <p>{consulta.descripcion}</p>
                <p>Duración: {consulta.duracion}</p>
                <p>Modalidad: {consulta.modalidad}</p>
                <p>Profesional: {consulta.profesional}</p>
                <p>Precio: ${consulta.precio}</p>
                <button className="btn btn-secondary me-2" onClick={() => navigate(-1)}>Cancelar</button>
                <button className="btn btn-primary" onClick={() => navigate("/trabajadores")}>Ver profesionales</button>
            </div>
        </div>
    );
}

function DetalleEvaluaciones() {
    const { id } = useParams();
    const navigate = useNavigate();
    const evaluacion = EvaluacionesDisponibles.find(item => item.id === Number(id));

    if (!evaluacion) return <h2>Evaluación no encontrada</h2>;

    return (
        <div className="card">
            <div className="card-body">
                <h2>{evaluacion.nombre}</h2>
                <p>{evaluacion.descripcion}</p>
                <p>Duración: {evaluacion.duracion}</p>
                <p>Modalidad: {evaluacion.modalidad}</p>
                <p>Profesional: {evaluacion.profesional}</p>
                <p>Precio: ${evaluacion.precio}</p>
                <button className="btn btn-secondary me-2" onClick={() => navigate(-1)}>Cancelar</button>
                <button className="btn btn-primary" onClick={() => navigate("/trabajadores")}>Ver profesionales</button>
            </div>
        </div>
    );
}

function DetalleGrupales() {
    const { id } = useParams();
    const navigate = useNavigate();
    const grupal = TalleresGrupales.find(item => item.id === Number(id));

    if (!grupal) return <h2>Taller grupal no encontrado</h2>;

    return (
        <div className="card">
            <div className="card-body">
                <h2>{grupal.nombre}</h2>
                <p>{grupal.descripcion}</p>
                <p>Duración: {grupal.duracion}</p>
                <p>Modalidad: {grupal.modalidad}</p>
                <p>Profesional: {grupal.profesional}</p>
                <p>Precio: ${grupal.precio}</p>
                <button className="btn btn-secondary me-2" onClick={() => navigate(-1)}>Cancelar</button>
                <button className="btn btn-primary" onClick={() => navigate("/trabajadores")}>Ver profesionales</button>
            </div>
        </div>
    );
}

function DetallePlanes() {
    const { id } = useParams();
    const navigate = useNavigate();
    const plan = planesDisponibles.find(item => item.id === Number(id));

    if (!plan) return <h2>Plan no encontrado</h2>;

    return (
        <div className="card">
            <div className="card-body">
                <h2>{plan.nombre}</h2>
                <p>{plan.descripcion}</p>
                <p>Duración: {plan.duracion}</p>
                <p>Modalidad: {plan.modalidad}</p>
                <p>Profesional: {plan.profesional}</p>
                <p>Precio: ${plan.precio}</p>
                <button className="btn btn-secondary me-2" onClick={() => navigate(-1)}>Cancelar</button>
                <button className="btn btn-primary" onClick={() => navigate("/trabajadores")}>Ver profesionales</button>
            </div>
        </div>
    );
}

function DetalleHorarios() {
    const { tipo } = useParams();

    if (tipo === "consultas") return <DetalleConsultas />;
    if (tipo === "evaluaciones") return <DetalleEvaluaciones />;
    if (tipo === "grupales") return <DetalleGrupales />;
    if (tipo === "planes") return <DetallePlanes />;

    return <h2>Servicio no encontrado</h2>;
}

export default DetalleHorarios;