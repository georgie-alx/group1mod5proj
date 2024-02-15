import React, { createContext, useContext, useState } from "react";

// Create a context for saved movies
const NaviContext = createContext();

// Custom hook to use the NavigationContext
// export const useNaviContext = () => {
//   return useContext(NavigationContext);
// };

export const NaviProvider = ({ children }) => {
  // Login
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  // const isLoggedIn = true;

  // start of NavigationMenu.js actions
  const [open, setOpen] = React.useState(false);
  const [logoffVisible, setLogoffVisible] = React.useState(false);
  const [genreVisible, setGenreVisible] = React.useState(false);
  const toggleLogoffDialog = () => {
    setLogoffVisible(!logoffVisible);
  };
  const toggleGenreDialog = () => {
    setGenreVisible(!genreVisible);
  };

  // Genre selection
  const [checked, setChecked] = React.useState(["Comedy", "Romance", "Horror"]);
  const handleToggleCheckbox = (index) => {
    if (checked.includes(index)) {
      // Item already checked, remove it from the array
      setChecked(checked.filter((item) => item !== index));
    } else {
      // Item not checked, add it to the array
      setChecked([...checked, index]);
    }
  };
  // end of NavigationMenu.js actions

  // Set the value with these props
  const contextValue = {
    setIsLoggedIn,
    isLoggedIn,
    open,
    setOpen,
    logoffVisible,
    setLogoffVisible,
    genreVisible,
    setGenreVisible,
    toggleLogoffDialog,
    toggleGenreDialog,
    checked,
    setChecked,
    handleToggleCheckbox,
  };

  return (
    // Provide the NavigationContext at the top level of your component tree
    <NaviContext.Provider value={contextValue}>{children}</NaviContext.Provider>
  );
};

export default NaviContext;
