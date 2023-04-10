import { useContext, useState } from 'react';
import { Contexto } from '../../Context';
import "./checkOut.css"

const Checkout = () => {
  const { cartProducts, sendOrder } = useContext(Contexto);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email1, setEmail1] = useState('');
  const [email2, setEmail2] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email1 !== email2) {
      alert('Los correos electrónicos no coinciden');
      return;
    }
    sendOrder(name, email1, phone);
  };

  return (
    <div>
      <h2 className='title'>Formulario de compra</h2>
      <form onSubmit={handleSubmit} className='formularioCheckout'>
        
          <input type="text" value={name} onChange={(e) => setName(e.target.value)}  aria-label='Nombre y Apellido' required placeholder='Nombre y apellido' />
        
        <br />
        
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required aria-label='Telefono' placeholder='Telefono' />
        
        <br />
    
          <input type="email" value={email1} onChange={(e) => setEmail1(e.target.value)} required aria-label='email' placeholder='Email'/>

        <br />
       
          <input type="email" value={email2} onChange={(e) => setEmail2(e.target.value)} required aria-label='Confirmar Email' placeholder='Repita su email' />
    
        <br />
        <button type="submit" className='normalButton'>Comprar</button>
      </form>
      <h3 className='title'>Resumen de la Compra:</h3>
      <ul>
        {cartProducts.map((product) => (
          <li key={product.id} className='resumenCompra'>
            {product.name} x{product.quantity} <p>unidades</p> ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Checkout;

