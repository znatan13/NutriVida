import { act } from "react";
import { createRoot } from "react-dom/client";
import QuienSomos from "../../../src/paginas/QuienSomos";

describe("QuienSomos", () => {
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

    it("oculta la información adicional inicialmente", () => {
        act(() => {
            root.render(<QuienSomos />);
        });

        expect(container.textContent).not.toContain("Nuestro objetivo");
    });

    it("muestra y oculta la información mediante useState", () => {
        act(() => {
            root.render(<QuienSomos />);
        });

        const boton = container.querySelector("button") as HTMLButtonElement;

        act(() => {
            boton.click();
        });

        expect(container.textContent).toContain("Nuestro objetivo");
        expect(boton.textContent).toContain("Ocultar información");

        act(() => {
            boton.click();
        });

        expect(container.textContent).not.toContain("Nuestro objetivo");
        expect(boton.textContent).toContain("Mostrar información");
    });
});
