import React, { useState } from "react";
import "./App.css";
import About from "./components/pages/About";
import ContactForm from "./components/pages/Contact";
import Nav from "./components/partials/Nav";
import Resume from "./components/pages/Resume";
import Portfolio from "./components/pages/Portfolio";
import Footer from "./components/partials/Footer"

function App() {
  const [currentPage, setCurrentPage] = useState("About");

  function loadCurrentPage() {
    if (currentPage === "About") {
      return <About />;
    } else if (currentPage === "ContactForm") {
      return <ContactForm />;
    } else if (currentPage === "Resume") {
      return <Resume />;
    } else if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
  }

  return (
    <div>
      <Nav setCurrentPage={setCurrentPage} />
      {loadCurrentPage()}
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
