import React, { useState } from "react";
import scrollTo from "gatsby-plugin-smoothscroll";

const sectionIDs = ["about", "skills", "projects", "experience", "education"];

const menuIconPath = (
  <path
    fillRule="evenodd"
    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
  />
);

const closeIconPath = (
  <path
    fillRule="evenodd"
    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
  />
);

const Header = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  return (
    <header className="fixed z-10 lg:static bg-impact-color w-full lg:w-64 px-4 py-2">
      <div className="lg:hidden flex items-center justify-end">
        <div>
          <button
            type="button"
            className="block text-gray-300 hover:text-white focus:text-white focus:outline-none"
            aria-label="menu"
            onClick={() => setDrawerOpen(!isDrawerOpen)}
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isDrawerOpen ? closeIconPath : menuIconPath}
            </svg>
          </button>
        </div>
      </div>
      <div
        className={
          `${!isDrawerOpen ? "hidden" : ""} ` +
          `lg:flex lg:flex-col lg:h-screen lg:justify-center`
        }
      >
        {sectionIDs.map((id) => (
          <a
            key={id}
            className="block text-white uppercase font-bold opacity-50 tracking-wider p-2 lg:text-center cursor-pointer"
            onClick={() => {
              setDrawerOpen(false);
              scrollTo(`#${id}`);
            }}
          >
            {id}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;
