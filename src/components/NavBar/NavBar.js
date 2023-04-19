import CartWidget from "../CartWidget/CartWidget";
import logo from "../NavBar/assets/Logo-extintores.png";
import { NavLink, Link } from "react-router-dom";

//Creación de un componente
const NavBar = () => {
  //importamos el componente del carrito
  return (
    //Retorna la parte visual del menu
    <nav className="NavBar">
      <Link to="/">
        <img src={logo} />
      </Link>

      <div class="nav-div-botones">
        <NavLink to={`/category/Extintores`} className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}>
          Extintores
        </NavLink>
        <NavLink to={`category/Chanchas`} className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}>
          Chanchas
        </NavLink>
        <NavLink to={`/category/Accesorios`} className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}>
          Accesorios
        </NavLink>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar; //Exportamos el componente, para luego importarlo en el componente principal (app)
