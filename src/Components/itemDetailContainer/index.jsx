import ItemDetail from "../ItemDetail";
import { useEffect, useState } from "react";
import products from "../mocks/productsList"

function ItemDetailContainer({ productDetail }) {
  const [oneProduct, setoneProduct] = useState({});

  useEffect(() => {
    const detail = products.find(
      (product) => product.id === parseInt(productDetail) 
    );
    setoneProduct(detail);
  }, [productDetail]);

  return (
    <div>
      <ItemDetail product={oneProduct} />
    </div>
  );
}
export default ItemDetailContainer;
