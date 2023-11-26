import React from "react";

const Characteristics = () => {
  return (
    <div className="max-w-xxl mx-auto lg:px-32 md:px-14 px-2 mt-14">
      <div className="bg-white md:p-10 py-5 px-3 rounded-lg shadow">
        <h1 className="md:text-4xl text-3xl text-black font-bold text-center md:mt-6 mt-0">
          Our Distinctive Characteristics
        </h1>
        <div className=" grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 md:mt-16 md:mb-10 my-10">
          <div className="md:p-6 py-4 px-3 bg-purple-700 bg-gradient-to-r hover:from-purple-800 hover:to-pink-500   gap-5 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <div>
              <h5 className="mb-2 flex gap-4 justify-between text-lg font-semibold tracking-tight text-white">
                Excellence in Strategic Sourcing
              </h5>
              <p className="mb-3 font-normal text-gray-50">
                We take pride in our ability to source high-quality commodities
                from reliable domestic suppliers, guaranteeing the foundation of
                dependability and excellence in every transaction.
              </p>
            </div>
          </div>
          <div className="md:p-6 py-4 px-3 bg-purple-700 bg-gradient-to-r hover:from-purple-800 hover:to-pink-500  flex gap-5 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <div>
              <h5 className="mb-2 flex gap-4 justify-between text-lg font-semibold tracking-tight text-white">
                Market Knowledge
              </h5>
              <p className="mb-3 font-normal text-gray-50">
                Our in-depth market analyses enable us to accurately predict
                foreign market demands and trends, positioning us as a
                forerunner in adapting to changing trade scenarios.
              </p>
            </div>
          </div>
          <div className="md:p-6 py-4 px-3 bg-purple-700 bg-gradient-to-r hover:from-purple-800 hover:to-pink-500 gap-5 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <div>
              <h5 className="mb-2 flex gap-4 justify-between text-lg font-semibold tracking-tight text-white">
                Extreme Quality Control
              </h5>
              <p className="mb-3 font-normal text-gray-50">
                Before embarking on its journey across borders, each product is
                subjected to meticulous scrutiny and rigorous quality checks,
                exceeding industry standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Characteristics;
