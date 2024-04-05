import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b pb-8 from-gray-800 to-black text-white px-6 py-24 sm:py-5 lg:px-8"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About me
          </p>
        </div>
        <p className="text-xl mt-6 ">
        Software Developer with hands-on experience in web application development.<br /><br />Currently
expanding expertise through focused study in web development technologies as well as collaboration in teams
to develop and deploy software projects.<br /><br />Open to collaboration on various web projects around the globe.
        </p>
      </div>
    </div>
  );
};

export default About;
