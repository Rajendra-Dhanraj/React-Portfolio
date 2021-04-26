import React from "react";


function Nav(props) {
  return <header className="header-container">
      <h2>
          <a href="/">
           <span className="devName">Raj Dhanraj</span>   
          </a>
      </h2>
      <nav>
          <ul>
              <li>
                  <span onClick={() => props.setCurrentPage("About")} >About Me</span>
              </li>
              <li>
                  <span onClick={() => props.setCurrentPage("Portfolio")}>Portfolio</span>
              </li>
              <li>
                  <span onClick={()=> props.setCurrentPage("ContactForm")}>Contact</span>
              </li>
              <li>
                  <span onClick={() => props.setCurrentPage("Resume")}>Resume</span>
              </li>
          </ul>
      </nav>
  </header>;
}

export default Nav;
