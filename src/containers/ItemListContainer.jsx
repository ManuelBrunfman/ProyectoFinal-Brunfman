
// src/containers/ItemListContainer.jsx


import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";
import ItemList from "../components/ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const productsRef = collection(db, "items");
    let q = productsRef;

    if (categoryId) {
      q = query(productsRef, where("category", "==", categoryId));
    }

    getDocs(q)
      .then((resp) => {
        const docs = resp.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setItems(docs);
      })
      .finally(() => setLoading(false));
  }, [categoryId]);

  return (
    <div>
      {loading ? <p>Cargando productos...</p> : <ItemList items={items} />}
    </div>
  );
};

export default ItemListContainer;
