import React, { createContext, useState } from "react";

// Create a context to store a value
export const ScoreContext = createContext();

// Create a provider for the context
export const ScoreContextProvider = ({ children }) => {
  const [score, setScore] = useState(1);

  return (
    <ScoreContext.Provider value={{ score, setScore }}>
      {children}
    </ScoreContext.Provider>
  );
};
