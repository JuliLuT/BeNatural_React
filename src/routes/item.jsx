import NavBar from "../Components/NavBar";
import ItemDetailContainer from "../Components/itemDetailContainer";
import { useParams } from "react-router-dom";
function ItemRoot() {
  const {id}=useParams();
  return (
    <div>
      <NavBar />
      <ItemDetailContainer productDetail={id}/>
    </div>
  );
}

export default ItemRoot;
