// BrowsingScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Synopsis from './Synopsis';

const BrowsingScreen = () => {
    title = 'The Shawshank Redemption';
    year = '1994';

  return (
    <View style={styles.container}>
      {/*<Trailer /> Lauren*/}
      <Text>{title} ({year})</Text>
      {/*<TickCross /> Elly*/}
      <Synopsis genre={'genre name'} plot={'plot bla blah'} cast={'actor 1, actor 2'}/>
      {/*<Menu /> Sing Hui's*/}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default BrowsingScreen;
