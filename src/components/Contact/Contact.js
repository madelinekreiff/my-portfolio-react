import React, { Component } from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import sunglasses from "../../img/contact/sunglasses.jpg";
import hammock from "../../img/contact/hammock.jpg";
import flower from "../../img/contact/flower.jpg";
import "./Contact.css";

class Contact extends Component {
  componentDidMount() {
    document.title = "Madeline Reiff | Contact";
  } // end componentDidMount

  render () {
    return (
      <div>
        {/* ---- Contact Page ---- */}
        <main className="contact">
          <div className="content-wrapper">
            <h3>Let's Connect!</h3>
            <div className="contact-items">
              {/* -- Contact Info -- */}
              <div className="contact-sq">
                <figure className="contact-img">
                  <img src={sunglasses} alt="Sunglasses" />
                </figure>
                <div className="contact-txt">
                  <p className="contact-heading">
                    <strong>Contact</strong>
                  </p>
                  <address className="contact-address">
                    <a href="mailto:madelinekreiff@gmail.com">
                      madelinekreiff@gmail.com
                    </a>
                    <br />
                    <a href="tel:2093717099">(209) 371-7099</a>
                  </address>
                </div>{" "}
                {/* -- end contact-txt -- */}
              </div>{" "}
              {/* -- end contact-sq (contact info) -- */}
              {/* -- *** Social Media *** -- */}
              <div className="contact-sq">
                <figure className="contact-img-switch">
                  <img src={hammock} alt="Hammock" />
                </figure>
                <div className="contact-txt contact-txt-switch">
                  <p className="contact-heading">
                    <strong>Follow Me</strong>
                  </p>
                  <div className="social-icons">
                    <p className="fontawesome-icon">
                      <a
                        href="https://www.linkedin.com/in/madelinekreiff/"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <FaLinkedinIn className="fa-icon" />
                      </a>
                    </p>
                    <p className="fontawesome-icon">
                      <a
                        href="https://github.com/madelinekreiff"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <FaGithub className="fa-icon" />
                      </a>
                    </p>
                  </div>{" "}
                  {/* -- end social-icons -- */}
                </div>{" "}
                {/* -- end contact-txt -- */}
              </div>{" "}
              {/* -- end contact-sq (social media) -- */}
              {/* -- *** Location *** -- */}
              <div className="contact-sq">
                <figure className="contact-img">
                  <img src={flower} alt="Flower" />
                </figure>
                <div className="contact-txt">
                  <p className="contact-heading">
                    <strong>Location</strong>
                  </p>
                  <p className="contact-para">
                    California based &<br />
                    Zoom meetups
                  </p>
                </div>{" "}
                {/* -- end contact-txt -- */}
              </div>{" "}
              {/* -- end contact-sq (location) -- */}
            </div>{" "}
            {/* -- end contact-items -- */}
          </div>{" "}
          {/* -- end content-wrapper -- */}
        </main>
      </div>
    ); // end return
  } // end render
} // end Contact

export default Contact;
