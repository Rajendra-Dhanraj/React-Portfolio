import React from "react";
import techBlog from "../../../assets/images/tech-blog.png";
import bTracker from "../../../assets/images/bugdet-tracker.png";
import covid from "../../../assets/images/covid-positivity.png";
import dangles from "../../../assets/images/dangles.png";
import horiseon from "../../../assets/images/horiseon.png";
import rBuddy from "../../../assets/images/run-buddy.png";

function Portfolio() {
  return (
    <section>
      <div className="card-group">
        <div className="card">
          <img src={techBlog} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">
              <a href="https://pacific-brook-34647.herokuapp.com/">Tech Blog</a>
            </h5>
            <p className="card-text">
              <small className="text-muted">
                <a href="https://github.com/Rajendra-Dhanraj/Tech-Blog">
                  Github Repository
                </a>
              </small>
            </p>
          </div>
        </div>
        <div className="card">
          <img src={bTracker} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">
              <a href="https://ancient-journey-18280.herokuapp.com/">
                Budget Tracker
              </a>
            </h5>
            <p className="card-text">
              <small className="text-muted">
                <a href="https://github.com/Rajendra-Dhanraj/Budget-Tracker">
                  Github Repository
                </a>
              </small>
            </p>
          </div>
        </div>
        <div className="card">
          <img src={covid} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">
              <a href="https://uot-project1-group07.github.io/project1-group07/">
                Covid Posi+vity
              </a>
            </h5>
            <p className="card-text">
              <small className="text-muted">
                <a href="https://github.com/Uot-Project1-Group07/project1-group07">
                  Github Repository
                </a>
              </small>
            </p>
          </div>
        </div>
      </div>

      <div className="card-group">
        <div className="card">
          <img src={horiseon} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">
              <a href="https://rajendra-dhanraj.github.io/urban-octo-telegram-main/">
                Horiseon
              </a>
            </h5>
            <p className="card-text">
              <small className="text-muted">
                <a href="https://github.com/Rajendra-Dhanraj/urban-octo-telegram-main">
                  Github Repository
                </a>
              </small>
            </p>
          </div>
        </div>
        <div className="card">
          <img src={rBuddy} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">
              <a href="https://rajendra-dhanraj.github.io/run-buddy-2/">
                Run Buddy
              </a>
            </h5>
            <p className="card-text">
              <small className="text-muted">
                <a href="https://github.com/Rajendra-Dhanraj/run-buddy-2">
                  Github Repository
                </a>
              </small>
            </p>
          </div>
        </div>
        <div className="card">
          <img src={dangles} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">
              <a href="https://intense-headland-44008.herokuapp.com/">
                Dangles
              </a>
            </h5>
            <p className="card-text">
              <small className="text-muted">
                <a href="https://github.com/uoft-project2-group7/project">
                  Github Repository
                </a>
              </small>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
