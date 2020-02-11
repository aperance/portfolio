import React from "react";
import PropTypes from "prop-types";

import Header from "./header";

import "../styles/tailwind.css";

const Layout = ({ children }) => {
  return (
    <div className="lg:flex lg:h-screen lg:overflow-hidden">
      <Header />
      <div className="lg:flex-1 lg:overflow-scroll">
        <main>
          {children.map((child, index) => (
            <div key={`section${index}`}>
              {child}
              <hr className="border-t" />
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
