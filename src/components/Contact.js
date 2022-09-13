import React from "react";

function Contact() {
  return (
    <section id="contact" className="subscribe-section my-120">
      <div className="container">
        <div className="subscribe-wrapper rounded-3xl pt-16 pb-13 p-1 md:px-13">
          <div className="row flex items-center">
            <div className="w-full lg:w-7/12 xl:w-6/12">
              <div className="section-title mb-4">
                <h1 className="text-gray-900 mb-6 text-2xl text-center md:text-left">
                  Get In Touch
                </h1>
                <p className="text-gray-900 p-1">
                  Are you in need of a developer for a project? Drop your email
                  for a free consultation.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-5/12 xl:w-6/12">
              <form action="#" className="relative mb-4 h-full">
                <input
                  type="email"
                  name="subs-email"
                  id="subs-email"
                  placeholder="Your Email"
                  className="relative flex flex-col w-full py-5 px-8 transition duration-300 shadow-sm focus:shadow-xl"
                />
                <a
                  href="#contact"
                  className="main-btn btn-hover w-full lg:w-auto mt-5"
                >
                  Subscribe
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
