import React from "react";
import "./App.css";
import About from "./components/About/About";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import Proj from "./components/Proj/Proj";
import Skills from "./components/Skills/Skills";
import Hobby from "./components/Hobby/Hobby";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <hr className="black-hr"></hr>
      <Proj />
      <About />
      <Skills />
      <Hobby />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
