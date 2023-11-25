import React from "react";

const NavigateArea = () => {
  return (
    <div className="max-w-xxl mx-auto lg:px-32 md:px-14 px-2 lg:-mt-24 -mt-16">
      <div className="bg-white lg:p-10 sm:px-5 sm:py-5 p-4 shadow">
        <div className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
          {[0, 1, 2, 3].map((item) => (
            <>
              <div>
                <div
                  className="rounded-lg dark:bg-gray-800 dark:border-gray-700 lg:h-52 h-64 md: bg-cover"
                  style={{
                    backgroundImage:
                      'url("https://img.freepik.com/premium-photo/transportation-logistics_37416-165.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1700870400&semt=ais")',
                  }}
                >
                  <div className="flex items-end h-full">
                    <span className="bg-purple-700 rounded-bl-lg rounded-br-lg hover:bg-purple-800 px-4 h-10 w-full flex items-center justify-between">
                      Heellosss
                      <svg
                        className="w-4 h-4 text-white hover:text-gray-300 cursor-pointer dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 8 14"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                        />
                      </svg>
                    </span>
                  </div>
                  {/* <img
                    src="https://img.freepik.com/premium-photo/transportation-logistics_37416-165.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1700870400&semt=ais"
                    alt="i1"
                  /> */}
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavigateArea;
