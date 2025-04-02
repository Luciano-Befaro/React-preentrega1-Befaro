import React from "react";
import { useCart } from "../context/CartContext";

const CartWidget = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div style={{ position: "relative", cursor: "pointer" }}>
      <span role="img" aria-label="cart">🛒</span>
      {totalItems > 0 && (
        <span style={{
          position: "absolute",
          top: "-5px",
          right: "-10px",
          background: "red",
          color: "white",
          borderRadius: "50%",
          padding: "5px",
          fontSize: "12px"
        }}>
          {totalItems}
        </span>
      )}
    </div>
  );
};

export default CartWidget;