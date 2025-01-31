
// src/components/CartWidget.jsx


import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const CartWidget = () => {
  const { totalItems } = useCart();

  return (
    <Link to="/cart" className="cart-widget" >
      <span>🛒</span>  
      
      {totalItems > 0 && <span>{totalItems}</span>}
    </Link>
  );
};

export default CartWidget;
