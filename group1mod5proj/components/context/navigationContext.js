import React, { createContext, useContext, useState, useEffect } from "react";

// Create a context for saved movies
const NavigationContext = createContext();

// Custom hook to use the NavigationContext
export const useNaviContext = () => {
  return useContext(NavigationContext);
};

export const NaviContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  // Set the value with these props
  const contextValue = {
    setIsLoggedIn,
    isLoggedIn,
  };

  return (
    // Provide the NavigationContext at the top level of your component tree
    <NavigationContext.Provider value={contextValue}>
      {children}
    </NavigationContext.Provider>
  );
};
