import React from "react";
import data from "../../content.yaml";

const Experience = () => {
  return (
    <div id="experience" className="section">
      <h2>Experience</h2>
      {data.experience.map(({ title, company, timeframe, description }) => (
        <div key={title} className="section-flex">
          <div>
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p>{description}</p>
          </div>

          <span>{timeframe}</span>
        </div>
      ))}
    </div>
  );
};

export default Experience;
