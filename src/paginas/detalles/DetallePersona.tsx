
import { useNavigate, useParams } from "react-router-dom";
import { Trabajadores } from "../Empleados";

function DetalleTrabajadores() {
    const { id } = useParams();
    const navigate = useNavigate();

    const trabajador = Trabajadores.find(
        (trabajador) => trabajador.id === Number(id)
    );

    if (!trabajador) {
        return <h2>Profesional no encontrado</h2>;
    }

    return (
        <div className="card">
            <div className="card-body">
                <img src={trabajador.imagen} alt="imagen trabajador" />
                <h2>{trabajador.nombre}</h2>
                <p>Especialidad: {trabajador.especialidad}</p>
                <p>Días de atención: {trabajador.dias_horario}</p>
                <p>Horario: {trabajador.horario}</p>

                <button
                    className="btn btn-secondary me-2"
                    onClick={() => navigate(-1)}
                >
                    Volver
                </button>

                <button
                    className="btn btn-primary w-100"
                    onClick={() => navigate("/horarios")}
                >
                    Tomar Hora
                </button>
            </div>
        </div>
    );
}

export default DetalleTrabajadores;
