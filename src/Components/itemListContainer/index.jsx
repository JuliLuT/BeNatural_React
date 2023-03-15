import "./itemListContainer.css";
import ItemList from "../itemList";
import { useEffect, useState } from "react";
import productsList from "../mocks/productsList";

function ItemListContainer({ category, categoryExists }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const showProductsList = new Promise((resolve, reject) =>
      setTimeout(() => resolve(productsList), 2000)
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
  console.log({ products });
  return (
    <div>
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;
