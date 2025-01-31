// src/components/Item.jsx


import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div className="item-card">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>Precio: ${item.price}</p>
      <Link to={`/item/${item.id}`}>Ver Detalle</Link>
    </div>
  );
};

export default Item;
