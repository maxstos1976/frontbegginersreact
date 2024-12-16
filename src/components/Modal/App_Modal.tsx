import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="App">
      <h1>Modal</h1>
      <p>
        <button
          onClick={() => {
            setIsOpen(true);
          }}
        >
          {" "}
          {isOpen ? "Close" : "Open"}
        </button>
      </p>
      <Modal isOpen={isOpen} setModalOpen={() => setIsOpen(!isOpen)}>
        <img
          style={{
            cursor: "pointer",
            width: "20px",
            height: "20px",
            position: "absolute",
            top: "10px",
            right: "10px",
          }}
          onClick={() => setIsOpen(!isOpen)}
          src="./src/images/botao-fechar.png"
          alt="logo"
        />
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          <p>Conteudo do Modal</p>
        </div>
      </Modal>
    </div>
  );
}

export default App;
