import CartWidget from "../CartWidget/CartWidget";
import logo from "../NavBar/assets/Logo-extintores.png";

//Creación de un componente
const NavBar = () => {
  //importamos el componente del carrito
  return (
    //Retorna la parte visual del menu
    <nav>
      <img src={logo} />
      <div class="nav-div-botones">
        <button>Extintores</button>
        <button>Chanchas</button>
        <button>Accesorios</button>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar; //Exportamos el componente, para luego importarlo en el componente principal (app)
