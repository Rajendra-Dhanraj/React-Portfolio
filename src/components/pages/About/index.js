import React from "react";

import headShot from "../../../assets/images/raj-headshot.jpeg";

function About() {
  return (
    <section className="about">
    
      <h1>About Me</h1>
      <img src={headShot} alt="developer head shot" />
      <p>
        Hi, I'm Raj. A Full-Stack Web Developer studying at the University of
        Toronto. I have over 10 years of experience working in the financial industry. I believe my expertice of banking systems will allow me to flourish within the technology space.
      </p>
    </section>
  );
}

export default About;