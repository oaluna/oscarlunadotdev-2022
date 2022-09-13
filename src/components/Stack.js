import React from "react";

function Stack() {
  return (
    <section className="z-1 w-full my-24 py-24 overflow-hidden bg-transparent relative">
      <div className="max-w-6xl relative mx-auto flex sm:px-0 px-10 flex-col items-start sm:items-center justify-center">
        <h2 className="box-border m-0 text-lg lg:text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
          Technologies Used
        </h2>
        <p className="text-gray-700 text-xs font-medium text-left sm:text-center max-w-3xl mt-5">
          I primarily work with integrated JavaScript libraries/frameworks (such
          as React, Next.js, etc.) to build full-stack web applications. I can
          also build static websites using HTML, CSS, and JavaScript.
        </p>
        <a
          href="#_"
          className="text-indigo-500 font-bold text-lg my-5 flex items-center group"
        >
          <span>Learn More</span>
        </a>
        <div className="flex flex-wrap justify-center grid grid-cols-4 md:grid-cols-7 gap-4 lg:gap-16 mt-8 text-white">
          <div className="h-24 w-24 shadow-md bg-gradient-to-tr from-orange-500 to-orange-400 rounded-2xl hover:scale-125 transition-all ease-out cursor-pointer duration-200 flex items-center justify-center">
            <i className="stack-icon fa-brands fa-html5 fa-4x m-0"></i>
          </div>

          <div className="h-24 w-24 shadow-md bg-gradient-to-tr from-indigo-700 to-indigo-600 rounded-2xl hover:scale-125 transition-all ease-out cursor-pointer duration-200 flex items-center justify-center">
            <i className="stack-icon fa-brands fa-css3 fa-4x m-0"></i>
          </div>

          <div className="h-24 w-24 shadow-md bg-gradient-to-tr from-blue-700 to-blue-400 rounded-2xl hover:scale-125 transition-all ease-out cursor-pointer duration-200 flex items-center justify-center">
            <i className="stack-icon fa-brands fa-react fa-4x m-0"></i>
          </div>

          <div className="h-24 w-24 shadow-md bg-gradient-to-tr from-pink-600 to-pink-400 rounded-2xl hover:scale-125 transition-all ease-out cursor-pointer duration-200 flex items-center justify-center">
            <i className="stack-icon fa-brands fa-sass fa-4x m-0"></i>
          </div>

          <div className="h-24 w-24 shadow-md bg-gradient-to-tr from-green-600 to-green-400 sm:translate-x-12 md:translate-x-0 rounded-2xl hover:scale-125 transition-all ease-out cursor-pointer duration-200 flex items-center justify-center">
            <i className="stack-icon fa-brands fa-node-js fa-4x m-0"></i>
          </div>

          <div className="h-24 w-24 shadow-md bg-gradient-to-tr from-yellow-600 to-yellow-400 sm:translate-x-12 md:translate-x-0 rounded-2xl hover:scale-125 transition-all ease-out cursor-pointer duration-200 flex items-center justify-center">
            <i className="stack-icon fa-brands fa-js fa-4x m-0"></i>
          </div>

          <div className="h-24 w-24 shadow-md bg-gradient-to-tr from-red-600 to-red-400 sm:translate-x-12 md:translate-x-0 rounded-2xl hover:scale-125 transition-all ease-out cursor-pointer duration-200 flex items-center justify-center">
            <i className="stack-icon fa-brands fa-npm fa-4x m-0"></i>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stack;
