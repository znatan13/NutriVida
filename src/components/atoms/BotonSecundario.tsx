import { Link } from "react-router-dom";

function BotonSecundario(){
    return (
        <div className="btn btn-outline-secundary">
            <Link to={"/"} className="btn btn-secundary">
            Volver</Link>
        </div>
    );
}
export default BotonSecundario