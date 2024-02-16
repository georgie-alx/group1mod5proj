import React, { createContext, useContext, useState, useEffect } from "react";
import { MOCKDATA } from "../MockData";

// Create a context for saved movies
const SavedMoviesContext = createContext();

// Custom hook to use the SavedMoviesContext
export const useSavedMovies = () => {
  return useContext(SavedMoviesContext);
};

export const SavedMoviesProvider = ({ children }) => {
  // State to hold the list of saved movies
  const [savedMovies, setSavedMovies] = useState([]);

  // useEffect(() => {
  //   // Set saved movies with MOCKDATA when the component mounts
  //   setSavedMovies(MOCKDATA);
  // }, []);

  // Function to add a movie to the saved list
  const addMovie = (movie) => {
   // setSavedMovies([...savedMovies, movie]);
   setSavedMovies(prevSavedMovies => [...prevSavedMovies, movie]);
    console.log('addMovie:', savedMovies);
  };

  // Function to delete a movie from the saved list
  const deleteMovie = (movieId) => {
    const updatedMovies = savedMovies.filter((movie) => movie.id !== movieId);
    setSavedMovies(updatedMovies);
  };

  // Create an object containing the savedMovies array and the functions
  const contextValue = {
    savedMovies,
    addMovie,
    deleteMovie,
  };

  return (
    // Provide the SavedMoviesContext at the top level of your component tree
    <SavedMoviesContext.Provider value={contextValue}>
      {children}
    </SavedMoviesContext.Provider>
  );
};