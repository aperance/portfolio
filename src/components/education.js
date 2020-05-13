import React from "react";
import data from "../../content.yaml";

const { school, degree, major, timeframe } = data.education;

const Education = () => {
  return (
    <div id="education" className="section">
      <h2>Education</h2>
      <div className="section-flex">
        <div>
          <h3>{school}</h3>
          <h4>
            {degree} · {major}
          </h4>
        </div>
        <span>{timeframe}</span>
      </div>
    </div>
  );
};

export default Education;
