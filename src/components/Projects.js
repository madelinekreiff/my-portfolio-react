import React, { Component } from "react";
import { Link } from "react-router-dom";
import { htmlCss, javascript, react } from "./images";
import "../styles.css";

const imagesArray = [htmlCss, javascript, react];

class Projects extends Component {
  state = {
    projects: [],
    image: ""
  }; // end state

  onClick = () => {}; // end onClick

  componentDidMount() {
    const savedString = localStorage.getItem("stringToSave");
    if (savedString) {
      const savedState = JSON.parse(savedString);
      for (let images of imagesArray) {
        for (let image of images) {
          if (savedState.id === image.id) {
            this.setState({ projects: savedState, image: image.image });
          }
        } // end inner for loop
      } // end outer for loop
    } // end outer if statement
  } // end componentDidMount

  render() {
    return (
      <div>
        {/* ---- Projects Page ---- */}
        <main className="new-portfolio">
          <div className="project content-wrapper">
            <h3 className="title">{this.state.projects.name}</h3>
            <div className="project-div">
              <div className="info-div">
                <figure className="photo">
                  <img
                    src={this.state.image}
                    alt={this.state.projects.imgAlt}
                  />
                </figure>
                <aside className="info">
                  <ul className="list">
                    <li className="list-item">
                      <span className="heading">Skills:</span>{" "}
                      {this.state.projects.skills}
                    </li>
                    <li className="list-item">
                      <span className="heading">Tools Used:</span>{" "}
                      {this.state.projects.tools}
                    </li>
                    <li className="list-item">
                      <span className="heading">Description:</span>{" "}
                      {this.state.projects.description}
                    </li>
                  </ul>
                </aside>
              </div>
              <div className="buttons-div">
                <p className="code">
                  Click{" "}
                  <a
                    className="here"
                    href={this.state.projects.code}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    here
                  </a>{" "}
                  to see this project's&nbsp;
                  <span className="react">GitHub Repo</span>&nbsp;& code!
                </p>
                <div className="button-div">
                  <a
                    className="website-button-link"
                    href={this.state.projects.url}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <button className="website-button">
                      View this project's live website!
                    </button>
                  </a>
                </div>
                <div className="button-div">
                  <button className="back-button">
                    <Link to="/portfolio" className="back-button-link">
                      Back
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* -- end content-wrapper -- */}
        </main>
      </div>
    ); // end return
  } // end render
} // end Projects

export default Projects;
