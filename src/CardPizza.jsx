import React from "react";

function CardPizza() {
  const pizzas = [
    {
      desc: "Clásica pizza con masa suave y bordes altos. Tomate, mozzarella, jamón y orégano se combinan en un sabor tradicional italiano.",
      id: "P001",
      img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c",
      ingredients: ["mozzarella", "tomates", "jamón", "orégano"],
      name: "Napolitana",
      price: 5950,
    },
    {
      desc: "Pizza con sabor intenso y toques españoles. Mozzarella, tomates, jamón y choricillo se unen para crear una experiencia única.",
      id: "P002",
      img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab",
      ingredients: ["mozzarella", "tomates", "jamón", "choricillo"],
      name: "Española",
      price: 7250,
    },
    {
      desc: "Deliciosa pizza con salame y orégano. La combinación perfecta de sabores italianos en una masa crujiente y sabrosa.",
      id: "P003",
      img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3",
      ingredients: ["mozzarella", "tomates", "salame", "orégano"],
      name: "Salame",
      price: 5990,
    },
    {
      desc: "Una pizza con variedad de ingredientes. Mozzarella, salame, aceitunas y champiñones se distribuyen en cuatro secciones distintas.",
      id: "P004",
      img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-2000595_640_c.jpg?alt=media&token=61325b6e-a1e0-441e-b3b5-7335ba13e8be",
      ingredients: ["mozzarella", "salame", "aceitunas", "champiñones"],
      name: "Cuatro estaciones",
      price: 9590,
    },
    {
      desc: "Pizza con un toque ahumado y dulce. Mozzarella, tomates cherry, bacon y orégano se combinan para un sabor irresistible",
      id: "P005",
      img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-salame.jpg?alt=media&token=ab3d4bf8-01f2-4810-982b-bd7fb6b517b2",
      ingredients: ["mozzarella", "tomates cherry", "bacon", "orégano"],
      name: "Bacon",
      price: 6450,
    },
    {
      desc: "Pizza para los amantes del picante. Mozzarella, pimientos, pollo grillé y orégano se unen en una explosión de sabor.",
      id: "P006",
      img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-2000595_640_c.jpg?alt=media&token=61325b6e-a1e0-441e-b3b5-7335ba13e8be",
      ingredients: ["mozzarella", "pimientos", "pollo grillé", "orégano"],
      name: "Pollo picante",
      price: 8500,
    },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "10px",
      }}
    >
      {pizzas.map((pizza) => (
        <div
          key={pizza.id}
          style={{
            border: "1px solid #ccc",
            margin: "10px",
            padding: "10px",
            width: "300px",
          }}
        >
          <img src={pizza.img} alt={pizza.name} style={{ width: "100%" }} />
          <h3>{pizza.name}</h3>
          <p>{pizza.desc}</p>
          <p>Precio: ${pizza.price}</p>
          <div>
            <strong>Ingredientes:</strong>
            <ul>
              {pizza.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <button>Agregar al carrito</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardPizza;
