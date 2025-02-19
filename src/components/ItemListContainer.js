import React from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
const { categoryId } = useParams();

return (
    <div className="container mt-4">
        <h2>{greeting}</h2>
        {categoryId && <h3>Categoría: {categoryId}</h3>}
        <p>Aca se mostrarán los productos.</p>
    </div>
);
};

export default ItemListContainer;