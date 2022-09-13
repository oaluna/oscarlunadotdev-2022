import React from "react";
//import Auth from 'upwork-api/lib/routers/auth'

function Testimonials() {
  return (
    <section id="testimonials" className="testimonial-section py-24">
      <div className="container">
        <div className="section-title text-center">
          <h1 className="mb-8">Testimonials</h1>
        </div>
        <div className="testimonial-active-wrapper relative bg-gradient-to-tr from-slate-600 to-slate-800 text-gray-100 p-8 shadow-lg shadow-gray-900/30">
          <div className="testimonial-active">
            <div className="single-testimonial">
              <div className="row flex">
                <div className="w-full lg:w-5/12">
                  <div className="text-left">
                    <i className="fa-solid fa-quote-left fa-3x text-blue-200"></i>
                  </div>
                </div>
                <div className="w-0 lg:w-1/12"></div>
                <div className="lg:w-8/12">
                  <div className="content-wrapper">
                    <div className="content">
                      <p className="text-4xl leading-none mb-8">
                        <em>
                          Strong work, and good ideas about how to proceed.
                        </em>
                      </p>
                    </div>
                    <div className="info flex flex-row items-center max-w-sm flex-wrap">
                      <i className="fa-solid fa-circle-user fa-3x m-3 text-gray-200"></i>
                      <h4 className="mb-3">Matt Fox</h4>
                    </div>
                    <p>UpWork</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
