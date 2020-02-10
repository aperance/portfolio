import React from "react";

import Layout from "../components/layout";
import About from "../components/about";
import Education from "../components/education";
import Experience from "../components/experience";
import Projects from "../components/projects";
import Skills from "../components/skills";

const IndexPage = () => (
  <Layout>
    <About />
    <Skills />
    <Projects />
    <Experience />
    <Education />
  </Layout>
);

export default IndexPage;
