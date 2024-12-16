// https://www.youtube.com/watch?v=lIPhz8SlwAg
//Como criar um MODAL com REACT #Dia5

import React from "react";
import "./modal.css";

const BACKGROUND_STYLE = {
  position: "fixed",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  zIndex: 1000,
  width: "100%",
  height: "100%",
};

const BACKGROUND_MODAL = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: "150px",
  backgroundColor: "#fff",
  borderRadius: "10px",
  color: "#000",
};

export default function Modal({ isOpen, setModalOpen, children }) {
  if (isOpen) {
    return (
      <div className="modal" style={BACKGROUND_STYLE}>
        <div style={BACKGROUND_MODAL}>
          <div>{children}</div>
          <button onClick={setModalOpen}>Close</button>
        </div>
      </div>
    );
  }
  return null;
}
