import React from "react";
import About from "./components/About";
import Background from "./components/Background";
import Bg from "./components/Bg";
import Contact from "./components/Contact";
import Intro from "./components/Intro";
import Project from "./components/Project";
import Projects from "./components/Projects";
import { ScoreContextProvider } from "./context/scoreContext";

const App = () => {
  return (
    <>
      <ScoreContextProvider>
        <Background />
        {/* <Bg /> */}
        <Intro />
        <About />
        <Projects />
        <Contact />
      </ScoreContextProvider>
    </>
  );
};

export default App;
