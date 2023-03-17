import React, { useContext, useState } from "react";
import { ScoreContext } from "../context/scoreContext";
import FadeInOut from "../helpers/FadeInOut";
import TextColorTransition from "../helpers/TextColorTransition";
import Typewriter from "../helpers/Typewriter";

const Contact = () => {
  const { score, setScore } = useContext(ScoreContext);
  const isTitleHidden = score > 6200 && score < 7500 ? false : true;
  const isMailHidden = score > 6600 && score < 7500 ? false : true;
  const isTwitterHidden = score > 7000 && score < 75000 ? false : true;

  const isDangerHidden = score > 8000 ? false : true;

  return (
    <>
      <div className={`centered  fade ${isTitleHidden ? "out" : "in"} `}>
        <h2 className="text-2xl my-4 p-2 bg-green-400 rounded-[1rem] font-medium text-center transform transition-transform duration-300 transition ease-in-out">
          <Typewriter text=" Get in touch" />
        </h2>
        <div className={`text-center fade ${isMailHidden ? "out" : "in"} `}>
          <TextColorTransition
            visibleAt={6200}
            initialColor="gray"
            finalColor="white"
          >
            paudelsijann@gmail.com
          </TextColorTransition>
        </div>
        <div className={`text-center fade ${isTwitterHidden ? "out" : "in"} `}>
          <TextColorTransition
            visibleAt={6600}
            initialColor="gray"
            finalColor="white"
          >
            twitter.com/s1j4n
          </TextColorTransition>
        </div>
      </div>

      <div className={`centered  fade ${isDangerHidden ? "out" : "in"} `}>
        <h2 className="text-2xl my-4 p-2 px-4 bg-red-600 rounded-[1rem] font-medium text-center transform transition-transform duration-300 transition ease-in-out">
          <Typewriter text="DANGER AHEAD !" />
        </h2>
      </div>
    </>
  );
};

export default Contact;
