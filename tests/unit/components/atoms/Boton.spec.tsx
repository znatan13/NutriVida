import { act } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Boton from "../../../../src/components/atoms/Boton";

describe("Boton", () => {
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

    it("muestra el texto Ver Horarios", () => {
        act(() => {
            root.render(
                <BrowserRouter>
                    <Boton id={1} />
                </BrowserRouter>
            );
        });

        expect(container.textContent).toContain("Ver Horarios");
    });

    it("ejecuta la función recibida cuando se hace click", () => {
        let cantidadClicks = 0;
        const mockOnClick = () => {
            cantidadClicks += 1;
        };

        act(() => {
            root.render(
                <BrowserRouter>
                    <Boton id={1} onClick={mockOnClick} />
                </BrowserRouter>
            );
        });

        const boton = container.querySelector("a") as HTMLAnchorElement;

        act(() => {
            boton.click();
        });

        expect(cantidadClicks).toBe(1);
    });
});
