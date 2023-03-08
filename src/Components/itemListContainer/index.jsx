import './itemListContainer.css';
import ItemList from '../itemList';
import { useEffect, useState } from 'react';
import productsList from '../mocks/productsList';
function ItemListContainer() {
  const [products, setProducts]=useState([]);
  useEffect(() => {
    const showProductsList = new Promise((resolve, reject) =>
      setTimeout(() => resolve(productsList), 2000)
    );
    showProductsList
      .then((response) => setProducts(response))
      .catch((error) => console.log(error));
  }, []);
  console.log({products});
  return <div>
    <ItemList products={products} />
  </div>;
}

export default ItemListContainer;