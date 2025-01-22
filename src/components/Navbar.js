// src/components/Navbar.js
import React from "react";


function Navbar({ selectedTool, setSelectedTool }) {
    
  return (
    <nav>
      <button
        className={selectedTool === "translator" ? "active" : ""}
        onClick={() => setSelectedTool("translator")}
      >
        Traductor Inteligente
      </button>
      <button
        className={selectedTool === "summary" ? "active" : ""}
        onClick={() => setSelectedTool("summary")}
      >
        Resumidor Inteligente
      </button>
    </nav>
  );
}

export default Navbar;
