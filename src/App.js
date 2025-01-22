// src/App.js
import React, { useState } from "react";
import "./App.css";
import Traductor from "./Traductor";
import SummaryTool from "./SummaryTool";
import Navbar from "./components/Navbar";
import ProgressBar from "./ProgressBar";
// Ejemplo en App.js o Traductor.js
import { API_URL } from "./config";

console.log(API_URL); // http://localhost:5000


function App() {
  const [selectedTool, setSelectedTool] = useState("translator");
  const [loading, setLoading] = useState(false); // Estado de carga global
  const [error, setError] = useState(""); // Estado de error global
  const [progress, setProgress] = useState(0); // Progreso dinámico

  const startLoading = () => {
    setLoading(true);
    setError(""); // Limpiar errores al iniciar
  };

  const stopLoading = () => {
    setLoading(false);
    setProgress(0); // Reiniciar progreso
  };

  const handleError = (errorMessage) => {
    setError(errorMessage);
    setLoading(false); // Detener carga cuando hay un error
  };

  const updateProgress = (value) => {
    setProgress(value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>LinguaFlow - Aprende idiomas con IA</h1>
        <Navbar selectedTool={selectedTool} setSelectedTool={setSelectedTool} />
      </header>

      <main>
        {loading && <ProgressBar progress={progress} />}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {selectedTool === "translator" && (
          <Traductor
            startLoading={startLoading}
            stopLoading={stopLoading}
            handleError={handleError}
            updateProgress={updateProgress} // Para reflejar el progreso
          />
        )}

        {selectedTool === "summary" && (
          <SummaryTool
            startLoading={startLoading}
            stopLoading={stopLoading}
            handleError={handleError}
            loading={loading}
            updateProgress={updateProgress} // Para reflejar el progreso
          />
        )}
      </main>

      <footer>
        <p>© 2024 LinguaFlow. Potenciado por las APIs de Google y React.</p>
      </footer>
    </div>
  );
}

export default App;

