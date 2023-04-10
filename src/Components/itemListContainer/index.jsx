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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "Items");

    setIsLoading(true);

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
        .catch((error) => console.log({ error }))
        .finally(() => setIsLoading(false));
    } else {
      getDocs(itemsCollection)
        .then((snapshot) => {
          const docs = snapshot.docs;
          setProducts(docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        })
        .catch((error) => console.log({ error }))
        .finally(() => setIsLoading(false));
    }
  }, [category]);

  return (
    <>
      {isLoading ? (
        <div className="Loading"></div>
      ) : (
        <ItemList products={products} />
      )}
    </>
  );
}

export default ItemListContainer;
