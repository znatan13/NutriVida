
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { obtenerCuentas } from "./cuentas/cuentas";

function Login() {
    const navigate = useNavigate();

    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const iniciarSesion = () => {
        const cuentas = obtenerCuentas();

        const cuentaEncontrada = cuentas.find(
            cuenta =>
                cuenta.correo === correo &&
                cuenta.contrasenia === password
        );

        if (!cuentaEncontrada) {
            setError("Correo o contraseña incorrectos");
            return;
        }

        const usuario = {
            id: cuentaEncontrada.id,
            nombre: cuentaEncontrada.nombre,
            correo: cuentaEncontrada.correo,
            admin: cuentaEncontrada.admin
        };

        localStorage.setItem("usuario", JSON.stringify(usuario));

        navigate("/");
    };

    return (
        <div className="row justify-content-center mt-5">
            <div className="col-md-6 col-lg-4">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4">
                            Iniciar sesión
                        </h2>

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

                        {error && (
                            <div className="alert alert-danger">
                                {error}
                            </div>
                        )}

                        <button
                            className="btn btn-primary w-100"
                            onClick={iniciarSesion}
                        >
                            Iniciar sesión
                        </button>

                        <p className="text-center mt-3 mb-0">
                            ¿No tienes cuenta?{" "}
                            <Link to="/registro">
                                Regístrate aquí
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
