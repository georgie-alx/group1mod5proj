// Synopsis.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Synopsis( { genre, plot, cast } ){
  return(
    <View style={styles.container}>
        <Text style={styles.text}>Genre: {genre}</Text>
        <Text style={styles.text}>Plot: {plot}</Text>
        <Text style={styles.text}>Cast: {cast}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FCB649',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 300,
    paddingTop: 20,
    paddingBottom: 120,
    borderRadius: 50,
  },
  text: {
    margin: 10,
  },
});

export default Synopsis;