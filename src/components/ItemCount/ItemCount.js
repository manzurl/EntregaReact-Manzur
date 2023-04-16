import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, initial, onAdd }) => {
  //el componente recibe el stock, el valor inicial y la funcion onAdd como props
  const [quantity, setQuantity] = useState(initial); //manejamos el estado de la cantidad del contador

  const increment = () => {
    //Funaciona de incrementar el valor con validacion
    if (quantity < stock) {
      setQuantity(quantity + 1);
    } else {
      alert("No hay mas unidades en stock");
    }
  };

  const decrement = () => {
    //Funaciona de decrementar el valor con validacion
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    //creamos el componente con los controles
    <div className="Counter">
      <div className="Controls">
        <button className="Button" on onClick={decrement}>
          -
        </button>
        <h4 className="Number">{quantity}</h4>
        <button className="Button" onClick={increment}>
          +
        </button>
      </div>
      <div>
        <button className="Button" onClick={() => onAdd(quantity)} disabled={!stock}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
  //el ultimo boton ejecuta como callBack la funcion pasada por props, la propiedad disabled valida en caso que no haya estock para que no se ejecute
};

export default ItemCount;
