import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    //retornamos componentes dentro de la app
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"Bienvenido"} />
      {/*Le pasamos parametro a la propiedad greeting del componente (saludo) la palabra 'Bienvenido' */}

      <ItemDetailContainer />
    </div>
  );
}
export default App;
