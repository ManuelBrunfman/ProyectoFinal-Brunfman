

// src/components/CartItem.jsx


import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const CartItem = ({ item }) => {
  const { removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h3>{item.name}</h3>
      <p>Cantidad: {item.quantity}</p>
      <p>Subtotal: ${item.price * item.quantity}</p>
      <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
    </div>
  );
};

export default CartItem;