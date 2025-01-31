
// src/containers/Cart.jsx


import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeItem, clearCart, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div>
        <h2>Tu carrito está vacío</h2>
        <Link to="/">Volver al catálogo</Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Carrito de compras</h2>
      {cart.map((prod) => (
        <div key={prod.id} style={{ marginBottom: 10 }}>
          <img src={prod.img} alt={prod.title} style={{ width: 80 }} />
          <h4>{prod.title}</h4>
          <p>Cantidad: {prod.quantity}</p>
          <p>Subtotal: ${prod.quantity * prod.price}</p>
          <button onClick={() => removeItem(prod.id)}>Eliminar</button>
          <hr />
        </div>
      ))}
      <h3>Total: ${totalPrice}</h3>
      <button onClick={clearCart}>Vaciar Carrito</button>
      <Link to="/checkout" style={{ marginLeft: 10 }}>
        Finalizar compra
      </Link>
    </div>
  );
};

export default Cart;
