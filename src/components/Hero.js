import React from "react";

const Hero = () => (
  <section className="px-2 py-32 bg-transparent md:px-0 2xl:flex">
    <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
      <div className="flex flex-wrap items-center sm:-mx-3">
        <div className="w-full md:w-1/2 md:px-3">
          <div className="w-full md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
            <h1 className="bg-clip-text text-transparent bg-gradient-to-tr from-rose-300 to-blue-600 text-4xl md:text-6xl font-black tracking-tighter md:tracking-tight lg:tracking-normal block xl:inline">
              Oscar Armando Luna
            </h1>
            <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl font-bold py-8">
              Full-Stack Developer <br />
              San Francisco, CA
            </p>
            <div className="relative flex flex-col sm:flex-row sm:space-x-4">
              <a
                href="#_"
                className="flex items-center px-6 py-3 main-btn btn-hover mb-12 shadow-lg w-auto"
                data-rounded="rounded-none"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div
            className="w-full h-auto overflow-hidden shadow-xl rounded-[50%] overflow-hidden bg-gradient-to-tr from-purple-500 to-blue-500"
            data-rounded="rounded-xl"
            data-rounded-max="rounded-full"
          >
            <img
              src="https://res.cloudinary.com/dgdnpkfun/image/upload/v1660766725/4125_1458_2155_lsjtuy.png"
              alt="hero"
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
