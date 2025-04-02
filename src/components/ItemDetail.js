import React from "react";
import { useCart } from "../context/CartContext"; // Importar el contexto

const ItemDetail = ({ item }) => {
  const { addToCart } = useCart(); // Obtener addToCart del contexto

  if (!item) return <p>Cargando...</p>;

  return (
    <div>
      <h2>{item.name}</h2>
      <p>Precio: ${item.price}</p>
      <button onClick={() => addToCart(item)}>Agregar al carrito</button> 
    </div>
  );
};

export default ItemDetail;