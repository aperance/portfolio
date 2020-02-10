import React from "react";
import data from "../../content.yaml";

const Experience = () => {
  return (
    <div>
      <h2>Experience</h2>
      {data.experience.map(({ title, company, timeframe, description }) => (
        <>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <h5>{timeframe}</h5>
          <p>{description}</p>
        </>
      ))}
    </div>
  );
};

export default Experience;
