// src/components/Navbar.test.js
import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

test("Renderiza botones de navegación", () => {
  render(<Navbar selectedTool="translator" setSelectedTool={() => {}} />);
  expect(screen.getByText("Traductor Inteligente")).toBeInTheDocument();
  expect(screen.getByText("Resumidor Inteligente")).toBeInTheDocument();
});
