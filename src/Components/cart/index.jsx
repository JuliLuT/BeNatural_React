import { useContext } from "react";
import { Contexto } from "../../Context";

function CartComponent(){
const{cartProducts}=useContext(Contexto)
return(
    cartProducts.map((product)=>
    {<p>{product.name} </p>}
    )
)
}
export default CartComponent;