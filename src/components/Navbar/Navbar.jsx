import React from "react";

function Navbar() {
  return (
    <>
      <div className="bg-black p-4 w-full flex justify-center items-center">
        <p className="text-white font-inter text-2xl font-bold">
          Redux Toolkit Time
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-around items-center p-4">
        <div className="row flex flex-col md:flex-row items-center">
          <div className="col mb-4 md:mb-0 md:mr-4">
            <img
              className="h-28 w-full md:w-auto"
              src="../assets/logo.webp"
              alt="store"
              width={80}
            />
          </div>
          <div className="col text-center">
            <p className="font-inter text-base font-medium tracking-normal leading-none">
              Wish List
            </p>
          </div>
        </div>
      </div>
      <div className="bg-black p-4 w-full flex flex-col md:flex-row items-center justify-center mx-auto">
        <div className="row flex flex-col md:flex-row items-center">
          <div className="col mb-2 md:mb-0 md:mr-4">
            <p className="text-white font-inter text-base font-medium">
              50% OFF
            </p>
          </div>
          <div className="col mb-2 md:mb-0 md:mr-4">
            <p className="text-white font-inter text-base font-medium">
              Free shipping and return
            </p>
          </div>
          <div className="col">
            <p className="text-white font-inter text-base font-medium">
              Different payment methods
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
