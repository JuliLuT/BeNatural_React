import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './item.css'
function Item({product}) {
    return (
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {product.image} />
      <Card.Body>
        <Card.Title>{product.name} </Card.Title>
        <Card.Text>
          $ {product.price}
        </Card.Text>
        <Button>Detalle</Button>
        <Button className='button' >Añadir al carrito</Button>
      </Card.Body>
    </Card>
    );
  }
  
  export default Item;