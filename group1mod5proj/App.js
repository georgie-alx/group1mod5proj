import React from 'react';
import { StyleSheet, View } from 'react-native';
import DragScreenSelection from './components/DragScreenSelection';

export default function App() {
  return (
    <View style={styles.container}>
      <DragScreenSelection />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
