import React from "react";
import data from "../../content.yaml";

const Projects = () => {
  return (
    <div id="projects" className="section">
      <h2>Projects</h2>
      {data.projects.map(({ title, description, technologies, links }) => (
        <div key={title} className="section-flex">
          <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{technologies}</p>
            {links.map(({ title, path }) => (
              <div key={path}>
                <a href={path}>{title}</a>
              </div>
            ))}
          </div>
          <span></span>
        </div>
      ))}
    </div>
  );
};

export default Projects;
