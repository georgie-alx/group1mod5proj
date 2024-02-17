// Synopsis.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Synopsis({ genre, plot, cast }) {
  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <Text style={styles.detail}>
          <Text style={{ fontWeight: "bold" }}>Genre:</Text> {genre}
        </Text>
        <Text style={styles.detail}>
          <Text style={{ fontWeight: "bold" }}>Cast:</Text> {cast}
        </Text>
        <Text style={styles.detail}>
          <Text style={{ fontWeight: "bold" }}>Description:</Text> {plot}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FEE9C6",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 300,
    padding: 20,
    paddingTop: 50,
    paddingBottom: 50,
    borderRadius: 50,
  },
  detail: {
    fontSize: 20,
    marginBottom: 5,
  },
});

export default Synopsis;
