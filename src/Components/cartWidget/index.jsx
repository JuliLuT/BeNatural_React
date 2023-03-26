import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { useContext } from "react";
import { Contexto } from "../../context";
function CartWidget() {
  const {cartProducts}=useContext(Contexto);
  return (
    <div>
      <p className="cart">
        <Link to={"/cart"}>
          <BsCart3></BsCart3>{cartProducts.length}
        </Link>
      </p>
    </div>
  );
}

export default CartWidget;
