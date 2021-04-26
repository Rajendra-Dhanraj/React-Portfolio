import React from "react";
import rajResume from "../../../assets/images/Rajendra_Dhanraj.pdf";

function Resume() {
  return (
    <section className="resume">
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>REST API's</li>
        <li>Node.js</li>
        <li>Object Oriented Programming</li>
        <li>Express.js</li>
        <li>SQL</li>
        <li>MongoDB</li>
        <li>Mongoose</li>
        <li>Model-View-Controller</li>
        <li>NPM</li>
        <li>GIT</li>
        <li>React</li>
        <li>Responsive Web Design</li>
        <li>Insomia Core</li>
        <li>Handle-Bars</li>
        <li>GitHub</li>
        <li>Heroku</li>
        <li>Web-Pack</li>
      </ul>

      <a href={rajResume} className="resumedl" download>
        Click to download my resume!
      </a>
    </section>
  );
}

export default Resume;
