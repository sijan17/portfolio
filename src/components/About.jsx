import React, { useContext } from "react";
import { ScoreContext } from "../context/scoreContext";
import TextColorTransition from "../helpers/TextColorTransition";
import Typewriter from "../helpers/Typewriter";

const About = () => {
  const { score } = useContext(ScoreContext);
  const isHidden = score > 600 && score < 1600 ? false : true;
  return (
    <div className={`centered  fade ${isHidden ? "out" : "in"} `}>
      <h2 className="text-2xl my-4 p-2 bg-green-400 rounded-[1rem] font-medium text-center transform transition-transform duration-300 transition ease-in-out">
        <Typewriter text=" Who ?" />
      </h2>
      <div className="text-center">
        <TextColorTransition
          visibleAt={600}
          initialColor="gray"
          finalColor="white"
        >
          Student with strong interest on web development.
        </TextColorTransition>
      </div>
    </div>
  );
};

export default About;
