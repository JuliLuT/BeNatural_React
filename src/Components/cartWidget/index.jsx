import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs"
function CartWidget() {
  return (
    <div>
      <p  className="cart"> <Link to={"/cart"}><BsCart3></BsCart3>(4)</Link></p>
    </div>
  );
}

export default CartWidget;
