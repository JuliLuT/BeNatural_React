import ItemList from "../itemList";
import { useEffect, useState } from "react";
import productsList from "../mocks/productsList";

function ItemListContainer({ category, categoryExists }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const showProductsList = new Promise((resolve, reject) =>
      setTimeout(() => resolve(productsList), 500)
    );
    showProductsList
      .then((response) => {
        if (categoryExists) {
          const filteredByCategory = response.filter(
            (product) => product.category === category
          );
          setProducts(filteredByCategory);
        } else {
          setProducts(response);
        }
      })

      .catch((error) => console.log(error));
  }, [categoryExists, category]);
  ;
  return (
   
        <ItemList products={products} />
      
  );
}

export default ItemListContainer;
