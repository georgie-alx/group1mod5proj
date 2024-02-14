import { Text, View } from "react-native";
import React, { Component } from "react";

export default function BrowsingScreen({route}) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>BrowsingScreen Placeholder</Text>

      {/* routing params passed here. please use it to filter your browsing page*/}
      <Text>{JSON.stringify(route.params?.genreSelected)}</Text> 
      <Text>{route.params?.genreSelected}</Text>
    </View>
  );
}
