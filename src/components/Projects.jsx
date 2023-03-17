import React, { useContext } from "react";
import { ScoreContext } from "../context/scoreContext";
import TextColorTransition from "../helpers/TextColorTransition";
import Typewriter from "../helpers/Typewriter";
import Project from "./Project";

const Projects = () => {
  const { score } = useContext(ScoreContext);
  const isHidden = score > 2200 && score < 2800 ? false : true;
  const projectsData = [
    { title: "Social Media", url: "", startAt: 3500, endAt: 5500 },
    { title: "Chess", url: "", startAt: 4000, endAt: 5500 },
    { title: "Ecommerce", url: "", startAt: 4500, endAt: 5500 },
    { title: "CMS", url: "", startAt: 5000, endAt: 5500 },
  ];

  return (
    <>
      <div className={`centered  fade ${isHidden ? "out" : "in"} `}>
        <h2 className="text-2xl my-4 p-2 bg-green-400 rounded-[1rem] font-medium text-center transform transition-transform duration-300 transition ease-in-out">
          <Typewriter text="What I've done ?" />
        </h2>
        <div className="text-center">
          <TextColorTransition
            visibleAt={2200}
            initialColor="gray"
            finalColor="white"
          >
            Some projects I've done so far :
          </TextColorTransition>
        </div>
      </div>
      {projectsData.map((project, index) => {
        return (
          <Project
            title={project.title}
            url={project.url}
            startAt={project.startAt}
            endAt={project.endAt}
          ></Project>
        );
      })}
    </>
  );
};

export default Projects;
