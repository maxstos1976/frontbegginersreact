import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(0);
  const [texto, setTexto] = useState("Texto...");

  const handleClick = () => {
    setValue(value + 1);
  };

  const handleChange = (e) => {
    setTexto(e.target.value);
  };

  return (
    <>
      <h1>UseState</h1>
      <p>
        <button style={{ backgroundColor: "red" }} onClick={handleClick}>
          Incrementar: {value}
        </button>
      </p>

      <input onChange={handleChange} value={texto}></input>
      <p>{texto}</p>
    </>
  );
}

export default App;
