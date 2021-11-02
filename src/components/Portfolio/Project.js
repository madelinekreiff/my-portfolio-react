import React from "react";
import { Link } from "react-router-dom";

const Project = (props) => {
  return (
    <figure>
      <Link
        onClick={props.onClick}
        to="/projects"
        id={props.id}
        className="hover"
      >
        Click to learn more!
      </Link>
      <img src={props.images[`${props.index}`].image} alt={props.imgAlt} />
    </figure>
  );
}; // end Project

export default Project;
