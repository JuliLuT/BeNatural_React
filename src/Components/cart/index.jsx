import { useContext } from "react";
import { Contexto } from "../../Context";
import { BsFillTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./cart.css";
function CartComponent() {
  const { cartProducts, removeItem,getTotalPrice, clear } =
    useContext(Contexto);
  return (
    <>
      {cartProducts.length === 0 ? (
        <div className="ifCartEmpty">
          <h2>Oops! parece que no tienes productos agregados!</h2>
          <p>Quieres añadir algunos?</p>
          <Link to={"/"}>
            {" "}
            <button className="normalButton">Buscar productos</button>{" "}
          </Link>
        </div>
      ) : (
        <>
          {cartProducts.map((product) => (
            <div className="cartContainer" key={product.id}>
              <div className="image">
                <img src={product.image} />
              </div>
              <div className="description">
                <h2 className="price">$ {product.price * product.quantity} </h2>
                <h2 className="price">{product.quantity} </h2>
              </div>
              <div className="eliminarItem">
                <button
                  className="normalButton"
                  onClick={() => removeItem(product)}
                >
                  <BsFillTrashFill></BsFillTrashFill>
                </button>
              </div>
            </div>
          ))}
          <div className="abonarCompra">
            <p>Total de la compra <span> ${getTotalPrice()}</span> </p>
            <button className="normalButton">Abonar  </button>
          </div>
          <div className="emptyCartContainer">
            <button className="emptyButton" onClick={clear}>
              Vaciar carrito
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default CartComponent;
