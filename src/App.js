import React from "react";
// import logo from './logo.svg';
import "./App.css";
import About from "./components/About";
import ContactForm from "./components/Contact";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <Portfolio></Portfolio>
        <About></About>
        <ContactForm></ContactForm>
      </main>
    </div>
  );
}

export default App;
