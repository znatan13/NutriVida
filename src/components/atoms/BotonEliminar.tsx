import React from "react";

interface BotonEliminarProps {
    items: { id: number }[];
    id: number;
    onEliminado?: () => void;
}

const BotonEliminar: React.FC<BotonEliminarProps> = ({ items, id, onEliminado }) => {
    const eliminar = () => {
        const indice = items.findIndex(item => item.id === id);

        if (indice !== -1) {
            items.splice(indice, 1);
            onEliminado?.();
        }
    };

    return (
        <button
            className="btn btn-danger"
            onClick={eliminar}
        >
            Eliminar
        </button>
    );
};

export default BotonEliminar;