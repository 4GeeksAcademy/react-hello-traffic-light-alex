
import React, { useState } from "react";
import TrafficLight from "./TrafficLight";
const Home = () => {
  const [color, setColor] = useState("");
  const [colors, setColors] = useState(["red", "yellow", "green"]);

  function elegirColor(newColor) {
    setColor(newColor);
  }

  function cambioColor() {
    const currentIndex = colors.indexOf(color);
    const nextIndex = (currentIndex + 1) % colors.length;
    setColor(colors[nextIndex]);
  }

  function ColorPurpura() {
    if (!colors.includes("purple")) {
      setColors([...colors, "purple"]);
    }
  }

  return (
    <div className="container-botones">
    <div>
      <TrafficLight color={color} elegirColor={elegirColor} colors={colors} />
      <button onClick={cambioColor}>Cambio de Color</button>
      <button onClick={ColorPurpura}>Púrpura</button>
      </div>
     </div>
  );
 
};

export default Home;
