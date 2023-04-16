//Array de objetos que representa cada uno de nuestros productos

const products = [
  {
    id: "1",
    name: "Extintor ABC 10 Kg",
    price: 7800,
    category: "Extintores",
    img: "https://http2.mlstatic.com/D_NQ_NP_930886-MLA47131182341_082021-O.webp",
    stock: 25,
    description: "Extintor ABC de 10 kg, con soporte mas chapa baliza",
  },
  {
    id: "2",
    name: "Extintor ABC 5 Kg",
    price: 5000,
    category: "Extintores",
    img: "https://http2.mlstatic.com/D_NQ_NP_718737-MLA54277842368_032023-O.webp",
    stock: 10,
    description: "Extintor ABC de 5 kg, con soporte mas chapa baliza",
  },
  {
    id: "3",
    name: "Extintor ABC 1 Kg",
    price: 2500,
    category: "Extintores",
    img: "https://http2.mlstatic.com/D_NQ_NP_755740-MLA54435361632_032023-O.webp",
    stock: 5,
    description: "Extintor ABC de 1 kg para tu vehiculo",
  },
  {
    id: "3",
    name: "Extintor ABC 1 Kg",
    price: 2500,
    category: "Extintores",
    img: "https://http2.mlstatic.com/D_NQ_NP_755740-MLA54435361632_032023-O.webp",
    stock: 5,
    description: "Extintor ABC de 1 kg para tu vehiculo",
  },
  {
    id: "4",
    name: "Extintor Co2 3.5 Kg",
    price: 10500,
    category: "Extintores",
    img: "https://http2.mlstatic.com/D_NQ_NP_687346-MLA48689163775_122021-O.webp",
    stock: 5,
    description: "Extintor CO2 con chapabaliza y soporte",
  },
  {
    id: "5",
    name: "Carro matafuego 50 KG",
    price: 105500,
    category: "Chanchas",
    img: "https://http2.mlstatic.com/D_NQ_NP_879854-MLA54406729992_032023-O.webp",
    stock: 3,
    description: "Extintor tipo chancha de 50 Kg ABC",
  },
  {
    id: "6",
    name: "Carro matafuego 25 CO2",
    price: 85000,
    category: "Chanchas",
    img: "https://http2.mlstatic.com/D_NQ_NP_968222-MLA48257804587_112021-O.webp",
    stock: 2,
    description: "Extintor tipo chancha de 25 Kg ABC",
  },
  {
    id: "7",
    name: "Kit de seguridad",
    price: 1500,
    category: "Accesorios",
    img: "https://http2.mlstatic.com/D_NQ_NP_892401-MLA54762517394_032023-O.webp",
    stock: 25,
    description: "Kit reglamentario de seguridad",
  },
  {
    id: "8",
    name: "Botiquin",
    price: 2500,
    category: "Accesorios",
    img: "https://http2.mlstatic.com/D_NQ_NP_713168-MLA52540170471_112022-O.webp",
    stock: 25,
    description: "Botiquin de primeros auxilios",
  },
];

export const getProducts = () => {
  //retorna una promesa que se resulve luego de un tiempo para emular retraso en la web.
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductById = (productId) => {
  //devuelve un producto que estamos buscando
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 500);
  });
};
