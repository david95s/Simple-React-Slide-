import React from "react";
import "./App.css";
import Slide from "./components/Slide";
import foto1 from "/src/assets/imagem_1.jpg";
import foto2 from "/src/assets/imagem_2.jpg";
import foto3 from "/src/assets/imagem_3.jpg";
function App() {
  const slides = [
    {
      id: "slide1",
      text: "Slide 1",
      src: foto1,
    },
    {
      id: "slide2",
      text: "Slide 2",
      src: foto2,
    },
    {
      id: "slide3",
      text: "Slide 3",
      src: foto3,
    },
  ];

  return (
    <div>
      <Slide slides={slides} />
    </div>
  );
}

export default App;
