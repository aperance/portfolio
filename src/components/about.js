import React from "react";
import { about } from "../../content.yaml";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <div id="about" className="section">
      <h1>
        {about.firstName}{" "}
        <span className="text-impact-color">{about.lastName}</span>
      </h1>
      <h4>
        {about.address}&nbsp;·&nbsp;{about.email}
      </h4>
      <p>{about.description}</p>
      <div>
        <a href={about.linkedin} className="icon" aria-label="linked in">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a href={about.github} className="icon" aria-label="github">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  );
};

export default About;
