import React from "react";

const USP = () => {
  return (
    <div className="max-w-xxl mx-auto lg:px-32 md:px-14 px-5 mt-14">
      <div className="md:grid grid-cols-2 flex flex-col-reverse gap-5 xl:h-97 h-full  items-start bg-white md:p-10 p-5 rounded-lg shadow">
        <div className="h-full flex items-center">
          <div className="flex flex-col justify-between lg:p-4 pt-0 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              UCP
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              What distinguishes us is our refusal to limit ourselves to a
              single industry or item. We thrive on the challenge of working
              with all commodities across a wide range of businesses at Jamil
              Ahmed.
            </p>
            <p className="md:mb-3 mb-0 font-normal text-gray-700 dark:text-gray-400">
              Our guarantee is straightforward: we will always be ready to offer
              any requested goods, regardless of their position on the globe
              map.
            </p>
          </div>
        </div>
        <div className="xl:block hidden ">
          <div className="flex justify-center">
            <img
              className="object-cover w-60  rounded-t-lg "
              src="https://img.freepik.com/premium-photo/transportation-logistics_37416-165.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1700870400&semt=ais"
              alt=""
            />
          </div>
          <div className="flex justify-start w-60 h-52 -mt-3 ">
            <img
              className="object-cover  w-full rounded-t-lg z-10"
              src="https://img.freepik.com/premium-photo/transportation-logistics_37416-165.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1700870400&semt=ais"
              alt=""
            />
          </div>
          <div className="flex justify-start w-60 -mt-48 ml-62">
            <img
              className="object-cover  w-full rounded-t-lg "
              src="https://img.freepik.com/premium-photo/transportation-logistics_37416-165.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1700870400&semt=ais"
              alt=""
            />
          </div>
        </div>
        <div className="xl:hidden block ">
          <div className="flex justify-center">
            <img
              className="object-cover  rounded-t-lg "
              src="https://img.freepik.com/premium-photo/transportation-logistics_37416-165.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1700870400&semt=ais"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default USP;
