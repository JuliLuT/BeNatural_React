import './itemDetail.css'
import React, { useState } from 'react';

function ItemDetail() {
    const [quantity, setQuantity] = useState(1);
    return (
        <div className='content'>
            <div className='image'>
                <img src="./cremaA.jpg" />
            </div>
            <div className='description'>
               <p>Lorem ipsum dolor sit amet consectetur
                 adipisicing elit. Sapiente eligendi 
                 aliquid aspernatur ipsa soluta fuga 
                 quia ducimus sint, et, reprehenderit ea? 
                 Hic quae asperiores accusantium sequi 
                 nihil ab, officiis molestiae.</p> 
                 <p>price</p>
                <div className='fotterDesc'>
                    <button className='normalButton'onClick={() => setQuantity(quantity - 1)}>-</button>
                    <p className='quantity'>{quantity}</p>
                    <button className='normalButton' onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
                <div className='compra'>
                    <button className='normalButton'>Comprar</button>
                    <button className='normalButton'>Añadir al carrito</button>
                </div>
            </div>
        </div>

    )

}

export default ItemDetail;