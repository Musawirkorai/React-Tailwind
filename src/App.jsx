import { useState } from 'react';

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div style={{ width: '100vw', height: '100vh', display:'flex' ,alignItems:'center',justifyContent:'center', backgroundColor: color }} >
      <button onClick={() => setColor("red")} style={{ backgroundColor: "red", color: "white" }}> Red</button>
      <button onClick={() => setColor("blue")} style={{ backgroundColor: "blue", color: "white" }}> Blue</button>
      <button onClick={() => setColor("green")} style={{ backgroundColor: "green", color: "white" }}> Green</button>
      <button onClick={() => setColor("yellow")} style={{ backgroundColor: "yellow", color: "black" }}> Yellow</button>
      <button onClick={() => setColor("orange")} style={{ backgroundColor: "orange", color: "white" }}> Orange</button>
      <button onClick={() => setColor("black")} style={{ backgroundColor: "black", color: "white" }}> Black</button>
      <button onClick={() => setColor("pink")} style={{ backgroundColor: "pink", color: "black" }}> Pink</button>
      <button onClick={() => setColor("olive")} style={{ backgroundColor: "olive", color: "white" }}> Olive</button>
    </div>
  );
}

export default App;
