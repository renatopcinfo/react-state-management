import React, { createContext, useState, useContext } from 'react';

const ToggleContext = createContext();

export const ToggleProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle((prevState) => !prevState);

  return (
    <ToggleContext.Provider value={{ toggle, handleToggle }}>
      {children}
    </ToggleContext.Provider>
  );
};

export const useToggle = () => {
  const context = useContext(ToggleContext);

  if (!context) return null;

  return context;
}




