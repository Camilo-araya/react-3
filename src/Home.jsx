import React from "react";
import CardPizza from "./CardPizza";
//import napolitana from "../assets/img/napolitana.jpg";//
//import peperoni from "../assets/img/peperoni.jpg";//
//import española from "../assets/img/española.jpg";//
import Header from "./Header";

function Home() {
  return (
    <div style={{ width: "100vw" }}>
      <Header />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          padding: "20px",
        }}
      >
        <CardPizza />
      </div>
    </div>
  );
}

export default Home;
