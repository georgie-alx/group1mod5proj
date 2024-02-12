import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const TickCross = () => {
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
      <TouchableOpacity onPress={handleDislike} style={styles.button}>
        <Text style={styles.buttonText}>❌</Text>
      </TouchableOpacity>
      <View style={styles.buttonSpace} />
      <TouchableOpacity onPress={handleLike} style={styles.button}>
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
    backgroundColor: '#fff',
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
