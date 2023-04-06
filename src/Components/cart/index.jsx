import "./cart.css";

function Cart() {
  return (
    <div className="container">
      <div>
        <div className="header">
        <h2>Mi compra</h2>
        </div>

      </div>
      <div className="producto">
        <div className="img">
          <img src="../public/assets/cremaA.jpg" />
        </div>
        <div className="descripcion">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius corporis
          voluptatibus nobis similique delectus accusantium voluptatem. Voluptas
          culpa aperiam illo nesciunt, minus cum ratione eos totam soluta alias
          iste expedita!
        </div>
      </div>
      <div className="buttons">
          <button className="normalButton">Terminar compra</button>
      </div>
    </div>
  );
}
export default Cart;
