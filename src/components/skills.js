import React from "react";
import data from "../../content.yaml";

const { languages, tools, deployment, databases } = data.skills;

const Skills = () => {
  return (
    <div id="skills" className="section">
      <div>
        <h2>Skills</h2>
        <h4>{languages.proficient}</h4>
        <h4>{languages.limited}</h4>
        <h4>{tools}</h4>
        <h4>{deployment}</h4>
        <h4>{databases}</h4>
      </div>
    </div>
  );
};

export default Skills;
