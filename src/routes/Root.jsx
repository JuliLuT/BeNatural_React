import NavBar from "../Components/NavBar";
import { useParams } from "react-router-dom";
import ItemListContainer from "../Components/itemListContainer";

function Root() {
  const params = useParams();
  const categoryExists = Boolean(params.id);
  return (
    <div>
      <NavBar />
      <ItemListContainer categoryExists={categoryExists} category={params.id} />
    </div>
  );
}

export default Root;
