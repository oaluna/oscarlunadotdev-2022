import React from "react";

const HeaderButton = () => (
  <div className="relative z-10 inline-flex items-center space-x-3 md:ml-5 lg:justify-end">
    <span className="inline-flex rounded-md shadow-sm">
      <a
        href="#contact"
        className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-gradient-to-tr from-purple-500 to-blue-500 rounded-md shadow-md"
      >
        Contact
      </a>
    </span>
  </div>
);

export default HeaderButton;
