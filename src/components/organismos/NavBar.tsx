import { Link } from "react-router-dom";

function Navbar() {
    return(
        <nav className="navbar navbar-expand bg-info">
            <div className="container">
                <span className="navbar-brand text-white">
                    Nutri-Vida
                </span>

                <div className="navbar-nav">
                    <Link className="nav-link text-white" to="/">
                    Inicio
                    </Link>
                    <Link className="nav-link text-white" to="/horarios">
                    Horarios Disponibles
                    </Link>
                    <Link className="nav-link text-white" to="/quienessomos">
                    Quienes somos
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar