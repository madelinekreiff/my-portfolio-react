import React, { Component } from "react";
import Project from "./Project";
import { htmlCss, javascript, react } from "../projectImages";
import "./Portfolio.css";

class Portfolio extends Component {
  state = {
    htmlCss: [],
    javascript: [],
    react: []
  }; // end state

  // fetch API call to get project data when component is mounted
  async componentDidMount() {
    document.title = "Madeline Reiff | Portfolio";
    const res = await fetch(
      "https://madelinekreiff.github.io/my-portfolio/portfolio.json"
    );
    let data = await res.json();
    data = data.projects;
    this.setState({ projects: data });
    this.state.projects.forEach((project) => {
      this.setState({
        htmlCss: project.htmlCss,
        javascript: project.javascript,
        react: project.react
      });
    }); // end forEach
  } // end componentDidMount

  onClick = (e) => {
    const id = e.target.id;
    this.state.projects.forEach((object) => {
      for (let array in object) {
        for (let project of object[array]) {
          if (project.id === id) {
            const projectToSave = {
              id: project.id,
              name: project.name,
              imgSrc: project.imgSrc,
              imgAlt: project.imgAlt,
              skills: project.skills,
              tools: project.tools,
              description: project.description,
              code: project.code,
              url: project.url
            };
            const stringToSave = JSON.stringify(projectToSave);
            localStorage.setItem("stringToSave", stringToSave);
          } // end if statement
        } // end inner for loop
      } // end outer for loop
    }); // end forEach
  }; // end onClick

  render() {
    return (
      <div>
        {/* ---- Portfolio Page ---- */}
        <main className="portfolio">
          <div className="content-wrapper">
            <h3>My Portfolio</h3>
            <div className="project-items">
              {/* -- HTML & CSS Projects -- */}
              <article className="project-article">
                <h4 className="project-heading">
                  <em>HTML & CSS Projects</em>
                </h4>
                <div className="project-images">
                  {this.state.htmlCss.map((project, index) => {
                    return (
                      <Project
                        key={index}
                        id={project.id}
                        images={htmlCss}
                        imgAlt={project.imgAlt}
                        index={index}
                        onClick={this.onClick}
                      />
                    );
                  })}
                </div>{" "}
                {/* -- end project-images -- */}
              </article>
              {/* -- JavaScript Projects -- */}
              <article className="project-article">
                <h4 className="project-heading">
                  <em>JavaScript Projects</em>
                </h4>
                <div className="project-images">
                  {this.state.javascript.map((project, index) => {
                    return (
                      <Project
                        key={index}
                        id={project.id}
                        images={javascript}
                        imgAlt={project.imgAlt}
                        index={index}
                        onClick={this.onClick}
                      />
                    );
                  })}
                </div>{" "}
                {/* -- end project-images -- */}
              </article>
              {/* -- React Projects -- */}
              <article className="project-article">
                <h4 className="project-heading">
                  <em>React Projects</em>
                </h4>
                <div className="project-images">
                  {this.state.react.map((project, index) => {
                    return (
                      <Project
                        key={index}
                        id={project.id}
                        images={react}
                        imgAlt={project.imgAlt}
                        index={index}
                        onClick={this.onClick}
                      />
                    );
                  })}
                </div>{" "}
                {/* -- end project-images -- */}
              </article>
            </div>{" "}
            {/* -- end project-items -- */}
          </div>{" "}
          {/* -- end content-wrapper -- */}
        </main>
      </div>
    ); // end return
  } // end render
} // end Portfolio

export default Portfolio;
