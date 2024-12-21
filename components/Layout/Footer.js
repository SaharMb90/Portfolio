import React from "react";


const Footer = () => {

  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-12  gap-4">
        <div className="col-start-1 col-end-12 flex flex-col items-center ">

          <p className="mb-4 pt-10">
            Github & LinkedIn Links
          </p>
          <div className="flex  mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">

              <a href="https://www.linkedin.com/in/sahar-mirzabaki/" target='blank'><img src="/linkedin.png" className="max-w-8 max-h-8" /></a>
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">

              <a href="https://github.com/SaharMb90" target='blank' >
                <img src="/social_144.png" className="max-w-8 max-h-8" /></a>
            </div>
          </div>

          <p className="text-gray-400">©{new Date().getFullYear()} -Sahar Mirzabaki </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
