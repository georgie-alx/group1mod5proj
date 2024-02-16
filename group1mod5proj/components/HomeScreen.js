import React from "react";
import { Button, View, Text } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Splash Home Screen Placeholder</Text>
      <Button
        title="Go to SavedMoviesScreen"
        onPress={() => navigation.navigate("SavedMoviesScreen")}
      />
      <Button
        title="Go to BrowsingScreen"
        onPress={() => navigation.navigate("BrowsingScreen", { genreSelected: ["Sci-Fi", "Romance", "Fantasy"]},)}
      />
    </View>
  );
}