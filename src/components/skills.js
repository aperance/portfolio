import React from "react";
import { skills } from "../../content.yaml";

const Skills = () => {
  return (
    <div id="skills" className="section">
      <div>
        <h2>Skills</h2>
        <h4>Proficient: {skills.proficient}</h4>
        <h4>Familiar: {skills.familiar}</h4>
      </div>
    </div>
  );
};

export default Skills;
