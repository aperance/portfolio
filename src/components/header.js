import React, { useState } from "react";

const Header = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  return (
    <header
      className="fixed lg:static w-full lg:w-64 px-4 py-2"
      style={{ backgroundColor: "#bd5d38" }}
    >
      <div className="lg:hidden flex items-center justify-between">
        <div></div>
        <div>
          <button
            type="button"
            className="block text-gray-300 hover:text-white focus:text-white focus:outline-none"
            onClick={() => setDrawerOpen(!isDrawerOpen)}
          >
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isDrawerOpen ? (
                <path
                  fill-rule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : (
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      <div className={isDrawerOpen ? "block" : "hidden lg:block"}>
        <a
          href="#"
          className="block text-white uppercase font-bold opacity-50 tracking-wider p-2 lg:text-center"
        >
          About
        </a>
        <a
          href="#"
          className="block text-white uppercase font-bold opacity-50 tracking-wider p-2 lg:text-center"
        >
          Skills
        </a>
        <a
          href="#"
          className="block text-white uppercase font-bold opacity-50 tracking-wider p-2 lg:text-center"
        >
          Projects
        </a>
        <a
          href="#"
          className="block text-white uppercase font-bold opacity-50 tracking-wider p-2 lg:text-center"
        >
          Experience
        </a>
        <a
          href="#"
          className="block text-white uppercase font-bold opacity-50 tracking-wider p-2 lg:text-center"
        >
          Education
        </a>
      </div>
    </header>
  );
};

export default Header;
