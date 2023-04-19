//La funcion de este componente recibe la propiedad GREETING (Saludo) como parametro y lo muestra en la app

import { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList.js";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]); //estado que se encarga de almacenar los productos

  const { categoryId } = useParams(); //Parametro de URL

  useEffect(() => {
    const asyncFunc = categoryId ? getProductsByCategory : getProducts; //Llama a productos filtrados por categoria, o de no tener uno llama a todas las categorias.

    asyncFunc(categoryId)
      .then((response) => {
        setProducts(response); //guarda los productos en nuestro estado para luego pasarlo por props al componente item list en el return
        console.log(products);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [categoryId]);

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
