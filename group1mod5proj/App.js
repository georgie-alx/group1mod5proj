import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SavedMoviesProvider } from "./components/context/savedMovies";

// Routing
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./components/HomeScreen";
import Login from "./screens/Login";
import SavedMoviesScreen from "./components/SavedMoviesScreen";
import BrowsingScreen from "./components/BrowsingScreen.js";
import NavigationMenu from "./components/NavigationMenu";

const Stack = createStackNavigator();

const SavedMovies = () => {
  return (
    // Wrap your app with the SavedMoviesProvider

    <SavedMoviesProvider>
      <SavedMoviesScreen />
    </SavedMoviesProvider>
    )
}

export default function App() {
  // const isLoggedIn = true;
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          {!isLoggedIn ? (
            // Screens for not logged in users
            <Stack.Group>
              <Stack.Screen
                name="Login"
                component={Login}
                options={({ navigation }) => ({
                  headerShown: false, // Hide the navigation header
                })}
              />
            </Stack.Group>
          ) : (
            <Stack.Group screenOptions={{ headerShown: false }}>
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={({ navigation }) => ({
                  headerShown: false, // Hide the navigation header
                })}
              />
              <Stack.Screen
                name="NavMenu"
                component={NavigationMenu}
                // options={{ headerShown: false }}
                options={({ navigation }) => ({
                  headerShown: false, // Hide the navigation header
                })}
              />
              <Stack.Screen
                name="SavedMoviesScreen"
                component={SavedMovies}
                // options={{ headerShown: false }}
                options={({ navigation }) => ({
                  headerShown: false, // Hide the navigation header
                })}
              />
              <Stack.Screen
                name="BrowsingScreen"
                component={BrowsingScreen}
                // options={{ headerShown: false }}
                options={({ navigation }) => ({
                  headerShown: false, // Hide the navigation header
                })}
              />
            </Stack.Group>
          )}
        </Stack.Navigator>
        { isLoggedIn && (<NavigationMenu setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />)}
      </NavigationContainer>
    </>
  );
};