import { act } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import CardProductHora from "../../../../src/components/molecules/CardProductHora";

describe("CardProductHora", () => {
    let container: HTMLDivElement;
    let root: ReturnType<typeof createRoot>;

    beforeEach(() => {
        container = document.createElement("div");
        document.body.appendChild(container);
        root = createRoot(container);
    });

    afterEach(() => {
        act(() => root.unmount());
        container.remove();
    });

    it("muestra las propiedades recibidas", () => {
        act(() => {
            root.render(
                <BrowserRouter>
                    <CardProductHora
                        id={1}
                        nombre="Consulta nutricional"
                        descripcion="Evaluación inicial"
                        duracion="50 minutos"
                        modalidad="Presencial"
                        profesional="Nutricionista"
                        precio={35000}
                    />
                </BrowserRouter>
            );
        });

        expect(container.textContent).toContain("Consulta nutricional");
        expect(container.textContent).toContain("Evaluación inicial");
        expect(container.textContent).toContain("35000");
    });

    it("renderiza un enlace para ver los horarios", () => {
        act(() => {
            root.render(
                <BrowserRouter>
                    <CardProductHora
                        id={3}
                        nombre="Control nutricional"
                        descripcion="Seguimiento"
                        duracion="30 minutos"
                        modalidad="Presencial"
                        profesional="Nutricionista"
                        precio={25000}
                    />
                </BrowserRouter>
            );
        });

        const enlace = container.querySelector("a") as HTMLAnchorElement;
        expect(enlace.textContent).toContain("Ver Horarios");
        expect(enlace.getAttribute("href")).toBe("/horario/consultas/3");
    });
});
