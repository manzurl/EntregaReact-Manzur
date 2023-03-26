//importamos la imagen del carrito para poder mostrarla dentro de este componente
import cart from "./assets/cart.svg";

const CartWidget = () => {
  //creamos el componente cartwidget para luego retornoarlo a la app
  return (
    <div>
      <img src={cart} alt="cart-widget" class="carrito" />0
    </div>
  );
};

export default CartWidget;
