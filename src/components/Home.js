import React, { Component } from "react";
import { FaRegSmile } from "react-icons/fa";
import beachChairs from "../img/beach-chairs.png";
import jubileeAusten from "../img/html-css/jubilee-austen.png";
import unpluggedRetreat from "../img/html-css/unplugged-retreat.png";
import roguePickings from "../img/html-css/rogue-pickings.png";
import electionMap from "../img/javascript/election-map.png";
import guessTheWord from "../img/javascript/guess-the-word.png";
import stickyNotes from "../img/react/sticky-notes.png";
import "../styles.css";

// slideshow images
const images = [
  { src: `${jubileeAusten}`, alt: "Jubilee Austen" },
  { src: `${unpluggedRetreat}`, alt: "Unplugged Retreat" },
  { src: `${roguePickings}`, alt: "Rogue Pickings" },
  { src: `${electionMap}`, alt: "Election Map" },
  { src: `${guessTheWord}`, alt: "Guess the Word" },
  { src: `${stickyNotes}`, alt: "Sticky Notes" }
];
let i = 0;

class Home extends Component {
  state = {
    image: { src: "", alt: "" }
  }; // end state

  // show slides
  showSlide = () => {
    let newImage = images[i];
    i++;
    if (i > images.length - 1) {
      i = 0;
    }
    this.setState({
      image: { src: newImage.src, alt: newImage.alt }
    });
  }; // end showSlide

  // restart interval when component is mounted to automatically show slides
  componentDidMount() {
    this.showSlide();
    this.timerID = setInterval(() => this.showSlide(), 2000);
  } // end componentDidMount

  // stop interval when component is unmounted
  componentWillUnmount() {
    clearInterval(this.timerID);
    i = 0;
  } // end componentWillUnmount

  render() {
    return (
      <div>
        {/* ---- Home Page ---- */}
        <main className="home">
          <div className="content-wrapper">
            <h1>
              Hi there, I'm Madeline
              <FaRegSmile className="smiley-face" />
            </h1>
            <figure className="home-figure">
              <img src={beachChairs} alt="Beach Chairs" />
            </figure>
            <h2 className="catch-statement">
              I'm a front-end web developer excited to bring your vision to life
              on the World Wide Web!
            </h2>
            {/* -- Slideshow -- */}
            <div className="slideshow-div">
              <div className="slideshow-divider"></div>
              <h3 className="home-portfolio-heading">
                Explore some of my favorite projects I completed
              </h3>
              <div className="slideshow">
                <figure className="slide fade">
                  <img src={this.state.image.src} alt={this.state.image.alt} />
                </figure>
              </div>{" "}
              {/* -- end slideshow -- */}
              <div className="dots-div">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>{" "}
              {/* -- end dots-div -- */}
              <p className="home-here-caption">
                Click{" "}
                <a className="home-here" href="portfolio">
                  here
                </a>{" "}
                to view my entire portfolio gallery
              </p>
              <div className="slideshow-divider"></div>
            </div>
            {/* -- end slideshow-div -- */}
            <h2 className="bonus-statement">
              <span className="bonus">Bonus: </span>I designed and developed
              this entire website that you're currently on! All of my work is on{" "}
              <a
                className="github"
                href="https://github.com/madelinekreiff/my-portfolio"
                target="_blank"
                rel="noreferrer noopener"
              >
                GitHub
              </a>{" "}
              if you're interested in checking it out.
            </h2>
          </div>
          {/* -- end content-wrapper -- */}
        </main>
      </div>
    ); // end return
  } // end render
} // end Home

export default Home;
