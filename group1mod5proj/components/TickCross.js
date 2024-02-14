import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const TickCross = ( {swipe} ) => {
  const handleLike = () => {
    // Implement your like functionality here
    console.log('Liked');
  };

  const handleDislike = () => {
    // Implement your dislike functionality here
    console.log('Disliked');
  };

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={() => swipe('left')}>
        <Text style={styles.buttonText}>❌</Text>
      </TouchableOpacity>
      <View style={styles.buttonSpace} />
      <TouchableOpacity style={styles.button} onPress={() => swipe('right')}>
        <Text style={styles.buttonText}>✔️</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    /*backgroundColor: 'blue',*/
    flexDirection: 'row',
    padding: 100,
  },
  button: {
    backgroundColor: '#FCB649',
    padding: 15,
    borderRadius: 50,
    elevation: 5,
  },
  buttonText: {
    fontSize: 24,
  },
  buttonSpace: {
    width: '60%',
  },
});

export default TickCross;
