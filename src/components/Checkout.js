import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { db, collection, addDoc } from "../services/firebase";

const Checkout = () => {
const { cart } = useContext(CartContext);
const [orderId, setOrderId] = useState(null);

const handlePurchase = async () => {
    const order = {
    items: cart,
      total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
    date: new Date()
    };

    const docRef = await addDoc(collection(db, "orders"), order);
    setOrderId(docRef.id);
};

return (
    <div>
    <h2>Finalizar Compra</h2>
    {orderId ? (
        <p>Compra realizada con éxito. ID de orden: {orderId}</p>
    ) : (
        <>
        <button onClick={handlePurchase}>Confirmar Compra</button>
        </>
    )}
    </div>
);
};

export default Checkout;