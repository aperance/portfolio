import React from "react";
import data from "../../content.yaml";

const { school, degree, major, timeframe } = data.education;

const Education = () => {
  return (
    <div id="education" className="section">
      <h2>Education</h2>
      <div className="mb-12 flex justify-between">
        <div className="flex-grow">
          <h3>{school}</h3>
          <h4>
            {degree} · {major}
          </h4>
        </div>
        <span className="flex-shrink-0 w-64 text-impact-color text-right">
          {timeframe}
        </span>
      </div>
    </div>
  );
};

export default Education;
