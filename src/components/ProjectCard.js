import { useState, useEffect } from "react";
import Swipe from "react-easy-swipe";

function ProjectCard() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  const PROJECT_DATA = [
    {
      id: 0,
      title: "Globomantics - Real Estate App",
      image:
        "https://res.cloudinary.com/dgdnpkfun/image/upload/v1617817991/oscarlunadotdev/globoMantics.png",
      linkUrl: "https://globomantics.vercel.app",
      repo: "https://github.com/oaluna/globomantics"
    },
    {
      id: 1,
      title: "Glowing Flowers | Plants & Gifts",
      image:
        "https://res.cloudinary.com/dgdnpkfun/image/upload/v1662574472/29915692-c2441a79aa89b9ed0f6be9da1c0b491c_e6ltqj.png",
      linkUrl: "https://glowing-flowers.com",
      repo: ""
    },
    {
      id: 2,
      title: "Landing Page Demo",
      image:
        "https://res.cloudinary.com/dgdnpkfun/image/upload/v1617817985/oscarlunadotdev/lwsLandingDemo.png",
      linkUrl: "https://lunawebdev.com",
      repo: "https://github.com/oaluna/lunawebdevdotcom"
    }
  ];
  useEffect(() => {
    setInterval(() => {
      if (paused === false) {
        let newSlide =
          currentSlide === PROJECT_DATA.length - 1 ? 0 : currentSlide + 1;
        setCurrentSlide(newSlide);
        return newSlide;
      }
    }, 6000);
  }, []);

  const nextSlide = () => {
    let newSlide = currentSlide === PROJECT_DATA.length ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const prevSlide = () => {
    let newSlide = currentSlide <= 0 ? PROJECT_DATA.length : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  return (
    <div className="mt-8 mx-0 lg:ml-[25%]">
      <div className="w-full h-full md:max-w-4xl flex overflow-hidden relative">
        <i
          onClick={prevSlide}
          className="fa-solid fa-arrow-left absolute left-0 text-3xl inset-y-1/2 text-white cursor-pointer shadow-sm shadow-gray-900"
        />

        <Swipe onSwipeLeft={nextSlide} onSwipeRight={prevSlide}>
          {PROJECT_DATA.map((slide, index) => {
            return (
              <img
                src={slide.image}
                alt="This is a carousel slide"
                key={index}
                className={
                  index === currentSlide
                    ? "block w-full h-[450px] md:h-auto object-cover"
                    : "hidden"
                }
              />
            );
          })}
        </Swipe>

        <div className="absolute w-full flex justify-center bottom-0">
          {PROJECT_DATA.map((project, index) => {
            return (
              <div
                className={
                  index === currentSlide
                    ? "h-2 w-2 bg-blue-700 rounded-full mx-2 mb-2 cursor-pointer"
                    : "h-2 w-2 bg-white rounded-full mx-2 mb-2 cursor-pointer"
                }
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                }}
              ></div>
            );
          })}
        </div>

        <i
          onClick={nextSlide}
          className="fa-solid fa-arrow-right absolute right-0 text-3xl inset-y-1/2 text-white cursor-pointer"
        />
      </div>
    </div>
  );
}

export default ProjectCard;
