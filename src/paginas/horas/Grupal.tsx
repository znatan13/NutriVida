import { useNavigate } from "react-router-dom";

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

function Grupal() {
    const navigate = useNavigate();
    return (
        <div className="row">
            {TalleresGrupales.map((grupal) => (
                <div className="col-sm-6 mb-3 mb-sm-0" key={grupal.id}>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                {grupal.nombre}
                            </h5>

                            <p className="card-text">
                                {grupal.descripcion} <br />
                                Modalidad: {grupal.modalidad}. <br />
                                Precio: ${grupal.precio}. <br />
                                Duración: {grupal.duracion}. <br />
                                Profesional: {grupal.profesional}
                            </p>

                            <a
                                onClick={() => navigate(`/horario/grupales/${grupal.id}`)}
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

export default Grupal;
