import React, { useState, useEffect } from "react";

function BlogCard() {
  const [mediumData, setMediumData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@oaluna`
    )
      .then((res) => res.json())
      .then((response) => {
        setMediumData(response.items);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const finalData = mediumData.slice(1, 4);

  return (
    <div
      id="container"
      className="w-full px-5 py-6 mx-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 lg:max-w-6xl"
    >
      <div
        key="blog-card-wrapper"
        className="flex flex-col lg:flex-row pb-10 sm:px-5 gap-x-8 gap-y-16"
      >
        {isLoading && (
          <p
            style={{
              position: "relative",
              marginTop: "45vh",
              marginLeft: "42vw",
              zIndex: 100,
              fontSize: "40px"
            }}
          >
            Loading...
          </p>
        )}
        {finalData.map((article) => (
          <div
            key={article.guid}
            style={{ backdropFilter: "blur(32px)" }}
            className="relative flex flex-col items-start col-span-12 space-y-1 backdrop-opacity-10 backdrop-invert bg-gradient-to-tr from-white/[0.11] to-white/[0.06] sm:col-span-4 xl:col-span-4 shadow-lg shadow-gray-900/25 rounded-xl"
          >
            <span className="bg-gradient-to-tr from-indigo-800 to-indigo-500 w-full h-56 mb-2 overflow-hidden rounded-lg shadow-md">
              <a href={article.link} className="block">
                <img
                  className="object-cover w-full overflow-hidden"
                  alt="card"
                  src={article.thumbnail}
                />
              </a>
            </span>

            <div className="relative px-2 pt-5 xs:p-0 min-h-48 flex flex-col items-start justify-end">
              <h2 className="text-md font-bold sm:text-xl md:text-2xl h-32 tracking-none">
                <a
                  className="text-gray-900 hover:text-blue-500"
                  href={article.link}
                >
                  {article.title}
                </a>
              </h2>

              <p className="pt-2 text-xs font-medium text-gray-700">
                <a href={article.link} className="mr-1 underline">
                  {article.author}
                </a>{" "}
                ·<span className="mx-1">{article.pubDate}</span> ·
                <span className="flex flex-row flex-wrap w-full justify-start items-end sm:mt-full">
                  {article.categories.map((category) => (
                    <span className="mx-0 bg-blue-900 text-gray-100 flex flex-col no-wrap items-center h-full p-2 leading-none rounded-full text-xs font-thin uppercase inline-block text-center w-auto mr-2 mt-2 mb-1">
                      <small>{category}</small>
                    </span>
                  ))}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogCard;
