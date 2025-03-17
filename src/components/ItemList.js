import React from "react";
import Item from "./Item";

const ItemList = ({ products }) => {
return (
    <div className="container mt-4">
    <div className="row row-cols-1 row-cols-md-3 g-4">  {}
        {products.map(product => (
        <Item key={product.id} product={product} />
        ))}
    </div>
    </div>
);
};

export default ItemList;