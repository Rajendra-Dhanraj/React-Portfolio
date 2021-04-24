import React from "react";
import headShot from "../../assets/images/raj-headshot.jpeg";

function About() {
  return (
    <section>
      <h1>About Me</h1>
      <img src={headShot} alt="developer head shot" />
      <p>
        Hi, I'm Raj. A Full-Stack Web Developer studying at the University of
        Toronto.
      </p>
    </section>
  );
}

export default About;