import Item from "../item";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
function ItemList({ products }) {
  return (
    <div>
      <ul>
        <Container>
          <Row>
            {products.map((product, index) => (
              <Item product={product} key={product.id} />
            ))}{" "}
          </Row>
        </Container>
      </ul>
    </div>
  );
}
export default ItemList;
