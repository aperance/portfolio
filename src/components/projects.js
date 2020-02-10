import React from "react";
import data from "../../content.yaml";

const Projects = () => {
  return (
    <div>
      <h2>Projects</h2>
      {data.projects.map(({ title, description, technologies, links }) => (
        <>
          <h3>{title}</h3>
          <p>{description}</p>
          <p>{technologies}</p>
          {links.map(({ title, path }) => (
            <div>
              <a href={path}>{title}</a>
            </div>
          ))}
        </>
      ))}
    </div>
  );
};

export default Projects;
