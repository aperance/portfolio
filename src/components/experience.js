import React from "react";
import data from "../../content.yaml";

const Experience = () => {
  return (
    <div id="experience" className="section">
      <h2>Experience</h2>
      {data.experience.map(({ title, company, timeframe, description }) => (
        <div key={title} className="mb-12 flex justify-between">
          <div>
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p>{description}</p>
          </div>

          <span className="flex-shrink-0 w-64 text-impact-color text-right">
            {timeframe}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Experience;
