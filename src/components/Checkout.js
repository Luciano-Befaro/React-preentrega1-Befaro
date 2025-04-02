import React, { useState } from "react"; 
import { useCart } from "../context/CartContext";
import { db, collection, addDoc } from "../services/firebase";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const [orderId, setOrderId] = useState(null);

  const handlePurchase = async () => {
    if (cart.length === 0) {
      alert("El carrito está vacío. Agrega productos antes de finalizar la compra.");
      return;
    }

    try {
      const order = {
        items: cart,
        total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
        date: new Date(),
      };

      const docRef = await addDoc(collection(db, "orders"), order);
      setOrderId(docRef.id);
      clearCart();  // Vaciar carrito después de la compra
    } catch (error) {
      console.error("Error al procesar la compra:", error);
    }
  };

  return (
    <div>
      <h2>Finalizar Compra</h2>
      {orderId ? (
        <p>Compra realizada con éxito. ID de orden: {orderId}</p>
      ) : (
        <>
          {cart.length === 0 ? (
            <p>Tu carrito está vacío.</p>
          ) : (
            <>
              <ul>
                {cart.map((item, index) => (
                  <li key={index}>{item.name} - ${item.price} x {item.quantity}</li>
                ))}
              </ul>
              <button onClick={handlePurchase}>Confirmar Compra</button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Checkout;