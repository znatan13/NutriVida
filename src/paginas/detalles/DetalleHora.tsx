import { useNavigate, useParams } from "react-router-dom";
import BotonEliminar from "../../components/atoms/BotonEliminar";
import { EvaluacionesDisponibles } from "../horas/Evaluaciones";
import { consultasDisponibles } from "../horas/Consulta";
import { planesDisponibles } from "../horas/Planes";
import { TalleresGrupales } from "../horas/Grupal";

function DetalleConsultas() {
    const { id } = useParams();
    const navigate = useNavigate();
    const usuario = JSON.parse(localStorage.getItem("usuario") || "null");
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
                {usuario?.admin === true && (<BotonEliminar items={ consultasDisponibles } id={consulta.id}onEliminado={() => navigate(-1)}/>)}
            </div>
        </div>
    );
}

function DetalleEvaluaciones() {
    const { id } = useParams();
    const navigate = useNavigate();
    const usuario = JSON.parse(localStorage.getItem("usuario") || "null");
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
                {usuario?.admin === true && (<BotonEliminar items={ EvaluacionesDisponibles } id={evaluacion.id}onEliminado={() => navigate(-1)}/>)}
            </div>
        </div>
    );
}

function DetalleGrupales() {
    const { id } = useParams();
    const navigate = useNavigate();
    const usuario = JSON.parse(localStorage.getItem("usuario") || "null");
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
                {usuario?.admin === true && (<BotonEliminar items={ TalleresGrupales } id={grupal.id}onEliminado={() => navigate(-1)}/>)}
            </div>
        </div>
    );
}

function DetallePlanes() {
    const { id } = useParams();
    const navigate = useNavigate();
    const usuario = JSON.parse(localStorage.getItem("usuario") || "null");
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
                {usuario?.admin === true && (<BotonEliminar items={ planesDisponibles } id={plan.id}onEliminado={() => navigate(-1)}/>)}
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