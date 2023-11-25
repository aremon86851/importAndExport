import React from "react";

const Hero = () => {
  return (
    <div>
      {/* Hero Component start */}
      <div className="bg-cover bg-center lg:py-40 py-24 bg-no-repeat hero-bg">
        <div>
          {/* Hero Content */}
          <div className="max-w-xxl mx-auto lg:px-32 md:px-14 px-5 ">
            <div className="grid md:grid-cols-3 grid-cols-1">
              <div className="z-10 text-left md:col-span-2 text-white">
                {/* Title */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight font-bold mb-2">
                  Welcome to Jamil Ahmed's "Deal to Lead"
                </h1>
                <p className="mb-9">
                  In the fast-paced world of global trade, Jamil Ahmed stands
                  out as a vital participant in import and export operations,
                  specialized in the global exchange of a wide range of goods.
                  We have created a strong and efficient system based on precise
                  sourcing techniques, extensive market analysis, and stringent
                  quality control, assuring the smooth flow of critical
                  commodities across international borders.
                </p>
                {/* Buttons */}
                <div className="space-x-4">
                  <button
                    type="button"
                    className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    Learn more
                  </button>

                  <button
                    type="button"
                    className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                  >
                    Contact us
                  </button>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      {/* Hero component end */}
    </div>
  );
};

export default Hero;
