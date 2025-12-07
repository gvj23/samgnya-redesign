// src/App.tsx (example)
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ResearchPage from "./pages/ResearchPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/research" element={<ResearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}
