
export interface Cuenta {
    id: number;
    nombre: string;
    correo: string;
    contrasenia: string;
    admin: boolean;
}

const cuentasIniciales: Cuenta[] = [
    {
        id: 1,
        nombre: "Juan",
        correo: "j.aloja@gmail.com",
        contrasenia: "Juan20..",
        admin: false
    },
    {
        id: 2,
        nombre: "Administrador",
        correo: "admin@nutrivida.cl",
        contrasenia: "admin123",
        admin: true
    }
];

export const obtenerCuentas = (): Cuenta[] => {
    const cuentasGuardadas = localStorage.getItem("cuentas");

    if (!cuentasGuardadas) {
        localStorage.setItem("cuentas", JSON.stringify(cuentasIniciales));
        return cuentasIniciales;
    }

    return JSON.parse(cuentasGuardadas);
};

export const guardarCuentas = (cuentas: Cuenta[]) => {
    localStorage.setItem("cuentas", JSON.stringify(cuentas));
};
