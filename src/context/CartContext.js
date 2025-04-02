import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const itemExistente = prevCart.find((prod) => prod.id === item.id);

      if (itemExistente) {
        return prevCart.map((prod) =>
          prod.id === item.id ? { ...prod, quantity: prod.quantity + 1 } : prod
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });

    console.log("Producto agregado:", item); // ✅ Verifica en la consola
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};