import React from "react";
import { about } from "../../content.yaml";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <div id="about" className="section">
      <h1>
        {about.firstName}{" "}
        <span className="text-impact-color">{about.lastName}</span>
      </h1>
      <h4>
        {about.description}&nbsp;&nbsp;·&nbsp;&nbsp;{about.address}
      </h4>
      <div>
        <a href={about.linkedin} className="icon" aria-label="linked in">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a href={about.github} className="icon" aria-label="github">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href={"mailto:" + about.email} className="icon" aria-label="email">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </div>
  );
};

export default About;
