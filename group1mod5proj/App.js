import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

// Routing
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./components/HomeScreen";
import Login from "./screens/Login";
import SavedMoviesScreen from "./components/SavedMoviesScreen";
import BrowsingScreen from "./components/BrowsingScreen.js";
import NavigationMenu from "./components/NavigationMenu";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={({ navigation }) => ({
              headerShown: false, // Hide the navigation header
            })}
          />
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
        </Stack.Navigator>
        <NavigationMenu />
      </NavigationContainer>
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
