
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { obtenerCuentas, guardarCuentas } from "./cuentas/cuentas";

function Registro() {
    const navigate = useNavigate();

    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");
    const [confirmarPassword, setConfirmarPassword] = useState("");
    const [error, setError] = useState("");

    const registrarCuenta = () => {
        if (!nombre || !correo || !password || !confirmarPassword) {
            setError("Completa todos los campos");
            return;
        }

        if (password !== confirmarPassword) {
            setError("Las contraseñas no coinciden");
            return;
        }

        const cuentas = obtenerCuentas();

        const correoExiste = cuentas.some(
            cuenta => cuenta.correo.toLowerCase() === correo.toLowerCase()
        );

        if (correoExiste) {
            setError("Este correo ya está registrado");
            return;
        }

        const nuevaCuenta = {
            id: cuentas.length > 0
                ? Math.max(...cuentas.map(cuenta => cuenta.id)) + 1
                : 1,
            nombre: nombre,
            correo: correo,
            contrasenia: password,
            admin: false
        };

        guardarCuentas([...cuentas, nuevaCuenta]);

        navigate("/login");
    };

    return (
        <div className="row justify-content-center mt-5">
            <div className="col-md-6 col-lg-4">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4">
                            Crear cuenta
                        </h2>

                        <div className="mb-3">
                            <label className="form-label">
                                Nombre
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">
                                Correo
                            </label>

                            <input
                                type="email"
                                className="form-control"
                                value={correo}
                                onChange={(e) => setCorreo(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">
                                Contraseña
                            </label>

                            <input
                                type="password"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">
                                Confirmar contraseña
                            </label>

                            <input
                                type="password"
                                className="form-control"
                                value={confirmarPassword}
                                onChange={(e) => setConfirmarPassword(e.target.value)}
                            />
                        </div>

                        {error && (
                            <div className="alert alert-danger">
                                {error}
                            </div>
                        )}

                        <button
                            className="btn btn-primary w-100"
                            onClick={registrarCuenta}
                        >
                            Registrarse
                        </button>

                        <p className="text-center mt-3 mb-0">
                            ¿Ya tienes cuenta?{" "}
                            <Link to="/login">
                                Inicia sesión
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Registro;
