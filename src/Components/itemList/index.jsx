import Item from "../item";
function ItemList({products}) {
    return <div>
     <ul>{products.map((product, index)=> <Item product={product} key={product.id} /> )} </ul>
    </div>;
  }
  export default ItemList;