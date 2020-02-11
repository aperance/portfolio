import React from "react";
import data from "../../content.yaml";

const { firstName, lastName, address, email, description } = data.about;

const About = () => {
  return (
    <div id="about" className="section">
      <div>
        <h1>
          {firstName} {lastName}
        </h1>
        <h4>
          {address} {email}
        </h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default About;
