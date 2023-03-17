import React, { useContext, useState } from "react";
import { ScoreContext } from "../context/scoreContext";
import Typewriter from "../helpers/Typewriter";

const Intro = () => {
  const { score, setScore } = useContext(ScoreContext);
  const isHidden = score < 100 ? false : true;

  return (
    <div className={`centered  fade    ${isHidden ? "out" : "in"} `}>
      <div className="text-2xl   rounded-[1rem] mt-4 font-medium text-center   ease-out duration-300 ">
        <h2 className="text-2xl my-4 p-2 bg-green-400 rounded-[1rem] font-medium text-center transform transition-transform duration-300 transition ease-in-out">
          <Typewriter text="Run to Explore." />
        </h2>
      </div>
    </div>
  );
};

export default Intro;
