import React from "react";
const Experience = () => {
  return (
    <div
      name="experience"
      className="w-full bg-gradient-to-b pb-8 from-gray-800 to-black text-white px-6 py-48 sm:py-5 lg:px-8"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full my-20">
      <p className="text-4xl font-bold inline border-gray-500">
              Experience
            </p>
        <div className="grid grid-cols-1  md:grid-cols-2 gap-5 mx-auto">
          <div className="bg-black shadow-md shadow-sky-500 duration-200 hover:scale-500  rounded-lg p-3 m-4">
            <p className="font-bold text-sm text-white">Feb 2024 - April 2024</p>
            <p className="font-bold text-2xl text-white">
              Web Development
            </p>
            <p className="font-bold text-lg text-white">MEST AFRICA</p>
            <p className="text-sm text-white ">
             Studying frontend and backend web development as well as soft skills development
            </p>
          </div>
          <div className="bg-black shadow-md shadow-sky-500 duration-200 hover:scale-500 rounded-lg p-3 m-4 ">
            <p className="font-bold text-sm text-white">Feb 2024 - Present</p>
            <p className="font-bold text-2xl text-white">
              BSc Information Technology
            </p>
            <p className="font-bold text-lg text-white">University of Ghana</p>
            <p className="text-sm text-white ">
              Did a Bachelors Degree in Information Technology at the University of Ghana
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
