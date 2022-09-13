import React from "react";

const BlogCta = () => (
  <section id="blog">
    <div className="max-w-6xl mx-auto py-16 px-10 sm:py-24 sm:px-6 lg:px-8 text-center">
      <h2 className="box-border m-0 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
        Blog
      </h2>
      <p className="max-w-3xl py-8 mx-auto text-xs text-gray-600">
        Take a look at some of my latest articles from my blog. You can read the
        rest of my posts on Medium. Click{" "}
        <a className="text-blue-500" href="https://medium.com/@oaluna">
          here
        </a>{" "}
        to visit.
      </p>
    </div>
  </section>
);

export default BlogCta;
