import React, { Component } from "react";
import {
  FaGraduationCap,
  FaPalette,
  FaTrophy,
  FaUmbrellaBeach,
  FaBullhorn,
  FaLightbulb
} from "react-icons/fa";
import headshot from "../../img/headshot.jpg";
import "./About.css";

class About extends Component {
  state = {
    aboutParas: [],
    clickMe: "Click me"
  }; // end state

  async componentDidMount() {
    window.scrollTo(0, 0);
    document.title = "Madeline Reiff | About";
    const res = await fetch(
      "https://madelinekreiff.github.io/my-portfolio/portfolio.json"
    );
    let data = await res.json();
    data = data.about;
    this.setState({ aboutParas: data });
  } // end componentDidMount

  toggleClasses = (div, parentDiv) => {
    div.classList.toggle("about-div-toggle");
    parentDiv.classList.toggle("about-parent-toggle");
  }; // end toggleClasses

  onClick = (e) => {
    if (e.target.classList.contains("about-hover")) {
      const id = e.target.id;
      const div = e.target;
      const parentDiv = e.target.parentNode;
      this.toggleClasses(div, parentDiv);

      if (e.target.innerText !== `${this.state.clickMe}`) {
        e.target.innerText = `${this.state.clickMe}`;
      } else {
        for (let para of this.state.aboutParas) {
          if (para.id === id) {
            e.target.innerText = para.text;
          }
        } // end for loop
      } // end else statement
    } // end outermost if statement
  }; // end onClick

  render() {
    return (
      <div>
        {/* ---- About Page ---- */}
        <main className="about">
          <div className="content-wrapper">
            <h3>About Me</h3>
            <section className="about-article">
              <figure>
                <img src={headshot} alt="Headshot" />
              </figure>
              <p className="about-statement">
                <em>I love combining creativity with technology.</em>
              </p>
              <div className="start-div">
                <h5 className="start-finish">Start</h5>
                <p className="about-follow">(follow along to learn more)</p>
                <div className="about-divider"></div>
              </div>
              <div className="about-para">
                <article className="grad about-sq">
                  <div onClick={this.onClick} id="grad" className="about-hover">
                    {this.state.clickMe}
                  </div>
                  <FaGraduationCap className="about-fa-icons" />
                </article>
                <p className="mobile-arrow">&darr;</p>
                <p className="arrow-one tablet-arrow">&rarr;</p>
                <article className="art about-sq">
                  <div onClick={this.onClick} id="art" className="about-hover">
                    {this.state.clickMe}
                  </div>
                  <FaPalette className="about-fa-icons" />
                </article>
                <p className="mobile-arrow">&darr;</p>
                <p className="arrow-two tablet-arrow">&darr;</p>
                <article className="trophy about-sq">
                  <div
                    onClick={this.onClick}
                    id="trophy"
                    className="about-hover"
                  >
                    {this.state.clickMe}
                  </div>
                  <FaTrophy className="about-fa-icons" />
                </article>
                <p className="mobile-arrow">&darr;</p>
                <p className="arrow-three tablet-arrow">&larr;</p>
                <article className="beach about-sq">
                  <div
                    onClick={this.onClick}
                    id="beach"
                    className="about-hover"
                  >
                    {this.state.clickMe}
                  </div>
                  <FaUmbrellaBeach className="about-fa-icons" />
                </article>
                <p className="mobile-arrow">&darr;</p>
                <p className="arrow-four tablet-arrow">&darr;</p>
                <article className="bullhorn about-sq">
                  <div
                    onClick={this.onClick}
                    id="bullhorn"
                    className="about-hover"
                  >
                    {this.state.clickMe}
                  </div>
                  <FaBullhorn className="about-fa-icons" />
                </article>
                <p className="mobile-arrow">&darr;</p>
                <p className="arrow-five tablet-arrow">&rarr;</p>
                <article className="lightbulb about-sq">
                  <div
                    onClick={this.onClick}
                    id="lightbulb"
                    className="about-hover"
                  >
                    {this.state.clickMe}
                  </div>
                  <FaLightbulb className="about-fa-icons" />
                </article>
              </div>{" "}
              {/* -- end about-para -- */}
              <div className="finish-div">
                <div className="about-divider"></div>
                <h5 className="start-finish finish">Finish!</h5>
              </div>
            </section>{" "}
            {/*-- end about-article -- */}
          </div>{" "}
          {/* -- end content-wrapper -- */}
        </main>
      </div>
    ); // end return
  } // end render
} // end About

export default About;
