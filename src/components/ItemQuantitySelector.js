import React, { useState } from "react";

const ItemQuantitySelector = ({ onAdd }) => {
const [quantity, setQuantity] = useState(1);

return (
    <div>
        <button onClick={() => setQuantity(quantity - 1)} disabled={quantity <= 1}>-</button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity(quantity + 1)}>+</button>
        <button onClick={() => onAdd(quantity)}>Agregar al carrito</button>
    </div>
);
};

export default ItemQuantitySelector;