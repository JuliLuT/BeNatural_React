import Card from "react-bootstrap/Card";
import "./item.css";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";

function Item({ product }) {
  return (
    <Col >
   
      <Card  className="card"style={{ width: "18rem" }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.name} </Card.Title>
          <Card.Text>$ {product.price}</Card.Text>
          <div className="buttons">
            <button className="normalButton">
              <Link to={`/item/${product.id}`}>Detalle</Link>
            </button>
            <button className="normalButton">Añadir al carrito</button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Item;
