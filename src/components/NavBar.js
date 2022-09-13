import { useState } from "react";
import Logo from "./Logo";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    if (open === false) {
      setOpen(true);
      console.log("open");
    } else {
      setOpen(false);
      console.log("closed");
    }
  };

  return (
    <header className="header">
      <div className="navbar-area">
        <div className="container relative">
          <div className="row items-center Justify-between w-full">
            <div className="sm:w-full">
              <nav className="flex items-center justify-between p-0 m-0 py-4 navbar navbar-expand-lg">
                <a className="navbar-brand w-full m-0 p-0" href="/">
                  <Logo />
                </a>
                <button
                  className="block navbar-toggler focus:outline-none lg:hidden sm:flex-col sm:items-end ml-40"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarOne"
                  aria-controls="navbarOne"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  onClick={handleClick}
                >
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                </button>
                {open === true && (
                  <div
                    className="z-100 transition transition-opacity ease-in duration-[2000ms] absolute right-0 top-0 w-full min-h-screen px-5 py-3 lg:m-0 lg:p-0 duration-300 lg:w-auto collapse navbar-collapse lg:block top-full mt-full lg:static bg-gradient-to-tr from-slate-300 to-slate-200 shadow-xl shadow-gray-900"
                    id="navbarOne"
                  >
                    <ul
                      id="nav"
                      className="items-center content-start mr-auto lg:justify-end navbar-nav lg:flex"
                    >
                      <li className="nav-item ml-5 lg:ml-11 md:text-xl text-5xl">
                        <a
                          style={{ textDecoration: "none" }}
                          className="page-scroll text-gray-100 font-bold"
                          href="#about"
                        >
                          <h1>About</h1>
                        </a>
                      </li>
                      <li className="nav-item ml-5 lg:ml-11 text-xl sm:text-5xl">
                        <a
                          style={{ textDecoration: "none" }}
                          className="page-scroll text-gray-100 font-bold"
                          href="#skills"
                        >
                          <h1>Skills</h1>
                        </a>
                      </li>
                      <li className="nav-item ml-5 lg:ml-11 md:text-xl text-5xl">
                        <a
                          style={{ textDecoration: "none" }}
                          className="page-scroll text-gray-100 font-bold"
                          href="#projects"
                        >
                          <h1>Projects</h1>
                        </a>
                      </li>

                      <li className="nav-item ml-5 lg:ml-11 md:text-xl text-5xl">
                        <a
                          style={{ textDecoration: "none" }}
                          className="page-scroll text-gray-100 font-bold"
                          href="#blog"
                        >
                          <h1>Blog</h1>
                        </a>
                      </li>
                      <li className="nav-item ml-5 lg:ml-11 md:text-xl text-5xl">
                        <a
                          style={{ textDecoration: "none" }}
                          className="page-scroll text-gray-100 font-bold"
                          href="#testimonials"
                        >
                          <h1>Testimonials</h1>
                        </a>
                      </li>
                      <li className="nav-item ml-5 lg:ml-11 md:text-xl text-5xl">
                        <a
                          style={{ textDecoration: "none" }}
                          className="page-scroll text-gray-100 font-bold"
                          href="#contact"
                        >
                          <h1>Contact</h1>
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
                <div
                  className="absolute left-0 z-20 hidden w-full px-5 py-3 duration-300 shadow lg:w-auto collapse navbar-collapse lg:block top-full mt-full lg:static lg:bg-transparent lg:shadow-none"
                  id="navbarOne"
                >
                  <ul
                    id="nav"
                    className="items-center content-start mr-auto lg:justify-end navbar-nav lg:flex"
                  >
                    <li className="nav-item ml-5 lg:ml-11">
                      <a
                        className="page-scroll text-xl font-bold active"
                        href="#about"
                      >
                        About
                      </a>
                    </li>
                    <li className="nav-item ml-5 lg:ml-11">
                      <a
                        className="page-scroll text-xl font-bold"
                        href="#skills"
                      >
                        Skills
                      </a>
                    </li>
                    <li className="nav-item ml-5 lg:ml-11">
                      <a
                        className="page-scroll text-xl font-bold"
                        href="#projects"
                      >
                        Projects
                      </a>
                    </li>

                    <li className="nav-item ml-5 lg:ml-11">
                      <a className="page-scroll text-xl font-bold" href="#blog">
                        Blog
                      </a>
                    </li>
                    <li className="nav-item ml-5 lg:ml-11">
                      <a
                        className="page-scroll text-xl font-bold"
                        href="#testimonials"
                      >
                        Testimonials
                      </a>
                    </li>
                    <li className="nav-item ml-5 lg:ml-11">
                      <a
                        className="page-scroll text-xl font-bold"
                        href="#contact"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
