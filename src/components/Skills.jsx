import React from "react";
// import image5 from "../assets/Screensht (2).png";
import html from "../assets/html-logo.png";
import css from "../assets/css.jpg";
import javascript from "../assets/js-logo.png";
import react from "../assets/react-logo.png";
import tailwind from "../assets/tailwind.png";
import bootstrap from "../assets/bootstraplogo.png";
import nodejs from "../assets/nodejs-logo.png";
import expressjs from "../assets/express-js.logo.png";
import git from "../assets/git-logo.png";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      // proficiency: "Intermediate",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      // proficiency: "Intermediate",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "Javascript",
      // proficiency: "Basic",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "React",
      // proficiency: "Intermediate",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      // proficiency: "Basic",
      style: "shadow-sky-400",
    },

    {
      id: 6,
      src: nodejs,
      title: "Node Js",
      // proficiency: "Basic",
      style: "shadow-green-500",
    },
    {
      id: 7,
      src: expressjs,
      title: "Express Js",
      // proficiency: "Basic",
      style: "shadow-white",
    },
    {
      id: 8,
      src: git,
      title: "Git",
      // proficiency: "Basic",
      style: "shadow-orange-500",
    },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full px-6 py-24 sm:py-32 lg:px-8"
    >
      <div className="max-w-screen-lg pt-6 p-4 mx-auto flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">
            These are the technical and soft skills we have
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, proficiency, style }) => (
            <div
              key={id}
              className={`shadow-md duration-200 hover:scale-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20  mx-auto"></img>
              <p className="mt-4">{title}</p>
              <p className="mt-4">{proficiency}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
