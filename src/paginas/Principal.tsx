
import imagen1 from "../assets/1.jpg";
import imagen2 from "../assets/2.jpg";

function Principal() {
    return (
        <div>
            <h1>Bienvenido a Nutri-Vida</h1>

            <div id="carouselExample" className="carousel slide mt-4">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src={""}
                            className="d-block mx-auto rounded img-fluid"
                            alt="Nutrición saludable"
                        />
                    </div>

                    <div className="carousel-item">
                        <img
                            src={imagen2}
                            className="d-block mx-auto rounded img-fluid"
                            alt="Alimentación saludable"
                        />
                    </div>
                </div>

                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                </button>

                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Siguiente</span>
                </button>
            </div>
        </div>
    );
}

export default Principal;
