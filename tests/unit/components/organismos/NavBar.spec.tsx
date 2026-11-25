import { act } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../../../../src/components/organismos/NavBar";

describe("Navbar", () => {
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

    it("muestra el nombre de la aplicación", () => {
        act(() => {
            root.render(
                <BrowserRouter>
                    <Navbar />
                </BrowserRouter>
            );
        });

        expect(container.textContent).toContain("Nutri-Vida");
    });

    it("contiene los enlaces principales", () => {
        act(() => {
            root.render(
                <BrowserRouter>
                    <Navbar />
                </BrowserRouter>
            );
        });

        const enlaces = Array.from(container.querySelectorAll("a"));
        const rutas = enlaces.map((enlace) => enlace.getAttribute("href"));

        expect(rutas).toContain("/");
        expect(rutas).toContain("/horarios");
        expect(rutas).toContain("/quienessomos");
    });
});
