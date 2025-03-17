import React from "react";

const Brief = ({ cart }) => {
return (
    <ul>
    {cart.map((item) => (
        <li key={item.id}>
        {item.name} - {item.quantity} unidades
        </li>
    ))}
    </ul>
);
};

export default Brief;