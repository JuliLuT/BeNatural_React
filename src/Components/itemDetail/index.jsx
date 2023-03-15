import "./itemDetail.css";
import React, { useState } from "react";
import productsList from "../mocks/productsList";


function ItemDetail({product=productsList}) {

  const [quantity, setQuantity] = useState(1);

  return (

    <div className="content">
      <div className="image">
        <img src={product.image} />
      </div>
      <div className="description">
        <p>{product.description}</p>
        <p>{product.price}</p>
        <div className="fotterDesc">
          <button
            className="normalButton"
            onClick={() => setQuantity(quantity - 1)}
          >
            -
          </button>
          <p className="quantity">{quantity}</p>
          <button
            className="normalButton"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
        </div>
        <div className="compra">
          <button className="normalButton">Comprar</button>
          <button className="normalButton">Añadir al carrito</button>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
