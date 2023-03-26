import "./itemDetail.css";
import { useState } from "react";
import productsList from "../mocks/productsList";
import ItemCount from "../itemCount";
import { Link } from "react-router-dom";

function ItemDetail({ product = productsList }) {
  const [quantity, setQuantity] = useState(0);
  function add(counter) {
    setQuantity(counter);
  }

  return (
    <div className="content">
      <div className="image">
        <img src={product.image} />
      </div>
      <div className="description">
        <h3 className="title">{product.name} </h3>
        <p>{product.description}</p>
        <p className="price">$ {product.price}</p>
        <div className="fotterDesc">
          <div>
            {quantity == 0 && <ItemCount add={add} />}
            <div className="suma">
              {quantity >= 1 && (
                <Link to={"/cart"}>
                  <button className="normalButton">Ir al carrito</button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
