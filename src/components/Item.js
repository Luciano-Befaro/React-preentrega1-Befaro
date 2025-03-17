import React from "react";

const Item = ({ product }) => {
return (
    <div className="col-md-4 d-flex align-items-stretch">  
    <div className="card item-card">  {}
    <img
        src={product.image || "https://via.placeholder.com/300"}
        className="card-img-top"
        alt={product.name || "Imagen del producto"}
    />
        <div className="card-body d-flex flex-column">
            <h5 className="card-title">{product.name || "Sin nombre"}</h5>
            <p className="card-text flex-grow-1">{product.description || "Sin descripción"}</p>
            <p className="card-text fw-bold">Precio: ${product.price || "No disponible"}</p>
            <button className="btn btn-primary mt-auto">Agregar al carrito</button>
        </div>
    </div>
    </div>
);
};

export default Item;