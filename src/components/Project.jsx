import React, { useContext } from "react";
import { ScoreContext } from "../context/scoreContext";
import TextColorTransition from "../helpers/TextColorTransition";

const Project = ({ title, url, startAt, endAt }) => {
  const { score } = useContext(ScoreContext);
  const isHidden = score > startAt && score < endAt ? false : true;
  console.log(isHidden);

  return (
    <>
      <div
        className={`relative p-2 border border-white sm:w-full md:w-[20%] rounded-[5px]  text-center mx-auto mt-[100px ] fade ${
          isHidden ? "out" : "in"
        } `}
      >
        <a href={url}>
          <TextColorTransition
            visibleAt={startAt}
            initialColor="gray"
            finalColor="white"
          >
            {title}
          </TextColorTransition>
        </a>
      </div>
    </>
  );
};

export default Project;
