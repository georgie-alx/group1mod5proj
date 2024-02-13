import React from "react";
import SavedMoviesScreen from "./components/SavedMoviesScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { SavedMoviesProvider } from "./components/context/savedMovies";

const App = () => {
  return (
    // Wrap your app with the SavedMoviesProvider

    <SavedMoviesProvider>
      <SavedMoviesScreen />
    </SavedMoviesProvider>
  );
};

export default App;
