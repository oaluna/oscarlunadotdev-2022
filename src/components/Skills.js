import React from "react";

function Skills() {
  const SKILLS_DATA = [
    {
      name: "Stunning, Responsive UI",
      icon: "https://assets1.lottiefiles.com/packages/lf20_uzvwjpkq.json",
      description:
        " I can deliver a beautiful and responsive web application using HTML, CSS, and JavaScript."
    },
    {
      name: "Secure and Robust Back-end",
      icon: "https://assets6.lottiefiles.com/private_files/lf30_VBnEpi.json",
      description:
        "I can build a server that leverages data exchange swiftly and securely in a Node.js environment."
    },
    {
      name: "Database Management",
      icon: "https://assets3.lottiefiles.com/packages/lf20_cioqsmkr.json",
      description:
        "I can create and manage relational and non-relational databases that will scale as your company grows."
    },
    {
      name: "24/7 Maintenance",
      icon: "https://assets10.lottiefiles.com/packages/lf20_wwTPJf.json",
      description:
        "After deployment, you have access to 24/7 support for maintenance/debugging, forever. Yes, forever."
    }
  ];
  return (
    <section id="skills" className="feature-section py-24">
      <div className="container">
        <h2 className="box-border m-0 font-bold leading-tight tracking-tight text-gray-900 text-4xl text-center">
          Skills
        </h2>
        <div className="flex-col lg:flex-row flex items-end md:items-center lg:justify-evenly max-w-[100%]">
          {SKILLS_DATA.map((skill) => (
            <div className="w-full px-1 lg:w-3/12 min-h-[100%]">
              <div className="text-center px-4 2xl:px-10 py-8">
                <lottie-player
                  src={skill.icon}
                  className="w-full h-full mb-3 flex-row items-end"
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                  muted
                ></lottie-player>

                <div className="content flex flex-row w-[100%] h-auto flex-wrap items-center justify-evenly">
                  <h2 className="mb-5 text-sm">{skill.name}</h2>
                  <p className="max-w-3xl py-8 mx-auto text-xs justify-center text-gray-700 font-regular leading-[1.5]">
                    {skill.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
