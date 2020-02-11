import React from "react";
import data from "../../content.yaml";

const { firstName, lastName, address, email, description } = data.about;

const About = () => {
  return (
    <div>
      <h1 className="font-saira">
        {firstName} {lastName}
      </h1>
      <h4>
        {address} {email}
      </h4>
      <p>{description}</p>
    </div>
  );
};

export default About;
