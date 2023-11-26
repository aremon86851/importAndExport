import React from "react";

const QualityControl = () => {
  return (
    <div>
      {/* Hero Component start */}
      <div className="bg-cover bg-center lg:py-40 py-24 bg-no-repeat hero-bg">
        <div>
          {/* Hero Content */}
          <div className="max-w-xxl mx-auto lg:px-32 md:px-14 px-5 ">
            <div className="grid md:grid-cols-4 grid-cols-1">
              <div className="z-10 text-left md:col-span-3 text-white">
                <h1 className="md:text-4xl text-3xl text-white font-bold mb-9">
                  Quality Control
                </h1>
                <div className="border-l-8 rounded-md border-purple-700 pl-7 py-3">
                  <p className="mb-2 text-lg leading-6">
                    Quality assurance is not just a metric; it is the foundation
                    of our daily operations. We meticulously follow stringent
                    government protocols and industry standards, which are
                    supplemented by extensive testing by our dedicated quality
                    control department.
                  </p>
                  <p className="mb-2 text-lg">
                    This meticulous process ensures that only the best, most
                    dependable products reach our global clients.
                  </p>
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

export default QualityControl;
