
// src/components/ItemCount.jsx

import { useState } from "react";

const ItemCount = ({ initial = 1, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleSum = () => {
    if (count < stock) setCount(count + 1);
  };

  const handleSub = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleClick = () => {
    if (stock > 0) {
      onAdd(count);
    }
  };

  return (
    <div className="item-count">
      <div className="controls"> 
        <button onClick={handleSub}>-</button>
        <span style={{ margin: "0 10px" }}>{count}</span>
        <button onClick={handleSum}>+</button>
      </div>
      <button onClick={handleClick} disabled={stock === 0}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
