//La funcion de este componente recibe la propiedad GREETING (Saludo) como parametro y lo muestra en la app

const ItemListContainer = ({ greeting }) => {
  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
};

export default ItemListContainer;
