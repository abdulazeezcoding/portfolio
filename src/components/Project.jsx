import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import movieapp from "../assets/movie app.png";
import freshmarket from "../assets/freshmarket.png";

import abochi from "../assets/abochi-screen.png";


const Project = () => {
  return (
    <>
      <div
        name="project"
        className="bg-gradient-to-b from-black to-gray-800 w-full px-6 py-24 my-auto sm:py-32 lg:px-8 text-white"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Projects
            </p>
            {/* <p className="py-6">Check out some of my work right here</p> */}
          </div>

          <div className="grid grid-cols-1 pb-10 md:grid-cols-2 gap-10 mx-auto w- ">
            <div className="mb-4 lg:mb-0 p-4 lg:p-0 w-full md:w-4/7  rounded block border-4 border-gray-500">
              <img
                src={abochi}
                className="rounded-md object-cover w-full h-64"
              />

              <h1 className="my-5 text-4xl font-bold pl-10 leading-tight">
                Meat Ordering App
              </h1>

              <div className="flex justify-between pb-9">
                <a
                  href="https://github.com/abdulazeezcoding/landing"
                  target="_blank"
                  className="inline-block px-6 py-3 mt-2 rounded-md bg-gray-700 text-gray-100 ml-3 "
                >
                  <FaGithub size={30} className="ml-1 flex flex-col-2" /> Repo
                </a>
                <a
                  href="https://landing-pied-six.vercel.app/"
                  target="_blank"
                  className="inline-block px-6 py-3 mt-2 rounded-md bg-gray-700 text-gray-100 mr-3"
                >
                  <FaExternalLinkAlt size={30} /> Demo
                </a>
              </div>
            </div>
            <div className="mb-4 lg:mb-0 p-4 lg:p-0 w-full md:w-4/7  rounded block border-4 border-gray-500">
              <img
                src={freshmarket}
                className="rounded-md object-cover w-full h-64"
              />

              <h1 className="my-5 ml-8 text-4xl font-bold leading-tight">
                  Fresh Market Dashboard
              </h1>

              <div className="flex justify-between pb-9">
                <a
                  href="https://github.com/abdulazeezcoding/FreshMarketFrontend"
                  target="_blank"
                  className="inline-block px-6 py-3 mt-2 rounded-md bg-gray-700 text-gray-100 ml-3 "
                >
                  <FaGithub /> Repo
                </a>
                <a
                  href="https://fresh-market-frontend.vercel.app/"
                  className="inline-block px-6 py-3 mt-2 rounded-md bg-gray-700 text-gray-100 mr-3"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
            <div className="mb-4 lg:mb-0 p-4 lg:p-0 w-full md:w-4/7  rounded block border-4 border-gray-500">
              <img
                src={movieapp}
                className="rounded-md object-cover w-full h-64"
              />

              <h1 className="my-5 ml-8 text-4xl font-bold leading-tight">
                Movie App
              </h1>

              <div className="flex justify-between pb-9">
                <a
                  href="https://github.com/Ruby-Alpha/Ruby-Movies-App"
                  target="_blank"
                  className="inline-block px-6 py-3 mt-2 rounded-md bg-gray-700 text-gray-100 ml-3 "
                >
                  <FaGithub /> Repo
                </a>
                <a
                  href="https://movie-app-blue-alpha.vercel.app/"
                  target="_blank"
                  className="inline-block px-6 py-3 mt-2 rounded-md bg-gray-700 text-gray-100 mr-3"
                >
                  <FaExternalLinkAlt />
                  Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
