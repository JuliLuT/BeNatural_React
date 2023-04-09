import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { useContext } from "react";
import { Contexto } from "../../Context";
function CartWidget() {
  const {cartProducts} = useContext(Contexto);
  const totalQuantity = cartProducts.reduce((total, product) => total + product.quantity, 0);

  return (
    <div>
      {totalQuantity !== 0 ? (
        <p className="cart">
          <Link to={"/cart"}>
            <BsCart3></BsCart3>{totalQuantity}
          </Link>
        </p>
      ) : <BsCart3></BsCart3>}
    </div>
  );
}

export default CartWidget;
