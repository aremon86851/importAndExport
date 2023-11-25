import React from "react";

const Activities = () => {
  return (
    <div>
      <div className="max-w-xxl mx-auto lg:px-32 md:px-14 px-2 mt-14">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 lg:items-center items-start bg-white md:p-10 p-5 rounded-lg shadow">
          <div>
            <img
              className="object-cover w-full rounded-t-lg "
              src="https://img.freepik.com/premium-photo/transportation-logistics_37416-165.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1700870400&semt=ais"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-between lg:p-4 pt-0 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Activities
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Our operational performance is dependent on a number of
              interconnected operations. Our strategy entails obtaining
              materials from reliable domestic suppliers as well as doing
              significant market research to understand the needs and dynamics
              of global markets.
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              These insights enable us to negotiate the difficulties of
              international trade with ease, connecting producers and consumers
              across a wide range of industries.
            </p>
            <p className="md:mb-3 mb-0 font-normal text-gray-700 dark:text-gray-400">
              Our commitment to quality control is a pillar of our business.
              Before entering the global market, each product is rigorously
              tested to ensure that it meets or exceeds demanding industry
              requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
