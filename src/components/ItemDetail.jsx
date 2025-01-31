

// src/components/ItemDetail.jsx


import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";  
import { useCart } from "../context/CartContext";

const ItemDetail = ({ item }) => {
  const { addItem } = useCart();
  const handleAdd = (quantity) => {
    addItem(item, quantity);
  };

  if (!item) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <div className="item-detail">
      <img src={item.image} alt={item.name} style={{ width: 200 }} />
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>Precio: ${item.price}</p>
      <p>Categoría: {item.category}</p>
      <p>Stock: {item.stock}</p>

      <ItemCount 
        initial={1} 
        stock={item.stock} 
        onAdd={handleAdd} 
      />

      <div style={{ marginTop: "1rem" }}>
        <Link to="/cart" style={{ marginRight: 10 }}>Ver Carrito</Link>
        <Link to="/">Seguir Comprando</Link>
      </div>
    </div>
  );
};

export default ItemDetail;
