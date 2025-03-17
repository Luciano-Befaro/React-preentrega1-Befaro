import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ItemQuantitySelector from "./ItemQuantitySelector";

const ItemDetail = ({ product }) => {
const { addToCart } = useContext(CartContext);

return (
    <div>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <ItemQuantitySelector onAdd={(quantity) => addToCart(product, quantity)} />
    </div>
);
};

export default ItemDetail;