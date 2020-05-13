import React from "react";
import data from "../../content.yaml";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

const { firstName, lastName, address, email, description } = data.about;

const About = () => {
  return (
    <div id="about" className="section">
      <h1>
        {firstName} <span className="text-impact-color">{lastName}</span>
      </h1>
      <h4>
        {address}&nbsp;·&nbsp;{email}
      </h4>
      <p>{description}</p>
      <div>
        <a href="#" className="icon" aria-label="linked in">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a href="#" className="icon" aria-label="github">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  );
};

export default About;
