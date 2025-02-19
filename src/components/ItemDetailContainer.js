import React from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
const { itemId } = useParams();

return (
    <div className="container mt-4">
        <h2>Detalle del Producto</h2>
        <p>Mostrando detalles del producto con ID: {itemId}</p>
    </div>
);
};

export default ItemDetailContainer;
