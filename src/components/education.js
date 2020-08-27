import React from "react";
import { education } from "../../content.yaml";

const Education = () => {
  return (
    <div id="education" className="section">
      <h2>Education</h2>
      <div className="section-flex">
        <div>
          <h3>{education.school}</h3>
          <h4>
            {education.degree} · {education.major}
          </h4>
        </div>
        <span>{education.timeframe}</span>
      </div>
    </div>
  );
};

export default Education;
