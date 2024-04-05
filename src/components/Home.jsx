import React from "react";
import image1 from "../assets/coder-dev.png";
import { MdCloudDownload } from "react-icons/md";
const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col h-full justify-center pt-2">
          <h2 className="text-4xl lg:text-7xl font-bold text-white pt-2">
            Abdul-Aziz Mohammed
          </h2>
          <p className="text-gray-500 text-4xl py-4 max-w-md">
          Providing software solutions for your needs
          </p>
          <div>
            <a href="/Abdul-Azeez resume.pdf" target="_blank" download={true}>
              <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                Download CV
                <span className="group-hover:rotate-360 duration-300">
                  <MdCloudDownload size={25} className="ml-1" />
                </span>
              </button>
            </a>
          </div>
        </div>
        <div>
          <img
            src={image1}
            alt=" my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
