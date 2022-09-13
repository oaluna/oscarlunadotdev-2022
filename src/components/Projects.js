import React from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section
      id="projects"
      className="py-24 leading-7 text-gray-900 bg-transparent mx-16 mt-16 py-12 md:py-16 lg:py-24 max-w-[100%]"
    >
      <div className="box-border w-auto">
        <div className="flex flex-col items-center justify-evenly leading-7 text-center text-gray-900">
          <h2 className="box-border m-0 text-4xl font-bold leading-tight tracking-tight text-gray-900 text-4xl">
            Projects
          </h2>
          <p className="max-w-3xl py-8 mx-auto text-xs text-gray-700 font-medium">
            Some of my previous work. To view the rest of my projects, click{" "}
            <a href="/" className="text-blue-300">
              here
            </a>
            .
          </p>
        </div>
        <ProjectCard />
      </div>
    </section>
  );
}

export default Projects;
