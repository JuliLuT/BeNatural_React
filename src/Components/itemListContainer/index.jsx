import ItemList from "../itemList";
import { useEffect, useState } from "react";
import {
  collection,
  getFirestore,
  getDocs,
  query,
  where,
} from "firebase/firestore";

function ItemListContainer({ category, categoryExists }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "Items");
    if (categoryExists) {
      const queryResult = query(
        itemsCollection,
        where("category", "==", category)
      );
      getDocs(queryResult)
        .then((snapshot) => {
          const docs = snapshot.docs;
          setProducts(docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        })
        .catch((error) => console.log({ error }));
    } else {
      getDocs(itemsCollection)
        .then((snapshot) => {
          const docs = snapshot.docs;
          setProducts(docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        })
        .catch((error) => console.log({ error }));
    }
  }, [category]);
  return <ItemList products={products} />;
}

export default ItemListContainer;
