import React from "react";

const ServicedIndustries = () => {
  return (
    <div className="max-w-xxl mx-auto lg:px-32 md:px-14 px-2 my-14">
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
            Serviced Industries
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Our reach extends across a wide range of sectors. Our adaptive
            strategy caters to the individual demands of each sector, from
            agricultural, raw materials, and industrial supplies to delicate
            electrical and technology components.
          </p>
          <p className="md:mb-3 mb-0 font-normal text-gray-700 dark:text-gray-400">
            Our goal is to not just meet, but to exceed expectations,
            positioning ourselves as the one-stop shop for all of your
            specifications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicedIndustries;
