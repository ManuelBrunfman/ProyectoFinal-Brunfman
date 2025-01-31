
// src/containers/ItemDetailContainer.jsx


import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import ItemDetail from "../components/ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    const docRef = doc(db, "items", itemId);
    getDoc(docRef)
      .then((resp) => {
        if (!resp.exists()) {
          console.error("El producto no existe en la base de datos");
          return;
        }
        setItem({ id: resp.id, ...resp.data() });
      })
      .finally(() => setLoading(false));
  }, [itemId]);

  return (
    <div>
      {loading ? <p>Cargando detalle...</p> : <ItemDetail item={item} />}
    </div>
  );
};

export default ItemDetailContainer;
