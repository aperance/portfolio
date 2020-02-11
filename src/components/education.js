import React from "react";
import data from "../../content.yaml";

const { school, degree, major, timeframe } = data.education;

const Education = () => {
  return (
    <div id="education" className="section">
      <div>
        <h2>Education</h2>
        <h3>{school}</h3>
        <h4>{degree}</h4>
        <h5>{major}</h5>
        <h6>{timeframe}</h6>
      </div>
    </div>
  );
};

export default Education;
