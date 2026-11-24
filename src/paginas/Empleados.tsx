
import { useNavigate } from "react-router-dom";

export const Trabajadores = [
    {
        id: 1,
        nombre: "Nut. Carolina Fuentes M.",
        imagen: "",
        especialidad: "Obesidad y síndrome metabólico",
        dias_horario: "Lunes, Miércoles, Viernes",
        horario: "09:00 – 17:00"
    },
    {
        id: 2,
        nombre: "Nut. Rodrigo Sepúlveda A.",
        imagen: "https://media.glamour.mx/photos/65b096f13756393e0200c63d/16:9/w_1920,c_limit/que-significa-tu-foto-de-perfil.jpg",
        especialidad: "Nutrición deportiva y rendimiento",
        dias_horario: "Martes, Jueves, Sábado",
        horario: "09:00 – 14:00"
    },
    {
        id: 3,
        nombre: "Nut. Daniela Morales C.",
        imagen: "",
        especialidad: "Alimentación vegetariana, vegana y trastornos alimentarios",
        dias_horario: "Lunes a Viernes",
        horario: "08:00 – 13:00"
    },
    {
        id: 4,
        nombre: "Nut. Felipe Araya R.",
        imagen: "",
        especialidad: "Nutrición pediátrica y familiar",
        dias_horario: "Martes a Viernes",
        horario: "14:00 – 19:00"
    }
];

function ListaTrabajadores() {
    const navigate = useNavigate();

    return (
        <div className="row">
            {Trabajadores.map((trabajador) => (
                <div className="col-sm-6 mb-3" key={trabajador.id}>
                    <div className="card h-100">
                        <div className="card-body">
                            <img src={trabajador.imagen} alt="IMG TRABAJADOR" />
                            <h5 className="card-title">{trabajador.nombre}</h5>
                            <p className="card-text">
                                Especialidad: {trabajador.especialidad}<br />
                                Días: {trabajador.dias_horario}<br />
                                Horario: {trabajador.horario}
                            </p>
                            <button
                                className="btn btn-primary"
                                onClick={() => navigate(`/trabajador/${trabajador.id}`)}
                            >
                                Ver detalle
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ListaTrabajadores;
