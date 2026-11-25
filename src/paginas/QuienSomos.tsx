import { useState } from "react";

function QuienSomos(){
    const [mostrarInformacion, setMostrarInformacion] = useState(false);

    return (
        <div className="container mt-4">
            <h1>Quienes somos</h1>

            <p> En Nutri-Vida buscamos entregar orientación nutricional</p> 
                <p> y </p>
                 <p> acompañamiento personalizado para nuestros pacientes.</p>

            <button
                className="btn btn-info"
                onClick={() => setMostrarInformacion(!mostrarInformacion)}
            >
                {mostrarInformacion ? "Ocultar información de contacto" : "Mostrar información de contacto"}
            </button>

            {mostrarInformacion && (
                <div className="card mt-3">
                    <div className="card-body">
                        <h2 className="card-title">Contactanos</h2>
                        <p className="card-text">
                            Whatsapp: 123456789.  Instagram: @NutriVida. Telefono Fijo: 12341234123.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
export default QuienSomos;
