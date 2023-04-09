import ItemDetail from "../ItemDetail";
import { useEffect, useState } from "react";
import{doc, getDoc,getFirestore}from "firebase/firestore"
import { useParams } from "react-router-dom";


function ItemDetailContainer() {
const[product, setProduct]=useState(null);
const params= useParams()
  useEffect(() => {
    const db = getFirestore();
    const itemRef = doc(db, "Items", params.id);
    
    getDoc(itemRef)
    .then((snapshot)=>{
      if(snapshot.exists()){
        setProduct({id:snapshot.id,...snapshot.data()})
      }
    })
    .catch((error)=>console.log({error}))

  }, []);
  if(!product){
    return  <h2 className="Loading">
    Cargando producto...
  </h2>
  }
  return (
    <div>
      <ItemDetail product={product} />
    </div>
  );
}
export default ItemDetailContainer;
