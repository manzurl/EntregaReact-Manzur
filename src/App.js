import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";

function App() {
  return (
    //retornamos componentes dentro de la app
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"Bienvenido"} />
      {/*Le pasamos parametro a la propiedad greeting del componente (saludo) la palabra 'Bienvenido' */}

      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log("Cantidad Agregada", quantity)} />
    </div>
  );
}
export default App;
