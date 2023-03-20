import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./item.css";
import { Link } from "react-router-dom";


function Item({ product }) {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Card style={{ width: "18rem" }}>
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
      </Row>
    </Container>
  );
}

export default Item;
