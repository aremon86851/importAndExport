import React from "react";

const Activities = () => {
  return (
    <div>
      <div className="max-w-xxl mx-auto lg:px-32 md:px-14 px-5 mt-14">
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
              Fundamental Principles
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Jamil Ahmed is driven by a strong sense of honesty and ethics. Our
              interactions with clients and associates are built on
              transparency, honesty, and ethical procedures.
            </p>
            <p className="md:mb-3 mb-0 font-normal text-gray-700 dark:text-gray-400">
              Our continuous dedication to providing exceptional customer
              service and cultivating long-term relationships is balanced by our
              unwavering emphasis on maintaining tight quality controls,
              assuring excellence in every transaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
