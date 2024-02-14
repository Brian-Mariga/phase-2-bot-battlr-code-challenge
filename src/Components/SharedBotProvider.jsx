import React, { createContext, useContext, useState } from "react";

const SharedBotContext = createContext();

export const useSharedBot = () => {
  return useContext(SharedBotContext);
};

export const SharedBotProvider = ({ children }) => {
  const [army, setArmy] = useState([]);

  const addToArmy = (bot) => {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const removeFromArmy = (id) => {
    setArmy(army.filter((bot) => bot.id !== id));
  };

  return (
    <SharedBotContext.Provider value={{ army, addToArmy, removeFromArmy }}>
      {children}
    </SharedBotContext.Provider>
  );
};