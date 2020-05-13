import React from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/layout";
import About from "../components/about";
import Education from "../components/education";
import Experience from "../components/experience";
import Projects from "../components/projects";
import Skills from "../components/skills";

const IndexPage = () => (
  <Layout>
    <Helmet>
      <html lang="en" />
      <title>William Aperance - Portfolio</title>
    </Helmet>
    <About />
    <Skills />
    <Projects />
    <Experience />
    <Education />
  </Layout>
);

export default IndexPage;
