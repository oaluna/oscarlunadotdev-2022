import React from "react";

function About() {
  return (
    <section id="about" className="about-section mt-24 lg:mt-0 pb-48">
      <div className="container">
        <div className="flex-col w-full flex items-center">
          <div className="w-full">
            <div className="about-content">
              <div className="section-title mb-8">
                <h1 className="mb-6 text-xl md:text-4xl leading-none md:leading-none">
                  Hello! I’m{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-tr from-rose-300 to-indigo-600 w-[100vw] md:w-auto">
                    Oscar Luna
                  </span>
                  , and I deliver quality web solutions to clients.
                </h1>
                <p className="w-full py-8 mx-auto text-xs font-regular text-gray-700">
                  I create and deploy web applications using HTML, CSS, and
                  JavaScript. I primarily work with React.JS and Node.js to
                  deliver stunning, secure, and performative web applications to
                  startups in the area.
                  <br />
                  <br />I am in the process of expanding my serviceds to larger
                  companies that need optimized e-commerce solutions delivered.
                </p>
              </div>

              <a
                href="#contact"
                className="main-btn btn-hover w-full lg:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2 order-first lg:order-first">
            <div className="about-img-2 relative z-10 pt-19 lg:mb-0">
              <img
                alt="laptop"
                src="https://res.cloudinary.com/dgdnpkfun/image/upload/v1662362033/mockup-devices_mroymy.png"
                className="relative object-cover w-full mt-3"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
