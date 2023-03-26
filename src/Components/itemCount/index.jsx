import React, { useState } from "react";
import{BsCart3} from "react-icons/bs"
function ItemCount({ add }) {
  const [counter, setCounter] = useState(1);
  return (
    <div className="counterContainer">
      <div className="counterButtons">
        <div>
          <button
            className="normalButton"
            onClick={() => setCounter((prevQuantity) => prevQuantity - 1)}
            disabled={counter <= 1}
          >
            -
          </button>
        </div>
        <div className="counter">{counter} </div>
        <div>
          <button
            className="normalButton"
            onClick={() => setCounter((prevQuantity) => prevQuantity + 1)}
          >
            +
          </button>
        </div>
      </div>
      <div className="addCart">
        <button className="normalButton" onClick={() => add(counter)}>
          Añadir <BsCart3></BsCart3>
        </button>
      </div>
    </div>
  );
}
export default ItemCount;
