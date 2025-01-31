
// src/components/ItemList.jsx


import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <div className="item-list">
      {items.map((prod) => (
        <Item key={prod.id} item={prod} />
      ))}
    </div>
  );
};

export default ItemList;
