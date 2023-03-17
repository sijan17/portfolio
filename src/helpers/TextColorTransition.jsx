import React, { useContext, useEffect, useRef, useState } from "react";
import { ScoreContext } from "../context/scoreContext";

const TextColorTransition = ({
  initialColor = "white",
  finalColor = "purple",
  visibleAt = 0,
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const { score } = useContext(ScoreContext);

  useEffect(() => {
    if (visibleAt == score) {
      setIsVisible(true);
    }
  }, [score]);

  const renderLetters = () => {
    const letters = children.split("");

    return letters.map((letter, index) => (
      <span
        key={index}
        style={{
          color: isVisible ? finalColor : initialColor,
          transition: "color 0.1s ease " + index * 0.1 + "s",
        }}
      >
        {letter}
      </span>
    ));
  };

  return <div>{renderLetters()}</div>;
};

export default TextColorTransition;
