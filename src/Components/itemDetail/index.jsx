import "./itemDetail.css";
import { useContext, useState } from "react";
import productsList from "../mocks/productsList";
import ItemCount from "../itemCount";
import { Link } from "react-router-dom";
import { Contexto } from "../../Context";

function ItemDetail({ product = productsList }) {
  const{addInCart}=useContext(Contexto)
  const [quantity, setQuantity] = useState(0);
  function addProduct(counter) {
    setQuantity(counter);
    addInCart(product, counter);
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
        <p className="price">Unidades disponibles: {product.stock}</p>
        <div className="fotterDesc">
          <div>
            {quantity == 0 && <ItemCount stock={product.stock} add={addProduct} />}
            <div className="suma">
              {quantity >= 1 && (
                <Link to={"/cart"}>
                  <button className="normalButton">Ir al carrito</button>
                </Link>
              )}
              <Link to={"/"}>
            <button className="normalButton">Seguir comprando</button>{" "}
          </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
