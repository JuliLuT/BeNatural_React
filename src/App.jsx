import NavBar from "./Components/NavBar";
import ItemListContainer from "./Components/itemListContainer";
function App() {
  return <div>
    <NavBar />
    <ItemListContainer greeting={'Hola User!'} />
  </div>;
}

export default App;
