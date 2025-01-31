

// src/containers/CheckoutForm.jsx


import { useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase/config";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const CheckoutForm = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const [orderId, setOrderId] = useState("");
  const [buyer, setBuyer] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleInputChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const order = {
      items: cart,
      total: totalPrice,
      buyer: { ...buyer },
      date: Timestamp.fromDate(new Date())
    };

    try {
      const docRef = await addDoc(collection(db, "orders"), order);
      setOrderId(docRef.id);
      clearCart(); 
    } catch (error) {
      console.error("Error al crear la orden", error);
    }
  };

  if (orderId) {
    return (
      <div>
        <h2>¡Gracias por tu compra!</h2>
        <p>Tu número de orden es: <strong>{orderId}</strong></p>
        <Link to="/">Volver al inicio</Link>
      </div>
    );
  }

  return (
    <div className="checkout-form">
      <h2>Finalizar compra</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre</label>
          <input
            type="text"
            name="name"
            value={buyer.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Correo</label>
          <input
            type="email"
            name="email"
            value={buyer.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Teléfono</label>
          <input
            type="tel"
            name="phone"
            value={buyer.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Confirmar compra</button>
      </form>
    </div>
  );
};

export default CheckoutForm;
