// Synopsis.js
import React from 'react';
import { View, Text } from 'react-native';

function Synopsis( { genre, plot, cast } ){
  return(
    <View>
        <Text>{genre}</Text>
        <Text>{plot}</Text>
        <Text>{cast}</Text>
    </View>
  );
}

export default Synopsis;