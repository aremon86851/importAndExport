import React from "react";

const Advantage = () => {
  return (
    <div className="max-w-xxl mx-auto lg:px-32 md:px-14 px-2 mt-14">
      <div className="bg-white md:p-10 py-5 px-3 rounded-lg shadow">
        <h1 className="md:text-4xl text-3xl text-black font-bold text-center md:mt-6 mt-0">
          Advantages
        </h1>
        <div className="grid sm:grid-cols-2 sm:gap-0 gap-5 grid-cols-1 md:mt-16 md:mb-10 my-10">
          <div className="md:p-6 py-4 px-3 bg-purple-700 gap-5 rounded-tl-lg rounded-bl-lg  shadow-lg">
            <div>
              <h5 className=" flex gap-4 justify-between text-lg font-semibold tracking-tight text-white mb-3">
                Global Network
              </h5>
              <p className="mb-3 font-normal text-gray-50">
                We facilitate trade efficiently, regardless of destination, by
                leveraging a vast network of global partners and connections.
              </p>
              <button
                type="button"
                className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 focus:z-10 focus:ring-4 focus:ring-gray-200 hover:bg-purple-700 hover:text-white mt-5"
              >
                Contact us
              </button>
            </div>
          </div>
          <div className="md:p-6 py-4 px-3 sm:bg-purple-900 bg-purple-700 gap-5 rounded-tr-lg rounded-br-lg shadow-lg">
            <div>
              <h5 className=" flex gap-4 justify-between text-lg font-semibold tracking-tight text-white mb-3">
                Extensive Industry Experience
              </h5>
              <p className="mb-3 font-normal text-gray-50">
                Our team is made up of import-export experts who are always up
                to date on the latest trends and changes.
              </p>
              <button
                type="button"
                className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 focus:z-10 focus:ring-4 focus:ring-gray-200 hover:bg-purple-700 hover:text-white mt-5"
              >
                Contact us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantage;
