import React from "react";
import { skills } from "../../content.yaml";

const Skills = () => {
  return (
    <div id="skills" className="section">
      <div>
        <h2>Skills</h2>
        <h4>Languages: {skills.languages}</h4>
        <h4>Frameworks\Libraries: {skills.frameworks}</h4>
        <h4>Tools\Platforms: {skills.tools}</h4>
      </div>
    </div>
  );
};

export default Skills;
