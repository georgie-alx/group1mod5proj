import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SavedMoviesProvider } from "./components/context/savedMovies";

// Routing
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Login, Signup, Welcome } from "./screens";

import HomeScreen from "./components/HomeScreen";
import SavedMoviesScreen from "./components/SavedMoviesScreen";
import BrowsingScreen from "./components/BrowsingScreen.js";
import NavigationMenu from "./components/NavigationMenu";

const Stack = createStackNavigator();

export default function App() {
  // const isLoggedIn = true;
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);

  return (
    <>
      <SavedMoviesProvider>
        <NavigationContainer>
          <Stack.Navigator>
            {!isLoggedIn ? (
              // Screens for not logged in users
              <Stack.Group>
                <Stack.Screen
                  name="Welcome"
                  component={Welcome}
                  options={({ navigation }) => ({
                    headerShown: false, // Hide the navigation header
                  })}
                />
                <Stack.Screen
                  name="Login"
                  component={Login}
                  options={({ navigation }) => ({
                    headerShown: false, // Hide the navigation header
                  })}
                />
                <Stack.Screen
                  name="Signup"
                  component={Signup}
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
                  component={SavedMoviesScreen}
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
          {isLoggedIn && (
            <NavigationMenu
              setIsLoggedIn={setIsLoggedIn}
              isLoggedIn={isLoggedIn}
            />
          )}
        </NavigationContainer>
      </SavedMoviesProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
