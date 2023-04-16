//La funcion de este componente recibe la propiedad GREETING (Saludo) como parametro y lo muestra en la app

import { useEffect, useState } from "react";
import { getProducts } from "../../asyncMock";
import ItemList from "../ItemList/ItemList.js";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]); //estado que se encarga de almacenar los productos

  useEffect(() => {
    getProducts() //obtiene el array de productos
      .then((response) => {
        setProducts(response); //guarda los productos en nuestro estado para luego pasarlo por props al componente item list en el return
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
