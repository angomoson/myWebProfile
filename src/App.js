import React from "react";
import "./App.css";
import About from "./components/About/About";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import Proj from "./components/Proj/Proj";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Proj />
      <Skills />
    </div>
  );
}

export default App;
