import "./App.css";

import Home from "./components/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Project from "./components/Project";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:title" element={<Project />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
