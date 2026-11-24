import Consulta from "./horas/Consulta";
import Evaluaciones from "./horas/Evaluaciones";
import Grupal from "./horas/Grupal";
import Planes from "./horas/Planes";

function HorariosGenerales() {
    return (
        <div className="mt-4">
            <h2>Horarios disponibles</h2>

            <div className="accordion" id="accordionHorarios">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#consultas"
                        >
                            Consultas
                        </button>
                    </h2>
                    <div
                        id="consultas"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordionHorarios"
                    >
                        <div className="accordion-body">
                            <Consulta />
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#planes"
                        >
                            Planes
                        </button>
                    </h2>
                    <div
                        id="planes"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionHorarios"
                    >
                        <div className="accordion-body">
                            <Planes />
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#evaluaciones"
                        >
                            Evaluaciones
                        </button>
                    </h2>

                    <div
                        id="evaluaciones"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionHorarios"
                    >
                        <div className="accordion-body">
                            <Evaluaciones />
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#talleres"
                        >
                            Talleres Grupales
                        </button>
                    </h2>

                    <div
                        id="talleres"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionHorarios"
                    >
                        <div className="accordion-body">
                            <Grupal />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HorariosGenerales;
